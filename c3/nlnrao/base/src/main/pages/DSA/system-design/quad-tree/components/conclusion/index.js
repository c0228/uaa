import React from "react";
import { Card } from "e-ui-react";

const Conclusion = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><h2 className="blog-head"><b>Key Advantages:</b></h2></div>
   <div>
      <ul>
         <li className="mtop5p">Efficient <b>insertion</b> and <b>search</b> in 2D space</li>
         <li className="mtop5p">Adaptive to <b>data density</b></li>
         <li className="mtop5p">Easy to implement and extend</li>
         <li className="mtop5p">Great for <b>collision detection</b>, <b>spatial indexing</b> and <b>region queries</b></li>
      </ul>
   </div>
   <div className="mtop15p"><h2 className="blog-head"><b>Real-World Applications:</b></h2></div>
   <div>
      <ul>
         <li className="mtop5p">Google Maps (viewport tile management)</li>
         <li className="mtop5p">Game engines (collision detection)</li>
         <li className="mtop5p">GIS systems (geographic data indexing)</li>
         <li className="mtop5p">Image compression (quad-based decomposition)</li>
      </ul>
   </div>
   <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
   <div className="mtop15p"><b>QuadTrees</b> are powerful for efficiently managing 2D spatial data. Whether you're 
   building a <b>map application</b>, a <b>game</b>, or a <b>geospatial search engine</b>, QuadTrees help reduce complexity 
   and improve performance.</div>
   <div className="mtop15p">
      <Card padding={15} backgroundColor="#eee">
         <b>QuadTree</b> is a classic example of how clever <b>spatial partitioning</b> can drastically optimize search and update 
         operations. Mastering it will give you a strong foundation in <b>2D spatial system design</b> and prepare you for 
         building <b>high-performance location-based applications</b>.
      </Card>
   </div>
 </div>);
};

export default Conclusion;