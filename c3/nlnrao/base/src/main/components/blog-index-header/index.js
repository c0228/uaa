import React from "react";

export const BlogIndexHeader = ({ type, index, title }) =>{
 return (<div style={{ display: 'flex' }}>
  <div style={{ flexGrow: 0, paddingRight:'8px' }}>
    {type==='h4' && <h4><b>{index}.</b></h4>}
    {type==='simple' && <b>{index}.</b>}
  </div>
  <div style={{ flexGrow: 1 }}>
    {type==='h4' && <h4><b>{title}</b></h4>}
    {type==='simple' && <b>{title}</b>}
  </div>
 </div>);
};
