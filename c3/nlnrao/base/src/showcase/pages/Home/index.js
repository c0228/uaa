import React from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import Header from '@ShowcaseTemplates/Header/index.js';
import './index.css';

const Home = ({ meta }) =>{
 const data = [{
   title: 'DECENTRALIZED IDENTITY (DID) SYSTEM',
   details:[{
      label:'Tech Stack',
      desc:'Solidity, Ethereum/Solana, IPFS, Node.js, Web3.js/Ether.js'
   },{
      label:'Description',
      desc:'A DID System where users can register, verify and share their identity credentials in a trustless way.'
   },{
      label:'Features',
      desc:(<div>
         <div>The Features of the Project are </div>
         <ol>
         <li>Smart Contract for issuing/verifying identities.</li>
         <li>Decentralized Storage (IPFS) for credentials.</li>
         <li>Frontend to request and validate credentials.</li>
      </ol>
      </div>)
   },{
      label:'Deployment',
      desc:'Deploy Smart Contracts on Polygon Testnet and hosted App on my local Web Server.'
   }]
 },{
   title: 'ZERO-KNOWLEDGE PROOF (ZKP) VOTING SYSTEM',
   details:[{
      label:'Tech Stack',
      desc:'zk-SNARKs (Circom), Solidity, Ethereum, Node.js, React',
   },{
      label:'Description',
      desc:(<div>A blockchain-based <b>anonymous voting systems</b> where votes are cast using <b>ZKPs</b> to maintain privacy.</div>)
   },{
      label:'Features',
      desc:(<div>
         <div>The Features of the Project are </div>
         <ol>
         <li>Users prove eligibility without revealing identity.</li>
         <li>Smart Contracts for vote tallying.</li>
         <li>Zk-SNARK circuits for privacy.</li>
      </ol>
      </div>)
   },{
      label:'Deployment',
      desc:'Deploy to my local Web Server with a public frontend.'
   }]
 },{
   title: 'NFT RENTAL MARKETPLACE'
 },{
   title: 'DECENTRALIZED ESCROW SERVICE'
 },{
   title: 'BLOCKCHAIN-BASED CERTIFICATE VERIFICATION SYSTEM'
 },{
   title: 'DAO (DECENTRALIZED AUTONOMOUS ORGANIZATION)'
 },{
   title: (<div>DECENTRALIZED CLOUD STORAGE <br/>(IPFS + SMART CONTRACTS)</div>)
 },];
 return (<div className="mbot15p"> 
  <Header menulinks={[]} activeId="Home" />
  <div style={{ marginTop:'15px', color:'#ccc'}}>
   <ContainerFluid>
      <Row>
         <Col md={12}>
            <div align="center"><h3 style={{ borderTop:'1px solid #ccc', borderBottom:'1px solid #ccc', marginTop:'15px', 
               paddingTop:'15px', paddingBottom:'15px', color:'#fff', lineHeight:'32px' }}>
               <b>BLOCKCHAIN / DeFi / DECENTRALIZED PROJECTS : LIVE DEMO</b></h3>
            </div>
         </Col>
      </Row>
      <Row>
      {data?.map((d,i)=>{
         return (<Col md={6}>
            <div style={{ minHeight:'70vh', lineHeight:'28px', marginTop:'15px', marginBottom:'15px', padding:'15px', border:'1px dashed #ccc', borderRadius:'8px', color:'#ccc' }}>
               <div align="center" className="mtop15p"><h3 style={{ color:'#fff', lineHeight:'32px' }}><b>{d?.title}</b></h3></div>
               {d?.details?.map((detail)=>{
                  return (<div className="mtop15p">
                     <Row>
                        <Col md={2}><b>{detail?.label}</b></Col>
                        <Col md={1}><b>:</b></Col>
                        <Col md={9}>{detail?.desc}</Col>
                     </Row>
                  </div>);
               })}
            </div>
        </Col>);
      })}
       </Row>
    </ContainerFluid>
  </div>
 </div>);
};

export default Home;