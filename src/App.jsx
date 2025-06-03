import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Layout from "./components/layout/layout";
import Shop from "./pages/Shop";
import Login from "./components/Home/Login";
import Registration from "./components/Home/Registration";
import About from "./pages/About";

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
      </Route>
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
