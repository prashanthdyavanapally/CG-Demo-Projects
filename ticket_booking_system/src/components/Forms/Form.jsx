import React from 'react'
import { useState } from 'react'
import { Form11 } from './Form11'
import { Form22 } from './Form22'

export const Form = () => {
    const [step, setStep] = useState(0)

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: '',
        email: "",
        mobile: "",
        departure: "",
        departuretime: "",
        departure_AM_PM: "",
        return: "",
        returntime: "",
        return_AM_PM: "",
        pickup: "",
        destination: "",
        journeytype: "",
        numberofpassengers: "",
        additionalmesage: "",
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(formData);
        setStep(1)
    };
    const hanldeChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }
    switch (step) {
        case 0:
            return (
                <Form11 hanldeChange={hanldeChange} handleSubmit={handleSubmit} />
            )
        case 1:
            return (
                <Form22 values={formData} />
            )
        default: return null
    }
}
