import React from "react";
import { Link } from "react-router-dom";
import { Card, Avatar, Badge, Button, ContainerFluid, Row, Col, Icon, Colors, UrlParams } from "e-ui-react";

const DisplayCard = ({ data, index })=>{
 const url = UrlParams().baseUrl;
 const bgColors = ["#fbf4f4", "#eefbef", "#fdefff", "#fff6e9", "#eaf6ff"]; //#953062
 const i = (index>5)?parseInt(index/5):index;
 return (<div style={{ marginBottom:'15px' }}>
 <Card backgroundColor={bgColors[i]} style={{ boxShadow:'1.5px 1.5px 1.5px 1.5px #ccc' }}>
    <div style={{ margin: '15px 5px' }}>
        <ContainerFluid>
            <Row>
                <Col xl={4} xxl={4}>
                    <div className="mtop5p">
                        <Avatar size={95} src={data?.img} 
                            border={{ color:"#953062", size: 2 }} />
                    </div>
                </Col>
                <Col xl={8} xxl={8}>
                    <div style={{ paddingLeft:'8px' }}>
                    <h5 className="bs-header" style={{ marginTop:'5px' }}>
                        <b>{data?.name}</b>
                    </h5>
                    <div style={{ marginTop:'5px' }}>
                      <span style={{ color:'#777' }}>{data?.height} Height, 28 years old
                      {/*Older by 5 years*/}
                      </span>
                    </div>
                    <div style={{ marginTop:'5px' }}>
                      <span style={{ color:'#777' }}>
                        <Icon type="FontAwesome" name="fa-map-marker" size="16" style={{ color:'#f71100', marginRight:'5px' }} /> 
                        <b>Living in {data?.living}</b>
                      </span>
                    </div>
                    <div style={{ marginTop:'5px' }}>
                      <span style={{ color:'#888' }}>
                        <b><i>Working as {data?.job?.profession} in {data?.job?.company}, {data?.job?.location}.</i></b>
                      </span>
                    </div>
                    </div>
                </Col>
            </Row>
            {/*<Row>
              <Col xl={12} xxl={12}>
                <div className="mtop15p">
                  <Link to="#">
                    <Badge type="warning" label="Domestic Stay" size={11} style={{ marginBottom:'5px', marginRight:'5px' }} />
                  </Link>
                  <Link to="#">
                    <Badge type="warning" label="Domestic Work Permit" size={11} style={{ marginBottom:'5px', marginRight:'5px' }} />
                  </Link>
                  <Link to="#">
                    <Badge type="warning" label="Abroad Stay" size={11} style={{ marginBottom:'5px', marginRight:'5px' }} />
                  </Link>
                  <Link to="#">
                    <Badge type="warning" label="Abroad Work Permit" size={11} style={{ marginBottom:'5px', marginRight:'5px' }}  />
                  </Link>
                  <Link to="#">
                    <Badge type="warning" label="IT Techie Job" size={11} style={{ marginBottom:'5px', marginRight:'5px' }}  />
                  </Link>
                  <Link to="#">
                    <Badge type="warning" label="IT Techie Job" size={11} style={{ marginBottom:'5px', marginRight:'5px' }}  />
                  </Link>
                </div>
              </Col>
            </Row>*/}
            <Row>
                <Col xl={6} xxl={6}>
                  <div align="left" className="mtop10p" style={{ color:'green' }}>
                    {data?.isRequestSent?(
                      <>
                         <Icon type="FontAwesome" name="fa-check" size="16" style={{ marginTop:'8px', marginRight:'5px' }} /> 
                      <b>Request Sent</b>
                      </>
                    ):(<Button type="success" label="Send Request" size={11} />)}
                  </div>
                </Col>
                <Col xl={6} xxl={6}>
                  <div align="right" className="mtop10p">
                    <Link to={url+"Profile/"+data?.id} target="_blank">
                    <Button type="primary" label={<div>
                      View profile
                    </div>} size={11} />
                    </Link>
                    </div>
                </Col>
            </Row>
        </ContainerFluid>
    </div>
 </Card>
 </div>);
};

export default DisplayCard;