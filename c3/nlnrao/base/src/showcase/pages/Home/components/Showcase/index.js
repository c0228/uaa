import React from "react";
import { ContainerFluid, Row, Col, Button, Icon } from "e-ui-react";
import './index.css';

const ShowcaseTile = () =>{
 const data = [{
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
    image: 'web3/zkp-voting-system.png',
    title:'A Secure & Anonymous "Zero-Knowledge Proof (ZKP) Voting System"',
    desc:`A Zero-Knowledge Proof (ZKP) Voting System is a secure and privacy-focused online voting platform that ensures 
        voter anonymity while maintaining election integrity. It uses ZKP cryptographic techniques to verify votes without 
        revealing voter identities or choices. This prevents fraud, ensures transparency, and enables trustless verification. 
        The system can be implemented using blockchain-based smart contracts or a traditional backend with ZKP algorithms, 
        making it an innovative solution for secure digital elections.`,
    freeze: 250
 },{
    image: 'web3/zkp-voting-system.png',
    title:'',
    desc:``,
    freeze: 250
 },{
    image: 'web3/zkp-voting-system.png',
    title:'',
    desc:``,
    freeze: 250
 },{
    image: 'web3/zkp-voting-system.png',
    title:'',
    desc:``,
    freeze: 250
 },{
    image: 'web3/zkp-voting-system.png',
    title:'',
    desc:``,
    freeze: 250
 },{
    image: 'web3/zkp-voting-system.png',
    title:'',
    desc:``,
    freeze: 250
 },{
    image: 'web3/zkp-voting-system.png',
    title:'',
    desc:``,
    freeze: 250
 },{
    image: 'web3/zkp-voting-system.png',
    title:'',
    desc:``,
    freeze: 250
 }];
 return (<div style={{ marginTop:'15px', marginBottom:'15px' }}>
    <ContainerFluid>
        <Row>
            {data?.map((d,i)=>{
                return ( <Col key={i} md={4}>
                    <div className="showcase-section" style={{ marginTop:'25px', boxShadow:'2px 2px 2px 2px #ddd2d2',  border:'1px solid #ccc', 
                            borderRadius:'12px', overflow: 'hidden' }}>
                        <div className="showcase-img-zoom">
                        <img src={process.env.PROJECT_SHOWCASE_URL+'assets/images/showcase/'+d?.image} />
                        </div>
                        <div style={{ padding:'15px' }}>
                            <div align="center"><h4 style={{ lineHeight:'32px' }}><b>{d?.title}</b></h4></div>
                            <div className="lh28p fs16p" style={{ color:'#777', padding:'10px' }}>
                                {d?.desc?.slice(0, d?.freeze)+'...'}
                            </div>
                            <div align="right">
                                <Button type="outline-danger" size={11}>
                                    <b>Explore Project</b>
                                    <Icon type="FontAwesome" name="fa-external-link" size={12} style={{ marginLeft:'5px'}} />
                                </Button>
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