import React from 'react';
import styles from './About.module.css';

function About() {
    return (
        <div>
            <div className={styles.top}>
                <h1 className={styles.top_title}>Our Farm</h1>
            </div>
            <div className={styles.green}>
                <p>Brandywine Carriage Tours is the brainchild of Jonathan and Shoshana Haag. The Haags came to Brandywine, MD in late 2020 to establish their family farm. Upon moving in they discovered their proximity to some of the finest wineries in Maryland, including several on the Legacy Wine Trail; a collection of local wineries celebrating Maryland’s farming traditions and growing popularity as a premiere wine growing region.</p>    
            </div>
            <div className={styles.tan}>
                <p className={styles.tan_content}>Jonathan and Shoshana brainstormed the idea to use her experience of driving for a carriage company while they were stationed at his last active duty assignment for the United States Army to bring a fun and unique experience to their new community.</p>
                <img className={styles.image_1} src="https://images.squarespace-cdn.com/content/v1/600dd33c276d9d4dbba3cc19/1612385204378-64QMV9TM8Z9KGQFTVEET/jon+and+shosh+basic+graduation.jpg?format=1500w" />
            </div>
            <div className={styles.green_2}>
                <img className={styles.image_2_bg} src="https://images.squarespace-cdn.com/content/v1/600dd33c276d9d4dbba3cc19/1612385244623-MZM95K082W3VROOR5PL9/jon+and+shosh+birthday.jpg?format=1500w" />
                <p className={styles.green_2_content}>To that end, they were inspired to share their love of horses and fine wines by offering carriage tours through participating vineyards of the Legacy Wine Trail, and around the scenic countryside of Brandywine. </p>
                <img className={styles.image_2_sm} src="https://images.squarespace-cdn.com/content/v1/600dd33c276d9d4dbba3cc19/1612385244623-MZM95K082W3VROOR5PL9/jon+and+shosh+birthday.jpg?format=1500w" />
            </div>
        </div>
    );
}

export default About;