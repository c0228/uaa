import React from "react";
import { Tab } from "e-ui-react";
import ConversionPythonImplementation from './components/convert-python-impl/index.js';
import ConversionNodeImplementation from './components/convert-node-impl/index.js';
import ConversionJavaImplementation from './components/convert-java-impl/index.js';

const EvolutionConverter = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
   <div className="mtop15p"><h2 className="blog-head"><b>Conversion scripts between XML, JSON, TOON, VSC</b></h2></div>
   <div className="mtop15p">
        <Tab menulinks={[{ id:"python", label:"Python", url:"#", component:(<ConversionPythonImplementation />) },
            { id:"nodejs", label:"NodeJS", url:"#", component:(<ConversionNodeImplementation />) },
            { id:"java", label:"Java", url:"#", component:(<ConversionJavaImplementation />) }]} />
   </div>
   <div></div>
 </div>);
};

export default EvolutionConverter;