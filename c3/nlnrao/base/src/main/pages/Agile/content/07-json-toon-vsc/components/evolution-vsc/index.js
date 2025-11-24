import React from "react";
import { Tab, Card, Highlight } from "e-ui-react";
import VSCPythonImplementation from './components/vsc-python-impl/index.js';
import VSCNodeImplementation from "./components/vsc-node-impl/index.js";
import VSCJavaImplementation from "./components/vsc-java-impl/index.js";

const VSC_EXAMPLE_DATA = `vsc: 2.0

meta:
  author: "LNRao"
  last_updated: "2025-01-21"

config:
  engine: PaymentEngine
  mode: production

retry:
  attempts: 3
  delay: "5s"

imports:
  - "./fraud.vsc"
  - "./bank_rules.vsc"`;

const EvolutionVSC = () =>{
 return (<div>
   <div className="mtop15p"><h4 className="blog-head"><b>4. VSC (Versioned Structured Config)</b></h4></div>
   <div>
      <Card padding={15} backgroundColor="#f8f8f8">
         <div><h5><b>What is VSC?</b></h5></div>
         <div>
            VSC — Versioned Structured Config — is designed for large, evolving systems. It focuses on:
            <ul>
                <li>versioning inside the config</li>
                <li>modular imports</li>
                <li>strict schema structure</li>
                <li>future-proofing configurations</li>
            </ul>
            VSC is powerful for microservices, ML pipelines, and enterprise platforms where configurations may change over time.
         </div>
         <div className="mtop5p"><h5><b>VSC Example:</b></h5></div>
         <div className="mtop5p">
            <Highlight content={VSC_EXAMPLE_DATA} lang="javascript" />
         </div>
         <div className="mtop15p">
            <Tab menulinks={[{ id:"python", label:"Python", url:"#", component:(<VSCPythonImplementation />) },
                  { id:"nodejs", label:"NodeJS", url:"#", component:(<VSCNodeImplementation />) },
                  { id:"java", label:"Java", url:"#", component:(<VSCJavaImplementation />) }]} />
         </div>
      </Card>
   </div>
 </div>);
};

export default EvolutionVSC;