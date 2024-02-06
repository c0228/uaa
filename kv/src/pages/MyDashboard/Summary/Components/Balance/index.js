import React from "react";
import { ContainerFluid, Card, Colors, Button } from "e-ui-react";

const Balance = ()=> {
    return(<>
    <div className="mbot15p">
    <Card className="intro" padding={15} borderRadius={10} style={{backgroundColor:"#eaf6ff"}}>
        <div className="mtop5p mbot5p" align="left">
            <h4 className="bs-header"><b>Your Balance</b></h4>
        </div>
        <div align="right" style={{marginTop:"15px"}}>
            <h4 className="bs-header"><b>1000</b> Points</h4>
        </div>
    </Card>
    </div>
    <div className="mtop15p mbot15p">
    <Card className="intro" padding={15} borderRadius={10} style={{backgroundColor:"#fdefff"}}>
        <div className="mtop5p mbot5p" align="left">
            <span className="bs-header">You can view complete details of Profiles you interested.
            But, to get Contact details of it - <b>You need Points</b></span>
        </div>
        <div align="right" style={{marginTop:"12px"}}>
            <Button type="light" label="Purchase Points" size={11} />
        </div>
    </Card>
    </div>
    </>);
};

export default Balance;