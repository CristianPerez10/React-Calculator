import styled from 'styled-components';

export const Button = styled.button`
    background: white;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid #09f;
    margin: 0 1em;
    padding: 0.25em 1em;
    transition: all .3s ease;

    &:hover{
        background-color: green;
    }
`