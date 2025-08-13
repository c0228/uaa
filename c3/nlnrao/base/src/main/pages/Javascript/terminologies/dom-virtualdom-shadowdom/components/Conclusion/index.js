import React from "react";

const Conclusion = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
   <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
   <div className="mtop15p">
      <ul>
         <li className="mtop5p">DOM is the foundation: it’s the actual structure the browser renders.</li>
         <li className="mtop5p">Virtual DOM is a <b>performance optimization layer,</b> reducing unnecessary updates.</li>
         <li className="mtop5p">Shadow DOM is a <b>scoping mechanism,</b> preventing style and script conflicts.</li>
      </ul>
   </div>
   <div className="mtop5p">Think of it like this:</div>
   <div>
      <ul>
         <li className="mtop5p">DOM = <b>The real stage</b> where actors perform.</li>
         <li className="mtop5p">Virtual DOM = <b>The rehearsal stage</b> where changes are planned before going live.</li>
         <li className="mtop5p">Shadow DOM = <b>A private stage</b> where no one outside can change the set or costumes.</li>
      </ul>
   </div>
   <div className="mtop5p">Mastering all three helps you:</div>
   <div className="mbot15p">
      <ul>
         <li className="mtop5p">Write <b>faster, smoother</b> UI updates.</li>
         <li className="mtop5p">Create <b>encapsulated, reusable components.</b></li>
         <li className="mtop5p">Build <b>modern, maintainable</b> web applications.</li>
      </ul>
   </div>
 </div>);
};

export default Conclusion;