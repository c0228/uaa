import React from 'react';
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

const Routes = {
    "baseUrl":"tech/web3.0/terminologies/",
    "list":[{ 
                "url":"understanding-web1-web2-web3",
                "label":"Understanding Web 1.0, Web 2.0 and Web 3.0",
                "date":"October 26, 2024",
                "component": <Web123 />
            }, 
            {   
                "url":"lifecycle-of-smart-contracts",
                "label":"Lifecycle of Smart Contracts",
                "date":"October 26, 2024",
                "component": <SmartContractsLifecycle />
            }, 
            {   
                "url":"layer1-vs-layer2-blockchains",
                "label":"Layer 1 vs. Layer 2 Blockchains",
                "date":"October 26, 2024",
                "component": <Layer1N2 />
            },
            {
                "url":"defi-decentralized-finance",
                "label":"DeFi (Decentralized Finance)",
                "date":"October 26, 2024",
                "component": <DeFi />
            },
            {
                "url":"nfts-and-digital-ownership",
                "label":"NFTs and Digital Ownership",
                "date":"October 26, 2024",
                "component": <NFTDigitalOwnership />
            },
            {
                "url":"tokenomics",
                "label":"Tokenomics",
                "date":"October 26, 2024",
                "component": <Tokenomics />
            }, 
            {
                "url":"metaverse-vr-ar-xr-and-mr",
                "label":"Metaverse: VR, AR, XR and MR",
                "date":"October 26, 2024",
                "component": <MetaverseReality />
            },
            {
                "url":"private-vs-public-blockchains",
                "label":"Private vs. Public Blockchains",
                "date":"October 26, 2024",
                "component": <PublicPrivateBlockchain />
            },
            {
                "url":"automated-market-maker-(amm)",
                "label":"Automated Market Maker (AMM)",
                "date":"October 26, 2024",
                "component": <AMM />
            },
            {
                "url":"stable-coins",
                "label":"Stablecoins and Algorithmic Stablecoin",
                "date":"October 26, 2024",
                "component": <StableCoins />
            },
            {
                "url":"crypto-bridge",
                "label":"Crypto bridge",
                "date":"October 26, 2024",
                "component": <CryptoBridge />
            },
            {
                "url":"decentralized-autonomous-organization-(dao)",
                "label":"Decentralized Autonomous Organization (DAO)",
                "date":"October 26, 2024",
                "component": <DAO />
            },
            {
                "url":"application-binary-interface-(abi)",
                "label":"Application Binary Interface (ABI)",
                "date":"October 26, 2024",
                "component": <ABI />
            },
            {
                "url":"initial-dex-offering-(ido)",
                "label":"Initial DEX Offering (IDO)",
                "date":"October 26, 2024",
                "component": <IDO />
            },
            {
                "url":"ethereum-request-for-comment-(erc)",
                "label":"Ethereum Request for Comment (ERC)",
                "date":"October 26, 2024",
                "component": <ERC />
            },
            {
                "url":"traditional-finance-(tradfi)",
                "label":"Traditional Finance (TradFi)",
                "date":"October 26, 2024",
                "component": <TradeFi />
            },
            {
                "url":"what-is-staking",
                "label":"What is Staking?",
                "date":"October 26, 2024",
                "component": <Staking />
            },
            {
                "url":"metaverse-as-a-service-(maas)",
                "label":"Metaverse-as-a-Service (MaaS)",
                "date":"October 26, 2024",
                "component": <MaaS />
            },
            {
                "url":"solidity-vs-vyper",
                "label":"Solidity Vs Vyper",
                "date":"October 26, 2024",
                "component": <SolidityVsVyper />
            }]
};

export default Routes;