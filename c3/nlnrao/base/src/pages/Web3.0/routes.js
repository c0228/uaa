import React from "react";
import { useParams } from 'react-router-dom';
import Web3 from "./index.js";
import ZKP01 from "./content/01_zk-SNARKs_and_zk-STARKs/index.js";
import ZKP02 from "./content/03_i_ni_zkp/index.js";
import ModBcArch from "./content/04_mod-bc-arch/index.js";
import Web3Terminologies from "./terminologies/index.js";


const Web3Routes = () =>{
 const { input1, input2 } = useParams();
 const routes = {
  "overview": <Web3 />,
  "terminologies": <Web3Terminologies id={input2} />,
  "zero-knowledge-proof(zkp)":{
    "understanding_zk-SNARKs_and_zk-STARKs": <ZKP01 />,
    "interactive_non-interactive_zkps": <ZKP02 />
  },
  "architecture-infrastructure":{
    "design-a-modular-blockchain-architecture": <ModBcArch />
  }
 };

  // Determine the correct component to render
  let Component = null;

  if (React.isValidElement(routes[input1])) {
    Component = routes[input1]; // Direct JSX element
  } else if (typeof routes[input1] === "object" && input2 in routes[input1]) {
    Component = routes[input1][input2]; // Nested route JSX element
  }

  return <div>{Component || <div>Page Not Found</div>}</div>;
};

export default Web3Routes;