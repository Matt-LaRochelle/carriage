import React from 'react';
import styles from './Tours.module.css';

function Tours() {
    return (
        <div>
            <div className={styles.top}>
                <h1 className={styles.top_title}>Our Tours</h1>
                {/* <p>Photo by GRL photography</p> */}
            </div>
            <div>
            <p>Photo by GRL photography</p>
            <h1>One hour country tour experience</h1>
            <p>Enjoy a four mile roundtrip jaunt down local lanes on our horse-drawn carriage. The sounds of our horses’ hooves relax you as we pass by open fields, woods, and the bounty of Maryland farms.  As we go, you can learn about the Legacy Wine Trail, Maryland’s farming history, and the unique stories of the Brandywine and Baden communities. 

If wine is your thing, you can easily visit Janemark Winery before or after your tour, as they are located right across the street from our farm, Windmill Equestrian! You are also welcome to bring any of your purchases from the wineries onto the carriage. All of the wineries on the Legacy Wine Trail are within ten miles of our farm as well, so you can plan out your trip to include more than one. Sipping and riding is highly encouraged!

1 hour experience

$225 flat rate - Carriage fits up to four “average sized” adult passengers </p>
            </div>
        </div>
    );
}

export default Tours;