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
    padding: 25px 20px;
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
  flex-grow: 1;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    -moz-box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
    -webkit-box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 15px 20px;
    margin-top: 12px;
    font-size: 16px;
  }
`;

export const ShortenerInputWrapper = styled.div`
  width: 80%;
  margin-right: 20px;
  position: relative;

  @media screen and (max-width: 768px) {
    width: 100%;
    display: block;
    margin-right: 0;
    font-size: 16px;
  }
`;

export const ShortenerInput = styled.input<{ error: boolean }>`
  border: ${(props) => (props.error ? '2px #e6686a solid' : 'none')};
  outline: none;
  padding: 15px 20px;
  width: 100%;
  border-radius: 8px;
  font-weight: 700;
  color: hsl(257, 7%, 63%);

  &::placeholder {
    color: ${(props) => (props.error ? '#e6686a' : 'hsl(257, 7%, 63%)')};
  }
`;

export const ShortenerError = styled.div`
  position: absolute;
  bottom: -24px;
  color: #e6686a;
  font-size: 12px;

  @media screen and (max-width: 768px) {
    position: static;
  }
`;

export const ShortenerOuter = styled.div`
  position: relative;
  top: -140px;

  @media screen and (max-width: 768px) {
    margin-top: 80px;
    top: -240px;
  }
`;

export const LinkWrapper = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 16px 24px;
  margin: 12px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0;
    align-items: flex-start;
    width: 100%;
  }
`;

export const ShortLinkWrapper = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    padding: 16px 12px;
  }
`;

export const ShortLink = styled.div`
  color: hsl(180, 66%, 49%);
  margin-right: 24px;
`;

export const OriginalLink = styled.div`
  @media screen and (max-width: 768px) {
    border-bottom: 1px solid black;
    width: 100%;
    padding: 12px;
  }
`;

export const ShortenerCopyButton = styled.button<{ isCopied: boolean }>`
  border-radius: 8px;
  color: white;
  border: none;
  outline: none;
  font-weight: 700;
  cursor: pointer;
  font-size: 14px;
  white-space: nowrap;
  transition: box-shadow 0.2s ease-in-out;
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.isCopied ? 'black' : 'hsl(180, 66%, 49%)'};

  &:hover {
    -moz-box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
    -webkit-box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 12px;
  }
`;
