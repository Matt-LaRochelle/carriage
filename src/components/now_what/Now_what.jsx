import React from "react";
import styles from './Now_what.module.css';

function Now_what() {
    return (
        <div>
            <div className={styles.top}>
                <h1 className={styles.top_title}>You've Booked a Tour, Now What?</h1>
            </div>
            <div className={styles.tan}>
                <p>Head to our family farm to <strong>park</strong> your vehicle and meet your carriage at your scheduled time. You are welcome to head to the wineries prior to your carriage ride during their business hours, as well as to stay at the winery or visit other local wineries after your tour during their business hours. </p>
                <p>Please wear <strong>clothing</strong> appropriate to the weather, we are outside the majority of the time. Sunglasses and/or a sun hat are always a good idea! We do have a canopy and a blanket on the carriage to cope with sun or cold, but good clothing choices always help. </p>
                <p>If the <strong>weather</strong> does not cooperate, either when the temperatures reach 92 degrees fahrenheit or above, or other inclement weather (i.e. thunder, ice, rainstorm), we will reschedule your ride for a date at your earliest convenience. </p>
                <p>However, for any reason other than inclement weather, you can only <strong>reschedule or cancel your ride a minimum of 48 hours in advance.</strong> Please see our cancellation and reschedule policy outlined in the terms and agreements sent in your confirmation email. </p>
                <p>Outside alcohol is <strong>NOT PERMITTED</strong> at the wineries per Maryland State Law. </p>
                <p>Outside food is discouraged, (there are food trucks frequently available at the wineries), but a SMALL personal cooler is permitted. </p>
                <p><strong>Tipping your driver is appreciated. </strong></p>
                <p>Please feel free to reach out to us at <strong>919-270-6547</strong> for any further questions, or email us at <strong>brandywinecarraigetours@gmail.com</strong></p>
                <p><strong>Haag Family Farm - 15311 Baden Naylor rd, Brandywine, MD 20613</strong></p>
                <img src="https://images.squarespace-cdn.com/content/v1/600dd33c276d9d4dbba3cc19/1623790178846-HUG6VW8TI3FPEOA9EAQE/Jess+DJ+pic.jpeg?format=1500w" />
            </div>
        </div>
    );
}

export default Now_what;