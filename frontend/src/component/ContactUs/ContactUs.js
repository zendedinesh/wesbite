import React from 'react'
import "../ContactUs/ContactUs.css"
const ContactUs = () => {
  return (
    <div className='Form  row' id='form' >

      <div className='contactcontent col-lg-6 col-md-6 col-sm-12  ' style={{margin:"20px 0px"}}>
        <h1 className='c'> contact us:- </h1><br />
        <h4 className='h1'> Address:  Navi-Mumbai-410-210, Kharghar Sector -35D , Welcome To Adhiraj property.</h4><br />
        <h4 className='h1'> Email:  AdhirajProperty987@gmail.com</h4><br />
        <h4 className='h4'>Real  Estate Office Hours:Open by appointment. Please use the contact form at right or email us to schedule an appointment.
        </h4>
      </div>

      <div className='formcontent col-lg-6 col-md-6 col-sm-12 ' style={{margin:"20px 0px"}}>
        <label > First Name: </label><br />
        <input type='text' required style={{ height: "40px", width: "230px", marginLeft: "10px", boxShadow:"0 0 10px red" }}></input><br />

        <label style={{ marginLeft: "10px" }}> Last Name:</label><br />
        <input type='text' required style={{ height: "40px", width: "230px", marginLeft: "10px", boxShadow:"0 0 10px red" }}></input><br />

        <label style={{ marginLeft: "10px" }}> Email:</label><br />
        <input type='text' required style={{ height: "40px", width: "230px", marginLeft: "10px", boxShadow:"0 0 10px red" }}></input> <br />

        <label style={{ marginLeft: "10px" }}> Message:</label><br />
        <input type='text' required style={{ height: "100px", width: "370px", marginLeft: "10px", boxShadow:"0 0 10px red" }}></input> <br />
        <div><br />
          <input type="radio" />
          <span className='button'>yes</span>
        </div>
        <div><br />
          <input type="radio" />
          <span className='button'>No</span>
        </div>
        <div><br />
          <input type="radio" />
          <span className='button'>I am an agent</span>
        </div> <br />
        <button className='cbutton' id='button' > Submit</button>
      </div>

    </div>
  )
}

export default ContactUs