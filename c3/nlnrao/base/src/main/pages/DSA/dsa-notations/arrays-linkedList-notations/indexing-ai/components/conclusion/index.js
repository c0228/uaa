import React from "react";
import { Card } from "e-ui-react";

const Conclusion = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
    <div className="mtop15p">
        <ul>
            <li><b>Indexing A(i)</b> is the fundamental way of accessing elements in arrays or lists.</li>
            <li>It allows <b>direct access</b>, <b>iteration</b>, and <b>modification</b> in constant time.</li>
            <li>Understanding how indexing works is essential for efficient algorithm design and bug-free code.</li>
        </ul>
    </div>
    <div className="mtop5p">
        <Card padding={15} backgroundColor="#eee">
            <b>In short:</b> If <code><b>Data</b></code> is the <b>King</b>, <code><b>Indexing</b></code> is 
            the <b>Key to the Kingdom</b>.
        </Card>
    </div>
 </div>);
};

export default Conclusion;