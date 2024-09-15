import React from "react";
import { UrlParams, Icon } from "e-ui-react";

const url = UrlParams().baseUrl;

export const HeaderMenu = ()=>{
  let userAuthDetails = localStorage.getItem("USER_AUTH_DETAILS");
        userAuthDetails = JSON.parse(userAuthDetails);
  let userRole = userAuthDetails?.data?.userRole;
  if(userRole === 'ADMINISTRATOR'){
    return ([{ id:'Universities', url:url+'consultancy/view-universities', label:'Universities' },
        { id:'ManageEmployees', url: url+'consultancy/employees', label:'Manage Employees' },
        { id:'ShortlistForm', url:url+'consultancy/students-shortlist-form', label:'Student\'s Shortlist Form' },
        { id:'ShortlistRecords', url:url+'consultancy/students-shortlist-records', label:'Student\'s Shortlist Records' },
        { id:'UploadData', url:url+'consultancy/upload-data', label:'Upload Data' }]);
  } else if(userRole === 'EMPLOYEE') {
    return ([{ id:'Universities', url:url+'consultancy/view-universities', label:'Universities' },
      { id:'ShortlistForm', url:url+'consultancy/students-shortlist-form', label:'Student\'s Shortlist Form' },
      { id:'ShortlistRecords', url:url+'consultancy/students-shortlist-records', label:'Student\'s Shortlist Records' },
    ]);
  } else {
    return ([{ id:'Universities', url:url+'consultancy/view-universities', label:'Universities' },
      { id:'ShortlistForm', url:url+'consultancy/students-shortlist-form', label:'Student\'s Shortlist Form' },
      
    ]);
  }
    
}; 