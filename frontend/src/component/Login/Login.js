import React, { useState } from 'react'
import "../Login/Login.css";
import axios from 'axios';
import { useNavigate, useNavigation } from 'react-router-dom';
const Login = () => {
  const[Email,SetEmail]=useState()
  const[password,Setpassword]=useState()
  const[confirmpassword,Setconfirmpassword]=useState()
  const navigate=useNavigate()
  const handelsubmitone  = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3000/login', {  Email, password, confirmpassword })
      .then(result => {
        console.log("successfull",result)
        navigate('home')
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='login '>
      <form  onSubmit={handelsubmitone} className='loginform'>
      <h3 className='textlogin'> LOG IN TO ADHIRAJ-PROPERTY </h3>
        <div className='loginuser'>
          <label > Email :</label><br />
          <input onChange={(e)=>SetEmail(e.target.value)} type='text' placeholder='Enter your email'></input>
        </div>
        <div className='loginuser'>
          <label > Password :</label><br />
          <input onChange={(e)=>Setpassword(e.target.value)} type='text' placeholder='Enter your Password' ></input>
        </div>
        <div className='loginuser'>
          <label > confirm Password :</label><br />
          <input onChange={(e)=>Setconfirmpassword(e.target.value)} type='text' placeholder='Enter confirm Password' ></input>
        </div>
        <div className='loginbutto row '>
        <input type="submit" className="submit" value="Login" />
        <button className='cancel'> cancel</button>
      </div>
      </form>
    </div>
  )
}

export default Login