import React from "react";
import { getAppContext } from "e-ui-react";
import Resume from '@Components/resume/index.js';
import './index.css';

const BlogArticleHeader = ({ title, date}) =>{
 const { setContextData } = getAppContext();
 return (<div>
	<Resume />
    <div align="center"><h1 className="blog-title"><b>{title}</b></h1></div>
      <div className="blog-details">
		<span className="padRight15p curpoint" onClick={()=>setContextData({ resumeStatus: 'open' })}>
		  <i className="fa fa-user-circle-o blog-details-icon"></i> Nellutla L N Rao
		</span>
		<span className="pull-right padRight15p">
			<i className="fa fa-calendar blog-details-icon"></i> {date}
		</span>
	  </div>
      <hr/>
 </div>);
};

export default BlogArticleHeader;