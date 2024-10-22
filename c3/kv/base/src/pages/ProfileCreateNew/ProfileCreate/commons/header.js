import React from "react";
import { ContainerFluid, Row, Col, ProgressBar } from "e-ui-react";

const Header = ({ title })=>{
    return (<div className="bs-profile-headers">
    <ContainerFluid>
        <Row>
            <Col xl={8} xxl={8}>{title}</Col>
            <Col xl={4} xxl={4}>
                <div className="mtop5p">
                    <ProgressBar type="danger" progress="55" height="8" />
                </div>
            </Col>
        </Row>
    </ContainerFluid>
</div>);
};

export default Header;