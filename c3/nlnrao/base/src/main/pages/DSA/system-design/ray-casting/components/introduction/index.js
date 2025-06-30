import React from "react";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><i>In system design, especially for graphics, games, simulations, and visibility determination, 
   we often need to figure out <u>what's visible</u>, <u>what's intersected</u>, or <u>what direction something is going</u>. That’s 
   where <b>Ray Casting</b> comes in. Whether it’s helping a light beam find a surface or enabling a player to interact with 
   objects in 3D space, ray casting is the invisible compass behind many intelligent systems.</i></div>
   
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction to Ray Casting</b></h2></div>
   <div className="mtop15p"><b>Ray Casting</b> is a computational technique where we “cast” (or trace) a virtual ray from a point 
   in a certain direction to detect intersections with other objects. It’s a simplified version of <b>ray tracing</b>, used in 
   rendering, but is often sufficient for collision detection, visibility checks, and lighting logic in real-time systems.</div>

   <div className="mtop15p"><h4 className="blog-head"><b>Where It's Used:</b></h4></div>
   <div>
      <ul>
         <li className="mtop5p"><b>Computer Graphics & Games:</b> For rendering, detecting what a player can see.</li>
         <li className="mtop5p"><b>2D/3D Physics Engines:</b> Collision detection.</li>
         <li className="mtop5p"><b>Robotics & AI:</b> To simulate LIDAR or vision sensors.</li>
         <li className="mtop5p"><b>Simulations:</b> Visibility checks in architectural models.</li>
      </ul>
   </div>

   <div className="mtop15p"><h4 className="blog-head"><b>Key Concepts:</b></h4></div>
   <div>
      <ul>
         <li className="mtop5p"><b>Ray:</b> A half-line defined by an origin and a direction.</li>
         <li className="mtop5p"><b>Intersection:</b> The point where a ray meets an object (e.g., wall, polygon).</li>
         <li className="mtop5p"><b>Bounding Volume:</b> Simplified shapes (like boxes or spheres) used for fast rejection tests 
         before detailed intersection checks.</li>
      </ul>
   </div>

 </div>);
};

export default Introduction;