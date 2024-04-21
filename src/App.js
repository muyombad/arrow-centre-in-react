import Navber from "./componets/navber";
import Footer from "./componets/footer";
import Home from "./pagesComponets/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pagesComponets/shop";



function App() {
  return (
  
    <BrowserRouter>
       <Navber/>
          <Routes>
            <Route path='/' element={<Home/> }></Route>
            <Route path='/Shop' element={<Shop/>}></Route>
          </Routes>
          
       <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
