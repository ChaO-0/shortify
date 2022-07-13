import { FunctionComponent } from 'react';
import workingImg from '../../assets/images/illustration-working.svg';
import { Button } from '../Globals/Button';
import {
  LandingWrapper,
  TitleWrapper,
  Title,
  Subtitle,
  WorkingImage,
  ResponsiveBlock,
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
          <ResponsiveBlock>
            <Button backgroundColor="hsl(180, 66%, 49%)">Get Started</Button>
          </ResponsiveBlock>
        </TitleWrapper>
        <div style={{ width: '100%' }}>
          <WorkingImage src={workingImg} />
        </div>
      </LandingWrapper>
    </>
  );
};

export default Landing;
