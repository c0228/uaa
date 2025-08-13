import React from "react";

const Conclusion = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
   <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
   <div className="mtop15p">The <b>Content-Security Policy (CSP)</b> is a <b>powerful, flexible defense</b> against script 
   injection and data theft. It works by <b>whitelisting trusted sources</b> for all types of resources, ensuring that even 
   if malicious code is injected, it cannot execute.</div>
   <div className="mtop5p"><h5 className="blog-head"><b>Best Practices:</b></h5></div>
   <div>
      <ul>
         <li className="mtop5p">Always set CSP in <b>HTTP headers</b></li>
         <li className="mtop5p">Avoid <code><b>'unsafe-inline'</b></code> and <code><b>'unsafe-eval'</b></code></li>
         <li className="mtop5p">Use <b>nonces</b> or <b>hashes</b> for inline scripts</li>
         <li className="mtop5p">Start with Report-Only mode to detect issues before enforcing</li>
      </ul>
   </div>
   <div className="mtop5p mbot15p">
      CSP isn’t just a nice-to-have—it’s one of the <b>strongest tools in your web security toolbox.</b> Think of it as your 
      website’s <b>bodyguard,</b> checking every file’s ID before letting it in. 
   </div>
 </div>);
};

export default Conclusion;