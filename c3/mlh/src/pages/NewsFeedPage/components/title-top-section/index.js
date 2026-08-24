import React from "react";
import { Row, Col, Select } from "e-ui-react";
import './index.css';

const TitleTopSection = () =>{
 return (<div style={{ marginTop:'15px' }}>
  <Row className="align-items-center">
    <Col lg={4}>
        <div className="page-title">
            <div className="title-icon"><i className="fa fa-newspaper-o"></i></div>
            <div>
                <h1>News Feed</h1>
                <p>Discover what's happening in your community</p>
            </div>
        </div>
    </Col>
    <Col lg={8}>
      <div className="top-filters">
            <div className="select-box">
                <i className="fa fa-calendar-o"></i>
                <span className="value">May 1, 2024 - May 31, 2024</span>
                <i className="fa fa-angle-down"></i>
            </div>
            <div className="select-box">
                <i className="fa fa-calendar-check-o"></i>
                <span className="value">All Categories</span>
                <i className="fa fa-angle-down"></i>
            </div>
            <div className="select-box" style={{ minWidth:"185px" }}>
                <i className="fa fa-sliders"></i>
                <span className="value">Latest First</span>
                <i className="fa fa-angle-down"></i>
            </div>
      </div>
    </Col>
  </Row>
 </div>);
};

export default TitleTopSection;