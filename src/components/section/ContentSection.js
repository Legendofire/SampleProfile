import React, { Component } from 'react'
import styled from 'styled-components'

import Section from './Section'

export default class ContentSection extends Component {
  render() {
    return (
      <Section>
        <TextWrapper>
          <Header>{this.props.header}</Header>
        </TextWrapper>
        {this.props.children}
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