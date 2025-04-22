import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Layout from "./components/layout/layout";
import Shop from "./pages/Shop";

function App() {
 

  return (
    <>
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/home" element={<Home />}/>
        <Route index element={<Home />}/>
        <Route path="/shop" element={<Shop />}/>
      </Route>
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
