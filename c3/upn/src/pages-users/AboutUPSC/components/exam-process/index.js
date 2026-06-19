import React from "react";
import { useParams  } from "react-router-dom";
import { ContainerFluid, Row, Col, Card, Icon } from "e-ui-react";
import { AppColors } from "@Utils/AppColorManager.js";

const ExamProcess = () =>{
 const { lang } = useParams();
 return (<div className="mtop15p" style={{ backgroundColor:'#f8ffb2' }}>
 <ContainerFluid>
    <Row><Col md={12}>
 <div style={{ marginTop:'45px', marginBottom:'45px' }}>
    <div align="center">
        <div><h3><b>{lang==='hi'?`यूपीएससी की आम चयन प्रक्रिया`:`Typical UPSC Selection Process`}</b></h3></div>
        <div>
            {lang===`hi`?`हालांकि हर परीक्षा के लिए सटीक प्रक्रिया अलग-अलग होती है, लेकिन यूपीएससी की कई परीक्षाओं 
            में कई चरणों वाली चयन प्रक्रिया अपनाई जाती है:`:`Although the exact process varies by examination, 
            many UPSC exams follow a multi-stage selection system:`}
        </div>
    </div>
    <Row className="mtop15p mbot15p">
        {[{
            "icon":"fa-file-text-o",
            "colorPalette":"primary",
            "en_label":"Preliminary Examination",
            "en_desc":"A screening stage that tests basic knowledge and aptitude.",
            "hi_label":"प्रारंभिक परीक्षा",
            "hi_desc":"एक स्क्रीनिंग चरण जो बुनियादी ज्ञान और योग्यता की जाँच करता है।"
        },{
            "icon": "fa-book",
            "colorPalette":"success",
            "en_label":"Main Examination",
            "en_desc":"A detailed written examination that evaluates analytical ability and subject understanding.",
            "hi_label":"मुख्य परीक्षा",
            "hi_desc":"एक विस्तृत लिखित परीक्षा जो विश्लेषणात्मक क्षमता और विषय की समझ का मूल्यांकन करती है।"
        },{
            "icon": "fa-comments-o",
            "colorPalette":"danger",
            "en_label":"Personality Test / Interview",
            "en_desc":"An assessment of communication skills, judgment, leadership potential, and overall suitability for public service.",
            "hi_label":"व्यक्तित्व परीक्षण / साक्षात्कार",
            "hi_desc":"कम्युनिकेशन स्किल्स, निर्णय लेने की क्षमता, लीडरशिप की क्षमता और जन-सेवा के लिए कुल मिलाकर उपयुक्तता का आकलन।"
        },{
            "icon": "fa-trophy",
            "colorPalette":"purple",
            "en_label":"Final Selection",
            "en_desc":"Candidates are ranked based on performance and allocated services according to merit and preferences.",
            "hi_label":"अंतिम चयन",
            "hi_desc":"उम्मीदवारों को उनके प्रदर्शन के आधार पर रैंक दी जाती है और मेरिट व पसंद के अनुसार सेवाएँ आवंटित की जाती हैं।"
        }]?.map((d,i)=>{
            const colorP = AppColors?.[d?.colorPalette];
            return (<Col md={3}>
                <Card padding={15}>
                    <div align="center" style={{ minHeight:'270px' }}>
                        <div align="center" className="mtop15p">
                            <Icon type="FontAwesome" name={d?.icon} size={56}  color={colorP?.["bg-dark"]}
                            style={{ padding:'15px', backgroundColor: colorP?.["bg-light"], borderRadius:'50%' }} />
                        </div>
                        <div align="center" className="mtop15p">
                            <h5><b>{d?.[lang+"_label"]}</b></h5>
                        </div>
                        <div className="mtop15p">{d?.[lang+"_desc"]}</div>
                    </div>
                </Card>
            </Col>);
        })}
    </Row>
 </div>
 </Col>
 </Row>
 </ContainerFluid>
 </div>);
};

export default ExamProcess;