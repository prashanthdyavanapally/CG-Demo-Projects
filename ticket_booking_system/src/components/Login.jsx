import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import styles from './Register.module.css'

export const Login = () => {
    const [login, setLogin] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate()
    const handleLogin = () => {
        axios.get('http://localhost:3001/Passengers')
            .then(function (response) {
                const passengers = response.data
                passengers.forEach(el => {
                    if (el.email === login.email && el.password === login.password) {
                        navigate('/Form');
                    }
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }
    function handleChange(e) {
        const { value, name } = e.target
        setLogin({
            ...login,
            [name]: value
        })
    }

    return (
        <div className={styles.app}>
            <div >
                <h1>Login</h1>
                <input className={styles.signupinput} type="text" onChange={handleChange} name='email' placeholder="Email" />
                <br />
                <input className={styles.signupinput} type="password" onChange={handleChange} name='password' placeholder="Password" />
                <br />
                <button className={styles.signup} onClick={handleLogin} disabled={login.email.trim().length === 0 || login.password.trim().length === 0} >Login</button>
            </div>


        </div>
    )
}
