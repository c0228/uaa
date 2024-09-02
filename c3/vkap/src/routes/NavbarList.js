import React from "react";
import { UrlParams, Icon } from "e-ui-react";

const url = UrlParams().baseUrl;

export const HeaderMenu = ()=> [{ id:'ManageEmployees', url: url+'consultancy/employees', label:'Manage Employees' },
    { id:'ShortlistForm', url:url+'consultancy/shortlist-form', label:'Shortlist Form' }];