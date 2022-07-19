import { useState } from 'react';
import logo from '../../assets/images/logo.svg';
import { Button } from '../Globals/Button';
import {
  Nav,
  NavItems,
  NavBrand,
  NavLink,
  BurgerMobile,
  DesktopButton,
  MobileNavItem,
  MobileMainNavWrapper,
  MobileMenuWrapper,
  MobileButtonMenuWrapper,
} from './styled';
import MenuIcon from '../../assets/images/icon-menu.svg';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <Nav>
      <NavItems>
        <NavBrand>
          <img src={logo} alt="Logo" />
        </NavBrand>
        <NavLink>Features</NavLink>
        <NavLink>Pricing</NavLink>
        <NavLink>Resources</NavLink>
      </NavItems>
      <DesktopButton>
        <Button color="hsl(257, 7%, 63%)">Login</Button>
        <Button backgroundColor="hsl(180, 66%, 49%)">Sign Up</Button>
      </DesktopButton>
      <BurgerMobile>
        <img src={MenuIcon} alt="burger" onClick={handleOpenMenu} />
      </BurgerMobile>
      <MobileMenuWrapper open={openMenu}>
        <MobileMainNavWrapper>
          <MobileNavItem>Features</MobileNavItem>
          <MobileNavItem>Pricing</MobileNavItem>
          <MobileNavItem>Resources</MobileNavItem>
        </MobileMainNavWrapper>
        <MobileButtonMenuWrapper>
          <Button color="white">Login</Button>
          <Button
            backgroundColor="hsl(180, 66%, 49%)"
            style={{ marginTop: 12 }}
          >
            Sign Up
          </Button>
        </MobileButtonMenuWrapper>
      </MobileMenuWrapper>
    </Nav>
  );
};

export default Navbar;
