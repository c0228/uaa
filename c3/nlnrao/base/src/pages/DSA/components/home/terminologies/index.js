import React from "react";
import { Card } from "e-ui-react";
import Terminologies from '@Components/terminologies-list/index.js';
import DSARoutes from "@Pages/DSA/routes.js";

const DSATerminologies = () =>{
 return (<Terminologies title="Terminologies" 
    prefix="tech/dsa/terminologies/"
    data={DSARoutes} />);
};

export default DSATerminologies;