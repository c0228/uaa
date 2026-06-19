import React from "react";
import { useParams  } from "react-router-dom";

const StartJourney = () =>{
 const { lang } = useParams();
 const SimpleHeader = ({ label }) =>{
    return (<div style={{ padding:'8px', backgroundColor:'#ffa622', borderTopRightRadius:'25px',  borderBottomRightRadius:'25px' }}><b>{label}</b></div>);
 }
 return (<div className="mtop15p">
    <div><h3><b>{lang==='hi'?`अपनी यूपीएससी यात्रा कैसे शुरू करें?`:`How to Start Your UPSC Journey?`}</b></h3></div>
    <div className="mtop15p">
        {lang==='hi'?`अगर आप शुरुआती हैं, तो इन स्टेप्स को फ़ॉलो करें:`:`If you are a beginner, follow these steps:`}
    </div>
    <div className="mtop15p">
        <SimpleHeader label={lang==='hi'?"क़दम 1: परीक्षा को समझें":"Step 1: Understand the Exam"} />
        <div className="mtop5p padLeft5p">
            {lang==='hi'?`परीक्षा, पात्रता के मानदंडों, आयु सीमा और चयन प्रक्रिया के बारे में जानें।`:
            `Learn about the examination, eligibility criteria, age limits, and selection process.`}
        </div>
    </div>
    <div className="mtop15p">
        <SimpleHeader label={lang==='hi'?"क़दम 2: सेवाओं को देखें":"Step 2: Explore Services"} />
        <div className="mtop5p padLeft5p">
            {lang==='hi'?`समझें कि अलग-अलग सेवाएँ क्या काम करती हैं और अपनी रुचियों से मेल खाने वाले करियर के रास्ते पहचानें।`:
            `Understand what different services do and identify career paths that match your interests.`}
        </div>
    </div>
    <div className="mtop15p">
        <SimpleHeader label={lang==='hi'?"क़दम 3: सिलेबस को देखें":"Step 3: Review the Syllabus"} />
        <div className="mtop5p padLeft5p">
            {lang==='hi'?`तैयारी शुरू करने से पहले आधिकारिक पाठ्यक्रम को ध्यान से पढ़ें।`:
            `Study the official syllabus carefully before beginning preparation.`}
        </div>
    </div>
    <div className="mtop15p">
        <SimpleHeader label={lang==='hi'?"क़दम 4: मज़बूत बुनियादी बातें तैयार करें":"Step 4: Build Strong Fundamentals"} />
        <div className="mtop5p padLeft5p">
            {lang==='hi'?`इतिहास, भूगोल, राजनीति, अर्थव्यवस्था, पर्यावरण, विज्ञान और समसामयिक मामलों पर ध्यान दें।`:
            `Focus on history, geography, polity, economy, environment, science, and current affairs.`}
        </div>
    </div>
    <div className="mtop15p">
        <SimpleHeader label={lang==='hi'?"क़दम 5: नियमित रूप से अभ्यास करें":"Step 5: Practice Regularly"} />
        <div className="mtop5p padLeft5p">
            {lang==='hi'?`पिछले वर्षों के प्रश्न-पत्र हल करें, मॉक टेस्ट दें और उत्तर-लेखन का अभ्यास करें।`:
            `Solve previous year papers, mock tests, and answer-writing exercises.`}
        </div>
    </div>
    <div className="mtop15p">
        <SimpleHeader label={lang==='hi'?"क़दम 6: लगातार बने रहें":"Step 6: Stay Consistent"} />
        <div className="mtop5p padLeft5p">
            {lang==='hi'?`यूपीएससी की तैयारी एक लंबी प्रक्रिया है, जिसमें अनुशासन, धैर्य और लगातार सीखते रहने का फल मिलता है।`:
            `UPSC preparation is a long-term process that rewards discipline, patience, and continuous learning.`}
        </div>
    </div>
 </div>);
};

export default StartJourney;