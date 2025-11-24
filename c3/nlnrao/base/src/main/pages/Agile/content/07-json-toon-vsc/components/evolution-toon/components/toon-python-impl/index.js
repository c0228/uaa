import React from "react";
import { Highlight } from "e-ui-react";

const TOON_EXAMPLE_PYTHON = ``;

const TOONPythonImplementation = () =>{
 return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
    <Highlight content={TOON_EXAMPLE_PYTHON} lang="python" />
 </div>);
};

export default TOONPythonImplementation;