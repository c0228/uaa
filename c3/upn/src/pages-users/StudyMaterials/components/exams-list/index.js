import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Icon } from "e-ui-react";
import './index.css';

const ExamsList = ({ data, activeHandler }) =>{
 const { lang } = useParams();
 const menuList = data?Object.keys(data):[];
 const SelectExamHandler = (id) =>{
    activeHandler?.setActiveExam(id);
 };
 return (<div style={{ borderRight:'1px solid #ccc', padding:'8px' }}>
  <div>
  {menuList?.map((e,i)=>{
    const activeColor = '#065fc5';
    const defaultColor = '#ccc';
    const id = data?.[e]?.[lang+'Id'];
    const label = data?.[e]?.[lang+'Label'];
    const icon = data?.[e]?.icon;
    const desc = data?.[e]?.[lang+'Desc'];
    return (<div key={i} style={{ marginBottom:'5px' }} onClick={()=>SelectExamHandler(e)}>
        {/** #065fc5 */}
        <Card padding={5} backgroundColor={activeHandler?.activeExam===e?"#d9eaff":"#fffdfd"} 
            style={{ border:activeHandler?.activeExam===e?'1px solid #065fc5':'1px solid #ccc', cursor:'pointer' }}>
            <div style={{ display:'flex', flex:1 }}>
                <div style={{ width:'20%', display: 'flex', justifyContent:'center', alignItems:'center' }}>
                    <div align="center" className={activeHandler?.activeExam===e?"sm-exams sm-exams-section-active":"sm-exams exams-section"}>
                        <Icon type="FontAwesome" name={icon} size={35} color={activeHandler?.activeExam===e?"#065fc5":"#555"} />
                    </div>
                </div>
                <div style={{ width:'80%', padding:'5px' }}>
                    <div style={{ color: (activeHandler?.activeExam===e)?"#065fc5":"#555" }}>
                        <span className={activeHandler?.activeExam===e?"sm-exams-code-active":"sm-exams-code"}><b>{id}</b></span>
                        <span style={{ marginLeft:'5px' }}><b>{label}</b></span>
                    </div>
                    <div style={{ color:'#555', marginTop:'5px' }}>{desc}</div>
                </div>
            </div>
            
        </Card>
    </div>);
  })}
  </div>
 </div>);
};

export default ExamsList;