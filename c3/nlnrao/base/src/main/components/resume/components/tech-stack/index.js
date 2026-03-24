import React from "react";
import { ResumeSubHeader } from '@MainComponents/resume/components/resume-header/index.js';

const data = [{
 "title":"Web Application Development",
 "details":[{
    "header":"Frontend (Client-Side Development)",
    "data":[{
        "kpis":{
        "Basic Programming Languages": "HTML, CSS, Javascript(ES5/ES6+), ECMAScript, NodeJS, Typescript",
        "UI Frameworks": "JQuery, Bootstrap, Material UI, Ant Design Frameworks",
        "Web Development Frameworks": "Angular, React",
        "Javascript Compilers/Transpilers": "Babel, TypeScript Compiler (tsc)",
        "Node Package Managers": "npm, yarn, pnpm",
        "CSS Managers":"PurgeCSS (removes unused CSS), PostCSS, SCSS",
        "Windows Package Managers": "chocolatey",
        "Project Build Tools": "Webpack Bundler (used in React Project), Angular CLI, Metro Bundler (used in React Native)",
        "Monorepo Build Systems": "Nx / Turborepo",
        "Unit Testing and Code Coverage": "Jest Framework, Mocha Framework, Chai Framework, Sinon Framework and Istanbul Code coverage Tool.",
        "Integrated Development Environments (IDE)": "Visual Studio Code"
    }
    },
    {
        "title":"ReactJS Framework",
        "kpis":{
            "State Management":"Context API, Flux, Redux, Redux Toolkit, Recoil and Zustand",
            "Routing & Navigation":"React Router, Dynamic Routing and Nested Routes",
            "Forms & Validations":"Controlled/UnControlled Components, Formik, Yup Validation",
            "Data Fetching": "TanStack Query (React Query), SWR",
            "API Integration":"RESTFul API, GraphQL (using Axios, Fetch)",
            "UI Styling":"CSS, SASS, SCSS, Styled-Components and Material UI",
            "Build & Deployment":"Webpack, CI/CD Pipelines, Docker for React Apps",
            "Web Performance Optimization":"Memoization, Lazy loading, RPC failover, Caching, React Query cache, Code splitting and tree-shaking",
            "Testing":"Unit Testing with Jest, React Testing Library, Cypress for E2E Testing",
            "Ecosystem Tools":"Storybook, ESLint, Prettier, Husky for pre-commit Hooks",
            "Extended Frameworks":"Create React App (CRA), Next.Js Framework, Remix Framework",
            "SEO Optimization":"Server-side Rendering(SSR) with Next.Js, Static-Site Generation (SSG), Dynamic Meta-tags Management (with React Helmet), Schema Markup (to enhance Search Engine Visibility), Core Web Vitals Optimization (CLS, LCP, FID)."
        }
    },
    {
        "title":"Angular Framework",
        "kpis":{
            "State Management": "NgRx, Services with RxJS, Akita",
            "Routing & Navigation": "Angular Router, Lazy Loading, Nested Routes, Route Guards",
            "Forms & Validations": "Template-driven Forms, Reactive Forms, Angular Validators, Custom Validators",
            "API Integration": "HTTPClient Module (RESTful API, GraphQL using Apollo Client)",
            "UI Styling": "CSS, SASS, SCSS, Angular Material, PrimeNG, ng-zorro",
            "Build & Deployment": "Angular CLI, Webpack, CI/CD Pipelines, Docker for Angular Apps",
            "Web Performance Optimization": "Lazy-loading, AOT (Ahead-of-Time) Compilation, Tree-shaking, Caching, Code Splitting",
            "Testing": "Unit Testing with Jasmine, Karma, Angular Testing Library, Cypress for E2E Testing",
            "Ecosystem Tools": "ESLint, Prettier, Husky for Pre-commit Hooks, TSLint (deprecated, replaced by ESLint)",
            "Extended Frameworks": "Angular Universal (SSR), Ionic Framework, Nx Workspace",
            "SEO Optimization": "Angular Universal (SSR), Static-Site Generation (SSG) with Angular, Dynamic Meta-tags Management (using Angular Meta), Schema Markup, Core Web Vitals Optimization (CLS, LCP, FID)"
        }
    }
    ]
 },
 {
    "header":"Backend (Server-side Development)",
    "data":[{
        "title":"Java Platform",
        "kpis":{
            "Basic Programming Languages": "Java (Standard Edition & Advanced Edition)",
            "Java Web/API Frameworks": "Spring Framework and Hibernate (XML-based and Annotation-based).",
            "Spring Framework Modules": "Spring Core, Spring Boot, Spring JPA, Spring AOP, Spring Security and Spring Cloud",
            "Model Design Architecture": "Monolithic Architecture, Microservices Architecture, Event Design Architecture, Serverless Architecture",
            "Coding Design Patterns": "OOP's SOLID Principle",
            "Distributed System Architectures":"Peer-to-Peer (P2P) Pattern, API Gateway Pattern, Pub-Sub (Publish-Subscribe) Pattern, Request-Response Pattern, Event Sourcing Pattern, ETL (Extract, Transform, Load) Pattern, Batching Pattern, Streaming Processing Pattern, Orchestration Pattern",
            "Java Dependencies": "lombok (Beans/Pojos Manager), javaFaker (Generating Test Data)",
            "Web Servers": "GlassFish Web Server and Apache Tomcat",
            "Build Tools": "Apache Ant, Apache Maven and Gradle Build Tool",
            "Unit Testing and Code Coverage": "JUnit Framework, Mockito Framework, FindBugs and Sonarcube Code coverage Tool",
            "Integrated Development Environments (IDE)": "Eclipse, Spring Tool Suite, IntelliJ",
            "Performance Tuning & Profiling":"JMeter"
        }
    },
    {
        "title":"Node JS Platform",
        "kpis":{
            "Basic Programming Languages": "Javascript, ECMAScript, Typescript and Node JS",
            "API Designing Frameworks": "Express JS",
            "Design Architecture": "Microservices Architecture, Event Design Architecture, Serverless Architecture",
            "Javascript Compilers": "Babel",
            "Build Tools": "Webpack",
            "Unit Testing and Code Coverage": "Jest Framework, Mocha Framework, Chai Framework, Sinon Framework and Istanbul Code coverage Tool.",
            "Integrated Development Environments (IDE)": "Visual Studio Code"
        }
    },
    {
        "title":"Python Platform",
        "kpis":{
            "Basic Programming Languages": "Python",
            "Math-related Libraries": "NumPy (for Arthmetic/Arrays, Basic Linear Algebra, Basic Statistics & Probability), SciPy (for Advanced Linear Algebra, Calculus (Integration & Differentiation), Advanced Statistics & Probability) and Fourier / Signal Processing, SymPy (For Symbolic/Expression Mathematics on Linear Algebra, Calculus, Geometry, Statistics & Probability, Permutations & Combinations)",
            "Data-management Libraries":"Pandas (data handling from different formats - CSV, Excel, SQL, JSON, etc)",
            "Web/API Designing Frameworks": "DJango and Flask",
            "Design Architecture": "Microservices Architecture, Event Design Architecture, Serverless Architecture",
            "Integrated Development Environments (IDE)": "Visual Studio Code"
        }
    }]
 },
 {
    "header":"Web3 & Blockchain Platform",
    "data":[{
        "title":"Core Fundamentals",
        "kpis":{ 
            "Multi-Chain Wallet": "Web3-Onboard, Thirdweb SDK, WalletConnect v2",
            "Decentralized Storage": "IPFS, Pinata, Web3.Storage, Arweave",
            "Cross-Chain Bridges": "Wormhole, LayerZero, Chainlink CCIP",
            "Security Auditing": "Slither, MythX, Securify",
            "Web3 Design Patterns": (<span>Automated Market Maker (AMM), Liquidity Pool Pattern, Collateralized Debt Position (CDP), Lending Pool Pattern, Oracle Pattern, 
                Staking Pattern, Liquid Staking Pattern, Governance DAO Pattern, Cross-chain Bridge Pattern, NFT Marketplace Pattern, Decentralied Storage Platform, 
                Yield Farming Pattern
            </span>),
            "Gas Management": "Gas estimation, EIP-1559, Multicall",
            "DeFi Integration": "Uniswap SDK, 1inch API, PancakeSwap SDK",
            "NFT Integration": "OpenSea SDK, Metaplex, Alchemy NFT API",
            "Build & Deployment": "Hardhat deploy, GitHub Actions, Docker",
            "Monitoring": "Tenderly, Sentry, Blockscout",
            "Testing": "Jest, Cypress, Synpress (Cypress for Web3)",
        }
    },
    {
        "title":"Ethereum Ecosystem",
        "kpis":{ 
            "Core Libraries": "Web3.js (older), Ethers.js (newer), Viem.ts (alternative to Web3.js & Ethers.js)",
            "Consensus Mechanism": "",
            "Smart Contract Development": "Hardhat, Truffle, Foundry, Remix IDE",
            "Contract Standards": "OpenZeppelin, ERC-20, ERC-721, ERC-1155",
            "Wallet Integration": "MetaMask, WalletConnect, RainbowKit, Web3Modal",
            "Contract Hooks": "wagmi, viem, useDApp",
            "Testing": "Hardhat Tests, Mocha, Chai, Slither, MythX",
            "Indexing": "The Graph (Subgraphs), Moralis",
            "RPC Providers": "Infura, Alchemy, QuickNode",
            "Explorers": "Etherscan, Blockscout",
            "Authentication": "SIWE (Sign-In with Ethereum), ENS",
            "Layer-2 (L2) Solutions":"",
            "Optimistic Rollup": "Arbitrum, Optimism (OP Mainnet), Base",
            "ZK-Rollup": "zkSync Era, Starknet, Linea",
            "Sidechain (with L2 options)": "Polygon"
        }
    },
    {
        "title":"Solana Ecosystem",
        "kpis":{ 
            "Core Libraries": "@solana/web3.js (RPC Communication)",
            "Consensus Mechanism": "",
            "Smart Contract Development": "Anchor Framework, Rust, Solana CLI, Seahorse (Python-based)",
            "Contract Standards": "Metaplex (NFTs), SPL Tokens",
            "Wallet Integration": "Phantom, Solflare, Solana Wallet Adapter",
            "Wallet Connector": "@solana/wallet-adapter-react",
            "Testing": "Solana Test Validator, Anchor Tests",
            "Indexing": "Helius, QuickNode Solana, Metaplex Digital Asset Standard (DAS)",
            "RPC Providers": "Helius, QuickNode, Triton",
            "Explorers": "Solana Explorer, Solscan",
            "Authentication": "Solana Name Service, Wallet Signatures",
        }
    },
    {
        "title":"Binance Ecosystem",
        "kpis":{ 
            "Core Libraries": "Ethers.js (RPC Communication), @binance-chain/bsc-use-wallet (Authentication)",
            "Consensus Mechanism": "",
            "Smart Contract Development": "Hardhat, Truffle, Remix IDE",
            "Contract Standards": "OpenZeppelin, BEP-20, BEP-721, BEP-1155",
            "Wallet Integration": "MetaMask, Trust Wallet, Binance Chain Wallet",
            "RPC Providers": "Binance RPC, QuickNode BSC, Ankr",
            "Explorers": "BscScan",
            "Testing": "Hardhat Tests (similar to Ethereum)",
            "Bridges": "Binance Bridge, AnySwap",
            "Layer-2 (L2) Solutions":"",
            "Optimistic Rollup": "opBNB",
        }
    },
    {
        "title": "Polkadot and Kusama Ecosystem",
        "kpis":{
            "Basic Fundamentals":"",
            "Core Framework": (<span><b>Substrate</b> - Rust-based modular blockchain SDK with pre-built pallets for balances, assets, governance, and staking</span>),
            "Pallets": "Balances pallet, Assets pallet, Governance pallet, Staking pallet, Contracts pallet (ink!)",
            "Cross-Chain Protocol": (<span><b>XCM (Cross-Consensus Messaging)</b> - Enables asset transfers, remote calls, and cross-chain communication</span>),
            "XCM Tools": "ParaSpell (XCM SDK), Moonbeam XCM SDK, Chopsticks (testing), Moonsong Labs XCM Tools",
            "Smart Contract Languages": "Rust (ink!), Solidity (via EVM parachains)",
            "WASM Support": "Native WASM execution via Substrate contracts pallet",
            "API/SDK": "Polkadot.js API, Polkakit, Subxt (Rust), Python Polkadot API, .NET API",
            "CLI Tools": "Subkey (key management), srtool (runtime verification), Polkadot Launch",
            "GraphQL Indexing": "SubQuery, Subsquid",
            "Telemetry & Monitoring": "Polkadot Telemetry, Panic (validator monitoring), Polkabot",
            "Testing Framework": "Zombienet (multi-node testing), Chopsticks (fork testing)",
            "Governance": "On-chain governance with OpenGov (Polkadot) and faster Gov (Kusama)",
            "Wallets (Multi-chain)": "Talisman, SubWallet, Nova Wallet (support both Polkadot & Kusama)",

            "Polkadot Ecosystem":"",
            "Layer 0 (Relay Chain)": "Polkadot Relay Chain (main network)",
            "Layer 1 (Parachains)": "Acala (DeFi), Moonbeam (EVM-compatible), Astar (dApp hub), Parallel Finance (lending), Centrifuge (RWA), HydraDX (liquidity)",
            "Consensus Mechanism": "Nominated Proof-of-Stake (NPoS) consensus",
            "Smart Contract Platforms": (<span><b>ink!</b> (WASM smart contracts), <b>Moonbeam</b> (EVM + Solidity), <b>Astar</b> (EVM + WASM)</span>),
            "Development Framework": (<span><b>Substrate</b> - Modular blockchain development framework in Rust</span>),
            "Cross-Chain Communication": (<span><b>XCM</b> (Cross-Consensus Messaging) - Standardized protocol for chain-to-chain communication</span>),
            "Scaling Mechanism": (<span><b>Elastic Scaling</b> - Parachains can use multiple cores dynamically; 
                achieves <b>500ms block times</b> and <b>20 MB/s data availability</b> with 12 cores</span>),
            "Core Management": (<span><b>Agile Coretime</b> - On-demand allocation of computational cores</span>),
            "Wallet Integration": "Polkadot.js Extension, Talisman, SubWallet, Nova Wallet",
            "Block Explorers": "Subscan, Polkadot.js Apps, Statescan",
            "RPC Providers": "Parity RPC, OnFinality, Dwellir, Pinknode",
            "Testing": "Zombienet (multi-chain testing), Chopsticks (XCM testing)",
            "Indexing & Analytics": "SubQuery (GraphQL indexing), Dune Analytics, DotLake",
            "API Libraries": (<span><b>Polkadot.js API, Polkakit</b> (TypeScript SDK), Subxt (Rust), GSRPC (Go) </span>),
            "Storage": "IPFS integration via parachains",
            "Deployment": "parachain slot auctions (legacy), Agile Coretime (new model)",

            "Kusama Ecosystem": "",
            "Role": (<span><b>Canary Network</b> - Experimental, fast-moving cousin of Polkadot; real economic value, NOT a testnet</span>),
            "Layer 0": "Kusama Relay Chain - Faster governance (7-day voting vs Polkadot's 28 days)",
            "Layer 1 (Parachains)": "Karura (DeFi), Moonriver (EVM), Shiden (dApp hub), Bifrost (liquid staking), KILT (identity)",
            "Smart Contracts": "ink!, EVM via Moonriver, WASM contracts",
            "Development": "Substrate (same as Polkadot)",
            "Scaling": (<span><b>Elastic Scaling FIRST</b> - All new features deploy on Kusama first; Elastic Scaling went live on Kusama 
                    in August 2025, before Polkadot</span>),
            "Core Management": "Agile Coretime (fully operational)",
            "XCM": "Full XCM support for cross-chain messaging",
            "Explorers": "Subscan (Kusama), Statescan, Polkadot.js Apps",
            "Wallets": "Polkadot.js, Talisman, SubWallet, Nova Wallet",
            "Testing Tools": "Chopsticks, Zombienet, Paseo (test network)"

        }
    }]
}]
},
{
    "title":"Mobile Application Development",
    "details":[{
       "data":[{
           "kpis":{
           "UI Frameworks": "Android Studio, React Native and Expo",
           "Backend Development": "Using Firebase (Backend-As-A-Service)"
       }
       }]
    }]
},{
    "title":"Desktop Application Development",
    "details":[{
       "data":[{
           "kpis":{
           "UI Design Frameworks": "Electron JS (On Node JS Platform), Java SWING and Java FX (On Java Platform)"
       }
       }]
    }]
},{
    "title":"Database Technologies",
    "details":[{
       "data":[{
           "kpis":{
            "Database System Design": "Creating Database Clusters, Database Sharding (Parallel Processing), Database Hotspots",
            "Relational Databases": "Microsoft SQL Server, MySQL Server and Oracle Database",
            "Document-Oriented Databases": "MongoDB and Cloud Firestore"
       }
       }]
    }]
},{
    "title":"Networking Communication Solutions"
},{
    "title":"Cloud Platform Solutions",
    "details":[{
       "data":[{
           "kpis":{
            "Platforms": "Amazon Web Services (AWS), Google Cloud Platform (GCP) and Firebase",
       }
       }]
    }]
},{
    "title":"Other Technologies",
    "details":[{
       "data":[{
           "kpis":{
            "Protocols": "HTTP/HTTPS, H.323 and SIP (Communication Protocols), WebSockets (Over TCP Protocols) and AMQP (Messaging Queue) Protocol.",
            "Messaging Queue": "Apache Kafka, Google's Firebase Cloud Messaging (FCM)",
            "Version Control": "Github and Bitbucket"
       }
       }]
    }]
}];

