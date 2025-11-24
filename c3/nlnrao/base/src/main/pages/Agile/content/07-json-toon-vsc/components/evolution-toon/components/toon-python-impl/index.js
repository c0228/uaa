import React from "react";
import { Highlight } from "e-ui-react";

const TOON_EXAMPLE_PYTHON = `import yaml

with open("config.toon") as f:
    toon_data = yaml.safe_load(f)

print("Engine:", toon_data["engine"]["name"])
print("Steps:", toon_data["steps"])
print("Min Age:", toon_data["rules"]["min_age"])`;

const TOONPythonImplementation = () =>{
 return (<div style={{ border:'1px solid #ccc', backgroundColor:'#fff', padding:'15px' }}>
    <Highlight content={TOON_EXAMPLE_PYTHON} lang="python" />
 </div>);
};

export default TOONPythonImplementation;