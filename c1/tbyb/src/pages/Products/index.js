import React, { useState, useEffect } from "react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import { ContainerFluid, Row, Col, Card, Switch, Button, Select, Icon, Menu } from "e-ui-react";
import Contact from './../Home/Components/Contact/index.js';
import Footer from '@Templates/Footer/index.js';
import './index.css';

const Products = () =>{
 const MenuContainer = ({ title, data, bgColor}) =>{
  return (<div style={{ marginBottom:'25px' }}>
  <Card padding={15} backgroundColor={bgColor}>
    <div align="center" className="subheading-title"><b>{title} ({data?.length})</b></div>
    <div>
        {data?.map((d,i)=>{
          let styles = {  borderBottom:'1px dashed #ccc', padding:'15px', fontSize:'16px', 
            textTransform:'uppercase' };
          if(i===0){ styles = {...styles, borderTop:'1px dashed #ccc'  }}
          return (<div style={styles}><b>{d}</b></div>);
        })}
    </div>
  </Card>
  </div>);
 };
 const MenuContainer2 = ({ bgColor, title, data}) =>{
  return (<div style={{ marginBottom:'25px' }}>
  <Card padding={15} backgroundColor={bgColor}>
    <div align="center" className="subheading-title"><b>{title} ({data?.length})</b></div>
    <Row>
        {data?.map((d,i)=>{
          let styles = {  borderBottom:'1px dashed #ccc', padding:'15px', fontSize:'16px', 
            textTransform:'uppercase' };
          if(i===0 || i===1){ styles = {...styles, borderTop:'1px dashed #ccc'  }}
          return (<Col md={6} style={styles}><b>{d}</b></Col>);
        })}
    </Row>
  </Card>
  </div>);
 };
 return (<>
 <div style={{ position:'absolute', top:'40px' }}>
    <img src={"./assets/images/logo.png"} style={{ padding:'5px', width:'100px', height:'auto' }} />
 </div>
 <Header menulinks={HeaderMenu} activeId="FoodAndBeverages" />
 <div style={{ marginBottom:'45px' }}>
 <ContainerFluid>
  <Row>
    <Col xxl={12} xl={12}>
    <div align="center" className="heading-title"><b>Beverages</b></div>
    </Col>
  </Row>
  <Row>
    <Col xxl={3} xl={3}>
      <MenuContainer bgColor="#f0f6ff" title="Beers" 
        data={["BUD LIGHT BTL","BUDWEISER","COORS LIGHT BTL","CORONA EXTRA", "DOS EQUIS AMBER", 
          "DOS EQUIS LAGER","FAT TIRE BTL", "GOOSE ISLAND IPA", "HEINEKEN", "KINGFISHER", "LINE SUMMER SHANDY CAN", 
          "LINE SUMMER SHANDY BTL","MICHELOB ULTRA BTL", "MICHELOB ULTRA CAN", "MILLER LITE", "MODELO ESPECIAL BTL", 
          "MODELO ESPECIAL CAN", "NATURAL LIGHT", "PBR", "STELLA", "STELLA ZERO", "TAJ MAHAL", "TRULY VARIETY", "TWISTED TEA", 
          "VD RANGER", "YUENGLING BTL"]} />
      <MenuContainer bgColor="#fcebff" title="Draft" 
        data={["BLUE MOON","BUD LIGHT","FH BLONDE","GUINNESS","HOPPYUM","HW MARGARITA SOUR",
          "LANDSHARK","LIL THING HAZY IPA","MANGO CART","NoDa DROP & ROLL IPA","PAYCHECK","PERNICIOUS","RED OAK AMBER",
          "SAM ADAMS OCT","STEM CIDER HIBISCUS","SUMMER ALE","WICKED WEEK PILSNER","YUENGLING"]} />
      <MenuContainer bgColor="#faffc4" title="Soda & Juice" 
        data={["BOTTLED WATER","COKE","COKE DIET","COKE ZERO","CRANBERRY",
          "GINGER ALE","GINGER BEER","GRAPE FRUIT","LEMONADE","ORANGE","PINEAPPLE","RED BULL","RED BULL SUGAR FREE",
          "SPRITE","TONIC"]} />
      <MenuContainer  bgColor="#f0f6ff" title="Misc" data={["TBB STICKER","T SHIRT"]} />
    </Col>
    <Col xxl={3} xl={3}>
        <MenuContainer bgColor="#faffc4" title="CockTail" 
         data={["BLUEBERRY SPRITZER","PASSION PARADISE","SPICY MINT MANGO",
            "THE CHASSY DEVIL HOUSE SPL","AMARETTO SOUR","BABY GUINNESS","BAHAMA MAMA","BAY BREEZE","BLOODY MARY",
            "BLUE MOTORCYCLE","CHERRY LIMEADE","CHOCOLATE MARTINI","COSMOPOLITAN","ESPRESSO MARTINI","GIN RICKEY","GRASSHOPPER",
            "GREYHOUND","IRISH MULE","KAMIKAZE","KENTUCKY MULE","KOOLAID", "LIQUID MARIJUANA", "LONG ISLAND ICED TEA", "MANHATTAN",
            "MARGARITA","MARTINI GIN","MARTINI VODKA","MOJITO","MOSCOW MULE","OLD FASHIONED","ORANGE CRUSH","ROYAL FLUSH",
            "RUM PUNCH","RUM RUNNER","SALTY DOG","SCREWDRIVER","SEX ON THE BEACH","STRAWBERRY CHEESECAKE","TEQUILA MARGARITA",
            "TEQUILA SUNRISE","WASHINGTON APPLE", "WHISKEY SOUR", "BLUEBERRY LEMONADE", "FIZZZY BASIL LEMONADE"]} />
        <MenuContainer bgColor="#f0f6ff" title="Shots" 
          data={["CARAMEL CHEESE CAKE","CHOCOLATE CAKE","FROSTED ANIMAL CRACKER","GREEN TEA",
            "JAGER BOMB","JAILLO SHOTS","LEMON DROP","WHITE TEA","JAGER"
        ]} />
        <MenuContainer bgColor="#b393b91a" title="Wine" 
          data={["CABERNET","CHARDONNAY","MERLOT","PINOT GRIOGO","PINOT NOIR","PROSECCO",
            "RIESLING","SAUVIGNON BLANC","ROSE","MOSCATO"]} />
    </Col>
    <Col xxl={6} xl={6}>
       <MenuContainer2 bgColor="#fcebff" title="SPIRITS" 
        data={["ANGELS ENVY","ANGELS ENVY- DBL","ARISTOCRAT","ARISTOCRAT- DBL", "BULLEIT BOURBON",
          "BULLEIT BOURBON- DBL","BULLEIT RYE","BULLEIT RYE- DBL","CROWN ROYAL","CROWN ROYAL APPLE","CROWN ROYAL APPLE- DBL",
          "CROWN ROYAL- DBL","EVAN WILLIAMNS","EVAN WILLIAMNS- DBL","FOUR ROSES","FOUR ROSES- DBL","JACK DANIEL","JACK DANIEL- DBL",
          "JACK HONEY","JACK HONEY- DBL","JAMESON","JAMESON- DBL","JIM BEAM RED STAG","JIM BEAM RED STAG- DBL","JIM BEAM WHITE LABEL",
          "JIM BEAM WHITE LABEL- DBL","JW BLACK","JW BLACK- DBL","KNOB CREEK","KNOB CREEK- DBL","MAKERS MARK","MAKERS MARK- DBL",
          "TEN HIGH","TEN HIGH- DBL","WOODFORD RESERVE","WOODFORD RESERVE- DBL","HENNESSY VS", "HENNESSY VS- DBL","ARISTOCRAT",
          "ARISTOCRAT- DBL","BOMBAY","BOMBAY- DBL","HENDRICKS","HENDRICKS- DBL","AMARETTO","APPLE PUCKER","ARROW RASPBERRY",
          "BAILEYS","BLUE CURACAO","BUTTERSCOTCH SCHNAPPS","CHAMBORD ROYALE","CREME DE COCO","FRANGELICO","GRAND MARNIER CORDON ROUGE",
          "KAHLUA","MIDORI","MOZART WHITE CHOCOLATE","PEACH SCHNAPPS","TRIPLE SEC","ARISTOCRAT","ARISTOCRAT- DBL","BACARDI","BACARDI- DBL",
          "CAPTAIN MORGAN","CAPTAIN MORGAN- DBL","MALIBU","MALIBU- DBL","MYERS","MYERS- DBL","RUMCHATA","RUMCHATA- DBL","DEWARS",
          "DEWARS- DBL","GLENFIDDICH 12Y","GLENFIDDICH 12Y- DBL","GLENFIDDICH 14Y","GLENFIDDICH 14Y- DBL","GLENLIVET 12Y",
          "GLENLIVET 12Y- DBL","GLENLIVET 14Y","GLENLIVET 14Y- DBL","LAPHROAIG 10Y","LAPHROAIG 10Y- DBL","MACALLAN 12",
          "MACALLAN 12- DBL","OBAN 14Y","OBAN 14Y- DBL","ARISTOCRAT","ARISTOCRAT- DBL","CAS AMIGO BLA","CAS AMIGO BLA -DBL",
          "CAS AMIGOS REP","CAS AMIGOS REP- DBL","DON JULIO","DON JULIO- DBL","HORNITOS","HORNITOS- DBL","LUNAZUL BLA",
          "LUNAZUL BLA- DBL","PATRON SILVER","PATRON SILVER- DBL","PATRON XO CAFE","PATRON XO CAFE- DBL","ABSOLUT","ABSOLUT CITRON",
          "ABSOLUT CITRON- DBL","ABSOLUT- DBL","ARISTOCRAT","ARISTOCRAT- DBL","BELVEDERE","BELVEDERE- DBL","GREY GOOSE","GREY GOOSE- DBL",
          "SMIRNOFF WHIP","SMIRNOFF WHIP- DBL","TITOS","TITOS- DBL"
       ]} />
       <Row>
        <Col xxl={6} xl={6}> 
          <MenuContainer bgColor="#ecfdff" title="Snacks" data={["CHIPS","PRETZEL","PICKLES","CHARCUTERIE"]} />
        </Col>
        <Col xxl={6} xl={6}>
          <MenuContainer bgColor="#b393b91a" title="Cider" data={["TRULY VARIETY"]} />
         
        </Col>
       </Row>
    </Col>
  </Row>
 </ContainerFluid>
 </div>
 {/*
 <div className="container-fluid" style={{ marginTop:'15px', marginBottom:'15px' }}>
  <div className="row">
    <div className="col-xxl-12 col-xl-12">
      <div align="center" className="heading-title"><b>Beverages</b></div>
    </div>
  </div>
  <div className="row">
    <div className="col-xxl-4 col-xl-4">

      <div style={{ lineHeight:'34px', padding:'15px', fontSize:'18px', fontFamily:'OpenSansItalic' }}>
            <div><b>CLASSIC COCKTAILS</b></div>
            <div>
              <ul>
                <li className="mtop15p">
                  <div>Chocolate Martini <span className="pull-right"></span></div>
                </li>
                <li className="mtop15p">
                  <div>Gin Rickey <span className="pull-right"></span></div>
                </li>
                <li className="mtop15p">
                  <div>Rum Runner <span className="pull-right"></span></div>
                </li>
                <li className="mtop15p">
                  <div>Classic Margarita <span className="pull-right"></span></div>
                </li>
                <li className="mtop15p">
                  <div>Old Fashioned <span className="pull-right"></span></div>
                </li>
              </ul>
            </div>
          </div>

          <div style={{ lineHeight:'34px', padding:'15px', fontSize:'18px', fontFamily:'OpenSansItalic' }}>
            <div><b>SPECIALITY COCKTAILS</b></div>
            <div><b>(Can be made zero proof)</b></div>
            <div>
              <ul>
                <li className="mtop15p">
                  <div>Sweet Pepper Spritzer <span className="pull-right"></span></div>
                </li>
                <li className="mtop15p">
                  <div>Spicy Mint Mango <span className="pull-right"></span></div>
                </li>
                <li className="mtop15p">
                  <div>Blueberry Spritzer <span className="pull-right"></span></div>
                </li>
                <li className="mtop15p">
                  <div>Fizzy Basil Lemonade <span className="pull-right"></span></div>
                </li>
                <li className="mtop15p">
                  <div>The Chasi Devil (House Special) <span className="pull-right"></span></div>
                </li>
              </ul>
            </div>
          </div>

    </div>
    <div className="col-xxl-4 col-xl-4">

      <img src="./assets/bar/14.jpg" style={{ borderRadius:'8px' }} />
      <div className="row">
        <div className="col-xxl-6 col-xl-6" style={{ padding:'15px' }}>
          <img src="./assets/bar/7.jpg" className="tbyb-gallery-fb" /> 
        </div>
        <div className="col-xxl-6 col-xl-6" style={{ padding:'15px' }}>
          <img src="./assets/bar/8.jpg" className="tbyb-gallery-fb" /> 
        </div>
      </div>
      <div className="row">
        <div className="col-xxl-6 col-xl-6" style={{ padding:'15px' }}>
          <img src="./assets/bar/15.jpg" className="tbyb-gallery-fb" /> 
        </div>
        <div className="col-xxl-6 col-xl-6" style={{ padding:'15px' }}>
          <img src="./assets/bar/16.jpg" className="tbyb-gallery-fb" /> 
        </div>
      </div>

    </div>
    <div className="col-xxl-4 col-xl-4">

    <div style={{ lineHeight:'34px', padding:'15px', fontSize:'18px', fontFamily:'OpenSansItalic' }}>
            <div><b>DRAFT</b></div>
            <div>
              <ul>
                <li className="mtop15p">
                  <div>Guinness <span className="pull-right"></span></div>
                </li>
                <li className="mtop15p">
                  <div>Pernicious <span className="pull-right"></span></div>
                </li>
                <li className="mtop15p">
                  <div>NoDa Drop & Roll <span className="pull-right"></span></div>
                </li>
                <li className="mtop15p">
                  <div>Hoppyum IPA <span className="pull-right"></span></div>
                </li>
                <li className="mtop15p">
                  <div>Sam Adams Summer Ale <span className="pull-right"></span></div>
                </li>
                <li className="mtop15p">
                  <div>Bluemoon <span className="pull-right"></span></div>
                </li>
                <li className="mtop15p">
                  <div>Bud Light <span className="pull-right"></span></div>
                </li>
                <li className="mtop15p">
                  <div>Yuengling <span className="pull-right"></span></div>
                </li>
                <li className="mtop15p">
                  <div>Landshark <span className="pull-right"></span></div>
                </li>
                <li className="mtop15p">
                  <div>Red Oak <span className="pull-right"></span></div>
                </li>
                <li className="mtop15p">
                  <div>Carolina Blond Ale <span className="pull-right"></span></div>
                </li>
                <li className="mtop15p">
                  <div>Hi Wire Margarita Sour <span className="pull-right"></span></div>
                </li>
                <li className="mtop15p">
                  <div>Stem Cider Hibiscus <span className="pull-right"></span></div>
                </li>
              </ul>
            </div>
          </div>

    </div>
  </div>

 </div>
 */}
 
 {/*<div style={{ margin:'15px' }}>
  <ContainerFluid>
    <Title name="Zebra Shades Blind Systems" />
    <Images list={["zebra_1.jpg","zebra_2.jpg","zebra_3.jpg","zebra_4.jpg","zebra_5.jpg","zebra_6.jpg","zebra_7.jpg","zebra_8.jpg"]}/>
    <Title name="Roller Shades Blind Systems" />
    <Images list={["roller_1.jpg","roller_2.jpg","roller_3.jpg","roller_4.jpg","roller_5.jpg","roller_6.jpg","roller_7.jpg","roller_8.jpg"]}/>
  </ContainerFluid>
 </div>*/}
 <Contact />
 <Footer />
 </>);
};

export default Products;