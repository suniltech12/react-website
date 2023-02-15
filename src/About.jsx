import React from "react";
import web from "../src/imagess/img4.jpeg";
import Common from "./Common";




const About= () => {

    return (
        <>
             <Common 
             name="Welcome to About page" 
             imgsrc ={web} visit="/contact" 
             btname="Contact now"/>
             </>
    )


}
export default About;