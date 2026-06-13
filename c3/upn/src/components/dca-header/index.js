import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContainerFluid, Row, Col, Card, TextBox, DateTimePicker, Button, Form, Tab, Icon, Modal } from "e-ui-react";

const HeaderDCA = ({ text, date, data }) =>{
 const { lang } = useParams();
 const [ showModel, setShowModal ] = useState(false);
 const [searchDCAFormData, setSearchDCAFormData] = useState({ text:text, date: date });
 const navigate = useNavigate();
 const searchDCAFormFieldHandler = (fieldName, fieldValue ) =>{
   console.log(fieldName, ": ",fieldValue);
   setSearchDCAFormData(prev => ({...prev, [fieldName]: fieldValue }));
 };
 const searchDCAFormHandler = () =>{
   const searchText = searchDCAFormData?.text ?? '';
   const searchDate = searchDCAFormData?.date ?? '';
   console.log("searchText: ", searchText, "searchDate: ", searchDate);
   if(searchText?.length === 0 && searchDate?.length === 0){
      setShowModal(true);
   } else {
      if(searchText?.length === 0 && searchDate?.length > 0){
         window.location.href = process.env.PROJECT_URL+lang+'/daily-current-affairs/date/'+searchDate;
      } else if(searchText?.length > 0 && searchDate?.length === 0){
         window.location.href = process.env.PROJECT_URL+lang+'/daily-current-affairs/search/'+searchText;
      } else if(searchText?.length > 0 && searchDate?.length > 0){
         window.location.href= process.env.PROJECT_URL+lang+'/daily-current-affairs/search/'+searchText+'/'+searchDate;
      }
   }
 };
 const resetDCAFormHandler = () =>{
   setSearchDCAFormData({ text:'', date:'' });
 };
 useEffect(()=>{
   console.log("searchDCAFormData: ", searchDCAFormData);
 },[searchDCAFormData]);
 const DailyStatistics = ({ data }) =>{
   return (<div style={{ display:'flex' }}>
      {data?.map((d,i)=>{
         return (<div key={i} style={{ flex:1, padding:'5px' }}>
            <Card padding={15}>
               <div align="center">
                  <span style={{ fontSize:'16px' }}></span><b>{d?.label}</b>
                  <div><h1 className="mt-1"><b>{d?.value}</b></h1></div>
               </div>
            </Card>
         </div>);
      })}
   </div>);
 };
 return (<div>
 <Modal title={lang==='hi'?"खोज मानदंड अनिवार्य हैं":"Search Criteria Required"} show={showModel} onClose={setShowModal}
   colorConfig={{ header: { backgroundColor:'#eee' } }}>
   {lang==='hi'?
   (<div className="pad15p fs14p">
      आगे बढ़ने के लिए कृपया कम से कम एक खोज मानदंड दर्ज करें। 
      आप किसी कीवर्ड का उपयोग करके खोज सकते हैं या तारीख चुन सकते हैं, या "करंट अफेयर्स खोजें" पर क्लिक करने से पहले कीवर्ड और 
      तारीख दोनों लागू कर सकते हैं।
   </div>):
   (<div className="pad15p"><i>Please enter at least <b><u>one search criterion</u></b> to continue. You can search 
      using a <b><u>keyword</u></b> or <b><u>select a date</u></b>, 
      or <b><u>apply both</u></b> keyword and date before clicking <b>"Search Current Affairs"</b>.</i></div>)}

 </Modal>
 <div style={{ backgroundColor:'#f8ffb2', paddingTop:'15px', paddingBottom:'15px', 
    borderTop:'1px solid #ccc', borderBottom:'1px solid #ccc' }}>
    <ContainerFluid>
        <Row>
            <Col md={6}>
               <h1 className="fw-bold">{lang==='hi'?"दैनिक यूपीएससी करंट अफेयर्स":"Daily UPSC Current Affairs"}</h1>
               <div className="mt-1">
                  {lang==='hi'?
                  (<span className="fs14p">राजव्यवस्था, शासन, अर्थव्यवस्था, अंतर्राष्ट्रीय संबंध, विज्ञान एवं प्रौद्योगिकी, पर्यावरण और सामाजिक मुद्दों को कवर करने वाली 
                     व्यापक दैनिक समसामयिकी तक पहुंच प्राप्त करें। सभी यूपीएससी परीक्षाओं के लिए तैयार की गई यह सामग्री अभ्यर्थियों को मजबूत 
                     विश्लेषणात्मक और उत्तर-लेखन (आंसर-राइटिंग) कौशल विकसित करने में मदद करती है।</span>):
                  (<i>Access comprehensive daily current affairs covering Polity, Governance, Economy, International Relations, 
                  Science & Technology, Environment, and Social Issues. Designed for all UPSC examinations, these updates 
                  help aspirants build strong analytical and answer-writing skills.</i>)}
               </div>      
            </Col>
            <Col md={6}>
               <DailyStatistics data={data} />
            </Col>
        </Row>
        <Row>
            <Col md={8}>
               <form id="searchForm" onSubmit={(e) => {
                                 e.preventDefault();
                                 searchDCAFormHandler();
               }}>
               <div className="d-flex gap-2 mt-3">
                     <TextBox name="searchCurrentAffairs" 
                        placeholder={lang==='hi'?"करंट अफेयर्स खोजें":"Search Current Affairs"} 
                           value={searchDCAFormData?.text}
                           onChange={(data)=>searchDCAFormFieldHandler("text", data?.value)} />
                     <DateTimePicker type="datePicker" id="date" name="date" value={searchDCAFormData?.date} 
                           minValue={"2025-01-01"} maxValue={new Date().toISOString().split('T')[0]}
                           onChange={(data)=>searchDCAFormFieldHandler("date", data?.value)}/>
                     <Button type="warning" size={11} style={{ border:'1px solid #ccc' }} className="text-nowrap"
                           onClick={()=>searchDCAFormHandler()}><b>
                        <Icon type="FontAwesome" name="fa-search" size={11} style={{ marginRight:'5px' }} />
                           {lang==='hi'?"करंट अफेयर्स खोजें":"Search Current Affairs"}
                     </b></Button>
                     <Button type="danger" size={11} style={{ border:'1px solid #ccc' }}  className="text-nowrap"
                           onClick={()=>resetDCAFormHandler()}><b>
                        <Icon type="FontAwesome" name="fa-repeat" size={11} style={{ marginRight:'5px' }} />
                           {lang==='hi'?"साफ़ करें":"Reset"}
                              </b></Button>
               </div>
               </form>
            </Col>
        </Row>
    </ContainerFluid>
 </div>
 </div>);
};

export default HeaderDCA;