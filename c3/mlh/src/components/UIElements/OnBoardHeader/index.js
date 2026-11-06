import React from "react";

const OnBoardHeader = ({ label1, label2, label3}) =>{
 return ( <div style={{  marginTop:'15px' }}>
              <h2><b>
                <span style={{ color:'#fff', backgroundColor:'#27187e',  padding:'5px 12px' }}>{label1}</span> 
                <span style={{ color:'#27187e',backgroundColor:'#fff', border:'3px solid #27187e', padding:'10px 15px'  }}>{label2}</span>
                <span style={{ color:'#fff',backgroundColor:'#27187e', padding:'5px 12px' }}>{label3}</span> 
                </b></h2>
          </div>);
};

export default OnBoardHeader;