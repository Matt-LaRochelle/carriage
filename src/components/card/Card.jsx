import React from 'react';
import styles from './Card.module.css';

function Card(props) {
    return (
        <div className={styles.card}>
            <img src={props.image} className={styles.image}></img>
        </div>
    );
}

export default Card;