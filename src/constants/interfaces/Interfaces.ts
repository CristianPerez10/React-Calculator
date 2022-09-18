import { actionTypes } from "../enums/enums";

export interface MainButtonInterface {
    color: string,
    hoverColor: string,
    equal?: boolean
}

export interface IKeyProps extends MainButtonInterface {
    value: string,
    type?: "operation" | "number" | "notation",
}

export interface IAction {
    type: actionTypes;
    payload: string;
}

export interface IState {
    display:string
}