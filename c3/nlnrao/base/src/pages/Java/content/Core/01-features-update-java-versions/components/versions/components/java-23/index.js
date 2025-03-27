import React from "react";
import { Highlight, Accordian } from "e-ui-react";
import { BlogIndexHeader } from "@Components/blog-index-header/index.js";
import OrderList from "@Components/order-list/index.js";

const Java23 = () =>{
 const Features = () =>{
  return (<div>

    <div className="mtop10p padLeft5p">
        <BlogIndexHeader type="simple" index="1" title="" />
        <OrderList data={[(<div className="mtop5p"></div>),
            (<div className="mtop5p"></div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="2" title="" />
        <OrderList data={[(<div className="mtop5p"></div>),
            (<div className="mtop5p"></div>)]} />
    </div>

  </div>);
 };
 return (<div className="mtop15p">
     <div className="mtop15p"><h4><b>Java SE 23 (September, 2024):</b></h4></div>
     <div className="mtop15p">Java 23 brings a host of new features and improvements aimed at enhancing developer 
        productivity, code clarity, and application performance. From advanced pattern matching with primitive types to 
        flexible constructor bodies and improved concurrency models, this release continues to evolve the Java language 
        to meet modern development needs. Developers are encouraged to explore these features and consider adopting them to 
        leverage the full potential of Java 23.
     </div>
     <div className="mtop15p">
         <Accordian id="Java23" data={[{
                 id:"java23-features", 
                 title: (<div><b>FEATURES:</b></div>),
                 component:(<Features />)
             }]} />
     </div>
  </div>);
};

export default Java23;