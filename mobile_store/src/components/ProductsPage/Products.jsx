import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Carousell } from '../Homepage/Carousel/Carousel'
import styles from './Products.module.css'


export const Products = () => {

    const [mobiles, setMobiles] = useState([])
    const [filteredData, setFilteredData] = useState([])

    const getProducts = () => {
        axios.get('http://localhost:3001/oneplus').then((res) => {
            const products = res.data
            // console.log(products);
            setMobiles(products);
        })
    }
    useEffect(() => {
        getProducts()
    }, [])



    const addToCart = (e) => {
        const productDetails = {
            id: e.id,
            image: e.image,
            model: e.model,
            variant: e.variant,
            price: e.price
        }
        axios.post("http://localhost:3001/cart", productDetails);
        alert("Product added to cart successfully")
        console.log(productDetails);
    }
    const handleChange = (e) => {
        let value = e.target.value
        console.log(value);
        if (value === 'lowtohigh') {
            axios.get(`http://localhost:3001/oneplus?_sort=price&_order=asc`)
                .then((res) => {
                    setMobiles(res.data)
                })
        } else if (value === 'hightolow') {
            axios.get(`http://localhost:3001/oneplus?_sort=price&_order=desc`)
                .then((res) => {
                    setMobiles(res.data)
                })
        } else {
            axios.get(`http://localhost:3001/oneplus`)
                .then((res) => {
                    setMobiles(res.data)
                })
        }
    }

    const handleFilter = (e) => {
        let value = e.target.value
        // console.log(value);
        if (value === '5to10') {
            const filteredMobiles = mobiles.filter((el) => {
                return el.discount >= 5 && el.discount <= 10
            })
            setFilteredData(filteredMobiles)
        } else if (value === "10to15") {
            const filteredMobiles = mobiles.filter((el) => {
                return el.discount >= 10 && el.discount <= 15
            })
            setFilteredData(filteredMobiles)
        } else if (value === "15to20") {
            const filteredMobiles = mobiles.filter((el) => {
                return el.discount >= 15 && el.discount <= 20
            })
            setFilteredData(filteredMobiles)
        } else {
            setFilteredData(mobiles)
        }
    }


    return (
        <div>
            <Carousell />
            <div style={{ width: '80%', margin: "auto" }}>
                <div className={styles.selectTag}>
                    <label >Filter By:</label>{" "}
                    <select name="filter" id="filter" onChange={handleFilter}>
                        <option value="select">select</option>
                        <option value="5to10">5% - 10%</option>
                        <option value="10to15">10% - 15%</option>
                        <option value="15to20">15% - 20%</option>
                    </select>
                </div>
                <div className={styles.selectTag}>
                    <label >Sort By:</label>{" "}
                    <select name="sort" id="sort" onChange={handleChange}>
                        <option value="relevance">Relevance</option>
                        <option value="lowtohigh">Price - Low to High</option>
                        <option value="hightolow">Price - High to Low</option>
                    </select>
                </div>
                <div className={styles.productsContainer}>
                    {
                        filteredData.length !== 0 ? filteredData.map((e, id) => (
                            <div key={e.id} className={styles.productDiv}>
                                <img src={e.image} alt="" />
                                <h5>{e.model}</h5>
                                <p>{e.variant}</p>
                                <p style={{ color: 'red', fontWeight: "bold" }}>{e.discount}% off</p>
                                <h6>₹ {e.price}</h6>
                                <button onClick={() => { addToCart(e) }}>Add to Cart</button>
                            </div>
                        )) : mobiles.map((e, id) => (
                            <div key={e.id} className={styles.productDiv}>
                                <img src={e.image} alt="" />
                                <h5>{e.model}</h5>
                                <p>{e.variant}</p>
                                <p style={{ color: 'red', fontWeight: "bold" }}>{e.discount}% off</p>
                                <h6>₹ {e.price}</h6>
                                <button onClick={() => { addToCart(e) }}>Add to Cart</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
