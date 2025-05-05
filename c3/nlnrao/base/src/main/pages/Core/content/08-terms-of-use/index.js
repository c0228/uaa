import React from "react";
import { ContainerFluid, Row, Col, Card } from "e-ui-react";
import OrderList from "@MainComponents/order-list/index.js";
import Header from '@MainTemplates/Header/index.js';
import { HeaderMenu } from '@MainConfig/HeaderMenu.js';
import Bottom from '@MainTemplates/Bottom/index.js';
import PageListing from "@MainPages/Core/components/PageListing/index.js";

const TermsOfUse = () =>{
    return (<div className="mbot15p">
        <Header menulinks={HeaderMenu} />
        <ContainerFluid>
            <Row>
                <Col md={12}>
                    <div>
                        <hr/><h2 className="blog-head" style={{ paddingTop:'15px' }}><b>Terms of Use</b></h2><hr/>
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
                        <div className="mtop15p">Welcome to <b>nellutlalnrao.com</b> (“we,” “us,” or “our”). These Terms of 
                        Use ("Terms") govern your access to and use of our website located at <b>https://nellutlalnrao.com</b> 
                        (the “Website”). By accessing, browsing, or using the Website, you agree to comply with and be bound by 
                        these Terms.<br/>
                        If you do not agree to these Terms, please do not use this Website.</div>
                    </div>
                    <div className="blog-desc mbot35p">
                    
                      <div id="acceptance-of-terms" className="mtop15p">
                          <div className="mbot15p"><h4><b>I. Acceptance of Terms</b></h4><hr/></div>
                          <div>By using this Website, you:
                            <ul>
                                <li className="mtop5p">Confirm that you are at least 18 years of age or are using 
                                    the Website under parental supervision.</li>
                                <li className="mtop5p">Agree to these Terms of Use, our Privacy Policy, Cookie Policy, 
                                    Disclaimer and Legal Notice.</li>
                            </ul>
                          </div>
                      </div>
                      
                      <div id="modifications-to-terms" className="mtop15p">
                          <div className="mbot15p"><h4><b>II. Modifications to Terms</b></h4><hr/></div>
                          <div>We reserve the right to update, change, or replace any part of these Terms at our discretion. 
                            Continued use of the Website after changes constitutes acceptance of those changes. We recommend 
                            reviewing these Terms regularly.
                          </div>
                      </div>

                      <div id="use-of-the-website" className="mtop15p">
                          <div className="mbot15p"><h4><b>III. Use of the Website</b></h4><hr/></div>
                          <div>You agree to use the Website:
                            <ul>
                                <li className="mtop5p">Only for lawful purposes.</li>
                                <li className="mtop5p">In a way that does not infringe on the rights of, restrict, or inhibit 
                                    anyone else’s use and enjoyment of the Website.</li>
                                <li className="mtop5p">Without introducing malicious code, attempting to gain unauthorized access, 
                                    or impersonating others.</li>
                            </ul>
                          We may terminate or restrict access to users who misuse the Website.
                          </div>
                      </div>
                  
                      <div id="user-content-and-contributions" className="mtop15p">
                          <div className="mbot15p"><h4><b>IV. User Content and Contributions</b></h4><hr/></div>
                          <div>If you submit, post, or upload any content (e.g., blog comments, forum posts):
                            <ul>
                                <li className="mtop5p">You grant us a non-exclusive, royalty-free, worldwide license to use, 
                                    publish, or display such content.</li>
                                <li className="mtop5p">You affirm that you own the rights to your content and that it does not 
                                    infringe on others' rights.</li>
                                <li className="mtop5p">We reserve the right to edit, remove, or refuse content that violates our 
                                    policies or is deemed inappropriate.</li>
                            </ul>
                          </div>
                      </div>

                      <div id="intellectual-property" className="mtop15p">
                          <div className="mbot15p"><h4><b>V. Intellectual Property</b></h4><hr/></div>
                          <div>All Website content, including logos, graphics, text, layout, and functionality, is the property 
                            of <b>nellutlalnrao.com</b> or its licensors and protected by applicable copyright and trademark laws.<br/>
                            You may not:
                            <ul>
                                <li className="mtop5p">Copy, reproduce, or distribute content without prior written permission.</li>
                                <li className="mtop5p">Remove or modify copyright, trademark, or proprietary notices.</li>
                            </ul>
                          </div>
                      </div>
                      
                      <div id="links-to-third-party-sites" className="mtop15p">
                          <div className="mbot15p"><h4><b>VI. Links to Third-Party Sites</b></h4><hr/></div>
                          <div>Our Website may include links to third-party websites for convenience. We:
                            <ul>
                                <li className="mtop5p">Do not endorse or control these third-party sites.</li>
                                <li className="mtop5p">Are not responsible for their content, terms, or privacy practices.</li>
                            </ul>
                            You access third-party websites at your own risk.
                          </div>
                      </div>
              
                      <div id="disclaimers" className="mtop15p">
                          <div className="mbot15p"><h4><b>VII. Disclaimers</b></h4><hr/></div>
                          <div>The Website and its content are provided “as is” and “as available.” We:
                            <ul>
                                <li className="mtop5p">Do not guarantee that the Website will be secure, error-free, or uninterrupted.</li>
                                <li className="mtop5p">Do not guarantee the accuracy or completeness of content.</li>
                                <li className="mtop5p">Disclaim all warranties, express or implied.</li>
                            </ul>
                          </div>
                      </div>

                      <div id="limitation-of-liability" className="mtop15p">
                          <div className="mbot15p"><h4><b>VIII. Limitation of Liability</b></h4><hr/></div>
                          <div>To the fullest extent permitted by law, we are not liable for:
                            <ul>
                                <li className="mtop5p">Any indirect, incidental, or consequential damages.</li>
                                <li className="mtop5p">Any data loss, profit loss, or business interruption resulting from your use of 
                                    the Website.</li>
                            </ul>
                            Your sole remedy for dissatisfaction with the Website is to stop using it.
                          </div>
                      </div>
                      
                      <div id="indemnification" className="mtop15p">
                          <div className="mbot15p"><h4><b>IX. Indemnification</b></h4><hr/></div>
                          <div>You agree to indemnify, defend, and hold harmless <b>nellutlalnrao.com</b> and its owners, partners, 
                          staff, and affiliates from:
                          <ul>
                            <li className="mtop5p">Any claims or demands arising out of your use of the Website,</li>
                            <li className="mtop5p">Your breach of these Terms,</li>
                            <li className="mtop5p">Or your violation of any law or rights of a third party.</li>
                          </ul>
                          </div>
                      </div>

                      <div id="privacy" className="mtop15p">
                          <div className="mbot15p"><h4><b>X. Privacy</b></h4><hr/></div>
                          <div>Your use of the Website is also governed by our Privacy Policy and Cookies Policy, which explain how 
                            we collect and use your personal information.
                          </div>
                      </div>

                      <div id="account-registration" className="mtop15p">
                          <div className="mbot15p"><h4><b>XI. Account Registration (if applicable)</b></h4><hr/></div>
                          <div>To access certain features, you may be required to register:
                            <ul>
                                <li className="mtop5p">You must provide accurate information and keep it updated.</li>
                                <li className="mtop5p">You are responsible for keeping your login credentials confidential.</li>
                                <li className="mtop5p">You must not share your account with others or allow unauthorized access.</li>
                            </ul>
                            We may suspend or delete accounts that violate these Terms.
                          </div>
                      </div>

                      <div id="prohibited-conduct" className="mtop15p">
                          <div className="mbot15p"><h4><b>XII. Prohibited Conduct</b></h4><hr/></div>
                          <div>You agree not to:
                            <ul>
                                <li className="mtop5p">Use the Website for commercial solicitation or spam.</li>
                                <li className="mtop5p">Post offensive, hateful, or illegal content.</li>
                                <li className="mtop5p">Attempt to hack, disrupt, or compromise the Website’s integrity or security.</li>
                            </ul>
                            We reserve the right to investigate and take legal action if necessary.
                          </div>
                      </div>

                      <div id="termination" className="mtop15p">
                          <div className="mbot15p"><h4><b>XIII. Termination</b></h4><hr/></div>
                          <div>We may terminate or suspend your access at any time, without notice, for violating these Terms. 
                            Upon termination:
                            <ul>
                                <li className="mtop5p">Your right to access the Website immediately ends.</li>
                                <li className="mtop5p">Clauses related to intellectual property, liability, and privacy survive termination.</li>
                            </ul>
                          </div>
                      </div>
                      
                      <div id="governing-law" className="mtop15p">
                          <div className="mbot15p"><h4><b>XIV. Governing Law</b></h4><hr/></div>
                          <div>These Terms shall be governed by the laws of <b>Telangana, INDIA</b>. Any legal proceedings must be filed in a 
                          court of competent jurisdiction in <b>Hyderabad, Telangana</b>.
                          </div>
                      </div>

                      <div id="severability" className="mtop15p">
                          <div className="mbot15p"><h4><b>XV. Severability</b></h4><hr/></div>
                          <div>If any provision of these Terms is found invalid or unenforceable, that provision will be modified or removed 
                            to the extent necessary. The rest of the Terms remain fully effective.
                          </div>
                      </div>

                      <div id="entire-agreement" className="mtop15p">
                          <div className="mbot15p"><h4><b>XVI. Entire Agreement</b></h4><hr/></div>
                          <div>These Terms, along with our Privacy Policy, Cookie Policy, and other linked documents, constitute the full 
                            agreement between you and <b>nellutlalnrao.com</b>.
                          </div>
                      </div>

                    </div>
                </Col>
                <Col md={4}>
                    <div className="core-summary-title mtop15p"><b>TERMS OF USE - SUMMARY</b></div>
                    <div className="mtop15p">
                        <Card padding={15} backgroundColor="#f5f5f5">
                            <div>
                                <div align="center"><h5><b>What are Terms of Use?</b></h5></div>
                                <div className="blog-desc mtop5p">
                                Terms of Use is similar to Terms & Conditions; it outlines how users are allowed to interact with 
                                the site and its content. It prevents misuse of services, sets clear expectations, and supports 
                                legal enforcement if terms are broken.
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="blog-desc mtop15p">
                        The Following are sections:
                        <PageListing data={[{ id:'acceptance-of-terms', label:'Acceptance of Terms' },
                                    { id:'modifications-to-terms', label:'Modifications to Terms' },
                                    { id:'use-of-the-website', label:'Use of the Website' },
                                    { id:'user-content-and-contributions', label:'User Content and Contributions' },
                                    { id:'intellectual-property', label:'Intellectual Property' },
                                    { id:'links-to-third-party-sites', label:'Links to Third-Party Sites' },
                                    { id:'disclaimers', label:'Disclaimers' },
                                    { id:'limitation-of-liability', label:'Limitation of Liability' },
                                    { id:'indemnification', label:'Indemnification' },
                                    { id:'privacy', label:'Privacy' },
                                    { id:'account-registration', label:'Account Registration (if applicable)' },
                                    { id:'prohibited-conduct', label:'Prohibited Conduct' },
                                    { id:'termination', label:'Termination' },
                                    { id:'governing-law', label:'Governing Law' },
                                    { id:'severability', label:'Severability' },
                                    { id:'entire-agreement', label:'Entire Agreement' }]} />
                    </div>
                </Col>
            </Row>
        </ContainerFluid>
        <Bottom />
    </div>);
};

export default TermsOfUse; 