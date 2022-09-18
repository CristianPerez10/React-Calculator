import { useReducer } from 'react';
import Container from './components/Container/Container';
import Grid from './components/Grid';
import Screen from './components/Screen/Screen';
import { actionTypes } from './constants/enums/enums';
import { IState } from './constants/interfaces/Interfaces';
import { isNumber, reducer } from './utils/Helpers/Helpers';

const initialState:IState = {display: "0"}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const handleClick = (value:string) => {
    if(["+", "-", "x", "÷"].includes(value)) dispatch({type: actionTypes.OPERATION, payload:value})
    if(value === "=") dispatch({type: actionTypes.EQUAL, payload:value})
    if(value === "AC" || value === "DEL") dispatch({type: actionTypes.CLEAN, payload:value})
    if(isNumber(value)) dispatch({type: actionTypes.NUMBER, payload:value})
  }

  return (
    <Container>
      <Screen>{state.display}</Screen>
      <Grid onClick={handleClick}/>
    </Container>
  )
}

export default App