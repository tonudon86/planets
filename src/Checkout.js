
import React,{useState} from 'react';
import Footer from './MyComponents/Footer'
import axios from 'axios';


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


function Checkout() {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [number, setnumber] = useState("");
    const [add, setadd] = useState("") ;
    const [message, setmessage] = useState("")
    const [image, setimage] = useState("/img/Star_Map_Heart_Full_web 1.png" )
    const [priceinfo,setpriceinfo]=useState("1800")





async function displayRazorpay() {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

    if (!res) {
        alert('Razorpay SDK failed to load. Are you online?')
        return
    }

    axios.post('/api/checkout/neworder',{name:name,email:email,number:number,price:priceinfo,add:add,starmap:await localStorage.getItem('StarMap')})
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


React.useEffect(()=>{

    if(localStorage.getItem("images"))
    {
        setimage(`${localStorage.getItem("images")}`)
    }
    if(localStorage.getItem('StarMap'))
    {
        let price=JSON.parse(localStorage.getItem('StarMap'))
        if(price.price)
        {
            setpriceinfo(price.price)
        }
    }
},[])




    var tonu= {
        color: "white",
        padding: "10px"
        
       
    } 
    
    async function subcontact(e) {


        e.preventDefault();


        if (!name|| !email|| !number|| !add){
            alert("please fill all the details")
        } 
     else {

        displayRazorpay()

    }


}




    return (
        <>
        <div>


                <section id="contact-page">
        <div  className="contact-page">
            <div  className="img-form">
                <div  className="contact-img coco-info">
                    <h1 className="text-center" style={tonu}>Order Preview</h1>
                    <img className="preiew co-img" src={`${image}`}alt=""/>
                </div>
                <div  className="contact-form coco-info">
                    <form onSubmit={(e)=>subcontact(e)}  className="form-co">
                    <p style={tonu}>{message}</p>
                        <input type="text"  value={name} onChange={(e)=>{setname(e.target.value)}} placeholder="Your Name"  className="inpt-type"/>
                        <input type="email"   value={email}  onChange={(e)=>{setemail(e.target.value)}}  name="" id="" placeholder="Your Email"  className="inpt-type"/>
                        <input type="text"  value={number} onChange={(e)=>{setnumber(e.target.value)}} placeholder="number"  className="inpt-type"/>
                        <textarea name="" value={add} id="" onChange={(e)=>{setadd(e.target.value)}} cols="30" rows="6" placeholder="Enter Your  Complete Address "  className="inpt-type"></textarea>
                       
                       <p style={tonu} > Shipping: FREE!</p>
                       <p style={tonu}>Total: INR {priceinfo}</p>
                       
                   

                        <input type="submit" value="Procced To Pay"  className="inp-btn"/>
                    </form>
                </div>
            </div>

        </div>
    </section>    
        </div>

        
        </>
    )
}

export default Checkout
