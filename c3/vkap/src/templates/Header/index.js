import React from "react";
import { Nav, Button, Icon, DropdownElement } from "e-ui-react";
import { useAuth } from "@Provider/AuthProvider";
import './index.css';

const Header = ({ activeId, menulinks })=>{

 const { logout } = useAuth();

 let userAuthDetails = localStorage?.getItem("USER_AUTH_DETAILS"); 
     userAuthDetails = JSON.parse( userAuthDetails );

 const name = userAuthDetails?.data?.name;

 const NavHeaderRight = () =>{

  const NavMenu = ({ icon, title }) =>{
    return (<div><Icon type="FontAwesome" name={icon} size={14} /> 
    <span className="mLeft15p"><b>{title}</b></span></div>);
  };

  const NavLabel = () =>{
    return (<div><b>Hello <span className="mRight5p">{name}</span></b> 
    <Icon type="FontAwesome" name="fa-caret-down" size={12} /></div>);
  };

  const menus = [{ url:'#', title:(<div><NavMenu icon="fa-user" title="My Profile" /></div>) },
    { url:'#', title:(<div onClick={()=>logout('/')}><NavMenu icon="fa-sign-out" title="Logout" /></div>) }];

  return (<DropdownElement width="130px" 
    label={<NavLabel />} 
    menus={menus} />);

 };

 return (<nav className="navbar navbar-expand-sm navbar-bg">
 <div className="container-fluid">
   <a className="navbar-brand" href="#">
     <img className="navbar-logo" src={process.env.PROJECT_URL+"assets/logo/logo-flat.png"} />
   </a>
   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
     <span className="navbar-toggler-icon"></span>
   </button>
   <div className="collapse navbar-collapse" id="collapsibleNavbar">
       <div className="me-auto">
          <div className="mtop15p">
           <Nav menulinks={menulinks} activeId={activeId} />
          </div>
       </div>
       <div  className="d-flex">
          <div className="navbar-div-right"><NavHeaderRight /></div>
       </div>
   </div>
   </div>
</nav>);
};

export default Header;