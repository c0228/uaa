import React from "react";
import { Card } from "e-ui-react";

const Conclusion = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
   <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
   <div className="mtop15p">Java 8 Streams brought a <b>declarative and expressive way</b> to process collections. 
   One of its key strengths — <b>lazy evaluation</b> — allows:</div>
   <div className="mtop15p">
      <ul>
         <li>Efficient pipeline creation</li>
         <li className="mtop5p">Avoidance of unnecessary operations</li>
         <li className="mtop5p">Improved performance via short-circuiting and operation fusion</li>
      </ul>
   </div>
   <div className="mtop15p">Lazy behavior encourages <b>thinking in terms of what to do</b> rather than <b>how to do it</b>, 
   paving the way for clean, readable, and maintainable code. While working with large data sets or infinite streams, 
   understanding and leveraging laziness can significantly optimize your application.</div>
   <div className="mtop15p mbot15p">
      <Card padding={15}>
       <b>Pro Tip:</b> Always remember — <b>streams are consumed only when a terminal operation is invoked</b>. Until 
       then, it’s just a <b>blueprint</b>, not a command.  
      </Card>
   </div>
 </div>);
};

export default Conclusion;