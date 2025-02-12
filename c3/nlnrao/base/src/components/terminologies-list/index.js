import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import BlogListHeader from '@Components/blog-list-header/index.js';

const Terminologies = ({ title, prefix, data }) =>{
   // Memoizing sortedTerminologies to avoid unnecessary recalculations
   const sortedTerminologies = useMemo(() => {
    return Object.entries(data)
      .filter(([key]) => key.startsWith(prefix))
      .sort((a, b) => a[1].label.localeCompare(b[1].label));
  }, [prefix, data]); // Recalculate only when prefix or data changes

 return (<div>

 <BlogListHeader label={title?title:"Terminologies"} />

 <div style={{ paddingLeft:'5px', marginBottom:'60px' }}>
   {sortedTerminologies?.map((t,i)=>{
     return (<div key={i} className={(i>0?"mtop15p":"")}>
      <Link to={process.env.PROJECT_URL+t[0]} style={{ textDecoration:'none' }}>
        <span className="terminologies-hgl-link"><b>{t[1]?.label}</b></span>
      </Link>
     </div>);
   })}
  </div>
 </div>);
};

export default Terminologies;