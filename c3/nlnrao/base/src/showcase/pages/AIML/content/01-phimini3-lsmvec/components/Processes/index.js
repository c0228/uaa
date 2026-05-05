import React from "react";
import { Accordian, Highlight } from "e-ui-react";
import RawDataIngestionImage from "./../../assets/01-rawdata-cleantext.png";

const RawDataIngestion = () =>{
    return (<div>
        <div className="mtop10p">
            <div className="mtop5p"><b><u>Role</u>:</b> Foundation layer – garbage in, garbage out. All downstream quality depends on this step</div>
            <div className="mtop5p"><b><u>Inputs</u>:</b> Raw files or data streams (PDF, DOCX, HTML, TXT, JSON, CSV, etc.)</div>
            <div className="mtop5p"><b><u>Outputs</u>:</b>  Normalized clean text with source provenance preserved</div>
            <div className="mtop5p"><b><u>Working process</u>:</b> The process of importing source documents (PDFs, Word files, 
                web pages, emails, databases, etc.) into the system and preparing them for transformation into searchable knowledge.</div>
            <div className="mtop5p">Raw Data → Clean Text is a format-aware, structure-preserving, noise-removal 
            pipeline that converts human-oriented documents into AI-ready semantic text without losing meaning.</div>
            <img src={RawDataIngestionImage} style={{ width:'350px', height:'auto' }} />
        </div>
        <div className="list-group">
            <div className="list-group-item mtop5p">
                <div><h5 className="blog-head"><b>What  it does?</b></h5></div>
                <ul>
                    <li className="mtop5p">User uploads documents (PDFs, Word, text files, web pages, etc.)</li>
                    <li className="mtop5p">System extracts Raw text</li>
                    <li className="mtop5p">Normalizes formatting (removes extra spaces, fixes line breaks, standardizes Unicode)</li>
                    <li className="mtop5p">Cleans the text</li>
                </ul>
            </div>
            <div className="list-group-item">
                <div><h5 className="blog-head"><b>Why needed?</b></h5></div>
                <div>Raw documents contain garbage (headers, footers, page numbers, weird fonts). Without cleaning, 
                    the AI reads noise and produces garbage answers.</div>
            </div>
            <div className="list-group-item">
                <div><h5 className="blog-head"><b>What happens without it?</b></h5></div>
                <ul>
                    <li className="mtop5p">AI answers based on "Page 3 of 42" as if it's meaningful content</li>
                    <li className="mtop5p">Inconsistent spacing breaks chunk boundaries</li>
                    <li className="mtop5p">Special characters crash the embedding model</li>
                </ul>
            </div>
        </div>
    </div>);
};

const ChunkingMetaData = () =>{
 return (<div className="mtop5p">
    <div className="mtop5p"><b><u>Role</u>:</b> Enables precise retrieval by breaking documents into retrievable units while maintaining context lineage.</div>
    <div className="mtop5p"><b><u>Inputs</u>:</b> Normalized clean text + source metadata</div>
    <div className="mtop5p"><b><u>Outputs</u>:</b> List of chunks, each with embedded metadata and original text</div>
    <div className="mtop5p"><b><u>Working process</u>:</b> The process of splitting long, normalized text into smaller, semantically cohesive segments (chunks) 
        and attaching descriptive metadata to each chunk.</div>
    <div className="list-group mtop15p">
        <div className="list-group-item">
            <div><h5 className="blog-head"><b>What it does?</b></h5></div>
            <ul>
                <li className="mtop5p">Clean text split into <b>chunks of 300–800 tokens</b> (~200–600 words)</li>
                <li className="mtop5p">Each chunk gets metadata: source filename, timestamp, page number, user ID</li>
                <li className="mtop5p">Chunks stored temporarily before embedding</li>
            </ul>
        </div>
        <div className="list-group-item">
            <div><h5 className="blog-head"><b>Why needed?</b></h5></div>
            <div className="mtop15p">Embedding models have max token limits (typically 512 or 8192). A 100-page PDF can't fit in 
                one vector. Chunking ensures each chunk is small enough to embed and precise enough to retrieve.</div>
        </div>
        <div className="list-group-item">
            <div><h5 className="blog-head"><b>Why 300–800 tokens?</b></h5></div>
            <ul>
                <li className="mtop5p">&lt;300: too little context, answer will be shallow</li>
                <li className="mtop5p">800: includes irrelevant information, dilutes semantic meaning</li>
                <li className="mtop5p">Sweet spot: captures a coherent paragraph or two</li>
            </ul>
        </div>
        <div className="list-group-item">
            <div><h5 className="blog-head"><b>What happens without chunking?</b></h5></div>
            <ul>
                <li className="mtop5p">Long documents get truncated (lose conclusion)</li>
                <li className="mtop5p">Or model throws "max token exceeded" error</li>
                <li className="mtop5p">Retrieval becomes useless (one giant vector matches everything)</li>
            </ul>
        </div>
    </div>
 </div>);
};

