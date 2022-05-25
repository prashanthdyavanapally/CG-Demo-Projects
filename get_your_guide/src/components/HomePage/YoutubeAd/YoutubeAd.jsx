import React from 'react'
import styles from './YoutubeAd.module.css'

export const YoutubeAd = () => {
    return (
        <div className={styles.adContainer}>
            <div className={styles.adVideo}>
                <div className={styles.adVideoText}>
                    <h1>Escape the tourist traps | <br />GetYourGuide</h1>
                    <p>Go beyond the surface of the world’s must-see travel destinations.<br />Discover our authentic, unforgettable experiences and explore the<br />world for real.</p>
                </div>
                <div className={styles.adVideoContent}>
                    <iframe width="700" height="400" src="https://www.youtube.com/embed/UB3j4fkzFck" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div className={styles.signup}>
                <div>
                    <img src="https://cdn.getyourguide.com/tf/assets/static/newsletter-signup/newsletter-background.jpg" alt="" />
                </div>
                <div className={styles.signupInput}>
                    <h1>Your travel journey starts here</h1>
                    <p>Sign up now for travel tips, personalized itineraries, and vacation<br />inspiration straight to your inbox.</p>
                    <input type="text" placeholder="Your email" /> <button>Sign up</button>
                </div>
                <p className={styles.privacyPolicy}>By signing up, you agree to receive promotional emails. You can unsubscribe at any time. For more information, read our <span> Privacy statement</span> .</p>

            </div>
        </div>
    )
}
