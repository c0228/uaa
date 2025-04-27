import React from "react";
import { ContainerFluid, Row, Col, Card } from "e-ui-react";
import Header from '@MainTemplates/Header/index.js';
import { HeaderMenu } from '@MainConfig/HeaderMenu.js';
import Bottom from '@MainTemplates/Bottom/index.js';
import Introduction from "./components/01-introduction/index.js";
import Definitions from "./components/02-definitions/index.js";
import InfoWeCollect from "./components/03-info-we-collect/index.js";
import HowWeUseInfo from "./components/04-how-we-use-info/index.js";
import CookiesTrackingTech from "./components/05-cookies-tracking-tech/index.js";
import AnalyticsAdvertising from "./components/06-analytics-advertising/index.js";
import HowWeShare from "./components/07-how-we-share/index.js";
import DataProtectionRights from "./components/08-data-protection-rights/index.js";  
import DataRetention from "./components/09-data-retention/index.js";
import SecurityInfo from "./components/10-security-info/index.js";
import DataTransfer from "./components/11-data-transfer/index.js";
import Conclusion from "./components/12-conclusion/index.js";
import PageListing from "@MainPages/Core/components/PageListing/index.js";


const PrivacyPolicy = () =>{

 return (<div className="mbot15p">
    <Header menulinks={HeaderMenu} />
    <ContainerFluid>
        <Row>
            <Col md={12}>
                <div>
                    <hr/><h2 className="blog-head" style={{ paddingTop:'15px' }}><b>Privacy Policy</b></h2><hr/>
                </div>
            </Col>
        </Row>
        <Row>
            <Col md={8}>
                <Introduction />
                <Definitions />
                <InfoWeCollect />
                <HowWeUseInfo />
                <CookiesTrackingTech />
                <AnalyticsAdvertising />
                <HowWeShare />
                <DataProtectionRights />
                <DataRetention />
                <SecurityInfo />
                <DataTransfer />
                <Conclusion />
            </Col>
            <Col md={4}>
            <div className="core-summary-title mtop15p"><b>PRIVACY POLICY - SUMMARY</b></div>
            <div className="mtop15p">
                <Card padding={15} backgroundColor="#f5f5f5">
                    <div>
                        <div align="center"><h5><b>What is Privacy Policy?</b></h5></div>
                        <div className="blog-desc mtop5p">
                            It explains how the website collects, uses, shares, and 
                            protects user's personal data (like name, email, IP address). It's legally required in many 
                            countries (like under GDPR, CCPA) to protect user privacy.
                        </div>
                    </div>
                </Card>
            </div>
            <div className="mtop15p blog-desc">Any personal information collected on this blog (such as name, email, or 
                comments) is used only to improve your experience and will never be shared, sold, or used for unsolicited 
                communication.<br/><br/> We may use cookies for analytics and user preferences. By using this site, you consent to our privacy 
                practices. You can visit following sections -</div>
            <PageListing data={[{ id:'definitions', label:'Definitions' },
                    { id:'information-we-collect', label:'Information We Collect' },
                    { id:'how-we-use-your-information', label:'How We Use Your Information' },
                    { id:'cookies-and-tracking-technologies', label:'Cookies and Tracking Technologies' },
                    { id:'analytics-and-advertising', label:'Analytics and Advertising' },
                    { id:'how-we-share-your-information', label:'How We Share Your Information' },
                    { id:'your-data-protection-rights', label:'Your Data Protection Rights' },
                    { id:'data-retention', label:'Data Retention' },
                    { id:'security-of-your-information', label:'Security of Your Information' },
                    { id:'international-data-transfers', label:'International Data Transfers' }]} />
            </Col>
        </Row>
    </ContainerFluid>
    <Bottom />
 </div>);
};

export default PrivacyPolicy; 