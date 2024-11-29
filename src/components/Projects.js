import React from 'react';
import git from '../Assets/git.png';

const Projects = () => {
  return (
    <div>
    <h1>Download my app</h1>
        <a href='../Assets/git.png' download={git}>Download</a>
    </div>
  )
}

export default Projects;