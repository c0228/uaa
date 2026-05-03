import React, { useEffect } from "react";
import { ContainerFluid, Row, Col, Button, Icon, Card, Badge } from "e-ui-react";
import { HeaderMenu } from '@ShowcaseConfig/HeaderMenu.js';
import Header from '@ShowcaseTemplates/Header/index.js';
import Keywords from '@MainComponents/keywords/index.js';
import './index.css';

const SHOWCASE_DATA = [{
  "url": "showcase/aiml/building-a-smart-ai-system-that-helps-a-small-Model-to-use-large-data-as-context",
  "tag": "AI Architecture - LLMs / SLMs Engineering",
  "title": (<span>Building a Smart AI System That Helps a Small AI Model Use GBs/TBs of 
              Data as Context, even though the model itself has a limited context window.</span>),
  "desc": (<div>
            <div>To make it possible, I need to choose a <u><i>AI Model</i></u> (here, I am 
            picking - <code><i>Microsoft Phi-mini-3</i></code>) and a <u><i>Embedded Vector Search Layer</i></u> (here, 
            I am picking - <code><i>LSM-Vec</i></code>).</div>
				    <div><i>Using <b>Microsoft Phi-mini-3</b> with an embedded RAG stack like <b>LSM-Vec</b> allows a small-context model 
            to reason over GBs/TBs of data indirectly by retrieving only the most relevant chunks as needed, instead of loading 
            everything into the prompt.</i></div>
        </div>),
  "keywords": {
      "data":["#Artificial Intelligence (AI)", "#Machine Learning (ML)", "#Offline AI Systems", "#Natural Language Processing (NLP)", 
        "#Large Language Models (LLMs)", "#Small Language Models (SLMs)", "#On-Device / Edge AI", "#AI System Design", 
        "#AI Architecture Engineering", "#Retrieval-Augmented Generation (RAG)", "#Context Window Optimization", 
        "#External Knowledge Retrieval", "#Long-Context Simulation", "#AI Memory Management", "#Knowledge-Augmented AI", 
        "#Lightweight AI Models"]
  }
}];

const Home = ({ meta }) =>{
 useEffect(()=>{
   document.title = 'Nellutla L N Rao | Showcase';
 },[]);
 return (<div className="mbot15p lh28p fs16p"> 
  <Header menulinks={[]} />
  <ContainerFluid>
    <Row>
      {SHOWCASE_DATA?.map((showCaseData, index)=>{
        return (<Col md={6} className="mbot15p">
        <Card padding={15}>
          <div>
            <div><Badge type="primary" label={showCaseData?.tag} size="12" style={{ marginRight:'5px' }} /></div>
            <div><h4 className="blog-head"><b>{showCaseData?.title}</b></h4></div>
            <div>{showCaseData?.desc}</div>
            <div><Keywords data={showCaseData?.keywords} /></div>
            <div align="right" className="mtop5p">
              <a href={showCaseData?.url}>
                <Button type="outline-dark" size={11}><b>View Project Details & Github Link</b></Button>
              </a>
            </div>
          </div>
        </Card> 
        </Col>);
      })}
    </Row>
  </ContainerFluid>

 </div>);
};

export default Home;