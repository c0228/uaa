import React from "react";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><i>
      <div>Have you ever wondered how systems like <b>Google Maps</b>, <b>video games</b>, or <b>geospatial search engines</b> efficiently 
      store and query millions of points on a map?</div>   
      <div className="mtop15p">When data is distributed in two-dimensional space, traditional 
      linear structures (like arrays or linked lists) quickly become inefficient. Enter <b>QuadTree</b>, a spatial partitioning 
      data structure that breaks a 2D plane into manageable zones, allowing 
      for <b>fast lookups</b>, <b>inserts</b>, and <b>spatial queries</b>.</div>
   </i></div>

   <div className="mtop15p"><h2 className="blog-head"><b>Introduction to QuadTree</b></h2></div>
   <div className="mtop15p">
      <div>A <b>QuadTree</b> is a <b>tree data structure</b> in which each internal node has <b>exactly four children</b>. It is 
      used to <b>partition a two-dimensional space</b> by recursively subdividing it into four quadrants or regions.</div>
      <div className="mtop5p">This structure allows us to efficiently:</div>
      <div>
         <ul>
            <li className="mtop5p">Store 2D spatial data (e.g., geographic coordinates, images)</li>
            <li className="mtop5p">Search for points within a specific region</li>
            <li className="mtop5p">Perform collision detection in games</li>
            <li className="mtop5p">Handle viewports and zoom in maps</li>
         </ul>
      </div>
   </div>

   <div className="mtop15p"><h2 className="blog-head"><b>How Does It Work?</b></h2></div>
   <div className="mtop15p">
      <ol>
         <li>Start with a square or rectangular space (the root).</li>
         <li>If the number of points exceeds a threshold, divide the space into four quadrants:
            <ul>
               <li>Top-left (NW), Top-right (NE), Bottom-left (SW), Bottom-right (SE)</li>
            </ul>
         </li>
         <li>Continue subdividing each quadrant recursively as needed.</li>
      </ol>
   </div>
   <div className="mtop15p">Each node stores:</div>
   <div>
      <ul>
         <li>A bounding box (area it covers)</li>
         <li>A list of points within that area</li>
         <li>Four children if it splits</li>
      </ul>
   </div>

 </div>);
};

export default Introduction;