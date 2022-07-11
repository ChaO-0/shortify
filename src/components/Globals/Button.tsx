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
`;
