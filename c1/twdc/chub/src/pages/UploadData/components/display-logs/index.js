import React, { useState, useEffect } from "react";
import { Card, Row, Col, TablePagination, searchTableTerm, cleanJSONString  } from "e-ui-react";
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
      console.log("currentData [pages]: ", row?.readable_text);
      let data = (row?.readable_text) && cleanJSONString( row?.readable_text );
          data = JSON.parse(data);
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
      let data = (row?.readable_text) && cleanJSONString( row?.readable_text );
          data = JSON.parse(data);
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
 </div>);
};

export default DisplayLogs;