import React from "react";
import { Row, Col, Card } from "e-ui-react";
import Contact from './../Contact/index.js';
import './index.css';

const Welcome = ()=>{
 return (<>
  <div>
    <div className="container-fluid" style={{ paddingTop:'15px', paddingBottom:'10px', backgroundColor:'#ddd' }}>
          <div className="row">
            <div className="col-xxl-2 col-md-2" >
              <img src="./assets/bar/3.jpg" className="tbyb-carousel" />
            </div>
            <div className="col-xxl-6 col-md-6" >
              <img src="./assets/bar/5.jpg" className="tbyb-carousel" />
            </div>
            <div className="col-xxl-2 col-md-2" >
              <img src="./assets/bar/8.jpg" className="tbyb-carousel" />
            </div>
            <div className="col-xxl-2 col-md-2" >
              <img src="./assets/bar/7.jpg" className="tbyb-carousel" />
            </div>
          </div>
    </div>

    <div className="container-fluid" style={{ padding:'30px' }}>
          <div className="row">
            <div className="col-xxl-12 col-sm-12">
              <div align="center" className="heading-title"><b>About the Backyard Bar</b></div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-6 col-sm-6" style={{ lineHeight:'34px', padding:'15px', fontSize:'18px', fontFamily:'OpenSansItalic' }}>
        <div>We’re an extension of your own backyard—a place where friends gather, good times flow, and the community spirit thrives. 
          Here at The Backyard Bar, we're all about creating a comfortable, welcoming atmosphere where everyone feels like family.
        </div>
            </div>
            <div className="col-xxl-6 col-sm-6"  style={{ lineHeight:'34px', padding:'15px', fontSize:'18px', fontFamily:'OpenSansItalic' }}>
            Our story began with a simple idea: to bring folks together over great drinks and warm hospitality. We opened our doors with a 
          passion for creating a space that reflects the warmth and energy of our community. Whether you're a local resident or just passing 
          through, we want you to feel right at home.
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-6 col-sm-6" style={{ lineHeight:'34px', padding:'15px', fontSize:'18px', fontFamily:'OpenSansItalic' }}>
            The Backyard Bar team is a group of passionate folks behind the bar, all dedicated to making your visit unforgettable. Our bartenders 
          are experts at crafting classic cocktails, innovative new concoctions, and special handcrafted drinks. We also offer a selection of 
          the best local draft beers, a variety of wines, and a full range of spirits, including premium bourbons and Scotch. Whatever your 
          preference, we’re happy to recommend the perfect drink to suit your taste.
            </div>
            <div className="col-xxl-6 col-sm-6" style={{ lineHeight:'34px', padding:'15px', fontSize:'18px', fontFamily:'OpenSansItalic' }}>
            We're more than just a bar—we're a hub for the community. We host live music nights featuring local musicians, trivia nights that 
          test your knowledge (and your luck!), and special events throughout the year that bring people together. Whether you're catching 
          up with old friends, making new ones, or simply unwinding after a long day, The Backyard Bar is your place.
            </div>
          </div>
    </div>

    <div className="container-fluid" style={{ padding:'30px' }}>
      <div className="row">
        <div className="col-xxl-12 col-sm-12" style={{ lineHeight:'34px', padding:'15px', fontSize:'18px', fontFamily:'OpenSansItalic' }}>
          <div align="center" className="heading-title"><b>Our Gallery</b></div>
        </div>
      </div>
      <div className="row">
          <div className="col-xxl-3 col-md-3" >
            <img src={"./assets/bar/6.jpg"} className="tbyb-gallery" />
          </div>
          <div className="col-xxl-3 col-md-3" >
            <img src={"./assets/bar/10.jpg"} className="tbyb-gallery" />
          </div>
          <div className="col-xxl-3 col-md-3" >
            <img src={"./assets/bar/12.jpg"} className="tbyb-gallery" />
          </div>
          <div className="col-xxl-3 col-md-3" >
            <img src={"./assets/bar/13.jpg"} className="tbyb-gallery" />
          </div>
      </div>     
    </div>

    <Contact />


 </div>
 </>);
};

export default Welcome;