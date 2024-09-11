import React from "react";
import { Icon, Row, Col } from "e-ui-react";

const DisplayFiles = ({ uploadedList, addToBreadCrumb }) =>{
 return (<div>
  {uploadedList?.length>0?(<Row>
    {uploadedList?.map((file,index)=>{
      return (<Col key={index} md={4}>
        <div align="center" className="ud-file-box" onClick={()=>addToBreadCrumb(file)}>
          <div className="ud-file-icon"><Icon type="FontAwesome" name="fa-file-excel-o" size={52} /></div>
          <div className="mtop15p ud-file-label"><b>{file}</b></div>
        </div>
      </Col>)
     })}
  </Row>):(<div align="center" className="mtop15p ud-file-placeholder">
    <i>No Files were found to display here</i> {uploadedList?.length}
  </div>)}
 </div>);
};

export default DisplayFiles;