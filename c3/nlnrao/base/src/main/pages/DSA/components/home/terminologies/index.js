import React from "react";
import { Card } from "e-ui-react";
import Terminologies from '@MainComponents/terminologies-list/index.js';
import Routes from "@MainPages/DSA/component.routes.json";

const DSATerminologies = () =>{
 return (<Terminologies title="Terminologies" 
    prefix="tech/dsa/terminologies/"
    data={Routes?.urls} />);
};

export default DSATerminologies;