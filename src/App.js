import "./App.css";
import HotelPreview from "./components/HotelPageIPreview/HotelPreview.jsx";
import Multipleinputs from './Components/forms/MultipleInputs';
// import AllRoutes from "./Components/pages/AllRoutes"
import {Routes,Route} from 'react-router-dom'
import Login from './Components/forms/Login';
function App() {
  return (
    <div className="App">
      <h1>Expedia</h1>
      <HotelPreview />
      <div>
    <Routes>
    <Route exact path="/" element={<>Home</>}></Route>
    <Route exact path="/signin" element={<><Multipleinputs/></>}></Route>
    <Route exact path="/login" element={<><Login /></>}></Route>
    </Routes>

    </div>
    </div>
  );
}

export default App;
