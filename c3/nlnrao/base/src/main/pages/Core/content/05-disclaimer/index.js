import React from "react";
import { ContainerFluid, Row, Col, Card } from "e-ui-react";
import OrderList from "@MainComponents/order-list/index.js";
import Header from '@MainTemplates/Header/index.js';
import { HeaderMenu } from '@MainConfig/HeaderMenu.js';
import Bottom from '@MainTemplates/Bottom/index.js';
import PageListing from "@MainPages/Core/components/PageListing/index.js";

const Disclaimer = () =>{
    return (<div className="mbot15p">
        <Header menulinks={HeaderMenu} />
        <ContainerFluid>
            <Row>
                <Col md={12}>
                    <div>
                        <hr/><h2 className="blog-head" style={{ paddingTop:'15px' }}><b>Disclaimer</b></h2><hr/>
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
                        By using this Website [<b>nellutlalnrao.com</b>], you agree to accept all terms in this Disclaimer. 
                        If you do not agree, please discontinue use immediately.
                        </div>
                        <div className="blog-desc mbot35p">
                    
                            <div id="" className="mtop15p">
                                <div className="mbot15p"><h4><b>I. General Information</b></h4><hr/></div>
                                <div>The content on this website is provided for general informational and educational purposes only. It is not intended as
                                     professional, legal, medical, financial, or other specialist advice. We make no guarantees about the completeness, accuracy, 
                                     reliability, or suitability of this information.</div>
                            </div>

                            <div id="" className="mtop15p">
                                <div className="mbot15p"><h4><b>II. No Professional Advice</b></h4><hr/></div>
                                <div>Nothing on this site constitutes or should be construed as professional advice of any kind. Always consult with a 
                                    qualified professional regarding your specific situation.<br/>
                                    For example:
                                    <ul>
                                        <li className="mtop5p"><b>Health content</b> does not substitute for medical consultation.</li>
                                        <li className="mtop5p"><b>Financial content</b> does not constitute investment advice.</li>
                                        <li className="mtop5p"><b>Legal content</b> is not legal counsel.</li>
                                    </ul>
                                </div>
                            </div>

                            <div id="" className="mtop15p">
                                <div className="mbot15p"><h4><b>III. Accuracy of Information</b></h4><hr/></div>
                                <div>While we strive to keep content up-to-date and accurate, we make no warranties or guarantees of any kind. 
                                    Information may become outdated or inaccurate over time.<br/>
                                    You are encouraged to verify any information obtained from this Website before acting upon it.</div>
                            </div>

                            <div id="" className="mtop15p">
                                <div className="mbot15p"><h4><b>IV. Third-Party Links and Resources</b></h4><hr/></div>
                                <div>This Website may contain links to third-party websites or content. These are provided for convenience 
                                    and do not constitute endorsement or approval.<br/>
                                    We are not responsible for the accuracy, legality, or content of any external sites linked to or referenced 
                                    in our content.</div>
                            </div>

                            <div id="" className="mtop15p">
                                <div className="mbot15p"><h4><b>V. User-Generated Content</b></h4><hr/></div>
                                <div>We may allow users to comment, post, or interact with content. The views expressed by users do not reflect 
                                    our opinions or values. We reserve the right to remove or moderate content at our discretion.</div>
                            </div>

                            <div id="" className="mtop15p">
                                <div className="mbot15p"><h4><b>VI. Affiliate Disclaimer</b></h4><hr/></div>
                                <div>Some links on this Website may be affiliate links, meaning we may earn a small commission if you click through 
                                    and make a purchase, at no additional cost to you. This helps support the maintenance of the Website.</div>
                            </div>

                            <div id="" className="mtop15p">
                                <div className="mbot15p"><h4><b>VII. Testimonials and Reviews</b></h4><hr/></div>
                                <div>Testimonials or reviews reflect the personal experiences and opinions of users or contributors. These are not 
                                    guarantees of specific outcomes and should not be interpreted as such.
                                </div>
                            </div>

                            <div id="" className="mtop15p">
                                <div className="mbot15p"><h4><b>VIII. Limitation of Liability</b></h4><hr/></div>
                                <div>In no event shall we be held liable for any loss or damage (including indirect, incidental, special, or consequential) 
                                    arising out of the use of this Website or reliance on any information provided.<br/>
                                    This includes, but is not limited to:
                                    <ul>
                                        <li className="mtop5p">Loss of data</li>
                                        <li className="mtop5p">Business interruption</li>
                                        <li className="mtop5p">Personal injury</li>
                                        <li className="mtop5p">Financial loss</li>
                                    </ul>
                                </div>
                                <div>Use of this Website is entirely at your own risk.</div>
                            </div>

                            <div id="" className="mtop15p">
                                <div className="mbot15p"><h4><b>IX. No Warranties</b></h4><hr/></div>
                                <div>The Website is provided “as is” and “as available” without warranties of any kind, either express or implied. This 
                                    includes but is not limited to:
                                    <ul>
                                        <li className="mtop5p">Implied warranties of merchantability</li>
                                        <li className="mtop5p">Fitness for a particular purpose</li>
                                        <li className="mtop5p">Non-infringement</li>
                                    </ul>
                                </div>
                                <div>We do not warrant that the Website will be:
                                    <ul>
                                        <li className="mtop5p">Always available</li>
                                        <li className="mtop5p">Free of bugs, viruses, or harmful components</li>
                                        <li className="mtop5p">Compatible with all devices or browsers</li>
                                    </ul>
                                </div>
                            </div>

                            <div id="" className="mtop15p">
                                <div className="mbot15p"><h4><b>X. Fair Use Disclaimer</b></h4><hr/></div>
                                <div>We may reference copyrighted material under the doctrine of "fair use" for purposes such as commentary, criticism, 
                                    education, or news reporting.<br/>
                                    If you believe we have infringed on your intellectual property, please contact us immediately for review and resolution.
                                    </div>
                            </div>

                            <div id="" className="mtop15p">
                                <div className="mbot15p"><h4><b>XI. Views Expressed Disclaimer</b></h4><hr/></div>
                                <div>Opinions expressed on the Website are solely those of the authors or contributors and do not reflect the opinions of 
                                    any organization we are affiliated with (unless explicitly stated).</div>
                            </div>

                            <div id="" className="mtop15p">
                                <div className="mbot15p"><h4><b>XII. Product and Service Disclaimer</b></h4><hr/></div>
                                <div>We do not endorse or guarantee any product or service mentioned on our Website unless explicitly stated. Always do your 
                                    own due diligence before making purchases based on content on our Website.</div>
                            </div>

                            <div id="" className="mtop15p">
                                <div className="mbot15p"><h4><b>XIII. Accessibility Disclaimer</b></h4><hr/></div>
                                <div>We strive to make our Website accessible to all users, including those with disabilities. However, we cannot guarantee 
                                    full compliance with all accessibility standards at all times.</div>
                            </div>

                            <div id="" className="mtop15p">
                                <div className="mbot15p"><h4><b>XIV. Changes to This Disclaimer</b></h4><hr/></div>
                                <div>We reserve the right to modify, update, or change this Disclaimer at any time. Updates will be posted on this page with 
                                    a new “Last Updated” date.<br/>
                                    You are encouraged to review this Disclaimer periodically.
                                </div>
                            </div>

                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="core-summary-title mtop15p"><b>DISCLAIMER - SUMMARY</b></div>
                    <div className="mtop15p">
                        <Card padding={15} backgroundColor="#f5f5f5">
                            <div>
                                <div align="center"><h5><b>What is Disclaimer?</b></h5></div>
                                <div className="blog-desc mtop5p">
                                    Disclaimer is a statement that limits the website’s responsibility for the use of the 
                                    content (like health, legal, or financial advice).<br/>
                                    It protects you from being held legally responsible if someone misuses the info on your site.   
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="blog-desc mtop15p">
                    The information provided is for general informational purposes only and does not constitute legal, financial, or professional advice. 
                    Following are the sections:
                    </div>
                    <div className="blog-desc">
                                        <PageListing data={[{ id:'general-information', label:'General Information' },
                                            { id:'no-professional-advice', label:'No Professional Advice' },
                                            { id:'accuracy-of-information', label:'Accuracy of Information' },
                                            { id:'third-party-links-and-resources', label:'Third-Party Links and Resources' },
                                            { id:'user-generated-content', label:'User-Generated Content' },
                                            { id:'affiliate-disclaimer', label:'Affiliate Disclaimer' },
                                            { id:'testimonials-and-reviews', label:'Testimonials and Reviews' },
                                            { id:'limitation-of-liability', label:'Limitation of Liability' },
                                            { id:'no-warranties', label:'No Warranties' },
                                            { id:'fair-use-disclaimer', label:'Fair Use Disclaimer' },
                                            { id:'views-expressed-disclaimer', label:'Views Expressed Disclaimer' },
                                            { id:'product-and-service-disclaimer', label:'Product and Service Disclaimer' },
                                            { id:'accessibility-disclaimer', label:'Accessibility Disclaimer' },
                                            { id:'changes-to-this-disclaimer', label:'Changes to This Disclaimer' }
                                        ]} />


                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                                      </div>
                </Col>
            </Row>
        </ContainerFluid>
        <Bottom />
    </div>);
};

export default Disclaimer; 