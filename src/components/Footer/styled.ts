import styled from 'styled-components';

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  padding: 70px 0;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FooterBackground = styled.div`
  background-color: #232027;
`;

export const FooterNavTitle = styled.div`
  font-weight: 700;
  margin-bottom: 20px;
`;

export const FooterNavItem = styled.div`
  color: hsl(257, 7%, 63%);
  margin-top: 12px;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: hsl(180, 66%, 49%);
  }
`;

export const ResponsiveFlexBasis = styled.div`
  flex-basis: 250px;

  @media screen and (max-width: 768px) {
    flex-basis: 90px;
    margin: auto;
  }
`;

export const FooterNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const FooterNavBlock = styled.div`
  @media screen and (max-width: 768px) {
    &:not(:first-child) {
      margin-top: 40px;
    }
  }
`;

export const SocialWrapper = styled.div`
  text-align: right;
  flex-basis: 250px;

  svg {
    cursor: pointer;

    &:hover {
      path {
        transition: fill 0.2s ease-in-out;
        fill: hsl(180, 66%, 49%);
      }
    }
  }

  @media screen and (max-width: 768px) {
    text-align: center;
    margin-top: 50px;
    flex-basis: 0;
  }
`;
