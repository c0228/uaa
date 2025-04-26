import React from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import Header from '@MainTemplates/Header/index.js';
import { HeaderMenu } from '@MainConfig/HeaderMenu.js';
import BlogArticleHeader from '@MainComponents/blog-article-header/index.js';
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
import Bottom from '@MainTemplates/Bottom/index.js';

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
            <div className="mtop15p" style={{ padding:'8px', backgroundColor:'#ddd', 
                boxShadow:'2px 2px 2px 2px #ccc' }}><b>Privacy policy</b></div>
            <ol type="I" style={{ marginTop:'15px' }}>
                <li className="mtop5p"><b>Definitions</b></li>
                <li className="mtop5p"><b>Information We Collect</b></li>
                <li className="mtop5p"><b>How We Use Your Information</b></li>
                <li className="mtop5p"><b>Cookies and Tracking Technologies</b></li>
                <li className="mtop5p"><b>Analytics and Advertising</b></li>
                <li className="mtop5p"><b>How We Share Your Information</b></li>
                <li className="mtop5p"><b>Your Data Protection Rights</b></li>
                <li className="mtop5p"><b>Data Retention</b></li>
                <li className="mtop5p"><b>Security of Your Information</b></li>
                <li className="mtop5p"><b>International Data Transfers</b></li>
                <li className="mtop5p"><b>Conclusion</b></li>
            </ol>
            </Col>
        </Row>
    </ContainerFluid>
    <Bottom />
 </div>);
};

export default PrivacyPolicy; 