import React from "react";
import { ContainerFluid, Row, Col, Icon, Card, Select, TextBox, Autocomplete, Button  } from "e-ui-react";
import { AppColors } from "@Utils/AppColors.js";
import Header1 from "@Templates/Header1/index.js";
import TitleTopSection from "./components/title-top-section/index.js";
import './index.css';

const NewsFeedPage = () =>{
 return (<>
 <div style={{ position:'fixed', bottom:10, right:10 }}>
  <Button type="dark" size={11}>
    <Icon type="FontAwesome" name="fa-angle-double-up" size={16} />
  </Button>
  </div>
  <Header1 />
  <TitleTopSection />
  <ContainerFluid>
    
  </ContainerFluid>
 </>);
};

export default NewsFeedPage;