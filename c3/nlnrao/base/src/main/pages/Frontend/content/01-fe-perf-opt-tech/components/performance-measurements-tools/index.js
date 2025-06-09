import React from "react";
import OrderList from "@MainComponents/order-list/index.js";

const PerformanceMeasurementTools = () =>{
 return (<div className="lh28p fs16p">
    <div align="center" className="mtop15p"><h2 className="blog-head"><b>6. Tools for Performance Measurement</b></h2></div>
    <div className="mtop15p">
        <OrderList data={[(<div><b>Lighthouse (Chrome DevTools) –</b> Measures load speed, interactivity, and performance metrics.</div>),
            (<div className="mtop15p"><b>WebPageTest –</b> Visualize first paint, time to interactive, etc.</div>),
            (<div className="mtop15p"><b>Webpack Bundle Analyzer –</b> Analyze what’s in your bundle.</div>),
            (<div className="mtop15p"><b>React Profiler –</b> Understand component rendering in React.</div>),
            (<div className="mtop15p"><b>Angular DevTools –</b> Angular-specific profiler and inspection tool.</div>),
            (<div className="mtop15p"><b>Vue DevTools –</b> Inspect Vue components and Vuex store performance.</div>)]} />
    </div>
 </div>);
};

export default PerformanceMeasurementTools;