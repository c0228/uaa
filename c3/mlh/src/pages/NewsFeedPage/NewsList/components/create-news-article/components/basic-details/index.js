import React from "react";
import { Card, Row, Col, Select, Button, TextBox, TextArea, RichTextEditor, FileUpload } from "e-ui-react";
import NewsPropertyTag from "@Components/NewsFeedModule/NewsPropertytag/index.js";
// import { getNewsListContext } from "@Pages/NewsFeedPage/NewsList/context.js";

const BasicDetails = () =>{
 return (<div style={{ padding:'15px', border:'1px solid #dee2e6', backgroundColor:'#f9f9f9', marginBottom:'25px' }}>
    <Row>
        <Col md={12}>
            <NewsPropertyTag type="article" />
        </Col>
    </Row>
    <Row>
        <Col md={6}>
            <div className="mtop5p">
                <Select label="Category"
                    placeholder="Select Theme" 
                    options={[{ id: 'light', label: 'Light Theme', value: 'Light' },
                    { id: 'dark', label: 'Dark Theme', value: 'Dark' }]}
                    className="navbar-layout"
                    fontSize="12"
                    onChange={(event) => {

                    }} />
            </div>
        </Col>
         <Col md={6}>
            <div className="mtop5p">
                <Select label="Subcategory" 
                    placeholder="Select Theme"
                    options={[{ id: 'light', label: 'Light Theme', value: 'Light' },
                    { id: 'dark', label: 'Dark Theme', value: 'Dark' }]}
                    className="navbar-layout"
                    fontSize="12"
                    onChange={(event) => {
                        
                    }} />
            </div>
        </Col>
    </Row>
    <Row>
        <Col md={12}>
            <div className="mtop15p">
                <TextBox id="title" name="title" label="Article Headline" width="100%" placeholder="Enter News Article Title"
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
            <FileUpload name="uploadArticleImage" type="fileDropper" 
                label="Upload Article Image (Recommended 16:9 for NewsFeed cards)" 
                height="200" autoSubmit={true} 
                backend={{
                    "apiUrl":"http://localhost/fileUpload/index.php",
                    "targetDirectory": "uploads/"
                }} />
            </div>
        </Col>
    </Row>
    <Row>
        <Col md={12}>
            <div className="mtop15p">
                <RichTextEditor name="description" label="Your Article Story" backgroundColor="#fff"
                             placeholder="Write your Story" height={240} />
            </div>
        </Col>
    </Row>
    <Row>
        <Col md={12}>
            <div align="right" className="mtop15p">
                <Button type="primary" size={11} style={{ marginRight:'5px' }}><b>Next</b></Button>
                <Button type="outline-primary" size={11}><b>Save as a Draft</b></Button>
            </div>
        </Col>
    </Row>
 </div>);
};

export default BasicDetails;