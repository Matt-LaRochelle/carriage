import React from 'react';
import styles from './Contact.module.css';
import emailjs from 'emailjs-com';

function Contact() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_q2lwrpk', 'template_1u8hncq', e.target, 'glIU5aKO-dstGXEV2')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }
    return (
        <div>
            <div className={styles.top}>
                <h1 className={styles.top_title}>Contact Us</h1>
            </div>
            <div className={styles.tan}>
                <h3>Please feel free to contact us with any questions!</h3>
                <form onSubmit={sendEmail}>
                    <div className={styles.name}>
                        <input type="text" placeholder="First Name" name="first_name"></input>
                        <input type="text" placeholder="Last Name" name="last_name"></input>
                    </div>
                    <div className={styles.content}>
                        <input type="email" placeholder="Email" name="email"></input>
                        <input type="text" placeholder="Subject" name="subject"></input>
                    </div>
                    <input type="text" placeholder="Message" className={styles.message} name="message"></input>
                    <br></br>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;