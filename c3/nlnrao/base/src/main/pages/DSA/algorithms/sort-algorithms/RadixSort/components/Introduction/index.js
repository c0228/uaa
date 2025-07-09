import React from "react";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p">
        <div><i>In the world of sorting algorithms, <b>comparison-based algorithms</b> like Quick Sort, Merge Sort, and 
        Heap Sort are widely known. However, when it comes to sorting numbers (especially 
        integers) <b>without comparing them directly, non-comparison-based sorting techniques</b> like <b>Radix Sort</b> come 
        into play. Unlike conventional methods, Radix Sort leverages the digits of the number to sort in a linear time 
        complexity under specific conditions — making it a powerful choice in performance-critical applications.</i></div>
    </div>
    
    <div className="mtop15p"><h2 className="blog-head"><b>Introduction to Radix Sort</b></h2></div>
    <div className="mtop15p">
        <div><b>Radix Sort</b> is a <b>non-comparative sorting algorithm</b> that sorts integers by processing individual 
        digits. It operates by sorting the input numbers based on each digit (starting from the least significant digit to 
        the most significant), typically using a <b>stable sub-sorting algorithm</b> like <i>Counting Sort</i>.</div>
    </div>
    <div className="mtop15p"><h4 className="blog-head"><b>Working Principle</b></h4></div>
    <div className="mtop15p">
        <ol>
            <li>
                <div><b>Digit-wise processing:</b></div>
                <div>From least significant digit (LSD) to most significant digit (MSD).</div>
            </li>
            <li className="mtop5p">
                <div><b>Bucket Sort at each digit:</b></div>
                <div>Group numbers based on current digit.</div>
            </li>
            <li className="mtop5p">
                <div><b>Repeat until all digit places are processed.</b></div>
            </li>
        </ol>
    </div>
 </div>);
};

export default Introduction;