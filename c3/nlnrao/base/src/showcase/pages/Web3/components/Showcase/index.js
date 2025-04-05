import React from "react";
import { ContainerFluid, Row, Col, Button, Icon } from "e-ui-react";
import './index.css';

const ShowcaseTile = () =>{
 const data = [{
   link: 'showcase/web3-blockchain/self-sovereign-identity-decentralised-identity-system',
   image: 'web3/blockchain-did-system.png',
   title:'Self-Sovereign Identity: Decentralised Identity (DID) System',
   desc:`This project focuses on creating a self-sovereign identity (SSI) platform 
    where users have full control over their digital identities without relying on centralized authorities. 
    Using blockchain and verifiable credentials (VCs), the system enables secure identity issuance, 
    verification, and authentication. The solution ensures privacy, security, and interoperability across 
    platforms. The project will be hosted on Hostinger, with a frontend for user interaction and a 
    blockchain-backed backend for identity management.`,
   freeze: 250
 },{
    link: 'showcase/web3-blockchain/a-secure-and-anonymous-zero-knowledge-proof-zkp-voting-system',
    image: 'web3/zkp-voting-system.png',
    title:'A Secure & Anonymous "Zero-Knowledge Proof (ZKP) Voting System"',
    desc:`A Zero-Knowledge Proof (ZKP) Voting System is a secure and privacy-focused online voting platform that ensures 
        voter anonymity while maintaining election integrity. It uses ZKP cryptographic techniques to verify votes without 
        revealing voter identities or choices. This prevents fraud, ensures transparency, and enables trustless verification. 
        The system can be implemented using blockchain-based smart contracts or a traditional backend with ZKP algorithms, 
        making it an innovative solution for secure digital elections.`,
    freeze: 250
 },{
    link: 'showcase/web3-blockchain/timeLock-nft-rental-marketplace-without-ownership-loss',
    image: 'web3/nft-rental.png',
    title:'TimeLock NFT Rental Marketplace without Ownership Loss',
    desc:`A decentralized platform where users can rent NFTs for a fixed period without transferring ownership. Instead of 
        handing over full control of the NFT, access is controlled through TimeLock smart contracts, ensuring the NFT owner 
        stays in full control while temporarily granting usage rights. Once the rental period ends, all access automatically 
        reverts to the original owner. This ensures secure NFT lending for games, metaverses, collectibles, and other utilities, 
        all without risking permanent loss of ownership.`,
    freeze: 250
 },{
    link: 'showcase/web3-blockchain/decentralized-cloud-storage-using-ipfs-and-smart-contracts',
    image: 'web3/cloud-storage.png',
    title:'Decentralized Cloud Storage using IPFS and Smart Contracts',
    desc:`This project allows users to securely upload and access files through a decentralized network. Files are stored on IPFS, 
    and their metadata is managed with Ethereum smart contracts to ensure transparency, ownership, and immutability. The frontend 
    is hosted on Hostinger, providing a simple interface to interact with blockchain and decentralized storage.`,
    freeze: 230
 },{
    link: 'showcase/web3-blockchain/decentralized-escrow-service-for-secure-peer-to-peer-payments',
    image: 'web3/escrow.png',
    title:'Decentralized Escrow Service for Secure Peer-to-Peer Payments',
    desc:`A Decentralized Escrow Service uses smart contracts to securely hold funds or assets during a transaction. It ensures 
        trust between parties by releasing payments only when conditions are met, without relying on a central authority or 
        third party.`,
    freeze: 250
 },{
    link: 'showcase/web3-blockchain/tamper-proof-credentials-secure-certificate-verification-system',
    image: 'web3/tamper-proof-cvs.png',
    title:'Tamper-Proof Credentials: Secure Certificate Verification System',
    desc:`Tamper-Proof Credentials is a blockchain-based certificate verification system that ensures authenticity, transparency, 
        and security. It prevents forgery by storing certificates on an immutable ledger, allowing instant, trustless validation 
        by employers or institutions.`,
    freeze: 250
 },{
    link: 'showcase/web3-blockchain/dao-decentralized-autonomous-organization',
    image: 'web3/dao.png',
    title:'DAO (Decentralized Autonomous Organization)',
    desc:`A Decentralized Autonomous Organization (DAO) is a blockchain-based entity governed by smart contracts and community 
        consensus. It enables transparent, trustless decision-making without central authority, allowing members to propose, vote, 
        and manage funds collaboratively and securely.`,
    freeze: 230
 },{
    image: 'web3/crypto-price-tracker.png',
    title:'Crypto Price Tracker: API Fetching Real-time crypto prices',
    desc:`Track real-time cryptocurrency prices with the Crypto Price Tracker. This tool fetches live data from APIs, keeping you 
        updated on the latest market trends and coin values. Perfect for traders, developers, and crypto enthusiasts.`,
    freeze: 250
 },{
    image: 'web3/cross-chain-bridge.png',
    title:'Cross-Chain Bridge: Asset Swapping between varies Blockchains',
    desc:`Cross-Chain Bridge enables seamless asset swapping between various blockchains. It allows users to transfer tokens across 
        networks like Ethereum, BNB, and Polygon, enhancing interoperability and liquidity in the decentralized ecosystem.`,
    freeze: 220
 }];
 return (<div style={{ marginTop:'15px', paddingBottom:'65px' }}>
    <ContainerFluid>
        <Row>
            <Col md={12}>
                <div align="center" className="mtop15p"><h3><b>DEMO PROJECTS</b></h3></div>
            </Col>
        </Row>
        <Row>
            {data?.map((d,i)=>{
                return ( <Col key={i} md={4}>
                    <div className="showcase-section" style={{ marginTop:'25px', boxShadow:'2px 2px 2px 2px #ddd2d2',  border:'1px solid #ccc', 
                            borderRadius:'12px', overflow: 'hidden' }}>
                        <div className="showcase-img-zoom">
                        <img src={process.env.PROJECT_MAIN_URL+'assets/images/showcase/'+d?.image} />
                        </div>
                        <div style={{ padding:'15px' }}>
                            <div align="center"><h4 style={{ lineHeight:'32px' }}><b>{d?.title}</b></h4></div>
                            <div className="lh28p fs16p" style={{ color:'#777', padding:'10px' }}>
                                {d?.desc?.slice(0, d?.freeze)+'...'}
                            </div>
                            <div align="right">
                                <a href={process.env.PROJECT_SHOWCASE_URL+d?.link}>
                                <Button type="outline-danger" size={11}>
                                    <b>Explore Project</b>
                                    <Icon type="FontAwesome" name="fa-external-link" size={12} style={{ marginLeft:'5px'}} />
                                </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </Col>);
            })}
        </Row>
    </ContainerFluid>
 </div>);
};

export default ShowcaseTile;