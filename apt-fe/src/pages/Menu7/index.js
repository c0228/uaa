import React from "react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import { ContainerFluid, Row, Menu } from "e-ui-react";
import ContactUs from "./contactUs/index.js";

const Menu7 = ()=>{
 return (<>
  <Header menulinks={HeaderMenu} activeId="Menu7" />
    <Row>
        <div>
            <Menu type="pill" list={[{ id:"home", label:"Contact Us", component:(<div><ContactUs /></div>) },
            { id:"menu1", label:"Menu 1", component:(<div></div>) },
            { id:"menu2", label:"Menu 2", component:(<div>Menu #2 Content</div>) }]} />
        </div>
    </Row>
 </>);
};

export default Menu7;