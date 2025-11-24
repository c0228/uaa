import React from "react";
import { Highlight } from "e-ui-react";

const VSC_EXAMPLE_NODE = `const fs = require("fs");
const yaml = require("js-yaml");

function loadVSC(path) {
    try {
        const raw = fs.readFileSync(path, "utf8");
        const data = yaml.load(raw);

        if (!data.vsc) {
            throw new Error("Invalid VSC: Missing version key");
        }

        console.log("VSC Version:", data.vsc);
        return data;

    } catch (err) {
        console.error("Error loading VSC:", err.message);
        throw err;
    }
}

const vscData = loadVSC("config.vsc");
console.log("Engine:", vscData.config.engine);`;

const VSCNodeImplementation = () =>{
 return (<div style={{ border:'1px solid #ccc', backgroundColor:'#fff', padding:'15px' }}>
    <div><h5><b>1. Install Dependencies:</b></h5></div>
    <div><Highlight content={`npm install js-yaml`} lang="javascript" /></div>
    <div><h5><b>2. Code:</b></h5></div>
    <div><Highlight content={VSC_EXAMPLE_NODE} lang="javascript" /></div>
 </div>);
};

export default VSCNodeImplementation;