import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "e-ui-react";
import { getAppLang } from "@Services/LangManager.js";
import './index.css';

const Welcome = ()=>{
 const [ lang, setLang ] = useState(getAppLang());
 const navigate = useNavigate();
 const [progress, setProgress] = useState(0);

 useEffect(() => {
    const interval = setInterval(() => {
        setProgress((prev) => {
            if (prev >= 100) {
                clearInterval(interval);
                 setTimeout(()=>{ window.location.href= process.env.PROJECT_URL+lang+'/home'; }, 1000);
                return prev;
            }
            return prev + 1;
        });
    }, 20);

    return () => clearInterval(interval);
}, []);

  return (<>
   <div className="splash-container" style={{ height: window.height }}>
    <div className="splash-content">
         <div className="mtop10p">
            <img src="./assets/images/logo.jpg" style={{ width: '180px', height:'auto' }}/>
         </div>
        {/*<div className="mtop15p">
          <span className="animate-text" style={{ paddingLeft:'15px', paddingRight:'15px' }}><b>PARTICIPATE</b></span> <span style={{ color:'#000' }}>|</span> 
          <span style={{ paddingLeft:'15px', paddingRight:'15px' }}><b>VOTE</b></span> <span style={{ color:'#000' }}>|</span> 
          <span style={{ paddingLeft:'15px', paddingRight:'15px' }}><b>ENGAGE</b></span>
        </div>

        <div className="mtop5p" style={{ color:'#000' }}><i><b>"Your Link to Local Democracy"</b></i></div>*/}

        <div className="mtop5p" style={{ marginTop:'35px' }}>
          <ProgressBar type="danger" progress={progress} height="3" value="" /> 
          <div className="mtop15p"><b>[ Loading... {progress}% ]</b></div>
        </div>

       

        
    </div>
   </div>  
  </>);
};

export default Welcome;