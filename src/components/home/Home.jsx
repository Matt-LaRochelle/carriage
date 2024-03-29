import React from 'react';
import styles from './Home.module.css';
import Card from '../card/Card';
import Horse from '../../images/Horses.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFlip, Pagination, Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import function to register Swiper custom elements
// import { register } from 'swiper/element/bundle';
// register Swiper custom elements
// register();

function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <h1 className={styles.top_title}>Horse-Drawn Carriage Services</h1>
            </div>
            <div className={styles.about_container}>
            <h1>Our services are great for:</h1>
                <div className={styles.about}>
                    <p className={styles.about_content}><i class="fa-solid fa-mountain"></i>Countryside Tours</p> 
                    <p className={styles.about_content}><i class="fa-solid fa-wine-glass"></i>Winery Stops</p>
                    <p className={styles.about_content}><i class="fa-solid fa-gifts"></i>Parties</p>
                    <p className={styles.about_content}><i class="fa-solid fa-heart"></i>Weddings</p>
                    <p className={styles.about_content}><i class="fa-solid fa-hand-holding-hand"></i>Proposals</p>
                    <p className={styles.about_content}><i class="fa-solid fa-pen-ruler"></i>Office Outings</p>
                    <p className={styles.about_content}><i class="fa-solid fa-people-pulling"></i>Prom</p>
                    <p className={styles.about_content}><i class="fa-solid fa-cake-candles"></i>Anniversaries</p>
                    <p className={styles.about_content}><i class="fa-solid fa-wand-magic-sparkles"></i>Celebrations of all Kinds</p>
                </div>
            </div>
            <div className={styles.sale}>
                <p className={styles.sale_content}>Join Brandywine Carriage Tours as our team of beautiful horses take you on a relaxing tour of the Maryland Brandywine countryside. You’ll get to enjoy nature, relax, and learn as we teach you about this unique historic farming community and the Legacy Wine Trail! </p>
                <p className={styles.sale_content}>Call or email to discuss availability and rates!</p>
            </div>
            <h2 className={styles.about_title}>Gallery</h2>
            <Swiper 
                effect={"flip"}
                grabCursor={true}
                loop={true}
                pagination={true}
                navigation={true}
                modules={[EffectFlip, Pagination, Navigation]}
                className={styles.mySwiper}
                >
                <SwiperSlide className={styles.swiperslide}><img src="https://images.squarespace-cdn.com/content/v1/600dd33c276d9d4dbba3cc19/a672b353-dbb2-41ad-a089-2f1267991717/D779D5D7-7735-45D4-ACDE-FF73955E616A.jpeg?format=1500w" /></SwiperSlide>
                <SwiperSlide className={styles.swiperslide}><img src="https://images.squarespace-cdn.com/content/v1/600dd33c276d9d4dbba3cc19/1632331259712-BOXYU8LPQIJV5ULA67Z8/IMG_1614.JPG?format=2500w" /></SwiperSlide>
                <SwiperSlide className={styles.swiperslide}><img src="https://images.squarespace-cdn.com/content/v1/600dd33c276d9d4dbba3cc19/1623716080614-LELMG8CPXCT8EBP4M8QA/IMG_1153.JPG?format=1500w" /></SwiperSlide>
                <SwiperSlide className={styles.swiperslide}><img src="https://images.squarespace-cdn.com/content/v1/600dd33c276d9d4dbba3cc19/1632332189343-WN9NEZAGSG2MUN2AV8XR/IMG_1635.JPG?format=2500w" /></SwiperSlide>
                <SwiperSlide className={styles.swiperslide}><img src={Horse} /></SwiperSlide>
            </Swiper>
            <div className={styles.space}>

            </div>
            <div className={styles.final_container}>
            <p className={styles.final_content}>See our recommended links page for more things to do and services offered in the Southern Maryland region!
                    To make a reservation or purchase a gift certificate, please click on our “Book Now” button. </p>
                <button type="submit" className={styles.button}>Book Now</button>
                <p className={styles.final_icons}><a href="https://www.facebook.com/brandywinecarriagetours"><i class="fa-brands fa-facebook"></i></a><a href="https://www.instagram.com/brandywinecarriagetours/"><i class="fa-brands fa-instagram"></i></a></p>
                <p className={styles.final_content}>Visit our social media to see behind the scenes and get updates about events!</p>
            </div>
        </div>
    );
}

export default Home;