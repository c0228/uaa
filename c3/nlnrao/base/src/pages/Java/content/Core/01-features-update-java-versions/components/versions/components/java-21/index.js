import React from "react";
import { Highlight, Accordian } from "e-ui-react";
import { BlogIndexHeader } from "@Components/blog-index-header/index.js";
import OrderList from "@Components/order-list/index.js";

const Java21 = () =>{
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
     <div className="mtop15p"><h4><b>Java SE 21 (, ):</b></h4></div>
     <div className="mtop15p">
     </div>
     <div className="mtop15p">
         <Accordian id="Java21" data={[{
                 id:"java21-features", 
                 title: (<div><b>FEATURES:</b></div>),
                 component:(<Features />)
             }]} />
     </div>
  </div>);
};

export default Java21;