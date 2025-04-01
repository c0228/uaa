import React from "react";

const HglBgHeader5 = ({ label, isUpperCase }) =>{
 return (<div className="mtop15p" style={{ backgroundColor:'#ccc', paddingTop:'15px', paddingBottom:'5px', 
    paddingLeft:'15px', paddingRight:'8px', boxShadow:'2px 2px 2px 2px #ccc', borderRadius:'5px', 
    textTransform:isUpperCase?'uppercase':'capitalize' }}>
    <h5><b>{label}</b></h5>
 </div>);
};

export default HglBgHeader5;