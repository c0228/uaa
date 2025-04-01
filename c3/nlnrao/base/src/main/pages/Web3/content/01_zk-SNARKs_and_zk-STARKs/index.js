import React from "react";
import { ContainerFluid, Row, Col, Breadcrumb, Colors, Button, Select, Card, Switch } from "e-ui-react";
import Header from '@MainTemplates/Header/index.js';
import { HeaderMenu } from '@MainConfig/HeaderMenu.js';
import BlogArticleHeader from '@MainComponents/blog-article-header/index.js';
import Introduction from './components/introduction/index.js';
import Timeline from './components/timeline/index.js';
import ZkSnarkIntroduction from './components/zk-snark-introduction/index.js';
import ZkSnarkImpLang from './components/zk-snark-impl-lang/index.js';
import ZkSnarkImpProj from './components/zk-snark-impl-proj/index.js';
import TopicSummary from '@MainComponents/topic-summary/index.js';
import ZkStarkIntroduction from './components/zk-stark-introduction/index.js';
import ZkSnarksAndZkStarksDiffer from './components/zk-snarks-and-zk-starks-differ/index.js';
import ZkStarkImplLang from './components/zk-stark-impl-lang/index.js';
import ZkStarkImplProj from './components/zk-stark-impl-proj/index.js';
import ZkStarkImplDrawback from './components/zk-stark-impl-drawback/index.js';
import AdditionalInfo from './components/additional-info/index.js';

const ZKP01 = ({ meta })=>{
 return (<>
 <Header menulinks={HeaderMenu} activeId="Blockchain" />
 <ContainerFluid>
    <Row>
        <Col xs={12} xl={8} xxl={8}>
          <div className="mbot60p">
            <BlogArticleHeader metaData={meta} />
            <Introduction />
            <Timeline />
            <ZkSnarkIntroduction />
            <ZkSnarkImpLang />
            <ZkSnarkImpProj />
            <ZkStarkIntroduction />
            <ZkSnarksAndZkStarksDiffer />
            <ZkStarkImplLang />
            <ZkStarkImplProj />
            <ZkStarkImplDrawback />
          </div>
        </Col>
        <Col xs={12} xl={4} xxl={4}>
            <TopicSummary data={[{
                    title:'Zero-Knowledge Proofs in Blockchain',
                    topics:[{ scrollTo:'introduction', label:'An Introduction' },
                      { scrollTo:'timeline', label:'Timeline of ZKP in Blockchain' }]
                },{
                    title:'Unlocking zk-SNARKs: The Power of Zero-Knowledge Proofs Simplified',
                    topics:[{ scrollTo:'zkSnarkIntroduction', label:'Key Terms' },
                      { scrollTo:'zkSnarkImplLang', label:'Implementations' },
                      { scrollTo:'zkSnarkImplProj', label:'Implementing zk-SNARKs in a Project' },
                      { scrollTo:'zkSnarkImplDrawbacks', label:'Limitations / Drawbacks of zk-SNARKS' }]
                },{
                  title:'zk-STARKs (Zero-Knowledge Scalable Transparent Arguments of Knowledge): An Introduction',
                  topics:[{ scrollTo:'zkStarkIntroduction', label:'Introduction' },
                      { scrollTo:'zkSnarksAndZkStarksDiffer', label:'How zk-STARKs Differ from zk-SNARKs and Other Cryptographic Protocols?' },
                      { scrollTo:'zkStarkImplLang', label:'Implementations' },
                      { scrollTo:'zkStarkImplProj', label:'Implementing zk-STARKs in a Project' },
                      { scrollTo:'zkStarkImplDrawback', label:'Limitations / Drawbacks of zk-STARKS' }
                    ]
                }]} />
            <AdditionalInfo />
        </Col>
    </Row>
 </ContainerFluid>
 </>);
};

export default ZKP01;