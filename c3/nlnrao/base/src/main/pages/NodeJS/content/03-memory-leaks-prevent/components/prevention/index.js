import React from "react";
import { Highlight } from "e-ui-react";

const AVOID_GLOBAL_VARIABLES = `// Bad
foo = 'Memory leak';
// Good
const foo = 'Proper allocation';`;

const MANAGE_EVENT_LISTENERS = `const emitter = new EventEmitter();
function handler() { console.log('Event triggered'); }
emitter.on('event', handler);
// Cleanup
emitter.off('event', handler);`;

const USE_WEAKMAP_CACHE = `const cache = new WeakMap();
let obj = {};
cache.set(obj, 'cached value');
obj = null; // Allow garbage collection`;

const LIMIT_CACHE_SIZE = `const LRU = require('lru-cache');
const cache = new LRU({ max: 500 });`;

const CLOSE_DB_CONNECT = `const db = new Database();
db.connect();
db.close(); // Prevent memory leaks`;

const SET_IMMEDIATE_CODE = `setImmediate(() => {
  console.log('Executed in the next tick');
});`;

const Prevention = () =>{
 return (<div className="lh28p fs16p mtop15p">
    <div><h2 className="blog-head"><b>Preventing Memory Leaks</b></h2></div>
    <div>Once memory leaks are detected, the next step is prevention.</div>
    <div>
        <ol>
            <li className="mtop15p">
                <div><b>Avoid Global Variables</b></div>
                <div>Ensure variables are declared using <code><b>const</b></code> or <code><b>let</b></code> instead of 
                implicit global assignments.</div>
                <Highlight content={AVOID_GLOBAL_VARIABLES} lang="javascript" />
            </li>
            <li className="mtop15p">
                <div><b>Manage Event Listeners Properly</b></div>
                <div>Remove event listeners when they are no longer needed.</div>
                <Highlight content={MANAGE_EVENT_LISTENERS} lang="javascript" />
            </li>
            <li className="mtop15p">
                <div><b>Use WeakMaps for Caching</b></div>
                <div>Using <code><b>WeakMap</b></code> allows automatic garbage collection of unused keys.</div>
                <Highlight content={USE_WEAKMAP_CACHE} lang="javascript" />
            </li>
            <li className="mtop15p">
                <div><b>Limit Cache Size</b></div>
                <div>Use LRU (Least Recently Used) caching mechanisms to restrict memory usage.</div>
                <Highlight content={LIMIT_CACHE_SIZE} lang="javascript" />
            </li>
            <li className="mtop15p">
                <div><b>Close Database Connections</b></div>
                <div>Ensure database connections are closed properly after use.</div>
                <Highlight content={CLOSE_DB_CONNECT} lang="javascript" />
            </li>
            <li className="mtop15p">
                <div><b>Use <code>setImmediate</code> Instead of <code>setTimeout</code></b></div>
                <div>Avoid accumulating unnecessary timers.</div>
                <Highlight content={SET_IMMEDIATE_CODE} lang="javascript" />
            </li>
            <li className="mtop15p">
                <div><b>Profile and Monitor Memory Usage</b></div>
                <div>Use APM tools like New Relic, Prometheus, or Datadog for continuous monitoring.</div>
            </li>
        </ol>
    </div>
 </div>);
};

export default Prevention;