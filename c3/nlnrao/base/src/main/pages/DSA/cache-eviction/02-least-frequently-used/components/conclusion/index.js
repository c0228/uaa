import React from "react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const Conclusion = () =>{
 return (<div className="mtop15p lh28p fs16p">
  <div className="mtop15p">
    <div><h2 className="blog-head"><b>Overall Summary</b></h2></div>
    <SimpleTable header={["Topic","Takeaway"]} 
        columns={[
            [(<b>What is LFU?</b>),"Evicts least frequently accessed item"],
            [(<b>How it works</b>),"Tracks frequency of accesses per item"],
            [(<b>Efficient Implementation</b>),"HashMaps + LinkedHashSet"],
            [(<b>Time Complexity</b>),"O(1) for get and put"],
            [(<b>Best Use Case</b>),"Consistent, predictable workloads"],
          ]} />
    </div>
    <div><h2 className="blog-head"><b>Conclusion</b></h2></div>
    <div className="mtop15p">
        The <b>Least Frequently Used (LFU)</b> cache eviction strategy is designed to remove items that are 
        accessed <b>least often</b>, making it ideal for scenarios where <b>access frequency is a strong indicator of 
        importance</b>. Unlike LRU, which focuses on recency, LFU focuses on usage patterns over time.
    </div>
    <div><h5 className="blog-head"><b>Conclusion</b></h5></div>
    <div className="mtop15p">
        <ul>
            <li>Least Frequently Used (LFU) evicts the <b>least used</b> item when the cache is full.</li>
            <li>Ideal for use-cases where <b>frequent access</b> determines value (e.g., recommendation systems, hot data stores).</li>
            <li>More complex than LRU due to the need for <b>frequency tracking</b> and <b>tie-breaking rules</b> (often using LRU as secondary).</li>
            <li>Efficient implementations rely on combinations of <b>HashMaps</b>, <b>Min-Heaps</b>, or <b>OrderedDicts</b> with <b>Frequency Buckets</b>.</li>
        </ul>
    </div>
 </div>);
};

export default Conclusion;