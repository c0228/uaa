import React from "react";
import { Card } from "e-ui-react";

const Conclusion = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
    <div className="mtop15p"><i>Big-O Notation may seem abstract at first, but it’s an essential tool in every developer’s 
    toolkit. It strips away distractions like language syntax or machine specs and reveals what really matters: <b>how well your 
    solution scales</b>. From making code faster to cracking coding interviews, mastering Big-O gives you the power to write 
    smarter, more efficient algorithms.</i></div>
    <div>
        <Card padding={15} backgroundColor="#eee">
            <div><b>In short:</b></div>
            <div><i>Big-O is not just about performance — it’s about understanding, predicting, and improving the efficiency 
                of your code.</i></div>
        </Card>
    </div>
 </div>);
};

export default Conclusion;