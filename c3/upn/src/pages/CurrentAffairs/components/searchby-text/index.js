import React, { useState, useEffect } from "react";
import { ContainerFluid, Row, Col, Button, Icon } from "e-ui-react";
import { formatDate } from "@Utils/DateFormatUtils.js";
import DCADisplayCard from "@Components/dca-display-card/index.js";

const SearchByText = ({ text, date, data }) => {
 return (<div className="mtop15p">
    <ContainerFluid>
        <Row>
            <Col md={12}></Col>
        </Row>
    </ContainerFluid>
 </div>);
}

export default SearchByText;