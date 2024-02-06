import React from "react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import { ContainerFluid, Row, Col } from "e-ui-react";
import ProfileCreate from "./ProfileCreate/index.js";

const ProfileCreateNew = ()=>{
 return (<>
 <Header menulinks={HeaderMenu()} activeId="CreateNewProfile" />
 <ContainerFluid>
    <div className="mtop15p mbot15p">
        <Row>
            <Col xl={9} xxl={9}>
                <ProfileCreate />
            </Col>
            <Col xl={3} xxl={3}>
                <div className="mtop15p mbot15p" style={{borderBottom:"2px solid #630062"}}>
                    <h4 className="bs-header" style={{marginBottom:"5px",color:"rgb(149, 48, 98)"}}><b>Your other Profiles</b></h4> 
                </div>
            </Col>
        </Row>
    </div>
 </ContainerFluid>
 </>);
};

export default ProfileCreateNew;