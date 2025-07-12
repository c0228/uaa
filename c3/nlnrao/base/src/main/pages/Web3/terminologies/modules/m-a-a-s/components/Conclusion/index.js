import React from "react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const Conclusion = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><h2 className="blog-head"><b>Use Cases of MaaS in Real Life</b></h2></div>
   <div className="mtop15p">
      <SimpleTable header={["Industry","Use Case"]} 
        columns={[
            ["Education", "Virtual classrooms, campus tours"],
            ["Retail", "Virtual storefronts and immersive shopping"],
            ["Events", "Virtual conferences, expos"],
            ["Real Estate", "3D property walkthroughs"],
            ["Healthcare", "VR-based therapy and consultations"],
          ]} />
   </div>
   <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
   <div className="mtop15p"><b>Metaverse-as-a-Service (MaaS)</b> is democratizing access to the virtual frontier by enabling 
   businesses, creators, and developers to build immersive digital experiences without needing to reinvent the wheel. With 
   Web 3.0 technologies powering decentralization, digital ownership, and interoperability, MaaS platforms are becoming the 
   foundation of the next-generation internet — where the virtual and physical seamlessly blend.</div>
   <div className="mtop15p">Whether you're a startup launching a branded virtual space or an educator creating immersive 
   learning environments, MaaS makes the metaverse truly accessible.</div>
 </div>);
};

export default Conclusion;