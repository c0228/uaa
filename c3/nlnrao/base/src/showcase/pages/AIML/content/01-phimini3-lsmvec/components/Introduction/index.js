import React from "react";
import { Card, Icon } from "e-ui-react";

const Introduction = () =>{
 const IconStatus = ({ is }) =><Icon type="FontAwesome" name={is?"fa-check":"fa-times"} color={is?"green":"red"} style={{ marginRight:'5px' }} />
 return (<div>
    <div>This project focuses on designing an <b>offline-capable, resource-efficient AI system</b> where 
    a <b>Small Language Model (SLM)</b> can effectively work with <b>very large knowledge bases (GBs to TBs of data),</b> even 
    though the model itself has a <b>small context window.</b></div>
    <div>To acheive this, the system combines:</div>
    <ul>
        <li className="mtop5p"><b>AI Model:</b> <code><b>Microsoft Phi-mini-3</b></code> (Used for reasoning and generation)</li>
        <li className="mtop5p"><b>Embedded Vector Search Layer:</b> <code><b>LSM-Vec</b></code> (Used to generate vector embeddings for semantic retrieval)</li>
    </ul>
    <div>Using an <b>embedded Retrieval-Augmented Generation (RAG) architecture,</b> the system avoids loading massive 
    data into the prompt. Instead, it:</div>
    <ol>
        <li className="mtop5p"><b>Chunks and embeds</b> large datasets</li>
        <li className="mtop5p"><b>Stores embeddings locally</b> using an efficient, disk-friendly vector structure</li>
        <li className="mtop5p"><b>Retrieves only the most relevant context</b> at query time</li>
        <li className="mtop5p"><b>Feeds minimal, high-signal context</b> to the small model for reasoning and generation</li>
    </ol>
    <div>This enables <b>long-context simulation,</b> where a small-context model behaves as if it has access to massive 
    external memory.</div>
    
 </div>);
};

export default Introduction;