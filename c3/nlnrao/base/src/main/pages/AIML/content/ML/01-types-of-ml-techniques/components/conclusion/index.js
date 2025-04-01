import React from "react";
import OrderList from "@Components/order-list/index.js";

const Conclusion = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
   <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
   <div className="mtop15p mbot15p">Each of these machine learning techniques has different applications:</div>
   <OrderList data={[(<div>Supervised Learning is used when labeled data is available.</div>),
      (<div>Unsupervised Learning is helpful when exploring unknown patterns in data.</div>),
      (<div>Reinforcement Learning is useful in decision-making scenarios like gaming and robotics.</div>)]} />
   <div>Understanding these techniques and implementing them in Python helps in solving a wide variety of 
      real-world problems.</div>
 </div>);
};

export default Conclusion;