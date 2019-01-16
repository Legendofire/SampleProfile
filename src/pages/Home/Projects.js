import React, { Component } from "react";
import styled from "styled-components";

import ContentSection from "../../components/section/ContentSection";
import LinkCard from "../../components/LinkCard";
import Button from "../../components/Button";

export default class Projects extends Component {
  render() {
    return (
      <ContentSection header={"My latest Squarespace projects"}>
        <ProjectsGrid>
          <LinkCard
            img={"p1.jpg"}
            title={"Some Title"}
            description={"This is some content"}
            buttonText={"Check this out"}
            buttonOnClick={() => {
              console.log("just clicked the button");
            }}
          />
          <LinkCard
            img={"p2.jpg"}
            title={"Some Title"}
            description={"This is some content"}
            buttonText={"Check this out"}
            buttonOnClick={() => {
              console.log("just clicked the button");
            }}
          />
          <LinkCard
            img={"p3.jpeg"}
            title={"Some Title"}
            description={"This is some content"}
            buttonText={"Check this out"}
            buttonOnClick={() => {
              console.log("just clicked the button");
            }}
          />
        </ProjectsGrid>

        <Button dark>CHECKOUT MORE PROJECTS</Button>
      </ContentSection>
    );
  }
}

const ProjectsGrid = styled.div`
  max-width: 1280px;
  margin-bottom: 20px;
  display: grid;
  grid-template: 1fr/1fr 1fr 1fr;
  grid-gap: 30px;
`;
