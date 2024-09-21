import React, { useState, useEffect } from "react";
import { Card, Row, Col, TablePagination, searchTableTerm  } from "e-ui-react";
import UniCurrentDataDisplayer from "./components/UniCurrentDataDisplayer/index.js";
import UniPreviousDataDisplayer from "./components/UniPreviousDataDisplayer/index.js";
import CourseCurrentDataDisplayer from "./components/CourseCurrentDataDisplayer/index.js";
import CoursePreviousDataDisplayer from "./components/CoursePreviousDataDisplayer/index.js";
import './index.css';

const DisplayLogs = ({ selectedFile }) =>{
  const columns = [{
    header: 'S.No.',
    align:'center',
    key: 'id',
    width:'5%',
    render: (_row, _searchTerm, rowIndex) => (<div>{rowIndex+1}</div>)
  },
  {
    header: 'Sheet Name',
    key: 'sheetName',
    width:'10%',
    render: (row, searchTerm) =>(<div>{searchTableTerm(row?.sheetName, searchTerm)}</div>)
  },
  { 
    header: 'Operation', 
    key: 'operations', 
    width:'9%',
    render: (row, searchTerm) =>(<div>
       {row?.operation==='C'&& searchTableTerm('CREATE', searchTerm)}
       {row?.operation==='U'&& searchTableTerm('UPDATE', searchTerm)}
    </div>)
  },
  { 
    header: 'Current Data', 
    key: 'currentData', 
    width:'38%',
    render: (row, searchTerm) =>{
      const data = row?.readable_text && JSON.parse(row?.readable_text);
      return (<div>
      {row?.sheetName === 'UNIVERSITIES' && (<UniCurrentDataDisplayer data={data?.["CURRENT_DATA"]} searchTerm={searchTerm} />)}
      {row?.sheetName === 'COURSES' && (<CourseCurrentDataDisplayer data={data?.["CURRENT_DATA"]} searchTerm={searchTerm} />)}
    </div>);
    }
  },
  { 
    header: 'Previous Data', 
    key: 'previousData', 
    width:'38%',
    render: (row, searchTerm) =>{
      const data = row?.readable_text && JSON.parse(row?.readable_text);
      return (<div>
      {row?.sheetName === 'UNIVERSITIES' && 
            row?.operation==='U' && 
            (<UniPreviousDataDisplayer data={data?.["PREVIOUS_DATA"]?.[0]} searchTerm={searchTerm} />)}
            {row?.sheetName === 'COURSES' && row?.operation==='U' && 
            (<CoursePreviousDataDisplayer data={data?.["PREVIOUS_DATA"]?.[0]} searchTerm={searchTerm} />)}
    </div>);
    }
  },
];
 return (<div>
  <TablePagination header={{ backgroundColor:'#f1f1f1', color:'#000', columns: columns }} pageSize={10} api={{
    url: process.env.NEXUS_URL+"university/files/logs",
    method:"GET", params:{ fileName:selectedFile } }} />
    {/*
  <div className="table-responsive log-table-display">
   <table className="table log-table">
   <thead>
      <tr style={{ backgroundColor:'#f1f1f1' }}>
        <td className="col-2pc"><b>#</b></td>
        <td className="col-3pc"><b>Sheet Name</b></td>
        <td className="col-5pc"><b>Operation</b></td>
        <td className="col-35pc"><b>Current Data</b></td>
        <td className="col-35pc"><b>Previous Data</b></td>
      </tr>
    </thead>
    <tbody>
        {fileLogs?.map((fileLog, index)=>{
         const data = fileLog?.readable_text && JSON.parse(fileLog?.readable_text);
         console.log("data: ", data);
         return (<tr key={index}>
            <td className="col-2pc">{index+1}</td>
            <td className="col-3pc">{fileLog?.sheetName}</td>
            <td className="col-5pc">
                {fileLog?.operation==='C'&& 'CREATE'}
                {fileLog?.operation==='U'&& 'UPDATE'}
            </td>
            <td className="col-35pc text-wrap">
            {fileLog?.sheetName === 'UNIVERSITIES' && (<UniCurrentDataDisplayer data={data?.["CURRENT_DATA"]} />)}
            {fileLog?.sheetName === 'COURSES' && (<CourseCurrentDataDisplayer data={data?.["CURRENT_DATA"]} />)}
            </td>
            <td className="col-35pc text-wrap">
            {fileLog?.sheetName === 'UNIVERSITIES' && 
            fileLog?.operation==='U' && 
            (<UniPreviousDataDisplayer data={data?.["PREVIOUS_DATA"]?.[0]} />)}
            {fileLog?.sheetName === 'COURSES' && fileLog?.operation==='U' && 
            (<CoursePreviousDataDisplayer data={data?.["PREVIOUS_DATA"]?.[0]} />)}
            </td>
          </tr>);
        })}
    </tbody>
   </table>
  </div> */}
 </div>);
};

export default DisplayLogs;