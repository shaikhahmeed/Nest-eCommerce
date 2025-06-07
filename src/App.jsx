import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import Shop from "./pages/Shop";
import Login from "./components/Home/Login";
import Registration from "./components/Home/Registration";
import About from "./pages/About";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Contact from "./pages/Contact";

function App() {
 

  return (
    <>
     <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />}/>
      <Route path="/Registration" element={<Registration />}/>
      <Route path="/" element={<Layout/>}>
        <Route path="/home" element={<Home />}/>
        <Route index element={<Home />}/>
        <Route path="/shop" element={<Shop />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/product_details/:slug" element={<ProductDetails/>}/>        
      </Route>
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
