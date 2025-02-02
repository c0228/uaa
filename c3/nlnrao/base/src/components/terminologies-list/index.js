import React from "react";
import { Link } from "react-router-dom";
import BlogListHeader from '@Components/blog-list-header/index.js';

const Terminologies = ({ title, data }) =>{
 return (<div>
  <BlogListHeader label={title?title:"Terminologies"} />
  <div style={{ paddingLeft:'5px', marginBottom:'60px' }}>
   {data?.list?.map((t,i)=>{
     return (<div className={(i>0 && "mtop15p")}>
      <Link to={process.env.PROJECT_URL+t?.url} style={{ textDecoration:'none' }}>
        <span className="terminologies-hgl-link"><b>{t?.label}</b></span>
      </Link>
     </div>);
   })}
  </div>
 </div>);
};

export default Terminologies;