import React from "react";
import { UrlParams, Icon } from "e-ui-react";

const url = UrlParams().baseUrl;

export const HeaderMenu = ()=>{
 let menu = [{ id:'Home', url: url+'Home', label:'Home' },
 { id:'BrowseMatrimony', url:url+'BrowseMatrimony', label:'Browse Matrimony' },
 { id:'MatchCalculator', url:url+'MatchCalculator', label:'Match Calculator' },
 { id:'Authentication', url:url+'User/Authentication', label:'SignUp / Login' }];
 const login = sessionStorage.getItem("USER_LOGIN");
 console.log("login", login);
 if(login!==null){
    const loginData = JSON.parse(login);
    if (new Date().getTime() < new Date(loginData.expire).getTime()){ // Check Expiry Time
        menu = [{ id:'MyDashboard', url:url+'MyDashboard', label:'My Dashboard' },
        { id:'BrowseMatrimony', url:url+'BrowseMatrimony', label:'Browse Matrimony' },
        { id:'MatchCalculator', url:url+'MatchCalculator', label:'Match Calculator' },
        { id:'CreateNewProfile', url:url+'CreateNewProfile#MentionProfile', label:'Create New Profile' },
        { id:'MyAccount', url:'#', 
 label:(<div className="dropdown" style={{ marginTop:'-3px' }}>
 <div align="center" className="dropdown-toggle" data-bs-toggle="dropdown">
   <Icon type="FontAwesome" name="fa-user-circle" size={25} />
 </div>
 <ul className="dropdown-menu show" style={{ marginLeft:'-500%' }}>
   <li>
    <a className="dropdown-item" href="#">
        <Icon type="FontAwesome" name="fa-user-circle-o" size={16} style={{ marginRight:'10px' }} />
        <b>My Account</b>
    </a>
   </li>
   <li onClick={()=>{
        sessionStorage.removeItem("USER_LOGIN");
        if(sessionStorage.getItem("USER_LOGIN")===null){ window.location.href=process.env.PROJECT_URL; }
    }}><a className="dropdown-item" href="#">
    <Icon type="FontAwesome" name="fa-sign-out" size={18} style={{ marginRight:'10px' }} />
    <b>Signout</b>
    </a></li>
 </ul>
</div>) },
    ];
    }
 } 
 return menu;
};