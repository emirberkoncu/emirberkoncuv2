import React, { useRef, useState } from 'react';
import './Navbar.css';
import underline from '../../assets/nav_underline.svg';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = '0';
  };

  const closeMenu = () => {
    menuRef.current.style.right = '-350px';
  };

  return (
    <div className="navbar">
      <p style={{ fontSize: '30px' }}>Emir Berk Öncü</p>
      {/* <img src={logo} alt="" /> */}
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          alt=""
          onClick={closeMenu}
          className="nav-mob-close"
        />
        <li>
          <a className="anchor-link" href="#home">
            <p onClick={() => setMenu('home')}>Home</p>
            {menu === 'home' ? <img src={underline} alt="" /> : ''}
          </a>
        </li>

        <li>
          <a className="anchor-link" offset={50} href="#services">
            <p onClick={() => setMenu('services')}>Services</p>{' '}
            {menu === 'services' ? <img src={underline} alt="" /> : ''}
          </a>
        </li>
        <li>
          <a className="anchor-link" offset={50} href="#work">
            <p onClick={() => setMenu('work')}>Portfolio</p>{' '}
            {menu === 'work' ? <img src={underline} alt="" /> : ''}
          </a>
        </li>
        <li>
          <a className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu('contact')}>Contact</p>{' '}
            {menu === 'contact' ? <img src={underline} alt="" /> : ''}
          </a>
        </li>
      </ul>
      <div className="nav-connect">
        <a href="#contact" className="anchor-link" offset={50}>
          Connect With Me
        </a>
      </div>
    </div>
  );
};

export default Navbar;