const EmbeddingVectorCreation = () =>{
 return (<div className="mtop5p">
    <div className="mtop5p"><b><u>Role</u>:</b> The core enabling technology for semantic search. Without embedding, only keyword matching is possible.</div>
    <div className="mtop5p"><b><u>Inputs</u>:</b> Text chunks (300–800 tokens each)</div>
    <div className="mtop5p"><b><u>Outputs</u>:</b> Vector embeddings (array of floats, e.g., 384 dimensions)</div>
    <div className="mtop5p"><b><u>Working process</u>:</b> The process of converting human-readable text chunks into dense numerical vectors 
    (arrays of floating-point numbers) that capture semantic meaning.</div>
    <div className="list-group mtop15p">
        <div className="list-group-item">
            <div><h5 className="blog-head"><b>What happens?</b></h5></div>
            <ul>
                <li className="mtop5p">Each chunk passes through an <b>embedding model</b> (e.g., all-MiniLM-L6-v2, BGE-small)</li>
                <li className="mtop5p">Model outputs a vector: array of floating-point numbers (384 or 768 dimensions)</li>
                <li className="mtop5p">Vector = semantic fingerprint of the text</li>
            </ul>
        </div>
        <div className="list-group-item">
            <div><h5 className="blog-head"><b>Why needed?</b></h5></div>
            <div className="mtop5p">Computers don't understand "meaning." But they can do math on vectors. Similar meanings produce 
                vectors that are "close" in mathematical space (high cosine similarity).</div>
        </div>
        <div className="list-group-item">
            <div><h5 className="blog-head"><b>What happens without embedding?</b></h5></div>
            <ul>
                <li className="mtop5p">Can't do semantic search</li>
                <li className="mtop5p">Would have to use keyword search (fails on synonyms: "car" vs "automobile")</li>
                <li className="mtop5p">Retrieval quality collapses</li>
            </ul>
        </div>
    </div>
 </div>);
};

const VectorStorageKnowledgeBase = () =>{
    return (<div className="mtop5p">
    <div className="mtop5p"><b><u>Role</u>:</b> The long-term knowledge repository. Without it, every search requires O(n) brute-force, making large-scale retrieval impossible.</div>
    <div className="mtop5p"><b><u>Inputs</u>:</b> Vectors + metadata + original text</div>
    <div className="mtop5p"><b><u>Outputs</u>:</b> Persistent indexed vector store with search capability</div>
    <div className="mtop5p"><b><u>Working process</u>:</b> A persistent, disk-based database optimized for storing millions of vectors and performing fast 
        Approximate Nearest Neighbor (ANN) searches.</div>
    <div className="list-group mtop15p">
        <div className="list-group-item">
            <div><h5 className="blog-head"><b>What happens?</b></h5></div>
            <ul>
                <li className="mtop5p">Vectors + metadata + original text stored in <b>LSM-based vector store</b></li>
                <li className="mtop5p">Stored on disk (not just RAM) → persistent</li>
                <li className="mtop5p">LSM structure = optimized for fast approximate nearest neighbor (ANN) search</li>
            </ul>
        </div>
        <div className="list-group-item">
            <div><h5 className="blog-head"><b>Why needed?</b></h5></div>
            <div>At query time, you have to compare the query vector against millions of chunks. Brute-force comparison is 
                impossible in real time. LSM + ANN indexes make this fast (milliseconds vs seconds/minutes).</div>
        </div>
        <div className="list-group-item">
            <div><h5 className="blog-head"><b>What happens without LSM/ANN?</b></h5></div>
            <ul>
                <li className="mtop5p">Search takes 10+ seconds per query (unusable for chat)</li>
                <li className="mtop5p">Or system uses brute-force on every query → O(n) time, fails at scale</li>
                <li className="mtop5p">Or stores in RAM only → cannot handle &gt;100K documents</li>
            </ul>
        </div>
    </div>
    </div>);
};

