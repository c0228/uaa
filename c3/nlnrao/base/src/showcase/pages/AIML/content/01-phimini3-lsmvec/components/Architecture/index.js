import React from "react";
import { Highlight, ZoomableImage } from "e-ui-react";
import ArchitectureDiagram from "./../../assets/architecture.png";

const Architecture = () =>{
 const StepTitleCard = ({ label }) =>(<span style={{ backgroundColor:'#dddfff', padding:'5px 10px', boxShadow:'2px 2px 2px 2px #ccc' }}><b>{label}:</b></span>);
 const StepSideHeading = ({ label }) =>(<div className="mtop5p"><u><b>{label}:</b></u></div>);
 return (<div className="mtop15p">
     <div><h4 className="blog-head"><b>Architectural Flow -</b></h4></div>
     <div><ZoomableImage src={ArchitectureDiagram} /></div>
     <div>This Architecture allows a small-context LLM (Phi-mini-3) to:</div>
     <ul>
        <li className="mtop5p">Use <b>GBs/TBs of external knowledge</b> (documents, PDFs, code, logs, etc.)</li>
        <li className="mtop5p">Maintain <b>long-term conversational memory</b></li>
        <li className="mtop5p">Decide <b>when to trust knowledge vs memory</b></li>
        <li className="mtop5p">Avoid hallucinations</li>
        <li className="mtop5p">Work <b>offline / embedded</b> using disk-based vector storage (LSM-style)</li>
     </ul>
     <div><h5 className="blog-head"><b>Steps:</b></h5></div>
     
 </div>);
};

export default Architecture;