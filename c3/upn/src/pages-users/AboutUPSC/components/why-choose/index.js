import React from "react";
import { useParams  } from "react-router-dom";

const WhyChoose = () =>{
 const { lang } = useParams();
 return (<div>
    <div><h3><b>{lang==='hi'?`यूपीएससी के ज़रिए आजीविका क्यों चुनें?`:`Why Choose a Career Through UPSC?`}</b></h3></div>
    <div className="mtop15p">
        <div>{lang===`hi`?`यूपीएससी करियर इन चीज़ों के अवसर देते हैं:`:`UPSC careers offer opportunities to:`}</div>
        <ul>
            {[{ 
                "en_label":"Serve the nation directly",
                "hi_label":"सीधे देश की सेवा करें"
             },
            { 
                "en_label":"Participate in policy implementation",
                "hi_label":"नीति लागू करने में भाग लें"
             },
            { 
                "en_label":"Contribute to governance and development",
                "hi_label":"शासन और विकास में योगदान दें"
             },
            { 
                "en_label":"Work in diverse sectors and regions",
                "hi_label":"अलग-अलग क्षेत्रों और इलाकों में काम करें"
            },
            { 
                "en_label":"Build leadership and administrative skills",
                "hi_label":"नेतृत्व और प्रशासनिक कौशल विकसित करें"
            },
            { 
                "en_label":"Enjoy long-term career growth and stability",
                "hi_label":"लंबे समय तक करियर में तरक्की और स्थिरता का आनंद लें।"
            }]?.map((e,i)=>{
                return (<li className="mtop5p">{e?.[lang+"_label"]}</li>);
            })}
        </ul>
        <div className="mtop5p">
        {lang==='hi'?`पब्लिक सर्विस में करियर अक्सर समाज पर सार्थक प्रभाव डालने 
        का मौका देता है, साथ ही इसमें महत्वपूर्ण राष्ट्रीय और क्षेत्रीय मुद्दों पर काम करने का अवसर 
        भी मिलता है।`:`Public service careers often provide the chance to make a 
        meaningful impact on society while working on important national and 
        regional issues.`}
        </div>
    </div>
 </div>);
};

export default WhyChoose;