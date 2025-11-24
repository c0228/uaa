import React from "react";
import { Highlight } from "e-ui-react";

const JSON_EXAMPLE_PYTHON = `import json

with open("config.json") as f:
    data = json.load(f)

print("Engine:", data["engine"])
print("Retry Attempts:", data["settings"]["retry"]["attempts"])`;

const JSONPythonImplementation = () =>{
 return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
    <Highlight content={JSON_EXAMPLE_PYTHON} lang="python" />
 </div>);
};

export default JSONPythonImplementation;