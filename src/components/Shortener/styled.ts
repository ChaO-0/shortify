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
`;

export const ShortenerButton = styled.button`
  background-color: hsl(180, 66%, 49%);
  border-radius: 12px;
  color: white;
  border: none;
  outline: none;
  font-weight: 700;
  cursor: pointer;
  padding: 0 35px;
  font-size: 14px;
  white-space: nowrap;
`;

export const ShortenerInput = styled.input`
  border: none;
  outline: none;
  padding: 15px 20px;
  width: 80%;
  border-radius: 12px;
  margin-right: 20px;
  font-weight: 700;
  color: hsl(257, 7%, 63%);
`;
