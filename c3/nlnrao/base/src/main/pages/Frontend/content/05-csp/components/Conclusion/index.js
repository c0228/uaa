import React from "react";

const Conclusion = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
   <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
   <div className="mtop15p">Content Security Policy is one of the <b>most effective browser-level security defenses</b> available today.</div>
   <div className="mtop15p"><b>Final Takeaways:</b></div>
   <div>
      <ul>
         <li className="mtop5p">CSP was introduced to stop XSS at the browser level</li>
         <li className="mtop5p">It works by <b>whitelisting trusted content sources</b></li>
         <li className="mtop5p">Properly implemented CSP dramatically reduces attack surface</li>
         <li className="mtop5p">NodeJS applications can enforce CSP easily using headers or Helmet</li>
         <li className="mtop5p">CSP should be <b>iteratively tightened,</b> not applied blindly</li>
      </ul>
   </div>
   <div className="mtop5p">
      <div>In modern web security, CSP is not optional—it is a <b>baseline requirement.</b></div>
      <div className="mtop5p">If authentication protects <i>who</i> can access your 
         app, <b>CSP protects what your app is allowed to execute.</b></div>
   </div>
 </div>);
};

export default Conclusion;