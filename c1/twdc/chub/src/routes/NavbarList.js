import React from "react";
import { UrlParams, Icon } from "e-ui-react";

const url = UrlParams().baseUrl;

export const HeaderMenu = ()=>{
  let userAuthDetails = localStorage.getItem("USER_AUTH_DETAILS");
        userAuthDetails = JSON.parse(userAuthDetails);
  let userRole = userAuthDetails?.data?.userRole;
  if(userRole === 'ADMINISTRATOR'){
    return ([{ id:'ManageCompany', url:url+'portal/manage-companies', label:'Manage Companies' },
      { id:'ManageJobs', url:url+'portal/manage-jobs', label:'Manage Jobs' },
      { id:'ManageBlogs', url:url+'portal/manage-blogs', label:'Manage Blogs' }
    ]);
    /* return ([{ id:'Universities', url:url+'consultancy/view-universities', label:'Universities' },
        { id:'ManageEmployees', url: url+'consultancy/employees', label:'Manage Employees' },
        { id:'ShortlistForm', url:url+'consultancy/students-shortlist-form', label:'Student\'s Shortlist Form' },
        { id:'ShortlistRecords', url:url+'consultancy/students-shortlist-records', label:'Student\'s Shortlist Records' },
        { id:'UploadData', url:url+'consultancy/upload-data', label:'Upload Data' }]); */
  }
    
}; 