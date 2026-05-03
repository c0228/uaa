import React from "react";
import { Highlight } from "e-ui-react";
import ArchitectureDiagram from "./../../assets/architecture.png";

const ARCH_STEP_DATAINGESTION = `Raw Data
   ↓
Text Extraction & Normalization`; 

const ARCH_STEP_CHUNK = `Clean Text
   ↓
Chunking (300–800 tokens per chunk)
   ↓
Metadata Attachment
   - source
   - file name
   - section
   - timestamp`;

const ARCH_STEP_EMBGENLAYER = `Text Chunk
   ↓
Embedding Model
   ↓
Vector (e.g., 384 / 768 dimensions)`;

const ARCH_STEP_EMBVECTSTORAGE = `Vector + Metadata
   ↓
Stored on Disk (LSM-based structure)`;

const ARCH_STEP_QUERYEMBLAYER = `User Query
   ↓
Embedding Model
   ↓
Query Vector
   ↓
Similarity Search (Top-K)
   ↓
Most Relevant Chunks`;

const ARCH_STEP_ASSEMLAYERPROMPT = `Retrieved Chunks
   ↓
Context Formatter
   ↓
Optimized Prompt`;

const ARCH_STEP_ASSEMLAYERPROMPTSTRUCTURE = `System Instruction
+ Retrieved Knowledge
+ User Question`;

const ARCH_STEP_SMALLLANGMODELREASONING = `Optimized Prompt
   ↓
Phi-mini-3
   ↓
Reasoning + Answer`;

const ARCH_STEP_RESPOUTPUTLAYER = `Structured Answer
 / Explanation
 / Summary
 / Code Insight`;

