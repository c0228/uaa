import React from "react";
import './index.css';

const SimpleTimeline = ({ data }) =>{
 const TimelineBit = ({ title, desc }) =>{
    return (<div className="simple-timeline">
     <div className="simple-timeline-hgl"></div>
     <div className="simple-timeline-section">
        <h4 className="simple-timeline-title"><b>{title}</b></h4>
        <div className="mtop15p padBot35p lh25p" style={{ paddingLeft:'15px' }}>{desc}</div>
     </div>
    </div>);
 };

 return (<div>
  {data?.map((d,i)=>{
    return (<TimelineBit key={i} title={d?.title} desc={d?.desc} />)
  })}
 </div>);
};

export default SimpleTimeline;