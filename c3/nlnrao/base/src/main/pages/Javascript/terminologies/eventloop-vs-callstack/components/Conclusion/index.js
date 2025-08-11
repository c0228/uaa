import React from "react";

const Conclusion = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
    <div className="mtop15p">The <b>call stack</b> is where your functions live while being executed — think of it as the stage. 
      The <b>event loop</b> is the backstage manager, deciding when new actors (functions) come onto the stage, especially 
      for asynchronous events.</div>
    <div className="mtop5p">Understanding the event loop is <b>critical</b> for writing performant JavaScript code. It helps you:</div>
    <div>
      <ul>
         <li className="mtop5p">Avoid blocking the UI</li>
         <li className="mtop5p">Write efficient async logic</li>
         <li className="mtop5p">Debug tricky execution order issues</li>
      </ul>
    </div>
    <div className="mtop5p mbot15p">Once you grasp the relationship between the <b>event loop</b> and <b>call stack</b>, you’ll see 
    why JavaScript, despite being single-threaded, can handle multiple tasks <b>without freezing</b> the browser.</div>
 </div>);
};

export default Conclusion;