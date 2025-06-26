import React from "react";
import { Card } from "e-ui-react";

const Conclusion = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
    <div className="mtop15p">The <b>logarithm</b> is far more than just a high-school math topic. 
    It's a <b>core building block in computing, science, and analytics</b>. Whether simplifying massive numbers or 
    understanding algorithm speeds, logs help us translate between exponential and linear scales with ease.</div>
    <div className="mtop15p">
        <Card padding={15} backgroundColor="#eee">
            <div><b>Note:</b></div>
            <div>Always watch out for <code><b>log(0)</b></code> or negative inputs — they are undefined in the 
            real number system and may crash your program if not handled properly.</div>
        </Card>
    </div>
 </div>);
};

export default Conclusion;