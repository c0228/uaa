import React from "react";
import OrderList from "@Components/order-list/index.js";

const Challenges = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Challenges and Future Directions</b></h2></div>
    <div>Despite the potential, quantum-inspired algorithms face significant challenges:</div>
    <OrderList data={[(<div>
            <div><b>Scalability in Classical Systems:</b></div>
            <div>Emulating quantum properties on classical hardware remains a challenge, requiring novel architectures.</div>
         </div>),
         (<div>
            <div><b>Error Handling:</b></div>
            <div>Probabilistic computations introduce uncertainty; designing <b>error-tolerant quantum-inspired 
               models</b> is crucial.</div>
         </div>),
         (<div>
            <div><b>Integration with Existing Systems:</b></div>
            <div>Merging quantum-inspired approaches with classical consensus models requires hybrid architectures.</div>
         </div>)]} />
 </div>);
};

export default Challenges;