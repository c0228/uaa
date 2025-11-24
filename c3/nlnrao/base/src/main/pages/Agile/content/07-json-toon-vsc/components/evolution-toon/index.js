import React from "react";
import { Tab, Card, Highlight } from "e-ui-react";
import TOONPythonImplementation from './components/toon-python-impl/index.js';
import TOONNodeImplementation from "./components/toon-node-impl/index.js";
import TOONJavaImplementation from "./components/toon-java-impl/index.js";

const TOON_EXAMPLE_DATA = `engine:
  name: LoginEngine
  version: 2.1

steps:
  - start
  - validate_user
  - check_history
  - predict_behavior

rules:
  country: "IN"
  min_age: 18`;

const EvolutionTOON = () =>{
 return (<div>
   <div className="mtop15p"><h4 className="blog-head"><b>3. TOON (Flexible Rule-Based Config Format)</b></h4></div>
   <div>
      <Card padding={15} backgroundColor="#f8f8f8">
         <div><h5><b>What is TOON?</b></h5></div>
         <div>
            TOON is a flexible, human-friendly config style used in rule engines, automation flows, and ML decision systems.<br/>
            It looks like YAML but is designed for writing:
            <ul>
                <li>rules</li>
                <li>steps</li>
                <li>workflows</li>
                <li>decisions</li>
            </ul>
            It supports comments and flexible nesting—something JSON lacks.
         </div>
         <div className="mtop5p"><h5><b>TOON Example:</b></h5></div>
         <div className="mtop5p">
            <Highlight content={TOON_EXAMPLE_DATA} lang="javascript" />
         </div>
         <div className="mtop15p">
            <Tab menulinks={[{ id:"python", label:"Python", url:"#", component:(<TOONPythonImplementation />) },
                  { id:"nodejs", label:"NodeJS", url:"#", component:(<TOONNodeImplementation />) },
                  { id:"java", label:"Java", url:"#", component:(<TOONJavaImplementation />) }]} />
         </div>
      </Card>
   </div>
 </div>);
};

export default EvolutionTOON;