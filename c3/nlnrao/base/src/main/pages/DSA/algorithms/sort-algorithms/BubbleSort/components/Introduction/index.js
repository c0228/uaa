import React from "react";
import OrderList from '@MainComponents/order-list/index.js';

const Introduction = () =>{
    return (<div>
    <div className="mtop15p lh28p fs16p"><i>Bubble Sort Algorithm is the used to sort the values in Ascending or Descending Order.
        The Technique followed here is to swap adjacent elements repeatedly until result is achieved.</i>
    </div>
    <div align="center"><h2 className="blog-head mtop15p"><b>What is Bubble Sort?</b></h2></div>
    <div className="fs16p lh28p">
      Bubble Sort is a simple comparison-based sorting algorithm that repeatedly swaps adjacent elements 
      if they are in the wrong order. It continues until the list is sorted.
    </div>
    <div><h4 className="mtop15p"><b>How It Works (Step-by-Step):</b></h4></div>
    <div className="fs16p">
      <OrderList data={[(<div>Compare adjacent elements.</div>),
                    (<div>Swap them if they are in the wrong order.</div>),
                    (<div>Move to the next pair and repeat until the entire array is sorted.</div>),
                    (<div>After each full iteration, the largest element bubbles up to its correct position.</div>)]} />
    </div>
    </div>);
};

export default Introduction;