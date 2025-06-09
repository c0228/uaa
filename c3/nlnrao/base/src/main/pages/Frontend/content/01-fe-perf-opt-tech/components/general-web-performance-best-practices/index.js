import React from "react";
import OrderList from "@MainComponents/order-list/index.js";

const GeneralWebPerformanceBestTechniques = () =>{
 return (<div className="lh28p fs16p">
    <div align="center" className="mtop15p"><h2 className="blog-head"><b>2. General Web Performance Best Practices</b></h2></div>
    <div className="mtop15p">These practices apply across all frontend frameworks:</div>
    <OrderList data={[(<div className="mtop15p">
        <div><h4><b>Code Splitting</b></h4></div>
        <div>Split your application into multiple bundles using tools like Webpack or Vite, so users only download 
            what's necessary.</div>
    </div>),(<div className="mtop15p">
        <div><h4><b>Lazy Loading</b></h4></div>
        <div>Load non-critical components only when they’re needed to reduce initial load.</div>
    </div>),
    (<div className="mtop15p">
        <div><h4><b>Tree Shaking</b></h4></div>
        <div>Remove unused code during bundling using tools like Webpack’s TerserPlugin.</div>
    </div>),
    (<div className="mtop15p">
        <div><h4><b>Image Optimization</b></h4></div>
        <div>Use next-gen formats like WebP, compress images, and implement responsive image loading.</div>
    </div>),
    (<div className="mtop15p">
        <div><h4><b>Minification & Compression</b></h4></div>
        <div>Minify CSS, JavaScript, and HTML. Use GZIP or Brotli for compression.</div>
    </div>),
    (<div className="mtop15p">
        <div><h4><b>Caching</b></h4></div>
        <div>Implement proper HTTP caching headers and service workers via Workbox or PWA setups.</div>
    </div>),
    (<div className="mtop15p">
        <div><h4><b>CDN Usage</b></h4></div>
        <div>Deliver static assets via CDNs for faster load across geographies.</div>
    </div>)
]} />
 </div>);
};

export default GeneralWebPerformanceBestTechniques;