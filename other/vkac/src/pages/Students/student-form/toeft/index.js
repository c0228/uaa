import React, { useState } from "react";
import { TextBox, Card, Row, Col, getForm } from "e-ui-react";
// import SampleData from '@TempData/student-sample.json';

const SampleData = {};
const TOEFLElement = ()=>{
    const formContext = getForm();
    const country = formContext?.form?.["StudentForm"]?.Country?.value;

    const [toeflScores, setToeflScores] = useState({
        reading: SampleData?.toefl?.reading || 0,
        writing: SampleData?.toefl?.writing|| 0,
        listening: SampleData?.toefl?.listening || 0,
        speaking: SampleData?.toefl?.speaking || 0,
      });
      const [toeflOverallScore, setToeflOverallScore] = useState(0);
    
      const handleScoreChange = (field, value) => {
        const updatedScores = { ...toeflScores, [field]: value };
        setToeflScores(updatedScores);
        calculateOverallScore(updatedScores);
      };
    
      const calculateOverallScore = (scores) => {
        const { reading, writing, listening, speaking } = scores;

        // Convert empty strings to 0
        const readingScore = reading === "" ? 0 : parseFloat(reading);
        const writingScore = writing === "" ? 0 : parseFloat(writing);
        const listeningScore = listening === "" ? 0 : parseFloat(listening);
        const speakingScore = speaking === "" ? 0 : parseFloat(speaking);

        // Calculate overall score
        const overallScore =
        readingScore + writingScore + listeningScore + speakingScore;
        console.log("overallScore", overallScore);
        setToeflOverallScore(overallScore);
      };

    return (<>
     <label className="form-label"><b>TOEFL Score :</b></label>
    {(country?.length>0 && country!=='USA') && <div className="mbot15p">
    <Card padding={15}>
     <Row>
        <Col xxl={3} xl={3}>
            <TextBox name="TOEFL_Reading"
                placeholder="0"
                value={SampleData?.toefl?.reading}
                disabled={true}
                /*validation={{
                    required:{
                        value: true,
                        errorMessage:"This is a Mandatory Field"
                    }
                }} */
                onChange={(result)=>{
                    handleScoreChange("reading", result?.value);
                }}
            />
        </Col>
        <Col xxl={3} xl={3}><div style={{ padding:'5px' }}><b>Reading</b></div></Col>
        <Col xxl={3} xl={3}>
            <TextBox name="TOEFL_Writing"
                placeholder="0"
                value={SampleData?.toefl?.writing}
                disabled={true}
                /* validation={{
                    required:{
                        value: true,
                        errorMessage:"This is a Mandatory Field"
                    }
                }} */
                onChange={(result)=>{
                    handleScoreChange("writing", result?.value);
                }}
            />
        </Col>
        <Col xxl={3} xl={3}><div style={{ padding:'5px' }}><b>Writing</b></div></Col>
     </Row>
     <Row className="mtop15p">
        <Col xxl={3} xl={3}>
            <TextBox name="TOEFL_Listening"
                value={SampleData?.toefl?.listening}
                placeholder="0"
                disabled={true}
                /* validation={{
                    required:{
                        value: true,
                        errorMessage:"This is a Mandatory Field"
                    }
                }} */
                onChange={(result)=>{
                    handleScoreChange("listening", result?.value);
                }}
            />
        </Col>
        <Col xxl={3} xl={3}><div style={{ padding:'5px' }}><b>Listening</b></div></Col>
        <Col xxl={3} xl={3}>
            <TextBox name="TOEFL_Speaking"
                value={SampleData?.toefl?.speaking}
                placeholder="0"
                disabled={true}
                /* validation={{
                    required:{
                        value: true,
                        errorMessage:"This is a Mandatory Field"
                    }
                }} */
                onChange={(result)=>{
                    handleScoreChange("speaking", result?.value);
                }}
            />
        </Col>
        <Col xxl={3} xl={3}><div style={{ padding:'5px' }}><b>Speaking</b></div></Col>
     </Row>
    </Card>
    </div>}
        
    <Row>
        <Col xxl={6} xl={4}></Col>
        <Col xxl={3} xl={4}>
            <TextBox name="TOEFL_OverallScore"
                placeholder="0"
                value={toeflOverallScore} 
                /* validation={{
                    required:{
                        value: true,
                        errorMessage:"This is a Mandatory Field"
                    }
                }} */
            />
        </Col>
        <Col xxl={3} xl={4}><div style={{ padding:'5px' }}><b>Overall Score</b></div></Col>
     </Row>
    </>);
 };

 export default TOEFLElement;