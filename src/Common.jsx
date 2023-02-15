import React from "react";
import { NavLink } from "react-router-dom";
// import web from "../src/imagess/img2.webp";




const Common= (props) => {

    return (
        <>
              <section id="header" className=" d-flex align-item-center ">
       <div className="container-fluid  ">
        <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
          <div className="col-md-6 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column">
             <h1>{props.name} <strong className="brand-name">Navbar</strong></h1>
              <h2 className="my-3 text-decoration-underline fs-1 fw-light">
                 We are team of telented developer making website
                 </h2>
                <div className="mt-3 ">
                  <NavLink to={props.visit} className="btn btn-get-started active"> 
                 {props.btname}</NavLink>
                 </div>
               </div>
           <div className="col-lg-6 order-lg-2 header-img">
            <img src={props.imgsrc} className="img-fluid animated  " alt="pp"/>
            </div>
           </div>
            </div>
         </div>
      </div>

   </section>
      </>
    )


}
export default Common;