import { MainButtonInterface } from '@/constants/interfaces/Interfaces';
import styled, {css} from 'styled-components';

const ButtonStyle = styled.button<MainButtonInterface>`
    background-color: ${props => props.color};
    border: none;
    font-size: 24px;
    color: rgb(255, 255, 255);
    font-weight: bold;
    cursor: pointer;
    border-radius: 10px;
    outline: none;
    transition: all .3s ease;
    &:hover{
        background-color: ${props => props.hoverColor};
    }

    ${({ equal }) => equal && css`
        grid-column: 3 / 5;
        background-color: rgb(243, 61, 29);
        &:hover {
            background-color: rgb(228, 39, 15);
        }
    `}
`
export default ButtonStyle;