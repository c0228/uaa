import React, { useEffect, useState } from "react";
import { ContainerFluid, Row, Col, Badge, Card, Icon, Button } from "e-ui-react";
import AdminSideWrapperMenu from "@Components/sidewrapper-menu-admin/index.js";

const CacheManager = () =>{
 useEffect(() => {
    document.body.style.backgroundColor = "#f6f6f9";
 }, []);
 return (<AdminSideWrapperMenu>
          <div className="mtop15p">
            <ContainerFluid>
              <Row>
                <Col md={12}>
                  <h3>
                    <Icon type="FontAwesome" name="fa-database" size={19} style={{ marginRight:'8px' }}  />
                    <b>Cache Manager</b>
                    <hr />
                  </h3>
                </Col>
              </Row>
    </ContainerFluid>
    </div>
 </AdminSideWrapperMenu>);
};

export default CacheManager;