import React from "react";

const Conclusion = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
   <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
   <div className="mtop15p">
      <div><b>Debouncing</b> and <b>throttling</b> are essential tools for controlling high-frequency events in JavaScript.</div>
      <div>They:</div>
      <div>
         <ul>
            <li className="mtop5p">Improve <b>performance</b> by reducing unnecessary function calls.</li>
            <li className="mtop5p">Prevent <b>network overload</b> and UI freezes.</li>
            <li className="mtop5p">Help maintain a <b>smooth user experience</b> in real-time applications.</li>
         </ul>
      </div>
      <div className="mtop5p"><b>In short:</b></div>
      <div>
         <ul>
            <li className="mtop5p">Debounce waits until the user pauses before running the function.</li>
            <li className="mtop5p">Throttle runs at a steady pace while the user is still doing the action.</li>
         </ul>
      </div>
      <div className="mbot15p">By applying the right technique in the right scenario, you can make your web 
         apps <b>faster, smoother, and more resource-efficient</b> — making users (and servers) much happier.</div>
   </div>
 </div>);
};

export default Conclusion;