import React from "react";
import { ContainerFluid, Row, Col, Card, TextBox, DateTimePicker, Button } from "e-ui-react";

const HeaderDCA = ({ date }) =>{
 const data = {
   "Articles Today": "5",
   "Monthly Articles": "150",
   "Important Issues": "25",
   "Exam Topics": "10"
 };
 const DailyStatistics = ({ data }) =>{
   const k = Object.keys(data);
   return (<div style={{ display:'flex' }}>
      {k?.map((d,i)=>{
         return (<div key={i} style={{ flex:1, padding:'5px' }}>
            <Card padding={15}>
               <div align="center">
                  <span style={{ fontSize:'16px' }}></span><b>{d}</b>
                  <div><h1 className="mt-1"><b>{data?.[d]}</b></h1></div>
               </div>
            </Card>
         </div>);
      })}
   </div>);
 };
 return (<div style={{ backgroundColor:'#f8ffb2', paddingTop:'15px', paddingBottom:'15px', 
    borderTop:'1px solid #ccc', borderBottom:'1px solid #ccc' }}>
    <ContainerFluid>
        <Row>
            <Col md={6}>
               <h1 className="fw-bold">Daily UPSC Current Affairs</h1>
               <div className="mt-1">
                  <i>Access comprehensive daily current affairs covering Polity, Governance, Economy, International Relations, 
                  Science & Technology, Environment, and Social Issues. Designed for all UPSC examinations, these updates 
                  help aspirants build strong analytical and answer-writing skills.</i>
               </div>
               <Row>
                  <Col md={12}>
                     <div className="input-group mt-3">
                        <TextBox name="searchCurrentAffairs" placeholder="Search Current Affairs" />
                        <DateTimePicker type="datePicker" id="date" name="date" value={date} />
                        <Button type="warning" size={11} style={{ border:'1px solid #ccc' }}><b>Search</b></Button>
                     </div>
                  </Col>
               </Row>
               <Row>
                  <Col md={4}>
                     
                  </Col>
                  <Col md={4}>
                     
                  </Col>
                  <Col md={4}>
                     
                  </Col>
               </Row>       
            </Col>
            <Col md={6}>
               <DailyStatistics data={data} />
            </Col>
        </Row>
    </ContainerFluid>
 </div>);
};

export default HeaderDCA;