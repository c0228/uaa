import React from "react";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p">
        <i>
            <div>In today’s lightning-fast digital world, users demand instant access to data. Whether you're scrolling 
            through a social media feed, searching a product on an e-commerce site, or using AI-powered applications, 
            performance matters. Underneath this user experience lies a network of caches—data stored temporarily to 
            reduce latency and system load. But caches are limited in size. So, what happens when they get full?</div>
            <div className="mtop15p">That’s where <b>cache eviction strategies</b> come in. These policies decide what data 
            to keep and what to throw away. One such intelligent and increasingly relevant strategy 
            is <b>Two-Tiered Caching</b>.</div>
        </i>
    </div>
    <div className="mtop15p"><h2 className="blog-head"><b>Introduction: What is Two-Tiered Caching?</b></h2></div>
    <div className="mtop15p">At its core, <b>Two-Tiered Caching</b> (also known as multi-level caching) is a layered approach 
    to managing cache memory. Instead of relying on a single layer of cache to handle everything, the cache is divided 
    into <b>two levels</b>, typically:</div>
    <div className="mtop15p">
        <ul>
            <li><b>L1 (Level 1): Fast but small memory</b> (e.g., in-memory cache like Redis or application-level cache).</li>
            <li><b>L2 (Level 2): Slower but larger memory</b> (e.g., disk-based cache or cloud object storage).</li>
        </ul>
    </div>
    <div className="mtop15p">Each layer has its own eviction strategy—like LRU (Least Recently Used), LFU (Least Frequently Used), 
    or even Random Replacement. The goal is to balance <b>speed</b>, <b>cost</b> and <b>capacity</b> by smartly placing data in 
    the most optimal layer.</div>

    <div className="mtop15p"><h2 className="blog-head"><b>How It Works: Flow of Two-Tiered Caching</b></h2></div>
    <div className="mtop15p">
        <div>Here’s a simplified flow:</div>
        <div>
            <ol>
                <li>
                    <div><b>Request Hits L1 Cache:</b></div>
                    <div>If the data is found here (a hit), it's returned immediately. Fastest possible access.</div>
                </li>
                <li>
                    <div><b>If L1 Misses, Check L2:</b></div>
                    <div>If not found in L1, the system looks into the L2 cache. If it finds the data here, it may also 
                        promote it to L1.</div>
                </li>
                <li>
                    <div><b>Cache Miss in Both:</b></div>
                    <div>If the data isn't found in either cache, it’s fetched from the origin (e.g., database or API), 
                        returned to the user, and then stored in both L1 and/or L2 depending on the policy.</div>
                </li>
                <li>
                    <div><b>Eviction:</b></div>
                    <div>When space is full in any layer, a replacement policy decides which item to evict—usually 
                        the least used or least recently accessed.</div>
                </li>
            </ol>
        </div>
    </div>

 </div>);
};

export default Introduction;