const Architecture = () =>{
 const StepTitleCard = ({ label }) =>(<span style={{ backgroundColor:'#dddfff', padding:'5px 10px', boxShadow:'2px 2px 2px 2px #ccc' }}><b>{label}:</b></span>);
 const StepSideHeading = ({ label }) =>(<div className="mtop5p"><u><b>{label}:</b></u></div>);
 return (<div className="mtop15p">
     <div><h4 className="blog-head"><b>Architectural Flow</b></h4></div>
     <div className="mtop5p">A disk-backed retrieval-augmented architecture where a small language model reasons over massive datasets by dynamically 
        retrieving only the most relevant context from an embedded vector memory.</div>
     <div><Highlight content={`Small AI Brain + Large Disk-Based Memory + Smart Retrieval = Long-Context Intelligence`} lang="html" /></div>
     <div><b><u>Top-level Architectural Diagram</u>:</b></div>
     <div>
        <img src={ArchitectureDiagram} />
     </div>
     <div><h5 className="blog-head"><b>Steps:</b></h5></div>
     <ol>
        <li className="mtop15p">
            <StepTitleCard label="Data Ingestion Layer (One-Time / Incremental)" />
            <StepSideHeading label="Key Idea" />
            <div>Convert <i>everything</i> into clean, plain text.</div>
            <StepSideHeading label="Description" />
            <div>Raw data from documents, codebases, databases, and knowledge sources is 
            ingested into the system, where it is first <b>extracted, cleaned, and normalized into plain text.</b></div>
            <StepSideHeading label="Input Sources" />
            <ul>
                <li className="mtop5p">Documents (PDF, TXT, MD, DOCX)</li>
                <li className="mtop5p">Codebases (JS, TS, Python, Java, etc.)</li>
                <li className="mtop5p">Logs / Knowledge bases</li>
                <li className="mtop5p">Databases / CSV / JSON</li>
                <li className="mtop5p">Media transcripts (optional)</li>
            </ul>
            <StepSideHeading label="Flow" />
            <Highlight content={ARCH_STEP_DATAINGESTION} lang="html" />
        </li>
        <li className="mtop15p">
            <StepTitleCard label="Chunking & Preprocessing Layer" />
            <StepSideHeading label="Description" />   
            <div>This text is then <b>chunked into small, semantically meaningful pieces</b> (typically 300–800 tokens) 
            and enriched with metadata such as source, section, and timestamps.</div>
            <StepSideHeading label="Why?" />
            <div>Small models cannot consume large text blocks.</div>
            <StepSideHeading label="Flow" />
            <Highlight content={ARCH_STEP_CHUNK} lang="html" />
            <StepSideHeading label="Output" />
            <div>Thousands / millions of <b>small, meaningful text chunks</b></div>
        </li>
        <li className="mtop15p">
            <StepTitleCard label="Embedding Generation Layer" />
            <StepSideHeading label="Key Idea" />
            <div>Convert text → vectors (numerical meaning)</div>
            <StepSideHeading label="Description" />
            <div>Each chunk is passed through an <b>embedding model,</b> converting it into a 
            high-dimensional vector that captures semantic meaning.</div>
            <StepSideHeading label="Flow" />
            <Highlight content={ARCH_STEP_EMBGENLAYER} lang="html" />
            <div>You can use:</div>
            <ul>
                <li className="mtop5p">Lightweight embedding models</li>
                <li className="mtop5p">CPU-friendly models</li>
                <li className="mtop5p">Offline embeddings</li>
            </ul>
        </li>
        <li className="mtop15p">
            <StepTitleCard label="Embedded Vector Storage (AI Memory)" />
            <StepSideHeading label="Component" />
            <ul>
                <li className="mtop5p">Vector Store: <b>LSM-Vec</b></li>
            </ul>
            <StepSideHeading label="Description" />
            <div>These vectors, along with their metadata, are <b>persisted on disk inside an 
            embedded vector memory layer</b> powered by <b>LSM-Vec</b>, which acts as the system’s scalable, long-term external 
            memory capable of holding GBs or TBs of knowledge.</div>
            <StepSideHeading label="What happens?" />
            <Highlight content={ARCH_STEP_EMBVECTSTORAGE} lang="html" /> 
            <StepSideHeading label="Why LSM-Vec Works?" />
            <ul>
                <li className="mtop5p">Disk-backed (not RAM-hungry)</li>
                <li className="mtop5p">Scales to <b>GBs/TBs</b></li>
                <li className="mtop5p">Fast similarity search</li>
                <li className="mtop5p">Embedded (no server needed)</li>
            </ul>
            <div>This is your <b>external long-term memory</b></div>
        </li>
        <li className="mtop15p">
            <StepTitleCard label="User Query Flow (Runtime Begins)" />
            <StepSideHeading label="User Input" />
            <Highlight content={`User Question / Prompt`} lang="html" />
            <StepSideHeading label="Description" />
            <div>At runtime, when a user submits a query, the query text is <b>converted into an 
            embedding using the same embedding model,</b> producing a query vector.</div>
            <div><b>Example:</b></div>
            <div><i>“Explain how authentication works in my backend code”</i></div>
        </li>
        <li className="mtop15p">
            <StepTitleCard label="Query Embedding Layer & Semantic Retrieval Layer (RAG Core)" />
            <StepSideHeading label="Description" />
            <div>This query vector is used to perform a <b>semantic similarity search</b> against the 
            stored vectors, retrieving only the <b>top-K most relevant chunks</b> from the entire knowledge base.</div>
            <StepSideHeading label="Flow" />
            <Highlight content={ARCH_STEP_QUERYEMBLAYER} lang="html" />
            <div>This vector represents the <i>intent</i> of the question.</div>
            <div><b>Typical:</b></div>
            <ul>
                <li className="mtop5p">Top 3–10 chunks</li>
                <li className="mtop5p">Ranked by cosine similarity</li>
            </ul>
            <div>Instead of loading GBs of data, you retrieve <b>only what matters</b></div>
        </li>
        <li className="mtop15p">
            <StepTitleCard label="Context Assembly Layer (Prompt Engineering)" />
            <StepSideHeading label="Description" />
            <div>The retrieved chunks are then <b>assembled into a compact, high-signal context,</b> combined 
            with system instructions and the user’s question to form an optimized prompt that fits within the 
            model’s limited context window.</div>
            <StepSideHeading label="Flow" />
            <Highlight content={ARCH_STEP_ASSEMLAYERPROMPT} lang="html" />
            <StepSideHeading label="Prompt Structure" />
            <Highlight content={ARCH_STEP_ASSEMLAYERPROMPTSTRUCTURE} lang="html" />
            <div>This keeps the prompt:</div>
            <ul>
                <li className="mtop5p">Small</li>
                <li className="mtop5p">High-signal</li>
                <li className="mtop5p">Model-friendly</li>
            </ul>
        </li>
        <li className="mtop15p">
            <StepTitleCard label="Small Language Model Reasoning" />
            <StepSideHeading label="AI Model" />
            <ul>
                <li className="mtop5p">Microsoft Phi-mini-3</li>
            </ul>
            <StepSideHeading label="Description" />
            <div>This prompt is sent to the <b>small language model, Microsoft Phi-mini-3,</b> which performs 
            reasoning <b>only over the retrieved context,</b> not the entire dataset. The model generates a 
            response — such as an explanation, summary, or code insight—effectively 
            behaving as if it had access to massive knowledge, even though it only processed a small, curated slice.</div>
            <StepSideHeading label="Flow" />
            <Highlight content={ARCH_STEP_SMALLLANGMODELREASONING} lang="html" />
            <div>The Model:</div>
            <ul>
                <li className="mtop5p">Does NOT store all knowledge</li>
                <li className="mtop5p">Reasons only over retrieved context</li>
                <li className="mtop5p">Behaves like a “long-context” model</li>
            </ul>
        </li>
        <li className="mtop15p">
            <StepTitleCard label="Response Output Layer" />
            <StepSideHeading label="Description" />
            <div>Finally, the response is returned to the user, optionally with references to source chunks, 
            and the system can (optionally) store new insights back into the vector memory for future retrieval — closing the 
            loop.</div>
            <StepSideHeading label="Final Output" />
            <Highlight content={ARCH_STEP_RESPOUTPUTLAYER} lang="html" />
            <div>Optional:</div>
            <ul>
                <li className="mtop5p">Citations (which chunk / file)</li>
                <li className="mtop5p">Confidence score</li>
                <li className="mtop5p">Follow-up suggestions</li>
            </ul>
        </li>
        <li className="mtop15p">
            <StepTitleCard label="Optional Enhancements (Advanced)" />
            <StepSideHeading label="Feedback Loop" />
            <ul>
                <li className="mtop5p">Store successful answers</li>
                <li className="mtop5p">Improve retrieval quality</li>
            </ul>
            <StepSideHeading label="Memory Writing" />
            <ul>
                <li className="mtop5p">Save new insights back into vector store</li>
            </ul>
            <StepSideHeading label="Multi-Hop Retrieval" />
            <ul>
                <li className="mtop5p">Query → retrieve → refine → retrieve again</li>
            </ul>
            <StepSideHeading label="Agent Mode" />
            <ul>
                <li className="mtop5p">Planner → Retriever → Reasoner → Verifier</li>
            </ul>
        </li>
     </ol>
 </div>);
};

export default Architecture;