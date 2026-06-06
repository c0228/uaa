import React, { useState, useEffect } from "react";
import { ContainerFluid, Row, Col, Menu, Card, Button } from "e-ui-react";

const CURRENT_AFFAIRS_CATEGORIES = {
    "Art and Culture": ["Ancient India","Medieval India","Modern Indian Culture","Architecture","Sculpture","Paintings","Dance Forms","Music","Theatre","Literature",
        "Festivals","Fairs","UNESCO Heritage","GI Tags","Cultural Institutions"],
    "Ethics and Society": ["Ethical Issues","Human Values","Integrity","Aptitude","Probity in Governance","Accountability","Transparency","Emotional Intelligence",
        "Civil Service Values","Case Studies","Social Issues","Gender Issues","Communal Harmony","Social Capital","Role Models"],
    "Geography": ["Physical Geography","Indian Geography","World Geography","Geomorphology","Climatology","Oceanography","Rivers","Mountains","Natural Resources",
        "Minerals","Agricultural Geography","Population Geography","Urbanization","Mapping and Places in News","Geographical Phenomena"],
    "Polity and Governance":["Governance","Public Administration","E-Governance","Citizen Charters","Transparency and Accountability","Electoral Reforms","Federalism",
        "Local Governance","Public Policy","Civil Services"],
    "Constitution": ["Fundamental Rights","Directive Principles","Fundamental Duties","Constitutional Amendments","Constitutional Bodies","Non-Constitutional Bodies",
        "Centre-State Relations","Emergency Provisions","Schedules","Constitutional Developments"],
    "Parliament and Legislation": ["Parliament Sessions","Bills","Acts","Committees","Legislative Reforms","Private Member Bills","Ordinances","Parliamentary Procedures",
        "Election Laws","Important Debates"],
    "Judiciary": ["Supreme Court","High Courts","Tribunals","Judicial Reforms","Important Judgments","Judicial Appointments","Constitutional Interpretation",
        "Public Interest Litigation","Legal Developments","Access to Justice"],
    "Social Justice": ["Women","Children","SC/ST","OBC","Minorities","Senior Citizens","Persons with Disabilities","Poverty and Inequality","Nutrition","Social Welfare"],
    "Government Schemes": ["Central Sector Schemes","Centrally Sponsored Schemes","Flagship Programmes","Welfare Schemes","Rural Development","Urban Development",
        "Skill Development","Digital India","Financial Inclusion","Housing Schemes"],
    "Economy": ["GDP","Inflation","Budget","Economic Survey","Fiscal Policy","Monetary Policy","Taxation","Employment","Trade","Economic Reforms"],
    "Banking and Finance": ["RBI","Commercial Banks","Digital Payments","UPI","Financial Markets","Insurance","NBFCs","Financial Inclusion","Capital Markets","FinTech"],
    "Agriculture": ["Crop Production","MSP","Agricultural Reforms","Irrigation","Food Processing","Organic Farming","Agricultural Exports","Agri-Tech","Livestock","Fisheries"],
    "International Relations": ["Bilateral Relations","Multilateral Relations","Neighbourhood Policy","Act East Policy","Indo-Pacific","Strategic Partnerships",
        "Diplomatic Visits","Global Summits","Treaties and Agreements","Diaspora Affairs"],
    "International Organizations": ["United Nations","World Bank","IMF","WTO","WHO","BRICS","G20","SCO","ASEAN","Regional Organizations"],
    "Security and Defence": ["Defence Exercises","Defence Procurement","Armed Forces","Military Technology","Defence Agreements","Border Security","Maritime Security",
        "Cyber Security","Strategic Affairs","National Security"],
    "Internal Security": ["Terrorism","Insurgency","Left Wing Extremism","Cyber Crime","Border Management","Organized Crime","Drug Trafficking","Money Laundering",
        "Intelligence Agencies","Security Challenges"],
    "Science and Technology": ["Emerging Technologies","Artificial Intelligence","Quantum Computing","Biotechnology","Nanotechnology","Robotics","Semiconductors",
        "Research and Innovation","Digital Technology","Scientific Discoveries"],
    "Space and Astronomy": ["ISRO Missions","Space Exploration","Satellites","Launch Vehicles","International Space Missions","Space Technology","Astronomy Discoveries",
        "Planetary Science","Space Policy","Commercial Space Sector"],
    "Environment and Ecology": ["Biodiversity","Protected Areas","Wildlife Conservation","Forests","Pollution","Environmental Governance","Conservation Initiatives",
        "Species in News","Ecological Restoration","Environmental Reports"],
    "Climate Change": ["UNFCCC","COP Meetings","Carbon Emissions","Net Zero","Renewable Energy","Climate Finance","Adaptation","Mitigation","Climate Reports",
        "Global Climate Initiatives"],
    "Disaster Management": ["NDMA","Natural Disasters","Cyclones","Floods","Earthquakes","Heat Waves","Disaster Preparedness","Disaster Response",
        "Early Warning Systems","Resilience Building"],
    "Health": ["Public Health","Disease Outbreaks","Vaccination","Healthcare Schemes","Medical Research","Nutrition","Mental Health",
        "Health Infrastructure","Health Reports","WHO Initiatives"],
    "Education": ["National Education Policy","School Education","Higher Education","Skill Development","Digital Education","Educational Reforms",
        "Research Institutions","Literacy","Examinations","Education Reports"],
    "Reports and Indices": ["Government Reports","Economic Reports","Environmental Reports","Health Reports","Education Reports","International Reports",
        "Global Indices","India Rankings","NITI Aayog Reports","UN Reports","World Bank Reports","IMF Reports","Think Tank Reports","Survey Findings",
        "Statistical Publications"],
    "Awards, Persons and Obituaries": ["National Awards","International Awards","Civilian Awards","Sports Awards","Science Awards","Literary Awards",
        "Important Personalities","Appointments","Resignations","Obituaries","Sports Personalities","Scientists","Artists & Authors","Political Leaders","Global Leaders"]
 };

