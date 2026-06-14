import React from "react";
import { useParams  } from "react-router-dom";
import { ContainerFluid, Row, Col, Card, Icon } from "e-ui-react";

const ExamProcess = () =>{
 const { lang } = useParams();
 return (<div className="mtop15p mbot15p" style={{ backgroundColor:'#f8ffb2' }}>
 <ContainerFluid>
    <Row><Col md={12}>
 <div className="mtop15p">
    <div><h3><b>Typical UPSC Selection Process</b></h3></div>
    <div className="mtop15p">Although the exact process varies by examination, 
        many UPSC exams follow a multi-stage selection system:</div>
    <Row className="mtop15p mbot15p">
        {[{
            "icon":"fa-file-text-o",
            "en_label":"Preliminary Examination",
            "en_desc":"A screening stage that tests basic knowledge and aptitude."
        },{
            "icon": "fa-book",
            "en_label":"Main Examination",
            "en_desc":"A detailed written examination that evaluates analytical ability and subject understanding."
        },{
            "icon": "fa-comments-o",
            "en_label":"Personality Test / Interview",
            "en_desc":"An assessment of communication skills, judgment, leadership potential, and overall suitability for public service."
        },{
            "icon": "fa-trophy",
            "en_label":"Final Selection",
            "en_desc":"Candidates are ranked based on performance and allocated services according to merit and preferences."
        }]?.map((d,i)=>{
            return (<Col md={3}>
                <Card padding={15}>
                    <div align="center" style={{ height:'34vh' }}>
                        <div align="center" className="mtop15p">
                            <Icon type="FontAwesome" name={d?.icon} size={56} color="#0c8911" />
                        </div>
                        <div align="center" className="mtop15p">
                            <h5><b>{d?.[lang+"_label"]}</b></h5>
                        </div>
                        <div className="mtop15p">{d?.[lang+"_desc"]}</div>
                    </div>
                </Card>
            </Col>);
        })}
    </Row>
 </div>
 </Col>
 </Row>
 </ContainerFluid>
 </div>);
};

export default ExamProcess;