import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './CartPage.module.css'

export const Cartpage = () => {

    const [cartData, setCartData] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/cart")
            .then((res) => {
                const products = res.data
                // console.log(products);
                setCartData(products)
            })
    }, [])
    const handleDelete = (e) => {
        axios.delete(`http://localhost:3001/cart/${e.id}`)
        setCartData(cartData.filter((el) => {
            return e.id !== el.id
        }))
    }
    return (
        <div className={styles.cartPageContainer}>
            {
                cartData?.map((e, id) => (
                    <div key={e.id} className={styles.productdiv}>
                        <img src={e.image} alt="" />
                        <div>
                            <h5>{e.model}</h5>
                            <p>{e.variant}</p>
                            <h6>₹ {e.price}</h6>
                        </div>
                        <button onClick={() => { handleDelete(e) }} >Remove</button>
                    </div>
                ))
            }

        </div>
    )
}
