import React from "react";
import { Highlight } from "e-ui-react";

const XMLPythonImplementation = () =>{
const XML_EXAMPLE_PYTHON = `import xml.etree.ElementTree as ET

tree = ET.parse("config.xml")
root = tree.getroot()

print("Engine Name:", root.find("name").text)
print("Version:", root.find("version").text)

retry = root.find("settings/retry")
print("Retry Attempts:", retry.get("attempts"))`;
 return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
   <Highlight content={XML_EXAMPLE_PYTHON} lang="python" />
 </div>);
};


export default XMLPythonImplementation;