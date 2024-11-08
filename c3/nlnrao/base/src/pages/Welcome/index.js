import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "e-ui-react";
import Home from "@Pages/Home/index.js";
import './index.css';

const Welcome = ()=>{
 const navigate = useNavigate();
 const [loader, setLoader] = useState(true);
 const [progress, setProgress] = useState(0);

 useEffect(()=>{
  // document.body.style.backgroundColor = '#7f1231';
 },[]);

 useEffect(() => {
  const interval = setInterval(() => {
    if(progress < 100) { setProgress((prevProgress) => prevProgress + 1); } 
    else { clearInterval(interval); 
      setTimeout(()=>setLoader(true), 500);
    }
   }, 30); // Change the interval time as needed
  
   return () => clearInterval(interval);
  }, [progress]);

  return (<>
   {!loader && (<div className="splash-container" style={{  height: window.innerHeight  }}>
    <div className="splash-content">
        <div className="logo text-white fs30">nellutlalnrao.com</div>
        <div className="mtop15p">
          <ProgressBar type="yellow1" progress={progress} height="3" value="" /> 
          <div className="mtop15p font-yellow2"><b>Loading... {progress}%</b></div>
        </div>
    </div>
   </div>)}
   {loader && <Home />}
  </>);
};

export default Welcome;