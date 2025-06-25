import React from "react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const Others = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Benefits of Two-Tiered Caching</b></h2></div>
    <div className="mtop15p">
        <ul>
            <li>
                <div><b>Performance Optimization:</b></div>
                <div>Keeps hot data in faster memory (L1) for rapid access.</div>
            </li>
            <li>
                <div><b>Cost Efficiency:</b></div>
                <div>Less critical or rarely accessed data can be stored in cheaper, slower storage (L2).</div>
            </li>
            <li>
                <div><b>Scalability:</b></div>
                <div>Allows systems to manage more data than a single cache could handle alone.</div>
            </li>
            <li>
                <div><b>Flexibility:</b></div>
                <div>Different eviction strategies can be fine-tuned for each layer.</div>
            </li>
        </ul>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Common Use Cases</b></h2></div>
    <div>
        <ul>
            <li>
                <div><b>Web Browsers:</b></div>
                <div>Store the most visited content in RAM (L1) and other resources on disk (L2).</div>
            </li>
            <li>
                <div><b>Database Systems:</b></div>
                <div>Use in-memory buffers for recent queries and disk-based caches for historical ones.</div>
            </li>
            <li>
                <div><b>Content Delivery Networks (CDNs):</b></div>
                <div>Cache recent assets in edge servers and older assets in regional or central caches.</div>
            </li>
            <li>
                <div><b>Machine Learning Inference:</b></div>
                <div>Cache hot models or data in GPU memory (L1) and move others to RAM or disk (L2).</div>
            </li>
        </ul>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Eviction Policy Combinations</b></h2></div>
    <div>Each layer in two-tiered caching can use different eviction policies:</div>
    <div className="mtop10p">
        <SimpleTable header={["L1 Policy","L2 Policy","Description"]} 
            columns={[
                ["LRU","LFU","Quickly accessible data changes often, while older but frequently used data remains."],
                ["LFU","FIFO","Promote frequently accessed items, remove the oldest from L2."],
                ["LRU","LRU","Consistent recency-based eviction across both layers."],
            ]} />
    </div>
    <div>Choosing the right combination depends on your system’s data access patterns.</div>

    <div className="mtop15p"><h2 className="blog-head"><b>Challenges and Considerations</b></h2></div>
    <div className="mtop15p">
        <ul>
            <li>
                <div><b>Promotion/Demotion Cost:</b></div>
                <div>Moving data between tiers adds overhead.</div>
            </li>
            <li>
                <div><b>Consistency:</b></div>
                <div>Changes to data must be reflected across tiers—synchronization is crucial.</div>
            </li>
            <li>
                <div><b>Configuration Complexity:</b></div>
                <div>Setting TTLs, eviction thresholds, and policies for two layers can be tricky.</div>
            </li>
            <li>
                <div><b>Latency Trade-offs:</b></div>
                <div>Not all L2 cache hits are fast; disk or cloud reads can be slower than desired.</div>
            </li>
        </ul>
    </div>
 </div>);
};

export default Others;