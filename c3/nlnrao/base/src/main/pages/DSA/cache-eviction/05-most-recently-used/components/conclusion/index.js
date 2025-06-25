import React from "react";

const Conclusion = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div><h2 className="blog-head"><b>Pros and Cons of Most Recently Used (MRU)</b></h2></div>
    <div className="mtop15p">
        <div><h4 className="blog-head"><b>Advantages</b></h4></div>
        <div>
            <ul>
                <li>Efficient in certain workloads, like backtracking or sequential scans.</li>
                <li>Simple to implement using a stack or linked list.</li>
                <li>Better than Least Recently Used (LRU) in “one-time-use” patterns.</li>
            </ul>
        </div>
        <div><h4 className="blog-head"><b>Disadvantages</b></h4></div>
        <div>
            <ul>
                <li>Not suitable for general-purpose systems (where users often reuse recent data).</li>
                <li>Poor performance when access patterns are unpredictable.</li>
                <li>Can lead to high cache misses if the assumption doesn't hold.</li>
            </ul>
        </div>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Conclusion: When to Choose Most Recently Used (MRU)?</b></h2></div>
    <div className="mtop15p">
        <div>MRU is a <b>niche but powerful</b> cache eviction strategy when used correctly. While Least Recently Used (LRU) and 
            Least Frequently Used (LFU) dominate general caching scenarios, MRU shines when the assumption is that "recently used 
            means recently done with." It might not be the default go-to for every system, but understanding Most Recently Used 
            (MRU) equips architects and developers with another tool in their optimization toolkit.</div>
        <div className="mtop15p">When building or tuning performance-critical systems, choosing the right eviction strategy can 
            make a massive difference. Most Recently Used (MRU) might not be popular, but in the right context, it's exactly what 
            you need.</div>
    </div>
 </div>);
};

export default Conclusion;