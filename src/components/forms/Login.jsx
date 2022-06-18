// import React, { useContext, useState } from 'react'
import React from 'react';
// import axios from 'axios'
 import { Link} from 'react-router-dom';
// import { AppContext } from '../Context/AppContext';
import "./form.css";

import { useNavigate } from "react-router-dom";

const Login = () => {
    // const [email, setemail] = useState("");
    // const [password, setpassword] = useState("");
    // const [state, dispatch] = useContext(AppContext);
  
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   axios({
    //     url: "https://reqres.in/api/login",
    //     method: "POST",
    //     data: {
    //       email,
    //       password
    //     }
    //   })
    //     .then((res) => {
    //       alert("success");
    //       dispatch({
    //         type: "LOGIN_SUCCESS",
    //         token: res.data.token
    //       });
    //     })
    //     .catch((err) => {
    //       console.log(err.message);
    //       alert("error");
    //     });
    // };
  
    // if (state.isAuth) {
    //   return <Navigate to="/users" />;
    // }
    const navigate=useNavigate();
  const handleform=()=>{
navigate("/");
  }
  return (
    <>
    <div className='main1'>
      <h1>Log in here.</h1>
      <form 
      // onSubmit={handleSubmit}
      >
        <div>
          <input type="email" required
            // value={email}
            // onChange={(e)=>setemail(e.target.value)}
            name="email" id="email" placeholder='Email address'></input>
        </div><br></br>
        <div>
          <input type="password" required name="password"
            // value={password}
            // onChange={e=>setpassword(e.target.value)}
            id="password" placeholder='Password'></input>
        </div><br></br>
        <p>
          <input type="checkbox"></input> &nbsp;Keep me signed in
        </p>
        <p>
          <input type="checkbox"></input> &nbsp;I'd like to receive travel deals, special offers <br></br> and other information from Expedia via email
        </p>
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
          <button type='submit' className='btnc' onClick={handleform}>Continue</button>
          <p>If you don't have an account? <Link to='/signin'>Register</Link>
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

export default Login


