import React, { Component } from "react"
import styled from "styled-components"

import ContentSection from "../../components/section/ContentSection"
import Button from "../../components/Button"
import Blog from "../../components/Blog"

export default class BlogPosts extends Component {
  render() {
    return (
      <ContentSection header={"My Latest blog posts"}>
        <BlogsGrid>
          <Blog img={"p1.jpg"} />
          <Blog img={"p1.jpg"} />
          <Blog img={"p1.jpg"} />
          <Blog img={"p1.jpg"} />
        </BlogsGrid>
        <Button dark>VIEW MORE POSTS -></Button>
      </ContentSection>
    );
  }
}

const BlogsGrid = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 1440px;
  display: grid;
  grid-template: 1fr / repeat(4, 1fr);
  grid-gap: 40px;
  margin-bottom: 40px;
  padding: 20px;
  overflow: hidden;
  @media (max-width: 1410px) {
    grid-template: 1fr / repeat(3, 1fr);
  }
`;