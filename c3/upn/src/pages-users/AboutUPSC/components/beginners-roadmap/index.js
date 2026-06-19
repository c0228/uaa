import React, { useEffect } from "react";
import { useParams  } from "react-router-dom";
import { ContainerFluid, Row, Col, Card, Icon } from "e-ui-react";
import { AppColors } from "@Utils/AppColorManager.js";
import { getDeviceType } from "@Utils/DeviceLayoutManager.js";
import './index.css';

const BeginnersRoadMap = () =>{
 const deviceType = getDeviceType();
 const { lang } = useParams();
 const data = [{
                    "icon":"fa-globe",
                    "colorPalette":"danger",
                    "en_title":"Understand UPSC",
                    "en_desc":"Learn what UPSC is and why it matters",
                    "hi_title":"यूपीएससी को समझें",
                    "hi_desc":"जानें कि यूपीएससी क्या है और यह क्यों महत्वपूर्ण है।"
                },{
                    "icon":"fa-users",
                    "colorPalette":"primary",
                    "en_title":"Explore UPSC Groups",
                    "en_desc":"Discover various examination categories",
                    "hi_title":"यूपीएससी ग्रुप्स देखें",
                    "hi_desc":"परीक्षा की विभिन्न श्रेणियों के बारे में जानें"
                },{
                    "icon":"fa-list-ul",
                    "colorPalette":"purple",
                    "en_title":"Choosing an Examination",
                    "en_desc":"Find exams matching qualifications & interests",
                    "hi_title":"परीक्षा चुनना",
                    "hi_desc":"अपनी योग्यता और रुचियों के अनुसार परीक्षाएँ खोजें"
                },{
                    "icon":"fa-briefcase",
                    "colorPalette":"yellow",
                    "en_title":"Understand Services",
                    "en_desc":"Learn about IAS, IPS, IFS, IRS, etc.",
                    "hi_title":"सेवाओं को समझें",
                    "hi_desc":"आई.ए.एस, आई.पी.एस, भारतीय विदेश सेवा, आई.आर.एस आदि के बारे में जानें।"
                },{
                    "icon":"fa-id-card-o",
                    "colorPalette":"success",
                    "en_title":"Check Eligibility",
                    "en_desc":"Verify age, education, attempts, nationality",
                    "hi_title":"योग्यता की जाँच करें",
                    "hi_desc":"उम्र, शिक्षा, प्रयासों की संख्या और राष्ट्रीयता की पुष्टि करें।"
                },{
                    "icon":"fa-sliders",
                    "colorPalette":"danger",
                    "en_title":"Understand Selection Process",
                    "en_desc":"Prelims | Mains | Interview | Selection",
                    "hi_title":"चयन प्रक्रिया को समझें",
                    "hi_desc":"प्रारंभिक परीक्षा | मुख्य परीक्षा | साक्षात्कार | चयन"
                },{
                    "icon":"fa-book",
                    "colorPalette":"success",
                    "en_title":"Study the Syllabus",
                    "en_desc":"Understand subjects and exam structure",
                    "hi_title":"सिलेबस का अध्ययन करें",
                    "hi_desc":"विषयों और परीक्षा के ढांचे को समझें"
                },{
                    "icon":"fa-calendar",
                    "colorPalette":"yellow",
                    "en_title":"Create a Preparation Plan",
                    "en_desc":"Build a study schedule and strategy",
                    "hi_title":"तैयारी की योजना बनाएं",
                    "hi_desc":"पढ़ाई का शेड्यूल और रणनीति बनाएं।"
                },{
                    "icon":"fa-line-chart",
                    "colorPalette":"primary",
                    "en_title":"Practice & Mock Tests",
                    "en_desc":"Solve Previous Papers, Evaluate performance",
                    "hi_title":"अभ्यास और मॉक टेस्ट",
                    "hi_desc":"पिछले वर्षों के प्रश्न-पत्र हल करें, अपने प्रदर्शन का मूल्यांकन करें।"
                },{
                    "icon":"fa-pencil-square-o",
                    "colorPalette":"danger",
                    "en_title":"Appear for Examination",
                    "en_desc":"Complete application and take the exam",
                    "hi_title":"परीक्षा में शामिल हों",
                    "hi_desc":"आवेदन पूरा करें और परीक्षा दें।"
                },{
                    "icon":"fa-comments-o",
                    "colorPalette":"primary",
                    "en_title":"Personality Test / Interview",
                    "en_desc":"Develop communication and decision-making skills",
                    "hi_title":"व्यक्तित्व परीक्षण / साक्षात्कार",
                    "hi_desc":"बातचीत और फ़ैसला लेने की क्षमताएँ विकसित करें।"
                },{
                    "icon":"fa-institution",
                    "colorPalette":"success",
                    "en_title":"Final Selection & Service Allocation",
                    "en_desc":"Begin a career in public Service",
                    "hi_title":"अंतिम चयन और सेवा आवंटन",
                    "hi_desc":"जनसेवा में अपना करियर शुरू करें"
                }];
 const BeginnerDetails = ({ data }) =>{
    const colorPalette =  AppColors?.["primary"];
    return (data?.map((d,i)=>{
        const colorP = AppColors?.[d?.colorPalette];
        return (<Col md={(deviceType==='DESKTOP')?2:3}>
            <div>
                <div align="center" style={{ position:'absolute', width:'25px', height:'25px',
                     backgroundColor:colorPalette?.["bg-dark"], color:colorPalette?.["color-dark"], 
                     borderRadius:'50%', zIndex:1 }}>
                    <b>{i+1}</b>
                </div>
                <div style={{ padding:'5px', marginBottom:'15px' }}>
                    <Card padding={15}>
                        <div align="center" className="about-beginners-roadmap-card">
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
                    <h1><b>{lang==='hi'?`यूपीएससी की शुरुआत करने वालों के लिए रोडमैप`:`UPSC Beginner's Roadmap`}</b></h1>
                    <span>
                        {lang==='hi'?`यूपीएससी परीक्षाओं को समझने, सही करियर चुनने और पूरे आत्मविश्वास के साथ अपनी 
                        तैयारी शुरू करने के लिए इस स्टेप-बाय-स्टेप तरीके को अपनाएं।`:`Follow this step-by-step path to 
                        understand UPSC examinations, choose the right career path, and begin your preparation 
                        journey with confidence`}
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