const SearchByCategories = ({ category, subCategory}) =>{
 const [activeCategory, setActiveCategory] = useState();
 const [activeSubCategory, setActiveSubCategory] = useState();

 useEffect(()=>{
    if(category){
        setActiveCategory(toTitleCase(category));
    } else {
        setActiveCategory('Art and Culture');
    }
 },[]);

  useEffect(()=>{
    if(subCategory) {
        setActiveSubCategory(toTitleCase(subCategory));
    } else {
        setActiveSubCategory(CURRENT_AFFAIRS_CATEGORIES?.[activeCategory]?.[0]);
    }
 },[activeCategory]);

 const selectCategoryHandler = (categoryName) =>{
    setActiveCategory(categoryName);
 };

 const toTitleCase = (slug) => {
  return slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
 };

 const DisplayCategoryList = ({ data }) =>{
    const k = Object.keys(data);
    return (<div className="mtop5p">
     <Card padding={5} backgroundColor="#e1f2ff">
        {k?.map((d,i)=>{
            return (<div key={i} className={(activeCategory===d)?"main-dca-category-item main-dca-category-item-active":"main-dca-category-item"} 
                onClick={()=>selectCategoryHandler(d)}>
                <span>{d}</span>
            </div>);
        })}
     </Card>
    </div>);
 };
 return (<div className="mtop15p">
    <ContainerFluid>
      <Row>
         <Col md={3}>
            <div><h2><b>Categories</b></h2></div>
            <DisplayCategoryList data={CURRENT_AFFAIRS_CATEGORIES} />
         </Col>
         <Col md={9}>
            {CURRENT_AFFAIRS_CATEGORIES[activeCategory]?.map((d,i)=>{
                return (<span key={i} className="d-inline-block m-1">
                    <Button type={(activeSubCategory===d)?"primary":"outline-primary"} size={11}><b>{d}</b></Button>
                </span>);
            })}
         </Col>
      </Row>
   </ContainerFluid>
 </div>);
};

export default SearchByCategories;