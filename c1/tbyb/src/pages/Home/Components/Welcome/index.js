import React from "react";
import { Row, Col } from "e-ui-react";
import './index.css';

const Welcome = ()=>{
 return (<>
  <div>
    <div align="center" style={{ paddingLeft:'15px', paddingRight:'15px', paddingBottom:'8px' }}>
      <span className="welcome-title desktop-view" style={{ paddingLeft:'10px', paddingRight:'30px', fontSize:'40px', fontFamily:'BebasNeue', letterSpacing:'4px', color:'#000' }}>
        <b>Welcome to the Backyard bar - North Carolina, USA</b>
      </span>
      <div className="welcome-title mobile-view" style={{ paddingLeft:'10px', paddingRight:'30px', fontSize:'40px', fontFamily:'BebasNeue', letterSpacing:'4px', color:'#000' }}>
        <b>Welcome to the Backyard bar - North Carolina, USA</b>
      </div>
    </div>

    <div className="container-fluid" style={{ paddingTop:'15px', paddingBottom:'15px', backgroundColor:'#ddd' }}>
          <div className="row">
            <div className="col-xxl-3 col-md-3" >
              <img src="./assets/site/1.jpg" style={{ width:'100%', height:'auto' }} />
            </div>
            <div className="col-xxl-3 col-md-3" >
              <img src="./assets/site/2.jpg" style={{ width:'100%', height:'auto' }} />
              <img src="./assets/site/3.png" style={{ marginTop:'24px', width:'100%', height:'auto' }} />
            </div>
            <div className="col-xxl-3 col-md-3" >
              <img src="./assets/site/1.jpg" style={{ width:'100%', height:'auto' }} />
            </div>
            <div className="col-xxl-3 col-md-3" >
              <img src="./assets/site/2.jpg" style={{ width:'100%', height:'auto' }} />
              <img src="./assets/site/3.png" style={{ marginTop:'24px', width:'100%', height:'auto' }} />
            </div>
            
          </div>
    </div>
    <div className="container-fluid" style={{ paddingTop:'15px' }}>
          <div className="row">
            <div className="col-xxl-6 col-sm-6" style={{ padding:'15px' }}>
            </div>
            <div className="col-xxl-6 col-sm-6" style={{ lineHeight:'34px', padding:'15px', fontSize:'18px', fontFamily:'OpenSansItalic' }}>
        We're not your average watering hole - we're an extension of your own backyard, a place where friends gather, 
        good times flow, and the community spirit thrives. Here at The Backyard Bar, North Carolina, we're all about 
        creating a comfortable, welcoming atmosphere where everyone feels like family.<br/><br/>
        Our story began with a simple idea: to bring folks together over delicious food, handcrafted drinks, and genuine 
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
        Backyard Bar is your place.<br/><br/>
        So come on down, pull up a stool, and experience the Backyard Bar difference. We can't wait to welcome you to our 
        North Carolina family!
        </div>
      </div>
    </div>
   
 </div>
 </>);
};

export default Welcome;