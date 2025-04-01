import React from "react";
import { Icon } from "e-ui-react";
import OrderList from "@Components/order-list/index.js";
import SimpleTimeline from '@Components/simple-timeline/index.js';

const Timeline = () =>{
 const Checklist = ({ status, children }) =>{
   return (<div style={{ display:'flex', flex:1, flexDirection:'row' }}>
      <div style={{ width:'5%' }}>
         <Icon type="FontAwesome" name={status?"fa-check-circle":"fa-times-circle"} size={14} 
         style={{ color:status?'green':'red' }} />
      </div>
      <div style={{ width:'95%', paddingLeft:'5px' }}>{children}</div>
   </div>);
 }
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Timeline Evolution</b></h2></div>
    <div className="mtop15p">
          <SimpleTimeline data={[{ title:'Solidity Language', 
             desc:(<div>In 2014, Solidity was first introduced by the Ethereum project as a language for writing smart 
                contracts and in 2015, the first public version of Solidity was released</div>) },
             { title:'Vyper Language', 
                desc:(<div>In 2016, Vyper was initially conceived as a language focused on security and simplicity. 
                   The first version of Vyper was released in 2018.
                </div>) }]} />
    </div>
    <div className="mtop15p"><h2 className="blog-head"><b>Why two languages?</b></h2></div>
    <div className="mtop15p">
      <ol>
         <li className="mtop5p">
            <div><b>Different Design Philosophies</b></div>
            <OrderList data={[(<div className="mtop5p"><b>Solidity</b> is inspired by JavaScript, Python, and C++, 
               making it developer-friendly with extensive features.</div>),
               (<div className="mtop5p"><b>Vyper</b> is inspired by Python and emphasizes security and readability.</div>)]} />
         </li>
         <li className="mtop5p">
            <div><b>Security vs. Flexibility</b></div>
            <OrderList data={[(<div className="mtop5p">Solidity provides more flexibility, supporting inheritance, complex 
               loops, and inline assembly.</div>),
               (<div className="mtop5p">Vyper reduces attack surfaces by removing certain features like function overloading 
               and inheritance.</div>)]} />
         </li>
         <li className="mtop5p">
            <div><b>Developer Preferences</b></div>
            <OrderList data={[(<div className="mtop5p">Solidity is widely used, with extensive documentation, developer tools, 
               and a large community.</div>),
               (<div className="mtop5p">Vyper is preferred for security-critical applications due to its minimalistic approach.</div>)]} />
         </li>
      </ol>
    </div>
    <div className="mtop15p"><h2 className="blog-head"><b>When to Choose Solidity vs. Vyper?</b></h2></div>
    <div className="mtop15p">
      <div className="table-responsive">
         <table className="table">
            <thead>
               <tr style={{ backgroundCOlor:'#eee' }}>
                  <td><b>Feature</b></td>
                  <td><b>Solidity</b></td>
                  <td><b>Vyper</b></td>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td><b>Complex Smart Contracts</b></td>
                  <td><Checklist status={true}>Supports advanced features like inheritance, assembly, and function overloading.</Checklist></td>
                  <td><Checklist status={false}>Avoids complexity to minimize security risks.</Checklist></td>
               </tr>
               <tr>
                  <td><b>Security-focused Applications</b></td>
                  <td><Checklist status={false}>Higher risk due to complexity and potential attack vectors.</Checklist></td>
                  <td><Checklist status={true}>Better for security-sensitive contracts (e.g., financial contracts).</Checklist></td>
               </tr>
               <tr>
                  <td><b>Developer Ecosystem & Tooling</b></td>
                  <td><Checklist status={true}>Large community, IDE support, and extensive tools.</Checklist></td>
                  <td><Checklist status={false}>Smaller ecosystem, fewer tools.</Checklist></td>
               </tr>
               <tr>
                  <td><b>Performance & Gas Optimization</b></td>
                  <td><Checklist status={true}>Inline assembly allows fine-tuning.</Checklist></td>
                  <td><Checklist status={false}>No inline assembly, limited optimization.</Checklist></td>
               </tr>
               <tr>
                  <td><b>Readability & Simplicity</b></td>
                  <td><Checklist status={false}>More complex syntax and structure.</Checklist></td>
                  <td><Checklist status={true}>Python-like, easy to read and audit.</Checklist></td>
               </tr>
            </tbody>
         </table>
      </div>
    </div>
    <div className="mtop15p"><h2 className="blog-head"><b>Which One Should You Use?</b></h2></div>
    <div>
      <div>
         <ul>
            <li className="mtop15p">
               <div>Use <b>Solidity</b> when:</div>
               <ul>
                  <li className="mtop5p">You need advanced smart contract features.</li>
                  <li className="mtop5p">You are building DeFi protocols, NFTs, or dApps with complex logic.</li>
                  <li className="mtop5p">You want access to better tools, IDE support, and a larger developer community.</li>
               </ul>
            </li>
            <li className="mtop15p">
               <div>Use <b>Vyper</b> when:</div>
               <ul>
                  <li className="mtop5p">Security is the top priority (e.g., financial applications, DAOs).</li>
                  <li className="mtop5p">You want simpler, more readable, and auditable smart contracts.</li>
                  <li className="mtop5p">You prefer Python-like syntax and minimalistic design.</li>
               </ul>
            </li>
         </ul>
      </div>
    </div>

 </div>);
};

export default Timeline;