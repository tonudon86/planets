import React from 'react'
import './checkout.css';
 import { useState } from 'react';
import Footer from '../MyComponents/Footer';
export default function Checkout2() {

  const [name, setname] = useState("")
  const [lastname, setlastname] = useState("") 
  const [email, setemail] = useState("")
  const [address, setaddress] = useState("")
  const [address2, setaddress2] = useState("")
  const [country, setcountry] = useState("")
  const [state, setstate] = useState("")
  const [zip, setzip] = useState("")

  const handleSubmit =(t)=>{
    t.preventDefault()
    if(name !=="" && lastname !=="" && email !=="" && address!=="" && address2!=="" && country!=="" &&state!=="" &&zip!=="") {
      console.log(name,lastname,email,address,address2,country,state,zip)
    }
   else{
     alert(
       "please fill all the details"
     )
   }
  }
  return (
        <div >
               <div class="container">
      <div class="py-5 text-center">
        <img class="d-block mx-auto mb-4" src="https://starmapping.in/img/navlogo.svg" alt=""  />
        <h2 style={{color:'white'}}>Checkout </h2>
 
      </div>

      <div class="row">
        <div class="col-md-4 order-md-2 mb-4">
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text">Your cart</span>
           
          </h4>
          <div className="preview">
          <img src="https://starmapping.in/img/image%205.jpg" alt="" />
            <span>Total (INR)</span>
              <strong>1500</strong>
          </div>
          {/* <form class="card p-2">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Promo code" />
              <div class="input-group-append">
                <button type="submit" class="btn btn-secondary">Redeem</button>
              </div>
            </div>
          </form> */}
        </div>
        <div class="col-md-8 order-md-1">
          <h4 class="mb-3">Billing address</h4>
       <form onSubmit={handleSubmit}  >
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="firstName">First name</label>
                <input type="text" class="form-control" id="firstName"  onChange={(e)=>{setname(e.target.value)}}placeholder="Name" value={name} required/>
                <div class="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="lastName">Last name</label>
                <input type="text" class="form-control" id="lastName" onChange={(e)=>{setlastname(e.target.value)}} placeholder="Lastame" value={lastname} required/>
                <div class="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
            </div>

   
            <div class="mb-3">
              <label for="email">Email </label>
              <input type="email" class="form-control"  onChange={(e)=>{setemail(e.target.value)}}  id="email" placeholder="you@example.com"/>
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div class="mb-3">
                <label for="phone">Phone </label>
                <input type="number" class="form-control"    id="phone" placeholder="+1234567890"/>
                <div class="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>
  
            <div class="mb-3">
              <label for="address">Address</label>
              <input type="text" class="form-control" onChange={(e)=>{setaddress(e.target.value)}} id="address" placeholder="1234 Main St" required/>
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div class="mb-3">
              <label for="address2">Address 2 <span class="text-muted">(Optional)</span></label>
              <input type="text" class="form-control" id="address2"  onChange={(e)=>{setaddress2(e.target.value)}} placeholder="Apartment or suite"/>
            </div>

            <div class="row">
              <div class="col-md-5 mb-3">
                <label for="country">Country</label>
                <input type="text" class="form-control" id="country" onChange={(e)=>{setcountry(e.target.value)}} placeholder="country" required />
           
                <div class="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <label for="state">State</label>
                <input type="text" class="form-control" onChange={(e)=>{setstate(e.target.value)}}  id="state" placeholder="state" required />
                <div class="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
              <div class="col-md-3 mb-3">
                <label for="zip">Zip</label>
                <input type="number" class="form-control"  maxlength="6" onChange={(e)=>{setzip(e.target.value)}} id="zip" placeholder="000000" required />
                <div class="invalid-feedback">
                  Zip code required.
                </div>
              </div>
            </div>
            <hr class="mb-4" />
 

          
         
            <button class="btn" style={
              {
                backgroundColor:'#8F00FF',
                color:'white'
              }
            } type="submit">Continue to checkout</button>
         </form>
        </div>
   

   
        </div>
        </div>
           <div className="my-5">
           <Footer/>
           </div>
        </div>
    )
}
