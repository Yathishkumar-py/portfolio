import React, { useState } from "react";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  NavLogo,
  OpenLinksButton,
  NavbarLinkExtended,
} from "./NavbarElements";
// import LogoImg from "../assets/logo.png";

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
        <NavLogo to="/" className="golden-logo">
                <p className="first">Y</p><p className="second">Y</p>
        </NavLogo>
        </LeftContainer>
        <RightContainer>
        <NavbarLinkContainer>
            <NavbarLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavbarLink>
            <NavbarLink to="/projects" className={({ isActive }) => (isActive ? 'active' : 'inactive')}> Projects</NavbarLink>
            <NavbarLink to="/skills" className={({ isActive }) => (isActive ? 'active' : 'inactive')}> Skills</NavbarLink>
            <NavbarLink to="/contact" className={({ isActive }) => (isActive ? 'active' : 'inactive')}> HireMe</NavbarLink>
            <NavbarLink to="/about" className={({ isActive }) => (isActive ? 'active' : 'inactive')}> About</NavbarLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/"> Home</NavbarLinkExtended>
          <NavbarLinkExtended to="/projects"> Projects</NavbarLinkExtended>
          <NavbarLinkExtended to="/skills"> Skills</NavbarLinkExtended>
          <NavbarLinkExtended to="/contact"> Hire Me</NavbarLinkExtended>
          <NavbarLinkExtended to="/about"> About</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Navbar;