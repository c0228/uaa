import React from "react";
import { BlogIndexHeader } from "@Components/blog-index-header/index.js";
import OrderList from "@Components/order-list/index.js";

const Java10 = () =>{
 return (<div className="mtop15p">
    <div className="mtop15p"><h4><b>Java SE 10 (March, 2018):</b></h4></div>
    
    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="1" title="Local Variable Type Inference (var)" />
        <OrderList data={[(<div className="mtop5p">Allows declaring local variables without specifying the type explicitly.</div>),
            (<div className="mtop5p">The compiler infers the type from the assigned value.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="2" title="Garbage Collector Enhancements (G1 GC)" />
        <OrderList data={[(<div className="mtop5p"><b>Parallel Full GC for G1 Garbage Collector</b> improves performance 
            by reducing pause times.</div>),
            (<div className="mtop5p">Previously, G1 GC would fall back to a single-threaded full GC, which caused slowdowns.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="3" title="Application Class-Data Sharing (AppCDS)" />
        <OrderList data={[(<div className="mtop5p"><b>Reduces startup time and memory footprint</b> by allowing multiple Java 
            applications to share common class metadata.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="4" title="Thread-Local Handshakes" />
        <OrderList data={[(<div className="mtop5p"><b>Improves thread management</b> by allowing operations on individual 
            threads without global safepoint synchronization.</div>),
                (<div className="mtop5p">Enhances performance for <b>multi-threaded applications</b>.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="6" title="Root Certificates in OpenJDK" />
        <OrderList data={[(<div className="mtop5p"><b>OpenJDK now includes a default set of trusted root certificates</b>, 
            improving security for TLS connections.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="7" title="Experimental Java-Based JIT Compiler (Graal)" />
        <OrderList data={[(<div className="mtop5p">Introduced the Graal JIT compiler for experimental use on Linux x64.</div>),
            (<div className="mtop5p">Aims to improve performance by optimizing Just-In-Time compilation.</div>)]} />
    </div>

 </div>);
};

export default Java10;