import React from "react";
import { Blog, Content, RightSide } from '@Pages/Web3.0/components/blog-templates/index.js';
import Terminologies from '@Components/terminologies-list/index.js';
import Routes from "@Pages/Web3.0/routes.js";

const DAO = ({ meta }) =>{
 return (<div>
  <Blog metaData={meta}>
    <Content>
        Content
    </Content>
    <RightSide>
       <Terminologies prefix="tech/web3.0/terminologies/" data={Routes} />
    </RightSide>
  </Blog>
 </div>);
};

export default DAO;