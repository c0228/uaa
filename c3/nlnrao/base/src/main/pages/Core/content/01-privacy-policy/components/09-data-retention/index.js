import React from "react";

const DataRetention = () =>{
 return (<div className="mtop15p mbot15p">
    <div className="blog-desc mtop15p">
        <div className="mbot15p"><h4><b>VIII. Data Retention</b></h4><hr/></div>
        <div className="mtop15p">We retain your personal data only for as long as necessary to fulfill the purposes for which 
            it was collected, including to:
            <ul>
                <li className="mtop5p">Provide the services you requested</li>
                <li className="mtop5p">Comply with our legal obligations</li>
                <li className="mtop5p">Enforce our agreements</li>
                <li className="mtop5p">Resolve disputes</li>
                <li className="mtop5p">Support business operations such as analytics and fraud prevention</li>
            </ul>
        </div>
        <div className="mtop15p">
            <ol>
                <li className="mtop5p">
                    <div><b>Retention Periods</b></div>
                    <div className="mtop5p">We determine the appropriate retention period for personal data based on:</div>
                    <div>
                        <ul>
                            <li className="mtop5p">The amount, nature, and sensitivity of the data</li>
                            <li className="mtop5p">The potential risk of harm from unauthorized use or disclosure</li>
                            <li className="mtop5p">The purposes for which we process your data</li>
                            <li className="mtop5p">Whether those purposes can be achieved through other means</li>
                            <li className="mtop5p">Applicable legal requirements</li>
                        </ul>
                    </div>
                    <div className="mtop15p">Typical retention durations may include:</div>
                    <div>
                        <ul>
                            <li className="mtop5p"><b>User account data:</b> retained as long as the account is active and for a 
                                reasonable period afterward</li>
                            <li className="mtop5p"><b>Email communications:</b> retained for audit or legal purposes for a set duration</li>
                            <li className="mtop5p"><b>Analytics data:</b> generally aggregated and anonymized, but raw logs may be kept for 
                                up to 26 months</li>
                            <li className="mtop5p"><b>Billing and payment data:</b> retained for legal and tax obligations, generally up to 
                                7 years</li>
                        </ul>
                    </div>
                </li>
                <li className="mtop5p">
                    <div><b>Anonymization and Aggregation</b></div>
                    <div className="mtop5p">Where possible, we anonymize or aggregate data so it is no longer personally identifiable. We may 
                        retain this anonymized data indefinitely to help improve our services.</div>
                </li>
                <li className="mtop5p">
                    <div><b>User-Initiated Deletion</b></div>
                    <div className="mtop5p">If you request deletion of your personal information, we will honor your request subject to:</div>
                    <div>
                        <ul>
                            <li className="mtop5p">Verification of your identity</li>
                            <li className="mtop5p">Retaining only the data we are legally required or allowed to keep</li>
                            <li className="mtop5p">Removing all personally identifiable elements from remaining records</li>
                        </ul>
                    </div>
                    <div>We may also retain backups of your information as part of our disaster recovery processes for a limited period.</div>
                </li>
            </ol>
        </div>
    </div>
 </div>);
};

export default DataRetention;