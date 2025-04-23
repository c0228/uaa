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
            <Col md={4}></Col>
        </Row>
    </ContainerFluid>
    
 </div>);
};

export default PrivacyPolicy; 