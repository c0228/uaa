import React from "react";
import { Highlight } from "e-ui-react";

const JSON_EXAMPLE_NODE = `const fs = require("fs");

try {
    const raw = fs.readFileSync("config.json", "utf-8");
    const data = JSON.parse(raw);

    console.log("Engine:", data.engine);
    console.log("Retry Attempts:", data.settings.retry.attempts);
} catch (err) {
    console.error("Error reading config:", err);
}`;

const JSONNodeImplementation = () =>{
 return (<div style={{ border:'1px solid #ccc', backgroundColor:'#fff', padding:'15px' }}>
    <Highlight content={JSON_EXAMPLE_NODE} lang="javascript" />
 </div>);
};

export default JSONNodeImplementation;