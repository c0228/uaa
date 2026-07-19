import React from "react";
import { Breadcrumb } from "e-ui-react";

const SMBreadcrumb = ({ label }) =>{
 return (<Breadcrumb backgroundColor="#eee" 
    data={[{ label:(<b>Study Materials</b>), url:'#' },
        { label: (<b>{label}</b>), url:'#' },
        { label:(<b>List of Subjects</b>), url:'#' }]} />);
};

export default SMBreadcrumb;