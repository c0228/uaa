import React from "react";

const Conclusion =() =>{
 return (<div className="mtop15p lh28p fs16p">
    <div>
        <div><h2 className="blog-head"><b>Conclusion</b></h2></div>
        <div>FIFO is a fundamental cache eviction policy that evicts the oldest data regardless of access. While it's not the 
        smartest choice for optimizing cache hit rates, it offers simplicity, consistency, and low overhead—making it 
        perfect for certain constrained systems or deterministic workflows.</div>
        <div className="mtop5p"><h5 className="blog-head"><b>Key Takeaways:</b></h5></div>
        <div className="mtop5p">
            <ul>
                <li>FIFO is based on <b>insertion time</b> only.</li>
                <li>Use <b>queues</b> to implement FIFO behavior.</li>
                <li>Prefer FIFO when you value <b>simplicity over efficiency</b>.</li>
                <li>Evaluate if FIFO fits your cache use case or if smarter strategies (LRU, LFU) are needed.</li>
            </ul>
        </div>
    </div>
 </div>);
};

export default Conclusion;