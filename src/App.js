import './App.css';
import Header from './header/Header';
import PriceCalculator from './containers/PriceCalculator';
import styled from 'styled-components';

const AppContainer = styled.div`
  background-color: mintcream;
`

function App() {
  return (
    <AppContainer>
      <Header />
      <PriceCalculator />
      <footer>
        <span>Images by rawpixel.com</span>
      </footer>
    </AppContainer>
  );
}

export default App;
