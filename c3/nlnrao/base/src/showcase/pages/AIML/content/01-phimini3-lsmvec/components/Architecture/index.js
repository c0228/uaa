import React from "react";
import { Highlight } from "e-ui-react";
import ArchitectureDiagram from "./../../assets/architecture.png";

const Architecture = () =>{
 return (<div className="mtop15p">
     <div><h4 className="blog-head"><b><u>Architectural Flow</u> -</b></h4></div>
     <div>
        {/*<a href={ArchitectureDiagram} target="_blank" rel="noopener noreferrer"> */}
            <img src={ArchitectureDiagram} />
        {/*</a>*/}
     </div>
     <div className="mtop5p">
        <div>This is an <b>end-to-end architecture</b> for an AI system that combines:</div>
        <ol>
            <li className="mtop5p"><b>Layer #1: Retrieval-Augmented Generation (RAG) –</b> grounding answers in external knowledge.</li>
            <li className="mtop5p"><b>Layer #2: Conversational Memory –</b> storing and retrieving past interactions.</li>
            <li className="mtop5p"><b>Layer #3: Security & Access Control –</b> per-user isolation.</li>
            <li className="mtop5p"><b>Layer #4: Conflict Resolution –</b> handling contradictions between knowledge and memory.</li>
            <li className="mtop5p"><b>Layer #5: Generation (Phi-mini-3 + Tools) –</b> LLM Working point</li>
            <li className="mtop5p"><b>Layer #6: Feedback Loop –</b> continuous improvement.</li>
        </ol>
     </div>
     <div>This Architecture allows a small-context LLM (Phi-mini-3) to:</div>
     <ul>
        <li className="mtop5p">Use <b>GBs/TBs of external knowledge</b> (documents, PDFs, code, logs, etc.)</li>
        <li className="mtop5p">Maintain <b>long-term conversational memory</b></li>
        <li className="mtop5p">Decide <b>when to trust knowledge vs memory</b></li>
        <li className="mtop5p">Avoid hallucinations</li>
        <li className="mtop5p">Work <b>offline / embedded</b> using disk-based vector storage (LSM-style)</li>
     </ul>
 </div>);
};

export default Architecture;