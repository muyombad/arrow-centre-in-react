import Navber from "./componets/navber";
import Footer from "./componets/footer";
import Home from "./pagesComponets/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pagesComponets/shop";
import Faq from "./pagesComponets/faq";
import TermsOfUse from "./pagesComponets/allCSS/termsOfUse";
import PrivacyPolicy from "./pagesComponets/privacyPolicy";



function App() {
  return (
  
    <BrowserRouter>
       <Navber/>
          <Routes>
            <Route path='/' element={<Home/> }></Route>
            <Route path='/Shop' element={<Shop/>}></Route>
            <Route path="/faq" element={<Faq/>}></Route>
            <Route path="/termsOfUse" element={<TermsOfUse/>}></Route>
            <Route path="/privacyPolicy" element={<PrivacyPolicy/>}></Route>
          </Routes>
          
       <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
