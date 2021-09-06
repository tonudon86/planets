import React from 'react'
import './Left.css'

import { useState } from 'react'


function Left() {
    let colpas = {
        color: "black"
    }
const [date, setdate] = useState(null);
const [title, settitle] = useState("");
const [customtext, setcustomtext] = useState("");
const [size, setsize] = useState("")
const [btn, setbtn] = useState(false)
const [btn2, setbtn2] = useState(false)
let a ={
    date:date,
    title:title,
    text:customtext,
    size:size
}

let b =` date: ${date} title :${title}  text:${customtext} size: ${size}`
const handeclick= (e) => {
    e.preventDefault();
    if (size !=="" && title !="" &&customtext !="" && date!=null ){
        console.log(b)
    
        alert("placed successfull")
        localStorage.setItem("planets",b)
    }
    else {
        alert("fill all the details")
    }

}

const size1 =()=> {
 setbtn2(true)
    setsize("A3")
}


const size2 =()=> {
    setsize("A4")
    setbtn(true)
}
const handleSubmit=()=> {
    
}
    return (
        <section>
            <div className="row noob">
                <div className=" left      col-md-6">

                </div>
                <div style={colpas} className=" col-md-6    right my-5">
                <form  onSubmit={handeclick}>
                    <div className="centerall">
                        <h1 className="text-center mainj">Planets In Time</h1>
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Choose your print size...
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body d-flex">
                                        <button className="next-button btn mx-1" disabled={btn} onClick={size1} >A3</button>           <button  disabled={btn2}  onClick={size2} className="next-button btn btn-large">A3</button>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Choose your special date...
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div class="accordion-body d-flex">
                                        <input type="date" className="inpdate" onChange={(e)=>{setdate(e.target.value)}} required />
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Add a personalized message...
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <label htmlFor="title" className="inplabel mx-3" > Enter Your Title</label>
                                        <input type="text" name="" className="inpdate" placeholder="title ...." onChange={(e)=>{settitle(e.target.value)}} id="title"  required/>
                                        <label htmlFor="customtext" className="inplabel mx-3" > Enter Your custom text here</label> 
                                        <input type="text" name="" className="inpdate"  placeholder="text..." onChange={(e)=>{setcustomtext(e.target.value)}} id="customtext" required />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button id="palnetbtn"   onClick={handleSubmit}  className="next-button btn btn-large">Checkout </button>
                    </div>
              </form>
                </div>

            </div>
        </section>
    )

}

export default Left
