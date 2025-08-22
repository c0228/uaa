import React from "react";

const Conclusion = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
   <div className="mtop15p"><h2 className="blog-head"><b>Advantages of Event Delegation</b></h2></div>
   <div>
      <ul>
         <li className="mtop5p"><b>Performance:</b> Fewer event listeners mean lower memory usage.</li>
         <li className="mtop5p"><b>Dynamic Support:</b> Handles future dynamically added elements automatically.</li>
         <li className="mtop5p"><b>Cleaner Code:</b> Only one listener instead of many.</li>
         <li className="mtop5p"><b>Centralized Control:</b> Easier to manage and debug.</li>
      </ul>
   </div>
   <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
   <div className="mtop15p">Event Delegation is a powerful pattern in JavaScript that solves the problem of attaching 
      multiple event listeners to individual elements. By leveraging <b>event bubbling,</b> we can assign one listener to a 
      parent element and manage all child interactions efficiently.</div>
   <div className="mtop15p mbot15p">If your application involves lists, tables, or dynamically generated 
      content, <b>Event Delegation</b> is the go-to solution for cleaner, faster, and more maintainable code.</div>
 </div>);
};

export default Conclusion;