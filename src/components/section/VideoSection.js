import React, { Component } from 'react'
import styled from 'styled-components'

import ContentSection from './ContentSection'
import Button from '../Button'

export default class VideoSection extends Component {
  render() {
    return (
        <ContentSection header={"Building SQUAR. a weekly Vlog."}>
            <Description>
            I'd like to share with everyone a passion project that I've been wanting to share as I face these challenges head-on. "Building SQUAR" will be a weekly vlog series documenting my journey as I grow my agency, SQUAR, to $150,000 this year. Subscribe to my YouTube channel and follow me as I journey through this new challenge of mine.
            </Description>
            <IFrameWrapper>
                <SquarVideo src="https://www.youtube.com/embed/OLKqmKeOhYg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullScreen=""></SquarVideo>
            </IFrameWrapper>
            <Button dark> WATCH MY JOURNEY -> </Button>
        </ContentSection>    
    )
  }
}

const Description = styled.p`
    box-sizing: border-box;
    max-width: 960px;
    width: 100%;
    color: #585858;
    font-size: 1em;
    text-align: center;
    font-family: 'Raleway', sans-serif;
    margin-bottom: 50px;
`
const IFrameWrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 1440px;
    height: 100%;
    overflow: hidden;
    padding-top: 56.25%;
    margin-bottom: 30px;
`

const SquarVideo = styled.iframe`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    border: 0;
`