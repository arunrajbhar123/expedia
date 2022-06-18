import "./App.css";
import Footer from "./components/Footer/Footer";
import HotelPreview from "./components/HotelPageIPreview/HotelPreview.jsx";

import Multipleinputs from './components/forms/MultipleInputs.jsx';
// import AllRoutes from "./Components/pages/AllRoutes"
import {Routes,Route} from 'react-router-dom'
import Login from './components/forms/Login';

import WithSubnavigation from "./components/Navbar/Navbar";
import HomeMidSec from "./components/HomeMidSec.jsx";
import SearchPage from "./components/pageresult/SearchPage";
import Payment from "./components/payment/Payment.jsx"
import Dummy from "./components/Dummy";

function App() {
  return (
    <div className="App">
     <WithSubnavigation/>
    <Routes>
      <Route exact path="/" element={<HomeMidSec/>}></Route>
      <Route exact path="/signin" element={<Multipleinputs/>}></Route>
      <Route exact path="/login" element={<Login />}></Route>
      <Route path="/result" element={<SearchPage/>}></Route>
      <Route path="/hotelpreview" element={<HotelPreview/>} ></Route>
      <Route path="/payment" element={<Payment/>}/>
      <Route path="/ImagePage" element={<Dummy/>}/>
    </Routes>


      <Footer/>

    </div>
  );
}

export default App;
