import React from "react";

const SecurityInfo = () =>{
 return (<div className="mtop15p mbot15p">
    <div className="blog-desc mtop15p">
        <div className="mbot15p"><h4><b>IX. Security of Your Information</b></h4><hr/></div>
        <div className="mtop15p">We take the security of your personal information seriously and are committed to protecting it 
            from unauthorized access, disclosure, alteration, or destruction. While no method of transmission over the Internet 
            or method of electronic storage is 100% secure, we implement industry-standard security measures to safeguard your 
            data.</div>
        <div>
            <ol>
                <li className="mtop5p">
                    <div><b>Technical and Organizational Safeguards</b></div>
                    <div className="mtop5p">We use a combination of administrative, technical, and physical safeguards to protect 
                        your information, including:
                        <ul>
                            <li className="mtop5p"><b>Encryption:</b> All sensitive data, including passwords and payment information, 
                                is encrypted during transmission using SSL/TLS protocols.</li>
                            <li className="mtop5p"><b>Access Controls:</b> Access to personal data is limited to authorized personnel 
                                who need it for operational or support purposes.</li>
                            <li className="mtop5p"><b>Firewalls and Intrusion Detection Systems:</b> We monitor network activity and 
                                deploy security systems to prevent unauthorized access.</li>
                            <li className="mtop5p"><b>Secure Software Development Practices:</b> Our code is regularly reviewed and 
                                tested to prevent security vulnerabilities such as SQL injection, cross-site scripting (XSS), and 
                                cross-site request forgery (CSRF).</li>
                            <li className="mtop5p"><b>Regular Backups:</b> We perform secure and encrypted backups to prevent data loss 
                                in the event of a system failure.</li>
                        </ul>
                    </div>
                </li>
                <li className="mtop5p">
                    <div><b>Data Breach Response Plan</b></div>
                    <div className="mtop5p">In the unlikely event of a data breach:
                        <ul>
                            <li className="mtop5p">We will investigate the breach and take appropriate steps to mitigate its impact.</li>
                            <li className="mtop5p">Affected users will be notified promptly, and if legally required, we will notify 
                                relevant regulatory authorities.</li>
                            <li className="mtop5p">We will provide details of what information was compromised, steps you can take to protect 
                                yourself, and what we are doing to resolve the issue.</li>
                        </ul>
                    </div>
                </li>
                <li className="mtop5p">
                    <div><b>User Responsibility</b></div>
                    <div className="mtop5p">While we do our best to protect your data, your role is also important. Please:
                        <ul>
                            <li className="mtop5p">Use strong and unique passwords</li>
                            <li className="mtop5p">Enable two-factor authentication where available</li>
                            <li className="mtop5p">Log out of shared devices</li>
                            <li className="mtop5p">Be cautious of phishing attempts and suspicious links</li>
                        </ul>
                    </div>
                </li>
                <li className="mtop5p">
                    <div><b>Third-Party Services and Integrations</b></div>
                    <div className="mtop5p">Although we strive to work only with partners who uphold strong security practices, we are not responsible for the 
                        security of third-party services that you access through our website. Please review the privacy and security practices of any third-party 
                        platform before engaging with it.</div>
                </li>
                <li className="mtop5p">
                    <div><b>Children’s Data Security</b></div>
                    <div className="mtop5p">If we knowingly collect personal data from children under the age of 13 (or a higher age depending on your jurisdiction), 
                        we implement stricter security protocols and only process such data with verifiable parental consent.</div>
                </li>
            </ol>
        </div>
    </div>
 </div>);
};

export default SecurityInfo;