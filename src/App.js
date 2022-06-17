import "./App.css";
import Footer from "./components/Footer/Footer";
// import HotelPreview from "./components/HotelPageIPreview/HotelPreview.jsx";

import Multipleinputs from './components/forms/MultipleInputs.jsx';
// import AllRoutes from "./Components/pages/AllRoutes"
import {Routes,Route} from 'react-router-dom'
import Login from './components/forms/Login';

import WithSubnavigation from "./components/Navbar/Navbar";
import HomeMidSec from "./components/HomeMidSec.jsx";

function App() {
  return (
    <div className="App">
     <WithSubnavigation/>
      {/* <h1>Expedia</h1> */}
      {/* <HotelPreview /> */}
      <HomeMidSec/>


      <div>
    <Routes>
    <Route exact path="/" element={<>Home</>}></Route>
    <Route exact path="/signin" element={<><Multipleinputs/></>}></Route>
    <Route exact path="/login" element={<><Login /></>}></Route>
    </Routes>

    </div>

      <Footer/>

    </div>
  );
}

export default App;
