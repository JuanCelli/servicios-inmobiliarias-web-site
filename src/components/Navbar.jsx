import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { colors } from '../styled/config';

import { NavLink, useLocation } from 'react-router-dom';


const NavbarStyled = styled.nav`
    position: fixed;
    height:${({ color }) =>  color ? "90px" : "130px"};
    width: 100%;
    top: 0;
    left: 0;
    background-color: ${({ color }) => color ? colors.Color5 : colors.NavbarTrasparent};
    overflow: hidden;
    z-index: 10;
    padding:0rem .75rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 0.4s ease-out;

    @media (max-width: 768px) {
      flex-direction: column ;
      background-color: ${colors.Color8};
      justify-content:center;
      width: 100%;
      height: ${({ isOpen }) => (isOpen ? '100%' : 'auto')};
      overflow-y: hidden;
  }
`;

const Name = styled.h3`
  font-size: 1.5rem;
  margin: 0;
`;
const SubName = styled.p`
  font-size: .8rem;
  margin: 0;
`;
const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0rem 2rem;
    text-align: center;

    @media (max-width: 768px) {
      ${({ isOpen }) => (isOpen ? 'position:relative' : 'display:none')};
      position: ${({ isOpen }) => (isOpen ? 'absolute' : 'none')};
      top: 20px;
      left: 5px;
  }
`;

const NavLinks = styled.div`
  padding: 8rem 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 60%;

  @media (max-width: 768px) {
    flex-direction: column;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    padding-top: 8rem;
    padding-bottom: 22rem;
    height: 100vh
  }
`;

const NavLinkStyled = styled(NavLink)`
  font-weight: 500;
  color: ${colors.fontArticules};
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  transition: .1s ease-in-out;

  &:hover {
    color: ${({ isHome }) => isHome ? colors.Section1 : colors.ArticuleBg1};
    color: ${({ color }) => color ? colors.Section1 : colors.Section1};
  }

  @media (max-width: 768px) {
    &:hover {
    color: ${colors.Section1};
  }
  }


`;


const MenuIcon = styled.div`
  display: none;
  z-index: 6;

  @media (max-width: 768px) {
    color: red;
    display: block;
    cursor: pointer;
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 5;
  }
`;

const Burger = styled.div`
  width: 25px;
  height: 3px;
  z-index: 5;
  background-color: white;
  margin: 5px 0;
  transition: transform 0.3s ease;

  &:nth-child(1) {
    ${({ isOpen }) => isOpen && 'transform: rotate(45deg) translate(5px, 5px);'}
  }
  &:nth-child(2) {
    ${({ isOpen }) => isOpen && 'opacity: 0;'}
  }
  &:nth-child(3) {
    ${({ isOpen }) =>
      isOpen && 'transform: rotate(-45deg) translate(8px, -8px);'}
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState(false);
  const location = useLocation()


  const changeColor = () =>{
    if (window.scrollY>=130){
      setColor(true)
    }else{
      setColor(false)
    }
  }


  window.addEventListener("scroll", changeColor)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const setCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <NavbarStyled color={color}>
      <MenuIcon onClick={toggleMenu}>
        <Burger isOpen={isOpen} />
        <Burger isOpen={isOpen} />
        <Burger isOpen={isOpen} />
      </MenuIcon>
      <LogoContainer isOpen={isOpen}>
            <Name>Verónica Gorrita</Name>
            <SubName>Servicios inmobiliarios</SubName>
        </LogoContainer>
      <NavLinks isOpen={isOpen}>
        <NavLinkStyled color={color}  onClick={setCloseMenu} to="/">Inicio</NavLinkStyled>
        <NavLinkStyled color={color}  onClick={setCloseMenu} to="/sobremi">Sobre Mí</NavLinkStyled>
        <NavLinkStyled color={color}  onClick={setCloseMenu} to="/sesiones">Propiedades</NavLinkStyled>
        <NavLinkStyled color={color}  onClick={setCloseMenu} to="/contacto">Contacto</NavLinkStyled>
      </NavLinks>

    </NavbarStyled>
  );
};

export default Navbar;
