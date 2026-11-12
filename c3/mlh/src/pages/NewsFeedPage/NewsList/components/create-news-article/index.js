import React, { useEffect } from "react";
import { getNewsListContext } from "@Pages/NewsFeedPage/NewsList/context.js";
import { ContainerFluid, Row, Col, Tab, Button, TextBox, TextArea, RichTextEditor, Card } from "e-ui-react";
import BasicDetails from "./components/basic-details/index.js";
import CreatePoll from "./components/create-poll/index.js";
import HookIdeaMovement from "./components/hook-idea-movement/index.js";
import './index.css';

const CreateNewsArticle = () =>{
 const newsListContext = getNewsListContext();
 useEffect(()=>{
    document.body.style.overflow = (newsListContext?.contextData?.createArticleStatus ==='open')?'hidden':'scroll';
 },[newsListContext?.contextData?.createArticleStatus]);
 return (<>
 <div className="mlh-createNewsArticle-overlay" 
    style={{ width: ((newsListContext?.contextData?.createArticleStatus ==='open')?'100%':'0%') }}>
    <div className="mtop15p">
        <ContainerFluid>
            <Row>
                <Col md={12}>
                <div><h3>
                   <Button type="outline-dark" size={11} 
                    onClick={()=>{ 
                        newsListContext?.setContextData({ createArticleStatus: 'close' });
                     }}><b>Go Back</b></Button> <b>Create an Article</b>
                </h3><hr/></div></Col>
            </Row>
            <Row>
                <Col md={12}>
                    <div className="mtop5p">
                        <Tab menulinks={[{ id:"basicDetails", label:"1. Basic Details", url:"#", component:(<BasicDetails />) },
                            { id:"createPoll", label:"2. Create Poll", url:"#", component:(<CreatePoll />) },
                            { id:"hookIdeaMovement", label:"3. Hook an Idea / Movement", url:"#", component:(<HookIdeaMovement />) }]}   
                        />
                    </div>
                </Col>
            </Row>
        </ContainerFluid>
      </div>
 </div>
 </>);
};

export default CreateNewsArticle;