import React from "react";
import { useParams  } from "react-router-dom";
import { ContainerFluid, Row, Col, Card, Icon } from "e-ui-react";
import { AppColors } from "@Utils/AppColorManager.js";

const BeginnersRoadMap = () =>{
 const { lang } = useParams();
 const data = [{
                    "icon":"fa-globe",
                    "colorPalette":"danger",
                    "en_title":"Understand UPSC",
                    "en_desc":"Learn what UPSC is and why it matters"
                },{
                    "icon":"fa-users",
                    "colorPalette":"primary",
                    "en_title":"Explore UPSC Groups",
                    "en_desc":"Discover various examination categories"
                },{
                    "icon":"fa-list-ul",
                    "colorPalette":"purple",
                    "en_title":"Choosing an Examination",
                    "en_desc":"Find exams matching qualifications & interests"
                },{
                    "icon":"fa-briefcase",
                    "colorPalette":"yellow",
                    "en_title":"Understand Services",
                    "en_desc":"Learn about IAS, IPS, IFS, IRS, etc."
                },{
                    "icon":"fa-id-card-o",
                    "colorPalette":"success",
                    "en_title":"Check Eligibility",
                    "en_desc":"Verify age, education, attempts, nationality"
                },{
                    "icon":"fa-sliders",
                    "colorPalette":"danger",
                    "en_title":"Understand Selection Process",
                    "en_desc":"Prelims | Mains | Interview | Selection"
                },{
                    "icon":"fa-book",
                    "colorPalette":"success",
                    "en_title":"Study the Syllabus",
                    "en_desc":"Understand subjects and exam structure"
                },{
                    "icon":"fa-calendar",
                    "colorPalette":"yellow",
                    "en_title":"Create a Preparation Plan",
                    "en_desc":"Build a study schedule and strategy"
                },{
                    "icon":"fa-line-chart",
                    "colorPalette":"primary",
                    "en_title":"Practice & Mock Tests",
                    "en_desc":"Solve Previous Papers, Evaluate performance"
                },{
                    "icon":"fa-pencil-square-o",
                    "colorPalette":"danger",
                    "en_title":"Appear for Examination",
                    "en_desc":"Complete application and take the exam"
                },{
                    "icon":"fa-comments-o",
                    "colorPalette":"primary",
                    "en_title":"Personality Test / Interview",
                    "en_desc":"Develop communication and decision-making skills"
                },{
                    "icon":"fa-institution",
                    "colorPalette":"success",
                    "en_title":"Final Selection & Service Allocation",
                    "en_desc":"Begin a career in public Service"
                }];
 const BeginnerDetails = ({ data }) =>{
    const colorPalette =  AppColors?.["primary"];
    return (data?.map((d,i)=>{
        const colorP = AppColors?.[d?.colorPalette];
        return (<Col md={2}>
            <div>
                <div align="center" style={{ position:'absolute', width:'25px', height:'25px',
                     backgroundColor:colorPalette?.["bg-dark"], color:colorPalette?.["color-dark"], 
                     borderRadius:'50%', zIndex:1 }}>
                    <b>{i+1}</b>
                </div>
                <div style={{ padding:'5px', marginBottom:'15px' }}>
                    <Card padding={15}>
                        <div align="center" style={{ height:'30vh' }}>
                            <div>
                                <Icon type="FontAwesome" name={d?.icon} size={48} color={colorP?.["bg-dark"]}
                                style={{ padding:'15px', backgroundColor: colorP?.["bg-light"], borderRadius:'50%' }}
                                />
                            </div>
                            <div className="mtop15p"><h5><b>{d?.[lang+"_title"]}</b></h5></div>
                            <div className="fs14p">{d?.[lang+"_desc"]}</div>
                        </div>
                    </Card>
                </div>
            </div>
        </Col>);
    }));
 };
 return (<div style={{ backgroundColor:'#e5e5e5', paddingTop:'45px', paddingBottom:'45px' }}>
    <ContainerFluid>
        <Row>
            <Col md={12}>
                <div align="center">
                    <h1><b>UPSC Beginner's Roadmap</b></h1>
                    <span>Follow this step-by-step path to understand UPSC examinations, choose the 
                        right career path, and begin your preparation journey with confidence
                    </span>
                </div>
            </Col>
        </Row>
        <Row className="mtop15p">
            <BeginnerDetails data={data} />
        </Row>
    </ContainerFluid>
 </div>);
};

export default BeginnersRoadMap;