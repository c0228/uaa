import React from "react";
import { useParams } from 'react-router-dom';
import { Breadcrumb, Colors, ContainerFluid, Row, Col } from 'e-ui-react';
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import BlogArticleHeader from '@Components/blog-article-header/index.js';
import SmartContractsLifecycle from "./modules/lifecycle-of-smartcontracts/index.js";

const Web3Terminologies = () =>{
 const { input } = useParams();

 const BlogTopHeader = ({ title, date }) =>{
   return (<div className="mtop15p mbot15p">
     <Breadcrumb backgroundColor={Colors.light} 
         data={[{ label:'Web 3.0', url:process.env.PROJECT_URL+'tech/web3.0/overview' },
             { label: title, url:'#' }]} />
     <BlogArticleHeader title={title} date={date} />
   </div>)
  };
 return (<div>
     <Header menulinks={HeaderMenu} activeId="Blockchain" />
     <ContainerFluid>
        <Row>
            <Col xl={8} xxl={8}>

                {input==='understanding-web1.0-web2.0-web3.0' && (<div>
                    <BlogTopHeader title="Life Cycle of Smart Contracts" date="October 26, 2024" />
                    <SmartContractsLifecycle />
                </div>)}

                {input==='lifecycle-of-smart-contracts' && (<div>
                    <BlogTopHeader title="Life Cycle of Smart Contracts" date="October 26, 2024" />
                    <SmartContractsLifecycle />
                </div>)}

                {input==='layer1-vs-layer2-blockchains' && (<div>
                    <BlogTopHeader title="Layer 1 vs. Layer 2 Blockchains" date="October 26, 2024" />
                    <SmartContractsLifecycle />
                </div>)}

                {input==='defi-decentralized-finance' && (<div>
                    <BlogTopHeader title="DeFi (Decentralized Finance)" date="October 26, 2024" />
                    <SmartContractsLifecycle />
                </div>)}

                {input==='nfts-and-digital-ownership' && (<div>
                    <BlogTopHeader title="NFTs and Digital Ownership" date="October 26, 2024" />
                    <SmartContractsLifecycle />
                </div>)}

                {input==='tokenomics' && (<div>
                    <BlogTopHeader title="Tokenomics" date="October 26, 2024" />
                    <SmartContractsLifecycle />
                </div>)}

                {input==='metaverse-vr-ar-xr-and-mr' && (<div>
                    <BlogTopHeader title="Metaverse: VR, AR, XR and MR" date="October 26, 2024" />
                    <SmartContractsLifecycle />
                </div>)}

                {input==='private-vs-public-blockchains' && (<div>
                    <BlogTopHeader title="Private vs. Public Blockchains" date="October 26, 2024" />
                    <SmartContractsLifecycle />
                </div>)}


                {input==='automated-market-maker-(amm)' && (<div>
                    <BlogTopHeader title="Automated Market Maker (AMM)" date="October 26, 2024" />
                    <SmartContractsLifecycle />
                </div>)}

                {input==='stable-coins' && (<div>
                    <BlogTopHeader title="Stablecoins" date="October 26, 2024" />
                    <SmartContractsLifecycle />
                </div>)}

                {input==='crypto-bridge' && (<div>
                    <BlogTopHeader title="Crypto bridge" date="October 26, 2024" />
                    <SmartContractsLifecycle />
                </div>)}

                {input==='decentralized-autonomous-organization-(dao)' && (<div>
                    <BlogTopHeader title="Decentralized Autonomous Organization (DAO)" date="October 26, 2024" />
                    <SmartContractsLifecycle />
                </div>)}

                {input==='application-binary-interface-(abi)' && (<div>
                    <BlogTopHeader title="Application Binary Interface (ABI)" date="October 26, 2024" />
                    <SmartContractsLifecycle />
                </div>)}

                {input==='initial-dex-offering-(ido)' && (<div>
                    <BlogTopHeader title="Initial DEX Offering (IDO)" date="October 26, 2024" />
                    <SmartContractsLifecycle />
                </div>)}


                {input==='ethereum-request-for-comment-(erc)' && (<div>
                    <BlogTopHeader title="Ethereum Request for Comment (ERC)" date="October 26, 2024" />
                    <SmartContractsLifecycle />
                </div>)}

                {input==='traditional-finance-(tradfi)' && (<div>
                    <BlogTopHeader title="Traditional Finance (TradFi)" date="October 26, 2024" />
                    <SmartContractsLifecycle />
                </div>)}

                {input==='algorithmic-stablecoin' && (<div>
                    <BlogTopHeader title="Algorithmic Stablecoin" date="October 26, 2024" />
                    <SmartContractsLifecycle />
                </div>)}

                {input==='what-is-staking' && (<div>
                    <BlogTopHeader title="What is Staking?" date="October 26, 2024" />
                    <SmartContractsLifecycle />
                </div>)}

                {input==='metaverse-as-a-service-(maas)' && (<div>
                    <BlogTopHeader title="Metaverse-as-a-Service (MaaS)" date="October 26, 2024" />
                    <SmartContractsLifecycle />
                </div>)}
                
            </Col>
            <Col xl={4} xxl={4}></Col>
        </Row>
     </ContainerFluid>
 </div>);
};

export default Web3Terminologies;