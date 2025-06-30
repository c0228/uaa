import React from "react";
import { Card } from "e-ui-react";

const Conclusion = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
    <div className="mtop15p"><b>Consistent Hashing</b> is a powerful and efficient technique 
    for <b>data sharding</b>, <b>distributed caching</b>, and <b>load balancing</b>. It ensures high availability and scalability 
    with <b>minimal data movement</b> when servers are added or removed. This property is crucial for building reliable, distributed 
    systems like databases, microservices, and caching layers.</div>
    <div className="mtop15p"><h5 className="blog-head"><b>Key Takeaways:</b></h5></div>
    <div className="mtop15p">
      <ul>
         <li>Reduces rehashing overhead.</li>
         <li>Ensures load distribution.</li>
         <li>Ideal for scalable and fault-tolerant architectures.</li>
      </ul>
    </div>
    <div className="mtop15p">
      <Card padding={15} backgroundColor="#eee">
         <div><b>Think Ahead:</b></div>
         <div>Modern applications scale horizontally. Consistent hashing makes sure your systems stay consistent even 
         when your infrastructure grows.</div>
      </Card>
    </div>
 </div>);
};

export default Conclusion;