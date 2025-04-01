import React from "react";
import { Highlight } from "e-ui-react";
import OrderList from "@MainComponents/order-list/index.js";

const HEAP_DUMP_MODULE = `const heapdump = require('heapdump');
heapdump.writeSnapshot('./snapshot.heapsnapshot');`;

const Detection = () =>{
 return (<div className="lh28p fs16p mtop15p">
    <div><h2 className="blog-head"><b>Detecting Memory Leaks in Node.js</b></h2></div>
    <div className="mtop15p">Detecting a memory leak requires analyzing heap usage and object 
        retention patterns. Several tools can help in this process.</div>
    <div>
        <ol>
            <li className="mtop15p">
                <div><b>Using Process Memory Usage</b></div>
                <div>Node.js provides a <code><b>process.memoryUsage()</b></code> method to inspect memory usage at runtime.</div>
                <Highlight content={`console.log(process.memoryUsage());`} lang="javascript" />
                <div>Tracking this over time can reveal abnormal memory growth.</div>
            </li>
            <li className="mtop15p">
                <div><b>Heap Snapshots with Chrome DevTools</b></div>
                <OrderList data={[(<div>Use <code><b>node --inspect</b></code> and connect to Chrome DevTools.</div>),
                    (<div>Capture heap snapshots and analyze object growth patterns.</div>)]} />
            </li>
            <li className="mtop15p">
                <div><b>Heap Dump Analysis</b></div>
                <OrderList data={[(<div>
                    <div>Use the <code><b>heapdump</b></code> module to generate snapshots.</div>
                    <Highlight content={HEAP_DUMP_MODULE} lang="javascript" />
                 </div>),
                (<div>Compare snapshots to detect growing memory references.</div>)]} />
            </li>
            <li className="mtop15p">
                <div><b>Using Node.js Built-in Profiler</b></div>
                <div>Node.js provides a built-in profiler via the <code><b>--prof</b></code> flag.</div>
                <Highlight content={`node --prof app.js`} lang="javascript" />
                <div>The output can be analyzed using <code><b>node --prof-process</b></code>.</div>
            </li>
            <li className="mtop15p">
                <div><b>Using <code>clinic.js</code></b></div>
                <div><b>clinic.js</b> is an automated tool for detecting memory leaks and performance issues.</div>
                <Highlight content={`npx clinic doctor -- node app.js`} lang="javascript" />
            </li>
        </ol>
    </div>
 </div>);
};

export default Detection;