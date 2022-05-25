import React from 'react'
import { FavoritesCard } from './FavoritesCard'
import styles from './Favorites.module.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export const Favorites = () => {

    const responsive = {
       
        desktop: {
            breakpoint: { max: 3500, min: 1024 },
            items: 4,
            slidesToSlide: 4
        },
    };

    return (
        <div className={styles.favoritesContainer}>
            <h1>Our favorite experiences worldwide</h1>
            <Carousel responsive={responsive} autoPlay={false} autoPlaySpeed={10000} transitionDuration={1000}>
                <FavoritesCard
                    url='https://cdn.getyourguide.com/img/mic/crop-tour-277-502f5c71875b4016.jpeg/wide_320_uncropped_q50.webp'
                    tourLocation='Dubai: Old town, Dubai Creek, Souks, and Street Food Tour'
                    smallGrp='Small group'
                    pickingUp='Pickup available'
                    rating='4.9'
                    reviews='1,665'
                    price='3,557'
                />
                <FavoritesCard
                    url='https://cdn.getyourguide.com/img/mic/crop-tour-277-60d04e4533d6a.jpeg/wide_320_uncropped_q50.webp'
                    tourLocation='Las Vegas: Antelope Canyon & Horseshoe Bend Tour'
                    smallGrp='Small group'
                    pickingUp='Pickup available'
                    rating='4.8'
                    reviews='482'
                    price='23,771'
                />
                <FavoritesCard
                    url='https://cdn.getyourguide.com/img/mic/crop-tour-277-459ac8be6adc7182.jpeg/wide_320_uncropped_q50.webp'
                    tourLocation='Rome: Street Food Tour with Local Guide'
                    smallGrp='Small group'
                    pickingUp='Pickup available'
                    rating='4.9'
                    reviews='1,072'
                    price='3,682'
                />

                <FavoritesCard
                    url='https://cdn.getyourguide.com/img/mic/crop-tour-277-5f8fef6189f28.jpeg/wide_320_uncropped_q50.webp'
                    tourLocation='Little Havana: Food & Cultural Walking Tour with Lunch'
                    smallGrp='Small group'
                    pickingUp='Pickup available'
                    rating='4.9'
                    reviews='173'
                    price='5,454'
                />
                <FavoritesCard
                    url='https://cdn.getyourguide.com/img/mic/crop-tour-277-502f5c71875b4016.jpeg/wide_320_uncropped_q50.webp'
                    tourLocation='Dubai: Old town, Dubai Creek, Souks, and Street Food Tour'
                    smallGrp='Small group'
                    pickingUp='Pickup available'
                    rating='4.9'
                    reviews='1,665'
                    price='3,557'
                />
                <FavoritesCard
                    url='https://cdn.getyourguide.com/img/mic/crop-tour-277-60d04e4533d6a.jpeg/wide_320_uncropped_q50.webp'
                    tourLocation='Las Vegas: Antelope Canyon & Horseshoe Bend Tour'
                    smallGrp='Small group'
                    pickingUp='Pickup available'
                    rating='4.8'
                    reviews='482'
                    price='23,771'
                />
                <FavoritesCard
                    url='https://cdn.getyourguide.com/img/mic/crop-tour-277-459ac8be6adc7182.jpeg/wide_320_uncropped_q50.webp'
                    tourLocation='Rome: Street Food Tour with Local Guide'
                    smallGrp='Small group'
                    pickingUp='Pickup available'
                    rating='4.9'
                    reviews='1,072'
                    price='3,682'
                />

                <FavoritesCard
                    url='https://cdn.getyourguide.com/img/mic/crop-tour-277-5f8fef6189f28.jpeg/wide_320_uncropped_q50.webp'
                    tourLocation='Little Havana: Food & Cultural Walking Tour with Lunch'
                    smallGrp='Small group'
                    pickingUp='Pickup available'
                    rating='4.9'
                    reviews='173'
                    price='5,454'
                />
            </Carousel>
         
        </div>
    )
}
