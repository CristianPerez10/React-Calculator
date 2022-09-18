import { IKeyProps } from "@/constants/interfaces/Interfaces"
import ButtonStyle from "./Button.styled"

interface IButtonProps extends IKeyProps{
    onClick: (e:any) => void
}

const Button = ({hoverColor, color, equal, value, onClick}:IButtonProps) => {
    return <ButtonStyle onClick={() => onClick(value)} color={color} equal={equal} hoverColor={hoverColor}>
            {value}
        </ButtonStyle>
}

export default Button