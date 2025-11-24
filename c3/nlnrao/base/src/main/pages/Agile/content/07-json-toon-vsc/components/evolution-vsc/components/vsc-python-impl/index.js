import React from "react";
import { Highlight } from "e-ui-react";

const VSC_EXAMPLE_PYTHON = `import yaml

def load_vsc(path):
    with open(path) as f:
        data = yaml.safe_load(f)

    if "vsc" not in data:
        raise ValueError("Invalid VSC: Missing version key")

    print("VSC Version:", data["vsc"])
    return data

vsc_data = load_vsc("config.vsc")
print("Engine:", vsc_data["config"]["engine"])`;

const VSCPythonImplementation = () =>{
 return (<div style={{ border:'1px solid #ccc', backgroundColor:'#fff', padding:'15px' }}>
    <Highlight content={VSC_EXAMPLE_PYTHON} lang="python" />
 </div>);
};

export default VSCPythonImplementation;