import React, { useState } from "react";
import { Row, Col, Button, Icon } from "e-ui-react";
import NewsPropertyTag from "@Components/NewsFeedModule/NewsPropertytag/index.js";
import PollTitleHeader from "./components/poll-title-header/index.js";
import PollPreviewTitleHeader from "./components/poll-preview-title-header/index.js";
import './index.css';

const CreatePoll = () =>{
 {/** disabled={questions.length >= 8} onClick={addNewQuestion} */}
 return (<>
   <div className="createArticle-createPoll-cardSection">
    <Row><Col md={12}><NewsPropertyTag type="poll" /></Col></Row>
     <Row>
        <Col md={7}>
            <div className="list-group">
                <PollTitleHeader />
                <div></div>
            </div>
        </Col>
        <Col md={5}>
            <div className="list-group">
                <PollPreviewTitleHeader />
            </div>
        </Col>
    </Row>
 </div>
 </>);
};

export default CreatePoll;