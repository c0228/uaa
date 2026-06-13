import React from "react";
import { useParams  } from "react-router-dom";

const WhyChoose = () =>{
 const { lang } = useParams();
 return (<div>
    <div><h3><b>Why Choose a Career Through UPSC?</b></h3></div>
    <div className="mtop15p">
        <div>UPSC careers offer opportunities to:</div>
        <ul>
            {[{ 
                "en_label":"Serve the nation directly",
                "hi_label":""
             },
            { 
                "en_label":"Participate in policy implementation",
                "hi_label":""
             },
            { 
                "en_label":"Contribute to governance and development",
                "hi_label":""
             },
            { 
                "en_label":"Work in diverse sectors and regions",
                "hi_label":""
            },
            { 
                "en_label":"Build leadership and administrative skills",
                "hi_label":""
            },
            { 
                "en_label":"Enjoy long-term career growth and stability",
                "hi_label":""
            }]?.map((e,i)=>{
                return (<li className="mtop5p">{e?.[lang+"_label"]}</li>);
            })}
        </ul>
        <div className="mtop5p">
        Public service careers often provide the chance to make a meaningful impact 
        on society while working on important national and regional issues.
        </div>
    </div>
 </div>);
};

export default WhyChoose;