import React, { useState } from "react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import { Card, Colors, ContainerFluid, Row, Col, Icon, Avatar, TextBox, DateTimePicker, Select, Dropdown, Menu, Button, Choice, Hover } from "e-ui-react";

const menuOptions = [{
    options:[{ label:"India", value:"india" }] 
  },
  {
    options:[{ label:"New York", value:"newYork" }]
  },
  {
    options:[{ label:"London", value:"london" }]
  },
  {
    options:[{ label:"Dubai", value:"dubai" }]
  },
  {
    options:[{ label:"California", value:"california" }]
  },
  {
    options:[{ label:"Auckland", value:"auckland" }]
  }
];

const CardContent1 = () =>{
    return (<div>
        <ContainerFluid>
            <Row>
                <Col xl={9} xxl={9}>
                </Col>
                <Col xl={3} xxl={3}>
                    <Icon type="FontAwesome" name="fa-times-circle-o" size={36} style={{color:"red"}} />
                </Col>
            </Row>
            <div className="mbot15p">
            <Row>
                <Col xl={2} xxl={2}>
                    <Icon type="FontAwesome" name="fa-home" size={36} />
                </Col>
                <Col xl={8} xxl={8}>
                    <div className="mtop10p">
                        <h4 class="bs-header"><b>Alias Name</b></h4>
                    </div>
                </Col>
            </Row>
            </div><hr/>
            <Row>
                <div className="mtop15p">
                <Col xl={11} xxl={11}>
                    <div>
                        <h5 class="bs-header"><b>User Name</b></h5>
                    </div>
                    <div>HNo. 4-26/1/k, Road No. 8,</div>
                    <div>Srinivasapuram Colony</div>
                    <div>Gurramguda</div>
                    <div>Balapur Mandal</div>
                    <div>Hyderabad</div>
                    <div>Ranga Reddy District</div>
                    <div>India</div>
                    <div>501510</div>
                    <div className="mtop15p">
                    <TextBox name="landmark" label="Landmark" placeholder="Beside Vinayaka general stores" />
                    </div>
                    <div className="mtop15p">
                        <Icon type="FontAwesome" name="fa-map-marker" size={25} style={{color:"red"}} /> Update location
                    </div>
                </Col>
                </div>
            </Row>
        </ContainerFluid>
    </div>);
   };

   const CardContent2 = () =>{
    return (<div>
        <ContainerFluid>
            <Row>
                <Col xl={9} xxl={9}>
                </Col>
                <Col xl={3} xxl={3}>
                    <Icon type="FontAwesome" name="fa-times-circle-o" size={36} style={{color:"red"}} />
                </Col>
            </Row>
            <div className="mbot15p">
            <Row>
                <Col xl={2} xxl={2}>
                    <Icon type="FontAwesome" name="fa-briefcase" size={36} />
                </Col>
                <Col xl={8} xxl={8}>
                    <div className="mtop10p">
                        <h4 class="bs-header"><b>Alias Name</b></h4>
                    </div>
                </Col>
            </Row>
            </div><hr/>
            <Row>
                <div className="mtop15p">
                <Col xl={11} xxl={11}>
                    <div>
                        <h5 class="bs-header"><b>User Name</b></h5>
                    </div>
                    <div>HNo. 4-26/1/k, Road No. 8,</div>
                    <div>Srinivasapuram Colony</div>
                    <div>Gurramguda</div>
                    <div>Balapur Mandal</div>
                    <div>Hyderabad</div>
                    <div>Ranga Reddy District</div>
                    <div>India</div>
                    <div>501510</div>
                    <div className="mtop15p">
                    <TextBox name="landmark" label="Landmark" placeholder="Beside Vinayaka general stores" />
                    </div>
                    <div className="mtop15p">
                        <Icon type="FontAwesome" name="fa-map-marker" size={25} style={{color:"red"}} /> Update location
                    </div>
                </Col>
                </div>
            </Row>
        </ContainerFluid>
    </div>);
   };

   const NewAddressContent = () =>{
    return (<div>
        <ContainerFluid>
            <Row>
                <Col xl={3} xxl={3}>
                    <div>
                <Hover type="tooltip" placement="top" component={<Icon type="FontAwesome" name="fa-home" size={36} style={{color:"dodgerblue"}} />} hoverContent="Selected Location" />
                </div>
                    <div className="mtop5p">
                        Home-1
                    </div>
                </Col>
                <Col xl={3} xxl={3}>
                    <Icon type="FontAwesome" name="fa-home" size={36} style={{color:"red"}} />
                        <div className="mtop5p">
                            Home-2
                        </div>
                </Col>
                <Col xl={3} xxl={3}>
                    <Icon type="FontAwesome" name="fa-university" size={36} />
                        <div className="mtop5p">
                            Custom
                        </div>
                 </Col>
                <Col xl={3} xxl={3}>
                <Icon type="FontAwesome" name="fa-briefcase" size={36} />
                        <div className="mtop5p">
                        Office
                        </div>
                </Col>
            </Row>
        </ContainerFluid>
    </div>);
   };

