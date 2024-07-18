import React from "react";
import { Row, Col, Card } from "e-ui-react";
import Contact from './../Contact/index.js';
import './index.css';

const Welcome = ()=>{
 return (<>
  <div>
    <div align="center" style={{ marginTop:'4.8%', paddingLeft:'15px', paddingRight:'15px', paddingBottom:'8px' }}>
      <span className="welcome-title desktop-view" style={{ paddingLeft:'10px', paddingRight:'30px', fontSize:'40px', fontFamily:'BebasNeue', letterSpacing:'4px', color:'#000' }}>
        <b>Welcome to the Backyard bar</b>
      </span>
      <div className="welcome-title mobile-view" style={{ paddingLeft:'10px', paddingRight:'30px', fontSize:'40px', fontFamily:'BebasNeue', letterSpacing:'4px', color:'#000' }}>
        <b>Welcome to the Backyard bar</b>
      </div>
    </div>

    <div className="container-fluid" style={{ paddingTop:'15px', paddingBottom:'10px', backgroundColor:'#ddd' }}>
          <div className="row">
            <div className="col-xxl-2 col-md-2" >
              <img src="./assets/bar/3.jpg" style={{ width:'100%', height:'53vh', marginBottom:'10px' }} />
            </div>
            <div className="col-xxl-6 col-md-6" >
              <img src="./assets/bar/5.jpg" style={{ width:'100%', height:'53vh', marginBottom:'10px' }} />
            </div>
            <div className="col-xxl-2 col-md-2" >
              <img src="./assets/bar/8.jpg" style={{ width:'100%', height:'53vh', marginBottom:'10px' }} />
            </div>
            <div className="col-xxl-2 col-md-2" >
              <img src="./assets/bar/7.jpg" style={{ width:'100%', height:'53vh', marginBottom:'10px' }} />
            </div>
          </div>
    </div>

    <div className="container-fluid" style={{ padding:'30px' }}>
          <div className="row">
            <div className="col-xxl-6 col-sm-6" style={{ lineHeight:'34px', padding:'15px', fontSize:'18px', fontFamily:'OpenSansItalic' }}>
            <div align="center" className="heading-title"><b>About the Backyard Bar</b></div>
        <div>We're not your average watering hole - we're an extension of your own backyard, a place where friends gather, 
        good times flow, and the community spirit thrives. Here at The Backyard Bar, North Carolina, we're all about 
        creating a comfortable, welcoming atmosphere where everyone feels like family.<br/><br/> Our story began with a simple idea: 
        to bring folks together over delicious food, handcrafted drinks, and genuine 
        Southern hospitality. We opened our doors with a passion for creating a space that reflects the warmth and energy 
        of North Carolina. Whether you're a local resident or just passing through, we want you to feel right at home.<br/><br/>
        Our team is at the heart of The Backyard Bar experience. We've got a group of passionate folks behind the bar, in 
        the kitchen, and on the floor, all dedicated to making your visit unforgettable. Our chefs take pride in using fresh, 
        locally-sourced ingredients to create dishes that are familiar yet exciting, with a touch of Southern charm. Our 
        bartenders are experts at crafting classic cocktails and innovative new concoctions, always happy to recommend the 
        perfect drink to suit your taste.<br/><br/>
        We're more than just a bar - we're a hub for the community. We host live music nights featuring local musicians, 
        trivia nights that test your knowledge (and your luck!), and special events throughout the year that bring people 
        together. Whether you're catching up with old friends, making new ones, or simply unwinding after a long day, The 
        Backyard Bar is your place.
        </div>
            </div>
            <div className="col-xxl-6 col-sm-6" style={{  }}>
               <img src="./assets/bar/4.jpg" style={{ padding:'15px', justifyContent:'center', width:'100%', height:'auto' }} />
               <img src="./assets/bar/2.jpg" className="abt-img-display" style={{ padding:'15px', justifyContent:'center', width:'100%', height:'auto' }} />
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
          <div className="col-xxl-4 col-md-4" >
            <img src={"./assets/bar/9.jpg"} style={{ width:'100%', height:'45vh', boxShadow:'2px 2px 2px 2px #ccc', marginBottom:'25px' }} />
          </div>
          <div className="col-xxl-4 col-md-4" >
            <img src={"./assets/bar/6.jpg"} style={{ width:'100%', height:'45vh', boxShadow:'2px 2px 2px 2px #ccc', marginBottom:'25px' }} />
          </div>
          <div className="col-xxl-4 col-md-4" >
            <img src={"./assets/bar/10.jpg"} style={{ width:'100%', height:'45vh', boxShadow:'2px 2px 2px 2px #ccc', marginBottom:'25px' }} />
          </div>
          <div className="col-xxl-4 col-md-4" >
            <img src={"./assets/bar/11.jpg"} style={{ width:'100%', height:'45vh', boxShadow:'2px 2px 2px 2px #ccc', marginBottom:'25px' }} />
          </div>
          <div className="col-xxl-4 col-md-4" >
            <img src={"./assets/bar/12.jpg"} style={{ width:'100%', height:'45vh', boxShadow:'2px 2px 2px 2px #ccc', marginBottom:'25px' }} />
          </div>
          <div className="col-xxl-4 col-md-4" >
            <img src={"./assets/bar/13.jpg"} style={{ width:'100%', height:'45vh', boxShadow:'2px 2px 2px 2px #ccc', marginBottom:'25px' }} />
          </div>
      </div>     
    </div>

    <Contact />


 </div>
 </>);
};

export default Welcome;