import React from 'react';
import "./About.css";
import css from '../Assets/css.webp';
import git from '../Assets/git.png';
import html from '../Assets/html.png';
import js from '../Assets/js.png';
import mongo from '../Assets/mongo.png';
import mysql from '../Assets/mysql.png';
import node from '../Assets/node.png';
import python from '../Assets/python.png';
import reactjs from '../Assets/reactjs.png';

function About() {
  return (
    <section id='aboutsec'>
      <div className='aboutsecdiv'>
        <h1>Hello! I'm Saurabh Galgale</h1>
        <p>I'm an engineer, an enthusiastic learner, and a programmer.</p>
        <h2>This URL shortener is my first deployed project. I am a full-stack developer, JavaScript is my first programming language and I love it.</h2>
        
        <div id='logo'>
          <h2>My Skills</h2>
          <div className='skills-container'>
            <img src={js} className='skill-icon' alt="JavaScript" />
            <img src={reactjs} className='skill-icon' alt="ReactJS" />
            <img src={html} className='skill-icon' alt="HTML" />
            <img src={css} className='skill-icon' alt="CSS" />
            <img src={node} className='skill-icon' alt="Node.js" />
            <img src={mysql} className='skill-icon' alt="MySQL" />
            <img src={python} className='skill-icon' alt="Python" />
            <img src={mongo} className='skill-icon' alt="MongoDB" />
            <img src={git} className='skill-icon' alt="Git" />
          </div>
        </div>
        <h2>Thanks for visiting!</h2>
      </div>
    </section>
  );
}

export default About;
