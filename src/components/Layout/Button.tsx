import { useEffect, useState } from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
    display:flex;
    margin: 2vh 2vh;
    justify-content: center;
    background: ${props => props.theme.main};
    /* grid-column-start: 1; */
    /* grid-column-end: 3; */
`

const ButtonHtml = styled.button`
    position: absolute;
    cursor: pointer;
    border: 1px solid #09f;
    transition: all .3s ease;
    &:hover{
        background-color: green;
    }
`

export const Button:React.FC<any> = ({children}) => {

    return(
        <ButtonContainer theme={{main: "#9c9a9a"}}>
            <ButtonHtml>{children}</ButtonHtml>
        </ButtonContainer>
    )
}