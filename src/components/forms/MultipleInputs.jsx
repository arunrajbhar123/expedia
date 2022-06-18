import React from 'react';
import "./form.css"
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const Multipleinputs = () => {
  const [userRegistration, setuserRegistration] = useState({
    sname: "",
    fname: "",
    password: "",
    email: ""
  });
  // const{sname,fname,password,email}=userRegistration;
  const handleinput = (e) => {
    setuserRegistration({ ...userRegistration, [e.target.name]: e.target.value });
  }
  const navigate= useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/profile",userRegistration);
    alert("You Can Login Now");
    setuserRegistration({sname:"",fname:"",password:"",email:""})
    navigate("/login")
  }


  return (
    <>
    <div className='main1'>
        <h1>Create an account</h1>
        <form onSubmit={e => onSubmit(e)}>
          <div>
            <input type="email" required
              value={userRegistration.email}
              onChange={handleinput}
              name="email" id="email" placeholder='Email address'></input>
          </div>
          <br></br>
          <div>
            <input type="text" name="fname"
              value={userRegistration.fname}
              onChange={e=>handleinput(e)}
              id="fname" placeholder='FirstName'></input>
          </div> <br></br>
          <div>
            <input type="text" name="sname"
              value={userRegistration.sname}
              onChange={e=>handleinput(e)}
              id="sname" placeholder='Surname'></input>
          </div> <br></br>
          <div>
            <input type="password" required name="password"
              value={userRegistration.password}
              onChange={e=>handleinput(e)}
              id="password" placeholder='Password'></input>
          </div> <br></br>
          <p>
            <input type="checkbox"></input> &nbsp;Keep me signed in
          </p>
          <p>
            <input type="checkbox"></input> &nbsp;I'd like to receive travel deals, special offers <br></br> and other information from Expedia via email
          </p>
          <p>
            By creating an account, I agree to the Expedia <a href='/terms'>Terms and<br></br> Conditions</a>
            . <Link to='/privacy'>Privacy Statement</Link> and <Link to='/expendia'>Expendia Rewards term and <br></br>Conditions</Link>
          </p>
          <button type='submit' className='btnc'>Continue</button>
          <p>Already have an account? <Link to='/login'>Login</Link>
            <br></br>
            or continue with  
          </p>
          <div className='iconlog'>
            <a href='/login'><img src='https://a.travel-assets.com/egds/marks/apple.svg' alt='apple_login' width="12%" height="15%" /></a>
            
            <a href='/login'><img src='https://a.travel-assets.com/egds/marks/facebook.svg' alt="g_1login" width="12%" height="15%" /></a>
            
            <a href='/login'><img src='https://a.travel-assets.com/egds/marks/google.svg' width="12%" alt="f_login" height="15%" /></a>
           
          </div>
        </form>

      </div>
    </>
  )
}

export default Multipleinputs