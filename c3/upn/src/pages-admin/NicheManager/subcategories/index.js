import React, { useEffect, useState } from "react";
import { ContainerFluid, Row, Col, Badge, Card, Icon, Button } from "e-ui-react";
import AdminSideWrapperMenu from "@Components/admin-sidewrapper-menu/index.js";

const SubCategories = () =>{
 useEffect(() => {
    document.body.style.backgroundColor = "#f6f6f9";
 }, []);
 return (<AdminSideWrapperMenu>
          <div className="mtop15p">
            <ContainerFluid>
              <Row>
                <Col md={12}>
                  <h3>
                    <Icon type="FontAwesome" name="fa-table" size={19} style={{ marginRight:'8px' }}  />
                    <b>Manage Sub-Categories</b>
                    <span className="pull-right">
                        <Button type="outline-dark" size={11}>
                            <Icon type="FontAwesome" name="fa-plus-circle" size={11} style={{ marginRight:'8px' }}  />
                            <b>Add New Sub-Category</b>
                        </Button></span>
                    <hr />
                  </h3>
                </Col>
              </Row>
    </ContainerFluid>
    </div>
 </AdminSideWrapperMenu>);
};

export default SubCategories;