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
            <Link to="tours">Our Tours</Link>
          </li>
          <li>
            <Link to="horses">Our Horses</Link>
          </li>
          <li>
            <Link to="contact">Contact Us</Link>
          </li>
          <li>
            <Link to="lights">Watkins Regional Park Winter Festival of Lights</Link>
          </li>
          <li>
            <Link to="events">Weddings and Other Events</Link>
          </li>
          <li>
            <Link to="now_what">You've Booked a Tour: Now What?</Link>
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