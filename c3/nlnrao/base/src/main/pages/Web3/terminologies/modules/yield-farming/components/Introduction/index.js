import React from "react";
import { Card } from "e-ui-react";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><i>In the world of traditional finance, the idea of “making money from money” is well-known through savings
       accounts, fixed deposits, or investments. In Web 3.0 and decentralized finance (DeFi), this concept is revolutionized through a 
       powerful term — <b>Yield Farming</b>. As blockchain technology reshapes how we think about finance, yield farming emerges as one 
       of the most intriguing methods to earn passive income from digital assets.</i></div>
   
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction to Yield Farming</b></h2></div>
   <div className="mtop15p"><b>Yield Farming</b>, also known as <b>liquidity mining</b>, is a strategy used in the <b>DeFi</b> ecosystem 
   where users provide their cryptocurrency assets to <b>liquidity pools</b> in decentralized exchanges (DEXs) or protocols and, in 
   return, earn rewards. These rewards usually come in the form of <b>interest</b>, <b>governance tokens</b>, or <b>transaction fees</b>.</div>
   <div className="mtop15p">Yield farmers strategically move their assets between protocols 
      like <b>Uniswap</b>, <b>Aave</b>, <b>Compound</b> or <b>PancakeSwap</b> to maximize returns. The idea is simple:</div>
   <div className="mtop15p">
      <Card padding={15} backgroundColor="#eee">
         <b>Provide liquidity &#8594; Earn rewards &#8594; Reinvest &#8594; Repeat</b>
      </Card>
   </div>

   <div className="mtop15p"><h4 className="blog-head"><b>Key Terms in Yield Farming:</b></h4></div>
   <div className="mtop15p">
      <ul>
         <li>
            <div><span className="blog-head"><b>Liquidity Pool:</b></span></div>
            <div>A smart contract that holds funds used for decentralized trading or lending.</div>
         </li>
         <li className="mtop5p">
            <div><span className="blog-head"><b>APY (Annual Percentage Yield):</b></span></div>
            <div>The expected rate of return over a year, including compounding.</div>
         </li>
         <li className="mtop5p">
            <div><span className="blog-head"><b>Impermanent Loss:</b></span></div>
            <div>A temporary loss that happens when providing liquidity to a volatile trading pair.</div>
         </li>
         <li className="mtop5p">
            <div><span className="blog-head"><b>Staking:</b></span></div>
            <div>Locking tokens in a contract to earn passive rewards.</div>
         </li>
      </ul>
   </div>
 </div>);
};

export default Introduction;