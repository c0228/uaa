import React from "react";
import { Card } from "e-ui-react";

const Conclusion = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
    <div className="mtop15p"><b>Stablecoins</b> are the <b>backbone of Web 3.0's financial layer</b>, providing predictability 
    in an otherwise volatile market. While fiat-collateralized and crypto-backed stablecoins have gained mainstream 
    use, <b>algorithmic stablecoins</b> are still in the experimental phase, with significant risks and innovation potential.</div>
    <div className="mtop15p">As Web 3.0 evolves, understanding these digital assets will be key to interacting with decentralized 
      applications, DAOs, and DeFi platforms.</div>
    <div className="mtop15p mbot15p">
      <Card padding={15} backgroundColor="#eee">
         <div><b>Note:</b></div>
         <div className="mtop15p">Keep an eye on <b>central bank digital currencies (CBDCs)</b> too — they may soon coexist or 
         compete with stablecoins in the Web 3.0 landscape!</div>
      </Card>
    </div>
 </div>);
};

export default Conclusion;