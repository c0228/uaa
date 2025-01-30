import React from "react";
import { useParams } from 'react-router-dom';
import { Breadcrumb, Colors, ContainerFluid, Row, Col } from 'e-ui-react';
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import BlogArticleHeader from '@Components/blog-article-header/index.js';
import Terminologies from '@Components/terminologies-list/index.js';
import TerminologiesData from "@StaticData/web3.0/terminologies.json";
import Web123 from "./modules/web-1-2-3/index.js";
import SmartContractsLifecycle from "./modules/lifecycle-of-smartcontracts/index.js";
import Layer1N2 from "./modules/layer-1-2/index.js";
import DeFi from "./modules/de-fi/index.js";
import NFTDigitalOwnership from "./modules/nft-digital-ownership/index.js";
import Tokenomics from "./modules/tokenomics/index.js";
import MetaverseReality from "./modules/metaverse-vr-ar-xr-mr/index.js";
import PublicPrivateBlockchain from "./modules/public-private-blockchains/index.js";
import AMM from "./modules/amm/index.js";
import StableCoins from "./modules/stablecoins/index.js";
import CryptoBridge from "./modules/crypto-bridge/index.js";
import DAO from "./modules/dao/index.js";
import ABI from "./modules/abi/index.js";
import IDO from "./modules/ido/index.js";
import ERC from "./modules/erc/index.js";
import TradeFi from "./modules/trad-fi/index.js";
import Staking from "./modules/staking/index.js";
import MaaS from "./modules/m-a-a-s/index.js";
import SolidityVsVyper from "./modules/solidity-vs-vyper/index.js";

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

                {input==='understanding-web1-web2-web3' && (<div>
                    <BlogTopHeader title="Understanding Web 1.0, Web 2.0 and Web 3.0" date="October 26, 2024" />
                    <Web123 />
                </div>)}

                {input==='lifecycle-of-smart-contracts' && (<div>
                    <BlogTopHeader title="Life Cycle of Smart Contracts" date="October 26, 2024" />
                    <SmartContractsLifecycle />
                </div>)}

                {input==='layer1-vs-layer2-blockchains' && (<div>
                    <BlogTopHeader title="Layer 1 vs. Layer 2 Blockchains" date="October 26, 2024" />
                    <Layer1N2 />
                </div>)}

                {input==='defi-decentralized-finance' && (<div>
                    <BlogTopHeader title="DeFi (Decentralized Finance)" date="October 26, 2024" />
                    <DeFi />
                </div>)}

                {input==='nfts-and-digital-ownership' && (<div>
                    <BlogTopHeader title="NFTs and Digital Ownership" date="October 26, 2024" />
                    <NFTDigitalOwnership />
                </div>)}

                {input==='tokenomics' && (<div>
                    <BlogTopHeader title="Tokenomics" date="October 26, 2024" />
                    <Tokenomics />
                </div>)}

                {input==='metaverse-vr-ar-xr-and-mr' && (<div>
                    <BlogTopHeader title="Metaverse: VR, AR, XR and MR" date="October 26, 2024" />
                    <MetaverseReality />
                </div>)}

                {input==='private-vs-public-blockchains' && (<div>
                    <BlogTopHeader title="Private vs. Public Blockchains" date="October 26, 2024" />
                    <PublicPrivateBlockchain />
                </div>)}


                {input==='automated-market-maker-(amm)' && (<div>
                    <BlogTopHeader title="Automated Market Maker (AMM)" date="October 26, 2024" />
                    <AMM />
                </div>)}

                {input==='stable-coins' && (<div>
                    <BlogTopHeader title="Stablecoins and Algorithmic Stablecoin" date="October 26, 2024" />
                    <StableCoins />
                </div>)}

                {input==='crypto-bridge' && (<div>
                    <BlogTopHeader title="Crypto bridge" date="October 26, 2024" />
                    <CryptoBridge />
                </div>)}

                {input==='decentralized-autonomous-organization-(dao)' && (<div>
                    <BlogTopHeader title="Decentralized Autonomous Organization (DAO)" date="October 26, 2024" />
                    <DAO />
                </div>)}

                {input==='application-binary-interface-(abi)' && (<div>
                    <BlogTopHeader title="Application Binary Interface (ABI)" date="October 26, 2024" />
                    <ABI />
                </div>)}

                {input==='initial-dex-offering-(ido)' && (<div>
                    <BlogTopHeader title="Initial DEX Offering (IDO)" date="October 26, 2024" />
                    <IDO />
                </div>)}


                {input==='ethereum-request-for-comment-(erc)' && (<div>
                    <BlogTopHeader title="Ethereum Request for Comment (ERC)" date="October 26, 2024" />
                    <ERC />
                </div>)}

                {input==='traditional-finance-(tradfi)' && (<div>
                    <BlogTopHeader title="Traditional Finance (TradFi)" date="October 26, 2024" />
                    <TradeFi />
                </div>)}

                {input==='what-is-staking' && (<div>
                    <BlogTopHeader title="What is Staking?" date="October 26, 2024" />
                    <Staking />
                </div>)}

                {input==='metaverse-as-a-service-(maas)' && (<div>
                    <BlogTopHeader title="Metaverse-as-a-Service (MaaS)" date="October 26, 2024" />
                    <MaaS />
                </div>)}

                {input==='solidity-vs-vyper' && (<div>
                    <BlogTopHeader title="Solidity Vs Vyper : Smart Contract Languages of Ethereum Platform" date="October 26, 2024" />
                    <SolidityVsVyper />
                </div>)}

                
                
            </Col>
            <Col xl={4} xxl={4}>
                <Terminologies data={TerminologiesData} />
            </Col>
        </Row>
     </ContainerFluid>
 </div>);
};

export default Web3Terminologies;