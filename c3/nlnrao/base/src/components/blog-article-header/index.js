import React from "react";
import { Avatar, getAppContext } from "e-ui-react";
import Resume from '@Components/resume/index.js';
import './index.css';

const BlogArticleHeader = ({ title, date}) =>{
 const { setContextData } = getAppContext();
 return (<div>
	<Resume />
    <div align="center"><h1 className="blog-title"><b>{title}</b></h1></div>
      <div className="blog-details" style={{ display:'flex', justifyContent:'center', alignItems:'center' }}>
		<div style={{ width:'50%' }} className="padRight15p curpoint" onClick={()=>setContextData({ resumeStatus: 'open' })}>
			<Avatar size={25} src="https://storage.googleapis.com/turing_developers/avatar/1696419094281_WhatsApp%20Image%202023-10-04%20at%2017.00.51.jpeg" />
		  	<span style={{ padding:'5px' }}>Nellutla L N Rao</span>
		</div>
		<div style={{ width:'50%' }}>
			<span className="pull-right padRight15p">
				<i className="fa fa-calendar blog-details-icon"></i> {date}
			</span>
		</div>
	  </div>
      <hr/>
 </div>);
};

export default BlogArticleHeader;