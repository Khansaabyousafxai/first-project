import React from 'react'
import {Route,Routes,Navigate} from "react-router-dom";
import Home from './pages/home';
import About from './pages/About';
import Contact from './pages/Contact';
import Page404 from './pages/page404';


export default function App() {

  let user= true;
  return (
   <>
   
   {
     user ?
      ( <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
        
      </Routes>)
      :
      ( <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
        
      </Routes>)



   }
   
   
   
   
   </>
  )
}
