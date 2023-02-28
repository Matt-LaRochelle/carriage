import React from 'react';
import styles from './Contact.module.css';

function Contact() {
    return (
        <div>
            <div className={styles.top}>
                <h1 className={styles.top_title}>Contact Us</h1>
            </div>
            <div className={styles.tan}>
                <h3>Please feel free to contact us with any questions!</h3>
                <form>
                    <input type="text" placeholder="First Name"></input>
                    <input type="text" placeholder="Last Name"></input>
                    <input type="text" placeholder="Email"></input>
                    <input type="text" placeholder="Subject"></input>
                    <input type="text" placeholder="Message"></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;