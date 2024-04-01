import React from "react";

export const Keywords = ({ data }) =>{
 return (<>
  <div style={{ marginTop:'25px' }}>
    {data?.map((keyword, index)=>{
      return (<span className="badge" style={{ marginRight:'3px',marginBottom:'5px', backgroundColor:'#ccc', color:'#555' }}>
        {keyword}</span>);
    })}
  </div>
 </>);
};