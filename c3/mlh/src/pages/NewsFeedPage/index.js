import React from "react";
import { ContainerFluid, Row, Col, Icon, Card, Select, TextBox, Autocomplete, Button  } from "e-ui-react";
import { AppColors } from "@Utils/AppColors.js";
import Header1 from "@Templates/Header1/index.js";
import TitleTopSection from "./components/title-top-section/index.js";
import SearchFilter from "./components/search-filter/index.js";
import './index.css';

const NewsFeedPage = () =>{
 return (<>
  <Header1 />
  <ContainerFluid>
    <TitleTopSection />
    <Row className="mtop15p">
        <Col lg={3}>
            <SearchFilter />
        </Col>
    </Row>
  </ContainerFluid>
 </>);
};

export default NewsFeedPage;