import React from "react";
import styles from './Links.module.css';

function Links() {
    return (
        <div>
            <div className={styles.top}>
                <h1 className={styles.top_title}>Links to Recommended Sites</h1>
            </div>
            <div className={styles.tan}>
                <a href="https://janemarkwinery.com/">Janemark Winery and Vineyard</a>
                <p>Committed to Sustainable Farming, They Offer Some of the Best Wines and Grapes Maryland Has to Offer</p>
                <a href="https://www.romanowinery.com/">Romano Vineyard and Winery</a>
                <p>Family Owned and Operated, Committed to Handcrafted Wine and Preserving the Taste of Maryland with Pride</p>
                <a href="https://www.visitmaryland.org/driving-tours/legacy-wine-trail">Legacy Wine Trail</a>
                <p>Celebrating  Maryland’s Capital Region's rich farming traditions and its rapidly growing legacy as a premiere wine growing region, the Legacy Wine Trail is Maryland’s newest, and a great getaway just a short trip from Baltimore and D.C.</p>
                <a href="https://www.hennessycreek.com/">Hennessy Creek</a>
                <p>Beautiful <strong>Bed and Breakfast</strong> in Brandywine, MD, Less Than Ten Minutes From our Wineries, as well as a beautiful, large event venue. Family Owned and Operated.</p>
                <a href="https://www.tcarriage.com/">Tanglao Carriage Driving</a>
                <p>Maryland and Pennsylvania's Premier <strong>Horse Drawn Carriage</strong>, Carriage Training, and Horse Boarding services - for all your event needs!</p>
                <a href="https://www.southerngracefarm.com/">Southern Grace Farm</a>
                <p>Offering <strong>Horseback Trail Riding</strong> to All Ages in La Plata, MD</p>
                <a href="https://www.facebook.com/SOOFHOFFICIAL/about/">Stepping Out on Faith Horsemanship</a>
                <p>Jordan Chase - Offering <strong>Horseback Riding Lessons</strong> and Mentoring in Southern Maryland</p>
                <a href="https://vino301.com/">Vino 301</a>
                <p><strong>Wine concierge</strong> to Maryland’s finest wineries! Take a day trip to several offered regional wine tours. Perfect for large groups.</p>
                <a href="https://acupuncturebykristen.com/">Acupuncture by Kristen - Animal Acupuncture</a>
                <p>Kristin Harper - Certified and Licensed Animal Acupuncturist - Kristen works on all of our horses to keep them in tip top shape!</p>
            </div>
        </div>
    );
}

export default Links;