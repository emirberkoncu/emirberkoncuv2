import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div id="home" className="hero">
      {/* Değiştirilecek */}
      <img
        src="https://media.licdn.com/dms/image/v2/D4D03AQFtdev7gBIVpg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718303696065?e=1733961600&v=beta&t=e5xlQLPB7klG8JJocJTPmkVn14SzP-GpDvq2khCFxeU "
        alt=""
        className="hero-img"
      />
      <h1>
        <span>I'm Emir Berk Oncu</span>
        <br />
        frontend developer based in <span>TR</span>
      </h1>
      {/* <p>Buraya Tecrübeler Girilecek</p> */}
      <div className="hero-action">
        <div className="hero-connect">
          <a href="#contact" className="anchor-link" offset={50}>
            Connect With Me
          </a>
        </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
