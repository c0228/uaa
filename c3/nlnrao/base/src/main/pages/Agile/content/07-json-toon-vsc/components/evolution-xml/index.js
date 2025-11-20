import React from "react";
import { Tab, Card, Highlight } from "e-ui-react";
import XMLPythonImplementation from './components/xml-python-impl/index.js';
import XMLNodeImplementation from './components/xml-node-impl/index.js';
import XMLJavaImplementation from './components/xml-java-impl/index.js';

const XML_EXAMPLE_DATA = `<engine>
    <name>OrderProcessor</name>
    <version>1.0</version>
    <settings enabled="true">
        <retry attempts="3" delay="5"/>
    </settings>
</engine>`;

const EvolutionXML = () =>{
 return (<div>
   <div className="mtop15p"><h4 className="blog-head"><b>1. XML (Extensible Markup Language)</b></h4></div>
   <div>
      <Card padding={15}>
         <div><h5><b>What is XML?</b></h5></div>
         <div>XML was one of the earliest structured formats used for data storage and communication. It’s verbose, but extremely 
            powerful because it supports:</div>
         <div>
            <ul>
               <li className="mtop5p">strict validation (XSD)</li>
               <li className="mtop5p">hierarchical data</li>
               <li className="mtop5p">metadata via attributes</li>
               <li className="mtop5p">compatibility with enterprise/legacy systems</li>
            </ul>
         </div>
         <div className="mtop5p"><h5><b>XML Example:</b></h5></div>
         <div className="mtop5p">
            <Highlight content={XML_EXAMPLE_DATA} lang="html" />
         </div>
         <div className="mtop15p">
            <Tab menulinks={[{ id:"python", label:"Python", url:"#", component:(<XMLPythonImplementation />) },
                  { id:"nodejs", label:"NodeJS", url:"#", component:(<XMLNodeImplementation />) },
                  { id:"java", label:"Java", url:"#", component:(<XMLJavaImplementation />) }]} />
         </div>
      </Card>
   </div>
 </div>);
};

export default EvolutionXML;