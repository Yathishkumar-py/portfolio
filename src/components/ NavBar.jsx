import React from "react";
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

const NavBar = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/" className="golden-logo">
                <p className="first">Y</p><p className="second">Y</p>
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink 
                  to="/"
                  className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                >
                    Home
                </NavLink>
                <NavLink
                  to="/skills"
                  className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                > Skills
                </NavLink>
                <NavLink
                  to="/projects"
                  className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                >
                    Projects
                </NavLink>
                <NavLink 
                  to="/contact" 
                  className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                >
                    Contact
                </NavLink>
                <NavLink 
                  to="/about"
                  className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                >
                    About
                </NavLink>
            </NavMenu>
           </Nav> 
        </>
    );
};
export default NavBar;