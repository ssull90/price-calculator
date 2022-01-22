import './App.css';
import Header from './header/Header';
import PriceCalculator from './containers/PriceCalculator';
import styled from 'styled-components';
import { FOOTER_HEIGHT } from './constants/constants';

const AppContainer = styled.div`
  background-color: mintcream;
  min-height: 100vh;
`

const Footer = styled.footer`
  height: ${FOOTER_HEIGHT};
  position: absolute;
  bottom: 0;
  width: 100%;
  border-top: 1px solid black;
`

function App() {
  return (
    <AppContainer>
      <Header />
      <PriceCalculator />
      <Footer>
        <span>Images by rawpixel.com</span>
      </Footer>
    </AppContainer>
  );
}

export default App;
