import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../images/brandywine_logo.png'
import {AiOutlineMenu, AiOutlineClose, AiOutlineArrowDown } from 'react-icons/ai';



function Navbar() {

  const [nav, setNav] = useState(false);
  const [dd1, setDD1] = useState(false);
  const [dd2, setDD2] = useState(false);

  return (
    <header className={styles.navbar}>
      <img src={logo} alt="logo of horse in a wine glass" className={styles.image}></img>
      <nav>
        <ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu]}>
          <li>
            <Link to="/" onClick={()=> setNav(!nav)}>Home</Link>
          </li>
          <li className={styles.li_dropdown} 
              onClick={()=> {
                setDD1(!dd1);
                setDD2(false);
                }}
              >
            About Us <AiOutlineArrowDown style={{transform: dd1 ? "rotate(180deg)" : "none"}} className={styles.arrow} />
            {dd1 && <div className={styles.dd1}>
              <Link className={styles.dd_item1} to="about" onClick={()=> setNav(!nav)}>Our Farm</Link>
              <Link className={styles.dd_item} to="horses" onClick={()=> setNav(!nav)}>Our Horses</Link>
            </div>}
          </li>
          <li className={styles.li_dropdown} 
              onClick={()=> {
                setDD2(!dd2);
                setDD1(false);
                }}
              >
            Tours <AiOutlineArrowDown 
                    style={{transform: dd2 ? "rotate(180deg)" : "none"}}  
                    className={styles.arrow} 
                    />
            {dd2 && <div className={styles.dd2}>
              <Link className={styles.dd_item1} to="tours" onClick={()=> setNav(!nav)}>Our Tours</Link>
              <Link className={styles.dd_item} to="lights" onClick={()=> setNav(!nav)}>Watkins Regional Park Winter Festival of Lights</Link>
              <Link className={styles.dd_item} to="events" onClick={()=> setNav(!nav)}>Weddings and Other Events</Link>
              <Link className={styles.dd_item} to="now_what" onClick={()=> setNav(!nav)}>You've Booked a Tour: Now What?</Link>
              <Link className={styles.dd_item} to="links" onClick={()=> setNav(!nav)}>Links</Link>
            </div>}
          </li>
          <li>
            <Link to="contact" onClick={()=> setNav(!nav)}>Contact Us</Link>
          </li>
        </ul>
        <button type="submit" className={styles.button}>Book Now</button>
      </nav>
      <div onClick={()=> setNav(!nav)} className={styles.mobile_btn}>
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}   
      </div>
    </header>
  );
};

export default Navbar;