import React from 'react';
import styles from './Home.module.css';

function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <h1 className={styles.top_title}>Horse-Drawn Carriage Services</h1>
            </div>
            <div className={styles.about_container}>
                <h2 className={styles.about_title}>Located in the beautiful countryside of Brandywine Maryland, we offer:</h2>
                <div className={styles.about}>
                <p className={styles.about_content}><i class="fa-solid fa-mountain"></i>Countryside Tours</p> 
                <p className={styles.about_content}><i class="fa-solid fa-wine-glass"></i>Windery Stops</p>
                <p className={styles.about_content}><i class="fa-solid fa-gifts"></i>Parties</p>
                <p className={styles.about_content}><i class="fa-regular fa-heart"></i>Weddings</p>
                <p className={styles.about_content}><i class="fa-solid fa-hand-holding-hand"></i>Proposals</p>
                <p className={styles.about_content}><i class="fa-solid fa-pen-ruler"></i>Office Outings</p>
                <p className={styles.about_content}><i class="fa-solid fa-people-pulling"></i>Prom</p>
                <p className={styles.about_content}><i class="fa-solid fa-cake-candles"></i>Anniversaries</p>
                <p className={styles.about_content}><i class="fa-solid fa-wand-magic-sparkles"></i>Celebrations of all Kinds</p>
                </div>
            </div>
            
            <div className={styles.sale}>
                <p className={styles.content}>Join Brandywine Carriage Tours as our beautiful team of Belgian Draft horses take you on a relaxing tour of the Brandywine, MD countryside. You’ll get to enjoy nature, relax, and learn as we teach you about this unique historic farming community and the Legacy Wine Trail! </p>
            </div>
            
            <img src="https://images.squarespace-cdn.com/content/v1/600dd33c276d9d4dbba3cc19/1623716080614-LELMG8CPXCT8EBP4M8QA/IMG_1153.JPG?format=1500w"></img>
            <p>Check out our “Our Tours” page for a full list and description of our tours.</p>
            <button>Our Tours</button>
            <p>IMAGE WILL NOT LOAD</p>
            <p>Book us for any event! We can tailor our services to almost any need: Weddings, proposals, office parties, prom, anniversaries. 
                Call or email to discuss availability and rates! </p>
            <img src="https://images.squarespace-cdn.com/content/v1/600dd33c276d9d4dbba3cc19/a672b353-dbb2-41ad-a089-2f1267991717/D779D5D7-7735-45D4-ACDE-FF73955E616A.jpeg?format=1500w"></img>
            <img src="https://images.squarespace-cdn.com/content/v1/600dd33c276d9d4dbba3cc19/1632332189343-WN9NEZAGSG2MUN2AV8XR/IMG_1635.JPG?format=2500w"></img>
            <p>See our recommended links page for more things to do and services offered in the Southern Maryland region!

                To make a reservation or purchase a gift certificate, please click on our “Book Now” button. </p>
            <p>Social media icons instagram, facebook, email</p>
            <p>Visit our social media to see behind the scenes and get updates about events!</p>
            <img src="https://images.squarespace-cdn.com/content/v1/600dd33c276d9d4dbba3cc19/1632331259712-BOXYU8LPQIJV5ULA67Z8/IMG_1614.JPG?format=2500w"></img>
        </div>
    );
}

export default Home;