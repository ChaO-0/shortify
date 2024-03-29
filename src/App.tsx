import styled from 'styled-components';
import Boost from './components/Boost';
import Footer from './components/Footer';
import Landing from './components/Landing/Landing';
import Navbar from './components/Navbar';
import Statistics from './components/Statistics';
import { GlobalStyles } from './theme';

export const Container = styled.div`
  max-width: 1080px;
  margin: auto;

  @media screen and (max-width: 768px) {
    max-width: 355px;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Navbar />
        <Landing />
      </Container>
      <Statistics />
      <Boost />
      <Footer />
    </>
  );
};

export default App;
