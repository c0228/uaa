import React, { useState } from "react";
import { Card, Icon } from "e-ui-react";
import './index.css';

const ExamsData = {
    "CAPF": {
        "id": "CAPF",
        "enLabel": "CAPF Assistant Commandants",
        "hiLabel": "",
        "icon": "fa-shield",
        "desc": "Recruitment for Assistant Commandants in Central Armed Police Forces."
    },
    "CDS": {
        "id": "CDS",
        "enLabel": "Combined Defence Services",
        "hiLabel": "",
        "icon": "fa-fighter-jet",
        "desc": "Entry into the Indian Army, Navy and Air Force through CDS."
    },
    "CGSE": {
        "id": "CGSE",
        "enLabel": "Combined Geo-Scientist",
        "hiLabel": "",
        "icon": "fa-globe",
        "desc": "Recruitment of Geologists, Geophysicists and related scientific posts."
    },
    "CMS": {
        "id": "CMS",
        "enLabel": "Combined Medical Services",
        "hiLabel": "",
        "icon": "fa-user-md",
        "desc": "Recruitment of Medical Officers in Central Government services."
    },
    "CSE": {
        "id": "CSE",
        "enLabel": "Civil Services Examination",
        "hiLabel": "",
        "icon": "fa-university",
        "desc": "Recruitment for IAS, IPS, IFS and other Group A & B Civil Services."
    },
    "ESE": {
        "id": "ESE",
        "enLabel": "Engineering Services Examination",
        "hiLabel": "",
        "icon": "fa-cogs",
        "desc": "Recruitment of engineers for various Government departments."
    },
    "IES/ISS": {
        "id": "IES/ISS",
        "enLabel": "Indian Economic Service / Indian Statistical Service",
        "hiLabel": "",
        "icon": "fa-bar-chart",
        "desc": "Recruitment for Economics and Statistics professionals."
    },
    "IFoS": {
        "id": "IFoS",
        "enLabel": "Indian Forest Service",
        "hiLabel": "",
        "icon": "fa-tree",
        "desc": "Recruitment of officers for the Indian Forest Service."
    },
    "NDA": {
        "id": "NDA",
        "enLabel": "National Defence Academy & Naval Academy",
        "hiLabel": "",
        "icon": "fa-plane",
        "desc": "Entry into NDA and Naval Academy for defence officer training."
    },
    "RT": {
        "id": "RT",
        "enLabel": "Recruitment Tests",
        "hiLabel": "",
        "icon": "fa-pencil-square-o",
        "desc": "Direct recruitment examinations conducted by UPSC."
    },
    "SCRA": {
        "id": "SCRA",
        "enLabel": "Special Class Railway Apprentices",
        "hiLabel": "",
        "icon": "fa-train",
        "desc": "Special Railway Apprentices recruitment examination."
    }
};

const ExamsList = () =>{
 const [activeExam, setActiveExam] = useState('CAPF');
 const menuList = ExamsData?Object.keys(ExamsData):[];
 const SelectExamHandler = (id) =>{
    setActiveExam(id);
 };
 return (<div style={{ borderRight:'1px solid #ccc', padding:'8px' }}>
  <div>
  {menuList?.map((e,i)=>{
    const activeColor = '#065fc5';
    const defaultColor = '#ccc';
    const label = ExamsData?.[e]?.enLabel;
    const icon = ExamsData?.[e]?.icon;
    const desc = ExamsData?.[e]?.desc;
    return (<div style={{ marginBottom:'5px' }} onClick={()=>SelectExamHandler(e)}>
        {/** #065fc5 */}
        <Card padding={5} backgroundColor={activeExam===e?"#d9eaff":"#fffdfd"} 
            style={{ border:activeExam===e?'1px solid #065fc5':'1px solid #ccc', cursor:'pointer' }}>
            <div style={{ display:'flex', flex:1 }}>
                <div style={{ width:'20%', display: 'flex', justifyContent:'center', alignItems:'center' }}>
                    <div align="center" className={activeExam===e?"exams exams-section-active":"exams exams-section"}>
                        <Icon type="FontAwesome" name={icon} size={35} color={activeExam===e?"#065fc5":"#555"} />
                    </div>
                </div>
                <div style={{ width:'80%', padding:'5px' }}>
                    <div style={{ color: (activeExam===e)?"#065fc5":"#555" }}><b>{label}</b></div>
                    <div style={{ color:'#555'}}>{desc}</div>
                </div>
            </div>
            
        </Card>
    </div>);
  })}
  </div>
 </div>);
};

export default ExamsList;