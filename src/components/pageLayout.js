import React, { Component } from 'react'
import styled from 'styled-components'

export default class PageLayout extends Component {
  render() {
    return (
      <PageLayoutContainer>
        {this.props.children}
      </PageLayoutContainer>
    )
  }
}

const PageLayoutContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`;
