import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background: #1d1d1d;
    height: 85px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 4rem;
    z-index: 12;
`;
export const NavLogo = styled(Link)`
  cursor: pointer;
  font-size: 2rem;
  text-decoration: none;
  display: flex;
  font: icon;
  font-size: 74px;
  font-weight: bolder;

`;

export const NavLink = styled(Link)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&:hover {
  color: #FFD700;
}
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
