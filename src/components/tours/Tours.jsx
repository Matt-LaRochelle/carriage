import React from 'react';
import styles from './Tours.module.css';

function Tours() {
    return (
        <div>
            <div className={styles.top}>
                <h1 className={styles.top_title}>Our Tours</h1>
                {/* <p>Photo by GRL photography</p> */}
            </div>
            <div className={styles.tan_1}>
                <p className={styles.image_author}>Photo by GRL photography</p>
                <h1 className={styles.tan_1_title}>One Hour Country Tour Experience</h1>
                <p>Enjoy a four mile roundtrip jaunt down local lanes on our horse-drawn carriage. The sounds of our horses’ hooves relax you as we pass by open fields, woods, and the bounty of Maryland farms.  As we go, you can learn about the Legacy Wine Trail, Maryland’s farming history, and the unique stories of the Brandywine and Baden communities.</p>
                <p>If wine is your thing, you can easily visit Janemark Winery before or after your tour, as they are located right across the street from our farm, Windmill Equestrian! You are also welcome to bring any of your purchases from the wineries onto the carriage. All of the wineries on the Legacy Wine Trail are within ten miles of our farm as well, so you can plan out your trip to include more than one. Sipping and riding is highly encouraged!</p>
                <h3>One Hour Experience</h3>
                <p>$225 flat rate - Carriage fits up to four “average sized” adult passengers </p>
            </div>
            <div className={styles.green_1}>
                <h1 className={styles.green_1_title}>Two Hour Ride and Winery Experience</h1>
                <p>Relax on the forty-five minute horse-drawn carriage ride to Romano Winery from our family farm. On the way, learn about Maryland’s wine country, local history, and of course anything about horses you’d like to know! </p>
                <p>We’ll hang out at Romano for thirty minutes. The horses will get their water break, snacks and rest while you enjoy the beautiful scenery, the handcrafted wine, and frequently, live music. </p>
                <p>When it’s time to go, you can bring any purchases from the winery onto the carriage and drink while we head the 2.2 miles back to our farm, another 45 minute trip through country lanes with rolling fields, forests and beautiful farms. </p>
                <p>Before or after your tour, you are welcome and encouraged to head over to Janemark Winery, located conveniently across the street from our farm, Windmill Equestrian.  </p>
                <h3>Two Hour Experience</h3>
                <p>$300 flat rate - Carriage fits up to four “average-sized” adult passengers</p>
            </div>
            <div className={styles.tan_2}>
                <p className={styles.tan_2_content}>WE OFFER PRIVATE TOURS  ON OUR LUXURIOUS VIS-À-VIS CARRIAGE. PUT TOGETHER YOUR CUSTOM TOUR PACKAGE FROM THE SELECTIONS BELOW. </p>
                <p className={styles.tan_2_content}>* Now Offering Gift Certificates! Purchase a Gift Experience They’ll Never Forget. *</p>
                <button className={styles.button} type="submit">Book Now</button>
            </div>
        </div>
    );
}

export default Tours;