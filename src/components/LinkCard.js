import React from 'react'
import styled, {keyframes} from 'styled-components'

import Button from './Button'

export default (props)=>{
    return (
        <LinkCardWrapper img={props.img}>
            <BackgroundDim>
                <InfoWrapper>
                    <DescriptionText>{props.description}</DescriptionText>
                    <HeaderText>{props.title}</HeaderText>
                    <LinkCardButton onClick={props.buttonOnClick}>{props.buttonText}</LinkCardButton>
                </InfoWrapper>
            </BackgroundDim>
        </LinkCardWrapper>
    )
}

const BackgroundFillKF = keyframes`
    from{
        background-color: transparent;
    }

    to{
        background-color: rgba(0,0,0,.8);
    }
`
const ProjectDetailsKF = keyframes`
    0%{
        height: 30%;
        opacity: 0;
    }
    50%{
        height: 27.5%;
        opacity: 0.5;
    }
    100%{
        height: 25%;
        opacity: 1;
    }
`

const LinkCardWrapper = styled.div`
    width: 22vw;
    height: 22vw;
    max-width: 406px;
    max-height: 406px;
    background-image: url(${props => props.img});
    background-size: 100%; 
    background-repeat: no-repeat;
    object-fit: contain;
    filter: grayscale(100%);
`


const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    height: 30%;
    opacity: 0;
`

const BackgroundDim = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover{
        animation: ${BackgroundFillKF} 0.3s linear forwards;
        ${InfoWrapper}{
            animation: ${ProjectDetailsKF} 0.3s linear forwards;
        }
    }
`

const HeaderText = styled.div`
    color: white;
    opacity: inherit;
    font-size: 2em;
    font-weight: bold;
    font-family: 'Raleway', sans-serif;
    margin-bottom: 7px;
`

const DescriptionText = styled.div`
    opacity: inherit;
    color: #A3A3A3;
    font-family: 'EB Garamond', serif; 
    font-style: italic;
`

const LinkCardButton = styled(Button)`
    opacity: inherit;
    padding: 10px 10px 10px 10px;
`