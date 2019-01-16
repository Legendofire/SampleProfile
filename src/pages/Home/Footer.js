import React, { Component } from 'react'
import styled, {keyframes} from 'styled-components'

import Section from '../../components/section/Section';


export default class Footer extends Component {
  render() {
    return (
      <StyledSection>
          <MainText> Get a website that looks amazing and actually works. </MainText>
          <NavBar>
            <NavLink>HOME</NavLink>
            <NavLink>CODE SHOP</NavLink>
            <NavLink>PORTFOLIO</NavLink> 
            <NavLink>ABOUT</NavLink>
            <NavLink>RESUME</NavLink>
            <NavLink>BLOG</NavLink>
            <NavLink>CONTACT</NavLink>
            <NavLink>SHOP</NavLink>
          </NavBar>
          <CopyRightNotice>© 2018 Devon Stank. All rights reserved. Squarespace Developer & Founder of SQUAR</CopyRightNotice>
      </StyledSection>
    )
  }
}

const StyledSection = styled(Section)`
    padding: 45px 0px 70px 0px;
    background-color: #2A292E !important;
`
const MainText = styled.p`
    margin: 0px;
    padding: 0px;
    color: white;
    font-size: 2.5em;
    font-family: 'EB Garamond', serif;
    margin-bottom: 60px;
`

const Dim = keyframes`
  from{
    color: white;
  }
  to{
    color: #828082;
  }
`
const NavBar = styled.div`
  box-sizing: border-box;
  align-self: end;
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  height: 100%;
  align-items: center;
  align-self: center;
  color: white;
  margin-bottom: 50px;
`


const NavLink = styled.a`
  font-size: 0.8em; 
  font-family: 'Raleway', sans-serif;
  letter-spacing: 2px;
  margin: 0px 11px 0px 11px;
  &:hover{
    animation: ${Dim} .2s linear;
    animation-fill-mode: both;
  }
`

const CopyRightNotice = styled.p`
    padding: 0px;
    margin: 0px;
    font-size: 0.8em;
    color: #7F7E81;
`


//#B5B5AA