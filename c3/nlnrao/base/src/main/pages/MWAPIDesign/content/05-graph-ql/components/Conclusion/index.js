import React from "react";
import { Card } from "e-ui-react";

const Conclusion = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
    <div>GraphQL changed how APIs are designed by <b>shifting control from server to client.</b></div>
    <div>It:</div>
    <ul>
      <li className="mtop5p">Eliminates over-fetching</li>
      <li className="mtop5p">Reduces network calls</li>
      <li className="mtop5p">Improves frontend agility</li>
      <li className="mtop5p">Encourages clean schema design</li>
    </ul>
    <div>While REST is still dominant, <b>GraphQL shines in modern, data-heavy applications</b> like dashboards, 
    social networks, and mobile apps.</div>
    <div><b><i>GraphQL is not a replacement for REST — it is an evolution in API thinking.</i></b></div>
    <div>Understanding GraphQL makes you a <b>future-ready developer</b> capable of building scalable and flexible systems.</div>
 </div>);
};

export default Conclusion;