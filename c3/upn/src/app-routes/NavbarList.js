import React from "react";
import { UrlParams, Icon } from "e-ui-react";

const url = UrlParams().baseUrl;

export const HeaderMenu = ()=> [{ id:'Home', url: url+'home', label:'Home' },
    { id:'DailyCurrentAffairs', url:url+'daily-current-affairs/list/art-and-culture/ancient-india', label:'Daily Current Affairs' }];