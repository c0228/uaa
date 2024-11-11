import React from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import './index.css';

const SlimImageTitle = ({ data }) =>{
  return (<div>
    <div className="slimImgTitle-zoom">
     <img src={data?.img} />
     <div className="overlay">{data?.content}</div>
    </div>
  </div>);
};

const SlimImageTitles = ({ data }) =>{
  return (<ContainerFluid>
    <Row>
      {data?.map(((d,i)=>{
        return (<Col key={i} md={2}>
          <div style={{ marginBottom:'15px' }}>
            <SlimImageTitle data={d} />
          </div>
        </Col>);
      }))}
    </Row>
  </ContainerFluid>);
};

export default SlimImageTitles;