import React from "react";
import { Highlight } from "e-ui-react";

const CONVERT_EXAMPLE_NODE = `const fs = require("fs");
const { parseStringPromise, Builder } = require("xml2js");
const yaml = require("js-yaml");


// ------------------------------------------
// 1. PARSE INPUT (string → JS object)
// ------------------------------------------

async function parseData(inputStr, fromType) {
  fromType = fromType.toLowerCase();

  if (fromType === "json") {
    return JSON.parse(inputStr);
  }

  if (fromType === "xml") {
    return await parseStringPromise(inputStr, { explicitArray: false });
  }

  if (fromType === "toon" || fromType === "yaml" || fromType === "vsc") {
    return yaml.load(inputStr);
  }

  throw new Error(\`Unsupported input format: \${fromType}\`);
}


// ------------------------------------------
// 2. DUMP OUTPUT (JS object → string)
// ------------------------------------------

function dumpData(data, toType) {
  toType = toType.toLowerCase();

  if (toType === "json") {
    return JSON.stringify(data, null, 4);
  }

  if (toType === "xml") {
    const builder = new Builder({ headless: true, renderOpts: { pretty: true } });
    return builder.buildObject(data);
  }

  if (toType === "toon" || toType === "yaml" || toType === "vsc") {
    return yaml.dump(data, { noRefs: true });
  }

  throw new Error(\`Unsupported output format: \${toType}\`);
}


// ------------------------------------------
// 3. MAIN CONVERSION FUNCTION
// ------------------------------------------

async function convertFormat(inputStr, fromType, toType) {
  const data = await parseData(inputStr, fromType);
  return dumpData(data, toType);
}


// ------------------------------------------
// 4. LOAD & SAVE (File I/O Helpers)
// ------------------------------------------

function loadFile(path) {
  return fs.readFileSync(path, "utf8");
}

function saveFile(path, text) {
  fs.writeFileSync(path, text, "utf8");
}


// ------------------------------------------
// 5. FILE-TO-FILE CONVERTER
// ------------------------------------------

async function convertFile(inputPath, fromType, outputPath, toType) {
  const inputStr = loadFile(inputPath);
  const outputStr = await convertFormat(inputStr, fromType, toType);
  saveFile(outputPath, outputStr);
  console.log(\`Converted \${inputPath} (\${fromType}) → \${outputPath} (\${toType})\`);
}


// EXPORT FUNCTIONS
module.exports = {
  parseData,
  dumpData,
  convertFormat,
  loadFile,
  saveFile,
  convertFile
};`;

const CONVERT_XMLJSON_NODE = `const { convertFormat, loadFile, saveFile } = require("./converter");

(async () => {
  const xmlText = loadFile("engine.xml");
  const jsonText = await convertFormat(xmlText, "xml", "json");
  saveFile("engine.json", jsonText);
})();`;

const CONVERT_JSONTOON_NODE = `const { convertFormat, loadFile, saveFile } = require("./converter");

(async () => {
  const text = loadFile("engine.json");
  const toon = await convertFormat(text, "json", "toon");
  saveFile("engine.toon", toon);
})();`;

const CONVERT_TOONVSC_NODE = `const { convertFormat, loadFile, saveFile } = require("./converter");

(async () => {
  const data = loadFile("config.toon");
  const vsc = await convertFormat(data, "toon", "vsc");
  saveFile("config.vsc", vsc);
})();`;

const CONVERT_VSCXML_NODE = `const { convertFormat, loadFile, saveFile } = require("./converter");

(async () => {
  const vsc = loadFile("rules.vsc");
  const xmlOutput = await convertFormat(vsc, "vsc", "xml");
  saveFile("rules.xml", xmlOutput);
})();`;

const ConversionNodeImplementation = () =>{
  return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
    <div><h5><b>1. Install Dependencies</b></h5></div>
    <div className="padLeft5p"><Highlight content={`npm install xml2js js-yaml`} lang="javascript" /></div>
    <div><h5><b>2. Code</b></h5></div>
    <div className="padLeft5p"><Highlight content={CONVERT_EXAMPLE_NODE} lang="javascript" /></div>
    <div><h5><b>3. How to use it?</b></h5></div>
    <div className="padLeft5p">
        <div><b>a) Convert XML to JSON</b></div>
        <div className="padLeft5p"><Highlight content={CONVERT_XMLJSON_NODE} lang="python" /></div>
    </div>
    <div className="padLeft5p">
        <div><b>b) Convert JSON to TOON (YAML)</b></div>
        <div className="padLeft5p"><Highlight content={CONVERT_JSONTOON_NODE} lang="python" /></div>
    </div>
    <div className="padLeft5p">
        <div><b>c) Convert TOON to VSC</b></div>
        <div className="padLeft5p"><Highlight content={CONVERT_TOONVSC_NODE} lang="python" /></div>
    </div>
    <div className="padLeft5p">
        <div><b>d) Convert VSC to XML</b></div>
        <div className="padLeft5p"><Highlight content={CONVERT_VSCXML_NODE} lang="python" /></div>
    </div>
  </div>);
};

export default ConversionNodeImplementation;