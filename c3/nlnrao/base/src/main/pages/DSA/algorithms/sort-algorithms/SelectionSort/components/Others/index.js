import React from "react";
import { Card } from "e-ui-react";
import OrderList from "@MainComponents/order-list/index.js";

const Others = () =>{
 return (<div className="lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Space Complexity of Selection Sort</b></h2></div>
    <div className="mtop15p">
        <div>Selection Sort is an in-place sorting algorithm, meaning it does not require extra space.</div>
        <div><b>Space Complexity:</b> O(1) (Only a few auxiliary variables used)</div>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Stability & Adaptability</b></h2></div>
    <div className="mtop15p">
        <OrderList data={[(<div><b>Not Stable:</b> Selection Sort does not maintain the relative order of equal elements.</div>),
            (<div><b>Not Adaptive:</b> It always performs O(n<sup>2</sup>) comparisons regardless of input order.</div>)]} />
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>When to Use Selection Sort?</b></h2></div>
    <div className="mtop15p">
        <div>Although inefficient for large datasets, Selection Sort is useful when:</div>
        <OrderList data={[(<div>Memory space is extremely limited.</div>),
                (<div>The number of swaps matters more than comparisons.</div>),
                (<div>Sorting is required in environments with minimal auxiliary memory.</div>)]} />
    </div>

    <div className="mbot15p">
        <Card padding={15} backgroundColor="#f5f5f5">
            <div className="mbot15p"><h4><b>Summary:</b></h4></div>
            <OrderList data={[(<div><b>Worst Case:</b> O(n<sup>2</sup>),<br/>
                                    <b>Best Case:</b> &Omega;(n<sup>2</sup>),<br/> 
                                    <b>Average Case:</b> &Theta;(n<sup>2</sup>)</div>),
                            (<div><b>In-place Sorting:</b> O(1) Space Complexity</div>),
                            (<div><b>Not Stable & Not Adaptive</b></div>),
                            (<div><b>Useful for memory-constrained applications</b> but inefficient for large datasets.</div>)]} />
        </Card>
    </div>

 </div>);
};

export default Others;