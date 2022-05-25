import React from 'react'
import styles from './Search.module.css'

export const Search = () => {
    return (
        <div>
            <div className={styles.bgImg} >
                <div className={styles.search}>
                    <input type="text" placeholder="Where are you going? " />
                    <button>Search</button>
                </div>
                <p className={styles.bgImgText}>Escape the tourist traps<br />with unforgettable travel <br />
                    experiences</p>
            </div>
            <hr className={styles.borderLine} />


        </div>
    )
}
