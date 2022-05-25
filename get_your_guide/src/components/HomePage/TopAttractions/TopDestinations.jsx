import React from 'react'
import styles from './TopAttractions.module.css'

export const TopDestinations = () => {
    return (
        <div className={styles.topAttractionsContainer}>
            <h1>Top destinations</h1>
            <div className={styles.topAttractions}>
                <div style={{
                    backgroundImage: "url('https://cdn.getyourguide.com/img/location/5ffeb331b58a4.jpeg/87.webp')",
                }}>
                    <h2>Dubai</h2>
                    <p>383 tours & activities</p>
                </div>
                <div style={{
                    backgroundImage: "url('https://cdn.getyourguide.com/img/location/536386e73ae5ce72.jpeg/87.webp')",
                }}>
                    <h2>Krakow</h2>
                    <p>734 tours & activities</p>
                </div>
                <div style={{
                    backgroundImage: "url('https://cdn.getyourguide.com/img/location/5ffeb4d289b13.jpeg/87.webp')",
                }}>
                    <h2>London</h2>
                    <p>741 tours & activities</p>
                </div>
                <div style={{
                    backgroundImage: "url('https://cdn.getyourguide.com/img/location/5ffeb3ce05850.jpeg/87.webp')",
                }}>
                    <h2>Reykjavik</h2>
                    <p>332 tours & activities</p>
                </div>
            </div>
        </div>
    )
}
