import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
`;

export const NavLink = styled.div`
  padding: 5px 15px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItems = styled.div`
  display: flex;
  align-items: flex-start;
  color: hsl(257, 7%, 63%);
  font-weight: 700;
`;

export const NavBrand = styled.div`
  margin-right: 30px;
`;

export const BurgerMobile = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const DesktopButton = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
