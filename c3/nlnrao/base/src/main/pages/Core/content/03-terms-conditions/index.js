import React from "react";
import { ContainerFluid, Row, Col, Card } from "e-ui-react";
import OrderList from "@MainComponents/order-list/index.js";
import Header from '@MainTemplates/Header/index.js';
import { HeaderMenu } from '@MainConfig/HeaderMenu.js';
import Bottom from '@MainTemplates/Bottom/index.js';
import PageListing from "@MainPages/Core/components/PageListing/index.js";

const TermsAndConditions = () =>{
 return (<div className="mbot15p">
     <Header menulinks={HeaderMenu} />
     <ContainerFluid>
         <Row>
             <Col md={12}>
                 <div>
                     <hr/><h2 className="blog-head" style={{ paddingTop:'15px' }}><b>Terms and Conditions</b></h2><hr/>
                 </div>
             </Col>
         </Row>
         <Row>
             <Col md={8}>
                <div className="blog-desc mbot35p">
                    <div className="mtop15p">
                        <div><b><i>Last Updated:</i></b> April 26, 2025</div>
                    </div>
                    <div className="mtop15p"><h4>Welcome to <b>nellutlalnrao.com</b>!</h4></div>
                    <div className="mtop15p">
                    These Terms and Conditions ("Terms") govern your access to and use of our website and services. 
                    By using our website, you agree to comply with these Terms.
                    </div>
                    <div id="acceptance-of-terms" className="mtop15p">
                        <div className="mbot15p"><h4><b>I. Acceptance of Terms</b></h4><hr/></div>
                        <div className="mtop15p">
                        By accessing or using the website, you confirm that you have read, understood, and agree to be bound 
                        by these Terms. If you do not agree, please do not use our website.
                        </div>
                    </div>
                    <div id="changes-to-terms" className="mtop15p">
                        <div className="mbot15p"><h4><b>II. Changes to Terms</b></h4><hr/></div>
                        <div className="mtop15p">
                        We may update these Terms at any time without prior notice.<br/>
                        It is your responsibility to check this page periodically for changes.
                        Your continued use of the website after changes are made constitutes acceptance of those changes.
                        </div>
                    </div>
                    <div id="use-of-our-website" className="mtop15p">
                        <div className="mbot15p"><h4><b>III. Use of Our Website</b></h4><hr/></div>
                        <div className="mtop15p">
                        You agree to use our website only for lawful purposes.<br/>
                        You must not misuse the website by knowingly introducing viruses, trojans, worms, or other malicious 
                        material. You must not attempt unauthorized access to the website or any server, computer, or database 
                        connected to the website.
                        </div>
                    </div>
                    <div id="account-responsibility" className="mtop15p">
                        <div className="mbot15p"><h4><b>IV. Account Responsibility</b></h4><hr/></div>
                        <div className="mtop15p">
                        If you create an account, you are responsible for maintaining its confidentiality and for all activities 
                        that occur under your account.<br/>
                        You must notify us immediately of any unauthorized use or security breach.
                        </div>
                    </div>
                    <div id="intellectual-property-rights" className="mtop15p">
                        <div className="mbot15p"><h4><b>V. Intellectual Property Rights</b></h4><hr/></div>
                        <div className="mtop15p">
                        All content on this website, including text, images, graphics, logos, and software, is owned by 
                        <b>nellutlalnrao.com</b> or its licensors.<br/>
                        You may not copy, reproduce, distribute, modify, or create derivative works without prior written consent.
                        </div>
                    </div>
                    <div id="links-to-other-websites" className="mtop15p">
                        <div className="mbot15p"><h4><b>VI. Links to Other Websites</b></h4><hr/></div>
                        <div className="mtop15p">
                        Our website may contain links to third-party websites or services that are not owned or controlled by us.<br/>
                        We are not responsible for the content, policies, or practices of any third-party sites.
                        </div>
                    </div>
                    <div id="limitation-of-liability" className="mtop15p">
                        <div className="mbot15p"><h4><b>VII. Limitation of Liability</b></h4><hr/></div>
                        <div className="mtop15p">
                        We are not liable for any direct, indirect, incidental, consequential, or punitive damages arising out of 
                        your use or inability to use the website.<br/>
                        We do not guarantee the website will be error-free or uninterrupted.
                        </div>
                    </div>
                    <div id="disclaimer" className="mtop15p">
                        <div className="mbot15p"><h4><b>VIII. Disclaimer</b></h4><hr/></div>
                        <div className="mtop15p">
                        The website is provided "as is" and "as available" without any warranties of any kind, either express 
                        or implied.
                        </div>
                    </div>
                    <div id="termination" className="mtop15p">
                        <div className="mbot15p"><h4><b>IX. Termination</b></h4><hr/></div>
                        <div className="mtop15p">
                        We reserve the right to terminate or suspend access to the website immediately, without notice, for 
                        conduct that we believe violates these Terms or is harmful to other users.
                        </div>
                    </div>
                    <div id="governing-law" className="mtop15p">
                        <div className="mbot15p"><h4><b>X. Governing Law</b></h4><hr/></div>
                        <div className="mtop15p">
                        These Terms are governed by and interpreted according to the laws of <b>Hyderabad, TELANGANA</b>.
                        Any disputes arising from these Terms will be resolved in the courts.
                        </div>
                    </div>
                </div>
             </Col>
             <Col md={4}>
                 <div className="core-summary-title mtop15p"><b>TERMS & CONDITIONS - SUMMARY</b></div>
                 <div className="mtop15p">
                     <Card padding={15} backgroundColor="#f5f5f5">
                         <div>
                             <div align="center"><h5><b>What are Terms and Conditions?</b></h5></div>
                             <div className="blog-desc mtop5p">
                                Terms & Conditions (T&C) defines the rules of using the website – what users can or cannot do, 
                                payment terms (if any), account use, termination, etc.<br/>
                                It helps limit liability, protect content, and legally bind users to website rules.       
                             </div>
                         </div>
                     </Card>
                 </div>
                 <div className="blog-desc mtop15p">
                 The Terms and Conditions outline the rules and guidelines for using our website and services. They explain your 
                 rights and responsibilities, how we protect our content, how we handle user accounts, the limitations of our 
                 liability, and what laws apply. The following are the sections -
                 </div>
                 <div className="blog-desc">
                    <PageListing data={[{ id:'acceptance-of-terms', label:'Acceptance of Terms' },
                                        { id:'changes-to-terms', label:'Changes to Terms' },
                                        { id:'use-of-our-website', label:'Use of Our Website' },
                                        { id:'account-responsibility', label:'Account Responsibility' },
                                        { id:'intellectual-property-rights', label:'Intellectual Property Rights' },
                                        { id:'links-to-other-websites', label:'Links to Other Websites' },
                                        { id:'limitation-of-liability', label:'Limitation of Liability' },
                                        { id:'disclaimer', label:'Disclaimer' },
                                        { id:'termination', label:'Termination' },
                                        { id:'governing-law', label:'Governing Law' },
                                    ]} />
                 </div>
             </Col>
         </Row>
     </ContainerFluid>
     <Bottom />
  </div>);
};

export default TermsAndConditions; 