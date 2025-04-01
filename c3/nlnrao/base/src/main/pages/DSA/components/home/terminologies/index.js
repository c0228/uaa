import React from "react";
import { Card } from "e-ui-react";
import Terminologies from '@MainComponents/terminologies-list/index.js';
import DSARoutes from "@MainPages/DSA/routes.js";

const DSATerminologies = () =>{
 return (<Terminologies title="Terminologies" 
    prefix="tech/dsa/terminologies/"
    data={DSARoutes} />);
};

export default DSATerminologies;