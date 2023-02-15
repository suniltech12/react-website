import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import { Routes,Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";


const App = () => {

    return (
        <>
        <Navbar/>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/service" element={<Services/>}/>
            <Route exact path="/contact" element={<Contact/>}/>
            <Route path="*" element = {< Navigate to="/" replace />} />
        </Routes>
        <Footer/>
        
      </>
    )


}
export default App;