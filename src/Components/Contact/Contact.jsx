import React from 'react';
import './Contact.css';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append('access_key', 'dccf1bca-ca63-4ef1-8aeb-f5be2f447e83');

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      //! Burası Değiştirilecek
      console.log('Success', res);
    }
  };
  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <p id="contact" style={{ marginBottom: '20px' }}></p>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk.</h1>
          <p>I'm currently looking for new opportunities.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /> <p>emirberkoncu@gmail.com</p>
            </div>
            <div className="contact-detail" style={{ marginLeft: '5px' }}>
              <img src={location_icon} alt="" />{' '}
              <p style={{ marginLeft: '7px' }}>TR, Istanbul / Uskudar</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea name="message" rows="8" placeholder="Enter your message" />
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
