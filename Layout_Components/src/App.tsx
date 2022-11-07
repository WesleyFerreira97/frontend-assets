import styled from 'styled-components'
// import { Grid } from './components/GridSC';
import { Grid } from './components/GridStitches';
import { Card } from './components/Card';

const AppStyled = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};
    min-height: 100vh;
`;

const allItems = ["Item1", "Item2", "Item3", "Item4", "Item5", "Item6"];

function App() {

  return (
    <AppStyled>

      <Grid
        gap={1}
      // columns={{ xs: 6, sm: 4, md: 3, lg: 2 }}
      >
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