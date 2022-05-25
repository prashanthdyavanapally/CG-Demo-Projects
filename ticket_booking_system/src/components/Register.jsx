import React from 'react'
import { useState } from "react";
import styles from './Register.module.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const Register = () => {
    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
    });

    const navigate=useNavigate()

    const handeleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        })
    }

    const handleSignUp = () => {
        console.log(data);
        axios.post('http://localhost:3001/Passengers', data);
        alert("Successfully Registered");
        navigate('/Login')
    }

    return (
        <div className={styles.app}>
            <h1>Sign Up</h1>
            <input className={styles.signupinput}
                type="text"
                onChange={handeleChange}
                name="firstname"
                placeholder="First Name"
            />
            <br />
            <input className={styles.signupinput}
                type="text"
                onChange={handeleChange}
                name="lastname"
                placeholder="Last Name"
            />
            <br />
            <input className={styles.signupinput}
                type="text"
                onChange={handeleChange}
                name="email"
                placeholder="Email"
            />
            <br />
            <input className={styles.signupinput}
                type="password"
                onChange={handeleChange}
                name="password"
                placeholder="Password"
            />
            <br />
           <p className={styles.ptag} >Already a member? <button onClick={()=>navigate('/Login')}  className={styles.login}>Log In</button></p>
            <br />
            <button className={styles.signup} onClick={handleSignUp} disabled={data.firstname.trim().length === 0 || data.lastname.charAt().length === 0 || data.password.trim().length === 0 || data.email.trim().length === 0}>Sign up</button>


        </div>
    )
}
