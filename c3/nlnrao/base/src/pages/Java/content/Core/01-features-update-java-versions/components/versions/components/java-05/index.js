import React from "react";
import { BlogIndexHeader } from "@Components/blog-index-header/index.js";
import OrderList from "@Components/order-list/index.js";

const Java05 = () =>{
 return (<div className="mtop15p">
    <div className="mtop15p"><h4><b>Java SE 1.5 (2004):</b></h4></div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="1" title="Generics (Type Safety for Collections)" />
        <OrderList data={[(<div className="mtop5p">Allowed defining <b>data type constraints</b> 
            at compile-time.</div>),
            (<div className="mtop5p">Eliminated the need for <b>explicit casting</b>.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="2" title="Enhanced for-loop (for-each loop)" />
        <OrderList data={[(<div className="mtop5p"><b>Simplified iteration</b> over arrays and collections.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="3" title="Autoboxing and Unboxing" />
        <OrderList data={[(<div className="mtop5p">Automatic conversion between <b>primitive types</b> and 
            <b>wrapper classes</b>.</div>),
            (<div className="mtop5p">Eliminated manual conversion.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="4" title="Varargs (Variable Arguments)" />
        <OrderList data={[(<div className="mtop5p">Allowed <b>passing multiple arguments</b> of the same type 
            without creating an array.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="5" title="Enumerations (enum)" />
        <OrderList data={[(<div className="mtop5p">Introduced <code><b>enum</b></code> type for <b>defining 
            constants</b>.</div>),
            (<div className="mtop5p">More powerful than traditional <code><b>final static</b></code> constants.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="6" title="Concurrency Utilities (java.util.concurrent)" />
        <OrderList data={[(<div className="mtop5p">Added <code><b>Executor Framework</b></code>, <code><b>ThreadPool</b></code>, 
            <code><b>Locks</b></code>, <code><b>Atomic Variables</b></code>.</div>),
            (<div className="mtop5p">Improved <b>multithreading performance and reliability</b>.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="7" title="Static Imports" />
        <OrderList data={[(<div className="mtop5p">Allowed <b>direct access to static members</b> without qualifying 
            the class name.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="8" title="Annotations (Metadata for Classes and Methods)" />
        <OrderList data={[(<div className="mtop5p">Introduced <b>built-in annotations</b> like: <code><b>@Override</b></code> 
            (Ensures method overrides a superclass method), <code><b>@Deprecated</b></code> (Marks a method as deprecated), 
            <code><b>@SuppressWarnings</b></code> (Suppresses compiler warnings)</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="9" title="Improved Garbage Collection (GC)" />
        <OrderList data={[(<div className="mtop5p"><b>New GC algorithms</b> for <b>improved performance and memory 
            management</b>.</div>)]} />
    </div>

 </div>);
};

export default Java05;