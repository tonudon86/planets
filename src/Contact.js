 
import Header from './MyComponents/Header'
import React,{useState,useEffect} from 'react';
import { useAlert } from 'react-alert';
import Footer  from  './MyComponents/Footer';
import axios from 'axios';
import Spinner from './MyComponents/Spinner';
function Contact() {
    const alert = useAlert();
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [subject, setsubject] = useState("");
    const [msg, setmsg] = useState("") ;
    const [message, setmessage] = useState("")
    const tonu= {
        color: "white",
        padding: "10px"
       
    } 
    
    function subcontact(e) {
        e.preventDefault();
        if (!name|| !email|| !subject|| !msg){
            // alert("please fill all the details")
            return alert.error('please fill all the details')
        } 
     else {
        axios.post('/api/contact',{name:name,email:email,subject:subject,msg:msg})
        .then((res)=>{
            if(res.data.status)
            {
                setmessage(res.data.message)
                return   alert.error(res.data.message)
            }

            setmessage(res.data.message)

            setTimeout(()=>{
                setmessage("")
            },3000)

    })

    }


}









const [loading, setloading] = useState(true)
  useEffect(() => {
    setloading(false)
  }, [])
 



    return (
        <>
        {loading==true?
        <Spinner/>:
        
        <div>
        <Header contact={true}/>
        <section id="contact-page">
        <div className="contact-page">
            <div className="img-form">
                <div className="contact-img coco-info">
                    <img src="/img/contact.svg" alt="" className="co-img"/>
                </div>
                <div className="contact-form coco-info">
                    <form onSubmit={subcontact} className="form-co">
                    <p style={tonu}>{message}</p>
                        <input type="text"  value={name} onChange={(e)=>{setname(e.target.value)}} placeholder="Your Name" className="inpt-type"/>
                        <input type="email"   value={email}  onChange={(e)=>{setemail(e.target.value)}}  name="" id="" placeholder="Your Email" className="inpt-type"/>
                        <input type="text"  value={subject} onChange={(e)=>{setsubject(e.target.value)}} placeholder="Subject" className="inpt-type"/>
                        <textarea name="" value={msg} id="" onChange={(e)=>{setmsg(e.target.value)}} cols="30" rows="6" placeholder="Your message" className="inpt-type"></textarea>
                        <input type="submit" value="SEND" className="inp-btn"/>
                    </form>
                </div>
            </div>
            <div className="social-contact">
                <h2 className="social-heading">We would love to hear from you</h2>
             
                <div className="social-net">
                    <li className="single-social"> <img src="/img/location-7 1.png" alt="" className="icone"/>
                        <p className="info">Mumbai,Maharastra </p>
                    </li>
                    <li className="single-social"> <img src="/img/mail-2 1.png" alt="" className="icone"/>
                        <p className="info"><a  href="mailto:Info@starmapping.in" target="_blank" rel="noopener noreferrer"> Info@starmapping.in </a> </p>
                    </li>
                    <li className="single-social"> <img src="/img/internet 1.png" alt="" className="icone"/>
                        <p className="info">www.starmapping.in </p>
                    </li>
                </div>
            </div>
        </div>
    </section>
    <Footer     />
    </div> }
        </>
    )
}

export default Contact
