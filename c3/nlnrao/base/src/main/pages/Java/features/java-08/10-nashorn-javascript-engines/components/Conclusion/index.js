import React from "react";
import { Card } from "e-ui-react";

const Conclusion = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
    <div className="mtop15p">The <b>Nashorn JavaScript Engine</b> in Java 8 was a <b>major step forward</b> for 
    integrating <b>scripting with Java</b>:</div>
    <div>
      <ul>
         <li className="mtop5p"><b>Before Java 8:</b> We had <b>Rhino</b>, which was slow, outdated, and lacked 
         modern ECMAScript support.</li>
         <li className="mtop5p"><b>After Java 8:</b> Nashorn provided <b>fast execution, ECMAScript 5.1 compliance, and tight Java-JS integration</b>.</li>
      </ul>
    </div>
    <div className="mtop5p"><h5 className="blog-head"><b>Key Benefits:</b></h5></div>
    <div>
      <ol>
         <li className="mtop5p">Write <b>less boilerplate code</b> for JS execution</li>
         <li className="mtop5p">Seamlessly <b>call Java classes from JavaScript</b> and vice versa</li>
         <li className="mtop5p">Enable <b>dynamic scripting</b> in <b>Java applications</b></li>
      </ol>
    </div>
    <div className="mtop15p mbot15p">
      <Card padding={15} backgroundColor="#eee">
         <div><h5 className="blog-head"><b>Note:</b></h5></div>
          Starting from <b>Java 15</b>, Nashorn was deprecated and later removed. For modern projects, 
          consider <b>GraalVM JavaScript</b> for similar capabilities.
      </Card>
    </div>
 </div>);
};

export default Conclusion;