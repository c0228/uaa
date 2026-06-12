import React from "react";
import { UrlParams, Icon } from "e-ui-react";

const url = UrlParams().baseUrl;

export const HeaderMenu = (lang)=>{
    if(lang==='hi'){
        return [{ id:'Home', url: url+'home', label:'होम' },
            { id:'AboutUPSC', url: url+'about-upsc-examination', label:'यूपीएससी के बारे में' },
            { id:'DailyCurrentAffairs', url:url+'daily-current-affairs/list/art-and-culture/ancient-india', label:'डेली करंट अफेयर्स' }];
    } else {
         return [{ id:'Home', url: url+'home', label:'Home' },
            { id:'AboutUPSC', url: url+'about-upsc-examination', label:'About UPSC' },
            { id:'DailyCurrentAffairs', url:url+'daily-current-affairs/list/art-and-culture/ancient-india', label:'Daily Current Affairs' }];
 
    }
} 