const UserQueryArrives = () =>{
    return (<div className="mtop5p">
    <div className="mtop5p"><b><u>Role</u>:</b> Bridges user intent into the vector space. Without this, similarity comparison is impossible.</div>
    <div className="mtop5p"><b><u>Inputs</u>:</b> Raw user text (e.g., "What did the CEO say about Q3 earnings?")</div>
    <div className="mtop5p"><b><u>Outputs</u>:</b> Query vector (float array, same dimensions as chunk vectors)</div>
    <div className="mtop5p"><b><u>Working process</u>:</b> The entry point of a user interaction, where natural language input is received, 
        preprocessed, and converted into a query vector.</div>
    <div className="list-group mtop15p">
        <div className="list-group-item">
            <div><h5 className="blog-head"><b>What happens?</b></h5></div>
            <ul>
                <li className="mtop5p">User types: <i>"What did the CEO say about Q3 earnings?"</i></li>
                <li className="mtop5p">Query is embedded using same embedding model</li>
                <li className="mtop5p">Query vector produced</li>
            </ul>
        </div>
        <div className="list-group-item">
            <div><h5 className="blog-head"><b>Why needed?</b></h5></div>
            <div className="mtop5p">The query must live in the same semantic vector space as your chunks. Same 
                model = comparable vectors.</div>
        </div>
        <div className="list-group-item">
            <div><h5 className="blog-head"><b>What happens without query embedding?</b></h5></div>
            <ul>
                <li className="mtop5p">Can't do similarity search at all</li>
                <li className="mtop5p">System has no idea what the user wants</li>
            </ul>
        </div>
    </div>
    </div>);
};

const SecurityAccessControlFilter = () =>{
  return (<div className="mtop5p">
    <div className="mtop5p"><b><u>Role</u>:</b> Prevents cross-user data leakage. Without it, multi-tenant systems are 
        impossible and data breaches are guaranteed.</div>
    <div className="mtop5p"><b><u>Inputs</u>:</b> User identity + permission policy</div>
    <div className="mtop5p"><b><u>Outputs</u>:</b> Query with security predicate attached</div>
    <div className="mtop5p"><b><u>Working process</u>:</b> A permission enforcement layer that ensures only authorized 
        chunks can be retrieved for the current user, applied before any search executes.</div>
    <div className="list-group mtop15p">
        <div className="list-group-item">
            <div><h5 className="blog-head"><b>What happens?</b></h5></div>
            <ul>
                <li className="mtop5p">System identifies user ID (from auth token)</li>
                <li className="mtop5p">Filter attaches user's permission policy</li>
                <li className="mtop5p">Filter tags: <i>"Only retrieve chunks where source.user_id = current_user 
                    OR source.public = true"</i></li>
            </ul>
        </div>
        <div className="list-group-item">
            <div><h5 className="blog-head"><b>Why needed?</b></h5></div>
            <div className="mtop5p">Without this, User A could retrieve User B's confidential documents. 
                Vector stores don't inherently know about permissions.</div>
        </div>
        <div className="list-group-item">
            <div><h5 className="blog-head"><b>What happens without security filter?</b></h5></div>
            <ul>
                <li className="mtop5p">Complete data leak</li>
                <li className="mtop5p">Employee sees HR files about their own termination</li>
                <li className="mtop5p">Legal nightmare (GDPR, HIPAA violations)</li>
                <li className="mtop5p">No multi-tenant SaaS possible</li>
            </ul>
        </div>
    </div>
  </div>);  
};

