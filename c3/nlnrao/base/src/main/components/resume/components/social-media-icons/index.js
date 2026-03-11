import React, { useState } from "react";
import { Toast, CopyToClipboard, Icon } from "e-ui-react";

const MY_EMAIL_ADDRESS = 'me@nellutlalnrao.com';

const SocialMediaIcons = () =>{
  const [showToast, setShowToast] = useState(false);
  const IconHandler = (d)=>{
    if(d?.url) {  window.open(d?.url, "_blank"); } 
    else if(d?.onClick) { d?.onClick(); }
  };
  const Envelopehandler = () =>{
    CopyToClipboard(MY_EMAIL_ADDRESS);
    setShowToast(true);
  };
  const data = [{ "url":"https://twitter.com/NLNRao0228", "icon":"twitter" },
    { "url":"https://www.instagram.com/nellutlalnrao/", "icon":"instagram" },
    { "url":"https://www.linkedin.com/in/nellutla-l-n-rao-40ab561b1/", "icon":"linkedin" },
    { "url":"https://github.com/nellutlalnrao", "icon":"github" },
    { "icon":"envelope", "onClick": ()=>Envelopehandler() }];
    
  const ToastMessage = () =>{
    return (<div>
      <Toast show={showToast} onClose={() => setShowToast(false)}>
        <div>
          <Icon type="FontAwesome" name="fa-check-circle" size={13} style={{ marginRight:'5px' }} />
          <span><b>My Email Address is copied!</b></span>
        </div>
      </Toast>
    </div>);
  };
  return (<div className="mt-2 resume-flex-container">
    <ToastMessage />
    {data?.map((d, i)=>{
      return (
        <div key={i} className="resume-flex-box">
          <span style={{ color:'#999', cursor:'pointer' }} onClick={()=>IconHandler(d)}>
            <i className={"fa fa-"+d?.icon+" fs24"} aria-hidden="true"></i>
          </span>
        </div>);
    })}
  </div>);
};

export default SocialMediaIcons;