const Menu4 = ()=>{
    const EditProfileContent = ()=>{
        return (<>
        <Row>
        <Col xl={4} xxl={4}>
            <div>
                <div>
                    <h3 class="bs-header"><b>Edit Your Personal Details</b></h3>
                </div>
                <div class="mtop15p mbot15p" style={{ color: 'rgb(119, 119, 119)', fontWeight: 'bold' }}>
                "Welcome to your profile! Personalize your information below to make your experience even better."
                </div>
            </div>
            <div className= "mtop15p">
                    <div className="mtop15p" align = "center">
                    <div className="mbot15p">
                                    <h4 class="bs-header"><b>Profile Picture</b></h4>
                                </div>
                        <Avatar size={100} src="https://i.pinimg.com/280x280_RS/14/c5/25/14c525ed5acff88249193cd22584a6c9.jpg" />
                            
                    </div>
                    <div className="mtop15p">
                    <TextBox name="surname" label="Surname" placeholder="Change your Surname" />
                    </div>
                    <div className="mtop15p">
                    <TextBox name="name" label="Name" placeholder="Change your Name" />
                    </div>
                    <div className="mtop15p">
                    <DateTimePicker type="datePicker" id="date" name="date" label="Date of Birth" />
                    </div>
                    <div className="mtop15p">
                        <Select 
                            label="Gender"
                            placeholder="Select gender"
                            options={[{ id: 'male', label: 'Male', value: 'Male' },
                            { id: 'female', label: 'Female', value: 'female' }]}
                            width="130"
                            fontSize="12" />
                    </div>
                        <div className="mtop15p">
                    <TextBox name="emailId" label="Email Id" placeholder="Change your Email Id" />
                    </div>
                    <div className="mtop15p">
                        <Dropdown placeholder="Select your Country" label="Country" menu={menuOptions}
                        container={{
                        searchLabel: "Search a Location"
                        }}/>
                    </div>
                    <div className="mtop15p">
                        <TextBox name="phoneNo" label="Contact Information" placeholder="Change your Phone Number" />  
                    </div>
                    <div className="mtop15p" align="center">
                    <Button type="primary" label="Save Changes" size={11} />
                    <Button type="danger" label="Reset" size={11} />
                    </div>
                    <div className="mtop15p">
                        <Choice type="checkbox" id="tc" name="t&c" label="Terms and Conditions" 
                        value={[{ id:"tc1", label:"By accessing or using this website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not use our services.", value:"tc"}]} 
                        disabled={false} />
                    </div>
                    <div class="mtop15p mbot15p" style={{ color: 'rgb(119, 119, 119)', fontWeight: 'bold' }}>
                        <b>Note:</b>
                        <ul>
                            <li>Your information helps us tailor your experience. Please update any changes.</li>
                            <li>Keep your email up-to-date so you never miss important updates from us..</li>
                            <li>Worried about privacy? Don't worry, your information is secure and will never be shared.</li>
                        </ul>
                    </div>
            </div>

        </Col>    
        </Row>
        </>);
    };

    const ChangePwdContent = ()=>{
        return (<>
        </>);
    };

    const ManageAddressContent = ()=>{
        return (<>
        <ContainerFluid>
            <Row>
                <Col xl={10} xxl={10}>
                </Col>
                <Col xl={2} xxl={2}>
                    <div className="mbot15p"><Button type="primary" label="Add new Location" size={11}/>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xl={4} xxl={4}>
                    <div className="mbot15p">
                        <Card className="intro" padding={15} backgroundColor={Colors.light}>
                            <CardContent1 />
                        </Card>
                    </div>
                </Col>
                <Col xl={4} xxl={4}>
                <div className="mbot15p">
                        <Card className="intro" padding={15} backgroundColor={Colors.light}>
                            <CardContent2 />
                        </Card>
                    </div>
                </Col>
                <Col xl={4} xxl={4}>
                <div className="mbot15p">
                        <Card className="intro" padding={15} backgroundColor={Colors.light}>
                            <CardContent2 />
                        </Card>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xl={4} xxl={4}>
                <div className="mtop15p">
                    <div>
                        <h3 class="bs-header"><b>Add a New Address</b></h3>
                    </div>
                    <div class="mtop15p mbot15p" style={{ color: 'rgb(119, 119, 119)', fontWeight: 'bold' }}>
                        "Make sure we have your correct address for personalized experiences."
                    </div>
                </div>
                <div className= "mtop15p">
                <div className="mtop15p">
                <Card className="intro" padding={15} backgroundColor={Colors.light}>
                    <NewAddressContent />
                </Card>
                </div>
                    <div className="mtop15p">
                        <TextBox name="address#1" label="Address Line 1" placeholder="Add your address" />
                    </div>
                    <div className="mtop15p">
                        <TextBox name="address#2" label="Address Line 2" placeholder="Add your address" />
                    </div>
                    <div className="mtop15p">
                        <TextBox name="locality" label="Locality" placeholder="Add your Locality" />
                    </div>
                    <div className="mtop15p">
                        <TextBox name="location" label="Location" placeholder="Add your Location" />
                    </div>
                    <div className="mtop15p">
                        <TextBox name="city" label="City" placeholder="Add your city" />  
                    </div>
                    <div className="mtop15p">
                        <TextBox name="state" label="State" placeholder="Add your state" />  
                    </div>
                    <div className="mtop15p">
                        <TextBox name="country" label="Country/Region" placeholder="Add your country" />  
                    </div>
                    <div className="mtop15p">
                        <TextBox name="pincode" label="PinCode" placeholder="Add your pincode" />  
                    </div>
                    <div className="mtop15p">
                        <TextBox name="landmark" label="Landmark" placeholder="Add a Landmark" />
                    </div>
                    <div className="mtop15p" align="center">
                    <Button type="primary" label="Save and Continue" size={11} />
                    <Button type="danger" label="Reset" size={11} />
                    </div>
                    <div className="mtop15p">
                        <Choice type="checkbox" id="tc" name="t&c" label="Terms and Conditions" 
                        value={[{ id:"tc1", label:"By accessing or using this website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not use our services.", value:"tc"}]} 
                        disabled={false} />
                    </div>
                    <div class="mtop15p mbot15p" style={{ color: 'rgb(119, 119, 119)', fontWeight: 'bold' }}>
                        <b>Note:</b>
                        <ul>
                            <li>Your address details are protected and used solely for your convenience.</li>
                            <li>Ensure your address is accurate to avoid any hiccups.</li>
                            <li>Adding multiple addresses for different purposes!!! We're here to adapt to your needs.</li>
                        </ul>
                    </div>
                </div>
                </Col>
            </Row>
        </ContainerFluid>
        </>);
    };

 return (<>
  <Header menulinks={HeaderMenu} activeId="Menu4" />
  <div className="mtop15p">
  <ContainerFluid>
    <Row>
        <Col xl={12} xxl={12}>
        <Menu type="pill" layout="vertical" 
    layoutStyle={{ 
                  menu:{ sm:'2', md:'2', lg:'2', xl:'2', xxl:'2' },
                  content:{ sm:'10', md:'10', lg:'10', xl:'10', xxl:'10' } 
                }}
    list={[{ id:"editProfile", label:"Edit profile", component:(<EditProfileContent />) },
            { id:"changePwd", label:"Change Password", component:(<ChangePwdContent />) },
            { id:"manageAddress", label:"Manage Addresses", component:(<ManageAddressContent />) }]} />
        </Col>
    </Row>
  </ContainerFluid>
  </div> 
 </>);
};

export default Menu4;
