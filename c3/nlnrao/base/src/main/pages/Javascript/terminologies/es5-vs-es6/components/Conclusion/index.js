import React from "react";
import { Card } from "e-ui-react";

const Conclusion = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
   <div>
      <ul>
         <li className="mtop5p">ES5 was a big step in making JavaScript consistent and widely usable.</li>
         <li className="mtop5p">ES6 revolutionized the language, introducing features like let/const, 
         arrow functions, classes, template literals, promises, modules, default parameters, and destructuring — making 
         development more readable, maintainable, and scalable.</li>
         <li className="mtop5p">Today, developers rarely write pure ES5 directly. Instead, they use ES6+ features, 
         with transpilers like Babel ensuring older browsers can still run them.</li>
      </ul>
   </div>
   <div className="mtop5p">
      <Card padding={15} backgroundColor="#eee">
         <b>In short:</b> ES5 laid the foundation, ES6 built the skyscraper.
      </Card>
   </div>
 </div>);
};

export default Conclusion;