import React from 'react';
import styles from './Footer.module.css';

function Footer() {
    return(
        <div className={styles.container}>
            <div className={styles.location}>
                <p>Our family home and farm, Windmill Equestrian, is located across the street from Janemark Winery. </p>
                <p className={styles.address}>15311 Baden Naylor rd, Brandywine, MD 20613</p>
                <p className={styles.request}>Please only come to the farm at your reservation time. </p>
            </div>
            <div className={styles.contact}>
                <p>brandywinecarriagetours@gmail.com</p>
                <p>(301) 861-9333</p>
            </div>
        </div>
    );
}

export default Footer;