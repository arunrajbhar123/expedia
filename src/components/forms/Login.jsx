// import React, { useContext, useState } from 'react'
import React from 'react';
// import axios from 'axios'
 import { Link} from 'react-router-dom';
// import { AppContext } from '../Context/AppContext';

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
    
  
  return (
    <>
    <Link to="/home" className='arrow' ><span><b>{"<<-----"}</b></span></Link>
    <div className='fApp'>
      <div>

        <Link to="/home"><img src='https://www.expedia.co.in/_dms/interstitial/logo.svg?locale=en_GB&siteid=27' alt='Logo' height="40%" width="17%" /></Link>
        <hr></hr>
      </div>
      <h1>Log in here.</h1>
      <form 
      // onSubmit={handleSubmit}
      >
        <div>
          <input type="email" required
            // value={email}
            // onChange={(e)=>setemail(e.target.value)}
            name="email" id="email" placeholder='Email address'></input>
        </div>
        <div>
          <input type="password" required name="password"
            // value={password}
            // onChange={e=>setpassword(e.target.value)}
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
        <p>If You Dont't have Account <Link to='/'>Sign in</Link>
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

export default Login


// import React from 'react'

// const Login = () => {
//   return (
//     <div>Login

//       uyyuyu
//     </div>
//   )
// }

// export default Login