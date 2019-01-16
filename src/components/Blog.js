import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

export default class Blog extends Component {
  render() {
    return (
      <BlogContainer>
        <BlogImage src={this.props.img} />
        <BlogImageHoverEffect />
        <TextContainer>
          <Title>My Blog</Title>
          <Description>
            This is a Description about the blog yup you heard it right
          </Description>
        </TextContainer>
      </BlogContainer>
    );
  }
}

const BlogContainer = styled.div`
  position: relative;
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  background-color: white;
  @media (max-width: 1410) {
      color: green;
    &:last-child(4) {
      display: none;
    }
  }
`;

const BlogImage = styled.img`
  width: 100%;
  height: 60%;
  object-fit: cover;
  filter: grayscale(100%);
`;

const BlogImageHoverEffectFrames = keyframes`
      from{
          background-color: transparent; 
      }
      to{
          background-color: rgba(256,256,256,0.4);
      }
  `;

const BlogImageHoverEffect = styled.div`
  position: absolute;
  width: 100%;
  height: 60%;
  z-index: 2;
  background-color: transparent;
  &:hover {
    animation: ${BlogImageHoverEffectFrames} 0.3s linear forwards;
  }
`;

const TextContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 140px;
  padding: 0px 10px 0px 10px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  padding: 0px;
  margin: 0px;
  color: #363636;
  font-family: "Raleway", sans-serif;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
`;

const Description = styled.p`
  color: #8b8b8b;
  font-family: "Raleway", sans-serif;
  text-align: center;
`;
