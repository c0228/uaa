import React from "react";
import { Highlight } from "e-ui-react";

const VSC_EXAMPLE_PYTHON = ``;

const VSCPythonImplementation = () =>{
 return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
    <Highlight content={VSC_EXAMPLE_PYTHON} lang="python" />
 </div>);
};

export default VSCPythonImplementation;