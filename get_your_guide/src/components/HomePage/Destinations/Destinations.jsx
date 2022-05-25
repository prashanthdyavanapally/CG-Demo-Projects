import React from 'react'
import styles from './Destinations.module.css'

export const Destinations = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.destinationsContainer}>
                <h1>Get beneath the surface of these destinations</h1>
                <div className={styles.destinations}>
                    <div><p>London</p></div>
                    <div><p>Edinburgh</p></div>
                    <div><p>Krakow</p></div>
                    <div><p>Amsterdam</p></div>
                    <div><p>Dubai</p></div>
                    <div><p>Paris</p></div>
                </div>
            </div>
            <div className={styles.authenticExp}>
                <div >
                    <img src="https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/bltcb24f0f348723b37/621f466289fbff50b638e791/discover-experiences.svg" alt="" />
                    <div className={styles.h2}>
                        <h2>Find authentic experiences</h2>
                        <p>Follow your curiosity, feel the joy of real discoveries,<br />and explore more of the world.</p>
                    </div>
                </div>
                <div>
                    <img src="https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt86b5905785080307/621f466989fbff50b638e795/free-cancellation.svg" alt="" />
                    <div className={styles.h2}>
                        <h2>Book with flexibility</h2>
                        <p>Get free cancellation, plan on the go, and book<br />last minute. Discover the world your way.</p>
                    </div>
                </div>
                <div>
                    <img src="https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blte827cf15c8453a2f/621f46733906ee6894808e34/itinerary.svg" alt="" />
                    <div className={styles.h2}>
                        <h2>Explore the possibilities</h2>
                        <p>Enjoy personalised recommendations and<br />itineraries with over 60,000 guided tours, iconic<br />attractions, and more.</p>
                    </div>
                </div>
            </div>
            <div className={styles.topHydSites}>
                <h1>Top sights near Hyderabad</h1>
                <div className={styles.hydSites}>
                    <div>
                        <h2> 1. Charminar</h2>
                    </div>
                    <div>
                        <h2> 2. Golconda Fort</h2>
                    </div>
                </div>
            </div>
            <div className={styles.nextTrip}>
                <h1>Get inspired for your next trip</h1>
                <div className={styles.nextTripLocation}>
                    <div>
                        <img src="https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blte4078f04d9685435/62285f97eda9a1043584a632/London-Maps-Day_1.png" alt="" />
                        <p>48 hours in London</p>
                    </div>
                    <div>
                        <img src="https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/bltf8c749e368e40e55/62285fc04142c3684bf52f00/Edinburgh-Maps-Day_1.png" alt="" />
                        <p>48 hours in Edinburgh</p>
                    </div>
                    <div>
                        <img src="https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt453ee4e141281742/62286004f603d566e798fd0d/Amsterdam-Map-Day_1.png" alt="" />
                        <p>48 hours in Amsterdam</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
