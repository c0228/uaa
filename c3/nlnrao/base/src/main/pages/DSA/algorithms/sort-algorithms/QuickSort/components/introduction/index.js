import React from "react";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><i>Sorting is the backbone of countless algorithms and systems — whether you're building a 
        database engine, handling search indexes, or rendering a user interface list. Among the many sorting 
        algorithms, <b>Quick Sort</b> stands out for its elegance, efficiency, and real-world performance.</i></div>
    <div className="mtop15p"><i>This blog explores the <b>Quick Sort algorithm</b> deeply, from basic principles to code 
    implementation, and evaluates its performance using <b>asymptotic notations</b>, space usage, stability, adaptability, 
    and more.</i></div>
    
    <div className="mtop15p"><h2 className="blog-head"><b>Introduction to Quick Sort</b></h2></div>
    <div className="mtop15p"><b>Quick Sort</b> is a <b>Divide and Conquer sorting algorithm</b> that works by selecting a 
    pivot element and partitioning the array such that:</div>
    <div>
        <ul>
            <li className="mtop5p">Elements less than the pivot go to the left</li>
            <li className="mtop5p">Elements greater than the pivot go to the right</li>
        </ul>
    </div>
    <div className="mtop5p">The process is then <b>recursively applied</b> to the left and right sub-arrays until the array 
    is fully sorted.</div>

    <div className="mtop15p"><h2 className="blog-head"><b>How Quick Sort Works — Step by Step</b></h2></div>
    <div>
        <ol>
            <li className="mtop5p"><b>Choose a Pivot</b> (e.g., first, last, middle, or random element)</li>
            <li className="mtop5p"><b>Partition</b> the array:
                <ul>
                    <li>Move all elements less than the pivot to its left</li>
                    <li>Move all elements greater than the pivot to its right</li>
                </ul>
            </li>
            <li className="mtop5p">Recursively <b>apply the same logic</b> to the left and right subarrays</li>
        </ol>
    </div>
 </div>);
};

export default Introduction;