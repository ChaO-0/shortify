import styled from 'styled-components';

export const LandingWrapper = styled.div`
  margin-top: 70px;
  display: flex;
  position: relative;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const Title = styled.div`
  font-size: 68px;
  color: #34313d;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: 48px;
    text-align: center;
  }
`;

export const Subtitle = styled.div`
  font-size: 18px;
  color: hsl(257, 7%, 63%);
  max-width: 500px;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const TitleWrapper = styled.div`
  width: 100%;
`;

export const WorkingImage = styled.img`
  position: absolute;
  width: 65%;
  right: -300px;

  @media screen and (max-width: 768px) {
    right: 0;
    position: static;
    width: 140%;
  }
`;

export const ResponsiveBlock = styled.div`
  margin-top: 30px;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
