import React from "react";
import { Highlight } from "e-ui-react";
import OrderList from "@MainComponents/order-list/index.js";

const FORCE_GARBAGE_COLLECT = `node --expose-gc app.js
global.gc();`;

const AVOID_OBJ_CREATION = `let arr = [];
for (let i = 0; i < 1000000; i++) {
  arr.push(i);
}
arr = null; // Allow garbage collection`;

const MONITOR_GC_PERFORMANCE = `const v8 = require('v8');
console.log(v8.getHeapStatistics());`;

const GarbageCollectionTuning = () =>{
 return (<div className="lh28p fs16p mtop15p">
    <div><h2 className="blog-head"><b>Garbage Collection Tuning in Node.js</b></h2></div>
    <div>
        <ol>
            <li className="mtop15p">
                <div><b>Understanding V8 Garbage Collector</b></div>
                <div>Node.js uses V8's garbage collector, which follows a generational garbage collection approach:</div>
                <OrderList data={[(<div><b>Young Generation:</b> Short-lived objects.</div>),
                        (<div><b>Old Generation:</b> Long-lived objects.</div>),
                        (<div><b>Large Objects:</b> Special cases for big memory allocations.</div>)]} />
            </li>
            <li className="mtop15p">
                <div><b>Using <code>--max-old-space-size</code></b></div>
                <div>Increase the memory allocation for Node.js if necessary.</div>
                <Highlight content={`node --max-old-space-size=4096 app.js`} lang="javascript" />
            </li>
            <li className="mtop15p">
                <div><b>Force Garbage Collection</b></div>
                <div>Use <code><b>global.gc()</b></code> to manually trigger garbage collection when running with <code><b>--expose-gc</b></code>.</div>
                <Highlight content={FORCE_GARBAGE_COLLECT} lang="javascript" />
            </li>
            <li className="mtop15p">
                <div><b>Optimize Memory Allocation</b></div>
                <div>Avoid excessive object creation and reuse existing objects when possible.</div>
                <Highlight content={AVOID_OBJ_CREATION} lang="javascript" />
            </li>
            <li className="mtop15p">
                <div><b>Monitor GC Performance</b></div>
                <div>Use the <code><b>v8</b></code> module to inspect garbage collection metrics.</div>
                <Highlight content={MONITOR_GC_PERFORMANCE} lang="javascript" />
            </li>
        </ol>
    </div>
 </div>);
};

export default GarbageCollectionTuning;