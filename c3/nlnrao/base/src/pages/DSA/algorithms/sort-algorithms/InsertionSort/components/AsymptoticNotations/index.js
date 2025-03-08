import React from "react";
import OrderList from "@Components/order-list/index.js";

const AsymptoticNotations = () =>{
 return (<div className="lh28p fs16p">
    <div align="center" className="mtop15p"><h2 className="blog-head"><b>Asymptotic Notations in Insertion Sort</b></h2></div>
    <div className="mtop15p">
    Understanding the performance of an algorithm requires analyzing its complexity using asymptotic notations. 
    Let's break down how Big-O (O), Omega (&Omega;), and Theta (&Theta;) notations apply to Insertion Sort.
    </div>

    <div className="mtop15p"><h4><b>Big-O Notation (Worst Case: O(n<sup>2</sup>))</b></h4></div>
    <div className="mtop15p">
        <OrderList data={[(<div className="mtop15p">When the array is sorted in <b>reverse order</b>, every element must 
                be compared with all previous elements, leading to a <b>nested loop</b> structure.</div>),
                (<div className="mtop15p"><b>Example:</b> <code><b>[5, 4, 3, 2, 1]</b></code> - requires maximum shifts</div>),
                (<div>
                    <div className="mtop15p"><b>Time Complexity:</b></div>
                    <OrderList data={[(<div><b>Outer Loop:</b> Runs <code><b>n</b></code> times</div>),
                        (<div><b>Inner Loop:</b> Runs up to <code><b>n-1</b></code> times in the worst case</div>),
                        (<div>Total = <code><b>O(n * n) = O(n<sup>2</sup>)</b></code></div>)]} />
                </div>)]} />
    </div>

    <div className="mtop15p"><h4><b>Omega  Notation (Best Case: &Omega;(n))</b></h4></div>
    <div className="mtop15p">
        <OrderList data={[(<div>If the array is already sorted, the inner loop doesn’t execute, and only 
            one comparison per element is needed.</div>),
            (<div><b>Example:</b> <code><b>[1, 2, 3, 4, 5]</b></code> - No shifts required.</div>),
            (<div>
                <div className="mtop15p"><b>Time Complexity:</b></div>
                <OrderList data={[(<div><b>Outer Loop:</b> Runs <code><b>n</b></code> times</div>),
                    (<div><b>Inner Loop:</b> Skips all iterations, Therefore, Total <code><b>&Omega;(n)</b></code></div>)]} />
            </div>)]} />
    </div>

    <div className="mtop15p"><h4><b>Theta Notation (Average Case: &Theta;(n<sup>2</sup>))</b></h4></div>
    <div className="mtop15p">
        <OrderList data={[(<div className="mtop15p">On average, about half the elements must be shifted for each insertion.</div>),
            (<div className="mtop15p"><b>Example:</b> <code><b>[3, 8, 2, 5, 1]</b></code> - Some elements are shifted, others aren’t.</div>),
            (<div className="mtop15p">
                <div><b>Time Complexity:</b></div>
                <OrderList data={[(<div>Average comparisons per element = <code><b>n/2</b></code></div>),
                    (<div>Total comparisons = <code><b>n * (n/2) = &Theta;(n<sup>2</sup>)</b></code></div>)]} />
            </div>)]} />
    </div>

 </div>);
};

export default AsymptoticNotations;