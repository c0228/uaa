import React, { useEffect } from "react";
import AccessRestricted from './components/access-restricted/index.js';
import SessionExpired from './components/session-expired/index.js';
import Footer from '@Templates/Footer/index.js';

const Unauthorized = ({ isAuthenticated }) => {
  useEffect(()=>{
    if(!isAuthenticated){
      setTimeout(()=>{ window.location.href=process.env.PROJECT_URL; }, 3000);
    }
    document.title = 'Restricted | VKAbroad';
    document.body.style.backgroundImage = "url('"+process.env.PROJECT_URL+"/assets/logo/bubbles.gif')";
   },[]);
  return (<div>
  {(isAuthenticated)?(<AccessRestricted />):(<SessionExpired />)}
  <Footer />
  </div>)
};

export default Unauthorized;
