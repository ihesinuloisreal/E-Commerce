import { Routes, Route, redirect } from "react-router-dom";
import Home from "./Pages/Home";
import ProductList from "./Pages/ProductList";
import Product from "./Pages/Product";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import Pay from "./Pages/Pay";
import Success from "./Pages/Success";
// import {createBrowserRouter, RouterProvider, Route} from "react-router-dom";

function App() {
  const user = true;
  return (
    // <div>
    
    //   <Pay/>
      
    // </div>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route  path="/products/:caregory" element={<ProductList/>}/>
      <Route  path="/product/:id" element={<Product/>}/>
      <Route  path="/cart" element={<Cart/>}/>
      <Route  path="/login" element={<Login/>}/>
      <Route  path="/register" element={<Register/>}/>
    </Routes>
  );
}

export default App;
