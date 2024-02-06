import React from "react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import { ContainerFluid, Col, Row, Card, Colors, Pill, Button, TextBox, Switch, Badge, Choice, 
  Icon, FloatingButton, Form, Rating, Avatar, TextArea } from "e-ui-react";

 const HomeComponent = ()=>{
  return (<>
   <div>
    <ContainerFluid>
      <Row>
        <Col xl={3} xxl={3}>
        <div className="mtop15p mbot15p" style={{position:"sticky"}}>   
          <div className="mtop15p mbot15p">
            <div className="mtop15p">
            <h2 className="bs-header"><b>Filter</b></h2>
            </div>
            <div className="mtop15p mbot15p">
            <h4 className="bs-header"><b>Content Area</b></h4>
            <div className="mtop15p">
            <Switch type="checkbox" id="numbers" name="numbers"
                    value={[{ id:1, label:(<div style={{width:"100%"}}>
                      <h5 className="bs-header" style={{color:"black", opacity:".85"}}>
                        All
                        <span className="pull-right">
                          <Badge type="primary" label="44" size="12" style={{ marginRight:'5px' }} />
                        </span>
                      </h5>
                    </div>), value:"1"},
                            { id:2, label:(<div style={{width:"100%"}}>
                            <h5 className="bs-header" style={{color:"black", opacity:".85"}}>
                              Documentation
                              <span className="pull-right">
                                <Badge type="light" label="44" size="12" style={{ marginRight:'5px' }} />
                              </span>
                            </h5>
                          </div>), value:"2" },
                            { id:3, label:(<div style={{width:"100%"}}>
                            <h5 className="bs-header" style={{color:"black", opacity:".85"}}>
                              Training
                              <span className="pull-right">
                                <Badge type="light" label="44" size="12" style={{ marginRight:'5px' }} />
                              </span>
                            </h5>
                          </div>), value:"3" },
                          { id:4, label:(<div style={{width:"100%"}}>
                          <h5 className="bs-header" style={{color:"black", opacity:".85"}}>
                            Training
                            <span className="pull-right">
                              <Badge type="light" label="44" size="12" style={{ marginRight:'5px' }} />
                            </span>
                          </h5>
                        </div>), value:"3" },
                        { id:5, label:(<div style={{width:"100%"}}>
                        <h5 className="bs-header" style={{color:"black", opacity:".85"}}>
                          Certifications
                          <span className="pull-right">
                            <Badge type="light" label="44" size="12" style={{ marginRight:'5px' }} />
                          </span>
                        </h5>
                      </div>), value:"3" },
                      { id:6, label:(<div style={{width:"100%"}}>
                      <h5 className="bs-header" style={{color:"black", opacity:".85"}}>
                        Q&A
                        <span className="pull-right">
                          <Badge type="light" label="44" size="12" style={{ marginRight:'5px' }} />
                        </span>
                      </h5>
                    </div>), value:"3" },
                    { id:7, label:(<div style={{width:"100%"}}>
                    <h5 className="bs-header" style={{color:"black", opacity:".85"}}>
                      Reference
                      <span className="pull-right">
                        <Badge type="light" label="44" size="12" style={{ marginRight:'5px' }} />
                      </span>
                    </h5>
                  </div>), value:"3" },
                  { id:8, label:(<div style={{width:"100%"}}>
                  <h5 className="bs-header" style={{color:"black", opacity:".85"}}>
                    Shows
                    <span className="pull-right">
                      <Badge type="light" label="44" size="12" style={{ marginRight:'5px' }} />
                    </span>
                  </h5>
                </div>), value:"3" },
                { id:7, label:(<div style={{width:"100%"}}>
                <h5 className="bs-header" style={{color:"black", opacity:".85"}}>
                  Events
                  <span className="pull-right">
                    <Badge type="light" label="44" size="12" style={{ marginRight:'5px' }} />
                  </span>
                </h5>
              </div>), value:"3" }]} 
                    disabled={false} />
                    </div>
            </div>
            <div className="mtop15p mbot15p">
              <h4 className="bs-header"><b>Products</b></h4>
              <div className="mtop15p">
                <TextBox name="product" placeholder="Find a product" />
              </div>
              <div className="mtop15p mbot15p">
                  <Choice type="checkbox" id="numbers" name="numbers" 
                    value={[{ id:1, label:(<div style={{width:"100%"}}>
                    <h5 className="bs-header" style={{color:"black", opacity:".95"}}>
                      Azure
                    </h5>
                  </div>), value:"1"},
                            { id:2, label:(<div style={{width:"100%"}}>
                            <h5 className="bs-header" style={{color:"black", opacity:".95"}}>
                              GitHub
                            </h5>
                          </div>), value:"2" },
                            { id:3, label:(<div style={{width:"100%"}}>
                            <h5 className="bs-header" style={{color:"black", opacity:".95"}}>
                              Linkedin
                            </h5>
                          </div>), value:"3" },
                          { id:4, label:(<div style={{width:"100%"}}>
                          <h5 className="bs-header" style={{color:"black", opacity:".95"}}>
                            Microsoft Defender
                          </h5>
                        </div>), value:"3" },
                        { id:5, label:(<div style={{width:"100%"}}>
                        <h5 className="bs-header" style={{color:"black", opacity:".95"}}>
                          Microsoft Entra
                        </h5>
                      </div>), value:"3" },
                      { id:6, label:(<div style={{width:"100%"}}>
                      <h5 className="bs-header" style={{color:"black", opacity:".95"}}>
                        Microsoft Search
                      </h5>
                    </div>), value:"3" },
                    { id:3, label:(<div style={{width:"100%"}}>
                    <h5 className="bs-header" style={{color:"black", opacity:".95"}}>
                      Office
                    </h5>
                  </div>), value:"3" }]} 
                    disabled={false} />
              </div>
            </div>
          </div>
          </div>
        </Col>
        <Col xl={8} xxl={8}>
          <div className="mtop15p mbot15p">
            <div className="mtop15p input-group">
              <TextBox name="searchbar" placeholder="Search anything here" />
              <Button type="primary" label="Search" size={11} />
            </div>
            <div className="mtop15p">
            <h5 class="bs-header"><b>44 results for "okta" in Azure</b></h5>
            <h5 class="bs-header" style={{color:"black", opacity:".65"}}>or view all results on Microsoft Learn</h5>
            </div>
            <div className="mtop15p mbot15p">
              <div className="mtop15p mbot15p">
                <h4 class="bs-header text-primary" style={{cursor:"pointer", marginBottom:"5px"}}><b>Tutorial to migrate Okta sync provising to Azure AD 
                  Connect-based synchronization-Microsoft Entra</b></h4>
                  <h5 class="bs-header" style={{color:"green", opacity:".65", cursor:"pointer"}}>/azure/active-directory/manage-apps/migrate-okta-sync-provising<br/>
                  </h5>
                  <h5 class="bs-header" style={{color:"black", opacity:".65"}}>Go to <b>Okta</b> portal Select the Okta app that provisions users to Azure AD. Select the provisioning tab. 
                  Select the Go to the Okta portal Select API integration option. Select Save, Note if you have multiple Office 365 apps the handle
                  provisioning to Azure AD, ensure they switched off</h5>
              </div>
              <div className="mtop15p mbot15p">
                <h4 class="bs-header text-primary" style={{cursor:"pointer", marginBottom:"5px"}}><b>Tutorial to migrate Okta sync provising to Azure AD 
                  Connect-based synchronization-Microsoft Entra</b></h4>
                  <h5 class="bs-header" style={{color:"green", opacity:".65", cursor:"pointer"}}>/azure/active-directory/manage-apps/migrate-okta-sync-provising<br/>
                  </h5>
                  <h5 class="bs-header" style={{color:"black", opacity:".65"}}>Go to <b>Okta</b> portal Select the Okta app that provisions users to Azure AD. Select the provisioning tab. 
                  Select the Go to the Okta portal Select API integration option. Select Save, Note if you have multiple Office 365 apps the handle
                  provisioning to Azure AD, ensure they switched off</h5>
              </div>
              <div className="mtop15p mbot15p">
                <h4 class="bs-header text-primary" style={{cursor:"pointer", marginBottom:"5px"}}><b>Tutorial to migrate Okta sync provising to Azure AD 
                  Connect-based synchronization-Microsoft Entra</b></h4>
                  <h5 class="bs-header" style={{color:"green", opacity:".65", cursor:"pointer"}}>/azure/active-directory/manage-apps/migrate-okta-sync-provising<br/>
                  </h5>
                  <h5 class="bs-header" style={{color:"black", opacity:".65"}}>Go to <b>Okta</b> portal Select the Okta app that provisions users to Azure AD. Select the provisioning tab. 
                  Select the Go to the Okta portal Select API integration option. Select Save, Note if you have multiple Office 365 apps the handle
                  provisioning to Azure AD, ensure they switched off</h5>
              </div>
              <div className="mtop15p mbot15p">
                <h4 class="bs-header text-primary" style={{cursor:"pointer", marginBottom:"5px"}}><b>Tutorial to migrate Okta sync provising to Azure AD 
                  Connect-based synchronization-Microsoft Entra</b></h4>
                  <h5 class="bs-header" style={{color:"green", opacity:".65", cursor:"pointer"}}>/azure/active-directory/manage-apps/migrate-okta-sync-provising<br/>
                  </h5>
                  <h5 class="bs-header" style={{color:"black", opacity:".65"}}>Go to <b>Okta</b> portal Select the Okta app that provisions users to Azure AD. Select the provisioning tab. 
                  Select the Go to the Okta portal Select API integration option. Select Save, Note if you have multiple Office 365 apps the handle
                  provisioning to Azure AD, ensure they switched off</h5>
              </div>
              <div className="mtop15p mbot15p">
                <h4 class="bs-header text-primary" style={{cursor:"pointer", marginBottom:"5px"}}><b>Tutorial to migrate Okta sync provising to Azure AD 
                  Connect-based synchronization-Microsoft Entra</b></h4>
                  <h5 class="bs-header" style={{color:"green", opacity:".65", cursor:"pointer"}}>/azure/active-directory/manage-apps/migrate-okta-sync-provising<br/>
                  </h5>
                  <h5 class="bs-header" style={{color:"black", opacity:".65"}}>Go to <b>Okta</b> portal Select the Okta app that provisions users to Azure AD. Select the provisioning tab. 
                  Select the Go to the Okta portal Select API integration option. Select Save, Note if you have multiple Office 365 apps the handle
                  provisioning to Azure AD, ensure they switched off</h5>
              </div>
              <div className="mtop15p mbot15p">
                <h4 class="bs-header text-primary" style={{cursor:"pointer", marginBottom:"5px"}}><b>Tutorial to migrate Okta sync provising to Azure AD 
                  Connect-based synchronization-Microsoft Entra</b></h4>
                  <h5 class="bs-header" style={{color:"green", opacity:".65", cursor:"pointer"}}>/azure/active-directory/manage-apps/migrate-okta-sync-provising<br/>
                  </h5>
                  <h5 class="bs-header" style={{color:"black", opacity:".65"}}>Go to <b>Okta</b> portal Select the Okta app that provisions users to Azure AD. Select the provisioning tab. 
                  Select the Go to the Okta portal Select API integration option. Select Save, Note if you have multiple Office 365 apps the handle
                  provisioning to Azure AD, ensure they switched off</h5>
              </div>
              <div className="mtop15p mbot15p">
                <h4 class="bs-header text-primary" style={{cursor:"pointer", marginBottom:"5px"}}><b>Tutorial to migrate Okta sync provising to Azure AD 
                  Connect-based synchronization-Microsoft Entra</b></h4>
                  <h5 class="bs-header" style={{color:"green", opacity:".65", cursor:"pointer"}}>/azure/active-directory/manage-apps/migrate-okta-sync-provising<br/>
                  </h5>
                  <h5 class="bs-header" style={{color:"black", opacity:".65"}}>Go to <b>Okta</b> portal Select the Okta app that provisions users to Azure AD. Select the provisioning tab. 
                  Select the Go to the Okta portal Select API integration option. Select Save, Note if you have multiple Office 365 apps the handle
                  provisioning to Azure AD, ensure they switched off</h5>
              </div>
              <div className="mtop15p mbot15p">
                <h4 class="bs-header text-primary" style={{cursor:"pointer", marginBottom:"5px"}}><b>Tutorial to migrate Okta sync provising to Azure AD 
                  Connect-based synchronization-Microsoft Entra</b></h4>
                  <h5 class="bs-header" style={{color:"green", opacity:".65", cursor:"pointer"}}>/azure/active-directory/manage-apps/migrate-okta-sync-provising<br/>
                  </h5>
                  <h5 class="bs-header" style={{color:"black", opacity:".65"}}>Go to <b>Okta</b> portal Select the Okta app that provisions users to Azure AD. Select the provisioning tab. 
                  Select the Go to the Okta portal Select API integration option. Select Save, Note if you have multiple Office 365 apps the handle
                  provisioning to Azure AD, ensure they switched off</h5>
              </div>
            </div>
          </div>
        </Col>
        <Col xl={1} xxl={1}></Col>
      </Row>
    </ContainerFluid>
   </div>
  </>);
 };
 
 const Menu1Component = ()=>{
  return (<>
   <div>
    <ContainerFluid>
      <Row>
        <Col xl={1} xxl={1}>
        </Col>
        <Col xl={10} xxl={10}>
          <div className="mtop15p mbot15p">
            <Card className="intro" padding={15} backgroundColor={Colors.primary} style={{ color:'white' }}>
              <div align="start">
              <h5 class="bs-header">Check out the free virtual workshops on how to take your SaaS app to the next level in the enterprise-ready
                identity journey.</h5>
              </div>
                <div align="end"><Icon type="FontAwesome" name="fa-times" style={{color:"white"}} size={20} /></div>
            </Card>
          </div>
          <div className="mtop15p mbot15p">
                    <Button type="outline-secondary" label="All Categories" size={11} style={{marginRight:"5px"}} />
                    <Button type="outline-secondary" label="All Tags" size={11} style={{marginRight:"5px"}} />
                    <Button type="primary" label="Home" size={11} style={{marginRight:"5px"}} />
                    <Button type="light" label="Latest Posts" size={11} style={{marginRight:"5px"}} />
                    <Button type="light" label="Feedback" size={11} style={{marginRight:"25px"}} />
          </div> 
        </Col>
        <Col xl={1} xxl={1}>
        </Col>
      </Row>
    </ContainerFluid>
   </div>
  </>);
 };
 
 const Menu2Component = ()=>{
  return (<>
   <div>
   <FloatingButton className="bg-primary text-white" bottom="5.2%" right="8%" >
    <div>
      <Row>
        <div className="mbot15p">
        <Icon type="FontAwesome" name="fa-comments-o" size={15} />
        </div>
      </Row>
      <Row>
        <div className="mbot15p"><Icon type="FontAwesome" name="fa-envelope" size={13} /></div>
      </Row>
      <Row>
        <div className="mbot15p"><Icon type="FontAwesome" name="fa-phone" size={15} /></div>
      </Row>
      <Row>
        <div><Icon type="FontAwesome" name="fa-user" size={15} /></div>
      </Row>
    </div>
  </FloatingButton>
   </div>
  </>);
 };
 
 const Menu3Component = ()=>{
  return (<>
   <div>
    <div className="mtop15p mbot15p">
    
      <div className="SimpleHeader mtop15p mbot15p">
        <b>Customer Satisfaction (Testimonials)</b>
      </div>
      <Row>
        <Col xl={3} xxl={3}>
          <div className="mbot15p">
            <Row>
              <Col xl={3} xxl={3}>
              <Avatar size={60} src="https://i.pinimg.com/280x280_RS/14/c5/25/14c525ed5acff88249193cd22584a6c9.jpg" />
              </Col>
              <Col xl={9} xxl={9}>
                <h5 class="bs-header" style={{marginLeft:"5px",marginTop:"5px", marginBottom:"5px", color:"#777"}}><b>@Adithyakankipati</b></h5>
                <h5 class="bs-header" style={{marginLeft:"5px", color:"#aaa", fontSize:"12px"}}>Hyderabad, India</h5>
              </Col>
            </Row>
          </div>
        </Col>
        <Col xl={3} xxl={3}>
          <div align="right">
          <Rating name="myRating" size={5} 
        colors={{
            default: [ "#ccc" ],
            onSelect:[{ "1": "hsl(0, 49%, 50%)","2":"#ff0000", "3": "orange", "4": "hsl(109, 61%, 72%)", "5":"green" }]
        }} />
          </div>
        </Col>
        <Col xl={3} xxl={3}>
        </Col>
        <Col xl={3} xxl={3}>
        </Col>
      </Row>
      <ContainerFluid>
        <Row>
          <Col xl={6} xxl={6}>
          <div className="mtop15p mbot15p">
      <h5 class="bs-header" style={{marginBottom:"5px"}}><b>My Response</b></h5>
      <TextArea name="surname" placeholder="Let us know what you have felt." lines={3} />
      </div>
      <div className="mtop15p mbot15p">
      <h5 class="bs-header" style={{marginBottom:"5px"}}><b>Suggestions</b></h5>
      <TextArea name="surname" placeholder="Let us know, what makes you feel better." lines={3} />
      </div>
      <Col xl={6} xxl={6}></Col>
      <Col xl={6} xxl={6}>
        <div align="right">
      <Form name="feedbackForm" 
  btnSubmit={{ btnType:'primary', label:'Submit', size: 11 }}
  btnReset={{ btnType:'danger', label:'Reset', size: 11 }}
  onSubmit={async(form, isValidForm, triggerReset)=>{  }}
  onReset={async()=>{ }}>
</Form>
</div>
      </Col>
          </Col>
          <Col xl={6} xxl={6}></Col>
        </Row>
      </ContainerFluid> 
    </div>
   </div>
  </>);
 };

const Menu6 = ()=>{
 return (<>
  <Header menulinks={HeaderMenu} activeId="Menu6" />
  <Pill mode="vertical" 
 layout={{
    menu:{ xs:'2', sm:'2', md:'2', lg:'2', xl:'2', xxl:'2' },
    content:{  xs:'10', sm:'10', md:'10', lg:'10', xl:'10', xxl:'10' }
 }}
 menulinks={[
     { id:'v3home', label:'Home', content:(<HomeComponent />) },
     { id:'v3menu1', url:'menu6#menu1', label:'Menu 1', content:(<Menu1Component />) },
     { id:'v3menu2', url:'menu6#menu2', label:'Menu 2', content:(<Menu2Component />) },
     { id:'v3menu3', url:'menu6#menu3', label:'Menu 3', content:(<Menu3Component />) }]} 
 activeId="v3menu3" 
 colorConfig={{
    active: { color: Colors.light, backgroundColor: Colors.danger },
    default: { color: Colors.secondary, backgroundColor: '' }
 }} />
 </>);
};

export default Menu6;