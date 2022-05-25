import React from 'react'
import styles from './TopAttractions.module.css'

export const TopCountries = () => {
    return (
        <div className={styles.topAttractionsContainer}>
            <h1>Top countries</h1>
            <div className={styles.topAttractions}>
                <div style={{
                    backgroundImage: "url('https://cdn.getyourguide.com/img/country/5464f84bc56d4.jpeg/87.webp')",
                }}>
                    <h2>United Kingdom</h2>
                </div>
                <div style={{
                    backgroundImage: "url('https://cdn.getyourguide.com/img/country/546b6bd65a7c7.jpeg/87.webp')",
                }}>
                    <h2>United States</h2>
                </div>
                <div style={{
                    backgroundImage: "url('https://cdn.getyourguide.com/img/country/5464f83007564.jpeg/87.webp')",
                }}>
                    <h2>Italy</h2>
                </div>
                <div style={{
                    backgroundImage: "url('https://cdn.getyourguide.com/img/country/546b6ccc05b7b.jpeg/87.webp')",
                }}>
                    <h2>Spain</h2>
                </div>
            </div>
        </div>
    )
}
