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

    <Card padding={15} backgroundColor="#eee">
        <div><h4 className="blog-head"><b>Why This Works?</b></h4></div>
        <div className="mtop5p"><i>"The model does not need to remember everything — it only needs to retrieve what matters."</i></div>
        <div className="mtop5p">The architecture shifts intelligence from:</div>
        <ul>
            <li className="mtop5p"><IconStatus is={false} /> Model size</li>
            <li className="mtop5p"><IconStatus is={false} /> Huge Context Windows</li>
        </ul>
        <div>to</div> 
        <ul>
            <li className="mtop5p"><IconStatus is={true} /> Smart retrieval</li>
            <li className="mtop5p"><IconStatus is={true} /> External memory</li>
            <li className="mtop5p"><IconStatus is={true} /> Efficient context selection</li>
        </ul>
        <div className="mtop5p">This is exactly how <b>scalable, edge-friendly AI systems</b> are built.</div>
    </Card>
    
 </div>);
};

export default Introduction;