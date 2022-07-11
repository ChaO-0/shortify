import { FunctionComponent } from 'react';
import workingImg from '../../assets/images/illustration-working.svg';
import { Button } from '../Globals/Button';
import {
  LandingWrapper,
  TitleWrapper,
  Title,
  Subtitle,
  WorkingImage,
} from './styled';

const Landing: FunctionComponent = () => {
  return (
    <>
      <LandingWrapper>
        <TitleWrapper>
          <Title>More than just shorter links</Title>
          <Subtitle>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </Subtitle>
          <Button
            backgroundColor="hsl(180, 66%, 49%)"
            style={{ marginTop: 30 }}
          >
            Get Started
          </Button>
        </TitleWrapper>
        <div style={{ width: '100%' }}>
          <WorkingImage src={workingImg} />
        </div>
      </LandingWrapper>
    </>
  );
};

export default Landing;
