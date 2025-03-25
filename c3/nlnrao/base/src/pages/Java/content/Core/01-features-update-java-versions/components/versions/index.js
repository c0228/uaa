import React from "react";
import { BlogIndexHeader } from "@Components/blog-index-header/index.js";
import OrderList from "@Components/order-list/index.js";
import Java00 from "./components/java-00/index.js";
import Java01 from "./components/java-01/index.js";
import Java02 from "./components/java-02/index.js";
import Java03 from "./components/java-03/index.js";
import Java04 from "./components/java-04/index.js";
import Java05 from "./components/java-05/index.js";
import Java06 from "./components/java-06/index.js";
import Java07 from "./components/java-07/index.js";
import Java08 from "./components/java-08/index.js";
import Java09 from "./components/java-09/index.js";

const Versions = () =>{
 return (<div className="lh28p mtop15p mbot15p fs16p">
   <div align="center" className="mtop15p"><h2 className="blog-head"><b>Versions and History</b></h2></div>
   <div className="mtop15p">As of March 2025, the latest version of Java is Java SE 24, released on March 18, 2025</div>
   <div className="mtop15p">Java has undergone significant evolution since its inception, introducing numerous features 
      across its versions. Here's a detailed overview of the features introduced from Java 1.0 to the latest release:​</div>
   
   <div align="center" className="mtop15p"><b>JAVA PROGRAMMING LANGUAGE (RELEASED BY SUN MICROSYSTEMS)</b></div>

   <Java00 />

   <Java01 />

   <Java02 />

   <Java03 />

   <Java04 />

   <Java05 />

   <Java06 />

   <Java07 />

   <Java08/>

   <Java09 />

   <div className="mtop15p">
      <div className="mtop15p"><h4><b>Java SE 10 (March, 2018):</b></h4></div>
      <div className="mtop15p">
         <OrderList data={[(<div></div>)]} />
      </div>
   </div>

   <div className="mtop15p">
      <div className="mtop15p"><h4><b>Java SE 11 (September, 2018):</b></h4></div>
      <div className="mtop15p">
         <OrderList data={[(<div></div>)]} />
      </div>
   </div>

   <div className="mtop15p">
      <div className="mtop15p"><h4><b>Java SE 12 (March, 2019):</b></h4></div>
      <div className="mtop15p">
         <OrderList data={[(<div></div>)]} />
      </div>
   </div>

   <div className="mtop15p">
      <div className="mtop15p"><h4><b>Java SE 13 (September, 2019):</b></h4></div>
      <div className="mtop15p">
         <OrderList data={[(<div></div>)]} />
      </div>
   </div>

   <div className="mtop15p">
      <div className="mtop15p"><h4><b>Java SE 14 (March, 2020):</b></h4></div>
      <div className="mtop15p">
         <OrderList data={[(<div></div>),
            (<div></div>),
            (<div></div>),
            (<div></div>)]} />
      </div>
   </div>

   <div className="mtop15p">
      <div className="mtop15p"><h4><b>Java SE  ():</b></h4></div>
      <div className="mtop15p">
         <OrderList data={[(<div></div>),
            (<div></div>),
            (<div></div>),
            (<div></div>)]} />
      </div>
   </div>

   <div className="mtop15p">
      <div className="mtop15p"><h4><b>Java SE  ():</b></h4></div>
      <div className="mtop15p">
         <OrderList data={[(<div></div>),
            (<div></div>),
            (<div></div>),
            (<div></div>)]} />
      </div>
   </div>

 </div>);
};

export default Versions;