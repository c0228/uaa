import React from "react";
import { ContainerFluid ,Row ,Col, Card, Colors, Badge } from "e-ui-react";

const Sections = ()=>{
 const QuestionView = ({ type, label })=>{

    if(type==='ANSWERED'){
        return (<Badge label={label} size="12" style={{ cursor:'pointer', backgroundColor:'#11cd76', color:'#000', marginLeft: '5px', marginBottom: '5px' }} />);
    } else if(type==='NOT_ANSWERED'){
        return (<Badge label={label} size="12" style={{ cursor:'pointer', backgroundColor:'#f55463', color:'#000', marginLeft: '5px', marginBottom: '5px' }} />);
    } else if(type==='REVIEW_LATER'){
        <Badge type="info" label={label} size="12" style={{ cursor:'pointer', marginLeft: '5px', marginBottom: '5px' }} />
    } else {
        return (<Badge type="light" label={label} size="12" style={{ cursor:'pointer', marginLeft: '5px', marginBottom: '5px' }} />);
    }
 };

 const QuestionBrief = ()=>{
  return (<div style={{ marginTop:'15px' }}>
    <div><b>Note:</b></div>
    <Card backgroundColor="#282a36">
        <div style={{ padding:'15px' }}>
            <Row>
                <Col xl={6} xxl={6}>
                    <div><QuestionView type="ANSWERED" label="01" /> <span style={{ color:'#11cd76', paddingLeft:'5px' }}><b>Questions Answered</b></span></div>
                    <div style={{ marginTop:'5px' }}><QuestionView type="NOT_ANSWERED" label="02" /> <span style={{ color:'#f55463', paddingLeft:'5px' }}><b>Not Answered</b></span></div>
                </Col>
                <Col xl={6} xxl={6}>
                    <div align="right">
                        <div><span style={{ color:'#ff9800' }}><b>Current Question</b></span> <Badge type="warning" label="03" size="12" 
                        style={{ marginLeft: '5px', marginBottom: '5px' }} /></div>
                        <div style={{ marginTop:'5px' }}><span style={{ color:'#0dcaf0'}}><b>Review for Later</b></span> <Badge type="info" label="04" size="12" 
                        style={{ marginLeft: '5px', marginBottom: '5px' }} /></div>
                    </div>
                </Col>
            </Row>
        </div>
    </Card>
  </div>);
 }

 return (<>
    <Card backgroundColor="#efefef">
        <div style={{ padding:'15px' }}>
            <div>
                <div align="center" className="mbot15p"><h5 className="bs-header"><b>Section-A (One Answer Objective Type)</b></h5><hr/></div>
                <ContainerFluid style={{ padding: '0px' }}>
                  <Row>
                    <Col xl={6} xxl={6}>
                      <b>Total Questions :  <span style={{ fontSize:'14px', color:'#0d6efd' }}>10</span></b>
                    </Col>
                    <Col xl={6} xxl={6}>
                      <div align="right"><b>Each carries <span style={{ fontSize:'14px', color:'#0d6efd' }}>1</span> Mark</b></div>
                    </Col>
                  </Row>
                </ContainerFluid>
                <div style={{marginTop: '5px'}}>
                    <Card backgroundColor="#282a36">
                        <div style={{ padding:'15px' }}>
                            <Row>
                                <Col xl={12} xxl={12}>
                                    <div>
                                        <QuestionView type="CURRENT" label="01" />
                                        <QuestionView type="CURRENT" label="02" />
                                        <QuestionView type="CURRENT" label="03" />
                                    </div>
                                </Col> 
                            </Row> 
                        </div>  
                    </Card>
                </div>  
            </div>
            <QuestionBrief />
          </div>
        </Card>
 </>);
};

export default Sections;