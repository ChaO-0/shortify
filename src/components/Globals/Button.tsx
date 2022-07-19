import styled from 'styled-components';

interface ButtonProps {
  backgroundColor?: string;
  color?: string;
}

export const Button = styled.button<ButtonProps>`
  border-radius: 30px;
  background-color: ${(props) => props.backgroundColor || 'Transparent'};
  padding: 10px 15px;
  color: ${(props) => props.color || '#FFF'};
  border: none;
  outline: none;
  font-weight: 700;
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    -moz-box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
    -webkit-box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
    padding: 12px 32px;
  }
`;
