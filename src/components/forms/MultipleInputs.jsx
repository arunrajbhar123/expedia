import React from 'react';
import "./form.css"
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
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
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/profile",userRegistration);
    alert("You Can Login Now");
    setuserRegistration({sname:"",fname:"",password:"",email:""})
  }


  return (
    <>
      <Link to="/home" className='arrow' ><span><b>{"<<-----"}</b></span></Link>
      <div className='fApp'>
        <div>

          <Link to="/home"><img src='https://www.expedia.co.in/_dms/interstitial/logo.svg?locale=en_GB&siteid=27' alt='Logo' height="40%" width="17%" /></Link>
          <hr></hr>
        </div>
        <h1>Create an account</h1>
        <form onSubmit={e => onSubmit(e)}>
          <div>
            <input type="email" required
              value={userRegistration.email}
              onChange={handleinput}
              name="email" id="email" placeholder='Email address'></input>
          </div>
          <div>
            <input type="text" name="fname"
              value={userRegistration.fname}
              onChange={e=>handleinput(e)}
              id="fname" placeholder='FirstName'></input>
          </div>
          <div>
            <input type="text" name="sname"
              value={userRegistration.sname}
              onChange={e=>handleinput(e)}
              id="sname" placeholder='Surname'></input>
          </div>
          <div>
            <input type="password" required name="password"
              value={userRegistration.password}
              onChange={e=>handleinput(e)}
              id="password" placeholder='Password'></input>
          </div>
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
          <button type='submit'>Continue</button>
          <p>Already have an account? <Link to='/login'>Login</Link>
            <br></br>
            or continue with  
          </p>
          <p>
            <a href='/login'><img src='https://a.travel-assets.com/egds/marks/apple.svg' alt='apple_login' width="2%" height="5%" /></a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href='/login'><img src='https://a.travel-assets.com/egds/marks/facebook.svg' alt="g_login" width="2%" height="5%" /></a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href='/login'><img src='https://a.travel-assets.com/egds/marks/google.svg' width="2%" alt="f_login" height="5%" /></a>
          </p>
        </form>

      </div>
    </>
  )
}

export default Multipleinputs