import React from "react";

const Conclusion = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
    <div className="mtop15p">
      <div>The introduction of <b>static methods in interfaces</b> in <b>Java 8</b> brought several benefits:</div>
      <div>
         <ul>
            <li className="mtop5p">Promotes <b>code reusability</b> and <b>better encapsulation</b>.</li>
            <li className="mtop5p">Eliminates the need for separate <b>utility classes</b>.</li>
            <li className="mtop5p">Keeps related functionality <b>within the interface</b>.</li>
         </ul>
      </div>
      <div className="mtop5p">In combination with <b>default methods</b>, Java 8 gave interfaces more <b>power and flexibility</b>, bridging 
      the gap between interfaces and abstract classes.</div>
    </div>
    <div className="mtop15p"><h2 className="blog-head"><b>Key Rules to Remember</b></h2></div>
    <div>
      <ul>
         <li className="mtop5p"><b>Static methods do not get inherited</b> by implementing classes.</li>
         <li className="mtop5p"><b>Call them using the interface name</b> only.</li>
         <li className="mtop5p"><b>Cannot override static methods</b> in implementing classes.</li>
      </ul>
    </div>
 </div>);
};

export default Conclusion;