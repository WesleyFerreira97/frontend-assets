import { useState } from 'react'
import styled from 'styled-components'
import { Grid } from './components/Grid';
import CarImage from './assets/images/car.jpg'
import { Card } from './components/Card';

const AppStyled = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  min-height: 100vh;
`;

const allItems = ["Item1", "Item2", "Item3", "Item4", "Item5", "item6"];

function App() {

  return (
    <AppStyled>

      <Grid columns={{ xs: 6, sm: 4, md: 3 }}>
        {allItems.map((item, index) => (
          <Grid.Item key={index}>
            <Card />
          </Grid.Item>
        ))}
      </Grid>

    </AppStyled>
  )
}

export default App;