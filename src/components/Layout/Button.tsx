import { IKeyProps } from '@/constants/ButtonKeys'
import ButtonStyle from '@/styles/Layout/button.style'

interface IButtonProps extends IKeyProps{
    onClick: (e:any) => void
}

export const Button = ({hoverColor, color, equal, value, onClick}:IButtonProps) => {
    return <ButtonStyle 
            onClick={() => onClick(value)} 
            color={color} 
            equal={equal} 
            hoverColor={hoverColor}
        >
            {value}
        </ButtonStyle>
}