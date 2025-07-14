import React from "react";
import { Tab, Highlight } from "e-ui-react";

const EXAMPLE_REACT = ``;

const EXAMPLE_ANGULAR_COMPONENT = ``;

const EXAMPLE_ANGULAR_HTML = ``;

const EXAMPLE_VUE = ``;

const Example = () =>{

const ReactCode = ()=>{
 return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
    <div align="center" className="mtop5p"><h5 className="blog-head"><b></b></h5></div>
    <div className="mtop5p"><Highlight content={EXAMPLE_REACT} lang="javascript" /></div>
 </div>);
};

const AngularCode = ()=>{
 return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
    <div align="center" className="mtop5p"><h5 className="blog-head"><b></b></h5></div>
    <div className="mtop5p"><Highlight content={EXAMPLE_ANGULAR_COMPONENT} lang="javascript" /></div>
    <div align="center" className="mtop5p"><b></b></div>
    <div className="mtop5p"><Highlight content={EXAMPLE_ANGULAR_HTML} lang="javascript" /></div>
    <div align="center" className="mtop5p"><b></b></div>
 </div>);
};

const VueCode = ()=>{
 return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
    <div align="center" className="mtop5p"><b></b></div>
    <div className="mtop5p"><Highlight content={EXAMPLE_VUE} lang="javascript" /></div>
 </div>);
};

 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Example</b></h2></div>
    <div className="mtop15p">
        <Tab menulinks={[{ id:"react", label:"React", url:"#", component:(<ReactCode />) },
            { id:"angular", label:"Angular", url:"#", component:(<AngularCode />) },
            { id:"vue", label:"Vue", url:"#", component:(<VueCode />) }]} />
    </div>
 </div>);
};

export default Example;