import React, { useState, useEffect } from "react";

const DisplayLogs = ({ selectedFileLogs }) =>{
 const [fileLogs, setFileLogs] = useState();
 useEffect(()=>{
  setFileLogs(selectedFileLogs);
 },[selectedFileLogs]);
 return (<div>
  <div className="table-responsive" style={{ width:'100%', overflowX:'hidden' }}>
   <table className="table" style={{  borderCollapse: 'collapse' }}>
   <thead>
      <tr>
        <td style={{ width:'2%' }}><b>#</b></td>
        <td style={{ width:'3%' }}><b>Sheet Name</b></td>
        <td style={{ width:'5%' }}><b>Operation</b></td>
        <td style={{ width:'35%' }}><b>Current Data</b></td>
        <td style={{ width:'35%' }}><b>Previous Data</b></td>
      </tr>
    </thead>
    <tbody>
        {fileLogs?.map((fileLog, index)=>{
         const data = fileLog?.readable_text && JSON.parse(fileLog?.readable_text);
         console.log("data: ", data);
         return (<tr key={index}>
            <td style={{ width:'2%' }}>{index+1}</td>
            <td style={{ width:'3%' }}>{fileLog?.sheetName}</td>
            <td style={{ width:'5%' }}>
                {fileLog?.operation==='C'&& 'CREATE'}
                {fileLog?.operation==='U'&& 'UPDATE'}
            </td>
            <td style={{ width:'35%', overflowWrap:'wrap',wordBreak: 'break-word' }}>{JSON.stringify(data?.["CURRENT_DATA"])}</td>
            <td style={{ width:'35%', overflowWrap:'wrap',wordBreak: 'break-word' }}>{JSON.stringify(data?.["PREVIOUS_DATA"])}</td>
          </tr>);
        })}
    </tbody>
   </table>
  </div>
 </div>);
};

export default DisplayLogs;