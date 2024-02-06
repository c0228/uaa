import React from "react";
import { ContainerFluid, Card, Colors } from "e-ui-react";

const TodayStats = ()=> {
    return(<>
    <Card className="intro" padding={15} borderRadius={10} style={{backgroundColor:"#fff6e9"}}>
        <div className="mtop5p mbot5p" align="left" style={{borderBottom:"1px solid black"}}>
            <h4 className="bs-header"><b>Your Today's Statistics</b></h4>
        </div>
        <div className="mtop15p">
            <span className="bs-header" align="left">New Profile Created</span>
            <span className="bs-header" align="right" style={{marginLeft:"190px"}}>0</span>
        </div>
        <div className="mtop15p">
            <span className="bs-header" align="left">Profiles watched today</span>
            <span className="bs-header" align="right" style={{marginLeft:"175px"}}>0</span>
        </div>
        <div className="mtop15p">
            <span className="bs-header" align="left">Your Horoscope matched Profiles</span>
            <span className="bs-header" align="right" style={{marginLeft:"117px"}}>0</span>
        </div>
        <div className="mtop15p">
            <span className="bs-header" align="left">People watched you</span>
            <span className="bs-header" align="right" style={{marginLeft:"187px"}}>0</span>
        </div>
        <div className="mtop15p">
            <span className="bs-header" align="left">Points spent</span>
            <span className="bs-header" align="right" style={{marginLeft:"228px"}}>0</span>
        </div>
    </Card>
    </>);
};

export default TodayStats;