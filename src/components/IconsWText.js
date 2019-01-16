import React, {Component} from 'react'
import styled from 'styled-components'

import Section from './section/Section'
import IconWText from './IconWText'
import Button from './Button';

export default class IconsWText extends Component {
    render(){
        return (
            <Section>
                <SectionWrapper>
                    <HeaderText>
                        I provide high quality Squarespace code snippets, add-ons, plugins, video training, tips, and more.
                    </HeaderText>
                    <IconsGrid>
                        <IconWText 
                            src={"1.png"} 
                            header={"CODE SNIPPETS"} 
                            content={"These are exclusively made for Squarespace sites and will offer custom design options with easy to understand instructions."}/>
                        <IconWText 
                            src={"2.png"} 
                            header={"VIDEO TRAINING"} 
                            content={"The training will go over some great insights to help users understand how to get the most out of their Squarespace site."} />
                        <IconWText 
                            src={"3.png"} 
                            header={"TIPS & TRICKS"} 
                            content={"Learn from my mistakes and let me show you how to accomplish unique sections of your Squarespace site that will impress."} />
                    </IconsGrid>
                    <Button dark>SQUARE SPACE CODESHOP -></Button>
                </SectionWrapper>
            </Section>
        )
    }
} 

const SectionWrapper = styled.div`
    max-width: 1280px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const HeaderText = styled.p`
    max-width: 960px;
    padding: 0px;
    margin: 0px 0px 35px 0px;
    font-size: 3.1em;
    color: #343434;
    font-family: 'EB Garamond', serif;
    text-align: center;
`

const IconsGrid = styled.div`
    width: 100%;
    display: grid;
    grid-template: 1fr/ 1fr 1fr 1fr;
`