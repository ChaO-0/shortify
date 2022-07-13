import styled from 'styled-components';
import ShortenerBG from '../../assets/images/bg-shorten-desktop.svg';

export const ShortenerWrapper = styled.div`
  border-radius: 12px;
  background-color: hsl(257, 27%, 26%);
  background-image: url(${ShortenerBG});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 40px 50px;
  width: 100%;
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ShortenerButton = styled.button`
  background-color: hsl(180, 66%, 49%);
  border-radius: 8px;
  color: white;
  border: none;
  outline: none;
  font-weight: 700;
  cursor: pointer;
  padding: 0 35px;
  font-size: 14px;
  white-space: nowrap;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 15px 20px;
    margin-top: 12px;
  }
`;

export const ShortenerInput = styled.input`
  border: none;
  outline: none;
  padding: 15px 20px;
  width: 80%;
  border-radius: 8px;
  margin-right: 20px;
  font-weight: 700;
  color: hsl(257, 7%, 63%);

  @media screen and (max-width: 768px) {
    width: 100%;
    display: block;
    margin-right: 0;
  }
`;

export const ShortenerOuter = styled.div`
  margin-top: 200px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    margin-top: 100px;
  }
`;
