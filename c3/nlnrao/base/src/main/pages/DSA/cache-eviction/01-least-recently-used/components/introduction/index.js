import React from "react";
import { Card } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div><i>
        <div>In the world of computer science and system design, caching plays a critical role in improving performance 
            and reducing latency. But caches have limited size. So how do you decide <b>what to remove when the cache 
            is full</b>?</div>    
        <div>This is where <b>Cache Eviction Policies</b> come in. One of the most popular and widely used policies 
        is <b>Least Recently Used (LRU)</b>.</div>
        <div>In this blog, we’ll understand:</div>
        <div>
            <ul>
                <li>What is Least Recently Used (LRU)?</li>
                <li>Why is Least Recently Used (LRU) important?</li>
                <li>How Least Recently Used (LRU) works with examples?</li>
                <li>Least Recently Used (LRU) Implementation using different Data Structures</li>
                <li>Real-world applications</li>
            </ul>
        </div>
    </i></div>
    <div className="mtop15p"><h2 className="blog-head"><b>What is Least Recently Used (LRU)?</b></h2></div>
    <div className="mtop15p"><b>Least Recently Used (LRU)</b> is a cache eviction strategy that removes 
    the <b>least recently accessed item</b> when the cache reaches its capacity.</div>
    <div>
        <Card padding={15} backgroundColor="#eee">
            <i><b>In simple words:</b></i> If your cache is full and a new item needs to be added, Least Recently Used (LRU) removes 
            the item that hasn't been used in the longest time.
        </Card>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Why Least Recently Used (LRU)?</b></h2></div>
    <div className="mtop15p">
        <div>Imagine you’re using a web browser that caches visited web pages to load them faster the next time. But the cache 
        has limited space. Least Recently Used (LRU) ensures that pages you haven’t visited in a while are removed first, 
        giving space to newly visited pages.</div>
        <div><b>Benefits:</b></div>
        <div>
            <ul>
                <li>Better cache hit ratio in real-world scenarios</li>
                <li>Mimics human behavior: “Use it or lose it”</li>
                <li>Simple and efficient with right data structures</li>
            </ul>
        </div>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>How Does Least Recently Used (LRU) Work?</b></h2></div>
    <div className="mtop15p">
        <div>Let's take an example.</div>
        <div>
            <ul>
                <li>Cache size = 3</li>
                <li>Sequence of pages: [A, B, C, A, D]</li>
            </ul>
        </div>
        <div><h5><b>Step-by-step:</b></h5></div>
        <div className="mtop5p">
            <SimpleTable header={["Step","Action","Cache Content","Notes"]} 
                columns={[
                    ["1","Access A","[A]","A is added"],
                    ["2","Access B","[A,B]","B is added"],
                    ["3","Access C","[A,B,C]","C is added"],
                    ["4","Access A","[B,C,A]","A is moved to recent"],
                    ["5","Access D","[C,A,D]","B is least recently used, so removed"]
                ]} />
        </div>  
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Data Structures to Implement Least Recently Used (LRU)</b></h2></div>
    <div className="mtop15p">
        To implement LRU efficiently, we need:
        <ol>
            <li><b>HashMap –</b> to store keys and their references.</li>
            <li><b>Doubly Linked List –</b> to maintain the usage order (most recent at front, least recent at back).</li>
        </ol>
        This gives:
        <ul>
            <li><code><b>O(1)</b></code> access (with HashMap)</li>
            <li><code><b>O(1)</b></code> update/move operations (with Doubly Linked List)</li>
        </ul>
    </div>
 </div>);
};

export default Introduction;