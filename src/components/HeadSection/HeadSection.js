import React, { Component } from 'react'
import styled, {keyframes} from 'styled-components'

import Section from '../section/Section';
import Button from '../Button';

export default class HeadSection extends Component {
  render() {
    return (
      <SectionWithImage>
        <SectionHeader>
          <Logo />
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
        </SectionHeader>
        <SectionContent>
          <MainMessage>
            I'm here to create meaningful and lasting relationships with my clients.
          </MainMessage>
          <CallToAction>
            LET'S BUILD SOMETHING AMAZING TOGETHER
          </CallToAction>
          <Button> CHECKOUT MY PORTFOLIO </Button>
        </SectionContent>
      </SectionWithImage>
    )
  }
}

const SectionWithImage = styled(Section)`
  background: url('9.jpg') no-repeat;
  filter: grayscale(100%);
  background-blend-mode: overlay;
  background-size: 100%; 
  object-fit: contain;
  padding: 0px;
`;

const SectionHeader = styled.div`
  max-width: 1440px;
  width: 100%; 
  height: 100px;
  box-sizing: border-box;
  padding: 28px 63px 20px 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SectionContent = styled.div`
  width: 80%;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0px 50px 0px;
  margin: 100px 0px 110px 0px;
`

const MainMessage = styled.p`
  font-size: 1.3em;
  font-style: italic;
  font-family: 'EB Garamond', serif;
  color: #ffffff; 
`

const CallToAction = styled.p`
  margin: 0px;
  font-size: 4em;
  font-weight: bold; 
  font-family: 'Raleway', sans-serif;
  text-align: center;
  color: #ffffff;
  max-width: 1000px;
  margin-bottom: 50px;
`

const Logo = styled.div`
  height: 45px;
  width: 45px;
  background-color: Transparent;
  border: 2px solid white;
  transform: rotate(45deg);
  margin-top: 5px;
  align-self: start;
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
  color: white;
  &:hover{
    animation: ${Dim} .2s linear;
    animation-fill-mode: both;
  }
`


const NavLink = styled.a`
  font-size: 0.8em; 
  font-family: 'Raleway', sans-serif;
  letter-spacing: 2px;
  margin: 0px 11px 0px 11px;
  &:hover{
    color: white;
  }
`
