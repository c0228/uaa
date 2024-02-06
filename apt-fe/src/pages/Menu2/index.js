import React from "react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import { HeaderMenu2 } from '@Config/HeaderMenu2.js';
import { ContainerFluid, Row, Col, Icon, Hover } from "e-ui-react";

const VkacHeader = ()=> {
return(<>
<div style={{backgroundColor:"#006EB3", color:"white"}}>
    <ContainerFluid>
      <Row>
        <Col xl={1} xxl={1}>
        </Col>
        <Col xl={7} xxl={7}>
          <div className="mtop5p mbot5p">
            <Icon type="FontAwesome" name="fa-envelope" size={16} /> info@vkAbroadconsultancy.com
          </div>
        </Col>
        <Col xl={4} xxl={4}>
        <div className="mtop5p mbot5p" align="right">
          <span><Icon type="FontAwesome" name="fa-plane" size={20}/></span>
            <span> USA</span>
            <span> UK</span>
            <span> AUS</span>
            <span> CANADA</span>
            <span> + Many More</span>
          </div>
        </Col>
      </Row>
    </ContainerFluid>
  </div>
</>);
};


const VkCarousel = ()=>{
return(<>

</>);
};

const Menu2 = ()=>{
 
return (<>
{/* <Header menulinks={HeaderMenu} activeId="Menu2" />  */}
  <VkacHeader/>
  <Header menulinks={HeaderMenu2} activeId="Menu2" /> 
  <VkCarousel/>

</>);
};

export default Menu2;