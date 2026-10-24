import React, { useState, useEffect } from "react";
import { ContainerFluid, Row, Col, Icon, Button, TextBox, Card } from "e-ui-react";
import { NichesProvider, getNichesContext } from "./context.js";
import Header2 from "@Templates/Header2/index.js";
import HeaderTitle from "./components/HeaderTitle/index.js";
import SearchNiches from "./components/SearchNiches/index.js";
import DisplayNiches from "./components/DisplayNiches/index.js";
import NichesFooter from "./components/NichesFooter/index.js";
import { NichesData } from './data.js';

const initialSelected = {
    categories: "NA",
    selectedCount: 0,
    categoriesCount: NichesData?.categoriesCount,
    subCategoriesCount: NichesData?.subCategoriesCount,
    excludes: [],
    includes:[]
}
const SetCategories = () =>{
 return (<NichesProvider variables={{ userSelected: initialSelected }}>
 <Header2 />
 <div style={{ paddingBottom:'75px' }}>
 <ContainerFluid>
    <Row>
        <Col md={2}></Col>
        <Col md={8}><HeaderTitle /></Col>
        <Col md={2}></Col>
    </Row>
    <Row><Col md={12}><SearchNiches /></Col></Row>
    <DisplayNiches data={NichesData?.data} />
 </ContainerFluid>
 </div>
 <NichesFooter />
 </NichesProvider>);
};

export default SetCategories;