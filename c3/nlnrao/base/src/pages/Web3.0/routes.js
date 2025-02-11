import React from 'react';
import Web3 from "./index.js";
import ZKP01 from "./content/01_zk-SNARKs_and_zk-STARKs/index.js";
import ZKP02 from "./content/03_i_ni_zkp/index.js";

import ModBcArch from "./content/04_mod-bc-arch/index.js";
import Web123 from "./terminologies/modules/web-1-2-3/index.js";
import SmartContractsLifecycle from "./terminologies/modules/lifecycle-of-smartcontracts/index.js";
import Layer1N2 from "./terminologies/modules/layer-1-2/index.js";
import DeFi from "./terminologies/modules/de-fi/index.js";
import NFTDigitalOwnership from "./terminologies/modules/nft-digital-ownership/index.js";
import Tokenomics from "./terminologies/modules/tokenomics/index.js";
import MetaverseReality from "./terminologies/modules/metaverse-vr-ar-xr-mr/index.js";
import PublicPrivateBlockchain from "./terminologies/modules/public-private-blockchains/index.js";
import AMM from "./terminologies/modules/amm/index.js";
import StableCoins from "./terminologies/modules/stablecoins/index.js";
import CryptoBridge from "./terminologies/modules/crypto-bridge/index.js";
import DAO from "./terminologies/modules/dao/index.js";
import ABI from "./terminologies/modules/abi/index.js";
import IDO from "./terminologies/modules/ido/index.js";
import ERC from "./terminologies/modules/erc/index.js";
import TradeFi from "./terminologies/modules/trad-fi/index.js";
import Staking from "./terminologies/modules/staking/index.js";
import MaaS from "./terminologies/modules/m-a-a-s/index.js";
import SolidityVsVyper from "./terminologies/modules/solidity-vs-vyper/index.js";

const BreadcrumbRoutes = {
    "zkp":[{ label:"Web 3.0", url:process.env.PROJECT_URL+"tech/web3.0/overview" },
            { label:"Zero Knowledge Proof (ZKP)", url:"#" }],
    "arch-infra":[{ label:"Web 3.0", url:process.env.PROJECT_URL+"tech/web3.0/overview" },
            { label:"Architecture & Infrastructure", url:"#" }],
    "terminologies":[{ label:"Web 3.0", url:process.env.PROJECT_URL+"tech/web3.0/overview" },
            { label:"Terminologies", url:"#" }],

};

