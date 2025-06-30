import React from "react";
import { Card } from "e-ui-react";

const Conclusion = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
    <div className="mtop15p"><b>HyperLogLog</b> is a must-have tool in the system designer’s toolbox when working with large-scale 
    data and needing memory-efficient <b>unique count approximations</b>.</div>
    <div className="mtop15p"><h4 className="blog-head"><b>Benefits:</b></h4></div>
    <div>
      <ul>
         <li className="mtop5p">Uses <b>kilobytes</b> instead of gigabytes</li>
         <li className="mtop5p">Perfect for <b>analytics dashboards</b>, <b>network monitoring</b> and <b>event tracking</b>.</li>
         <li className="mtop5p">Simple API with <b>merge capabilities</b> for distributed systems</li>
      </ul>
    </div>
    <div className="mtop15p"><h4 className="blog-head"><b>Trade-offs:</b></h4></div>
    <div>
      <ul>
         <li className="mtop5p">It's <b>probabilistic</b>, not exact</li>
         <li className="mtop5p">Slight inaccuracy (~1% or lower, configurable)</li>
         <li className="mtop5p">Doesn’t store actual elements, only estimates count</li>
      </ul>
    </div>
    <div>
      <Card padding={15} backgroundColor="#eee">
         <div><b>Note:</b></div>
         <ul>
         <li>If you're building systems that handle <b>billions of events</b> per day — like ad platforms, traffic analysis 
         tools, or log aggregators — HyperLogLog helps you <b>scale efficiently without precision overload</b>.</li>
         <li>In system design, exactness often costs too much. Sometimes, a <b>"good enough" answer is the best answer</b>.</li>
         </ul>
      </Card>
    </div>
 </div>);
};

export default Conclusion;