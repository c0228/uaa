import React from "react";
import { Tab, Card, Highlight } from "e-ui-react";
import JSONPythonImplementation from './components/json-python-impl/index.js';
import JSONNodeImplementation from "./components/json-node-impl/index.js";
import JSONJavaImplementation from "./components/json-java-impl/index.js";

const JSON_EXAMPLE_DATA = `{
  "engine": "OrderProcessor",
  "version": 1.0,
  "settings": {
    "enabled": true,
    "retry": { "attempts": 3, "delay": 5 }
  }
}`;

const EvolutionJSON = () =>{
 return (<div>
   <div className="mtop15p"><h4 className="blog-head"><b>2. JSON (JavaScript Object Notation)</b></h4></div>
   <div>
      <Card padding={15}>
         <div><h5><b>What is JSON?</b></h5></div>
         <div>
            JSON rose to popularity because it’s simple, clean, and human-readable. It became the default 
            format for APIs, web apps, and lightweight configurations.
         </div>
         <div className="mtop5p"><h5><b>JSON Example:</b></h5></div>
         <div className="mtop5p">
            <Highlight content={JSON_EXAMPLE_DATA} lang="javascript" />
         </div>
         <div className="mtop15p">
            <Tab menulinks={[{ id:"python", label:"Python", url:"#", component:(<JSONPythonImplementation />) },
                  { id:"nodejs", label:"NodeJS", url:"#", component:(<JSONNodeImplementation />) },
                  { id:"java", label:"Java", url:"#", component:(<JSONJavaImplementation />) }]} />
         </div>
      </Card>
   </div>
 </div>);
};

export default EvolutionJSON;