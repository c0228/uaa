import React from "react";

const Conclusion = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
   <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
   <div className="mtop15p">
      <b>Cross-Site Scripting (XSS)</b> is one of the most common and dangerous vulnerabilities in JavaScript-powered 
      applications. It exploits a simple truth: <b>browsers trust the HTML and JavaScript they are given</b> — whether 
      it’s from the server or an attacker.
   </div>
   <div className="mtop15p">By <b>escaping output, sanitizing input, using CSP,</b> and leveraging framework safety 
   features, you can drastically reduce XSS risks.</div>
   <div className="mtop15p">In Short:</div>
   <div className="mbot15p">
      <ul>
         <li className="mtop5p">XSS is not about “hacking” the server — it’s about <b>hijacking the user’s trust</b> in 
         your site.</li>
         <li className="mtop5p">Secure coding practices turn your website from a <b>playground for attackers</b> into a 
         fortress for your users. </li>
      </ul>
   </div>
 </div>);
};

export default Conclusion;