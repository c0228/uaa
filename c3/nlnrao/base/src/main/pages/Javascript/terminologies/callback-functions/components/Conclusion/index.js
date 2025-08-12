import React from "react";
import { Card } from "e-ui-react";

const Conclusion = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
   <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
   <div className="mtop15p">Callback functions are a fundamental concept in JavaScript, especially 
   for handling <b>asynchronous operations.</b></div>
   <div>
      <ul>
         <li className="mtop5p"><b>Before callbacks:</b> Developers had to rely on inefficient blocking code.</li>
         <li className="mtop5p"><b>With callbacks:</b> You can run code <b>after</b> a task completes without stopping the rest of the program.</li>
         <li className="mtop5p"><b>Be careful:</b> Too many nested callbacks create messy code (callback hell), so modern 
         JavaScript often uses <b>Promises</b> or <b>async/await</b> instead.</li>
      </ul>
   </div>
   <div className="mtop5p mbot15p">
      <Card padding={15} backgroundColor="#eee">
         <b>In Short:</b> A callback is “a function you give to another function, to be called later when the job is done.”
      </Card>
   </div>
 </div>);
};

export default Conclusion;