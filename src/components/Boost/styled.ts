import styled from 'styled-components';
import BoostBG from '../../assets/images/bg-boost-desktop.svg';

export const BoostWrapper = styled.div`
  background-color: hsl(257, 27%, 26%);
  background-image: url(${BoostBG});
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  text-align: center;
  padding: 70px 0;

  h1 {
    @media screen and (max-width: 768px) {
      font-size: 28px;
    }
  }
`;
