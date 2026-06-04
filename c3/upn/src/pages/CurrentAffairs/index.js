import React from "react";
import { ContainerFluid, Row, Col, Card, Button  } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Routes/NavbarList.js';

const CurrentAffairs = () =>{
 return (<div>
    <Header menulinks={HeaderMenu()} activeId="CurrentAffairs" />
 </div>);
};

export default CurrentAffairs;