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
    <>
      <section id='aboutsec'>
        <h1>Hello! I'm Saurabh</h1>
        <p>I'm Mechanical engineer, enthusiastic learner and programmer.</p>
        <h2>This URL shortener is my first deployed project. I am full stack developer, JavaScript is my first programming language and i love it.</h2>
        <div id='logo'>
        <h2>My skills</h2>
        <div>
        <img src={js} className='js' alt="js"/>
        <img src={reactjs} className='reactjs' alt="reactjs"/>
        <img src={html} className='html' alt="html"/>
        <img src={css} className='css' alt="css"/>
        <img src={node} className='node' alt="node"/>
        <img src={mysql} className='mysql' alt="mysql"/>
        <img src={python} className='python' alt="python"/>
        <img src={mongo} className='mongo' alt="mongo"/>
        <img src={git} className='git' alt="git"/>
        </div>
        <h2>Thanks for visit.</h2>
        </div>
      </section>
    </>
  )
}

export default About