import React, { useState } from 'react'
import "../Signup/Signup.css"
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
const Signup = () => {

  const [FirstName, setFirstName] = useState()
  const [LastName, setLastName] = useState()
  const [Email, setEmail] = useState()
  const [phoneNumber, setphoneNumber] = useState()
  const [password, setpassword] = useState()
  const [confirmpassword, setconfirmpassword] = useState()
  const navigate = useNavigate()
  const handelsubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:9050/register', { FirstName, LastName, Email, phoneNumber, password, confirmpassword })
      .then(result => {
        console.log("sucessfull",result)

        navigate('/login')
      })
      .catch(err => console.log(err))
  }
  return (
    <div className='container'>
      <h1 className='form-title'> REGISTRATION FORM</h1>
      <form  action='#' onSubmit={handelsubmit}>
        <div className='main-user-info'>
          <div className='user-input-box'>
            <label for="fullname"> FIRST NAME   </label>
            <input onChange={(e) => setFirstName(e.target.value)} type='text' id='fullname' name='fullname' placeholder='Enter first name' />
          </div>
          <div className='user-input-box'>
            <label for="username">   LAST NAME   </label>
            <input onChange={(e) => setLastName(e.target.value)} type='text' id='username' name='username' placeholder='Enter  lastname' />
          </div>
          <div className='user-input-box'>
            <label for="email"> EMAIL   </label>
            <input onChange={(e) => setEmail(e.target.value)} type='text' id='email' name='email' placeholder='Enter email' />
          </div>
          <div className='user-input-box'>
            <label for="phoneNumber"> PHONE NUMBER   </label>
            <input onChange={(e) => setphoneNumber(e.target.value)} type='text' id='phoneNumber' name='phoneNumber' placeholder='Enter phone Number' />
          </div>
          <div className='user-input-box'>
            <label for="password">  PASSWORD  </label>
            <input onChange={(e) => setpassword(e.target.value)} type='password' id='password' name='password' placeholder='Enter password' />
          </div>
          <div className='user-input-box'>
            <label for="confirmpassword"> CONFIRM PASSWORD   </label>
            <input onChange={(e) => setconfirmpassword(e.target.value)} type='password' id='confirmpasswor' name='confirmpasswor' placeholder='Enter confirm password' />
          </div>
          <div className='gender-details-box'>
            <span className='gender-title'>GENDER</span>
            <div className='gender-category'>
              <input type="radio" name='gender' id='male' />
              <label for="male">MALE</label>
              <input type="radio" name='gender' id='female' />
              <label for="female">FEMALE</label>
              <input type="radio" name='gender' id='other' />
              <label for="other">OTHER</label>
            </div>
          </div>
        </div>
        <div className='form-submit-btn'>
          <input  type="submit" value="register" />
        </div>
      </form>
    </div>
  )
}

export default Signup