import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "e-ui-react";
import './index.css';

const Welcome = ()=>{
 const navigate = useNavigate();
 const [progress, setProgress] = useState(0);

 useEffect(() => {
  const interval = setInterval(() => {
    if(progress < 100) { setProgress((prevProgress) => prevProgress + 1); } 
    else { clearInterval(interval); 
      setTimeout(()=>{ navigate('app/authentication'); }, 1000);
    }
   }, 20); // Change the interval time as needed
  
   return () => {
    clearInterval(interval);
   }
  }, [progress]);

  return (<>
   <div class="splash-container" style={{ height: window.height }}>
    <div class="splash-content">
         <div className="mtop10p">
            <img src="./assets/logo/logo-black-blue.png" style={{ width: '180px', height:'auto' }}/>
         </div>
        {/*<div className="mtop15p">
          <span className="animate-text" style={{ paddingLeft:'15px', paddingRight:'15px' }}><b>PARTICIPATE</b></span> <span style={{ color:'#000' }}>|</span> 
          <span style={{ paddingLeft:'15px', paddingRight:'15px' }}><b>VOTE</b></span> <span style={{ color:'#000' }}>|</span> 
          <span style={{ paddingLeft:'15px', paddingRight:'15px' }}><b>ENGAGE</b></span>
        </div>

        <div className="mtop5p" style={{ color:'#000' }}><i><b>"Your Link to Local Democracy"</b></i></div>*/}

        <div className="mtop5p" style={{ marginTop:'35px' }}>
          <ProgressBar type="primary" progress={progress} height="3" value="" /> 
          <div className="mtop15p"><b>[ Loading... {progress}% ]</b></div>
        </div>

       

        
    </div>
   </div>  
  </>);
};

export default Welcome;