import React from "react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><i>
      As the digital economy grows, crypto-assets are no longer confined to speculative investments. With the rise of 
      DeFi (Decentralized Finance), there's a need for <b>price-stable digital assets</b> that act like fiat currencies 
      yet retain the programmability and decentralization of crypto. Enter <b>Stablecoins</b>.
   </i></div>
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction</b></h2></div>
   <div className="mtop15p"><b>Stablecoins</b> are cryptocurrencies designed to minimize price volatility by pegging 
   their value to a stable asset, like the <b>U.S. Dollar</b>, <b>Euro</b>, or even <b>gold</b>. These coins are essential 
   to Web 3.0 because they provide a <b>reliable medium of exchange</b>, <b>unit of account</b>, and <b>store of value</b> in 
   a highly volatile crypto world.</div>
   <div className="mtop15p">But not all stablecoins are created equal. Some are <b>collateralized</b>, and others 
   are <b>algorithmically maintained</b>. Let’s explore the two main types:</div>
   <div className="mtop15p">
      <ol>
         <li>
            <div><h4 className="blog-head"><b>Fiat-Collateralized Stablecoins</b></h4></div>
            <div>
               <ul>
                  <li className="mtop5p">Backed 1:1 by fiat currencies.</li>
                  <li className="mtop5p"><b>Example:</b> <u>USDT (Tether)</u>, <u>USDC</u>, <u>BUSD</u></li>
                  <li className="mtop5p">Stored in traditional banks.</li>
                  <li className="mtop5p">Trust depends on central authority and audits.</li>
               </ul>
            </div>
         </li>
         <li className="mtop15p">
            <div><h4 className="blog-head"><b>Crypto-Collateralized Stablecoins</b></h4></div>
            <div>
               <ul>
                  <li className="mtop5p">Backed by cryptocurrencies like ETH, held in smart contracts.</li>
                  <li className="mtop5p">Over-collateralized to avoid liquidation due to volatility.</li>
                  <li className="mtop5p"><b>Example:</b> <u>DAI</u> (by MakerDAO)</li>
               </ul>
            </div>
         </li>
         <li className="mtop15p">
            <div><h4 className="blog-head"><b>Algorithmic Stablecoins</b></h4></div>
            <div>
               <ul>
                  <li className="mtop5p">Not backed by fiat or crypto.</li>
                  <li className="mtop5p">Use smart contracts and algorithms to automatically expand or contract the coin supply.</li>
                  <li className="mtop5p">Aim to maintain peg via <b>market incentives</b> and <b>governance rules</b>.</li>
                  <li className="mtop5p"><b>Example:</b> <i>AMPL</i>, <i>FRAX</i>, <i>UST</i> (<i>Terra</i>, now defunct)</li>
               </ul>
            </div>
         </li>
      </ol>
   </div>
 </div>);
};

export default Introduction;