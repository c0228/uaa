import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ContainerFluid, Row, Col, Card, TextBox, DateTimePicker, Button, Form, Tab, Icon } from "e-ui-react";

const HeaderDCA = ({ text, date, data }) =>{
 const [searchDCAFormData, setSearchDCAFormData] = useState({ text:text, date: date });
 const navigate = useNavigate();
 const searchDCAFormFieldHandler = (fieldName, fieldValue ) =>{
   console.log(fieldName, ": ",fieldValue);
   setSearchDCAFormData(prev => ({...prev, [fieldName]: fieldValue }));
 };
 const searchDCAFormHandler = () =>{
   console.log("data", searchDCAFormData);
   if(searchDCAFormData?.text?.length===0 && searchDCAFormData?.date?.length>0) { // CURRENT_AFFAIRS_BYDATE
      navigate("/daily-current-affairs/date/"+searchDCAFormData?.date, { replace: true });
   } else if(searchDCAFormData?.date?.length===0 && searchDCAFormData?.text?.length>0) { // CURRENT_AFFAIRS_BYTEXT
      navigate("/daily-current-affairs/search/"+searchDCAFormData?.text, { replace: true });
   } else if(searchDCAFormData?.date?.length>0 && searchDCAFormData?.text?.length>0) { // CURRENT_AFFAIRS_BYTEXTANDDATE
      navigate("/daily-current-affairs/search/"+searchDCAFormData?.text+"/"+searchDCAFormData?.date, { replace: true });
   }
 };
 const resetDCAFormHandler = () =>{
   setSearchDCAFormData({ text:'', date:'' });
 };
 useEffect(()=>{
   console.log("searchDCAFormData: ", searchDCAFormData);
 },[searchDCAFormData]);
 const DailyStatistics = ({ data }) =>{
   const k = Object.keys(data || {});
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
            </Col>
            <Col md={6}>
               <DailyStatistics data={data} />
            </Col>
        </Row>
        <Row>
            <Col md={8}>
               <div className="d-flex gap-2 mt-3">
                     <TextBox name="searchCurrentAffairs" placeholder="Search Current Affairs" value={searchDCAFormData?.text}
                           onChange={(data)=>searchDCAFormFieldHandler("text", data?.value)} />
                     <DateTimePicker type="datePicker" id="date" name="date" value={searchDCAFormData?.date} 
                           minValue={"2025-01-01"} maxValue={new Date().toISOString().split('T')[0]}
                           onChange={(data)=>searchDCAFormFieldHandler("date", data?.value)}/>
                     <Button type="warning" size={11} style={{ border:'1px solid #ccc' }} className="text-nowrap"
                           onClick={()=>searchDCAFormHandler()}><b>
                        <Icon type="FontAwesome" name="fa-search" size={11} style={{ marginRight:'5px' }} />
                              Search Current Affairs</b></Button>
                     <Button type="danger" size={11} style={{ border:'1px solid #ccc' }}  className="text-nowrap"
                           onClick={()=>resetDCAFormHandler()}><b>
                        <Icon type="FontAwesome" name="fa-repeat" size={11} style={{ marginRight:'5px' }} />
                              Reset</b></Button>
               </div>
            </Col>
        </Row>
    </ContainerFluid>
 </div>);
};

export default HeaderDCA;