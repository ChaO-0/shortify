import { Container } from '../../App';
import { Button } from '../Globals/Button';
import { BoostWrapper } from './styled';

const Boost = () => {
  return (
    <BoostWrapper>
      <Container>
        <h1 style={{ padding: 0, margin: 0 }}>Boost your links today</h1>
        <Button
          backgroundColor="hsl(180, 66%, 49%)"
          style={{ marginTop: 18, padding: '10px 30px' }}
        >
          Get Started
        </Button>
      </Container>
    </BoostWrapper>
  );
};

export default Boost;
