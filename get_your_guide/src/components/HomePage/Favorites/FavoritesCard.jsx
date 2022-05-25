import React from 'react'
import styles from './Favorites.module.css'

export const FavoritesCard = ({ url, tourLocation, smallGrp, pickingUp, rating, price, reviews }) => {
    return (
        <div className={styles.favoriteCard}>
            <div className={styles.image}>
                <img src={url} alt="" />
            </div>
            <div className={styles.locationDetails}>
                <p className={styles.location}>{tourLocation}</p>
                <p>{smallGrp}</p>
                <p>{pickingUp}</p>
            </div>
            <div className={styles.priceDetails}>
                <p className={styles.rating}>{rating} ({reviews}reviews)</p>
                <p className={styles.price}>From ₹ {price} <span>per person</span></p>
            </div>
        </div>
    )
}
