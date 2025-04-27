import React from "react";
import { ContainerFluid, Row, Col, Card } from "e-ui-react";
import OrderList from "@MainComponents/order-list/index.js";
import Header from '@MainTemplates/Header/index.js';
import { HeaderMenu } from '@MainConfig/HeaderMenu.js';
import PageListing from "@MainPages/Core/components/PageListing/index.js";
import Bottom from '@MainTemplates/Bottom/index.js';

const UserAgreement = () =>{
 return (<div className="mbot15p">
    <Header menulinks={HeaderMenu} />
    <ContainerFluid>
        <Row>
            <Col md={12}>
                <div>
                    <hr/><h2 className="blog-head" style={{ paddingTop:'15px' }}><b>User Agreement</b></h2><hr/>
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
                    <div className="mtop15p">This User Agreement ("Agreement") governs your use of our website, services, and 
                    all related products.</div>

                    <div id="acceptance-of-terms" className="mtop15p">
                        <div className="mbot15p"><h4><b>I. Acceptance of Terms</b></h4><hr/></div>
                        <div>
                            <ol>
                                <li className="mtop5p">By accessing or using our website, you agree to comply with and be bound 
                                    by this User Agreement.</li>
                                <li className="mtop5p">If you do not agree with any part of this Agreement, you must not use our 
                                    website.</li>
                                <li className="mtop5p">Your continued use of our website following the posting of changes will 
                                    mean you accept and agree to the changes.</li>
                                <li className="mtop5p">We reserve the right to modify this Agreement at any time without prior 
                                    notice.</li>
                                <li className="mtop5p">It is your responsibility to review this Agreement periodically for 
                                    updates.</li>
                            </ol>
                        </div>
                    </div>
                    <div id="eligibility" className="mtop15p">
                        <div className="mbot15p"><h4><b>II. Eligibility</b></h4><hr/></div>
                        <div>
                            <ol>
                                <li className="mtop5p">You must be at least 18 years old to use this website.</li>
                                <li className="mtop5p">By using this website, you represent and warrant that you are of legal age 
                                    to form a binding contract.</li>
                                <li className="mtop5p">If you are accessing our website on behalf of a company, you warrant that 
                                    you are authorized to bind the company to this Agreement.</li>
                                <li className="mtop5p">We may refuse service, close accounts, or remove or edit content at our 
                                    sole discretion.</li>
                            </ol>
                        </div>
                    </div>
                    <div id="user-responsibilities" className="mtop15p">
                        <div className="mbot15p"><h4><b>III. User Responsibilities</b></h4><hr/></div>
                        <div>
                            <ol>
                                <li className="mtop5p">You agree to use our website in accordance with all applicable local, 
                                    state, national, and international laws and regulations.</li>
                                <li className="mtop5p">You are solely responsible for any information you provide through our services.</li>
                                <li className="mtop5p">You agree not to use our website for any unlawful purposes.</li>
                                <li className="mtop5p">You agree not to engage in any conduct that restricts or inhibits any other user 
                                    from using or enjoying the site.</li>
                                <li className="mtop5p">You agree to be respectful and lawful in all communications and interactions through 
                                    the site.</li>
                                <li className="mtop5p">You agree not to attempt to gain unauthorized access to any portion of the website or 
                                    any other systems connected to the website.</li>
                            </ol>
                        </div>
                    </div>
                    <div id="account-reg-n-security" className="mtop15p">
                        <div className="mbot15p"><h4><b>IV. Account Registration and Security</b></h4><hr/></div>
                        <div>
                            <ol>
                                <li className="mtop5p">To access certain features of the website, you may need to register for an account.</li>
                                <li className="mtop5p">You agree to provide true, accurate, current, and complete information about yourself.</li>
                                <li className="mtop5p">You are responsible for maintaining the confidentiality of your account and password.</li>
                                <li className="mtop5p">You agree to notify us immediately of any unauthorized use of your account or any 
                                    other breach of security.</li>
                                <li className="mtop5p">We will not be liable for any loss or damage arising from your failure to comply with 
                                    this section.</li>
                            </ol>
                        </div>
                    </div>
                    <div id="privacy-policy" className="mtop15p">
                        <div className="mbot15p"><h4><b>V. Privacy Policy</b></h4><hr/></div>
                        <div>
                            <ol>
                                <li className="mtop5p">Our Privacy Policy governs the collection and use of information on this site.</li>
                                <li className="mtop5p">By using the website, you consent to the collection, use, and sharing of your 
                                    information as described in our Privacy Policy.</li>
                            </ol>
                        </div>
                    </div>
                    <div id="intellectual-property-rights" className="mtop15p">
                        <div className="mbot15p"><h4><b>VI. Intellectual Property Rights</b></h4><hr/></div>
                        <div>
                            <ol>
                                <li className="mtop5p">All content on this website, including text, graphics, logos, images, and software, 
                                    is the property of <b>nellutlalnrao.com</b> or its licensors.</li>
                                <li className="mtop5p">The website and its content are protected by copyright, trademark, and other 
                                    intellectual property laws.</li>
                                <li className="mtop5p">You may not reproduce, distribute, modify, display, perform, publish, license, create 
                                    derivative works from, transfer, or sell any content without our prior written consent.</li>
                            </ol>
                        </div>
                    </div>
                    <div id="user-content" className="mtop15p">
                        <div className="mbot15p"><h4><b>VII. User Content</b></h4><hr/></div>
                        <div>
                            <ol>
                                <li className="mtop5p">You retain ownership of any content you submit to the website.</li>
                                <li className="mtop5p">By posting content, you grant us a non-exclusive, worldwide, royalty-free license 
                                    to use, reproduce, and display the content in connection with our services.</li>
                                <li className="mtop5p">You warrant that you have all necessary rights to post your content and that your 
                                    content does not violate the rights of others.</li>
                            </ol>
                        </div>
                    </div>
                    <div id="prohibited-activities" className="mtop15p">
                        <div className="mbot15p"><h4><b>VIII. Prohibited Activities</b></h4><hr/></div>
                        <div>
                            <ol>
                                <li className="mtop5p">You may not use the website for any fraudulent or illegal activities.</li>
                                <li className="mtop5p">You may not impersonate any person or entity or misrepresent your affiliation 
                                    with a person or entity.</li>
                                <li className="mtop5p">You may not upload, post, or transmit any material that is offensive, defamatory, 
                                    or otherwise objectionable.</li>
                                <li className="mtop5p">You may not introduce viruses, Trojan horses, worms, or other material that is 
                                    malicious or technologically harmful.</li>
                            </ol>
                        </div>
                    </div>
                    <div id="third-party-links" className="mtop15p">
                        <div className="mbot15p"><h4><b>IX. Third-Party Links</b></h4><hr/></div>
                        <div>
                            <ol>
                                <li className="mtop5p">The website may contain links to third-party websites.</li>
                                <li className="mtop5p">We do not control or endorse third-party sites.</li>
                                <li className="mtop5p">We are not responsible for the content or practices of linked sites.</li>
                            </ol>
                        </div>
                    </div>
                    <div id="disclaimers" className="mtop15p">
                        <div className="mbot15p"><h4><b>X. Disclaimers</b></h4><hr/></div>
                        <div>
                            <ol>
                                <li className="mtop5p">The website is provided "as is" and "as available."</li>
                                <li className="mtop5p">We disclaim all warranties of any kind, whether express or implied.</li>
                                <li className="mtop5p">We do not guarantee that the site will be error-free, secure, or available 
                                    at all times.</li>
                            </ol>
                        </div>
                    </div>
                    <div id="limitation-of-liability" className="mtop15p">
                        <div className="mbot15p"><h4><b>XI. Limitation of Liability</b></h4><hr/></div>
                        <div>
                            <ol>
                                <li className="mtop5p">We will not be liable for any indirect, incidental, special, consequential, 
                                    or punitive damages.</li>
                                <li className="mtop5p">Our total liability for any claim arising out of or relating to this Agreement 
                                    will not exceed the amount you paid to us, if any.</li>
                            </ol>
                        </div>
                    </div>
                    <div id="indemnification" className="mtop15p">
                        <div className="mbot15p"><h4><b>XII. Indemnification</b></h4><hr/></div>
                        <div>
                            <ol>
                                <li className="mtop5p">You agree to defend, indemnify, and hold harmless <b>nellutlalnrao.com</b>, 
                                its affiliates, from any claims, liabilities, damages, and expenses arising from your use of the 
                                website.</li>
                            </ol>
                        </div>
                    </div>
                    <div id="governing-law" className="mtop15p">
                        <div className="mbot15p"><h4><b>XIII. Governing Law</b></h4><hr/></div>
                        <div>
                            <ol>
                                <li className="mtop5p">This Agreement will be governed by and construed under the laws of 
                                   <b>Telangana, INDIA</b>.</li>
                            </ol>
                        </div>
                    </div>
                    <div id="termination" className="mtop15p">
                        <div className="mbot15p"><h4><b>XIV. Termination</b></h4><hr/></div>
                        <div>
                            <ol>
                                <li className="mtop5p">We may terminate or suspend your access to the website immediately, 
                                    without prior notice or liability, for any reason.</li>
                                <li className="mtop5p">Provisions of this Agreement that by their nature should survive termination 
                                    shall survive termination.</li>
                            </ol>
                        </div>
                    </div>
                    <div className="mtop15p mbot35p">
                    If you have any questions about this User Agreement, please contact us at <b><u>me@nellutlalnrao.com</u></b>
                    </div>
                </div>
            </Col>
            <Col md={4}>
                <div className="core-summary-title mtop15p"><b>USER AGREEMENT - SUMMARY</b></div>
                <div className="mtop15p">
                    <Card padding={15} backgroundColor="#f5f5f5">
                        <div>
                            <div align="center"><h5><b>What is User Agreement?</b></h5></div>
                            <div className="blog-desc mtop5p">
                                User Agreement (or End-User License Agreement - EULA) is a contract between the 
                                website/app and the user that outlines the rules for using the service. It protects 
                                the website owner from legal issues and ensures the user follows the rules.
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="mtop15p">
                    By using our website, you agree to follow our rules, respect intellectual property, protect your 
                    account, and use the site legally. We may update terms anytime. We are not responsible for third-party 
                    links or site errors. Your continued use means acceptance. The Following are the sections - 
                </div>
                <PageListing data={[{ id:'acceptance-of-terms', label:'Acceptance of Terms' },
                    { id:'eligibility', label:'Eligibility' },
                    { id:'user-responsibilities', label:'User Responsibilities' },
                    { id:'account-reg-n-security', label:'Account Registration and Security' },
                    { id:'privacy-policy', label:'Privacy Policy' },
                    { id:'intellectual-property-rights', label:'Intellectual Property Rights' },
                    { id:'user-content', label:'User Content' },
                    { id:'prohibited-activities', label:'Prohibited Activities' },
                    { id:'third-party-links', label:'Third-Party Links' },
                    { id:'disclaimers', label:'Disclaimers' },
                    { id:'limitation-of-liability', label:'Limitation of Liability' },
                    { id:'indemnification', label:'Indemnification' },
                    { id:'governing-law', label:'Governing Law' },
                    { id:'termination', label:'Termination' },
                ]} />
            </Col>
        </Row>
    </ContainerFluid>
    <Bottom />
 </div>);
};

export default UserAgreement; 