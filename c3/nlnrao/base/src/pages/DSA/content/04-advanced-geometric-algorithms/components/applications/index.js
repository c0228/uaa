import React from "react";
import OrderList from "@Components/order-list/index.js";
import { BlogIndexHeader } from "@Components/blog-index-header/index.js";
import { Order } from "e-ui-react";

const Applications = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">

   <div align="center" className="mtop15p"><h2 className="blog-head"><b>1. Understanding Geometric Algorithms</b></h2></div>
   <div className="mtop15p">Geometric algorithms deal with computational geometry, which is the study of algorithms 
      designed to solve problems stated in terms of geometry. These algorithms handle points, lines, polygons, 
      polyhedra, and higher-dimensional spaces.<br/><br/>
      Some of the key types of geometric algorithms include:
      <OrderList data={[(<div><b>Convex Hull Algorithms</b> (e.g., Graham’s scan, Jarvis’s march)</div>),
         (<div><b>Triangulation Algorithms</b> (e.g., Delaunay triangulation, Ear Clipping)</div>),
         (<div><b>Voronoi Diagrams and Delaunay Triangulation</b></div>),
         (<div><b>Spatial Data Structures</b> (e.g., Quad-trees, KD-trees, R-trees)</div>),
         (<div><b>Geometric Intersection Algorithms</b> (e.g., Bentley-Ottmann algorithm)</div>),
         (<div><b>Point Location Algorithms</b></div>)]} />
      <div>Each of these algorithms plays a crucial role in handling spatial data efficiently.</div>
   </div>

   <div align="center" className="mtop15p"><h2 className="blog-head"><b>2. Applications in Computer Graphics</b></h2></div>
   <div className="mtop15p">Computer graphics relies heavily on geometric algorithms to render 2D and 3D images efficiently.</div>
   <div className="mtop15p">
      <BlogIndexHeader type="h4" index="2.1" title="Convex Hull and Rendering" />
      <div className="padLeft5p">
         Convex hull algorithms help determine the smallest convex shape that encloses a set of points. This is widely used in 3D 
         rendering and physics simulations.
      </div>
   </div>
   <div className="mtop15p">
      <BlogIndexHeader type="h4" index="2.2" title="Delaunay Triangulation for Mesh Generation" />
      <div className="padLeft5p">
         Delaunay triangulation ensures optimal triangle shapes, which is crucial in texture mapping, 3D modeling, and finite element analysis.
      </div>
   </div>
   <div className="mtop15p">
      <BlogIndexHeader type="h4" index="2.3" title="Ray Tracing and Visibility Algorithms" />
      <div className="padLeft5p">
         Ray tracing algorithms use geometric intersection techniques to simulate realistic lighting by calculating how rays of light interact 
         with objects. Visibility algorithms like the Z-buffer method and Binary Space Partitioning (BSP) help determine which objects are visible 
         in a scene.
      </div>
   </div>
   <div className="mtop15p">
      <BlogIndexHeader type="h4" index="2.4" title="Bezier and B-Spline Curves" />
      <div className="padLeft5p">
         These algorithms generate smooth curves used in vector graphics, font rendering, and animation paths.
      </div>
   </div>

   <div align="center" className="mtop15p"><h2 className="blog-head"><b>3. Applications in Robotics</b></h2></div>
   <div className="mtop15p">Robotics depends on geometric algorithms for motion planning, obstacle avoidance, and object recognition.</div>
   <div className="mtop15p">
      <BlogIndexHeader type="h4" index="3.1" title="Path Planning with Voronoi Diagrams" />
      <div className="padLeft5p">
         Voronoi diagrams partition a space into regions, helping robots determine optimal paths while avoiding obstacles.
      </div>
   </div>
   <div className="mtop15p">
      <BlogIndexHeader type="h4" index="3.2" title="Motion Planning with RRT and PRM" />
      <div className="padLeft5p">
         <OrderList data={[(<div><b>Rapidly-exploring Random Trees (RRT):</b> Used for real-time navigation in complex environments.</div>),
            (<div><b>Probabilistic Roadmaps (PRM):</b> Effective for precomputed maps in static environments.</div>)]} />
      </div>
   </div>
   <div className="mtop15p">
      <BlogIndexHeader type="h4" index="3.3" title="Inverse Kinematics for Robotic Arm Movements" />
      <div className="padLeft5p">
         Inverse kinematics (IK) algorithms use geometric principles to compute joint movements required to reach a desired position.
      </div>
   </div>
   <div className="mtop15p">
      <BlogIndexHeader type="h4" index="3.4" title="Simultaneous Localization and Mapping (SLAM)" />
      <div className="padLeft5p">
         SLAM algorithms use geometric techniques to map an unknown environment while tracking a robot’s position in real-time.
      </div>
   </div>

   <div align="center" className="mtop15p"><h2 className="blog-head"><b>4. Applications in Geographic Information Systems (GIS)</b></h2></div>
   <div className="mtop15p">GIS applications rely on geometric algorithms for spatial data management and analysis.</div>
   <div className="mtop15p">
      <BlogIndexHeader type="h4" index="4.1" title="Spatial Indexing with Quad-trees and R-trees" />
      <div className="padLeft5p">
         <OrderList data={[(<div><b>Quad-trees:</b> Used for efficient 2D spatial indexing.</div>),
            (<div><b>R-trees:</b> Essential for storing and querying spatial databases.</div>)]} />
      </div>
   </div>
   <div className="mtop15p">
      <BlogIndexHeader type="h4" index="4.2" title="Geometric Intersection in Map Overlay" />
      <div className="padLeft5p">
         GIS systems use intersection algorithms to analyze overlapping map layers, such as roads and land-use data.
      </div>
   </div>
   <div className="mtop15p">
      <BlogIndexHeader type="h4" index="4.3" title="Voronoi-Based Spatial Analysis" />
      <div className="padLeft5p">
         Voronoi diagrams are applied in urban planning, emergency response optimization, and resource allocation
      </div>
   </div>
   <div className="mtop15p">
      <BlogIndexHeader type="h4" index="4.4" title="Route Optimization Algorithms" />
      <div className="padLeft5p">
         Dijkstra’s and A* algorithms, combined with geometric heuristics, are used in mapping services for shortest path calculations.
      </div>
   </div>

 </div>);
};

export default Applications;