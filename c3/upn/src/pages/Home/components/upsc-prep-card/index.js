import React from "react";
import { Card, Button } from "e-ui-react";

const UPSCPrepCard = () =>{
 const data = {
    "Topics": "5000+",
    "Mock Tests": "2000+",
    "Subjects": "50+"
 };
 const DashboardCard = ({ data }) =>{
    const k = Object.keys(data);
    return (<div className="row mt-4">
        {k?.map((d,i)=>{
            return (<div key={i} className="col">
                <span style={{ fontSize:'16px' }}><b>{d}</b></span>
                <h2 className="mt-1">{data[d]}</h2>
            </div>);
        })}
    </div>);
 };
 return (<div className="mtop15p">
    <Card padding={15} backgroundColor="#f8ffb2">
        <div>
            <h1 className="fw-bold">India's Complete UPSC Preparation Platform</h1>
            <p>Prepare for every UPSC Examination in English and Hindi</p>
            <div className="mt-4">
                <Button type="warning" size={12} style={{ marginRight:'8px', border:'1px solid #000' }}><b>Start Learning</b></Button>
                <Button type="outline-dark" size={12}><b>Explore Exams</b></Button>
            </div>
            <DashboardCard data={data} />
        </div>
    </Card>
 </div>);
};

export default UPSCPrepCard;