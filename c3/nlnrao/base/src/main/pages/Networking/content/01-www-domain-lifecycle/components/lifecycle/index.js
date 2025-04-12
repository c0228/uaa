import React from "react";
import { Card } from "e-ui-react";

const Lifecycle = () =>{
 const Title = ({ name }) =><div style={{ backgroundColor:'#ddd', padding:'8px', borderTopRightRadius:'15px', borderBottomRightRadius:'15px'  }}><b>{name}</b></div>
 return (<div className="mtop15p mbot15p fs16p lh28p">
    <div align="center" className="mtop15p"><h2 className="blog-head"><b>The Lifecycle of a Domain: From Creation to Deletion</b></h2></div>
    <div className="mtop15p">Let’s walk through the full domain lifecycle of <code><b>www.example.com</b></code> -</div>
    <div>
        <ol>
            <li className="mtop15p">
                <Title name="Creation: Registering a Domain" />
                <div className="mtop5p">The journey begins when someone decides to <b>purchase a domain</b>. Here’s how it works:</div>
                <div>
                    <ul>
                        <li className="mtop5p">You visit a <b>domain registrar</b> like GoDaddy, Namecheap, or Google Domains.</li>
                        <li className="mtop5p">Search for your desired domain: <code><b>example.com</b></code>.</li>
                        <li className="mtop5p">If it’s available, you can register it by:
                            <ul>
                                <li className="mtop5p">Paying a yearly fee</li>
                                <li className="mtop5p">Providing contact details (name, address, email)</li>
                                <li className="mtop5p">Assigning <b>name servers</b> (DNS hosts)</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="mtop15p">At this point, the domain enters the <b>"Active" phase</b> and is stored in  
                the <b>WHOIS database</b> maintained by <b>ICANN</b> (Internet Corporation for Assigned Names and Numbers).</div>
            </li>
            <li className="mtop15p">
                <Title name="DNS Configuration: Making It Work" />
                <div className="mtop5p">Once registered, you set up <b>DNS records</b> to connect your domain to a web server:</div>
                <div>
                    <ul>
                        <li className="mtop5p"><b>A Record:</b> Points domain to an IP address</li>
                        <li className="mtop5p"><b>CNAME:</b> For subdomains like <code><b>www</b></code></li>
                        <li className="mtop5p"><b>MX Record:</b> For emails like <code><b>info@example.com</b></code></li>
                        <li className="mtop5p"><b>TXT Records:</b> For verification and security (e.g., SPF, DKIM)</li>
                    </ul>
                </div>
                <div className="mtop15p">Now <code><b>www.example.com</b></code> can host a website, send emails, and serve online content.</div>
            </li>
            <li className="mtop15p">
                <Title name="Management: Keeping the Domain Alive" />
                <div className="mtop5p">Managing a domain involves:</div>
                <div>
                    <ul>
                        <li className="mtop5p"><b>Renewals:</b> Domains must be renewed periodically (usually every year)</li>
                        <li className="mtop5p"><b>DNS Updates:</b> Changing IP addresses or adding subdomains</li>
                        <li className="mtop5p"><b>Security:</b>
                            <ul>
                                <li className="mtop5p">SSL certificates for HTTPS</li>
                                <li className="mtop5p">DNSSEC to protect DNS integrity</li>
                                <li className="mtop5p">WHOIS privacy to hide personal data</li>
                            </ul>
                        </li>
                        <li className="mtop5p"><b>Transfer:</b> Domains can be moved to another registrar with an EPP code and owner consent</li>
                    </ul>
                </div>
            </li>
            <li className="mtop15p">
                <Title name="Expiration: What If You Forget to Renew?" />
                <div className="mtop5p">If the domain owner doesn't renew:</div>
                <div className="padLeft5p">
                    <div className="mtop5p"><b>Grace Period (0–45 days)</b></div>
                    <div>
                        <ul>
                            <li className="mtop5p">You can still renew the domain without extra charges.</li>
                            <li className="mtop5p">The site might stop working.</li>
                        </ul>
                    </div>
                    <div className="mtop5p"><b>Redemption Period (30 days)</b></div>
                    <div>
                        <ul>
                            <li className="mtop5p">You can still recover the domain but with a higher fee.</li>
                        </ul>
                    </div>
                    <div className="mtop5p"><b>Pending Delete (5 days)</b></div>
                    <div>
                        <ul>
                            <li className="mtop5p">Irrecoverable. The domain is queued for deletion.</li>
                        </ul>
                    </div>
                    <div className="mtop5p"><b>Deleted</b></div>
                    <div>
                        <ul>
                            <li className="mtop5p">The domain returns to the pool and becomes available for public registration.</li>
                        </ul>
                    </div>
                </div>
            </li>
        </ol>
    </div>
    <div style={{ padding:'15px', border:'1px dashed #ccc' }}>
        <div align="center"><h4><b>Digital Death: What Happens After Removal?</b></h4></div>
        <div>When <code><b>www.example.com</b></code> is not renewed or intentionally deleted:
            <ul>
                <li className="mtop5p">Its DNS records are removed.</li>
                <li className="mtop5p">Web and email services tied to it stop functioning.</li>
                <li className="mtop5p">It becomes available again after deletion.</li>
                <li className="mtop5p">Hackers and squatters often try to snatch expired domains with high traffic 
                    history—making expired domains valuable assets.</li>
            </ul>
        </div>
    </div>
    <div className="mtop15p">
    <Card padding={15}>
        <div align="center" className="mtop10p"><h4><b>Who Controls All This?</b></h4></div>
        <div className="mtop15p">The domain ecosystem is governed by multiple entities:</div>
        <div>
            <ul>
                <li className="mtop5p"><b>ICANN:</b> Global authority that manages DNS root and domain policies</li>
                <li className="mtop5p"><b>Registries:</b> Manage specific TLDs (e.g., Verisign for <code><b>.com</b></code>, 
                    Public Interest Registry for <code><b>.org</b></code>)</li>
                <li className="mtop5p"><b>Registrars:</b> Sell domains to users</li>
                <li className="mtop5p"><b>Resellers:</b> Third-party vendors operating under registrars</li>
            </ul>
        </div>
    </Card>
    </div>
    <div align="center" className="mtop15p"><h4><b>Timeline Summary: Lifecycle Stages</b></h4></div>
    <div className="mtop15p">
        <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        <td><b>Stage</b></td>
                        <td><b>Duration (Approx.)</b></td>
                        <td><b>Description</b></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><b>Active</b></td>
                        <td>1 - 10 years (renewable)</td>
                        <td>Domain is live and working</td>
                    </tr>
                    <tr>
                        <td><b>Expired</b></td>
                        <td>0 - 45 days</td>
                        <td>Owner can renew it normally</td>
                    </tr>
                    <tr>
                        <td><b>Redemption</b></td>
                        <td>~ 30 days</td>
                        <td>Can still recover, with additional fees</td>
                    </tr>
                    <tr>
                        <td><b>Pending Deletion</b></td>
                        <td>5 days</td>
                        <td>Cannot be recovered, set for removal</td>
                    </tr>
                    <tr>
                        <td><b>Deleted</b></td>
                        <td>Immediate</td>
                        <td>Available for anyone to register</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
 </div>);
};

export default Lifecycle;