import React from 'react';
import logo from '../../assets/images/logo.svg';
import { Button } from '../Globals/Button';
import { Nav, NavItems, NavBrand, NavLink } from './styled';

const Navbar: React.FC = () => {
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
      <div>
        <Button color="hsl(257, 7%, 63%)">Login</Button>
        <Button backgroundColor="hsl(180, 66%, 49%)">Sign Up</Button>
      </div>
    </Nav>
  );
};

export default Navbar;
