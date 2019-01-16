import React, { Component } from 'react'
import styled from 'styled-components'
import ContentSection from '../../components/section/ContentSection';
import Button from '../../components/Button';



export default class ImageGrid extends Component {
  render() {
    return (
      <ContentSection header={"My Life as a Squarespace designer"}>
            <ImageGridGrid>
                <Image src="p2.jpg"></Image>
                <Image src="p2.jpg"></Image>
                <Image src="p2.jpg"></Image>
                <Image src="p2.jpg"></Image>
                <Image src="p2.jpg"></Image>
                <Image src="p2.jpg"></Image>
                <Image src="p2.jpg"></Image>
                <Image src="p2.jpg"></Image>
                <Image src="p2.jpg"></Image>
                <Image src="p2.jpg"></Image>
            </ImageGridGrid>
            <Button dark>LEARN MORE ABOUT ME -></Button>
      </ContentSection>
    )
  }
}

let Image = (props)=>{
    return(
        <StyledImage src={props.src}>
            
        </StyledImage>
    )
}

const ImageGridGrid = styled.div`
    box-sizing: border-box;
    width: 100%;
    max-width: 1194px;
    display: grid;
    grid-template: 1fr 1fr / repeat(5, 1fr);
    grid-gap: 10px;
    padding: 15px;
    margin-bottom: 40px;
`

const StyledImage = styled.img`
    width: 100%;
    height: auto;
    object-fit: contain;
    background-color: blue;
`