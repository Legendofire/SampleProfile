import React, { Component } from 'react'
import styled from 'styled-components'

import Section from './Section'

export default class TextSection extends Component {
  render() {
    return (
      <Section>
        <TextWrapper>
          <Header>{this.props.header}</Header>
          <Content>{this.props.content}</Content>
        </TextWrapper>
      </Section>
    )
  }
}

const TextWrapper = styled.div`
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Header = styled.p`
    padding: 0px;
    margin: 0px 0px 35px 0px;
    font-size: 3.1em;
    color: #343434;
    font-family: 'EB Garamond', serif; 
    text-align: center;
`

const Content = styled.p`
    padding: 0px;
    margin: 0px;
    font-size: 1.5em;
    color: #343434;
    font-family: 'Raleway', sans-serif;
    text-align: center;
`