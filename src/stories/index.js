import React from 'react';

import { storiesOf } from '@storybook/react';

import ProjectCard from '../components/LinkCard';
import BlogCard from '../components/Blog';

const ProjectCardStyle = {
  height: '400px',
  width: '400px'
}

const BlogCardStyle = {
  height: '343px',
  width: '304px'
}

storiesOf('ProjectCard', module)
  .add('Default', () => 
    <div style={ProjectCardStyle}> 
      <ProjectCard 
        img={"p1.jpg"}
        title={"Some Title"}
        description={"This is some content"}
        buttonText={"Check this out"}
        buttonOnClick={()=>{console.log("just clicked the button")}}/>
    </div>
  );
  storiesOf('BlogCard', module)
  .add('Default', () => 
    <div style={BlogCardStyle}> 
      <BlogCard 
        img={"p1.jpg"}
        />
    </div>
  );