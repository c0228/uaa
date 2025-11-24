import React from "react";
import { Highlight } from "e-ui-react";

const TOON_EXAMPLE_NODE = `const fs = require("fs");
const yaml = require("js-yaml");

try {
    const raw = fs.readFileSync("config.toon", "utf8");
    const toonData = yaml.load(raw);

    console.log("Engine:", toonData.engine.name);
    console.log("Steps:", toonData.steps);
    console.log("Min Age:", toonData.rules.min_age);

} catch (err) {
    console.error("Error reading TOON/YAML:", err);
}`;

const TOONNodeImplementation = () =>{
 return (<div style={{ border:'1px solid #ccc', backgroundColor:'#fff', padding:'15px' }}>
    <div><b>1. Install Dependency:</b></div>
    <div><Highlight content={`npm install js-yaml`} lang="javascript" /></div>
    <div><b>2. Code:</b></div>
    <div><Highlight content={TOON_EXAMPLE_NODE} lang="javascript" /></div>
 </div>);
};

export default TOONNodeImplementation;