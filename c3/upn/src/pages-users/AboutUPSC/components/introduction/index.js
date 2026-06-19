import React from "react";
import { useParams  } from "react-router-dom";

const Introduction = () =>{
 const { lang } = useParams();
 return (<div>
    <div className="mtop15p"><h3><b>
        {lang==='hi'?"यूपीएससी की दुनिया में आपका स्वागत है":"Welcome to the World of UPSC"}</b></h3></div>
    <div className="mtop15p">
        {lang==='hi'?`"संघ लोक सेवा आयोग (UPSC) भारत के सबसे प्रतिष्ठित संवैधानिक निकायों में से एक है, जो विभिन्न सरकारी सेवाओं 
        और पदों पर उम्मीदवारों की भर्ती के लिए उत्तरदायी है। प्रतिवर्ष, लाखों अभ्यर्थी प्रशासनिक, राजनयिक, रक्षा, अभियांत्रिकी, आर्थिक और 
        कई अन्य लोक सेवा क्षेत्रों में अपना करियर बनाने के लिए UPSC परीक्षाओं की तैयारी करते हैं। यदि आप UPSC की तैयारी में बिल्कुल 
        नए हैं, तो यह मार्गदर्शिका आपको यह समझने में मदद करेगी कि UPSC परीक्षाओं का आयोजन कैसे किया जाता है और विभिन्न सेवाएँ 
        उनसे कैसे जुड़ी हुई हैं।"`:`The Union Public Service Commission (UPSC) is one of India's most respected constitutional 
        bodies responsible for recruiting candidates to various government services and posts. Every 
        year, lakhs of aspirants prepare for UPSC examinations to build careers in administration, 
        diplomacy, defense, engineering, economics, and several other public service sectors.
        If you are completely new to UPSC preparation, this guide will help you understand how UPSC 
        examinations are organized and how different services are connected to them.`}
    </div>
    
        <div className="mtop15p"><h3><b>{lang==='hi'?"परिचय":"Introduction"}</b></h3></div>
        <div className="mtop15p">
            <div>
            {lang==='hi'?`संघ लोक सेवा आयोग (यूपीएससी) एक स्वतंत्र संवैधानिक 
            संस्था है जो केंद्र सरकार की विभिन्न सेवाओं और विभागों में भर्ती के लिए प्रतियोगी परीक्षाओं का आयोजन करती है।`:
            `The Union Public Service Commission is an independent constitutional institution that 
            conducts competitive examinations for recruitment into various Central Government services 
            and departments.`}    
            </div>
            <div className="mtop5p">
                {lang==='hi'?`यूपीएससी परीक्षाओं को मजबूत ज्ञान, विश्लेषणात्मक क्षमता, निर्णय लेने के कौशल, 
                नेतृत्व गुणों और सार्वजनिक सेवा के प्रति प्रतिबद्धता वाले उम्मीदवारों की पहचान करने के लिए डिज़ाइन किया गया है।`:
                `UPSC examinations are designed to identify candidates with strong knowledge, analytical 
                ability, decision-making skills, leadership qualities, and commitment to public service.`}
            </div>
            <div className="mtop5p">
                {lang==='hi'?"विभिन्न परीक्षाओं के माध्यम से, UPSC निम्नलिखित पदों के लिए अधिकारियों की भर्ती करता है:":
                "Through different examinations, UPSC recruits officers for:"}
            </div>
            <ul>
                {[{ "en_label":"Administrative Services", "hi_label":"प्रशासनिक सेवाएँ" },
                { "en_label":"Police Services", "hi_label":"पुलिस सेवाएँ" },
                { "en_label":"Foreign Services", "hi_label":"विदेश सेवाएँ"  },
                { "en_label":"Revenue Services", "hi_label":"राजस्व सेवाएँ" },
                { "en_label":"Defence Services", "hi_label":"रक्षा सेवाएँ" },
                { "en_label":"Forest Services", "hi_label":"वन सेवाएँ" },
                { "en_label":"Engineering Services", "hi_label":"अभियांत्रिकी सेवाएँ" },
                { "en_label":"Economic Services", "hi_label":"आर्थिक सेवाएँ" },
                { "en_label":"Statistical Services", "hi_label":"सांख्यिकीय सेवाएँ" },
                { "en_label":"Medical Services", "hi_label":"चिकित्सा सेवाएँ" },
                { "en_label":"Research and Specialized Services", "hi_label":"अनुसंधान एवं विशेषज्ञ सेवाएँ" }]?.map((e,i)=>{
                    return (<li key={i} className="mtop5p">{e?.[lang+"_label"]}</li>);
                })}
            </ul>
        </div>
 </div>);
};

export default Introduction;