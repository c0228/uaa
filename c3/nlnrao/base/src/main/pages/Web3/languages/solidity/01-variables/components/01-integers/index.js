import React from "react";
import { Tab } from "e-ui-react";

const Integer = () =>{
 const Solidity = () =>{
  return (<div className="blog-tab-details">
    <div>Solidity supports <b>two types of integers</b>:</div>
    <div>
        <ul>
            <li className="mtop5p"><b>Unsigned Integer (<code><b>uint</b></code>):</b> Only positive numbers (including 0).</li>
            <li className="mtop5p"><b>Signed Integer (<code><b>int</b></code>):</b> Both positive and negative numbers.</li>
        </ul>
    </div>
    <div className="mtop15p"><h4><b>Unsigned Integer</b></h4></div>
    <div className="mtop15p"></div>
    <div className="mtop15p"><h4><b>Signed Integer</b></h4></div>
    <div className="mtop15p"></div>
  </div>);
 };

 const Javascript = () =>{
    return (<div className="blog-tab-details"></div>);
 };

 return (<div>
    <div className="mtop15p"><h2 className="blog-head"><b>1. Integer</b></h2></div>
    <div className="mtop15p padLeft5p">
    <Tab menulinks={[{ id:"home", label:"Solidity", url:"#", component:(<Solidity />) },
     { id:"menu1", label:"Javascript", url:"#", component:(<Javascript />) }]} />
    
    </div> 
    </div>);
};

export default Integer;