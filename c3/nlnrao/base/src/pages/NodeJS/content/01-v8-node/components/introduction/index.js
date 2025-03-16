import React from "react";

const Introduction = () =>{
 return (<div className="lh28p fs16p mtop15p">
    <div><i>Node.js is a JavaScript runtime built on the V8 JavaScript engine, which powers Google Chrome. V8 compiles 
    JavaScript into machine code, enabling rapid execution. Node.js extends this functionality to the server-side, allowing 
    developers to run JavaScript outside of the browser, facilitating scalable and efficient backend development. Node.js leverages 
    V8's performance capabilities to handle concurrent connections, I/O operations, and event-driven architecture, making it ideal 
    for building fast and scalable network applications. Together, Node.js and V8 enable developers to write server-side applications 
    in JavaScript, utilizing a single language across the entire tech stack.</i></div>
    <div className="mtop15p"><h2 className="blog-head"><b>The Relationship between Node JS and V8 JS Engine</b></h2></div>
    <div className="mtop15p">The <u><b>V8 JavaScript Engine</b></u> is the open-source JS engine developed by Google for the 
    Chrome browser. <u><b>Node.js</b></u> is a JavaScript runtime built on the V8 engine. Essentially, Node.js allows you to run 
    JavaScript code outside of a web browser, utilizing the V8 engine to execute JavaScript code on the server side. So, Node.js 
    relies on the V8 engine for its JavaScript execution capabilities.</div>
 </div>);
};

export default Introduction;