const ParallelRetreivalKPath = () =>{
  return (<div className="mtop5p">
    <div className="mtop5p"><b><u>Role</u>:</b> Provides factual grounding from source documents. This is the R in RAG 
        (Retrieval-Augmented Generation).</div>
    <div className="mtop5p"><b><u>Inputs</u>:</b> Query vector + security predicate + K value</div>
    <div className="mtop5p"><b><u>Outputs</u>:</b> Top-K knowledge chunks (text + metadata + similarity scores)</div>
    <div className="mtop5p"><b><u>Working process</u>:</b> The process of searching the static knowledge vector 
        store to find the most semantically relevant document chunks for the user's query.</div>
    <div className="list-group mtop15p">
        <div className="list-group-item">
            <div><h5 className="blog-head"><b>What happens?</b></h5></div>
            <ul>
                <li className="mtop5p">Query vector searches the <b>Knowledge Vector Store</b></li>
                <li className="mtop5p">ANN algorithm finds Top-K most similar chunks (K typically 5–20)</li>
                <li className="mtop5p">Optional heuristic re-ranker improves results (e.g., boosts chunks 
                    with recent timestamps or from authoritative sources)</li>
            </ul>
        </div>
        <div className="list-group-item">
            <div><h5 className="blog-head"><b>Why needed?</b></h5></div>
            <div className="mtop5p">Retrieve factual grounding from your documents. This is the <b>R</b> in RAG.</div>
        </div>
        <div className="list-group-item">
            <div><h5 className="blog-head"><b>What happens without Knowledge retrieval?</b></h5></div>
            <ul>
                <li className="mtop5p">AI hallucinates answers (makes things up)</li>
                <li className="mtop5p"><i><u>Example</u></i>: Asks about Q3 earnings → AI says "$5.2 billion" (totally made up)</li>
                <li className="mtop5p">No traceability (can't cite source)</li>
            </ul>
        </div>
    </div>
  </div>);
};

const ParallelRetreivalMPath = () =>{
 return (<div className="mtop5p">
    <div className="mtop5p"><b><u>Role</u>:</b> Enables conversational continuity, pronoun resolution, user preference learning, 
        and contextual awareness across sessions.</div>
    <div className="mtop5p"><b><u>Inputs</u>:</b> Query vector + security predicate + M value</div>
    <div className="mtop5p"><b><u>Outputs</u>:</b> Top-M past conversations (queries, answers, timestamps, importance)</div>
    <div className="mtop5p"><b><u>Working process</u>:</b> The process of searching the conversational memory store to find 
        the most semantically relevant past interactions for the current query.</div>
    <div className="list-group mtop15p">
        <div className="list-group-item">
            <div><h5 className="blog-head"><b>What happens?</b></h5></div>
            <ul>
                <li className="mtop5p">Query vector searches the <b>Conversational Memory Vector Store</b></li>
                <li className="mtop5p">Retrieves Top-M past interactions (M typically 3–10)</li>
                <li className="mtop5p">Each memory includes: previous query, previous answer, timestamp, importance score</li>
            </ul>
        </div>
        <div className="list-group-item">
            <div><h5 className="blog-head"><b>Why needed?</b></h5></div>
            <div className="mtop5p">Remember what was discussed 5 minutes ago, yesterday, or last week. Handles:</div>
            <ul>
                <li className="mtop5p"><i>"And what about the other product?"</i> (needs "other product" resolved from history)</li>
                <li className="mtop5p">User preferences: <i>"Last time you recommended verbose answers. Continue that."</i></li>
            </ul>
        </div>
        <div className="list-group-item">
            <div><h5 className="blog-head"><b>What happens without Memory retrieval?</b></h5></div>
            <ul>
                <li className="mtop5p">Every conversation starts blank</li>
                <li className="mtop5p">User repeats themselves constantly</li>
                <li className="mtop5p">Can't handle references or pronouns</li>
                <li className="mtop5p">Feels like talking to a stranger every time</li>
            </ul>
        </div>
    </div>
 </div>);
};

const MemoryRankingScoring = () =>{
  return (<div className="mtop5p">
    <div className="mtop5p"><b><u>Role</u>:</b> Prevents old or trivial memories from polluting context, ensuring the most valuable interactions surface.</div>
    <div className="mtop5p"><b><u>Inputs</u>:</b> Raw Top-M memories with initial similarity scores</div>
    <div className="mtop5p"><b><u>Outputs</u>:</b> Re-ranked Top-M memories ordered by (semantic + recency + importance)</div>
    <div className="mtop5p"><b><u>Working process</u>:</b> A secondary scoring and prioritization mechanism applied specifically to retrieved memories, 
        combining semantic similarity with recency and importance signals.</div>
    <div className="list-group mtop15p">
        <div className="list-group-item">
            <div><h5 className="blog-head"><b>What happens?</b></h5></div>
            <ul>
                <li className="mtop5p">Retrieved memories are re-scored using: <b>Semantic + Recency + Importance</b></li>
                <li className="mtop5p">Recency: recent conversations get higher scores</li>
                <li className="mtop5p">Importance: user explicitly starred? mentioned key terms? system learned it's important?</li>
                <li className="mtop5p">Heuristic re-ranker produces final ranked list</li>
            </ul>
        </div>
        <div className="list-group-item">
            <div><h5 className="blog-head"><b>Why needed?</b></h5></div>
            <div className="mtop5p">Raw similarity might return a relevant but 3-month-old conversation. Recent context is usually 
                more relevant. Importance prevents important memories from being drowned out by trivial ones.</div>
        </div>
        <div className="list-group-item">
            <div><h5 className="blog-head"><b>What happens without ranking?</b></h5></div>
            <ul>
                <li className="mtop5p">Old, irrelevant memories pollute context</li>
                <li className="mtop5p">System might prioritize a casual "hello" over a critical instruction</li>
                <li className="mtop5p">Context window fills with garbage → AI confused</li>
            </ul>
        </div>
    </div>
  </div>);
};

const SecurityAccessControlFilter2 = () =>{
 return (<div className="mtop5p">
    <div className="mtop5p"><b><u>Role</u>:</b> Defense in depth. Catches retrieval errors, ANN approximation mistakes, or 
        metadata corruption that bypassed the first filter. Last line of defense before LLM sees data.</div>
    <div className="mtop5p"><b><u>Inputs</u>:</b> Retrieved knowledge chunks + retrieved memories + user permission policy</div>
    <div className="mtop5p"><b><u>Outputs</u>:</b> Filtered, security-validated knowledge chunks and memories</div>
    <div className="mtop5p"><b><u>Working process</u>:</b> A second permission enforcement layer applied after retrieval, 
        validating each retrieved item before it enters the context manager.</div>
    <div className="list-group mtop15p">
        <div className="list-group-item">
            <div><h5 className="blog-head"><b>What happens?</b></h5></div>
            <ul>
                <li className="mtop5p">Retrieved knowledge chunks and memories both pass through security filter again</li>
                <li className="mtop5p">Any chunk/memory user shouldn't see is dropped</li>
            </ul>
        </div>
        <div className="list-group-item">
            <div><h5 className="blog-head"><b>Why needed (second check)?</b></h5></div>
            <div className="mtop5p">Defense in depth. First filter stopped retrieval. Second filter catches any 
                slip-through (e.g., ANN approximation errors, re-ranking that ignored permissions, or a chunk that had 
                wrong metadata).</div>
        </div>
        <div className="list-group-item">
            <div><h5 className="blog-head"><b>What happens without second filter?</b></h5></div>
            <ul>
                <li className="mtop5p">Single bug in retrieval exposes data</li>
                <li className="mtop5p">No safety net</li>
            </ul>
        </div>
    </div>
 </div>);
};

const ConflictResolutionLayer = () =>{
 return (<div className="mtop5p">
    <div className="mtop5p"><b><u>Role</u>:</b> Prevents contradictory outputs that destroy user trust. Ensures factual accuracy while respecting user preferences.</div>
    <div className="mtop5p"><b><u>Inputs</u>:</b> Filtered knowledge chunks + filtered memories</div>
    <div className="mtop5p"><b><u>Outputs</u>:</b> Conflict-resolved context (knowledge preferred for facts, memory preferred for user context)</div>
    <div className="mtop5p"><b><u>Working process</u>:</b> A decision engine that detects and resolves contradictions between knowledge (facts from documents) and 
        memory (past conversations), applying deterministic rules to choose the authoritative source.</div>
    <div className="list-group mtop15p">
        <div className="list-group-item">
            <div><h5 className="blog-head"><b>What happens?</b></h5></div>
            <ul>
                <li className="mtop5p">System compares: What does Knowledge say? What does Memory say?</li>
                <li className="mtop5p">
                    <div><b>Rule applied:</b></div>
                    <div className="mtop5p">If Knowledge = X, Memory = Y (factual contradiction) → <b>Prefer Knowledge</b></div>
                    <div className="mtop5p">If Knowledge = X, Memory = Y (user preference context) → <b>Prefer Memory</b></div>
                </li>
                <li className="mtop5p">Example: Knowledge says "CEO resigned in June." Memory says "CEO was fired in 
                    March." → Knowledge wins.</li>
            </ul>
        </div>
        <div className="list-group-item">
            <div><h5 className="blog-head"><b>Why needed?</b></h5></div>
            <div className="mtop5p">Memory can be wrong (user mis-remembered, conversation had bad info, user was 
                lying/joking). Knowledge is your source of truth. But Memory should win for "I like short answers" or 
                "Call me John".</div>
        </div>
        <div className="list-group-item">
            <div><h5 className="blog-head"><b>What happens without conflict resolution?</b></h5></div>
            <ul>
                <li className="mtop5p">AI contradicts itself constantly</li>
                <li className="mtop5p"><i>"Documents say Paris is capital of France, but yesterday you said Lyon… I'm confused."</i></li>
                <li className="mtop5p">User loses trust</li>
                <li className="mtop5p">Or worse: Memory overwrites facts → AI gives wrong medical/legal advice</li>
            </ul>
        </div>
    </div>
 </div>);
};

const ContextManager = () =>{
const ASSEMBLE_FINALCONTEXT_LLM = `[System: Use knowledge for facts, memory for user context]
[Knowledge chunks: chunk1, chunk2, chunk3...]
[Past conversations: memory1, memory2, memory3...]
[User query: actual question]`;
 return (<div className="mtop5p">
    <div className="mtop5p"><b><u>Role</u>:</b> The "glue" that transforms retrieved data into an LLM-ready prompt. Prevents overflow, truncation, or missing information.</div>
    <div className="mtop5p"><b><u>Inputs</u>:</b> Reconciled context + system instructions + user query + tool definitions</div>
    <div className="mtop5p"><b><u>Outputs</u>:</b> Final assembled prompt (within token limits) + optional tool results</div>
    <div className="mtop5p"><b><u>Working process</u>:</b> An orchestration component that assembles the final prompt for the LLM by merging knowledge, memories, 
        system instructions, and optionally triggering external tools.</div>
    <div className="list-group mtop15p">
        <div className="list-group-item">
            <div><h5 className="blog-head"><b>What happens?</b></h5></div>
            <ul>
                <li className="mtop5p">
                    <div>Assembles final context for LLM:</div>
                    <div className="mtop5p">
                        <Highlight content={ASSEMBLE_FINALCONTEXT_LLM} lang="html" />
                    </div>
                </li>
                <li className="mtop5p">Optionally decides to execute a <b>Tool</b> (e.g., search web, calculate math, send email)</li>
                <li className="mtop5p">Tool result gets injected back into context</li>
            </ul>
        </div>
        <div className="list-group-item">
            <div><h5 className="blog-head"><b>Why needed?</b></h5></div>
            <div className="mtop5p">LLMs have fixed context windows (e.g., 4096, 8192, 128k tokens). Context manager fits the 
                most relevant information into that window without overflowing. Tools extend capabilities beyond what LLM can do 
                natively.</div>
        </div>
        <div className="list-group-item">
            <div><h5 className="blog-head"><b>What happens without context manager?</b></h5></div>
            <ul>
                <li className="mtop5p">Context window overflows → error or truncated response</li>
                <li className="mtop5p">Or window underfilled → AI missing critical info</li>
                <li className="mtop5p">Tools never triggered → AI can't do real-world actions</li>
            </ul>
        </div>
    </div>
  </div>);
};

const LLMGeneration = () =>{
 return (<div className="mtop5p">
    <div className="mtop5p"><b><u>Role</u>:</b> The "generative" part of RAG. Converts retrieved information into fluent, human-readable responses.</div>
    <div className="mtop5p"><b><u>Inputs</u>:</b> Final assembled prompt (context + query)</div>
    <div className="mtop5p"><b><u>Outputs</u>:</b> Natural language answer + optional tool decision</div>
    <div className="mtop5p"><b><u>Working process</u>:</b> The inference step where a small, efficient language model (Microsoft Phi-mini-3, 3.8B parameters) 
        generates a natural language response based on the assembled context.</div>
    <div className="list-group mtop15p">
        <div className="list-group-item">
            <div><h5 className="blog-head"><b>What happens?</b></h5></div>
            <ul>
                <li className="mtop5p">Context + query sent to Phi-mini-3 (small, efficient LLM)</li>
                <li className="mtop5p">Model generates answer</li>
                <li className="mtop5p">Also outputs: should this trigger a tool? (loop back if yes)</li>
            </ul>
        </div>
        <div className="list-group-item">
            <div><h5 className="blog-head"><b>Why Phi-mini-3 specifically?</b></h5></div>
            <ul>
                <li className="mtop5p">Small enough to run on edge/local (3.8B parameters)</li>
                <li className="mtop5p">Can't run GPT-4 on every user device</li>
                <li className="mtop5p">Good enough for RAG + memory tasks</li>
            </ul>
        </div>
        <div className="list-group-item">
            <div><h5 className="blog-head"><b>What happens without LLM?</b></h5></div>
            <ul>
                <li className="mtop5p">Can't generate natural language answers</li>
                <li className="mtop5p">Just retrieving chunks isn't a conversation</li>
            </ul>
        </div>
    </div>
 </div>);
};

const FinalAnswerToolDecision = () =>{
 return (<div className="mtop5p">
    <div className="mtop5p"><b><u>Role</u>:</b> Completes the user interaction and enables LLM to take real-world actions beyond text generation.</div>
    <div className="mtop5p"><b><u>Inputs</u>:</b> Generated answer + tool decision flag + tool parameters</div>
    <div className="mtop5p"><b><u>Outputs</u>:</b> Final delivered answer to user (and optionally asynchronous tool execution loop)</div>
    <div className="mtop5p"><b><u>Working process</u>:</b> The output stage where the generated answer is delivered to the user, and any requested tool 
        executions are performed (with potential loopback to the context manager).</div>
    <div className="list-group mtop15p">
        <div className="list-group-item">
            <div><h5 className="blog-head"><b>What happens?</b></h5></div>
            <ul>
                <li className="mtop5p">Answer returned to user</li>
                <li className="mtop5p">If tool decision = yes, system executes tool, gets result, loops back to Step 12</li>
            </ul>
        </div>
        <div className="list-group-item">
            <div><h5 className="blog-head"><b>Why needed?</b></h5></div>
            <div className="mtop5p">Conversational AI needs to respond. Tool decision enables action.</div>
        </div>
        <div className="list-group-item">
            <div><h5 className="blog-head"><b>What happens without answer output?</b></h5></div>
            <div className="mtop5p">System does work but never responds (useless)</div>
        </div>
    </div>
 </div>);
};

const FeedbackLoop = () =>{
 return (<div className="mtop5p">
    <div className="mtop5p"><b><u>Role</u>:</b> The learning mechanism. Without this, the system never improves, never personalizes, and forgets nothing (or forgets everything with no policy).</div>
    <div className="mtop5p"><b><u>Inputs</u>:</b> Complete query–answer interaction + user feedback</div>
    <div className="mtop5p"><b><u>Outputs</u>:</b> Persistent memory entry in vector store (available for future Step 8 retrieval)</div>
    <div className="mtop5p"><b><u>Working process</u>:</b> An asynchronous, post-interaction pipeline that captures the conversation, evaluates its quality, updates 
        importance scores, applies retention policies, and writes back to conversational memory for future retrieval.</div>
    <div className="list-group mtop15p">
        <div className="list-group-item">
            <div><h5 className="blog-head"><b>What happens (asynchronous, after user sees answer)?</b></h5></div>
            <ul>
                <li className="mtop5p">Interaction (query + answer + user feedback if any) sent to <b>Summarizer</b></li>
                <li className="mtop5p">Importance score calculated (did user thumbs-up? down? copy answer? ignore?)</li>
                <li className="mtop5p">Decay factor applied (old interactions lose importance)</li>
                <li className="mtop5p">Security filter applied (again!)</li>
                <li className="mtop5p">Forgetting/retention policy: summarizer decides what to keep, what to discard</li>
                <li className="mtop5p">Optimized prompt generated from interaction</li>
                <li className="mtop5p">Interaction embedded (same embedding model)</li>
                <li className="mtop5p">Stored in <b>Conversational Memory Vector Store</b></li>
            </ul>
        </div>
        <div className="list-group-item">
            <div><h5 className="blog-head"><b>Why needed?</b></h5></div>
            <div className="mtop5p">Without feedback loop, the system never learns from interactions. Memory never updates. 
                No improvement over time.</div>
        </div>
        <div className="list-group-item">
            <div><h5 className="blog-head"><b>What happens without feedback loop?</b></h5></div>
            <ul>
                <li className="mtop5p">Memory is write-only from first conversation</li>
                <li className="mtop5p">User corrects the AI → AI forgets correction next time</li>
                <li className="mtop5p">No personalization</li>
                <li className="mtop5p">System stagnates</li>
            </ul>
        </div>
    </div>
 </div>);
};

const ProcessStepTitle = ({ label })  =>(<h5 className="blog-head"><b>{label}</b></h5>);
const StepTitleCard = ({ label }) =>(<span style={{ backgroundColor:'#dddfff', padding:'5px 10px', boxShadow:'2px 2px 2px 2px #ccc' }}><b>{label}:</b></span>);
const StepSideHeading = ({ label }) =>(<div className="mtop5p"><u><b>{label}:</b></u></div>);

const Processes = () =>{
 return (<div>
    <div><h4 className="blog-head"><b><u>Process Flow: Step-by-Step</u> -</b></h4></div>
    <div>
        <Accordian id="arch-process" 
            data={[{ 
                    id:"01-RawDataIngestion",
                    title: (<ProcessStepTitle label="STEP 1: Raw Data Ingestion (Offline / Setup Phase)" />),
                    component: <RawDataIngestion />
                },{
                    id:"02-ChunkingMetaData",
                    title: (<ProcessStepTitle label="STEP 2: Chunking + Metadata" />),
                    component: <ChunkingMetaData />
                },{
                    id:"03-EmbeddingVectorCreation",
                    title: (<ProcessStepTitle label="STEP 3: Embedding (Vector Creation)" />),
                    component: <EmbeddingVectorCreation />
                },{
                    id:"04-VectorStorageKnowledgeBase",
                    title: (<ProcessStepTitle label="STEP 4: Vector Storage (Knowledge Base)" />),
                    component: <VectorStorageKnowledgeBase />
                },{
                    id:"05-UserQueryArrives",
                    title: (<ProcessStepTitle label="STEP 5: User Query Arrives" />),
                    component: <UserQueryArrives />
                },{
                    id:"06-SecurityAccessControlFilter",
                    title: (<ProcessStepTitle label="STEP 6: Security Access Control Filter (First Check)" />),
                    component: <SecurityAccessControlFilter />
                },{
                    id:"07-ParallelRetreivalKPath",
                    title: (<ProcessStepTitle label="STEP 7: Parallel Retrieval – Knowledge Path" />),
                    component: <ParallelRetreivalKPath />
                },{
                    id:"08-ParallelRetreivalMPath",
                    title: (<ProcessStepTitle label="STEP 8: Parallel Retrieval – Memory Path" />),
                    component: <ParallelRetreivalMPath />
                },{
                    id:"09-MemoryRankingScoring",
                    title: (<ProcessStepTitle label="STEP 9: Memory Ranking / Scoring" />),
                    component: <MemoryRankingScoring />
                },{
                    id:"10-SecurityAccessControlFilter2",
                    title: (<ProcessStepTitle label="STEP 10: Security Access Control Filter (Second Check)" />),
                    component: <SecurityAccessControlFilter2 />
                },{
                    id:"11-ConflictResolutionLayer",
                    title: (<ProcessStepTitle label="STEP 11: Conflict Resolution Layer (Hallucination Guard)" />),
                    component: <ConflictResolutionLayer />
                },{
                    id:"12-ContextManager",
                    title: (<ProcessStepTitle label="STEP 12: Context Manager" />),
                    component: <ContextManager />
                },{
                    id:"13-LLMGeneration",
                    title: (<ProcessStepTitle label="STEP 13: LLM Generation (Microsoft Phi-mini-3)" />),
                    component: <LLMGeneration />
                },{
                    id:"14-FinalAnswerToolDecision",
                    title: (<ProcessStepTitle label="STEP 14: Final Answer + Tool Decision" />),
                    component: <FinalAnswerToolDecision />
                },{
                    id:"15-",
                    title: (<ProcessStepTitle label="STEP 15: Feedback Loop (Post-Answer)" />),
                    component: <FeedbackLoop />
                }]} />
    </div>
 </div>);
};

export default Processes;
