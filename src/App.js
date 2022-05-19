import './App.css';
import React from 'react';
import NavBar from './component/NavBar';
import Students from './component/Students';
import ContactUs from './component/ContactUs';
import Home from './component/home';


import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";




function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
       <Routes>
       <Route path="/Home" element={<Home />} />
       <Route path="/Students" element={<Students />} />
       <Route path="/ContactUs" element={<ContactUs />} />
       </Routes>
     </BrowserRouter>
     </>
  );
}


export default App;
