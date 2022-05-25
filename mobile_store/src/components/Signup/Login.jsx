import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import styles from './Signup.module.css'

export const Login = () => {
    const [login, setLogin] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate()
    const handleLogin = () => {
        axios.get('http://localhost:3001/users')
            .then(function (response) {
                const passengers = response.data
                passengers.forEach(el => {
                    if (el.email === login.email && el.password === login.password) {
                        navigate('/');
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
        <>
            <div className={styles.app}>
                <div >
                    <h1>Login</h1>
                    <input type="text" onChange={handleChange} name='email' placeholder="Email" />
                    <br />
                    <input type="password" onChange={handleChange} name='password' placeholder="Password" />
                    <br />
                    <p className={styles.ptag} >Don't have an account? <button onClick={() => navigate('/signup')} className={styles.login}>Sign up</button></p>
                    <br />
                    <button className={styles.signup} onClick={handleLogin} disabled={login.email.trim().length === 0 || login.password.trim().length === 0} >Login</button>
                </div>
            </div>
        </>
    )
}
