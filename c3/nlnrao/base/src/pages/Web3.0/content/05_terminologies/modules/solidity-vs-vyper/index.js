import React from "react";
import { Highlight } from "e-ui-react"; 
import SimpleTimeline from '@Components/simple-timeline/index.js';

const SolidityVsVyper = () =>{
 const SecuritySolidityProgram = ()=>{
   return (<div>
    <Highlight content={`pragma solidity ^0.8.0;

contract Token {
  mapping(address => uint256) balances;
      
  function transfer(address _to, uint256 _value) public {
   require(balances[msg.sender] >= _value, "Insufficient balance");
   balances[msg.sender] -= _value;  // Deduct from sender
   balances[_to] += _value;      // Add to receiver
  }
}`} lang="javascript"  />
<div align="center"><b>Solidity Program</b></div>
</div>);
 };

 const SecurityVyperProgram = () =>{
  return (<div>
   <Highlight content={`@external
def transfer(_to: address, _value: uint256):
   assert self.balances[msg.sender] >= _value, "Insufficient balance"
   self.balances[msg.sender] -= _value
   self.balances[_to] += _value`} lang="javascript"  />
 <div align="center"><b>Vyper Program</b></div>
 </div>);
 };

 return (<div>
    <div className="mtop15p lh36p" style={{ fontSize:'16px' }}><i><u>Solidity</u> and <u>Vyper</u> are both popular 
    programming languages used for developing smart contracts on the Ethereum blockchain.</i></div>

    <div className="mtop15p"><h3><b>Timeline Evolution</b></h3></div>
    <div className="mtop15p">
      <SimpleTimeline data={[{ title:'Solidity Language', 
         desc:(<div>In 2014, Solidity was first introduced by the Ethereum project as a language for writing smart 
            contracts and in 2015, the first public version of Solidity was released</div>) },
         { title:'Vyper Language', 
            desc:(<div>In 2016, Vyper was initially conceived as a language focused on security and simplicity. 
               The first version of Vyper was released in 2018.
            </div>) }]} />
    </div>

    <div className="mtop15p"><h3><b>Why two languages?</b></h3></div>
    <div className="mtop15p lh25p">
      Ethereum introduced Vyper as an alternative to Solidity to address some of the limitations and security 
      concerns associated with Solidity:
      <div>
         <div className="mtop15p"><h5><b>Security:</b></h5> Solidity's complexity and certain features can introduce 
         security vulnerabilities if not handled carefully. Vyper's design philosophy prioritizes security by simplifying 
         the language and eliminating potentially risky features.</div>
               <div className="list-group">
                  <div className="list-group-item mtop15p">
                     <div className="lh25p">Let's illustrate how Solidity's complexity can introduce vulnerabilities and 
                     how Vyper's simplicity aims to mitigate them with a simplified example involving a token transfer:</div>
                     <div className="mtop15p">
                        <b>Scenario:</b> A user wants to transfer tokens from their account to another account.
                     </div>
                     <div className="mtop15p"><SecuritySolidityProgram /></div>
                     <div className="mtop15p"><h5><b>Potential Vulnerability in this Code:</b></h5></div>
                     <div>
                        <ul>
                           <li>A malicious contract can trick another contract by repeatedly calling the "transfer" function 
                           before the first transfer finishes. Since the sender's balance isn't updated right away, the 
                           attacker can keep draining funds by nesting these calls. This is called 
                           a <code><b>Re-entrancy attack</b></code>.</li>
                           <li>Solidity has tools to stop this, like following 
                              the <code><b>checks-effects-interactions</b></code> pattern, but developers need to use them 
                              properly to prevent such attacks.</li>
                        </ul>
                     </div>

                     <div align="center" className="mtop15p"><h4><b>How Vyper Mitigates the Risk?</b></h4></div>
                     <div className="mtop15p"><SecurityVyperProgram /></div>

                  </div>
               </div>
      </div>
    </div>

 </div>);
};

export default SolidityVsVyper;
