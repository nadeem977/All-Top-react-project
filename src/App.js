import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/footer/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="Signup" element={<Signup/>}/>
        <Route exact path="Login" element={<Login/>} />
      </Routes>
       <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
