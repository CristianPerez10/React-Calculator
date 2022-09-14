export const isNumber = (number:string) => {
    return /[0-9]+/.test(number)
}

interface IOperationProps{
    numberOne: number,
    numberTwo: number,
    operation: "+" | "-" | "X" | "÷" | null
}

export const operations = ({numberOne, numberTwo, operation}:IOperationProps) => {
    console.log(numberOne, numberTwo, operation)
    switch(operation){
        case "+":
            return String(numberOne + numberTwo);
        case "-":
            return String(numberOne - numberTwo);
        case "X":
            return String(numberOne - numberTwo);
        case "÷":
            if(numberTwo === 0) return "Division by zero error";
            return String(numberOne / numberTwo);
        default:
            return "Error making the operation"
    }
}

export interface CalculationSchema{
    total: any,
    next: any,
    operation: IOperationProps["operation"]
}

interface CalculationProps{
    state: CalculationSchema,
    value: string
}

export const calculation = ({state, value}:CalculationProps) => {
    // Clear the screen
    if(value === 'AC' || value === 'DEL') return { total: null, next:null, operation:null }

    // Handle numbers
    if(isNumber(value)){
        if (value === "0" && state.next === "0") return {...state, next: "0"};
    
        // Set the current operation
        if(state.operation) {
            if(state.next) return {...state, next: state.next + value}
            return {...state, next: value}
        }

        // In case there's no operation, sets the next value
        if(state.next) return {...state, next:(state.next === '0') ? value : state.next + value, total:null}

        return {...state, next: value, total: null}
    }

    // Handle the percentage value
    if(value === '%'){
        if(state.operation && state.next){
            console.log(state.operation, "operation")
            const result = operations({numberOne:parseFloat(state.total), numberTwo:parseFloat(state.next), operation:state.operation})
            return {
                total: (isNumber(result)) ? parseFloat(result) : result,
                next:null,
                operation:null
            }
        }
        if(state.next) return {...state, next:state.next*100}
        return {...state}
    }

    // Set decimal separator
    if(value === '.'){
        if(state.next) {
            if(state.next.includes(".")) {}
            return {...state, next: state.next + "."}
        }
        return {...state, next:".0"}
    }

    // Set result
    if(value === '='){
        if(state.next && state.operation) {
            return { 
                total: operations({numberOne:parseFloat(state.total), numberTwo:parseFloat(state.next), operation:state.operation}), 
                next: null, 
                operation: null 
            }
        }
    }

    // Set operation
    if(state.operation) return {
        total: operations({numberOne:parseFloat(state.total), numberTwo:parseFloat(state.next), operation:state.operation}),
        next: null,
        operation: value
    }

    if(!state.next) return { ...state, operation: value }
    return { total: state.next, next: null, operation: value }
}