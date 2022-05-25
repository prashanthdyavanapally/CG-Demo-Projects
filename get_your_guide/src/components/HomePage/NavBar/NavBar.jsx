import React from 'react'
import styles from './NavBar.module.css'

export const NavBar = () => {
    return (
        <div>
            <div className={styles.navbar}>
                <div className={styles.navLogo}>
                    <img src="https://www.linkpicture.com/q/logo_286.png" alt="Get Your Guide" />
                </div>
                <div className={styles.navLinks}>
                    <div>English</div>
                    <div>INR(₹)</div>
                    <div>Wishlist</div>
                    <div>Cart</div>
                    <div>Help</div>
                    <div>Log In</div>
                    <button>Sign up</button>
                </div>
            </div>
        </div>
    )
}
