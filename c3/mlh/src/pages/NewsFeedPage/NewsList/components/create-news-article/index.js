import React from "react";
import { getNewsListContext } from "@Pages/NewsFeedPage/NewsList/context.js";
import { ContainerFluid, Row, Col, Button, TextBox, TextArea, RichTextEditor } from "e-ui-react";
import './index.css';

const CreateNewsArticle = () =>{
 const newsListContext = getNewsListContext();
 return (<>
 <div className="mlh-createNewsArticle-overlay" 
    style={{ width: ((newsListContext?.contextData?.createArticleStatus ==='open')?'100%':'0%') }}>
    <div className="mtop15p">
        <ContainerFluid>
            <Row>
                <Col md={12}><div><h2>
                   <Button type="outline-dark" size={11} 
                    onClick={()=>{ 
                        newsListContext?.setContextData({ createArticleStatus: 'close' });
                     }}><b>Go Back</b></Button> <b>Create an Article</b>
                </h2><hr/></div></Col>
            </Row>
            <Row>
                <Col md={12}>
                    <div className="mtop15p">
                        <TextBox id="title" name="title" label="Title" width="100%" placeholder="Enter News Article Title"
                            value="" disabled={false} validation={{}}
                            onValidate={(result) => {
                                // Custom validation
                            }}
                            onChange={(result) => {
                                // Receive final validation result
                            }} />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <div className="mtop15p">
                        <TextArea name="description" label="Description" backgroundColor="#fff"
                             placeholder="Short Description about Article" height={120} />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <div className="mtop15p">
                        <RichTextEditor name="description" label="Your Article Story" backgroundColor="#fff"
                             placeholder="Write your Story" height={120} />
                    </div>
                </Col>
            </Row>
        </ContainerFluid>
      </div>
 </div>
 </>);
};

export default CreateNewsArticle;