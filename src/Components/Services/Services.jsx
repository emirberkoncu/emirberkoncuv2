import React from 'react';
import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Services_Data from '../../assets/services_data';

const Services = () => {
  return (
    <div className="services">
      <p id="services"></p>
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container" id="services">
        {Services_Data.map((item, i) => {
          return (
            <div key={i} className="services-format">
              <h2>{item.s_name}</h2>
              <p>{item.s_desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
