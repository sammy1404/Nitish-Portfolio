import React from 'react';
import './home.css'; // Add your styles here

const Home = () => {
  return (
    <section id='home'>
      <div className="content">
        <h1 className="title">Srinitish Srinivasan's Portfolio</h1>
        <p className="description">
          Explore my research, projects and more!
        </p>
        <a href="#about" className="cta-button">More about me →</a>
      </div>
    </section>
  );
};

export default Home;
