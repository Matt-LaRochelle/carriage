import React from "react";
import styles from './Lights.module.css';

function Lights() {
    return (
        <div>
            <div className={styles.top}>
                <h1 className={styles.top_title}>Winter Festival of Lights</h1>
            </div>
            <div className={styles.tan}>
                <h3>At Watkins National Park</h3>
                <h4>A PG County Parks and Recreation Facility</h4>
                <p>Since the 35th annual Winter Festival of Lights at Watkins Regional Park in 2021, Brandywine Carriage Tours has been privileged to partner with PG County Parks and Recreation to bring horse drawn carriage rides through the festival.</p>
                <img className={styles.image_2} src="https://images.squarespace-cdn.com/content/v1/600dd33c276d9d4dbba3cc19/f7c3b24b-d29f-46be-9c2b-ec71f9c85a2e/F071ADB6-6F29-4CFB-ABAE-830535454B00.jpeg?format=1500w" />
            </div>
            <div className={styles.green}>
                <h3>Festival of Lights 2022 Reservations!</h3>
                <p>You must purchase your tickets through the PG county parks and rec via the parks direct website</p>
                <a href="https://web1.myvscloud.com/wbwsc/mdpgparkswt.wsc/splash.html">Parks and Rec Page</a>
                <img className={styles.fol} src="https://images.squarespace-cdn.com/content/v1/600dd33c276d9d4dbba3cc19/649412d2-4b34-4b4e-9930-007fcaf13799/A640C8F0-28B3-4314-82AB-EE5F9A86D15B.jpeg?format=750w" />
            </div>
        </div>
    );
}

export default Lights;