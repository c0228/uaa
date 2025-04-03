import React from "react";
import { ContainerFluid, Row, Col, Button, Icon } from "e-ui-react";
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

  <div>
      <div align="center" style={{ backgroundColor:'#f9f6f6', padding:'15px' }}>
         <h3 style={{ lineHeight:'32px' }}>
         <b><span style={{ color:'#000' }}>
         Welcome to <span style={{ color:'#d84e55' }}>Blockchain / DeFi / Decentralized Systems</span> – A Live Showcase of Innovation</span></b></h3>
      </div>
   </div>

  <div style={{ marginTop:'15px' }}>
   <ContainerFluid>
      
      <Row>
      {data?.map((d,i1)=>{
         return (<Col key={i1} md={6}>
            <div style={{ position:'relative', minHeight:'60vh', lineHeight:'28px', marginTop:'15px', marginBottom:'15px', padding:'15px', 
                  border:'1px dashed #d84e55', borderRadius:'8px', color:'#333', backgroundColor:'#fae9ea' }}>
               <div align="right">
                  <Button type="outline-danger" size={11}><b>View Demo
                     <Icon type="FontAwesome" name="fa-external-link" size={12} style={{ marginLeft:'5px'}} /> 
                     </b></Button>
               </div>
               <div align="center"><h4 style={{ color:'#d5830a', lineHeight:'32px' }}><b>{d?.title}</b></h4></div>
               {d?.details?.map((detail,i2)=>{
                  return (<div key={i2} className="mtop5p">
                     <Row>
                        <Col md={2}><b>{detail?.label}:</b></Col>
                        <Col md={10}>{detail?.desc}</Col>
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