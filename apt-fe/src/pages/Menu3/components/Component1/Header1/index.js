import React, { useState, useEffect } from "react";
import { ContainerFluid, Row, Col, Icon, Card, ProgressBar, StopWatchTimer } from "e-ui-react";
import { Modal, Button } from 'e-ui-react';

const Header1 = ()=>{
 const [progressBarData, setProgressBarData] = useState(100);
 const stopWatchTime = { hours: 0, minutes: 6, seconds: 0 };
 const [showAlert, setShowAlert] = useState(false);
 const [showExam, setShowExam] = useState();


 useEffect(()=>{

 },[]);
 
 return (<>
 <Modal title="Timeup" show={showAlert} onClose={setShowAlert} content="You have only 5 minutes to complete your Examination." />
 <ContainerFluid style={{ padding:'15px 15px 0px' }}>
    <Row>
        <Col xl={2} xxl={2}>
            <a href="/home"><Icon type="FontAwesome" name="fa-arrow-left" size={18} style={{ marginRight:'10px', color:'#777' }} /></a>
            <img src="./assets/images/logo.png" style={{ width: '100px', height:'auto' }}/>
        </Col>
        <Col xl={6} xxl={6}>
            <Card backgroundColor="#efefef" >
                <div style={{ padding:'5px 10px' }}>
                    <b>Note:</b> Don't Refresh or Close this Window, it is considered as you have completed your Examination.
                </div>
            </Card>
        </Col>
        <Col xl={1} xxl={1}>
        
        </Col>
        <Col xl={3} xxl={3} md={3} sm={3}>
            <div><b>Total Time Left:</b> 
            <span style={{ marginLeft:'15px', fontSize:'14px' }}>
                <StopWatchTimer defHr={stopWatchTime?.hours} defMin={stopWatchTime?.minutes} defSec={stopWatchTime?.seconds} onCallBack={(time)=>{
                    console.log("time", time);
                    const percentage = ( ( (time?.hours*3600) + (time?.minutes *60) + (time?.seconds) ) / ( (stopWatchTime?.hours*3600) + (stopWatchTime?.minutes*60) + (stopWatchTime?.seconds) ) )*100;
                    setProgressBarData(percentage);
                    if(time?.hours===0 && time?.minutes===5 && time?.seconds===0){
                        setShowAlert(true);
                    }
                }}/>    
            </span></div>
            <ProgressBar type="info" progress={progressBarData} height="8" value="" />
        </Col>
    </Row>
 </ContainerFluid>
 {}
 </>);
};

export default Header1;