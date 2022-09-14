import { Container } from '@/Layout/Container';
import { Grid } from '@/Layout/Grid';
import { Screen } from '@/Layout/Screen';
import { useEffect, useState } from 'react';
import { calculation, CalculationSchema } from './constants/helpers/Helpers';

const App = () => {
  // const [state, setState] = useState<CalculationSchema>({total:null, next:null, operation:null})
  const [state, setState] = useState<any>({total:null, next:null, operation:null})

  const handleClick = (value:string) => setState(calculation({state, value}))

  return (
    <Container>
      <Screen>{state.total ? state.total : "0"}</Screen>
      <Grid onClick={handleClick}/>
    </Container>
  )
}

export default App
