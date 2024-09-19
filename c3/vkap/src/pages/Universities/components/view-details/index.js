
import React, { useState, useEffect } from "react";
import { Card, Row, Col, TablePagination, searchTableTerm } from "e-ui-react";
import { DisplayTemplate, DisplayExamDetails } from '@Components/Layouts/index.js';

const ViewUniversityDetails = ({ country }) =>{
 const CardTitle = ({ value }) =>{
    return (<div align="left"><span style={{ backgroundColor:'#f1f1f1', padding:'5px', borderRadius:'8px', border:'1px solid #ccc', fontSize:'22px' }}><b>{value}</b></span></div>);
 };
 const UniversityDetails = ({ row, searchTerm }) =>{
    console.log("row: ", row);
  return (<div>
  <Card padding={15}>
        <CardTitle value={searchTableTerm(row?.universityId, searchTerm)} />
        <DisplayTemplate size="4|8" label="University" value={searchTableTerm(row?.university, searchTerm)} />
        <DisplayTemplate size="4|8" label="Campus" value={searchTableTerm(row?.location+', '+row?.country, searchTerm)} />
        <DisplayTemplate size="4|8" label="Intake" value={searchTableTerm(row?.intake, searchTerm)} />
  </Card>
  <div style={{ marginTop:'10px' }}>
  <Card padding={15}><DisplayExamDetails row={row} /></Card>
  </div>
  </div>);
 };

 const CourseDetails = ({ row, searchTerm }) =>{
  return (<Row>
    {row?.courses?.data?.map((course,index)=>{
        return (<Col md={6}>
        <div style={{ marginBottom:'8px' }}>
            <Card padding={15}>
            <CardTitle value={searchTableTerm(course?.courseId+' ('+course?.courseType+')', searchTerm)} />
            <div><h4><b>{searchTableTerm(course?.course, searchTerm)}</b></h4></div>
            <DisplayTemplate size="4|8" label="Duration" value={searchTableTerm(course?.duration, searchTerm)} />
            <DisplayTemplate size="8|4" label="Application Fees" value={searchTableTerm(course?.appFees, searchTerm)} />
            <DisplayTemplate size="5|7" label="Fees" value={searchTableTerm(course?.fees, searchTerm)} />
            <DisplayTemplate size="6|6" label="Expenses" value={searchTableTerm(course?.leavingExpenses, searchTerm)} />
            <DisplayTemplate size="4|8" label="Initial Deposit" value={searchTableTerm(course?.initDeposit, searchTerm)} />
            <DisplayTemplate size="4|8" label="Deadline" value={searchTableTerm(course?.deadline, searchTerm)} />
            <div align="right">
            <div style={{ paddingTop:'5px', fontSize:'12px' }}>
                <a target="_blank" href={course?.courseURL}><b>Visit Website</b></a>
            </div>
            </div>
        </Card>
        </div>
        </Col>);
    })}
  </Row>);
 };
    const columns = [{
        header: 'S.No.',
        align:'center',
        key: 'id',
        width:'5%',
        render: (_row, _searchTerm, rowIndex) => (<strong>{rowIndex+1}</strong>)
      },
      {
        header: 'University Details',
        align:'center',
        key: 'id',
        width:'40%',
        render: (row, searchTerm) => (<UniversityDetails row={row} searchTerm={searchTerm} />)
      },
      {
        header: 'Course Details',
        align:'center',
        key: 'id',
        width:'55%',
        render: (row, searchTerm) => (<CourseDetails row={row} searchTerm={searchTerm} />)
      },
     ];

    return  (<div>
        {country && (<TablePagination header={{ backgroundColor:'#f1f1f1', color:'#000', columns: columns }} pageSize={10} api={{
            url: process.env.NEXUS_URL+"university/view", params:{ country:country },
            method:"GET" }} />)}
    </div>);
};

export default ViewUniversityDetails;