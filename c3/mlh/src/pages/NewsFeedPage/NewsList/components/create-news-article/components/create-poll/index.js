import React, { useState } from "react";
import { Row, Col, Button, Icon, TextBox, Select, Badge, Card  } from "e-ui-react";
import NewsPropertyTag from "@Components/NewsFeedModule/NewsPropertytag/index.js";

const CreatePoll = () =>{
 const [questions, setQuestions] = useState(0);
 const NoPollDisplay = () =>{
    return (<>
        <div align="center" className="list-group-item">
        {/** */}
            <div className="mtop15p"><Icon type="FontAwesome" name="fa-bar-chart" size={22} color="#0d6efd" /></div>
            <div className="mtop5p"><h5><b>Want community feedback on this article?</b></h5></div>
            <div className="mbot15p" style={{ color:'#777' }}>
                <b>Attach an interactive smart questionnaire (up to 8 questions) directly inside your NewsFeed post.</b>
            </div>
        {/** */}
        </div>
    </>);
 };
 return (<div style={{ padding:'15px', border:'1px solid #dee2e6', backgroundColor:'#f9f9f9', marginBottom:'25px' }}>
    <Row>
            <Col md={12}>
                <NewsPropertyTag type="poll" />
            </Col>
        </Row>
    <Row>
        <Col md={7}>
            {/** */}
            <div className="list-group">
                <div className="list-group-item">
                    {/**  */}
                        <div style={{ display:'flex' }}>
                            <div style={{ width:'70%' }}>
                                <div style={{ fontSize:'16px' }}><b>Add Poll / Create Questionnarire</b></div>
                                <div style={{ color:'#777'}}>(Optional) Engage neighbors with smart conditional questions</div>
                            </div>
                            <div align="right" style={{ width:'30%' }}>
                                <Button type="primary" size={12} onClick={()=>{
                                    setQuestions(prev => prev + 1);
                                }}>
                                    <Icon type="FontAwesome" name="fa-plus-circle" size={10} style={{ marginRight:'5px' }} />
                                    <b>Add New Question</b>
                                </Button>
                            </div>
                        </div>
                    {/** */}
                </div>
                {questions===0 && (<NoPollDisplay />)}
                {questions>0 && (<>
                    <div className="list-group-item">
                        <div style={{ display:'flex', marginTop:'15px' }}>
                            <div style={{ width:'7%' }}>
                                <Badge type="success" label={<b>Q1</b>} size="12" style={{ marginRight:'5px' }} />
                            </div>
                            <div style={{ width:'93%' }}>
                                <Row>
                                    <Col md={12}>
                                    <TextBox id="q1" name="username" label="Question #1" 
                                        placeholder="Ask your Audience a clear question..." />
                                 </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <div className="mtop15p">
                                            <Select label="Answer Type" placeholder="Select Answer Type"
                                                options={[{ id: 'Yes/No', label: 'Yes/No', value: 'Yes/No' },
                                                    { id: 'Single Choice', label: 'Single Choice', value: 'Single Choice' },
                                                    { id: 'Multiple Choice', label: 'Multiple Choice', value: 'Multiple Choice' },
                                                    { id: 'Rating (1-5 Stars)', label: 'Rating (1-5 Stars)', value: 'Rating (1-5 Stars)'  },
                                                    { id: 'Opinion Scale (1-10)', label: 'Opinion Scale (1-10)', value: 'Opinion Scale (1-10)' }]} 
                                                onChange={(event)=>{
                                                        console.log("event:", event);
                                                }}
                                                    />
                                        </div>  
                                    </Col>
                                    <Col md={6}>
                                        
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <div className="mtop15p">
                                            <label className="form-label"><b>Answer :</b></label>
                                            <Card padding={15} backgroundColor="#f5f5f5">
                                                <div style={{ color:'#777', fontSize:'13px' }}>
                                                    <b>Respondent Opinion Scale Preview (1 = Strongly Disagree, 10 = Strongly Agree)</b>
                                                </div>
                                                <div className="mtop15p">
                                                    {[...Array(10)].map((_, index) => {
                                                        return (<span style={{ margin:'5px', padding:"15px", cursor:'pointer',
                                                            border:'1px solid #ccc', color:'#000', backgroundColor:'#fff',
                                                            borderRadius:'8px' }}><b>{index+1}</b></span>);
                                                    })}
                                                </div>
                                            </Card>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </>)}
            </div>
            {/** */}
            <div>
                
            </div>
        </Col>
        <Col md={5}>
            
        </Col>
    </Row>
 </div>);
};

export default CreatePoll;