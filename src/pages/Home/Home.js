import React, { Component } from 'react'

import PageLayout from '../../components/pageLayout'
import Section from '../../components/section/Section'
import TextSection from '../../components/section/TextSection'
import HeadSection from '../../components/HeadSection/HeadSection'
import IconsWText from '../../components/IconsWText'
import Projects from './Projects';
import VideoSection from '../../components/section/VideoSection';
import CallToAction from './CallToAction';
import ImageGrid from './ImageGrid';
import BlogPosts from './BlogPosts';
import Footer from './Footer';

export default class Home extends Component {

  render() {
      return (
    <PageLayout>
        <HeadSection />
        <TextSection 
          header={'Squarespace development (my focus)'} 
          content={'Let\'s be honest and cut through the marketing fluff. You need a website that looks amazing and actually works. Bottom line, that\'s what I do. And if you want to learn more about working with me, pick up the phone and give me a call (or email).'}
        />
        <IconsWText/>
        <Projects/>
        <VideoSection/>
        <CallToAction/>
        <ImageGrid/>
        <BlogPosts/>
        <Footer/>
      </PageLayout>
    )
  }
}
