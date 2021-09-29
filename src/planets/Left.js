import React from 'react'
import './Left.css'
import { useAlert } from 'react-alert';
import { useState ,useEffect} from 'react'
import Spinner from '../MyComponents/Spinner';
import { useHistory } from 'react-router';
// import logo from './1.gif'

function Left() {
    const alert=useAlert()
    const history = useHistory()
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
    
        alert.success("Plese Fill all Require Details")
        localStorage.setItem("StarMap",b)
        
        history.push('/checkout2')

    }
    else {
        alert.error("fill all the details")
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


const [loading, setloading] = useState(true)
 setTimeout(() => {
    setloading(false) 
 }, 2000);


 const [desing, setdesing] = useState(10)
 const [sizeDesin, setsizeDesin] = useState("small")
 
 const desingChange=(num) =>{
    setdesing(num)
 }

 const [loadernew, setLoadernew] = useState(true)

 const borderColorChange=(id)=>{
    let a=document.getElementById('imgone').style.borderColor='black'
    let b=document.getElementById('imgtwo').style.borderColor='black'
    let c=document.getElementById('imgthree').style.borderColor='black'
    let d=document.getElementById('imgfour').style.borderColor='black'
    let e=document.getElementById('imgfive').style.borderColor='black'
    let f=document.getElementById('imgsix').style.borderColor='black'
    let z=document.getElementById(id)
    z.style.borderColor='#8F00FF'
    setLoadernew(false)
    setTimeout(() => {
        setLoadernew(true)
    }, 1000);
 }
    return (
    <>
        {loading==true?<Spinner/>
        :
   
        <section>
            <div className="row noob">
                <div className=" left      col-md-8">
                    {loadernew===true?
                     <img  className="img-responsive" src={`./planetsImage/${desing}${sizeDesin}.jpg`} alt="img" /> 
                : <img src="./planetsImage/2.gif" alt="loader" />
                }
                       

                </div>
                
                <div style={colpas} className=" col-md-4    right my-5">
                {/* <form  onSubmit={handeclick} id="form"> */}
                <div class="accordion" id="accordionExample">
                <h1 className="text-center mainj" >Planets In Time</h1>
                <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOnenew" aria-expanded="true" aria-controls="collapseOne">
                                        Select your Design...
                                    </button>
                                </h2>
                                <div id="collapseOnenew" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body d-flex">
                                <div className="imagebox">
                                        <img className="desingImage" id='imgone' onClick={()=>{
                                            desingChange(60)
                                            borderColorChange('imgone')
                                        }} src="./planetsImage/d1.jpg" alt="" />
                                        <img className="desingImage"  id='imgtwo' onClick={()=>{desingChange(50)
                                              borderColorChange('imgtwo')}} src="./planetsImage/d2.jpg" alt="" />
                                        <img  className="desingImage" id='imgthree' onClick={()=>{desingChange(40)
                                         borderColorChange('imgthree')}} src="./planetsImage/d3.jpg" alt="" />
                                       
                                        <img className="desingImage" id='imgfour'  onClick={()=>{desingChange(20)
                                         borderColorChange('imgfour')
                                        }} src="./planetsImage/d4.jpg" alt="" />
                                        <img className="desingImage" id='imgfive' onClick={()=>{desingChange(10)
                                         borderColorChange('imgfive')
                                        }}  src="./planetsImage/d5.jpg" alt="" />
                                        <img className="desingImage" id='imgsix' onClick={()=>{desingChange(30)
                                         borderColorChange('imgsix')
                                        }} src="./planetsImage/d6.jpg" alt="" />
                                </div>
                                    </div>
                                </div>



                                <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Choose your print size...
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body d-flex">
                                        <button disabled={sizeDesin==="big"} className="next-button btn mx-1"  onClick={()=>{setsizeDesin("big")}}   >A3 15x15 inch</button>           <button   disabled={sizeDesin==="small"}  onClick={()=>{setsizeDesin("small")}} className="next-button btn btn-large">A4 10x10 inch</button>
                                    </div>
                                </div>
                            </div>




                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Choose your special date...
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body d-flex">
                                        <input type="date" className="inpdate" onChange={(e)=>{setdate(e.target.value)}}  />
                                    </div>
                                </div>
                            </div>

                 
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Add a personalized message...
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <label htmlFor="title" className="inplabel mx-3" > Enter Your Title</label>
                                        <input type="text" name="" className="inpdate" placeholder="title ...." onChange={(e)=>{settitle(e.target.value)}} id="title"  />
                                        <label htmlFor="customtext" className="inplabel mx-3" > Enter Your custom text here</label> 
                                        <input type="text" name="" className="inpdate"  placeholder="text..." onChange={(e)=>{setcustomtext(e.target.value)}} id="customtext"  />
                                    </div>
                                </div>
                            </div>

                            <button id="palnetbtn"  onClick={handeclick}   type="submit"  className="next-button btn btn-large">Checkout </button>
                            </div>
                            </div>
                            {/* </form> */}

               

                     
                   
           
                </div>

            </div>
        </section>}
        </>
    )

}

export default Left