const TechStack = () =>{
 return (<div>
    {data?.map((dat,i1)=>{
      return (<div key={i1}>
            <div align="center"><ResumeSubHeader title={dat?.title} /></div>
            {dat?.["details"]?.map((da,i2)=>{
                return (<div key={i2}>
                    {da?.header && (<div align="center" className="text-white uppercase mb-3"><b>{da?.header}</b></div>)}
                    {da?.data?.map((d,i3)=>{
                        const kpiKeys = Object.keys(d?.kpis);
                        return (<div key={i3} className="card resume-card mb-3">
                            <div className="card-body resume-cardBody">
                            {d?.title && <div align="center" className="text-grey3 uppercase pb-3"><b>{d?.title}</b></div>}
                            {kpiKeys?.map((kpiKey, i4) => {
                                const kpiVal = d?.kpis?.[kpiKey];
                                const hasValue = kpiVal !== null && kpiVal !== undefined && kpiVal !== "" && React.Children.count(kpiVal) > 0;
                                return (
                                    <div key={i4} className="pb-2">
                                    <span
                                        className={
                                        hasValue
                                            ? "text-grey2"
                                            : "text-grey2 resume-techstack-underline"
                                        }
                                    >
                                        <b>{kpiKey}</b>
                                    </span>

                                    {hasValue ? (
                                        <span><b>:</b> {kpiVal}</span>
                                    ) : (
                                        <span className="text-grey2">-</span>
                                    )}
                                    </div>
                                );
                            })}
                            </div>
                            </div>);
                    })}
                    
                </div>);
            })}
        </div>);
    })}
 </div>);
};

export default TechStack;