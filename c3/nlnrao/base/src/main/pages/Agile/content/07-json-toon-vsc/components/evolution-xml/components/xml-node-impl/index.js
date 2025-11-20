import React from "react";
import { Highlight } from "e-ui-react";

const XMLNodeImplementation = () =>{
const XML_INSTALL_NODE = `npm install xml2js`;
const XML_EXAMPLE_NODE =  `const fs = require('fs');
const { parseStringPromise } = require('xml2js');

async function parseConfig() {
    try {
        const xmlData = fs.readFileSync('config.xml', 'utf-8');
        const result = await parseStringPromise(xmlData);

        const root = result.root;

        console.log("Engine Name:", root.name[0]);
        console.log("Version:", root.version[0]);

        const retryAttempts = root.settings[0].retry[0].$.attempts;
        console.log("Retry Attempts:", retryAttempts);

    } catch (err) {
        console.error("Error parsing XML:", err);
    }
}

parseConfig();`;
 return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
   <div className="mtop5p">
      <Highlight content={XML_INSTALL_NODE} lang="javascript" />
   </div>
   <div className="mtop5p">
      <Highlight content={XML_EXAMPLE_NODE} lang="javascript" />
   </div>
 </div>);
};

export default XMLNodeImplementation;