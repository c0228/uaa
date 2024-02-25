import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "e-ui-react";
import './index.css';

const Quotations = [
  {
   "title":"Study abroad <br/> where the classroom extends beyond borders. Let us guide you on this incredible journey - VK Abroad Consultancy",
  },
  {
    "title":"Adventure awaits beyond your comfort zone. Discover it with - VK Abroad Consultancy" ,
  },
  {
    "title":"Invest in yourself. Explore the world. We'll handle the details - VK Abroad Consultancy",
  },
  {
    "title":"Good design is making something intelligible and memorable. Great design is making something memorable and meaningful",
  },
  {
    "title":"Education knows no boundaries. Explore your potential with our global guidance",
  },
  {
    "title":"Travel far, learn more. Let us be your compass on this educational voyage",
  },
  {
    "title":"Expand your horizons. We'll take you there",
  },
  {
    "title":"Bridging dreams with destinations. Your success is our mission",
  },
  {
    "title":"Life's greatest lessons are learned beyond the classroom. Let us help you find them.",
  },
  {
    "title":"Seize the opportunity to study abroad. We'll make it a reality",
  }
];

const quotationIndex = Math.floor(Math.random() * (Quotations.length-1)) + 1;

const Welcome = ()=>{
 const navigate = useNavigate();
 const [showQuotation, setQuotation] = useState(false);
 const [progress, setProgress] = useState(0);
 useEffect(() => {
  const interval = setInterval(() => {
    if(progress < 100) { 
      setProgress((prevProgress) => prevProgress + 1); 
      if(progress === 20 || progress===80){
        setQuotation(!showQuotation);
      }
    } else { clearInterval(interval); 
       setTimeout(()=>{
          navigate('/Home');
       }, 120); 
    }
   }, 60); // Change the interval time as needed
  
   return () => clearInterval(interval);
  }, [progress]);

  return (<>
   <div class="splash-container">
    <div class="splash-content">
        <img src="./assets/logo/logo-flat.png" style={{ width: '200px', height:'auto' }}/>
        <div className="mtop15p">
          <ProgressBar progress={progress} height="3"/> 
          <div className="mtop15p"><b>Loading... {progress}%</b></div>
        </div>
        <div align="left" className={(showQuotation)?"fade-2s show":"fade-2s"} 
            style={{ marginTop:'25px', color:'#777', fontSize:'16px' }}>
          <blockquote>
            <i>"  {Quotations[quotationIndex]?.title} "</i><br/>
          </blockquote>
        </div>
    </div>
   </div>  
  </>);
};

export default Welcome;


