import React from "react";
import { ContainerFluid, Card, Colors } from "e-ui-react";

const OverallStats = ()=> {
    return(<>
    <Card className="intro" padding={15} borderRadius={10} style={{backgroundColor:"#e3dcfa"}}>
        <div className="mtop5p mbot5p" align="left" style={{borderBottom:"1px solid black"}}>
            <h4 className="bs-header"><b>Your Overall Statistics</b></h4>
        </div>
        <div className="mtop15p">
            <span className="bs-header" align="left">Profiles Created</span>
            <span className="bs-header" align="right" style={{marginLeft:"220px"}}>0</span>
        </div>
        <div className="mtop15p">
            <span className="bs-header" align="left">Profiles you watched</span>
            <span className="bs-header" align="right" style={{marginLeft:"196px"}}>0</span>
        </div>
        <div className="mtop15p">
            <span className="bs-header" align="left">Your Horoscope matched Profiles</span>
            <span className="bs-header" align="right" style={{marginLeft:"128px"}}>0</span>
        </div>
        <div className="mtop15p">
            <span className="bs-header" align="left">People watched you</span>
            <span className="bs-header" align="right" style={{marginLeft:"199px"}}>0</span>
        </div>
        <div className="mtop15p">
            <span className="bs-header" align="left">Points spent</span>
            <span className="bs-header" align="right" style={{marginLeft:"240px"}}>0</span>
        </div>
    </Card>
    </>);
};

export default OverallStats;