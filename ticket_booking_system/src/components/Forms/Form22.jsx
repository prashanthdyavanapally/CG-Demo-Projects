import React from 'react'
import styles from './Form22.module.css'
export const Form22 = ({ values }) => {
    return (
        <div>
            <table >
                <tr>
                    <th>Full Name</th>
                    <th>E-mail</th>
                    <th>Mobile</th>
                    <th>Departure</th>
                    <th>Departure Time</th>
                    <th>Return</th>
                    <th>Return Time</th>
                    <th>Pickup</th>
                    <th>Destination</th>
                    <th>Journey Type</th>
                    <th>No.of Passengers</th>
                    <th>Additional Message</th>
                </tr>

                <tr>
                    <td>{values.firstname} {values.lastname}</td>
                    <td>{ values.email}</td>
                    <td>{ values.mobile}</td>
                    <td>{ values.departure}</td>
                    <td>{values.departuretime} {values.departure_AM_PM}</td>
                    <td>{ values.return}</td>
                    <td>{values.returntime} {values.return_AM_PM} </td>
                    <td>{ values.pickup}</td>
                    <td>{ values.destination}</td>
                    <td>{ values.journeytype}</td>
                    <td>{ values.numberofpassengers}</td>
                    <td>{ values.additionalmesage}</td>
                </tr>
            </table>
        </div>
    )
}
