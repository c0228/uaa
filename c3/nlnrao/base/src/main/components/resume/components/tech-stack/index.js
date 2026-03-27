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
            "Basic Fundamentals":{
                "Node Infrastructure & RPC Providers": "Alchemy, Infura, Chainstack, QuickNode",
                "Core Libraries": "Web3.js (older), Ethers.js (newer), Viem.ts (alternative to Web3.js & Ethers.js)",
                "Consensus Mechanism": "Proof-of-Stake (PoS)",
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
        }
    },
    {
        "title":"Solana Ecosystem",
        "kpis":{ 
            "Node Infrastructure & RPC Providers": "Helius, Chainstack, QuickNode, bloXroute (Trader API)",
            "Core Libraries": "@solana/web3.js (RPC Communication)",
            "Consensus Mechanism": (<span><b>Proof of History (PoH)</b> for Layer#1 (Timekeeping) + <b>Proof of Stake (PoS)</b> for 
                Layer#2 (Sybil Resistance) + <b>Tower BFT</b> for Layer#3 (Consensus & Finality)</span>),
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
            "Basic Fundamentals": { 
                "Node Infrastructure & RPC Providers": "Chainstack, QuickNode, OnFinality, InfStones",
                "Core Libraries": "Ethers.js (RPC Communication), @binance-chain/bsc-use-wallet (Authentication)",
                "Consensus Mechanism": "Proof of Staked Authority (PoSA)",
                "Smart Contract Development": "Hardhat, Truffle, Remix IDE",
                "Contract Standards": "OpenZeppelin, BEP-20, BEP-721, BEP-1155",
                "Wallet Integration": "MetaMask, Trust Wallet, Binance Chain Wallet",
                "RPC Providers": "Binance RPC, QuickNode BSC, Ankr",
                "Explorers": "BscScan",
                "Testing": "Hardhat Tests (similar to Ethereum)",
                "Bridges": "Binance Bridge, AnySwap",
                "Layer-2 (L2) Solutions":"",
                "Optimistic Rollup": "opBNB"
            }
        }
    },
    {
        "title": "Polkadot and Kusama Ecosystem",
        "kpis":{
            "Basic Fundamentals":{
                "Node Infrastructure & RPC Providers": "OnFinality, Parity Public Nodes, Substrate Connect",
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
            },
            "Polkadot Ecosystem":{
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
            },
            "Kusama Ecosystem":{
                "Role": (<span><b>Canary Network</b> - Experimental, fast-moving cousin of Polkadot; real economic value, NOT a testnet</span>),
                "Layer 0": "Kusama Relay Chain - Faster governance (7-day voting vs Polkadot's 28 days)",
                "Layer 1 (Parachains)": "Karura (DeFi), Moonriver (EVM), Shiden (dApp hub), Bifrost (liquid staking), KILT (identity)",
                "Consensus Mechanism": "Nominated Proof-of-Stake (NPoS) consensus",
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

            "Relational Databases (RDBMS – SQL)":"",
            "On-Premises / Open Source": "MySQL, PostgreSQL, Oracle, Microsoft SQL Server",
            "AWS": "Amazon RDS (MySQL, PostgreSQL, MariaDB, Oracle, SQL Server), Amazon Aurora",
            "GCP": "Cloud SQL (MySQL, PostgreSQL, SQL Server), Cloud Spanner",

            "NoSQL (Key-Value Databases)": "",
            "Open Source": "Redis",
            "AWS": "DynamoDB",
            "GCP": "Firestore (Key-Value + Document)",

            "NoSQL (Document Databases)": "",
            "Open Source": "MongoDB, CouchDB",
            "AWS": "Amazon DocumentDB (MongoDB compatible)",
            "Firebase": "Firestore",

            "NoSQL (Wide Column Databases)": "",
            "Open Source": "Apache Cassandra",
            "AWS": "Amazon Keyspaces (for Apache Cassandra)",
            "GCP": "Bigtable",

            "In-Memory Databases & Caching": "",
            "Open Source": "Redis",
            "AWS": "ElastiCache (Redis)",
            "GCP": "Memorystore (Redis)"
       }
       }]
    }]
},{
    "title":"Networking Communication Solutions",
    "details":[{
       "data":[{
           "kpis":{
                "CISCO SYSTEMS PLATFORM (for Contact Center / Telecom Infrastructure)":{
                    "Networking Protocols": "TCP/IP, UDP, SIP, RTP, SRTP, HTTP/HTTPS, DNS, DHCP",
                    "VoIP Protocols": "SCCP, H.323 and SIP (VOIP & Signaling Protocols)",
                    "Cisco Voice Gateways": "ISR Voice Gateways, FXO / FXS / E1 PRI",
                    "Cisco Routing": "Cisco ISR Routers (18xx, 28xx, 29xx, 39xx series)",
                    "Switching": "Cisco Catalyst L2/L3 Switches (VLAN, Trunking, STP)",
                    "WAN Technologies": "MPLS, Leased Lines, ISDN PRI",
                    "Routing Protocols": "OSPF, EIGRP",
                    "Security Basics": "ACLs, NAT, PAT, Firewall",
                    "Media Handling": "RTP, DTMF, Codec Basics (G.711, G.729)",
                    "Dial Plans": "Route Patterns, Translation Rules, Calling Search Spaces",
                    "Call Flows": "Inbound / Outbound PSTN, IVR, Agent Call Routing",
                    "Call Control": (<span><b>Cisco Unified Communications Manager (CUCM)</b> – Administration, AXL/SOAP API awareness</span>),
                    "Call Messaging": (<span><b>Cisco Unity Connection (CUCUM)</b> – Voicemail integration, User provisioning</span>),
                    "Contact Center": (<span><b>ICM / UCCE (Unified Contact Center Enterprise)</b> – Scripting, IVR flows, CTI (Computer Telephony Integration)</span>),
                    "IVR Development": (<span><b>Cisco Unified Call Studio</b> (VXML Application Development), <b>CVP</b> (Customer Voice Portal), IVR Call Flows, 
                                        Speech Recognition (ASR/TTS) Integration</span>),
                    "Development Methodology": (<span><b>Eclipse-based IDE</b>, <b>Java</b> (for custom components/SDK), <b>SOAP/REST Web Services</b> integration</span>),
                    "Agent Desktops": "Cisco Finesse, Cisco Agent Desktop (CAD)",
                    "IP Phones": "Cisco 79xx / 88xx Series",
                    "Softphones": "Cisco IP Communicator",
                    "Server OS": "Windows Server 2008 / 2012, Linux (Basic)",
                    "Virtualization": "VMware ESXi",
                    "Database Awareness": "SQL Server / Informix (CUCM backend concepts)",
                    "Network Monitoring": "Ping, Traceroute, SNMP basics",
                    "Voice Debugging": "SIP Call Flow analysis (basic)",
                    "Call Logs & Traces": "CUCM RTMT",
                    "Packet Capture & Analysis": "Wireshark",
                    "CLI Tools": "Cisco IOS CLI, basic debugging commands"
                },
                "ASTERISK (PBX) PLATFORM (for Contact Center / Telecom Infrastructure)":{
                    "PBX Platform": "Asterisk (Open-Source)",
                    "Operating System": "Linux (CentOS / Ubuntu)",
                    "Core Config Files": "sip.conf, extensions.conf, iax.conf, rtp.conf",
                    "Trunk Configuration": "SIP trunks (ITSP / PSTN gateways)",
                    "Trunk Failover": "Primary / secondary SIP trunks",
                    "SIP Load Distribution": "DNS SRV / SIP proxy concepts",
                    "Dialplan Logic": "Basic call routing using extensions.conf",
                    "IVR Flows": "Menu-based IVR, time-based routing",
                    "Inbound / Outbound Calls": "DID mapping, outbound rules",
                    "Codecs": "G.711, G.729",
                    "DTMF Modes": "RFC2833, Inband, SIP INFO",
                    "RTP Handling": "Media stream setup, jitter and latency",
                    "NAT Traversal" : "SIP NAT handling (externip, localnet)",
                    "Firewall Rules": "RTP port ranges, SIP ports",
                    "Packet Analysis": "Wireshark (SIP/RTP analysis)",
                    "Shared Databases": "Centralized user & config data (MySQL)",
                }
           }
       }]
    }]
},{
    "title":"Cloud Platform Solutions",
    "details":[{
       "data":[{
           "kpis":{
            "Platforms": "Amazon Web Services (AWS), Google Cloud Platform (GCP) and Firebase",
            "Amazon Web Services (AWS)":{
                "Storage Management": "AWS S3 (Object Storage), Amazon Athena (Query on S3), AWS EBS (Block Storage), AWS EFS (File Storage), AWS Glacier (Archive Storage)",
                "ETL & Data Processing": "AWS Glue",
                "Security, Identity, & Compliance": "AWS IAM (Identity & Access Management), AWS Secrets Manager (Secrets Management), Amazon Cognito (User Authentication)",
                "Networking & Content Delivery": "Amazon Route 53 (DNS& Traffic Routing), Amazon CloudFront (Content Delivery Network(CDN)), Amazon VPC (Virtual Networking), Amazon API Gateway (API Management)",
                "Compute & Application Hosting": "AWS Lambda (Serverless Compute), AWS Elastic Beanstalk (Application Hosting)",
                "Databases & Storage": "AWS RDS for MySQL, PostgreSQL (Relational Database), AWS DynamoDB (NoSQL Key-Value Database), AWS ElastiCache - Redis (In-Memory Cache)",
                "Integration & Messaging": "Amazon SQS (Message Queue), Amazon SNS (Pub/Sub Messaging), Amazon Kinesis (Data Streaming)",
                "Infrastructure as Code": "AWS CloudFormation, Terraform",
                "Monitoring & Metrics": "Amazon CloudWatch",

                "Blockchain & Web3":"",
                "Managed Blockchain Service": "Amazon Managed Blockchain",
                "Blockchain Frameworks": "Hyperledger Fabric, Ethereum",
                "Decentralized Ledger": "Amazon QLDB",
                "Blockchain Node Infrastructure": "Amazon EC2",
                "Smart Contract Hosting": "Amazon EC2, AWS Lambda",
                "Blockchain Storage": "Amazon S3",
                "Blockchain Monitoring": "Amazon CloudWatch",
                "Blockchain Security": "AWS KMS, AWS IAM",

                "Quantum Computing":"",
                "Quantum Computing Platform": "AWS Braket",
                "Quantum Hardware Access": "IonQ, Rigetti, Oxford Quantum Circuits (via AWS Braket)",
                "Quantum Simulators": "AWS Braket Local & Managed Simulators",
                "Hybrid Quantum-Classical Workflows": "AWS Braket + AWS Lambda + Amazon S3",
                "Quantum ML Integration": "AWS Braket with Amazon SageMaker",
                "Quantum Algorithm Development": "AWS Braket SDK (Python)"
            },
            "Google Cloud Platform (GCP)":{
                "Storage Management": "Google Cloud Storage (GCS) for Object Storage, BigQuery (External Tables on GCS) for Query on Object Storage, Persistent Disk (Standard / SSD / Balanced) for Block Storage, Filestore (Managed NFS) for File Storage, Cloud Storage Archive / Coldline (Archive / Cold Storage)",
                "ETL & Data Processing": "Cloud Data Fusion (ETL / Data Integration), Cloud Dataflow (Apache Beam) for Batch & Stream Processing, BigQuery + Dataform (Data Transformation (ELT)), Cloud Composer (Apache Airflow) for Workflow Orchestration",
                "Security, Identity, & Compliance": "Cloud IAM (Identity & Access Management), Secret Manager (Secrets Management), Identity Platform (Firebase Auth) for User Authentication & Identity, Cloud KMS / Cloud HSM (Key Management & Encryption), Security Command Center (Security Monitoring)",
                "Networking & Content Delivery": "Cloud DNS (DNS & Traffic Routing), Cloud CDN (Content Delivery Network), Virtual Private Cloud (VPC) for Virtual Networking, API Gateway / Apigee (API Management), Cloud Load Balancing (Global L7/L4) for Load Balancing",
                "Compute & Application Hosting": "Cloud Functions (Serverless Compute), Cloud Run (Container-based Serverless), Compute Engine (Virtual Machines), App Engine for Platform as a Service (PaaS)",
                "Databases & Storage": "Cloud SQL (MySQL, PostgreSQL, SQL Server) for Relational Databases, Cloud Spanner (Globally Distributed SQL), Firestore (NoSQL Document Database), Bigtable (Wide-Column NoSQL), Memorystore (Redis / Memcached) for In-Memory Cache",
                "Integration & Messaging": "Pub/Sub (Message Queue), Eventarc (Event-Driven Integration), Application Integration (Enterprise Integration), Pub/Sub + Dataflow (Streaming Ingestion)",
                "Infrastructure as Code": "Deployment Manager (Native IaC), Terraform (Multi-Cloud IaC)",
                "Monitoring & Metrics": "Cloud Monitoring & Cloud Logging, Cloud Trace, Error Reporting",

                "Blockchain & Web3": "",
                "Managed Blockchain Infrastructure": "Compute Engine (Blockchain Node Hosting)",
                "Blockchain Data Analytics": "BigQuery Public Blockchain Datasets",
                "Smart Contract Hosting": "Compute Engine (Smart Contract Nodes), Cloud Functions / Cloud Run for Event Processing",
                "Blockchain Data Storage": "Google Cloud Storage",
                "Blockchain Monitoring & Security": "Cloud Monitoring, Cloud KMS (Key Management), Cloud IAM (Identity & Access)",

                "Quantum Computing": "",
                "Quantum Platform": "Google Quantum AI for Quantum Platform",
                "Quantum Hardware Access": "Google Sycamore Processor (Superconducting Qubits)",
                "Quantum Circuit Simulator": "Cirq Simulator",
                "Quantum Hybrid Compute": "Quantum AI + Compute Engine + Cloud Storage",
                "Quantum ML Integration": "Cirq + TensorFlow Quantum",
                "Quantum SDK": "Cirq (Python)"
            },
            "Firebase (Backend-as-a-Service)":{
                "Application Development Platform": "Firebase Platform (Backend-as-a-Service (BaaS))",
                "Authentication & Identity": "Firebase Authentication, Firebase Auth + Google Identity Platform (Identity Federation)",
                "Databases & File Storage": "Cloud Firestore (NoSQL Document Database), Firebase Realtime Database (Realtime Database), Firebase Cloud Storage (File & Media Storage)",
                "Serverless Compute & Backend Logic": "Cloud Functions for Firebase (Serverless Functions), Database / Auth / HTTP triggers (Event-Driven Architecture), HTTPS Callable & REST APIs (API Development)",
                "Hosting & Content Delivery": "Firebase Hosting (Web Hosting), Firebase Hosting CDN (Google Edge Network), Managed SSL Certificates (Custom Domains & SSL)",
                "Messaging & Notifications": "Firebase Cloud Messaging (FCM) for Push Notifications",
                "Analytics & User Insights": "Google Analytics for Firebase (User Analytics), Firebase Analytics Dashboard (Funnel & Retention Analysis)",
                "Performance & Quality Monitoring": "Firebase Performance Monitoring (App Performance Monitoring), Firebase Crashlytics (Crash Reporting)",
                "Testing & Release Management": "Firebase Test Lab (Real Devices & Emulators) for Automated Testing, Firebase A/B Testing (A/B Testing), Firebase Remote Config (Feature Flags)",
                "Security & Compliance": "Firestore & Realtime DB Security Rules, Firebase + GCP IAM (IAM Integration), Environment Configs via Firebase & GCP Secret Manager",
                "DevOps & CI/CD": "Firebase CLI (CLI & Automation), GitHub Actions / GitLab CI / Cloud Build (CI/CD Integration)",
                "Integration with Google Cloud": "Firebase Analytics → BigQuery (BigQuery Integration), Firebase + API Gateway (Advanced APIs), Firebase + Cloud Run / Cloud Functions (Scalability)"
            }
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

const getValueType = ( value ) =>{
 if(React.isValidElement(value)){ return "JSX"; }
 if(typeof value === "string") { return "STRING"; }
 if(typeof value === "object" && value !== null && !Array.isArray(value)) { return "JSON"; }
 return "UNKNOWN";
};

const TechStack = () =>{
 const keyValDisplay = (k, v, i) =>{
    if(typeof v === "string" && v?.length === 0){
        return (<div key={i} className="pb-2" style={{ marginTop:'8px' }}>
            <span style={{ color:'#fff', borderBottom:'1px solid #fff', paddingBottom:'1px', textTransform:'uppercase', fontSize:'12px' }}><b>{k}</b></span>
            <span><b>-</b></span>
        </div>);
    } else {
        return (<div key={i} className="ps-2 pb-2">
            <span className="text-grey2"><b>{k}</b></span> 
            <span><b>:</b> {v}</span>  
        </div>);
    }
 };
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
                            {d?.title && <div align="center" className="text-white uppercase pb-3"><b>{d?.title}</b></div>}
                            <div>
                            {kpiKeys?.map((kpiKey, i4) => {
                                const kpiVal = d?.kpis?.[kpiKey];
                                if(getValueType(kpiVal) === "JSON") {
                                    const valKey = Object.keys(kpiVal);
                                    return (<div key={i4} className="pb-2">
                                        <div style={{ backgroundColor:'#999', color:'#0e172b', padding:'6px', marginBottom:'8px' }}>
                                            <b>{kpiKey}</b>
                                        </div>
                                        {valKey?.map((vk,i)=>{
                                           return keyValDisplay(vk, kpiVal[vk], i);
                                        })}  
                                    </div>);
                                } else {
                                    return keyValDisplay(kpiKey, kpiVal, i4);
                                }
                            })}
                            </div>
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