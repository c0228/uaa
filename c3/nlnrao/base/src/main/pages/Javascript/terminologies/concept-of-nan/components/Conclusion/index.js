import React from "react";
import { Card } from "e-ui-react";

const Conclusion = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
   <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
   <div className="mtop15p">
      <div>NaN is one of JavaScript’s quirkiest concepts —</div>
      <div>
         <ul>
            <li className="mtop5p">It’s a <b>number type</b> that means “Not-a-Number.”</li>
            <li className="mtop5p">It prevents programs from breaking when numeric operations 
               fail, instead returning a special value that can be checked and handled.</li>
            <li className="mtop5p">Knowing how to detect and work with 
               NaN ( <code><b>Number.isNaN()</b></code> or <code><b>Object.is()</b></code> ) is essential 
               for <b>bug-free numeric logic.</b></li>
         </ul>
      </div>
      <div className="mtop5p">Think of NaN as <b>JavaScript’s polite way of saying:</b></div>
      <div className="mtop5p mbot15p">
         <Card padding={15} backgroundColor="#eee">
            “I tried to give you a number, but it just didn’t work out.” 
         </Card>
      </div>
   </div>
 </div>);
};

export default Conclusion;