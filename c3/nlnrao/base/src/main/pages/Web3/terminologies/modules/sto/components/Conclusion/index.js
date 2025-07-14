import React from "react";
import { Card } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const Conclusion = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Use Cases of STOs in the Real World</b></h2></div>
    <div className="mtop15p">
        <SimpleTable header={["Industry", "Application"]} 
                columns={[
                    ["Real Estate","Fractional ownership of properties"],
                    ["Equity Crowdsale","Startups raising funds compliantly"],
                    ["Art & Collectibles","Tokenizing rare assets"],
                    ["Bonds/Debt","Issuing digital bonds on blockchain"]
                ]} />
    </div>
    <div className="mtop15p"><h2 className="blog-head"><b>Conclusion: The Regulated Future of Tokenized Assets</b></h2></div>
    <div className="mtop15p">STOs represent <b>the fusion of traditional finance and blockchain innovation</b>. They 
    offer the <b>trust of regulated markets</b> with the <b>efficiency of decentralization</b>, making them ideal for investors 
    seeking compliant blockchain exposure. While ICOs are mostly speculative, STOs are paving the path 
    for <b>real-world adoption of tokenized securities</b>.</div>
    <div className="mtop15p">As <b>Web 3.0 evolves</b>, understanding STOs is crucial for developers, investors, and enterprises 
    alike. Whether you're building a dApp frontend or exploring investment options, STOs are transforming how we perceive 
    ownership and capital formation.</div>
    <div className="mtop15p">
        <Card padding={15} backgroundColor="#eee">
            <div><span className="blog-head"><b>Note:</b></span></div>
            <div>Always check the regulatory framework of your country before participating in or launching an 
            Security Token Offering (STO).</div>
        </Card>
    </div>
 </div>);
};

export default Conclusion;