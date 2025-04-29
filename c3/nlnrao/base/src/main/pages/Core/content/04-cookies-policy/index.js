import React from "react";
import { ContainerFluid, Row, Col, Card } from "e-ui-react";
import OrderList from "@MainComponents/order-list/index.js";
import Header from '@MainTemplates/Header/index.js';
import { HeaderMenu } from '@MainConfig/HeaderMenu.js';
import Bottom from '@MainTemplates/Bottom/index.js';
import PageListing from "@MainPages/Core/components/PageListing/index.js";

const CookiesPolicy = () =>{
 return (<div className="mbot15p">
      <Header menulinks={HeaderMenu} />
      <ContainerFluid>
          <Row>
              <Col md={12}>
                  <div>
                      <hr/><h2 className="blog-head" style={{ paddingTop:'15px' }}><b>Cookies Policy</b></h2><hr/>
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
                    This Cookie Policy explains how <b>nellutlalnrao.com</b> ("we", "us", or "our") uses cookies and similar tracking 
                    technologies when you visit our website [<b>www.nellutlalnrao.com</b>] (the "Website").<br/><br/>
                    By using our Website, you consent to the use of cookies in accordance with this policy. If you do not agree to 
                    the use of cookies, you should set your browser settings accordingly or not use the Website.
                    </div>
                    <div id="what-are-cookies" className="mtop15p">
                        <div className="mbot15p"><h4><b>I. What Are Cookies?</b></h4><hr/></div>
                        <div>Cookies are small text files stored on your device (computer, smartphone, tablet) when you visit a 
                            website. They allow websites to remember your actions and preferences over a period of time, so you don’t 
                            have to re-enter them whenever you return to the site or browse from one page to another.</div>
                    </div>
                    <div id="why-do-we-use-cookies" className="mtop15p">
                        <div className="mbot15p"><h4><b>II. Why Do We Use Cookies?</b></h4><hr/></div>
                        <div>
                        We use cookies for various reasons, including:
                        <ol>
                            <li className="mtop5p">Ensuring the Website functions properly</li>
                            <li className="mtop5p">Improving user experience</li>
                            <li className="mtop5p">Analyzing how users interact with the Website</li>
                            <li className="mtop5p">Remembering your preferences (such as language or region)</li>
                            <li className="mtop5p">Providing relevant advertisements and marketing</li>
                        </ol>

                        </div>
                    </div>
                    <div id="types-of-cookies-we-use" className="mtop15p">
                        <div className="mbot15p"><h4><b>III. Types of Cookies We Use</b></h4><hr/></div>
                        <div>
                            <ol type="a">
                                <li className="mtop15p">
                                    <div><b>Strictly Necessary Cookies</b></div>
                                    <div>These cookies are essential for the operation of our Website and cannot be switched off in 
                                        our systems. They are usually only set in response to actions made by you, such as logging 
                                        in or filling out forms.</div>
                                    <div><i>Example:</i></div>
                                    <div>
                                        <ul>
                                            <li className="mtop5p">Session cookies</li>
                                            <li className="mtop5p">Authentication cookies</li>
                                            <li className="mtop5p">Security cookies</li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="mtop15p">
                                    <div><b>Performance Cookies</b></div>
                                    <div>These cookies collect information about how you use our Website, such as pages visited and 
                                        error messages. They help us improve the way the Website works.</div>
                                    <div><i>Examples:</i></div>
                                    <div>
                                        <ul>
                                            <li className="mtop5p">Google Analytics</li>
                                            <li className="mtop5p">Heatmaps</li>
                                            <li className="mtop5p">Page load metrics</li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="mtop15p">
                                    <div><b>Functional Cookies</b></div>
                                    <div>These allow our Website to remember choices you make (such as your username, language, or 
                                        region) and provide enhanced features.</div>
                                    <div><i>Examples:</i></div>
                                    <div>
                                        <ul>
                                            <li className="mtop5p">Preference cookies</li>
                                            <li className="mtop5p">Customization cookies</li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="mtop15p">
                                    <div><b>Targeting or Advertising Cookies</b></div>
                                    <div>These cookies are used to deliver content that is more relevant to you and your interests. 
                                        They may be used to deliver targeted ads or to limit the number of times you see an ad.</div>
                                    <div><i>Examples:</i></div>
                                    <div>
                                        <ul>
                                            <li className="mtop5p">Facebook Pixel</li>
                                            <li className="mtop5p">Google Ads</li>
                                            <li className="mtop5p">LinkedIn Insight Tag</li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="mtop15p">
                                    <div><b>Third-Party Cookies</b></div>
                                    <div>We may allow third-party service providers to place cookies on your device for advertising, 
                                        analytics, and other services.</div>
                                    <div>Third parties may include:</div>
                                    <div>
                                        <ul>
                                            <li className="mtop5p">Google</li>
                                            <li className="mtop5p">Meta (Facebook, Instagram)</li>
                                            <li className="mtop5p">Twitter</li>
                                            <li className="mtop5p">LinkedIn</li>
                                            <li className="mtop5p">YouTube</li>
                                        </ul>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div id="How-long-are-cookies-stored" className="mtop15p">
                        <div className="mbot15p"><h4><b>IV. How Long Are Cookies Stored?</b></h4><hr/></div>
                        <div>Cookies can be:</div>
                        <div>
                            <ul>
                                <li className="mtop5p"><b>Session Cookies –</b> Deleted when you close your browser</li>
                                <li className="mtop5p"><b>Persistent Cookies –</b> Remain on your device until they expire or 
                                are deleted manually</li>
                            </ul>
                        </div>
                        <div>Each cookie has a unique expiration date, and the duration varies depending on the type of cookie 
                            and its purpose.</div>
                    </div>
                    <div id="cookie-consent" className="mtop15p">
                        <div className="mbot15p"><h4><b>V. Cookie Consent</b></h4><hr/></div>
                        <div>Upon your first visit, you will be presented with a cookie banner requesting your consent to use 
                            cookies. You may:</div>
                        <div>
                            <ul>
                                <li className="mtop5p">Accept all cookies</li>
                                <li className="mtop5p">Customize your preferences</li>
                                <li className="mtop5p">Reject all non-essential cookies</li>
                            </ul>
                        </div>
                    </div>
                    <div id="how-to-manage-and-disable-cookies" className="mtop15p">
                        <div className="mbot15p"><h4><b>VI. How to Manage and Disable Cookies</b></h4><hr/></div>
                        <div>Most web browsers allow you to control cookies through their settings preferences. Here’s how to manage 
                            cookies in common browsers:</div>
                        <div className="mtop5p"><b>Google Chrome</b></div>
                        <div>Go to Settings --&gt; Privacy and Security --&gt; Cookies and other site data</div>
                        <div className="mtop5p"><b>Mozilla Firefox</b></div>
                        <div>Go to Options --&gt; Privacy & Security --&gt; Cookies and Site Data</div>
                        <div className="mtop5p"><b>Safari</b></div>
                        <div>Go to Preferences --&gt; Privacy</div>
                        <div className="mtop5p"><b>Microsoft Edge</b></div>
                        <div>Go to Settings --&gt; Site permissions --&gt; Cookies and site data</div>
                        <div>You can also use tools like:</div>
                        <div>
                            <ul>
                                <li className="mtop5p">YourAdChoices</li>
                                <li className="mtop5p">Network Advertising Initiative</li>
                            </ul>
                        </div>
                        <div><b>Note:</b> Disabling cookies may limit your ability to use certain features of the Website.</div>
                    </div>
                    <div id="cookie-list" className="mtop15p">
                        <div className="mbot15p"><h4><b>VII. Cookie List</b></h4><hr/></div>
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr style={{ backgroundColor:'#eee' }}>
                                        <td><b>Cookie Name</b></td>
                                        <td><b>Type</b></td>
                                        <td><b>Purpose</b></td>
                                        <td><b>Expiry</b></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><code><b>_ga</b></code></td>
                                        <td>Analytics</td>
                                        <td>Google Analytics - tracks user behavior</td>
                                        <td>2 years</td>
                                    </tr>
                                    <tr>
                                        <td><code><b>_gid</b></code></td>
                                        <td>Analytics</td>
                                        <td>Google Analytics - session ID</td>
                                        <td>24 hours</td>
                                    </tr>
                                    <tr>
                                        <td><code><b>cookieConsent</b></code></td>
                                        <td>Strictly Necessary</td>
                                        <td>Stores your consent preferences</td>
                                        <td>1 year</td>
                                    </tr>
                                    <tr>
                                        <td><code><b>fbp</b></code></td>
                                        <td>Targeting</td>
                                        <td>Facebook Pixel tracking</td>
                                        <td>90 days</td>
                                    </tr>
                                    <tr>
                                        <td><code><b>session_id</b></code></td>
                                        <td>Strictly Necessary</td>
                                        <td>Maintains logged-in user sessions</td>
                                        <td>End of session</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>This list is regularly updated as we change cookies and services.</div>
                    </div>
                    <div id="web-beacons-pixels-or-similar-technologies-usage" className="mtop15p">
                        <div className="mbot15p"><h4><b>VIII. Web Beacons, Pixels, or Similar Technologies Usage</b></h4><hr/></div>
                        <div>Yes. In addition to cookies, we may use web beacons (clear GIFs or pixel tags), tracking URLs, 
                            or scripts to understand user behavior and improve user experience.</div>
                    </div>
                    <div id="changes-to-this-policy" className="mtop15p">
                        <div className="mbot15p"><h4><b>IX. Changes to This Policy</b></h4><hr/></div>
                        <div>We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated 
                            effective date. We encourage you to review this policy periodically.</div>
                    </div>
                </div>
              </Col>
              <Col md={4}>
                  <div className="core-summary-title mtop15p"><b>COOKIES POLICY - SUMMARY</b></div>
                  <div className="mtop15p">
                      <Card padding={15} backgroundColor="#f5f5f5">
                          <div>
                              <div align="center"><h5><b>What are Cookies Policy?</b></h5></div>
                              <div className="blog-desc mtop5p">
                                Cookies Policy tells users what cookies the website uses (small data files for tracking 
                                or saving preferences), and how they're used.<br/>
                                It required under laws like EU Cookie Law. Users must be informed and consent must be taken.      
                              </div>
                          </div>
                      </Card>
                  </div>
                  <div className="blog-desc mtop15p">
                  We use cookies to ensure our website functions properly, to enhance your experience, to analyze traffic, 
                  and to serve personalized content and ads. This policy outlines the types of cookies we use and your control 
                  over them. Following are the sections:
                  </div>
                  <div className="blog-desc">
                    <PageListing data={[{ id:'what-are-cookies', label:'What Are Cookies?' },
                        { id:'why-do-we-use-cookies', label:'Why Do We Use Cookies?' },
                        { id:'types-of-cookies-we-use', label:'Types of Cookies We Use' },
                        { id:'How-long-are-cookies-stored', label:'How Long Are Cookies Stored?' },
                        { id:'cookie-consent', label:'Cookie Consent' },
                        { id:'how-to-manage-and-disable-cookies', label:'How to Manage and Disable Cookies' },
                        { id:'cookie-list', label:'Cookie List' },
                        { id:'web-beacons-pixels-or-similar-technologies-usage', label:'Web Beacons, Pixels, or Similar Technologies Usage' },
                        { id:'changes-to-this-policy', label:'Changes to This Policy' }
                    ]} />
                  </div>
              </Col>
          </Row>
      </ContainerFluid>
      <Bottom />
   </div>);
};

export default CookiesPolicy; 