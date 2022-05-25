import './App.css';
import { Homepage } from './components/Homepage/Homepage'
import { Routes, Route } from "react-router-dom";
import { Signup } from './components/Signup/Signup'
import { Login } from './components/Signup/Login'
import { Products } from './components/ProductsPage/Products'
import { Cartpage } from './components/CartPage/Cartpage';
import {Navbar} from './components/Homepage/Navbar/Navbar'
import {Footer} from './components/Footer/Footer'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cartpage />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
