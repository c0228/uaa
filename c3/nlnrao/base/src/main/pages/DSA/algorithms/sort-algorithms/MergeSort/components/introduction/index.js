import React from "react";
import { Highlight } from "e-ui-react";
import OrderList from '@MainComponents/order-list/index.js';

const HOW_IT_WORKS = `Divide:         [38, 27, 43, 3]     and     [9, 82, 10]
Further divide: [38, 27] [43, 3]    and     [9, 82] [10]
Base case:      [38] [27] [43] [3]  and     [9] [82] [10]
Merge:          [27, 38] [3, 43]    and     [9, 82] [10]
More Merge:     [3, 27, 38, 43]     and     [9, 10, 82]
Final Merge:    [3, 9, 10, 27, 38, 43, 82]`;

const Introduction = () =>{
    return (<div>
    <div className="mtop15p lh28p fs16p"><i>Merge Sort is <b>predictable</b>, <b>scalable</b>, and <b>easy to parallelize</b>, 
    making it a preferred choice in many real-world systems because of its divide-and-conquer approach. Among the many sorting 
    algorithms available, Merge Sort is used when we need a <b>reliable</b>, <b>consistent</b>, and <b>stable sorting technique</b>.</i>
    </div>
    <div align="center"><h2 className="blog-head mtop15p"><b>What is Merge Sort?</b></h2></div>
    <div className="fs16p lh28p">
      Merge Sort is a <b><i>divide and conquer algorithm</i></b>, it divides the input array into halves, recursively sorts them, 
      and then merges the sorted halves. This sorting technique is known for its consistent <b>O(n log n)</b> performance and is often 
      used in scenarios where <b>predictable performance is critical</b>.
    </div>
    <div><h4 className="mtop15p"><b>How It Works (Step-by-Step):</b></h4></div>
    <div className="fs16p">
      <OrderList data={[(<div><b>Divide</b> the array into two halves.</div>),
                    (<div><b>Recursively</b> apply Merge Sort to both halves.</div>),
                    (<div><b>Merge</b> the two sorted halves into one sorted array.</div>)]} />
    </div>
    <div><b>Example:</b></div>
    <div className="mtop5p"><i>Array:</i> <code><b>[38, 27, 43, 3, 9, 82, 10]</b></code></div>
    <div className="mtop15p">
        <Highlight content={HOW_IT_WORKS} lang="javascript" />
    </div>
    </div>);
};

export default Introduction;