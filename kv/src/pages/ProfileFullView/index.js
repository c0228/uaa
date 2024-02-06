import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import { ContainerFluid, Row, Col, Avatar, Icon, Button, Modal, Carousel, Card, Colors } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import Details from './components/Details/index.js';
import Preferences from './components/Preferences/index.js';
import './index.css';
import Title from '@Templates/Title/index.js';
import ProfileList from '@Templates/ProfileList/index.js';

const ProfileFullView = ()=>{
 const { profileId } = useParams();
 const data = {};

 const [ showModel, setShowModal ] = useState(false);

 let info = [<>
    <img src="https://www.thestatesman.com/wp-content/uploads/2022/09/03_Merged.jpg" class="d-block w-100" alt="..." />
    <div class="carousel-caption d-none d-md-block">
      <h5 className="bs-header">First slide label</h5>
      <p>Some representative placeholder content for the first slide.</p>
    </div>
  </>,
  <img src="https://media.licdn.com/dms/image/C4D03AQHHSwZyheu1UQ/profile-displayphoto-shrink_800_800/0/1662703243613?e=1701907200&v=beta&t=L9q1zTm8i6kni7JT7oUGcW5D8cY5DPHC89BrUkA15so" class="d-block w-100" alt="..." />,
  <img src="https://indianexpress.com/wp-content/uploads/2023/05/modi-aus-2.jpg?resize=600,334" class="d-block w-100" alt="..." />];

 const HelloWorld = ()=>{
  return (<div>
    <Carousel data={info} />
  </div>);
 };

 return (<>
  <Header menulinks={HeaderMenu()} activeId="BrowseMatrimony" />
  <ContainerFluid>
    <Row>
        <Col xl={4} xxl={4}>
            <Row>
                <Col xl={4} xxl={4}>
                  <div className="mtop15p">
                    <Avatar size={120} src="https://i.pinimg.com/280x280_RS/14/c5/25/14c525ed5acff88249193cd22584a6c9.jpg" />
                    <div align="center" className="mtop5p">
                        <Button type="outline-dark" label={<>
                            <Icon type="FontAwesome" name="fa-photo" size={13} style={{ marginRight:'5px' }}/> View Photos
                            </>} size={11} onClick={()=>setShowModal(true)} />
                            <Modal title="Narendra Modi's Photos" show={showModel} onClose={setShowModal} 
                            content={<HelloWorld />} />
                    </div>
                  </div>  
                </Col>
                <Col xl={8} xxl={8}>
                    <h4 className="bs-header mtop25p"><b>Narendra Modi</b></h4>
                    <div className="mtop5p">Profile created by Parent</div>
                    <div className="mtop15p">
                        <Icon type="FontAwesome" name="fa-user-o" size={16} style={{ marginLeft:'3px', marginRight:'5px' }} /> 
                        15 Oct 1991, 5 ft 6 in ( 172 cm )
                    </div>
                    <div className="mtop10p">
                        <Icon type="FontAwesome" name="fa-graduation-cap" size={16} style={{ marginRight:'5px' }} /> 
                        B.Tech (Electronics and Electrical Engineering)
                    </div>
                    <div className="mtop10p">
                        <Icon type="FontAwesome" name="fa-map-marker" size={16} style={{  marginLeft:'5px', marginRight:'12px' }} /> 
                        Hyderabad, India
                    </div>
                    <div className="mtop10p">
                        <Icon type="FontAwesome" name="fa-clock-o" size={16} style={{  marginLeft:'2px', marginRight:'12px' }} /> 
                        Activity 1 week ago
                    </div>
                </Col>
            </Row> 
            <hr/>
            <Row>
                <Col xl={12} xxl={12}>
                 <div className="mtop15p" style={{ color:'#777' }}>
                    <div align="center" className="mbot5p">
                        <h5 className="bs-header"><b>Interested in getting to know this Profile in better?</b></h5>
                    </div>
                    <div align="center">
                    Feel free to add the profile to your shortlist to express your interest or Send Proposal Request 
                    to know their interest.
                    </div>
                 </div>
                </Col>
            </Row>
            <Row>
                <Col xl={5} xxl={5}>
                    <div className="mtop15p">
                        <Button type="outline-primary" label="Add to your Shortlist" />
                    </div>
                </Col>
                <Col xl={7} xxl={7}>
                    <div align="right" className="mtop15p" style={{ color:'green' }}>
                     {data?.isRequestSent?(
                      <>
                         <Icon type="FontAwesome" name="fa-check" size="16" style={{ marginTop:'8px', marginRight:'5px' }} /> 
                      <b>Your Request Sent</b>
                      </>
                    ):(<Button type="success" label="Send your Request" size={11} />)}
                  </div>
                </Col>
            </Row>
            <Row>
                <Col xl={12} xxl={12}>
                   <Preferences />
                </Col>
            </Row>
        </Col>
        <Col xl={5} xxl={5}>
            <Details />
        </Col>
        <Col xl={3} xxl={3}>
            <div className="mtop15p mbot15p">
                <Title name="Other Similar Profiles" />
                <ProfileList partition={{ xl: 12, xxl: 12 }} />
            </div>
        </Col>
    </Row>
  </ContainerFluid>
 {profileId}
 </>);
};

export default ProfileFullView;