import React from "react";
import { useParams  } from "react-router-dom";
import { Card } from "e-ui-react";

const UPSCStructure = () =>{
 const { lang } = useParams();
 const SimpleHeader = ({ label }) =>{
    return (<div style={{ padding:'8px', color:'#fff', backgroundColor:'#15629f', borderTopRightRadius:'25px',  borderBottomRightRadius:'25px' }}><b>{label}</b></div>);
 }
 const LabelDescView = ({ data }) =>{
    return (<ul>
    {data?.map((e,i)=>{
        return (<li key={i} className="mtop5p">
            <div><b>{e?.[lang+"_label"]}</b></div>
            <div className="mtop5p">{e?.[lang+"_desc"]}</div>
        </li>);
    })}
    </ul>)
 };
 const GroupExamsView = ({ data })=>{
    return (<ul>
        {data?.map((d,i1)=>{
            return (<div key={i1}>
                <div className="mtop15p"><b>{d?.[lang+"_group"]}</b></div>
                <ul>
                    {d?.[lang+"_exams"]?.map((e,i2)=><li key={i2} className="mtop5p">{e}</li>)}
                </ul>    
            </div>);
        })}
    </ul>);
 };
 return (<div className="mtop15p">
    <Card padding={15} backgroundColor="#d0eaff">
        <div><h3><b>{lang==='hi'?`यूपीएससी की संरचना को समझना`:`Understanding UPSC Structure`}</b></h3></div>
        <div className="mtop15p">
            {lang==='hi'?`यूपीएससी को समझने में आसान बनाने के लिए, हम जानकारी को तीन स्तरों में व्यवस्थित करते हैं - समूह, परीक्षाएँ और सेवाएँ।`:
            `To make UPSC easier to understand, we organize information into three levels - Groups, Exams and Services.`}
        </div>
        <div className="mtop15p">
            <SimpleHeader label={lang==='hi'?"1. समूह":"1. Groups"} />
            <div className="mtop15p padLeft15p">
                {lang==='hi'?`एक समूह आजीविका क्षेत्र के आधार पर संघ लोक सेवा आयोग (यूपीएससी) की परीक्षाओं की एक व्यापक श्रेणी को दर्शाता है। उदाहरण के लिए:`:
                `A Group represents a broad category of UPSC examinations based on the career domain. Examples include:`}
            </div>
            <LabelDescView data={[{
                                    "en_label":"Civil Administration",
                                    "en_desc":"Examinations related to governance, administration, diplomacy, taxation, policing, and public policy.",
                                    "hi_label":"नागरिक प्रशासन",
                                    "hi_desc":"शासन व्यवस्था, प्रशासन, कूटनीति, कराधान, पुलिस व्यवस्था और लोक नीति से संबंधित परीक्षाएँ।"
                                },{
                                    "en_label":"Defence Services",
                                    "en_desc":"Examinations conducted for entry into the Army, Navy, and Air Force.",
                                    "hi_label":"रक्षा सेवाएँ",
                                    "hi_desc":"सेना, नौसेना और वायु सेना में प्रवेश के लिए आयोजित की जाने वाली परीक्षाएँ।"
                                },{
                                    "en_label":"Engineering Services",
                                    "en_desc":"Recruitment for technical and engineering positions in government departments.",
                                    "hi_label":"अभियांत्रिकी सेवाएँ",
                                    "hi_desc":"सरकारी विभागों में तकनीकी और अभियांत्रिकी पदों के लिए भर्ती।"
                                },{
                                    "en_label":"Economic & Statistical Services",
                                    "en_desc":"Examinations for candidates specializing in economics, statistics, and data analysis.",
                                    "hi_label":"आर्थिक एवं सांख्यिकीय सेवाएँ",
                                    "hi_desc":"अर्थशास्त्र, सांख्यिकी और डेटा विश्लेषण में विशेषज्ञता रखने वाले उम्मीदवारों के लिए परीक्षाएँ।"
                                },{
                                    "en_label":"Medical Services",
                                    "en_desc":"Recruitment of medical professionals into government healthcare services.",
                                    "hi_label":"चिकित्सा सेवाएँ",
                                    "hi_desc":"सरकारी स्वास्थ्य सेवाओं में चिकित्सा पेशेवरों की भर्ती।"
                                }]} />
        </div>
        <div className="mtop15p">
            <SimpleHeader label={lang==='hi'?"2. परीक्षाएँ":"2. Exams"} />
            <div className="mtop15p padLeft15p">
                <div>{lang==='hi'?`प्रत्येक समूह में एक या अधिक परीक्षाएँ शामिल होती हैं। उदाहरण के लिए:`:
                `Each group contains one or more examinations. Examples:`}</div>
                <GroupExamsView data={[{
                                    "en_group":"Civil Administration Group",
                                    "en_exams":["Civil Services Examination (CSE)", "Indian Forest Service Examination (IFoS)"],
                                    "hi_group":"नागरिक प्रशासन समूह",
                                    "hi_exams":["सिविल सेवा परीक्षा (सी.एस.ई)", "भारतीय वन सेवा परीक्षा (आई.एफओ.एस)"]
                                },{
                                    "en_group":"Defence Services Group",
                                    "en_exams":["National Defence Academy Examination (NDA)", "Combined Defence Services Examination (CDS)"],
                                    "hi_group":"रक्षा सेवाएँ समूह",
                                    "hi_exams":["राष्ट्रीय रक्षा अकादमी परीक्षा (एन.डी.ए)", "संयुक्त रक्षा सेवा परीक्षा (सी.डी.एस)"]
                                },{
                                    "en_group":"Engineering Group",
                                    "en_exams":["Engineering Services Examination (ESE)"],
                                    "hi_group":"अभियांत्रिकी समूह",
                                    "hi_exams":["अभियांत्रिकी सेवा परीक्षा (ई.एस.ई)"]
                                },{
                                    "en_group":"Economic & Statistical Group",
                                    "en_exams":["Indian Economic Service Examination (IES)", "Indian Statistical Service Examination (ISS)"],
                                    "hi_group":"आर्थिक एवं सांख्यिकीय समूह",
                                    "hi_exams":["भारतीय आर्थिक सेवा परीक्षा (आई.ई.एस)", "भारतीय सांख्यिकीय सेवा परीक्षा (आई.एस.एस)"]
                                }]} />
                <div className="mtop5p">
                    {lang==='hi'?`प्रत्येक परीक्षा के अपने पात्रता मानदंड, पाठ्यक्रम, चयन प्रक्रिया और करियर के अवसर होते हैं।`:
                    `Each examination has its own eligibility criteria, syllabus, selection process, and career opportunities.`}
                </div>
            </div>
        </div>
        <div className="mtop15p">
            <SimpleHeader label={lang==='hi'?"3. सेवाएँ":"3. Services"} />
            <div className="mtop15p padLeft15p">
                <div>
                    {lang==='hi'?`सफल उम्मीदवारों को उनकी परीक्षा के प्रदर्शन (रैंक), प्राथमिकताओं, रिक्तियों और पात्रता शर्तों के आधार पर 
                    विशिष्ट सेवाओं में आवंटित किया जाता है। सेवाओं के उदाहरणों में शामिल हैं:`:`Successful candidates are allocated to specific services 
                    based on examination performance, preferences, vacancies, and eligibility conditions. Examples 
                    of services include:`}
                </div>
                <GroupExamsView data={[{
                                "en_group":"Administrative Services",
                                "en_exams":["Indian Administrative Service (IAS)"],
                                "hi_group":"प्रशासनिक सेवाएँ",
                                "hi_exams":["भारतीय प्रशासनिक सेवा (आई.ए.एस)"]
                            },{
                                "en_group":"Police Services",
                                "en_exams":["Indian Police Service (IPS)"],
                                "hi_group":"पुलिस सेवाएँ",
                                "hi_exams":["भारतीय पुलिस सेवा (आई.पी.एस)"]
                            },{
                                "en_group":"Foreign Affairs",
                                "en_exams":["Indian Foreign Service (IFS)"],
                                "hi_group":"विदेशी कार्य",
                                "hi_exams":["भारतीय विदेश सेवा (आई.एफ.एस)"]
                            },{
                                "en_group":"Revenue & Taxation",
                                "en_exams":["Indian Revenue Service (IRS)"],
                                "hi_group":"राजस्व और कराधान",
                                "hi_exams":["भारतीय राजस्व सेवा (आई.आर.एस)"]
                            },{
                                "en_group":"Forest Administration",
                                "en_exams":["Indian Forest Service (IFoS)"],
                                "hi_group":"वन प्रशासन",
                                "hi_exams":["भारतीय वन सेवा (आई.एफओ.एस)"]
                            }]} />
                <div className="mtop5p">
                    {lang==='hi'?`प्रत्येक सेवा राष्ट्र निर्माण और लोक प्रशासन में एक अद्वितीय भूमिका प्रदान करती है।`:
                    `Each service offers a unique role in nation-building and public administration.`}
                </div>
            </div>
        </div>
    </Card>
 </div>);
};

export default UPSCStructure;