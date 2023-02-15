import React, { useState } from "react";

const Contact= () => {
  const[data,setData] = useState({
    fname:'',
    phone:'',
    email:'',
    msg:'',
    psd:'',
    
  });
  const InputEvent = (event) =>
  {
const{name,value} = event.target;

setData((preVal)=>{
    return{
    ...preVal,
    [name]:value,
    };
});
  };

  const formSubmit = (e) =>{
    e.preventDefault();
    alert(`My name is ${data.fname}. My mobile number is  ${data.phone}. 
    My email is ${data.email}. My password is ${data.psd}  `)
    

  };

    return (
        <>
       <div className="my-5">
        <h1 className="text-center">Contact US</h1>
       </div>
       <div className="container contact_div">
         <div className="col-md-6 col-10 mx-auto">
          <form onSubmit={formSubmit}>
          <div class="mb-3">
  <label for="exampleFormControlInput1"
   class="form-label">Full Name</label>
  <input type="text" 
  class="form-control" 
  id="exampleFormControlInput1"
  name="fname"
  value={data.fname}
  onChange={InputEvent} 
  placeholder="enter your name"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1"
   class="form-label">Phone No.</label>
  <input type="number" class="form-control"
   id="exampleFormControlInput1"
   name="phone"
  value={data.phone}
  onChange={InputEvent}  placeholder="enter your number"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1"
  name="email"
  value={data.email}
  onChange={InputEvent}  placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" 
  name="msg"
  value={data.msg}
  onChange={InputEvent}
  placeholder="type massage here"></textarea>
</div>
<div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword"
      name="psd"
      value={data.psd}
      onChange={InputEvent} placeholder="enter password"/>
    </div>
  </div>
  <div class="col-auto">
    <button type="submit" class="btn btn-primary mb-3">Submit</button>
  </div>

          </form>
         </div>
       </div>

      </>
    )


}
export default Contact;