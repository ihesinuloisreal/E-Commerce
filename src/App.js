// import Product from "./Pages/Product";
import { Routes, Route } from "react-router-dom";
// import Home from "./Pages/Home";
// import ProductList from "./Pages/ProductList";
// import Register from "./Pages/Register";
// import Login from "./Pages/Login";
// import Cart from "./Pages/Cart";
import Pay from "./Pages/Pay";
import Success from "./Pages/Success";
// import {createBrowserRouter, RouterProvider, Route} from "react-router-dom";

function App() {
  return (
    // <div>
    
    //   <Pay/>
      
    // </div>
    <Routes>
          <Route exact path="/pay" element={<Pay/>}/>
          <Route exact path="/success" element={<Success/>}/>
    </Routes>
  );
}

export default App;
