import React from "react";
import styles from './Events.module.css';

function Events() {
    return (
        <div>
            <div className={styles.top}>
                <h1 className={styles.top_title}>Carriage Services</h1>
            </div>
            <div className={styles.tan}>
                <h3>Make any occasion a grand event!</h3>
                <p>We offer a beautiful and professional service for any type of occasion you can imagine. Proms, Quinces, Weddings, Proposals, Anniversaries, Parties...</p>
                <p>A carriage makes for magical memories!</p>
            </div>
            <div className={styles.green}>
                <h3>Make it stand out.</h3>
                <p>We can decorate perfectly for any idea you may have! Choose from our two elegant and comfortable carriages to match your theme. </p>
                <img className={styles.img1}src="https://images.squarespace-cdn.com/content/v1/600dd33c276d9d4dbba3cc19/1632334732515-LY64ADKLRX3X5UKB1T3K/IMG_1636.jpg?format=1500w" />
            </div>
            <div className={styles.tan}>
                <p>Our White Vis-a-Vis Carriage makes an elegant and classic choice for any event. </p>
                <img src="https://images.squarespace-cdn.com/content/v1/600dd33c276d9d4dbba3cc19/84949753-7bf9-43e6-acd8-e8d0b2ae23f3/43EF575D-B9BC-41FD-A2E4-61C557441201.jpeg?format=1500w" />
                <p>The bench seats are green velvet, with space for up to four average sized adult passengers - if you’re piling a few kiddos in we can certainly fit more! - and the white canopy can be opened or removed as desired. </p>
                <p>The beautiful, simple lines make for a perfect canvas for any decorations. We will decorate as requested!</p>
            </div>
            <div className={styles.green}>
                <p>Our Wagonette provides a lovely rustic feel, with leather seating for up to four passengers. Perfect for your farm style wedding, family reunion picnic, or western themed events!</p>
                <img className={styles.img2}src="https://images.squarespace-cdn.com/content/v1/600dd33c276d9d4dbba3cc19/1632335287781-VT5270RHJW16R1FGRBF9/Melody_NordvikIMG_1913.JPG?format=1500w" />
                <p>Just give us a call or an email, and we’ll discuss availability and our charter rates. </p>
            </div>
        </div>
    );
}

export default Events;