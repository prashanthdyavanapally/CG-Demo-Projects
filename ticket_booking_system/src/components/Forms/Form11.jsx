import React from 'react'
import styles from './Form.module.css'

export const Form11 = ({ handleSubmit, hanldeChange}) => {
  return (
      <div className={styles.app}>
          
          <div className={styles.formhead} >
              <form onSubmit={handleSubmit}>
                  <h2>Online Booking Form</h2>
                  <p className={styles.header}>To reserve seats please complete and submit the booking form</p>
                  <br />
                  <hr />
                  <p>Full Name <span>*</span></p>
                  <div className={styles.fullname}>
                      <div>
                          <input name="firstname" onChange={hanldeChange} type="text" /><br />
                          <label htmlFor="First Name">First Name</label>
                      </div>
                      <div>
                          <input name='lastname' onChange={hanldeChange} type="text" /><br />
                          <label htmlFor="Last Name">Last Name</label>
                      </div>
                  </div>
                  <br />
                  <p>E-mail <span>*</span></p>
                  <input name='email' onChange={hanldeChange} type="text" placeholder="ex: myname@example.com" />
                  <br />
                  <label htmlFor="example@example.com">example@example.com</label>
                  <br />
                  <br />
                  <p>Phone Number <span>*</span></p>
                  <input name='mobile' onChange={hanldeChange} type="number" placeholder="(000) 000-0000" />
                  <br />
                  <br />
                  <p>Departure Date/Time <span>*</span></p>
                  <input name='departure' onChange={hanldeChange} type="date" placeholder="DD-MM-YY" /> <input name='departuretime' onChange={hanldeChange} type="time" placeholder="Time " />  <input name='departure_AM_PM' onChange={hanldeChange} className={styles.ampm} type="text" placeholder="AM/PM" />
                  <br />
                  <br />
                  <p>Return Date/Time <span>*</span></p>
                  <input name='return' onChange={hanldeChange} type="date" placeholder="DD-MM-YY" /> <input name='returntime' onChange={hanldeChange} type="time" placeholder="Time " />  <input name='return_AM_PM' onChange={hanldeChange} className={styles.ampm} type="text" placeholder="AM/PM" />
                  <br />
                  <br />
                  <p>Pickup Address <span>*</span></p>
                  <input name='pickup' onChange={hanldeChange} className={styles.large} type="text" placeholder="Type here..." />
                  <br />
                  <br />
                  <p>Destination Address <span>*</span></p>
                  <input name='destination' onChange={hanldeChange} className={styles.large} type="text" placeholder="Type here..." />
                  <br />
                  <br />
                  <p>Journey Type <span>*</span></p>
                  <select name='journeytype' onChange={hanldeChange} className={styles.input}>
                      <option value="Personal Trip">Personal Trip</option>
                      <option value="Business Trip">Business Trip</option>
                  </select>
                  <br />
                  <br />
                  <p>Number of Passengers <span>*</span></p>
                  <input name='numberofpassengers' onChange={hanldeChange} className={styles.number} type="number" placeholder="0" />
                  <br />
                  <br />
                  <p>Additional Message:</p>
                  <input name='additionalmesage' onChange={hanldeChange} className={styles.large} type="text" placeholder="Type here..." />
                  <br />
                  <br />
                  <hr />
                  <br />
                  <input className={styles.submit} type="submit" value="Submit" />
              </form>

          </div>
    </div>
  )
}
