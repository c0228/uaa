import React from 'react';
import './index.css';

const ResumeHeader = ({ title }) =>{
 return (<div className="resume-header-main"><b>{title}</b></div>);
};

export const ResumeSubHeader = ({ title }) =>{
 return (<div className="resume-header-sub pt-1 pb-1 px-3 mb-3"><b>{title}</b></div>);
};

export default ResumeHeader;