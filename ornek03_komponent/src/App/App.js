import Saat from "../Saat/Saat.jsx";
import Footer from "../Footer/Footer";
const stil={
  textAlign:"center",
  color:"gray",
  fontSize:"70px",
};

function App() {
  return (
    <div className="App">
    <h1 style={stil}>REACT KURSUNA HOS GELDINIZ</h1>
     <Saat/>
     <Footer/>
      
    </div>
  );
}
export default App;
