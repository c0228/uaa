import React from "react";
import { Highlight } from "e-ui-react";

const FIFO_EXAMPLE = `Put(1) → Cache: [1]
Put(2) → Cache: [1, 2]
Put(3) → Cache: [1, 2, 3]
Put(4) → Cache: [2, 3, 4] // 1 is removed (FIFO)`;

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div><i>Caching is a vital optimization technique in computer systems. It stores frequently accessed data in a faster 
        memory (cache) to reduce latency and improve performance. However, caches have <b>limited size</b> — so when they become 
        full, older entries must be evicted to make room for new ones. This is where cache eviction strategies come in.</i></div>
    <div align="center" className="mtop15p"><h2 className="blog-head"><b>Introduction</b></h2></div>
    <div className="mtop15p">
        <div>Among various cache eviction policies, <b>First-In-First-Out (FIFO)</b> is one of the simplest and most intuitive. It follows the 
            principle of evicting the oldest element in the cache, much like people leaving a queue: whoever entered first, leaves first.</div>
        <div>In this blog, we’ll dive deep into:</div>
        <div>
            <ul>
                <li>What FIFO means in caching?</li>
                <li>How FIFO works?</li>
                <li>Advantages and disadvantages</li>
                <li>FIFO implementation using data structures</li>
                <li>Use cases and when to use it</li>
                <li>Comparison with other policies</li>
            </ul>
        </div>
    </div>

    <div align="center" className="mtop15p"><h2 className="blog-head"><b>What is FIFO in Caching?</b></h2></div>
    <div className="mtop15p">
        <b>FIFO (First-In-First-Out)</b> is a cache eviction strategy where the cache removes the oldest entry when space is needed. It does not consider how 
        often or how recently the item was accessed. The only criterion is <b>insertion time</b>.
    </div>
    <div className="mtop15p"><h4 className="blog-head"><b>Real-world Analogy:</b></h4></div>
    <div className="mtop15p">Think of FIFO like a queue at a movie theater. The first person to get in line is the first to get a ticket and enter. In a cache, 
    the first data item that was stored is the first to be removed when space is required.</div>

    <div className="mtop15p"><h2 className="blog-head"><b>How FIFO Works?</b></h2></div>
    <div className="mtop15p">
        Here’s a step-by-step description:
        <ul>
            <li><b>Insert an item into the cache.</b></li>
            <li>If the cache size is <b>not full</b>, the item is simply added.</li>
            <li>If the cache size <b>exceeds its limit</b>, the <b>earliest inserted item</b> is evicted.</li>
            <li>Continue this process as new items come in.</li>
        </ul>
    </div>

    <div className="mtop15p"><h4 className="blog-head"><b>Example:</b></h4></div>
    <div className="mtop15p">
        <div>Let’s say we have a cache of size <code><b>3</b></code>.</div>
        <div>We perform these operations:</div>
        <div>
            <Highlight content={FIFO_EXAMPLE} lang="python" />
        </div>
        <div>Even if <code><b>2</b></code> was never accessed after being added, it will stay in the cache longer 
        than <code><b>1</b></code>, just because it was added later.</div>
    </div>

    <div align="center" className="mtop15p"><h2 className="blog-head"><b>Advantages & Disadvantages of FIFO</b></h2></div>
    <div className="mtop15p"><h4 className="blog-head"><b>Advantages:</b></h4></div>
    <div className="mtop15p">
        <ul>
            <li><b>Simplicity:</b> Very easy to implement.</li>
            <li><b>Low Overhead:</b> No need to track access frequency or recency.</li>
            <li><b>Predictable Behavior:</b> Easy to reason about which item will be removed.</li>
        </ul>
    </div>
    <div className="mtop15p"><h4 className="blog-head"><b>Disadvantages:</b></h4></div>
    <div className="mtop15p">
        <ul>
            <li><b>Not optimal for performance:</b> It might evict items that are still being used.</li>
            <li><b>No usage awareness:</b> Doesn’t account for access patterns (like LRU or LFU).</li>
            <li><b>Cache Thrashing:</b> Frequent eviction of useful items leads to low cache hit rate.</li>
        </ul>
    </div>

 </div>);
};

export default Introduction;