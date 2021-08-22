import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className="" >
         	<footer>
		<div className="footer-logo">
			<div className="footer-lgo">
				<img src="/img/footerlogo.svg" alt=""/><br/><span><img src="/img/Rectangle 33.png" alt="" className="footer-span"/></span>
			</div>
			
			<ul className="footer-ul">
				<li className="footer-icons"><img src="/img/facebook.svg" alt="" className="fb-icon"/> </li>
				<li className="footer-icons"><img src="/img/whatsapp.svg" alt="" className="fb-icon" /></li>
				<li className="footer-icons"><img src="/img/instagram.svg" alt="" className="fb-icon"/></li>
			</ul>
		</div>
		<div className="footer-imp">
			<h3 className="footer-heading">Important Information</h3>
			<span><img src="/img/Rectangle 33.png" alt="" className="imp-span"/></span>
			<ul className="bitch">
			<Link to="/contact"><li className="imp-pages">Contact</li> </Link>
			<Link to="/work"><li className="imp-pages">How it works</li> </Link>
			<Link to="/privacy"><li className="imp-pages">Privacy Policy</li></Link>
			<Link to="/cookies"><li className="imp-pages">Cookie Policy</li></Link>
			<Link to="/terms"><li className="imp-pages"> Terms and Condition</li></Link>
			<Link to="/return"><li className="imp-pages">Return & Cancellation</li></Link>
			</ul>
		</div>
		<div className="footer-payment-option">
			<h3 className="footer-heading">Secure payment and personal info</h3>
			<span><img src="/img/Rectangle 33.png" alt="" className="pay-span"/></span>
			<div className="big-images">
				<img src="/img/mcafee.svg" alt="" className="big-payment-option-one"/>
				<img src="/img/ssl.svg" alt="" className="big-payment-option-two"/>
				<img src="/img/paypal.svg" alt="" className="big-payment-option-three"/>
			</div>
			<div className="short-images">
				
				<img src="/img/visa.svg" alt="" className="small-payment-option"/>
				<img src="/img/mastercard.svg" alt="" className="small-payment-option"/>
				<img src="/img/Linkmerican.svg" alt="" className="small-payment-option"/>
				<img src="/img/stripe.svg" alt="" className="small-payment-option"/>
				<img src="/img/paypalsmall.svg" alt="" className="small-payment-option"/>
			</div>
		</div>
		{/* <h1 style={{color:"black"}}>Developed by <Link to=""> Cretmark</Link></h1> */}
	</footer>

        </div>
    )
}

export default Footer
