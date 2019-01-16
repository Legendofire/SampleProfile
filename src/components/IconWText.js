import React, { Component } from "react";
import styled from "styled-components";

export default class IconWText extends Component {
  render() {
    return (
      <IconWTextWrapper>
        <IconImg src={this.props.src} />
        <TextHeader> {this.props.header} </TextHeader>
        <TextContent>
          {this.props.content}
        </TextContent>
      </IconWTextWrapper>
    );
  }
}

const IconWTextWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 10px 50px 10px;
`;

const IconImg = styled.img`
  width: 74px;
  height: 58px;
  margin-bottom: 20px;
`;

const TextHeader = styled.p`
  padding: 0px;
  margin: 0px 0px 35px 0px;
  font-size: 0.9em;
  font-weight: bold;
  color: #343434;
  font-family: "Raleway", sans-serif;
`;

const TextContent = styled.p`
  padding: 0px;
  margin: 0px;
  font-size: 1em;
  color: #343434;
  font-family: "Raleway", sans-serif;
  text-align: center;
`;