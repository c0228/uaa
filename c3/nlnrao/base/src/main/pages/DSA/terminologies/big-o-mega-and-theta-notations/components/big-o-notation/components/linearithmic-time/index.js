import React from "react";
import { Card, Tab } from "e-ui-react";

const LinearithmicTime = () =>{
  
  const PythonCode = () =>{

  };
  
  const JavaCode = () =>{

  };

  const JSCode = () =>{

  };
  
  return (<div>
    <div className="blog-head blog-hgl-title"><b>O(n log n) - Linearithmic Time</b></div>
    <div className="mtop5p">
    An algorithm runs in <b>O(n log n)</b> time when it performs a logarithmic operation <b>log n</b> for 
    each of the n elements.
    </div>
    <div className="mtop5p">
      <Card padding={15}>It’s <b>slower than O(n)</b> but <b>faster than O(n<sup>2</sup>)</b> — a sweet 
      spot for efficient sorting.</Card>
    </div>
    <div className="mtop15p">
      <div><h5><b><u>Best Example:</u> Merge Sort</b></h5></div>
      <div className="mtop5p">Merge Sort is a <b>divide and conquer algorithm</b> that:
        <ol>
          <li>Divides the array into halves recursively (log n divisions).</li>
          <li>Merges the sorted halves (each element visited once → n operations).</li>
        </ol>
      </div>
      <div>Hence, <b>Total Time = O(n log n)</b></div>
    </div>
    <div className="mtop5p">
      <Tab menulinks={[{ id:"python", label:"Python", url:"#", component:(<PythonCode />) },
          { id:"java", label:"Java", url:"#",  component:(<JavaCode />) },
          { id:"javascript", label:"Javascript", url:"#",  component:(<JSCode />) }]} />
    </div>
  </div>);
};

export default LinearithmicTime;