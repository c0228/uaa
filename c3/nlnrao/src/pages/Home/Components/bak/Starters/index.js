import React from "react";
import { Button } from "e-ui-react";

const Starters = ()=>{
 return (<>
    <div align="center" style={{ paddingLeft:'30px', paddingRight:'30px', paddingTop:'120px', paddingBottom:'120px' }}>
        <div>
            <h2 style={{ paddingBottom:'15px' }}><b>Are you in search of Blind Solutions for Your Residence or Workplace?</b></h2>
            <span style={{ fontSize:'18px' }}>
            Delve into our diverse array of materials meticulously curated to enhance the allure of your environment, 
            promising a harmonious fusion of elegance and practicality. Explore our extensive range of materials crafted 
            to elevate the aesthetic appeal of your space, ensuring a blend of sophistication and functionality.</span>
        </div>
        <div style={{ marginTop:'25px' }}>
            <a href="products"><Button type="primary" label="Explore our Products" size={12} /></a>
        </div>
    </div>
 </>);
};

export default Starters;