import React from "react";
import { ContainerFluid, Row, Col, Card } from "e-ui-react";
import OrderList from "@MainComponents/order-list/index.js";
import Header from '@MainTemplates/Header/index.js';
import { HeaderMenu } from '@MainConfig/HeaderMenu.js';
import Bottom from '@MainTemplates/Bottom/index.js';
import PageListing from "@MainPages/Core/components/PageListing/index.js";

const LegalNotice = () =>{
    return (<div className="mbot15p">
        <Header menulinks={HeaderMenu} />
        <ContainerFluid>
            <Row>
                <Col md={12}>
                    <div>
                        <hr/><h2 className="blog-head" style={{ paddingTop:'15px' }}><b>Legal Notice</b></h2><hr/>
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
                        <div>This Legal Notice applies to the website [Your Website Name], located at 
                           <b>https://nellutlalnrao.com</b> ("Website"), operated by [Your Legal Entity Name] ("we," "us," "our"). 
                           Please read this notice carefully, as it governs your use of this Website and outlines your rights and 
                           responsibilities under applicable laws.</div>
                    </div>

                    <div className="blog-desc mbot35p">
                  
                      <div id="intellectual-property-rights" className="mtop15p">
                          <div className="mbot15p"><h4><b>I. Intellectual Property Rights</b></h4><hr/></div>
                          <div>All content published on this Website, including but not limited to text, images, graphics, logos, audio, 
                            video, software, icons, and code, is the intellectual property, unless otherwise noted.
                            <ul>
                                <li className="mtop5p">Unauthorized copying, distribution, reproduction, or modification is strictly prohibited.</li>
                                <li className="mtop5p">Any trademarks, logos, and service marks displayed on the Website are the property of their respective owners.</li>
                                <li className="mtop5p">If you believe any material infringes your copyright, contact us at [email address] with sufficient proof.</li>
                            </ul>  
                          </div>
                      </div>

                      <div id="terms-of-use" className="mtop15p">
                          <div className="mbot15p"><h4><b>II. Terms of Use</b></h4><hr/></div>
                          <div>Your use of the Website is subject to our Terms of Use and Privacy Policy. By accessing or using this Website, you agree 
                            to be bound by these documents.<br/>
                            You must not:
                            <ul>
                                <li className="mtop5p">Engage in unauthorized scraping, reverse-engineering, or hacking of the Website.</li>
                                <li className="mtop5p">Attempt to interfere with the Website’s operation.</li>
                                <li className="mtop5p">Use the Website for unlawful or unethical purposes.</li>
                            </ul>
                            We reserve the right to block access to users who violate these terms.
                          </div>
                      </div>

                      <div id="liability-disclaimer" className="mtop15p">
                          <div className="mbot15p"><h4><b>III. Liability Disclaimer</b></h4><hr/></div>
                          <div>While we make every effort to ensure the accuracy of the content, <b>nellutlalnrao.com</b> assumes no 
                          responsibility for any:
                          <ul>
                            <li className="mtop5p">Errors or omissions in content</li>
                            <li className="mtop5p">Temporary unavailability of the Website</li>
                            <li className="mtop5p">Inaccuracies or outdated information</li>
                            <li className="mtop5p">Damages caused by use of the Website</li>
                          </ul>
                          All information is provided "as is" without warranties of any kind.
                          </div>
                      </div>

                      <div id="external-links" className="mtop15p">
                          <div className="mbot15p"><h4><b>IV. External Links</b></h4><hr/></div>
                          <div>The Website may include links to third-party websites for informational or convenience purposes.
                            <ul>
                                <li className="mtop5p">We are not responsible for the content, privacy policies, or practices 
                                    of third-party sites.</li>
                                <li className="mtop5p">External links do not imply endorsement or affiliation.</li>
                            </ul>
                            Users should review third-party terms before engaging.
                          </div>
                      </div>

                      <div id="governing-law-and-jurisdiction" className="mtop15p">
                          <div className="mbot15p"><h4><b>V. Governing Law and Jurisdiction</b></h4><hr/></div>
                          <div>This Legal Notice shall be governed by and construed in accordance with the laws of <b>Telangana, INDIA</b>. 
                          Any disputes will be subject to the exclusive jurisdiction of the competent courts in <b>Hyderabad, Telangana</b>.<br/>
                          If you access the Website from outside this jurisdiction, you are responsible for compliance with local laws.</div>
                      </div>
                     
                      <div id="changes-to-this-legal-notice" className="mtop15p">
                          <div className="mbot15p"><h4><b>VI. Changes to This Legal Notice</b></h4><hr/></div>
                          <div>We may update this Legal Notice at any time without prior notice. The most current version will always be 
                            available on this page, along with the "Last Updated" date at the top.<br/>
                            By continuing to use the Website after changes, you agree to the updated notice.
                          </div>
                      </div>

                      <div id="severability" className="mtop15p">
                          <div className="mbot15p"><h4><b>VII. Severability</b></h4><hr/></div>
                          <div>If any provision of this Legal Notice is held to be invalid, illegal, or unenforceable by a court of competent 
                            jurisdiction, such provision shall be modified to the extent necessary to make it enforceable. The remainder of the 
                            notice will remain in full force and effect.</div>
                      </div>

                      <div id="language" className="mtop15p">
                          <div className="mbot15p"><h4><b>VIII. Language</b></h4><hr/></div>
                          <div>This Legal Notice is provided in English. If any translated version conflicts with the English version, the English 
                            version shall prevail.</div>
                      </div>

                      <div id="data-protection-and-privacy" className="mtop15p">
                          <div className="mbot15p"><h4><b>IX. Data Protection and Privacy</b></h4><hr/></div>
                          <div>Please refer to our Privacy Policy and Cookies Policy for full details on how we collect, use, store, and protect 
                            your personal data.</div>
                      </div>

                      <div id="enforcement" className="mtop15p">
                          <div className="mbot15p"><h4><b>X. Enforcement</b></h4><hr/></div>
                          <div>We reserve the right to enforce this Legal Notice using appropriate legal remedies, including seeking damages, 
                            injunctive relief, or criminal prosecution in case of fraud, abuse, or unauthorized access.</div>
                      </div>

                      <div id="no-waiver" className="mtop15p">
                          <div className="mbot15p"><h4><b>XI. No Waiver</b></h4><hr/></div>
                          <div>Our failure to enforce any part of this Legal Notice shall not constitute a waiver of our rights. Any waiver must 
                            be explicitly made in writing and signed by an authorized representative.</div>
                      </div>

                    </div>
                </Col>
                <Col md={4}>
                    <div className="core-summary-title mtop15p"><b>LEGAL NOTICE - SUMMARY</b></div>
                    <div className="mtop15p">
                        <Card padding={15} backgroundColor="#f5f5f5">
                            <div>
                                <div align="center"><h5><b>What is Legal Notice?</b></h5></div>
                                <div className="blog-desc mtop5p">
                                Legal Notice summarizes the legal ownership of the site, trademarks, and other intellectual 
                                property details. It gives clarity on copyright and protects your legal rights as the site owner.  
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="blog-desc mtop15p">
                    This Legal Notice outlines the legal ownership, terms of use, liability limitations, and governing laws applicable 
                    to <b>nellutlalnrao.com</b>. By using this website, you agree to comply with our terms and all applicable laws. 
                    Following are the sections:
                    </div>
                    <div className="blog-desc">
                        <PageListing data={[{ id:'intellectual-property-rights', label:'Intellectual Property Rights' },
                              { id:'terms-of-use', label:'Terms of Use' },
                              { id:'liability-disclaimer', label:'Liability Disclaimer' },
                              { id:'external-links', label:'External Links' },
                              { id:'governing-law-and-jurisdiction', label:'Governing Law and Jurisdiction' },
                              { id:'changes-to-this-legal-notice', label:'Changes to This Legal Notice' },
                              { id:'severability', label:'Severability' },
                              { id:'language', label:'Language' },
                              { id:'data-protection-and-privacy', label:'Data Protection and Privacy' },
                              { id:'enforcement', label:'Enforcement' },
                              { id:'no-waiver', label:'No Waiver' }]} />
                    </div>
                </Col>
            </Row>
        </ContainerFluid>
        <Bottom />
    </div>);
};

export default LegalNotice; 