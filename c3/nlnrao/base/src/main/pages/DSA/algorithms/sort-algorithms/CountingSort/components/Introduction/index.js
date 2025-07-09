import React from "react";
import { Card, Icon } from "e-ui-react";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop5p">
        <div><i>Sorting is a fundamental building block in computer science. Whether it's organizing names alphabetically, 
        ranking search results, or processing numerical data efficiently, sorting plays a vital role in making data usable 
        and accessible.</i></div>
        <div className="mtop15p"><i>Most popular algorithms (like Quick Sort, Merge Sort, and Heap Sort) rely on comparisons. 
        But what if we could sort <b>without comparing elements at all</b>? That’s where <b>Counting Sort</b> enters the scene.</i></div>
    </div>
    
    <div className="mtop15p"><h2 className="blog-head"><b>Introduction to Counting Sort</b></h2></div>
    <div className="mtop15p"><b>Counting Sort</b> is a non-comparison-based sorting algorithm that sorts elements by counting 
    occurrences. It’s best used for sorting integers within a <b>known and limited range</b>.</div>
    <div className="mtop15p">
        <Card padding={15}>
            <Icon type="FontAwesome" name="fa-warning" color="#d38c09" size={15} /> Unlike Merge Sort or Quick Sort, Counting 
            Sort doesn't sort by comparing elements. Instead, it counts the frequency of each element.
        </Card>
    </div>
    <div className="mtop15p">
        <b>Use Case:</b> Great for sorting small integers, character data (like strings), and cases where time complexity 
        needs to be linear.
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>How Counting Sort Works?</b></h2></div>
    <div className="mtop15p">
        <ol>
            <li className="mtop5p"><b>Find the maximum element</b> to determine the range.</li>
            <li className="mtop5p"><b>Create a count array</b> to store frequency of each element.</li>
            <li className="mtop5p"><b>Modify the count array</b> to store the cumulative count (prefix sum).</li>
            <li className="mtop5p"><b>Build the output array</b> using the count positions.</li>
            <li className="mtop5p"><b>Copy the sorted elements</b> back into the original array.</li>
        </ol>
    </div>
 </div>);
};

export default Introduction;