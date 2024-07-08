import React from 'react';

const ResumeHeader = ({ title }) =>{
 return (<div className="resume-header-main"><b>{title}</b></div>);
};

export const ResumeSubHeader = ({ title }) =>{
 return (<div className="resume-header-sub1 pt-1 pb-1 px-3 mb-3"><b>{title}</b></div>);
};

export default ResumeHeader;