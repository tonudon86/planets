import React from 'react';
import ScriptTag from 'react-script-tag';
import Location from './Location';
import './custom.css';
import Header from '../MyComponents/Header';
import { useState } from 'react';

import html2canvas from 'html2canvas';

import { useEffect } from 'react';


const Demo =({Data})=>{ 
const [status, setstatus] = useState(true)
useEffect (()=>{
  setTimeout(() => {
    
  }, 5000);
  return()=>{}
},[])

if(status)
{


  return (
  <>
  <ScriptTag type="text/javascript">
       Celestial.display({JSON.stringify(Data)});
   </ScriptTag>
  </>
  )
}

else{
  return   <>
   <>
  <ScriptTag type="text/javascript">
       Celestial.display({JSON.stringify(Data)});
   </ScriptTag>
  </>
  </>
}



}


  

function Custom(props) {



const [Image, setImage] = React.useState([
 "/background/Star_Map_Bird_Blue.png",
 "/background/Star_Map_Bird_Pink.png",
 "/background/Star_Map_Boy_Face_Web.png",
 "/background/Star_Map_Girl_Face_web.png",
 "/background/Star_Map_Heart_white_web.png",
 "/background/Star_Map_Star_web.png",
 "/background/Star_Map_Vine_web.png",
 "/background/Star_Map_Heart_Full_web.png",
 "/background/Star_Map_Planet_Line_web.png",
 "/background/Star_Map_Heart_Black_web.png",
])


const [Logo, setLogo] = React.useState([
  "/background/logo/1logo.svg",
  "/background/logo/2logo.svg",
  "/background/logo/3logo.svg",
  "/background/logo/4logo.svg",
  "/background/logo/5logo.svg",
  "/background/logo/6logo.svg",
  "/background/logo/7logo.svg",
  "/background/logo/8logo.svg",
  "/background/logo/9logo.svg",
  "/background/logo/10logo.svg",
 ])

const ref=React.createRef()



const [Data, setData] = React.useState({
  location: true,
  geopos:[17.496576,70.843095],
  form: false,
  advanced:true,
  background: { fill: "#000", stroke: "#000000", opacity:1},
  projection: "airy",
  datapath: "./data/",
  daterange:[1,1],
  planets:  { show: false },
  stars: {
    colors: false,
    names: false,
    style: { fill: "#fff", opacity:0.7 },
    limit: 50,
    size: 1
  },
  horizon:{show:true},
  dsos: { show: false },
  constellations: {
    show: true,    // Show constellations
    names: false,   // Show constellation names
    desig: false,   // Show short constellation names (3 letter designations)
    nameStyle: { fill:"#fff", align: "left", baseline: "middle", opacity:0.8,
                 font: ["bold 7px Helvetica, Arial, sans-serif",  // Different fonts for brighter &
                        "bold 7px Helvetica, Arial, sans-serif",  // sdarker constellations
                        "bold 7px Helvetica, Arial, sans-serif"]},
    lines: true,   // Show constellation lines
    linestyle: { stroke: "#ffff", width:1, opacity: 0.8 },
    bounds: false,  // Show constellation boundaries
    boundstyle: { stroke: "#ffff",  width: 0, opacity: 0.8, dash: [2, 4] }
  },
  planets: { show: false},
  mw: {
    show: false,    // Show Milky Way as filled polygons
  },
  interactive:false,
  lines: {
    graticule: { show: false, stroke: "#cccccc", width: 0.5, opacity: 0.1,      // Show graticule lines
      // grid values: "outline", "center", or [lat,...] specific position
      // lon: {pos: ["center"], fill: "#eee", font: "10px Helvetica, Arial, sans-serif"},
      // // grid values: "outline", "center", or [lon,...] specific position
      // lat: {pos: ["center"], fill: "#eee", font: "10px Helvetica, Arial, sans-serif"}
    },
    equatorial: { show: false, stroke: "#fff", width: 1.3, opacity: 0.7 },    // Show equatorial plane
    ecliptic: { show: false, stroke: "#66cc66", width: 1.3, opacity: 0.7 },      // Show ecliptic plane
    galactic: { show: false, stroke: "#cc6666", width: 1.3, opacity: 0.7 },     // Show galactic plane
    supergalactic: { show: false, stroke: "#cc66cc", width: 1.3, opacity: 0.7 } // Show supergalactic plane
}
})
  





const [ImageCount, setImageCount] = React.useState(0)
const [Body, setBody] = React.useState("Image")
const [info, setinfo] = React.useState({heading:"Title Here",message:"Custom line one",custom:"Custom line two",size:"",price:"1800",location:"Mumbai",place:"12-01-2021,12:23",lat:"17.496576",log:"70.843095"})
const [Formview, setFormview] = React.useState(['Image','Movement','Text','Size'])

const lat_lng=(lat,lng,address)=>{
  setinfo((pre)=>({...pre,lat:lat,log:lng,location:address}))

  setData((pre)=>({...pre,geopos:[lat,lng]}))
}

React.useEffect(()=>{
    let element=document.getElementById("celestial-form")
    let container=document.getElementById("celestial-map")
    if(element!==null)
    {
      // element.innerHTML=''
      element.style.display='none';
      container.style.width='fit-content'
      container.style.height='fit-content' 
    }
    return () => {}
  }, [ImageCount,Body,info,Image,Data])


  function change(){
    let count=Formview.indexOf(Body)
    if(count+1==Formview.length)
    {
      setBody('Size')
    }
    else{
      setBody(Formview[count+1])
    }
  }


  function ImageBody()
  {
    return(
    <>
       <h1 style={{color:"black"}} className="rects-heading-custom text-center">Select your favourite design :</h1>
    <div className="ImageContainer">{Logo.map((e,index)=><img src={e} key={index} onClick={()=>setImageCount(index)} className="select-single-frame"/>)}</div>
    
    </>
    )
  }

function Info()
{
  const [infodemo, setinfodemo] = React.useState(info)
  return(
  <>
         <h5 style={{color:"black"}} className="rects-heading-custom text-center">Add title and footnote to make it really personal :
</h5>
    <div className="infobody">
      <label className="gadhi" style={{color:'black' ,fontSize:"15px"}}>Title</label>
      <input style={{color:'black'}} type="text" className="custext"  list="titlelist"  name="name" onChange={(e)=>setinfodemo((pre)=>({...pre,heading:e.target.value}))} placeholder="Title Here"/>
      <datalist id="titlelist">
        <option value="WHEN THE WORLD GOT A ROCKSTAR"/>
        <option value="THE DAY SHE WAS BORN"/>
        <option value="THE DAY OUR LIVES CHANGED"/>
        <option value="A STAR WAS BORN"/>
        <option value="Safari"/>
        

        <option value="WHEN WE FRIST MET "/>
        <option value="YOU ARE THE BIGGEST STAR IN MY SKY "/>
        <option value="MADE IN HEAVEN"/>
        <option value="OUR SPECIAL MOVMENT "/>
        <option value="I LOOK AT YOU THE SAME WAY YOU LOOK TO THE STARS "/>
        <option value="OUR FRIST DATE "/>
        <option value="WHEN WE MARRIED"/>
        <option value="WHEN YOU SAID YES "/>
        <option value="STARS ON OUR WEDDING DAY"/>
     

        <option value="Safari"/>
      </datalist>

    
      <label className="gadhi"  style={{color:'black',fontSize:"15px"}}>Custom Line Footer</label>
      <input style={{color:'black'}} type="text" className="custext" name="message"  maxlength = "50" onChange={(e)=>setinfodemo((pre)=>({...pre,message:e.target.value}))} placeholder="custom line one   "/>
      <input style={{color:'black'}} type="text" className="custext" name="custom"  maxlength = "40" onChange={(e)=>setinfodemo((pre)=>({...pre,custom:e.target.value}))} placeholder=" custom line two  "/>
     
      <button className="" onClick={()=>setinfo((e)=>({...infodemo}))}>Update name</button>
    </div>
  </>
  )
}

function SizeBody()
{
  
  return(
  <> <div className="container text-center">
    <h1 style={{color:'black'}} >Size is here!</h1>
 
 <button className="  size-button " style={info.price=='1800'?{backgroundColor:'#8f00ff',color:'white'}:{}}  onClick={()=>setinfo((e)=>({...e,price:"1800"}))}>A-3 (11.75 x 16.5)inch  <del>3000</del> 1800 INR    </button>
 <button className="  size-button " style={info.price=='1500'?{backgroundColor:'#8f00ff',color:'white'}:{}} onClick={()=>setinfo((e)=>({...e,price:"1500"}))}>A-4 (8.25 x 11.75) inch <del>2500</del>  1500 INR </button>   

 {/* <button  className=" size-button">12 x 16 inch                    (30 x 40 cm)                    $69 $49</button> */}
 
    </div>
  </>
  )
}



function LocationText(){

  const [infodemo, setinfodemo] = React.useState(info)


  return(
  <>
           <h5 style={{color:"black"}} className="rects-heading-custom text-center">Select the time of your special moment to show your stars </h5>
    <div className="infobody">
      <label       style={{color:"black", fontSize:"15px"}}>Location:</label>
      <Location lat_lng={lat_lng}/>

      <label       style={{color:"black", fontSize:"15px"}}>Date:</label>
      <input type="datetime-local" 
       id="meeting" 
       name="meeting"
      style={{color:"black"}}
       value={infodemo.place}
       onChange={(e)=>setinfodemo((pre)=>({...pre,place:e.target.value}))}
       defaultValue="2021-08-01"/>
      <button onClick={()=>setinfo(infodemo)}>Update</button>
    </div>
  </>
  )
}

function CustomeBody(){
  switch(Body)
  {
    case "Image":
      return <ImageBody/>
    case "Movement":
      return <LocationText/>
    case "Text":
      return <Info/>
    case "Size":
      return <SizeBody/>
    default:
      <ImageBody/>
  }
}






async function checkout(){

    let image=await document.getElementById("starmap_box");
  await html2canvas(image).then(canvas => 
    {
      localStorage.setItem("images",canvas.toDataURL())
    
    }
  )
  
  setTimeout(()=>{
    localStorage.setItem("StarMap",JSON.stringify({...info,ImageCount}))
    window.location.href='/checkout'
  },)

}


  return (
    <>
    <Header/>
   
   <section className="customise">
        <div className="starmapping-frame mapcontainer">
          <div className="starmap_box" id="starmap_box" ref={ref}>
            <img src={`${Image[ImageCount]}`}/>
                <div className="starmap_box_circle" id="celestial-map" style={{width:'fit-content',height:'fit-content'}} ></div>
                <p className="titleofmap" style={ImageCount>7?{color:'white'}:{color:'black'}}>{info.heading}</p>
                <p className="msgofmap" style={ImageCount>7?{color:'white' }:{color:'black'}}>{info.message}</p>
                <p className="msgofmap2" style={ImageCount>7?{color:'white' }:{color:'black'}}> {info.custom}  </p>
                <p className="starover" style={ImageCount>7?{color:'white' }:{ color:'black'}}> star over</p>
                <p className="locationofmap" style={ImageCount>7?{color:'white' }:{ color:'black'}}>{info.location +" "+ info.lat +" "+ info.log}</p>
                <p className="placeofmap" style={ImageCount>7?{color:'white' }:{ color:'black'}}>{info.place}</p>
          </div>
        </div>
        

        <div className="starmapping-rects">
        
        <div className="frame-buttons">
            <button className="frame-link-buttons bttn" style={Body=='Image'?{background:'#8F00FF',color:'white'}:{}} onClick={()=>setBody("Image")}>Design</button>
            <button className="frame-link-buttons bttn" style={Body=='Movement'?{background:'#8F00FF',color:'white'}:{}} onClick={()=>setBody("Movement")}>Moment</button>
            <button className="frame-link-buttons bttn" style={Body=='Text'?{background:'#8F00FF',color:'white'}:{}} onClick={()=>setBody("Text")}>Text</button>
            <button className="frame-link-buttons bttn"  style={Body=='Size'?{background:'#8F00FF',color:'white'}:{}} onClick={()=>setBody("Size")}>Frame Size</button>
        </div>
          <div className="noob-custom" style={{backgroundColor:"white"}}>
       
            <div className="select-your-frames">
            <CustomeBody/>
            </div>
            {
              Body==='Size'?<>
            <div className="btncontainer">
                <button className="next-button" onClick={()=>checkout()}>Checkout</button> </div>
              </>:
              <div className="btncontainer">
                <button  className="next-button btn btn-large"  onClick={()=>change()}>Next</button>
              </div>
            }
          </div>

        </div>
        <Demo Data={Data}/>
    </section>

  </>
  );
}




export default Custom;
