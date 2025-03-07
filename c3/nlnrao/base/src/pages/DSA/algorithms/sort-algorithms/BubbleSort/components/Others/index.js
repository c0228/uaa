import React from "react";
import { Card } from "e-ui-react";
import OrderList from "@Components/order-list/index.js";

const Others = () =>{
 return (<div>
    <div align="center"><h2 className="blog-head mtop15p"><b>Stability & Adaptability</b></h2></div>
    <OrderList data={[(<div><b>Stable</b> (Preserves order of equal elements)</div>),
                (<div><b>Adaptive</b> (Can optimize for nearly sorted input)</div>)]} />

    <div align="center"><h2 className="blog-head mtop15p"><b>When to Use Bubble Sort?</b></h2></div>
    <div className="padLeft15p">
        <div className="lh28p">
            Although inefficient for large datasets, Bubble Sort is useful for:
            <OrderList data={[(<div>Small datasets</div>),
                        (<div>Nearly sorted arrays (with optimization)</div>)]} />
        </div>
    </div>

    <div className="mbot15p">
    <Card padding={15} backgroundColor="#f5f5f5">
        <div className="mbot15p"><h4><b>Summary:</b></h4></div>
        <OrderList data={[(<div><b>Worst Case:</b> O(n<sup>2</sup>), 
                                <b>Best Case:</b> &Omega;(n), 
                                <b>Average Case:</b> &Theta;(n<sup>2</sup>)</div>),
                        (<div><b>In-place Sorting:</b> O(1) Space Complexity</div>),
                        (<div><b>Stable & Adaptive</b></div>),
                        (<div><b>Great for learning, bad for large-scale sorting</b></div>)]} />
    </Card>
    </div>

 </div>);
};

export default Others;