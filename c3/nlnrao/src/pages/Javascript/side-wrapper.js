import React from "react";
import { SideWrapperData } from '@StaticData/javascript-menu.js';
import { Colors, UrlParams, SideWrapperNavbar, SideWrapperMenu, SideWrapperPage, SideWrapperHeader, SideWrapperBody, AccordianListItems } from "e-ui-react";
import { LogoTitle } from '@Templates/Header/index.js';

const SideWrapper = ({ children }) =>{
 return (<>
 <SideWrapperNavbar barTheme="outline-primary">
        <SideWrapperMenu>
          <AccordianListItems 
                highlightColor={Colors.danger} 
                data={SideWrapperData} 
                selectKey="url" 
                selectValue={UrlParams().basePath} />
        </SideWrapperMenu>
        <SideWrapperPage>
            <SideWrapperHeader 
                isOpen={{
                xs: false,
                sm: false,
                xxl: true,
                xl: true
                }}
                colorConfig={{ backgroundColor:'#7f1231', color:'#fff' }}
                title={<LogoTitle />} >    
            </SideWrapperHeader>
            <SideWrapperBody>
               {children}
            </SideWrapperBody>
        </SideWrapperPage>
 </SideWrapperNavbar>
 </>);
};

export default SideWrapper; 