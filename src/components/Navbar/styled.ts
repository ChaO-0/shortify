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
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #34313d;
  }

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

export const MobileNavItem = styled.div`
  padding: 10px 0;
  font-weight: 700;
`;

export const MobileMainNavWrapper = styled.div`
  margin: 24px 0;
  padding-bottom: 24px;
  border-bottom: 1px solid hsl(257, 7%, 63%);
`;

export const MobileMenuWrapper = styled.div<{ open: boolean }>`
  display: ${(props) => (props.open ? 'block' : 'none')};
  position: absolute;
  background-color: hsl(257, 27%, 26%);
  width: 90%;
  left: 50%;
  top: 250px;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  color: white;
  text-align: center;
  z-index: 99;
  padding: 0 24px;
`;

export const MobileButtonMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 36px;
`;
