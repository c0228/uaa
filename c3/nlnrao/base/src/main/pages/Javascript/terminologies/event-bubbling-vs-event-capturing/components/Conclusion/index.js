import React from "react";

const Conclusion = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
   <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
   <div className="mtop15p">Event bubbling and capturing are two fundamental concepts that define how 
   events travel through the DOM.
      <div>
         <ul>
            <li className="mtop5p"><b>Event Bubbling (default):</b> The event goes upward, from child to parent.</li>
            <li className="mtop5p"><b>Event Capturing (optional):</b> The event goes downward, from parent to child.</li>
            <li className="mtop5p">Both are part of the <b>event flow</b> model, ensuring consistency across browsers.</li>
            <li className="mtop5p">Most developers rely on <b>bubbling</b> (especially for event delegation), while <b>capturing</b> is 
            used in more specific, less common scenarios.</li>
         </ul>
      </div>
      <div className="mtop5p mbot15p">By mastering these concepts, developers can write cleaner, more efficient, and scalable JavaScript 
      applications that handle user interactions with ease.</div>
   </div>
 </div>);
};

export default Conclusion;