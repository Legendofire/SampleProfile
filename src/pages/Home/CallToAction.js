import React, { Component } from "react";
import styled from "styled-components";

import Button from "../../components/Button";
import Section from "../../components/section/Section";

export default class CallToAction extends Component {
  render() {
    return (
      <SectionWithImage>
        <SectionContent>
          <MainMessage>
            Have a Squarespace site and need help from an expert?
          </MainMessage>
          <CallToActionMessage>
            HIRE A SQUARESPACE DEVELOPER TODAY
          </CallToActionMessage>
          <Button> Contact Me Today </Button>
        </SectionContent>
      </SectionWithImage>
    );
  }
}

const SectionWithImage = styled(Section)`
  background-color: black !important;
  background-size: 100%;
  object-fit: contain;
  padding: 0px;
`;

const SectionContent = styled.div`
  width: 80%;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0px 50px 0px;
  margin: 100px 0px 110px 0px;
`;

const MainMessage = styled.p`
  font-size: 1.3em;
  font-style: italic;
  font-family: "EB Garamond", serif;
  color: #ffffff;
  text-align: center;
`;

const CallToActionMessage = styled.p`
  margin: 0px;
  font-size: 4em;
  font-weight: bold;
  font-family: "Raleway", sans-serif;
  text-align: center;
  color: #ffffff;
  max-width: 1000px;
  margin-bottom: 50px;
`;
