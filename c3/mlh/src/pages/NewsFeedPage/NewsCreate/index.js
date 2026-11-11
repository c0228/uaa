import React from "react";
import { ContainerFluid, Row, Col, Button, TextBox, RichTextEditor } from "e-ui-react";
import Header1 from "@Templates/Header1/index.js";
import NewsTitleTopSection from "@Components/NewsFeedModule/NewsTitleTopSection/index.js";

const NewsCreate = () =>{
 return (<>
  <div className="mtop15p">
    <ContainerFluid>
        <Row>
            <Col md={12}><div><h2>
               <Button type="outline-dark" size={11}><b>Go Back</b></Button> <b>Create an Article</b>
            </h2><hr/></div></Col>
        </Row>
        <Row>
            <Col md={12}>
                <div className="mtop15p">
                    <TextBox
    id="title"
    name="title"
    label="Title"
    width="100%"
    placeholder="Enter News Article Title"
    value=""
    disabled={false}
    validation={{}}
    onValidate={(result) => {
        // Custom validation
    }}
    onChange={(result) => {
        // Receive final validation result
    }}
/>
                </div>
            </Col>
        </Row>
        <Row>
            <Col md={12}>
                <div className="mtop15p">
                    <RichTextEditor name="description" label="Description"
  backgroundColor="#fff"
  placeholder="Write your Story" height={120} />
                </div>
            </Col>
        </Row>
    </ContainerFluid>
  </div>
  
 </>);
};

export default NewsCreate;