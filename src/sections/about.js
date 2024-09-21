import React from 'react';
import './about.css'; // Add your styles here
const About = () => {
  return (
    <section id='about'>
      <div className="aboutContent">
        <h1 class='title aboutTitle'>About Me</h1>
        <div class='aboutFlex'>
        <p class='abt'>
            Hello! I'm Srinitish Srinivasan, a passionate researcher and innovator in the field of Artificial Intelligence 
            and Mathematics. My skills involve Linear Algebra, Statistics, Calculus, Machine and Deep Learning apart from 
            being proficient in several programming languages and development frameworks such as Python, C, C++, Javascript, 
            PyTorch, Tensorflow, Flask and Django. My current research interests lie within the domain of Graph Theory and 
            Graph Neural Networks especially Dynamic Graphs. I love reading new research, connecting with different people 
            and exchanging new ideas. If I am not working on some deep learning model, I am either listening to K-Pop or 
            watching a K-Drama :))
        </p>
        <img src='profilePic.jpg' class='dp'></img>
      </div>

            
      </div>
    </section>
  );
};

export default About;
