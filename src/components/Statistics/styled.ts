import styled from 'styled-components';

export const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  margin-right: 32px;
  position: relative;
  padding: 25px;
  align-self: flex-start;
  flex: 1 1 0%;

  &:last-child {
    margin-right: 0;
  }

  @media screen and (max-width: 768px) {
    margin-right: 0;
    text-align: center;
  }
`;

export const CardDesc = styled.div`
  color: hsl(257, 7%, 63%);
`;

export const CardImageLabel = styled.div`
  background-color: hsl(260, 8%, 14%);
  display: inline-block;
  padding: 14px 17px;
  border-radius: 50%;
  position: absolute;
  top: -33px;

  @media screen and (max-width: 768px) {
    left: 145px;
  }
`;

export const StatisticWrapper = styled.div`
  background-color: #f0f1f6;
  margin-top: -60px;
  padding: 120px 0;
`;

export const TitleHeader = styled.div`
  width: 100%;
  text-align: center;
`;

export const MainTitle = styled.div`
  font-weight: 700;
  font-size: 36px;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

export const MainSubtitle = styled.div`
  color: hsl(257, 7%, 63%);
  width: 480px;
  margin: auto;

  @media screen and (max-width: 768px) {
    width: 300px;
    margin-top: 16px;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  margin-top: 120px;
  position: relative;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CyanLine = styled.hr`
  border-top: 8px solid hsl(180, 66%, 49%);
  width: 95%;
  position: absolute;
  top: 125px;
`;
