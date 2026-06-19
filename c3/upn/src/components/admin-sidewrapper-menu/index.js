import React, { useState, useEffect } from "react";
import { SideWrapperNavbar, SideWrapperPage, SideWrapperMenu, SideWrapperHeader, SideWrapperBody,
Icon, ContainerFluid, Row, Col } from "e-ui-react";
import { AppColors } from "@Utils/AppColorManager.js";
import { data } from './menu.js';
import './index.css';

const AdminSideWrapperMenu = ({ children }) =>{
 const menuTitleHeaderHandler = (index) =>{
     setActiveItem((prev) => (prev === index ? null : index));
 };
 const menuItemClickHandler = (item) =>{
    window.location.href = process.env.PROJECT_URL + item?.url;
 };
 const getDefaultOpenGroup = (data) => {
    const currentURL = window.location.href.replace(/#$/, '');
    return data.findIndex(group =>
        group.items.some(item =>
            currentURL === process.env.PROJECT_URL + item.url
        )
    );
 };
 const [activeItem, setActiveItem] = useState(getDefaultOpenGroup(data));
 const LeftSideMenu = () =>{
  return (<div className="mtop15p">
  <ContainerFluid>
    <Row>
     <Col md={12}>
      {data?.map((d,i1)=>{
        return (<div key={i1} style={{ marginBottom:'10px' }}>
        <div className="admin-sidewrapper-menu-headertitle" onClick={()=>menuTitleHeaderHandler(i1)}>
            {d?.group} 
            <span className="pull-right">
                <Icon type="FontAwesome" name="fa-angle-double-down" size={16} />
            </span>
        </div>
        <div className={(i1===activeItem)?"collapse show admin-sidewrapper-menu-items-section":"collapse admin-sidewrapper-menu-items-section"}>
        {d?.items?.map((a,i2)=>{
            const currentURL = window.location.href?.replace(/#$/, '');
            const itemURL = process.env.PROJECT_URL+a?.url;
            return (<div key={i2} className={currentURL===itemURL?"admin-sidewrapper-menu-items-active":"admin-sidewrapper-menu-items"} 
                onClick={()=>menuItemClickHandler(a)}>{a?.label}</div>);  
        })}
        </div>
        </div>);
      })}
     </Col>
    </Row>
  </ContainerFluid>
  </div>);
 };
 return (<div>
    <SideWrapperNavbar barTheme="outline-primary">
        <SideWrapperMenu config={{ backgroundColor: '#2a3042' }}>
            <LeftSideMenu />
        </SideWrapperMenu>
        <SideWrapperPage>
            <SideWrapperHeader>
                        
            </SideWrapperHeader>
            <SideWrapperBody>

            </SideWrapperBody>
        </SideWrapperPage>
    </SideWrapperNavbar>
 </div>);
};

export default AdminSideWrapperMenu;