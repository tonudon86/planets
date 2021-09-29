
import './App.css';
import Header from './MyComponents/Header';
import Landing from './MyComponents/Landing';
import Footer  from  './MyComponents/Footer';
import Spinner from './MyComponents/Spinner';
import { useState ,useEffect} from 'react'
function Home() {
  const [loading, setloading] = useState(true)
  
 
   setTimeout(() => {
    setloading(false)
   }, 2000);

 
  return (
     <> 
     {loading==true? <Spinner/> : 
 <>
   <Header home={true} /> 
   <Landing /> 
   <Footer />
 </>
     }
    
   
  
  </>
   
  );
}

export default Home;
