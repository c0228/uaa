import React from "react";
import { Card, Button, Badge, ProgressBar, Icon } from "e-ui-react";
import { AppColors, getRotatedColors } from "@Utils/AppColorManager.js"; 
import { FormatDate, DaysToGo } from "@Utils/DateFormatUtils.js";

const UpcomingExams = () =>{
 const DetailCard = () =>{
    const data = [{
        "annual_calendar": 2027,
        "exam": "Civil Service Examination (CSE)",
        "exam_date": "2027-05-23"
    },{
        "annual_calendar": 2027,
        "exam": "Indian Forest Service Examination (IFoS)",
        "exam_date": "2027-05-23"
    },{
        "annual_calendar": 2027,
        "exam": "National Defence Academy Exam (NDA)",
        "exam_date": "2027-04-11"
    },{
        "annual_calendar": 2027,
        "exam": "Combined Defence Services Exam (CDS)",
        "exam_date": "2027-04-11"
    },{
        "annual_calendar": 2027,
        "exam": "Engineering Services Examination (ESE)",
        "exam_date": "2027-01-31"
    },{
        "annual_calendar": 2027,
        "exam": "Indian Economic Service Examination (IES)",
        "exam_date": "2027-06-18"
    },{
        "annual_calendar": 2027,
        "exam": "Indian Statistical Service Examination (ISS)",
        "exam_date": "2027-06-18"
    },{
        "annual_calendar": 2027,
        "exam": "Combined Geo-Scientist Examination (CGS)",
        "exam_date": "2027-01-10"
    },{
        "annual_calendar": 2027,
        "exam": "Combined Medical Services Examination (CGS)",
        "exam_date": "2027-07-18"
    }];

   return (<div className="list-group">
    {data?.map((d,i)=>{
        const colorPaletteList = Object.keys(AppColors);
        const colorPalette = colorPaletteList[i % colorPaletteList.length]
        const annualCalendar = d?.["annual_calendar"];
        const exam = d?.["exam"];
        const examDate = d?.["exam_date"];
        const days = DaysToGo(examDate);
        return (<div className="list-group-item" style={{ backgroundColor: AppColors?.[colorPalette]?.["bg-light"] }}>
            <div style={{ fontSize:'12px', color: '#555' }}>
                <Badge type={colorPalette} label={<b>Prelims</b>} size="12" style={{ marginRight:'5px' }} />
                <b>UPSC | Annual Calendar {annualCalendar}</b>
            </div>
            <div>
                <span style={{ fontSize:'18px' }}><b>{exam}</b></span>
            </div>
            <div className="mtop5p">
                <ProgressBar height={10} background="#000"
                        segments={[{ progress: 20, color: AppColors?.[colorPalette]?.["bg-dark"] }]} />
                <div style={{ fontSize:'12px', marginTop:'5px' }}><b>{days} Days Remaining to Go</b></div>
            </div>
            <div align="right"><b>Exam on:</b> 
                <Badge type="dark-o" 
                    label={<>
                        <Icon type="FontAwesome" name="fa-calendar" size={14} style={{ marginRight:'5px' }} />
                        <b>{FormatDate(examDate)}</b>
                    </>} size="12" style={{ marginLeft:'5px' }} />
            </div>
        </div>);
    })}
   </div>);
 };
 return (<div className="mtop15p">
        <div><h2 className="fw-bold">Upcoming UPSC Examination</h2><hr/></div>
        <div className="mtop15p">
            <DetailCard />
        </div>
    </div>);
};

export default UpcomingExams;