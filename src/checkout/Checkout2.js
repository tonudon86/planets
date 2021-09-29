import React from 'react'
import './checkout.css';
import axios from 'axios';
import { useHistory } from 'react-router';
 import { useState } from 'react';
import Footer from '../MyComponents/Footer';
export default function Checkout2() {
  const history=useHistory()
  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement('script')
      script.src = src
      script.onload = () => {
        resolve(true)
      }
      script.onerror = () => {
        resolve(false)
      }
      document.body.appendChild(script)
    })
  }
  
  async function displayRazorpay() {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

    if (!res) {
        alert('Razorpay SDK failed to load. Are you online?')
        return
    }

let noob=localStorage.getItem('StarMap')
console.log(completeAddresses,noob)
    axios.post('/api/checkout/neworder',{name:name,email:email,number:number,price:price,add:completeAddresses,starmap:await localStorage.getItem('StarMap')})
    .then((r)=>{
        if(r.data.status)
        {
            const options = {
                key:'rzp_live_ko1QpCWHuyE3hi',
                currency: r.data.paymentinfo.currency,
                amount: r.data.paymentinfo.amount.toString(),
                order_id: r.data.paymentinfo.id,
                name: 'StarMap',
                description: 'Thank you for nothing. Please give us some money',
                image: 'https://starmapping.in/img/footerlogo.svg',
                handler: function(response) {
                  
                    axios.post('/api/checkout/verification',
                    {id:response.razorpay_payment_id,orderid:response.razorpay_order_id,signature:response.razorpay_signature,email:email})
                    .then((e)=>{
                        if(e.data.status)
                        {
                            alert("Payment Done , Thank You!")
                            window.location.href='/'
                        }
                    })

                },
                prefill: {
                    name:name,
                    email: email,
                    phone_number: number
                }
            }
            const paymentObject = new window.Razorpay(options)
            paymentObject.open()
        }

    })
}
const payment=()=>{
  displayRazorpay()
  // console.log()
}

  const [name, setname] = useState("")
  const [lastname, setlastname] = useState("") 
  const [email, setemail] = useState("")
  const [address, setaddress] = useState("")
  const [address2, setaddress2] = useState("")
  const [country, setcountry] = useState("")
  const [state, setstate] = useState("")
  const [zip, setzip] = useState("")
  const [number, setNumber]=useState('')
  let completeAddresses=address.concat(address2).concat(country).concat(state).concat(zip)
  const handleSubmit =(t)=>{
    t.preventDefault()
    if(name =="" && lastname =="" && email =="" && address==""  && country=="" &&state=="" &&zip=="") {
      alert(
        "please fill all the details"
      )
    }
   else{
    console.log(name,lastname,email,address,address2,country,state,zip)
    displayRazorpay()
   }
  }
  const everThing=JSON.parse(localStorage.getItem('StarMap'))
  console.log(everThing)
  const [price, setprice] = useState(everThing.price)
  return (
        <div onBef>
               <div className="container">
      <div className="py-5 text-center">
        <img style={{cursor:"pointer"}} onClick={
          ()=>{
              history.push('/')
          }
        } className="d-block mx-auto mb-4" src="https://starmapping.in/img/navlogo.svg" alt=""  />
        <h2 style={{color:'white'}}>Checkout </h2>
 
      </div>

      <div className="row">
        <div className="col-md-4 order-md-2 mb-4">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted">Your cart</span>
            {/* <span class="badge badge-secondary badge-pill">3</span> */}
          </h4>
          <ul class="list-group mb-3">
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 class="my-0">Product name</h6>
                <small class="text-muted">Star Map</small>
              </div>
              <span class="text-muted">{price}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <div class="text-success">
                <h6 class="my-0">Promo code</h6>
                <small>EXAMPLECODE</small>
              </div>
              <span class="text-success">- </span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
              <span>Total (INR)</span>
              <strong> {price}</strong>
            </li>
          </ul>
          <div class="card p-2">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Promo code"/>
              <div class="input-group-append">
                <button type="submit" class="btn btn-secondary">Redeem</button>
              </div>
            </div>
          </div>
       
          {/* <form className="card p-2">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Promo code" />
              <div className="input-group-append">
                <button type="submit" className="btn btn-secondary">Redeem</button>
              </div>
            </div>
          </form> */}
        </div>
        <div className="col-md-8 order-md-1">
          <h4 className="mb-3">Billing address</h4>
       <form onSubmit={handleSubmit}  >
            <div className="row">
              <div className="col-md-6 mb-3">
                <label for="firstName">First name</label>
                <input type="text" className="form-control" id="firstName"  onChange={(e)=>{setname(e.target.value)}}placeholder="Name" value={name} required/>
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label for="lastName">Last name</label>
                <input type="text" className="form-control" id="lastName" onChange={(e)=>{setlastname(e.target.value)}} placeholder="Lastame" value={lastname} required/>
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
            </div>

   
            <div className="mb-3">
              <label for="email">Email </label>
              <input type="email" className="form-control"  onChange={(e)=>{setemail(e.target.value)}}  id="email" placeholder="you@example.com"/>
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div className="mb-3">
                <label for="phone">Phone </label>
                <input type="number" className="form-control"  onChange={(e)=>{setNumber(e.target.value)}}    id="phone" placeholder="+1234567890"/>
                <div className="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>
  
            <div className="mb-3">
              <label for="address">Address</label>
              <input type="text" className="form-control" onChange={(e)=>{setaddress(e.target.value)}} id="address" placeholder="1234 Main St" required/>
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div className="mb-3">
              <label for="address2">Address 2 <span className="text-muted">(Optional)</span></label>
              <input type="text" className="form-control" id="address2"  onChange={(e)=>{setaddress2(e.target.value)}} placeholder="Apartment or suite"/>
            </div>

            <div className="row">
              <div className="col-md-5 mb-3">
                <label for="country">Country</label>
                <input type="text" className="form-control" id="country" onChange={(e)=>{setcountry(e.target.value)}} placeholder="country" required />
           
                <div className="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <label for="state">State</label>
                <input type="text" className="form-control" onChange={(e)=>{setstate(e.target.value)}}  id="state" placeholder="state" required />
                <div className="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label for="zip">Zip</label>
                <input type="number" className="form-control"  maxlength="6" onChange={(e)=>{setzip(e.target.value)}} id="zip" placeholder="000000" required />
                <div className="invalid-feedback">
                  Zip code required.
                </div>
              </div>
            </div>
            <hr className="mb-4" />
 

          
         
            <button className="btn" style={
              {
                backgroundColor:'#8F00FF',
                color:'white'
              }
            } type="submit">Continue to checkout</button>
         </form>
              {/* <button onClick={payment}>check payment</button> */}
        </div>
    
   
        </div>
        </div>
           <div className="my-5">
           <Footer/>
           </div>
        </div>
    )
}
