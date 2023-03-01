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
                    <div className={styles.name}>
                        <input type="text" placeholder="First Name"></input>
                        <input type="text" placeholder="Last Name"></input>
                    </div>
                    <div className={styles.content}>
                        <input type="email" placeholder="Email"></input>
                        <input type="text" placeholder="Subject"></input>
                    </div>
                    <input type="text" placeholder="Message" className={styles.message}></input>
                    <br></br>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;