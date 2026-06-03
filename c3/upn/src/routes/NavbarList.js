import React from "react";
import { UrlParams, Icon } from "e-ui-react";

const url = UrlParams().baseUrl;

export const HeaderMenu = ()=> [{ id:'Home', url: url+'App/Home', label:'Home' },
{ id:'Menu', url:url+'app/Menu', label:'Menu' },
{ id:'Authentication', url:url+'app/authentication', label:'SignUp / Login' }];