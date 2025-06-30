import React from "react";
import { Card } from "e-ui-react";

const Conclusion = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Key Benefits:</b></h2></div>
    <div>
      <ul>
         <li className="mtop5p">Low memory footprint</li>
         <li className="mtop5p">Supports real-time analytics</li>
         <li className="mtop5p">Provides bounded inaccuracy (controlled by <code><b>&epsilon;</b></code>)</li>
      </ul>
    </div>
    <div className="mtop15p"><h2 className="blog-head"><b>Use Cases:</b></h2></div>
    <div>
      <ul>
         <li className="mtop5p">Top search terms on a website</li>
         <li className="mtop5p">Trending topics in social media</li>
         <li className="mtop5p">Frequent IPs in network traffic</li>
      </ul>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
    <div className="mtop15p">The <b>Lossy Count algorithm</b> is an excellent tool 
    for approximate <b>frequency counting in streaming environments</b>. It’s efficient, simple, and 
    offers <b>guaranteed error bounds</b>, making it ideal for systems with:</div>
    <div>
      <ul>
         <li className="mtop5p">High data velocity</li>
         <li className="mtop5p">Memory constraints</li>
         <li className="mtop5p">Real-time analytics requirements</li>
      </ul>
    </div>
   
    <div className="mtop5p">
      <Card padding={15} backgroundColor="#eee">
         If you're building systems for <b>streaming data processing</b>, <b>monitoring</b>, or <b>ranking</b>, 
         the <b>Lossy Count algorithm</b> gives you a perfect blend of <b>accuracy</b> and <b>efficiency</b>. It's a smart 
         solution when <b>exact isn't necessary — but fast and scalable is</b>.
      </Card>
    </div>
 </div>);
};

export default Conclusion;