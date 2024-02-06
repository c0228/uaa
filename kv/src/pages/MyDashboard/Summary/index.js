import React from "react";
import Title from '@Templates/Title/index.js';
import { ContainerFluid, Row, Col } from "e-ui-react";
import Balance from "./Components/Balance/index.js";
import TodayStats from "./Components/TodayStats/index.js";
import OverallStats from "./Components/OverallStats/index.js";
import ProfileList from '@Templates/ProfileList/index.js';

const Summary = ()=>{
 return (<>
   <Title name="Summary" />
   <ContainerFluid>
    <Row>
      <Col xl={4} xxl={4}>
        <Balance />
      </Col>
      <Col xl={4} xxl={4}>
        <TodayStats />
      </Col>
      <Col xl={4} xxl={4}>
      <OverallStats />
      </Col>
    </Row>
   </ContainerFluid>
   <Title name="My Profiles" />
   <ProfileList partition={{ xl: 4, xxl: 3 }} />
 </>);
};

export default Summary;