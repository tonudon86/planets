import React from 'react'
import { Link } from 'react-router-dom';
import {useState} from 'react';
import { useHistory } from "react-router-dom";
import { useAlert } from 'react-alert';
import axios from 'axios';

function Landing() {
	const alert=useAlert()
	let history = useHistory();
   const [email, setemail] = useState("")
   function submit (e){
	e.preventDefault();
	if (!email){
	alert.error("pls enter the email") }
	else {
		axios.post('/api/contact/subs',{email:email})
		.then((res)=>{
			if(res.data.status)
			{
			return	alert.success(res.data.message)
			}
			alert.error("somthing went wrong plaese contact admin") 
		}

		)
	}

   }
   const tagline={
	fontFamily: "Russo One",
	fontStyle: "normal",
	fontWeight: "normal",
	fontSize: "36px",
	lineHeight: "43px"
   }

   const getStarMap=()=>{
	history.push('/customization')
   }
   const getPlanetMap=()=>{
	   history.push('/planets')
   }
 
     return (
   <>
   <div className= "noob-bg">
   	<div className="fixed-button">

 	<button   onClick={getStarMap}  className="get-your-starmap-here"><Link to="/customization">GET STARMAP</Link> </button> 
	 <button  onClick={getPlanetMap}  className="get-your-starmap-here"> <Link to="/planets">GET PLANET MAP</Link></button> 
</div>

   <section id="moonlight-section" >
 
		{/* <img className=""   src="/img/bg home.jpg" alt="" id="bg"/> */}
	 
		<img  src="/img/mountain-final.png" alt="" id="mountain"/>
		{/* <img src="/img/manishbox.svg" alt="" id=""/> */}
		<div className="home-btn-content">
			<h1 id="text"> Gifts that are Out of this World</h1>
			{/* <h2 id="text">Capture Your Cherished <br/> Memories in a Frame</h2> */}
			<h4 className="home-page-h-four"> Capture Your Precious Moments On a Customized Map.</h4>

		<div className="buttonhome">
		<button className="home-btnn" id="map"><Link to="/customization">GET STARMAP</Link></button> 
			<button className="home-btnn" id="map"><Link to="/planets">GET PLANET MAP</Link></button>
		</div>
		</div>
		<div  className="arrowscroll"> <span>&#8592;</span>	 SCROLL TO KNOW MORE</div> 
	
	</section>
	<img src="/img/Rectangle.png" alt="" id="blur-img" / >


















	<section  className="double-img">
		<div  className="img-one">
			<img src="/img/image4.jpg" alt="" className="img-ones"/>
		</div>
		<div className="img-two">
			<img src="/img/image5.jpg" alt="" className="img-twos"/>

		</div>
	
	</section>
	<section>

	</section>
	<section id="why-starmapping">
		<h2 className="why-star-heading">Why Starmapping?</h2>
		<div className="why-starmapping">
			<div className="why-description">
				<div className="why-decp">
					<img src="/img/1logo.svg" alt="" className="iconic common-class"/>
					<h3 className="why-decp-heading common-class">High-Quality Prints</h3>
					<p className="why-decp-paragraph common-class">All star maps are professionally designed and printed on high
						resolution
						matte finished art paper that lasts forever.
					</p>
				</div>
				<div className="why-decp">
					<img src="/img/2logo.svg" alt="" className="iconic common-class"/>
					<h3 className="why-decp-heading  common-class">Premium Frames </h3>
					<p className="why-decp-paragraph  common-class">All sky maps are shipped with premium quality acrylic frame that adds
						an
						eye catching charm to its surroundings.
					</p>
				</div>
				<div className="why-decp">
					<img src="/img/3logo.svg" alt="" className="iconic  common-class"/>
					<h3 className="why-decp-heading  common-class">Personalised Maps </h3>
					<p className="why-decp-paragraph  common-class">We accurately design your star map with the help of NASA Astronomical
						Data
						Center Star Catalog.
					</p>
				</div>
			</div>
		</div>
	</section>
	<section className="gift">
		<div className="star-gift">
			<div className="gift-images">
				<div className="gift-image-one">
					<img src="/img/image3.jpg" alt="" className="side-img"/>
				</div>
				<div className="gift-image-two">
					<img src="/img/image2.jpg" alt="" className="side-img"/>

				</div>
			</div>
			<div className="star-gift-content">
				<h3 className="gift-heading">Why gift a star map?</h3>
				<span><img src="/img/Rectangle33.png" alt="" className="gift-span"/></span>
				<p className="gift-content">Star maps are perfect gifts for birthdays, weddings, anniversaries, baby
					showers, or any other
					significant event in your life you’d like to remember, or even for yourself. It’s unique,
					memorable, and tailored for you.</p>
			</div>
		</div>
	</section>
	<section className="gift">
		<div className="star-gift  star-gift-second  ">

			<div className="star-gift-content-two">
				<h3 className="gift-heading">Significance of the product
				</h3>
				<span><img src="/img/Rectangle33.png" alt="" className="gift-span"/></span>
				<p className="gift-content">As the name suggests, a starmap locates the position of stars, planets, the
					Moon, and the Sun
					as observed from a specific location at a particular time. These elements of the Solar System
					keep changing from time to time, which makes every star map unique and special. We at
					Starmapping are committed to helping you create a gift that will last a lifetime.</p>
			</div>
			<div className="gift-images-second">
				<div className="gift-image-three">
					<img src="/img/image3.jpg" alt="" className="side-img"/>
				</div>
				<div className="gift-image-four">
					<img src="/img/image2.jpg" alt="" className="side-img"/>

				</div>
			</div>
		</div>
	</section>
	<section className="gift">
		<div className="star-gift">
			<div className="gift-images">
				<div className="gift-image-one">
					<img src="/img/image3.jpg" alt="" className="side-img"/>
				</div>
				<div className="gift-image-two">
					<img src="/img/image2.jpg" alt="" className="side-img"/>

				</div>
			</div>
			<div className="star-gift-content star-add-div">
				<h3 className="gift-heading">Fast, easy & free delivery</h3>
				<span><img src="/img/Rectangle33.png" alt="" className="gift-span secont-gift-span"/></span>
				<p className="gift-content">We provide easy, free and quick delivery nationwide. All the products created by
					Starmapping
					are carefully designed. We use frames made from premium quality wood sourced from across
					the country, making our packaging eco-friendly and sustainable.</p>
			</div>
		</div>
	</section>

	<section className="subscribe-sec">
		<h1 className="sub-heading">Subscribe to Newsletter</h1>
		<form onSubmit={submit} className="subscription">
			<input className="sub-form" type="email" value={email} onChange={(e)=>{setemail(e.target.value)}} placeholder="Email Address" className="sub-email"/>
			<input type="submit" value="SEND" className="sub-btn"/>
		</form>
	</section>
	</div>
   </>
    )
}

export default Landing
