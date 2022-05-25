import React from 'react'
import styles from './TopAttractions.module.css'

export const TopAttractions = () => {
    return (
        <div className={styles.topAttractionsContainer}>
            <h1>Top attractions woldwide</h1>
            <div className={styles.topAttractions}>
                <div style={{
                    backgroundImage: "url('https://cdn.getyourguide.com/img/location/60096cd94f74e.jpeg/87.webp')",
                }}>
                    <h2>Niagara Falls</h2>
                    <p>37 tours & activities</p>
                </div>
                <div style={{
                    backgroundImage: "url('https://cdn.getyourguide.com/img/location/60096cee5881e.jpeg/87.webp')",
                }}>
                    <h2>Palace of Versailles</h2>
                    <p>58 tours & activities</p>
                </div>
                <div style={{
                    backgroundImage: "url('https://cdn.getyourguide.com/img/location/5d399514af74d.jpeg/87.webp')",
                }}>
                    <h2>Oranjestad</h2>
                    <p>22 tours & activities</p>
                </div>
                <div style={{
                    backgroundImage: "url('https://cdn.getyourguide.com/img/location/60096e254549c.jpeg/87.webp')",
                }}>
                    <h2>Grand Canyon</h2>
                    <p>99 tours & activities</p>
                </div>
            </div>
        </div>
          
    )
}
