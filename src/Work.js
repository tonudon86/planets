import React,{useEffect} from 'react'
import Header from './MyComponents/Header'
import Footer  from  './MyComponents/Footer';
import { useState } from 'react';
import Spinner from './MyComponents/Spinner';
function Work() {
    const [loading, setloading] = useState(true)
  
    useEffect(() => {
        setloading(false)
    }, [])
  
    return (
        <>
{loading==true?<Spinner/>:
    <div>
   <Header work={true}/>
   <section id="how-it-work">
        <div className="how-work">
            <div className="work-info">
                <div className="how-work-content">
                    <h2 className="how-work-heading">How it Works</h2>
                    <span className="how-work-span"><img src="/img/hw1.png" alt=""/></span>

                    <p className="how-work-pg">
                        We at Celestial Souls want to bring you one step closer to the universe. Through star mapping,
                        we
                        capture the position of stars and planetsbasis various personalized factors, create a map,and
                        source
                        it across the country in premium quality wooden frames.

                    </p>
                </div>
                <div className="how-work-content">
                    <h2 className="how-work-heading">Info of the Product</h2>
                    <span className="how-work-span"><img src="/img/hw2.png" alt=""/></span>

                    <p className="how-work-pg">
                        Star map, as the name suggests, locates the position of stars, planets, the Moon, and the Sun as
                        observed from a specific location at a specific time.The position of these elements of the Solar
                        System keeps changing from time to time which makes every star map unique and special.
                    </p>
                </div>
                <div className="how-work-content">
                    <h2 className="how-work-heading">Significance of the Product</h2>
                    <span className="how-work-span"><img src="/img/hw3.png" alt=""/></span>

                    <p className="how-work-pg">
                        Star maps make for the best gifts for various occasions like birthdays, wedding gifts and
                        anniversaries, baby showers, or any other significant moment in your life that you would love to
                        create a memory of, or maybe gift one to yourself too.It is unique, special, and personalized.
                    </p>
                </div>
                <div className="how-work-content">
                    <h2 className="how-work-heading">How it's Made </h2>
                    <span className="how-work-span"><img src="/img/hw4.png" alt=""  className="how-work-img"/></span>

                    <p className="how-work-pg">
                        The data to create our star maps is backed by Nasa Astronomical Data Center Star Catalog. We
                        collate
                        this data and feed it into our software wherein the geographical coordinates are also located
                        with
                        the inputs that you provide- date and time. This data is then passed on to our talented
                        designers to
                        beautify the map further for you to embrace it for a lifetime.
                    </p>
                </div>
            </div>
            <div className="work-image">
               <img src="/img/work.svg" alt="" className="work-img"/>
            </div>
        </div>
    </section>
    <Footer />
    </div>
}

 
   </> 
    )
}

export default Work
