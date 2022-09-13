import { MainButtonInterface } from "./interfaces/button.interface"

export interface IKeyProps extends MainButtonInterface {
    value: string,
    type?: "operation" | "number" | "notation",
}

export const buttonKeys:Array<IKeyProps> = [ 
    { value: "AC", type: "operation", color:"#ff952b", hoverColor: "#633206"},
    { value: "%", type: "operation", color:"#ff952b", hoverColor: "#633206"},
    { value: "÷", type:"operation", color:"#ff952b", hoverColor: "#633206"},
    { value: "DEL", type: "operation", color:"#b30b02", hoverColor: "#6e0802"},
    { value: "7", type: "number", color:"#503cd1", hoverColor:"#140c44"},
    { value: "8", type: "number", color:"#503cd1", hoverColor:"#140c44"},
    { value: "9", type: "number", color:"#503cd1", hoverColor:"#140c44"},
    { value: "X", type:"operation", color:"#ff952b", hoverColor: "#633206"},
    { value: "4", type: "number", color:"#503cd1", hoverColor:"#140c44"},
    { value: "5", type: "number", color:"#503cd1", hoverColor:"#140c44"},
    { value: "6", type: "number", color:"#503cd1", hoverColor:"#140c44"},
    { value: "-", type:"operation", color:"#ff952b", hoverColor: "#633206"},
    { value: "1", type: "number", color:"#503cd1", hoverColor:"#140c44"},
    { value: "2", type: "number", color:"#503cd1", hoverColor:"#140c44"},
    { value: "3", type: "number", color:"#503cd1", hoverColor:"#140c44"},
    { value: "+", type:"operation", color:"#ff952b", hoverColor: "#633206"},
    { value: "0", type: "number", color:"#503cd1", hoverColor:"#140c44"},
    { value: ".", type:"notation", color:"#ff952b", hoverColor: "#633206"},
    { value: "=", type:"operation", color:"#ff952b", hoverColor: "#633206", equal:true}
]