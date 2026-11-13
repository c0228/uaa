import React, { useState } from "react";
import { Row, Col, Button, Icon } from "e-ui-react";
import NewsPropertyTag from "@Components/NewsFeedModule/NewsPropertytag/index.js";

const CreatePoll = () =>{
 {/** disabled={questions.length >= 8} onClick={addNewQuestion} */}
 const PollTitleHeader = () =>{
    return (<div className="list-group-item">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
            <div style={{ fontSize: '16px' }}><b>Add Poll / Create Questionnaire</b></div>
            <div style={{ color: '#777' }}>(Optional) Engage neighbors with smart conditional questions</div>
        </div>
        <Button type="primary" size={12}>
            <Icon type="FontAwesome" name="fa-plus-circle" size={10} style={{ marginRight: '5px' }} />
            <b>Add New Question</b>
        </Button>
    </div>
   </div>);
 };

 const PollPreviewTitleHeader = ()=>{
  const [toggleFlowToPreview, setToggleFlowToPreview] = useState('FLOW_MODE');
  return (<div className="list-group-item">
    <div style={{ display:'flex'}}>
        <div style={{ width:'80%'}}>
            {toggleFlowToPreview==='FLOW_MODE' && (<>
                <div style={{ fontSize:'16px' }}><b>Question Flow Preview 
                    <span style={{ border:'1px solid #ccc', borderRadius:'6px', padding:'3px 5px', 
                        fontSize:'11px', color:'#777', marginLeft:'5px' }}>Auto-generated</span></b>
                </div>
                <div style={{ color:'#777' }}>Live map of how respondents move through your questions 
                    based on their answers.</div>
            </>)}
            {toggleFlowToPreview==='PREVIEW_MODE' && (<>
                <div style={{ fontSize:'16px' }}><b>Respondent View 
                    <span style={{ border:'1px solid #ccc', borderRadius:'6px', padding:'3px 5px', 
                        fontSize:'11px', color:'#777', marginLeft:'5px' }}>Poll Preview</span></b>
                </div>
                <div style={{ color:'#777' }}>Live preview of how users respond to your questions based on their answers</div>
            </>)}
        </div>
        <div align="right" style={{ width:'20%'}}>
            {toggleFlowToPreview==='FLOW_MODE' && (<>
            <Button type="primary" size={11} onClick={()=>setToggleFlowToPreview('PREVIEW_MODE')}><b>
                <Icon type="FontAwesome" name="fa-eye" size={10} style={{ marginRight:'5px' }} />
                 Preview Poll</b>
            </Button>
            </>)}
            {toggleFlowToPreview==='PREVIEW_MODE' && (<>
            <Button type="primary" size={11} onClick={()=>setToggleFlowToPreview('FLOW_MODE')}><b>
                <Icon type="FontAwesome" name="fa-eye" size={10} style={{ marginRight:'5px' }} />
                  Flow Preview</b>
            </Button>
            </>)}
        </div>
    </div>
  </div>);
 };

 return (<>
   <div style={{ padding: '15px', border: '1px solid #dee2e6', backgroundColor: '#f9f9f9', marginBottom: '25px' }}>
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