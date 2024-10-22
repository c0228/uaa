import React from "react";
import { Row, Col } from "e-ui-react";
import MatrimonyList from '@TempData/matrimony-list.json';
import DisplayCard from './components/DisplayCard/index.js';

const ProfileList = ({ partition }) =>{
 return (<>
 <Row>
 {MatrimonyList?.map((data, index)=>{
  return (<Col xl={partition?.xl} xxl={partition?.xxl}>
    <DisplayCard data={data} index={index} />
  </Col>);
 })}
 </Row>
 </>);
};

export default ProfileList;