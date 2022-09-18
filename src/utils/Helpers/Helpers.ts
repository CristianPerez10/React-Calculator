import { actionTypes } from '../../constants/enums/enums';
import { IAction, IState } from '../../constants/interfaces/Interfaces';

export const isNumber = (number:string) => /[0-9]+/.test(number)

export const reducer = (state: IState, action: IAction): IState => {
    switch(action.type){
        case actionTypes.OPERATION:
            if(["+", "-", "x", "÷"].includes(state.display.slice(-1))) return {...state, display: state.display.slice(0, -1) + action.payload }
            return {...state, display: state.display + action.payload }
        case actionTypes.EQUAL:
            return {...state, display:String(eval(state.display.replace("x", "*").replace("÷", "/")))}
        case actionTypes.CLEAN:
            return {...state, display:"0"}
        case actionTypes.NUMBER:
            if((state.display === "0" && action.payload === "0")) return state
            else if(state.display === "0") return {...state, display:action.payload}
            return {...state, display: state.display + action.payload}
        default:
            return {...state, display: "0"}
    }
}

export const testFunction = (a:number, b:number) => {
    return a + b
}