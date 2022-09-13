import { Container } from '@/Layout/Container';
import { Grid } from '@/Layout/Grid';
import { Screen } from '@/Layout/Screen';
import { useState } from 'react';

interface ICalcProps{
  total:any,
  next:any,
  operation:any
}

const App = () => {
  const [state, setState] = useState<ICalcProps>({total:null, next:null, operation:null})

  const calculate = (value:string) => {
    if(value === 'AC') setState({total: null, next:null, operation:null})
    if(state.operation){
      setState({...state, next: state.next ? `${state.next} ${value} ` : value})
    }

    if(state.next) setState({...state, next:(state.next === '0') ? value : state.next + value, total:null})
    else setState({...state, next: value, total: null})

    if(value === '%'){
      // https://github.com/ahfarmer/calculator/blob/master/src/logic/calculate.js
    }

  }

  return (
    <Container>
      <Screen>{state.total}</Screen>
      <Grid onClick={calculate}/>
    </Container>
  )
}

export default App
