import React from "react";
import { Card, Icon } from "e-ui-react";

const SupportInfo = () =>{
 const IconStatus = ({ is }) =><Icon type="FontAwesome" name={is?"fa-check":"fa-times"} color={is?"green":"red"} style={{ marginRight:'5px' }} />
 return (<div>
    <Card padding={15} backgroundColor="#eee">
        <div><h4 className="blog-head"><b>Terminologies -</b></h4></div>
        <div className="mtop5p">
            <div className="blog-head"><b>RAG (Retrieval-Augmented Generation):</b></div>
            <div className="pad5p">
                <div><i>(It happens at offline / Run-time)</i></div>
                <div>RAG is the runtime process of retrieving relevant external information and 
                    injecting it into the prompt so the model can generate grounded, up-to-date answers 
                    without changing its weights.</div>
                <Card padding={5}><b>RAG = Fetch knowledge at runtime + then generate an answer</b></Card>
            </div>
        </div>
        <div className="mtop5p">
            <div className="blog-head"><b>Fine-Tuning:</b></div>
            <div className="pad5p">
                <div><i>(It happens at online / Build-time)</i></div>
                <div>Fine-Tuning is the offline process of adjusting a model’s weights to 
                    change its behavior, style, or output format for a specific task.</div>
                <Card padding={5}><b>Fine-tuning = Change the model’s internal behavior</b></Card>
            </div>
        </div>
    </Card>
    <div className="mtop15p">
        <Card padding={15}>
            <div><h4 className="blog-head"><b>Strengths of this Design -</b></h4></div>
            <div className="padLeft15p">
                {[(<span>Works <b>offline / air-gapped</b></span>),
                    (<span>Runs on <b>low RAM (4–8 GB)</b></span>),
                    (<span>Scales to <b>GBs/TBs of data</b></span>),
                    (<span>Ideal for <b>edge, desktop, enterprise private systems</b></span>),
                    (<span>Model-agnostic (can later swap Phi with another SLM)</span>),
                    (<span>Cost-efficient (no GPU, no cloud dependency)</span>),
                ].map((data,index)=>{
                    return (<div key={index}><IconStatus is={true} /> {data}</div>);
                })}
            </div>
        </Card>
    </div>
    <div className="mtop15p">
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
    </div>
 </div>);
};

export default SupportInfo;