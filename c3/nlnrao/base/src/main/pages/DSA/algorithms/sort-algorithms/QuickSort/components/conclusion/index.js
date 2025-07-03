import React from "react";
import { Card } from "e-ui-react";

const Conclusion = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
    <div className="mtop15p">Quick Sort remains one of the most efficient and widely used sorting algorithms in programming. 
    Its elegant design and fast average-case performance make it a go-to choice for high-performance applications like database 
    sorting, quick filtering, and system-level programming.</div>
    <div className="mtop15p">However, for cases where <b>stability</b>, <b>predictable performance</b>, or <b>adaptive behavior</b> are 
    needed, alternatives like <b>Merge Sort</b> or <b>Insertion Sort</b> might be better suited.</div>
    <div className="mtop15p">In Summary:</div>
    <div className="mtop5p mbot15p">
        <Card padding={15} backgroundColor="#eee">
            <b>Quick Sort is fast, elegant, and powerful – but like all algorithms, it shines best in the right context.</b>
        </Card>
    </div>
 </div>);
};

export default Conclusion;