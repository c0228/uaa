import React from "react";
import { Card } from "e-ui-react";

const Conclusion = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
    <div className="mtop15p">
      <div><b>Operational Transformation (OT)</b> is the foundational algorithm that powers real-time collaborative 
      applications. Its ability to <b>resolve concurrent edits</b> in a distributed environment without conflicts makes it a 
      cornerstone of tools like:</div>
      <ul>
         <li>Google Docs</li>
         <li>Microsoft Office 365</li>
         <li>Etherpad</li>
         <li>Confluence</li>
      </ul>
    </div>

    <div className="mtop15p"><h4 className="blog-head"><b>Key Takeaways:</b></h4></div>
    <div>
      <ul>
         <li className="mtop5p">OT ensures <b>convergence</b>: everyone ends up with the same document.</li>
         <li className="mtop5p">OT is <b>conflict-resolving</b>, not just conflict-detecting.</li>
         <li className="mtop5p">Useful in <b>text editors</b>, <b>drawing apps</b>, <b>code collaboration tools</b>, etc.</li>
      </ul>
    </div>
    <div className="mtop5p">
      <Card padding={15} backgroundColor="#eee">
      Understanding Operational Transformation not only helps you build collaborative editors but also deepens your appreciation 
      for the complexity behind modern cloud-based apps. It's a must-know algorithm for 
      any <b>system design</b>, <b>real-time</b>, or <b>distributed systems</b> engineer.
      </Card>
    </div>
 </div>);
};

export default Conclusion;