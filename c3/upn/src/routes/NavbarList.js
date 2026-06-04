import React from "react";
import { UrlParams, Icon } from "e-ui-react";

const url = UrlParams().baseUrl;

export const HeaderMenu = ()=> [{ id:'Home', url: url+'home', label:'Home' },
{ id:'CurrentAffairs', url:url+'current-affairs', label:'Current Affairs' },
{ id:'Authentication', url:url+'app/authentication', label:'SignUp / Login' }];