import React from 'react';
import styles from './Horses.module.css';

function Horses() {
    return (
        <div>
            <div className={styles.top}>
                <h1 className={styles.top_title}>Our Horses</h1>
            </div>
            <div className={styles.tan}>
                <p>When not working, our horses spend their time grazing on our fifteen acres of beautiful farm land. We treat them like family, and make sure all of their nutritional, physical, and emotional needs are met. </p>
                <p>Check out our Facebook page or Instagram for regular updates and behind the scenes posts about our farm, our horses, and our family. </p>
                <p className={styles.icons}><a href="https://www.facebook.com/brandywinecarriagetours"><i class="fa-brands fa-facebook"></i></a><a href="https://www.instagram.com/brandywinecarriagetours/"><i class="fa-brands fa-instagram"></i></a><i class="fa-solid fa-envelope"></i></p>
            </div>
        </div>
    );
}

export default Horses;