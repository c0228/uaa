import React from "react";
import { UrlParams, Icon } from "e-ui-react";

const url = UrlParams().baseUrl;

export const HeaderMenu = ()=> [{ id:'MyDashboard', url:url+'consultancy/my-dashboard', label:'My Dashboard' },
{ id:'Employees', url: url+'consultancy/employees', label:'Employees' },
{ id:'Menu', url:url+'App/Menu', label:'Menu' },
{ id:'Authentication', url:url+'App/Authentication', label:'SignUp / Login' }];