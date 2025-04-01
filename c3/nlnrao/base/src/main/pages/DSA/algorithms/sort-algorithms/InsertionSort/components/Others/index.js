import React from "react";
import { Card } from "e-ui-react";
import OrderList from "@MainComponents/order-list/index.js";

const Others = () =>{
 return (<div className="lh28p fs16p">

    <div align="center" className="mtop15p"><h2 className="blog-head"><b>Space Complexity of Insertion Sort</b></h2></div>
    <div className="mtop15p">
        <OrderList data={[(<div><b>In-Place Sorting Algorithm</b></div>),
            (<div><b>No extra memory used</b> beyond a few variables (key, index)</div>),
            (<div><b>Space Complexity:</b> O(1)</div>)]} />
    </div>

    <div align="center" className="mtop15p"><h2 className="blog-head"><b>Stability & Adaptability</b></h2></div>
    <div className="mtop15p">
        <OrderList data={[(<div><b>Stable Sorting Algorithm:</b> (Preserves order of equal elements)</div>),
            (<div><b>Adaptive Sorting Algorithm:</b> (Faster for nearly sorted input)</div>)]} />
    </div>

    <div align="center" className="mtop15p"><h2 className="blog-head"><b>When to Use Insertion Sort?</b></h2></div>
    <div className="mtop15p">
        <OrderList data={[(<div>Small datasets</div>),
            (<div>Nearly sorted arrays (performs well with &Omega;(n))</div>),
            (<div>When a simple, stable, in-place sorting method is required</div>)]} />
    </div>

    <div className="mtop15p mbot15p">
        <Card padding={15} backgroundColor="#f5f5f5">
            <div className="mbot15p"><h4><b>Summary:</b></h4></div>
            <OrderList data={[(<div><b>Worst Case:</b> O(n<sup>2</sup>),<br/>
                                    <b>Best Case:</b> &Omega;(n),<br/>
                                    <b>Average Case:</b> &Theta;(n<sup>2</sup>)</div>),
                            (<div><b>In-place Sorting:</b> O(1) Space Complexity</div>),
                            (<div><b>Stable & Adaptive</b></div>),
                            (<div><b>Small/Nearly Sorted Data</b></div>)]} />
        </Card>
        </div>
 </div>);
};

export default Others;