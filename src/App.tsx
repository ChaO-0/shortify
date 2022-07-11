import styled from 'styled-components';
import Boost from './components/Boost';
import Footer from './components/Footer';
import Landing from './components/Landing/Landing';
import Navbar from './components/Navbar';
import Shortener from './components/Shortener';
import Statistics from './components/Statistics';
import { GlobalStyles } from './theme';

export const Container = styled.div`
  max-width: 1080px;
  margin: auto;
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Navbar />
        <Landing />
        <Shortener />
      </Container>
      <Statistics />
      <Boost />
      <Footer />
    </>
  );
};

export default App;
