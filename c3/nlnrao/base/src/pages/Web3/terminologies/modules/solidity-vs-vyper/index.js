import React from "react";
import { Blog, Content, RightSide } from '@Pages/Web3/components/blog-templates/index.js';
import Terminologies from '@Components/terminologies-list/index.js';
import Routes from "@Pages/Web3/component.routes.json";
import { Highlight } from "e-ui-react"; 
import SimpleTimeline from '@Components/simple-timeline/index.js';

const SolidityVsVyper = ({ meta }) =>{
 return (<div>
  <Blog metaData={meta}>
    <Content>
    <div>
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
    

 </div>
    </Content>
    <RightSide>
        <Terminologies prefix="tech/web3.0/terminologies/" data={Routes} />
    </RightSide>
  </Blog>
 </div>);
};

export default SolidityVsVyper;
