import React from "react";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "e-ui-react";

const SMBreadcrumb = ({ label }) =>{
 const { lang } = useParams();
 return (<Breadcrumb backgroundColor="#eee" 
    data={[{ label:(<b>{lang==='hi'?'अध्ययन सामग्री':'Study Materials'}</b>), url:'#' },
        { label: (<b>{label}</b>), url:'#' },
        { label:(<b>{lang==='hi'?'विषयों की सूची':'List of Subjects'}</b>), url:'#' }]} />);
};

export default SMBreadcrumb;