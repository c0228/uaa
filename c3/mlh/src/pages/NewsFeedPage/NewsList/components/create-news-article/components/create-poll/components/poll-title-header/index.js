import React, { useState } from "react";
import { Row, Col, Button, Icon } from "e-ui-react";
import { getNewsListContext } from "@Pages/NewsFeedPage/NewsList/context.js";

const PollTitleHeader = () =>{
  const newsListContext = getNewsListContext();
  const AddNewQuestionHandler = () =>{
    const createArticleForm = newsListContext?.contextData?.createArticle?.form;
    
  };
  return (<div className="list-group-item">
        <div className="createArticle-pollTitle-headerSection">
        <div>
            <div className="createArticle-pollTitle-headerSection-title"><b>Add Poll / Create Questionnaire</b></div>
            <div className="createArticle-pollTitle-headerSection-subTitle">(Optional) Engage neighbors with smart conditional questions</div>
        </div>
        <Button type="primary" size={12} onClick={()=>AddNewQuestionHandler()}>
            <Icon type="FontAwesome" name="fa-plus-circle" size={10} className="marginRight5p" />
            <b>Add New Question</b>
        </Button>
    </div>
   </div>);
};

export default PollTitleHeader;