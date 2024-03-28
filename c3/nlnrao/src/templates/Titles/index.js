import React from "react";
import './index.css';

export const BgHgtTitle = ({ align, title, bgColor, color }) =>{
 return (<div align={align} style={{ fontSize:'18px', letterSpacing:'1.5px',
    fontFamily:'BebasNeue', backgroundColor: bgColor, color: color, paddingLeft:'15px', paddingRight:'15px', paddingTop: '5px',
    paddingBottom: '5px', boxShadow: '2px 2px 2px 2px #ddd' }}>{title}</div>);
};