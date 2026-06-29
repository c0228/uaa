import React, { useState, useEffect } from "react";
import { SideWrapperNavbar, SideWrapperPage, SideWrapperMenu, SideWrapperHeader, SideWrapperBody,
Icon, ContainerFluid, Row, Col } from "e-ui-react";
import Header from '@Templates/Header2/index.js';
import { HeaderMenu } from '@AppRoutes/NavbarList.js';
import { useAuth } from "@Hooks/useAuth.js";
import { AppColors } from "@Utils/AppColorManager.js";
import { data } from './menu.js';
import './index.css';

const OpenSideWrapperMenu = ({ children, activeId }) =>{
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
 const { userDetails, isLogged, lang } = useAuth();
 const [activeItem, setActiveItem] = useState(getDefaultOpenGroup(data));
 const LeftSideMenu = () =>{
  return (<div className="mtop15p">
  <ContainerFluid>
    <Row>
     <Col md={12}>
      {data?.map((d,i1)=>{
        return (<div key={i1} style={{ marginBottom:'10px' }}>
        <div className="open-sidewrapper-menu-headertitle" onClick={()=>menuTitleHeaderHandler(i1)}>
            <Icon type="FontAwesome" name={d?.icon} size={15} style={{ marginRight:'5px' }} />
            {d?.group} 
            <span className="pull-right">
                <Icon type="FontAwesome" name="fa-angle-double-down" size={16} />
            </span>
        </div>
        <div className={(i1===activeItem)?"collapse show open-sidewrapper-menu-items-section":"collapse open-sidewrapper-menu-items-section"}>
        {d?.items?.map((a,i2)=>{
            const currentURL = window.location.href?.replace(/#$/, '');
            const itemURL = process.env.PROJECT_URL+a?.url;
            return (<div key={i2} className={currentURL===itemURL?"open-sidewrapper-menu-items-active":"open-sidewrapper-menu-items"} 
                onClick={()=>menuItemClickHandler(a)}>
                <div style={{ display:'flex', flex:1 }}>
                    <div style={{ width:'10%' }}>
                        <Icon type="FontAwesome" name={a?.icon} size={13} style={{ marginRight:'8px' }} />
                    </div>
                    <div style={{ width:'90%' }}>
                        <span className="open-sidewrapper-menu-items-title">{a?.label}</span>
                    </div>
                </div>
            </div>);  
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
        <SideWrapperMenu style={{ backgroundColor: '#ebedee', borderRight:'1px solid #ccc' }}>
            <LeftSideMenu />
        </SideWrapperMenu>
        <SideWrapperPage>
            <SideWrapperHeader>
                <Header menulinks={HeaderMenu(lang, isLogged)} activeId={activeId} />
            </SideWrapperHeader>
            <SideWrapperBody>
            {children}
            </SideWrapperBody>
        </SideWrapperPage>
    </SideWrapperNavbar>
 </div>);
};

export default OpenSideWrapperMenu;