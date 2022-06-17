import "./App.css";
import Footer from "./components/Footer/Footer";
import HotelPreview from "./components/HotelPageIPreview/HotelPreview.jsx";
import WithSubnavigation from "./components/Navbar/Navbar";
function App() {
  return (
    <div className="App">
     <WithSubnavigation/>
      <h1>Expedia</h1>
      <HotelPreview />
      <Footer/>
    </div>
  );
}

export default App;
