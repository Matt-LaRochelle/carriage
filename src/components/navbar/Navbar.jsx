import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../images/brandywine_logo.png'
import {AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';



function Navbar() {

  const [nav, setNav] = useState(false);

  return (
    <header className={styles.navbar}>
      <img src={logo} alt="logo of horse in a wine glass" className={styles.image}></img>
      <nav>
        <ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu]}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About Us</Link>
          </li>
          <li>
            Our Tours
          </li>
          <li>
            Our Horses HORSES
          </li>
          <li>
            Contact Us
          </li>
          <li>
            Watkins Regional Park Winter Festival of Lights
          </li>
          <li>
            Weddings and Other Events
          </li>
          <li>
            You've Booked a Tour: Now What?
          </li>
          <li>
            Links
          </li>
        </ul>
      </nav>
      <div onClick={()=> setNav(!nav)} className={styles.mobile_btn}>
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}   
      </div>
    </header>
  );
};

export default Navbar;