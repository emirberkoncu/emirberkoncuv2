import React from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';

const MyWork = () => {
  return (
    <div className="mywork">
      <div className="mywork-title">
        <p style={{ marginBottom: '45px' }} id="work"></p>
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        <a
          href="https://passwordgenerator-ashy.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Password Generator
          <img src="/images/project1.jpg" alt="Project Image" />
        </a>
        <a
          href="https://emirberkoncu-quiz.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Quiz App
          <img src="/images/project2.jpg" alt="Project Image" />
        </a>

        <a
          href="https://todomoro-app-emirberkoncu.vercel.app/todo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Todo App
          <img src="/images/project13.jpeg" alt="Project Image" />
        </a>

        <a
          href="https://boefitnessacademy.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Boe Fitness Academy
          <img src="/images/project4.png" alt="Project Image" />
        </a>

        <a
          href="https://ecommercesite-lyart.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ecommerce Site
          <img src="/images/project7.png" alt="Project Image" />
        </a>
        <a
          href="https://weatherapp-emirberkoncu.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Weather App
          <img src="/images/weather.png" alt="Project Image" />
        </a>
        <a
          href="https://moviesearch-sage.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Movie Search App
          <img src="/images/moviesearch.png" alt="Project Image" />
        </a>
        <a
          href="https://tictactoe-orcin-five.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tic-Tac-Toe
          <img src="/images/tictactoe.png" alt="Project Image" />
        </a>
        <a
          href="https://cryptocurrency-nine-liard.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Crypto Tracker
          <img src="/images/crypto.png" alt="Project Image" />
        </a>
      </div>
      <div className="mywork-showmore">
        <p></p>
      </div>
    </div>
  );
};

export default MyWork;
