import React from "react";

const SocialMediaIcons = () =>{
    const data = [{
      "url":"https://twitter.com/NLNRao0228",
      "icon":"twitter", 
    },{
      "url":"#",
      "icon":"instagram"
    },{
      "url":"#",
      "icon":"linkedin"
    },{
      "url":"#",
      "icon":"github"
    },{
      "url":"#",
      "icon":"envelope"
    }];
    return (<div className="mt-2 resume-flex-container">
      {data?.map((d, i)=>{
          return (
          <div key={i} className="resume-flex-box">
              <a href={d?.url} target="_blank" style={{ textDecoration:'none', color:'#999' }}>
              <i className={"fa fa-"+d?.icon+" fs24"} aria-hidden="true"></i>
              </a>
          </div>);
      })}
    </div>);
   };

   export default SocialMediaIcons;