const Routes = {
// Overview
    "tech/web3.0/overview":{
                "date":"October 26, 2024",
                "component": Web3
    }, 
// Content
    "tech/web3.0/zero-knowledge-proof(zkp)/understanding_zk-SNARKs_and_zk-STARKs":{
                "route": BreadcrumbRoutes["zkp"],
                "label":"Understanding zk-SNARKs and zk-STARKs: A Developer’s Perspective",
                "date":"October 26, 2024",
                "component": ZKP01
    },
    "tech/web3.0/zero-knowledge-proof(zkp)/interactive_non-interactive_zkps":{
                "route": BreadcrumbRoutes["zkp"],
                "label":"Interactive ZKPs vs. Non-interactive ZKPs",
                "date":"October 26, 2024",
                "component": ZKP02
    },
    "tech/web3.0/architecture-infrastructure/design-a-modular-blockchain-architecture":{
                "route": BreadcrumbRoutes["arch-infra"],
                "label":"Design a modular blockchain architecture that separates the execution, consensus, and data layers",
                "date":"October 26, 2024",
                "component": ModBcArch
    },
// Terminologies
    "tech/web3.0/terminologies/understanding-web1-web2-web3":{ 
                "route": BreadcrumbRoutes["terminologies"],
                "label":"Understanding Web 1.0, Web 2.0 and Web 3.0",
                "date":"October 26, 2024",
                "component": Web123
            }, 
    "tech/web3.0/terminologies/lifecycle-of-smart-contracts":{
                "route": BreadcrumbRoutes["terminologies"],
                "label":"Lifecycle of Smart Contracts",
                "date":"October 26, 2024",
                "component": SmartContractsLifecycle
            }, 
    "tech/web3.0/terminologies/layer1-vs-layer2-blockchains":{
                "route": BreadcrumbRoutes["terminologies"],
                "label":"Layer 1 vs. Layer 2 Blockchains",
                "date":"October 26, 2024",
                "component": Layer1N2
            },
    "tech/web3.0/terminologies/defi-decentralized-finance":{
                "route": BreadcrumbRoutes["terminologies"],
                "label":"DeFi (Decentralized Finance)",
                "date":"October 26, 2024",
                "component": DeFi
            },
    "tech/web3.0/terminologies/nfts-and-digital-ownership":{
                "route": BreadcrumbRoutes["terminologies"],
                "label":"NFTs and Digital Ownership",
                "date":"October 26, 2024",
                "component": NFTDigitalOwnership
            },
    "tech/web3.0/terminologies/tokenomics":{
                "route": BreadcrumbRoutes["terminologies"],
                "label":"Tokenomics",
                "date":"October 26, 2024",
                "component": Tokenomics
            }, 
    "tech/web3.0/terminologies/metaverse-vr-ar-xr-and-mr":{
                "route": BreadcrumbRoutes["terminologies"],
                "label":"Metaverse: VR, AR, XR and MR",
                "date":"October 26, 2024",
                "component": MetaverseReality
            },
    "tech/web3.0/terminologies/private-vs-public-blockchains":{
                "route": BreadcrumbRoutes["terminologies"],
                "label":"Private vs. Public Blockchains",
                "date":"October 26, 2024",
                "component": PublicPrivateBlockchain 
            },
    "tech/web3.0/terminologies/automated-market-maker-(amm)":{
                "route": BreadcrumbRoutes["terminologies"],
                "label":"Automated Market Maker (AMM)",
                "date":"October 26, 2024",
                "component": AMM 
            },
    "tech/web3.0/terminologies/stable-coins":{
                "route": BreadcrumbRoutes["terminologies"],
                "label":"Stablecoins and Algorithmic Stablecoin",
                "date":"October 26, 2024",
                "component": StableCoins 
            },
    "tech/web3.0/terminologies/crypto-bridge":{
                "route": BreadcrumbRoutes["terminologies"],
                "label":"Crypto bridge",
                "date":"October 26, 2024",
                "component": CryptoBridge
            },
    "tech/web3.0/terminologies/decentralized-autonomous-organization-(dao)":{
                "route": BreadcrumbRoutes["terminologies"],
                "label":"Decentralized Autonomous Organization (DAO)",
                "date":"October 26, 2024",
                "component": DAO 
            },
    "tech/web3.0/terminologies/application-binary-interface-(abi)":{
                "route": BreadcrumbRoutes["terminologies"],
                "label":"Application Binary Interface (ABI)",
                "date":"October 26, 2024",
                "component": ABI 
            },
    "tech/web3.0/terminologies/initial-dex-offering-(ido)":{
                "route": BreadcrumbRoutes["terminologies"],
                "label":"Initial DEX Offering (IDO)",
                "date":"October 26, 2024",
                "component": IDO
            },
    "tech/web3.0/terminologies/ethereum-request-for-comment-(erc)":{
                "route": BreadcrumbRoutes["terminologies"],
                "label":"Ethereum Request for Comment (ERC)",
                "date":"October 26, 2024",
                "component": ERC 
            },
    "tech/web3.0/terminologies/traditional-finance-(tradfi)":{
                "route": BreadcrumbRoutes["terminologies"],
                "label":"Traditional Finance (TradFi)",
                "date":"October 26, 2024",
                "component": TradeFi 
            },
    "tech/web3.0/terminologies/what-is-staking":{
                "route": BreadcrumbRoutes["terminologies"],
                "label":"What is Staking?",
                "date":"October 26, 2024",
                "component": Staking 
            },
    "tech/web3.0/terminologies/metaverse-as-a-service-(maas)":{
                "route": BreadcrumbRoutes["terminologies"],
                "label":"Metaverse-as-a-Service (MaaS)",
                "date":"October 26, 2024",
                "component": MaaS 
            },
    "tech/web3.0/terminologies/solidity-vs-vyper":{
                "route": BreadcrumbRoutes["terminologies"],
                "label":"Solidity Vs Vyper",
                "date":"October 26, 2024",
                "component": SolidityVsVyper 
            }
    };

export default Routes;