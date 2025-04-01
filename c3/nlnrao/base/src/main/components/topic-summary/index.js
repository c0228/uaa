import React from "react";
import BlogListHeader from '@MainComponents/blog-list-header/index.js';
import OrderList from '@MainComponents/order-list/index.js';
import './index.css';

const TopicSummary = ({ data }) =>{

 const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
 };

 const SummaryTitle = ({ index, title }) =>{
  return (<div style={{ display:'flex'}}>
    <div style={{ width:'5%', lineHeight:'25px' }}><b>{index+1}.</b></div>
     <div style={{ width:'95%', lineHeight:'25px' }}><b>{title}</b></div>
    </div>);
 };

 return (<div>
    <BlogListHeader label="Summary Covered in this Topic" />
    <div className="list-group">
     <div className="list-group-item" style={{ backgroundColor:'#f8f9fa' }}>
     {/* */}
      {data?.map((d,i1)=>{
        return (<div key={i1}>
         <SummaryTitle title={d?.title} index={i1} />
         <OrderList data={d?.topics?.map((s,i2)=>{
           return (<div key={i2} className="topic-summary-hgl-link" 
             onClick={()=>scrollToSection(s?.scrollTo)}>{s?.label}</div>);
          })} />
        </div>);
      })}
     {/* */}
     </div>
    </div>
 </div>);
};

export default TopicSummary;