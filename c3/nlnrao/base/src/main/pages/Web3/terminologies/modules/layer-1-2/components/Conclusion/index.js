import React from "react";
import { Card } from "e-ui-react";

const Conclusion = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><h2 className="blog-head"><b>Conclusion: Choosing Between Layer 1 and Layer 2</b></h2></div>
   <div className="mtop15p">In the Web 3.0 era, understanding <b>Layer 1 and Layer 2 blockchains</b> is crucial for 
   developers, investors, and users. While Layer 1 chains offer strong security and decentralization, they often face 
   speed and cost issues. Layer 2 networks solve these problems by providing scalable and efficient environments without 
   compromising on security.</div>
   <div className="mtop15p">As adoption grows, most Web3 dApps will likely be <b>multi-layer aware</b>, offering users a 
   choice between Layer 1 and Layer 2 interactions—balancing cost, speed, and decentralization.</div>
   <div className="mtop15p">
      <Card padding={15} backgroundColor="#eee">
         <ul>
            <li><b>Layer 1</b> = Base Blockchain (Ethereum, Bitcoin)</li>
            <li className="mtop5p"><b>Layer 2</b> = Built on Layer 1 for scaling (Polygon, Arbitrum)</li>
            <li className="mtop5p">Use <b>Layer 2</b> for fast, low-cost transactions.</li>
            <li className="mtop5p">Developers should build adaptable apps across both layers.</li>
         </ul>
      </Card>
   </div>
 </div>);
};

export default Conclusion;