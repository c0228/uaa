import React from "react";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><i>Sorting algorithms are the backbone of data organization and retrieval. Whether it's optimizing 
    database queries, rendering elements on a page, or performing analytics, sorting plays a key role. Among the several algorithms 
    that exist, <b>Heap Sort</b> stands out for its efficiency, predictability, and in-place nature.</i></div>
    <div className="mtop15p"><i>Unlike Quick Sort, Heap Sort 
    provides consistent <code><b>O(n log n)</b></code> performance regardless of input distribution, making it a reliable choice in 
    real-time and embedded systems.</i></div>
    <div className="mtop15p"><h2 className="blog-head"><b>Introduction to Heap Sort</b></h2></div>
    <div className="mtop15p"><b>Heap Sort</b> is a comparison-based sorting algorithm that utilizes 
    a <b>binary heap data structure</b>. It builds a <b>Max Heap</b> (for ascending order) or a <b>Min Heap</b> (for descending 
    order) and repeatedly removes the root (largest/smallest) element to place it at the end of the array, shrinking the heap 
    after every extraction.</div>
    <div className="mtop15p">
        <div>It works in two main phases:</div>
        <div>
            <ol>
                <li className="mtop5p"><b>Heapify the array</b> (convert the array into a max heap).</li>
                <li className="mtop5p"><b>Extract the maximum repeatedly</b> and maintain the heap structure.</li>
            </ol>
        </div>
    </div>
    <div className="mtop15p">The key to Heap Sort’s efficiency is the <b>heap property</b>: in a Max Heap, every parent node is 
    greater than its children.</div>
    <div className="mtop15p"><h2 className="blog-head"><b>Real-World Analogy</b></h2></div>
    <div className="mtop15p">Imagine organizing a tournament where the strongest player always plays first. After every round, 
    the strongest left is identified and plays next. This is how Heap Sort maintains order — by always picking the largest 
    element and re-structuring the tournament.</div>
 </div>);
};

export default Introduction;