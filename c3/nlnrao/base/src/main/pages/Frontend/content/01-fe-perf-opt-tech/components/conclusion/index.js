import React from "react";
import OrderList from "@MainComponents/order-list/index.js";

const Conclusion = () =>{
 return (<div className="lh28p fs16p mtop15p mbot35p">
    <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
    <div className="mtop15p">
        Frontend performance optimization is no longer optional — it’s a <b>business-critical priority</b>. 
        Whether you are building with React, Angular, or Vue, your users expect <b>fast, seamless experiences</b> 
        across all devices and networks. A beautifully designed app that is sluggish will lose users.
    </div>
    <div className="mtop15p">
        Each framework offers its own <b>unique tools and strategies</b> for achieving optimal performance:
    </div>
    <div>
        <OrderList data={[(<div className="mtop5p">React emphasizes <b>memoization</b>, <b>virtualization</b>, and <b>dynamic imports</b>.</div>),
            (<div className="mtop5p">Angular leverages <b>AOT compilation</b>, <b>change detection strategies</b>, and <b>lazy loading modules</b>.</div>),
            (<div className="mtop5p">Vue provides <b>computed properties</b>, <b>keep-alive caching</b>, and <b>template-level optimizations</b>.</div>)]} />
    </div>
    <div className="mtop15p">
        However, across all three frameworks, certain core principles remain constant:
    </div>
    <div>
        <OrderList data={[(<div className="mtop5p">Optimize what you ship to the browser — smaller bundles load faster.</div>),
            (<div className="mtop5p">Defer non-critical work until after first paint.</div>),
            (<div className="mtop5p">Efficiently manage how components re-render.</div>),
            (<div className="mtop5p">Monitor and continuously improve with the help of profiling tools.</div>)]} />
    </div>
    <div className="mtop15p">
        Performance work should be part of your development culture — not an afterthought. Every component you write, 
        every dependency you add, and every new feature you implement should be considered in terms of its impact on 
        load times and runtime performance.
    </div>
 </div>);
};

export default Conclusion;