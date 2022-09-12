import styled from 'styled-components';

export const Grid = styled.div`
    height: 70vh;
    text-align: center;
    background: #363535;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* grid-template-columns: 2fr 2fr 2fr; */
    grid-auto-rows: minmax(auto, auto);
    /* grid-gap: 5px; */
`