import React from "react";
import { ContainerFluid, Row, Col, Card } from "e-ui-react";
import OrderList from "@MainComponents/order-list/index.js";
import Header from '@MainTemplates/Header/index.js';
import { HeaderMenu } from '@MainConfig/HeaderMenu.js';
import Bottom from '@MainTemplates/Bottom/index.js';
import PageListing from "@MainPages/Core/components/PageListing/index.js";

const Accessibility = () =>{
    return (<div className="mbot15p">
        <Header menulinks={HeaderMenu} />
        <ContainerFluid>
            <Row>
                <Col md={12}>
                    <div>
                        <hr/><h2 className="blog-head" style={{ paddingTop:'15px' }}><b>Accessibility</b></h2><hr/>
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
                        <div className="mtop15p"><b>nellutlalnrao.com</b> is committed to ensuring digital accessibility for 
                        all users, including people with disabilities. We are actively working to improve the user experience for 
                        everyone, and we strive to comply with relevant accessibility standards.</div>
                        <div className="blog-desc mbot35p">
                      
                            <div id="our-commitment-to-accessibility" className="mtop15p">
                                <div className="mbot15p"><h4><b>I. Our Commitment to Accessibility</b></h4><hr/></div>
                                <div>We want every visitor to have a welcoming and inclusive experience. Whether you use assistive 
                                    technologies like screen readers, magnifiers, voice recognition software, or switch technology, 
                                    our goal is to make our website easy to use and accessible for you.<br/>
                                    We are continuously taking steps to enhance our site’s usability and ensure it aligns with the 
                                    <b>Web Content Accessibility Guidelines (WCAG) 2.1</b>, Level <b>AA</b>, and where possible, 
                                    Level <b>AAA</b>.</div>
                            </div>

                            <div id="measures-to-support-accessibility" className="mtop15p">
                                <div className="mbot15p"><h4><b>II. Measures to Support Accessibility</b></h4><hr/></div>
                                <div>To ensure accessibility, we have taken the following steps:
                                    <ul>
                                        <li className="mtop5p">Performed audits using tools such as WAVE and Lighthouse.</li>
                                        <li className="mtop5p">Used semantic HTML for better screen reader compatibility.</li>
                                        <li className="mtop5p">Implemented ARIA (Accessible Rich Internet Applications) attributes where necessary.</li>
                                        <li className="mtop5p">Ensured keyboard navigability across key components.</li>
                                        <li className="mtop5p">Provided sufficient contrast between foreground and background elements.</li>
                                        <li className="mtop5p">Added meaningful alternative text for all non-text content.</li>
                                        <li className="mtop5p">Avoided reliance on color alone to convey information.</li>
                                    </ul>
                                </div>
                            </div>

                            <div id="accessibility-features" className="mtop15p">
                                <div className="mbot15p"><h4><b>III. Accessibility Features</b></h4><hr/></div>
                                <div><b>Key Features on Our Website:</b></div>
                                <div>
                                    <ul>
                                        <li className="mtop5p"><b>Keyboard Navigation:</b> All functionality is accessible via keyboard.</li>
                                        <li className="mtop5p"><b>Screen Reader Compatibility:</b> Labels, roles, and landmarks are included for assistive tech.</li>
                                        <li className="mtop5p"><b>Alt Text:</b> Descriptive alt text is provided for all meaningful images.</li>
                                        <li className="mtop5p"><b>Contrast & Text Resize:</b> Users can zoom in and adjust text size without loss of content or functionality.</li>
                                        <li className="mtop5p"><b>Captions:</b> Where possible, videos include closed captions or transcripts.</li>
                                        <li className="mtop5p"><b>Skip to Content Link:</b> Available for users to bypass repetitive content.</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div id="areas-for-ongoing-improvement" className="mtop15p">
                                <div className="mbot15p"><h4><b>IV. Areas for Ongoing Improvement</b></h4><hr/></div>
                                <div>While we strive for full accessibility, some areas of the website are still being improved. We are actively working on:
                                    <ul>
                                        <li className="mtop5p">Improving third-party plugin accessibility.</li>
                                        <li className="mtop5p">Ensuring all downloadable documents are accessible (e.g., PDFs).</li>
                                        <li className="mtop5p">Enhancing color contrast on older blog posts or legacy pages.</li>
                                        <li className="mtop5p">Providing better support for users with cognitive disabilities.</li>
                                    </ul>
                                </div>
                            </div>

                            <div id="conformance-status" className="mtop15p">
                                <div className="mbot15p"><h4><b>V. Conformance Status</b></h4><hr/></div>
                                <div><b>nellutlalnrao.com</b> aims to conform to <b>WCAG 2.1 Level AA</b> standards. As of the latest review, our website is:
                                    <ul>
                                        <li className="mtop5p"><b>Partially conformant –</b> Some content does not yet fully conform, especially third-party 
                                        integrations or legacy elements.</li>
                                    </ul>
                                </div>
                            </div>

                            <div id="compatibility-with-browsers-and-assistive-technology" className="mtop15p">
                                <div className="mbot15p"><h4><b>VI. Compatibility with Browsers and Assistive Technology</b></h4><hr/></div>
                                <div>Our website is designed to be compatible with:
                                    <ul>
                                        <li className="mtop5p"><b>Modern web browsers:</b> Chrome, Firefox, Safari, Edge</li>
                                        <li className="mtop5p"><b>Assistive technologies:</b> JAWS, NVDA, VoiceOver, TalkBack</li>
                                        <li className="mtop5p"><b>Operating systems:</b> Windows, macOS, iOS, Android</li>
                                    </ul>
                                </div>
                                <div>We recommend using the latest versions of browsers and assistive tech for the best experience.</div>
                            </div>

                            <div id="accessibility-support-and-contact" className="mtop15p">
                                <div className="mbot15p"><h4><b>VII. Accessibility Support and Contact</b></h4><hr/></div>
                                <div>If you are experiencing difficulty accessing any content on our website or require assistance, we’re here to help.
                                    <ul>
                                        <li className="mtop5p"><b>Email:</b> <u>me@nellutlalnrao.com</u></li>
                                    </ul>
                                We aim to respond within 2 business days.
                                </div>
                            </div>

                            <div id="feedback" className="mtop15p">
                                <div className="mbot15p"><h4><b>VIII. Feedback</b></h4><hr/></div>
                                <div>We welcome your feedback on the accessibility of our website. Let us know if you encounter barriers so we can 
                                    make improvements. Suggestions and reports are taken seriously and acted upon promptly.<br/>
                                    Submit feedback via:
                                    <ul>
                                        <li className="mtop5p"><b>Email:</b> <u>me@nellutlalnrao.com</u></li>
                                    </ul>
                                </div>
                            </div>

                            <div id="third-party-content" className="mtop15p">
                                <div className="mbot15p"><h4><b>IX. Third-Party Content</b></h4><hr/></div>
                                <div>Our website may include third-party widgets, embeds, and tools (such as maps, ads, payment gateways, comment plugins) 
                                    that we do not fully control. We cannot guarantee that all third-party content is accessible, but we strive to choose 
                                    providers that support accessibility.</div>
                            </div>

                            <div id="accessibility-roadmap" className="mtop15p">
                                <div className="mbot15p"><h4><b>X. Accessibility Roadmap</b></h4><hr/></div>
                                <div>We are working on the following enhancements over the next 6–12 months:
                                    <ul>
                                        <li className="mtop5p">Full compliance of blog archive pages</li>
                                        <li className="mtop5p">Interactive accessibility-friendly charts/graphs</li>
                                        <li className="mtop5p">Real-time text-to-speech options</li>
                                        <li className="mtop5p">Multilingual accessibility support for non-English readers</li>
                                    </ul>
                                </div>
                            </div>

                            <div id="limitations-and-alternatives" className="mtop15p">
                                <div className="mbot15p"><h4><b>XI. Limitations and Alternatives</b></h4><hr/></div>
                                <div>Despite our best efforts, some areas may remain partially inaccessible. If any feature is not usable 
                                    for you, we are happy to provide alternative formats (PDFs, audio versions, email summaries) upon request.</div>
                            </div>

                            <div id="final-note" className="mtop15p">
                                <div className="mbot15p"><h4><b>XII. Final Note</b></h4><hr/></div>
                                <div>We are committed to building an internet that is inclusive, respectful, and user-centered. Your voice matters, and 
                                    we value your support in helping us make <b>nellutlalnrao.com</b> a space for everyone.</div>
                            </div>

                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="core-summary-title mtop15p"><b>ACCESSIBILITY - SUMMARY</b></div>
                    <div className="mtop15p">
                        <Card padding={15} backgroundColor="#f5f5f5">
                            <div>
                                <div align="center"><h5><b>What is Accessibility?</b></h5></div>
                                <div className="blog-desc mtop5p">
                                    Accessibility describes how the website makes content accessible to people with 
                                    disabilities. It encourages inclusion and is required by some laws like the ADA (Americans 
                                    with Disabilities Act).
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="blog-desc mtop15p">
                    At <b>nellutlalnrao.com</b>, we are committed to providing a digital experience that is accessible to everyone, including 
                    people with disabilities. Our website follows the <b>WCAG 2.1 AA</b> guidelines and is tested for usability with screen readers, 
                    keyboard navigation, and other assistive technologies. Following are the sections:
                    <div className="blog-desc">
                        <PageListing data={[{ id:'our-commitment-to-accessibility', label:'Our Commitment to Accessibility' },
                                            { id:'measures-to-support-accessibility', label:'Measures to Support Accessibility' },
                                            { id:'accessibility-features', label:'Accessibility Features' },
                                            { id:'areas-for-ongoing-improvement', label:'Areas for Ongoing Improvement' },
                                            { id:'conformance-status', label:'Conformance Status' },
                                            { id:'compatibility-with-browsers-and-assistive-technology', label:'Compatibility with Browsers and Assistive Technology' },
                                            { id:'accessibility-support-and-contact', label:'Accessibility Support and Contact' },
                                            { id:'feedback', label:'Feedback' },
                                            { id:'third-party-content', label:'Third-Party Content' },
                                            { id:'accessibility-roadmap', label:'Accessibility Roadmap' },
                                            { id:'limitations-and-alternatives', label:'Limitations and Alternatives' },
                                            { id:'final-note', label:'Final Note' }]} />
                    </div>
                    </div>
                </Col>
            </Row>
        </ContainerFluid>
        <Bottom />
     </div>);
};

export default Accessibility; 