import React from "react";

const PollTitleHeader = () =>{
    return (<div className="list-group-item">
        <div className="createArticle-pollTitle-headerSection">
        <div>
            <div className="createArticle-pollTitle-headerSection-title"><b>Add Poll / Create Questionnaire</b></div>
            <div className="createArticle-pollTitle-headerSection-subTitle">(Optional) Engage neighbors with smart conditional questions</div>
        </div>
        <Button type="primary" size={12}>
            <Icon type="FontAwesome" name="fa-plus-circle" size={10} className="marginRight5p" />
            <b>Add New Question</b>
        </Button>
    </div>
   </div>);
};

export default PollTitleHeader;