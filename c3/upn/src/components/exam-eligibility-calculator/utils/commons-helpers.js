
export const AcademicSpecifications = (highestQualification, lang)=>{
    if(highestQualification==='12th Pass/ Intermediate' || highestQualification==='Diploma') {
        if(lang==='hi'){
            return [{ id:'Physics (No Mathematics)', label:'भौतिकी (गणित नहीं)', value:'Physics (No Mathematics)' },
                { id:'Mathematics (No Physics)', label:'गणित (भौतिकी नहीं)', value:'Mathematics (No Physics)' },
                { id:'Physics and Mathematics', label:'भौतिकी और गणित', value:'Physics and Mathematics' }];
        } else {
            return [{ id:'Physics (No Mathematics)', label:'Physics (No Mathematics)', value:'Physics (No Mathematics)' },
                    { id:'Mathematics (No Physics)', label:'Mathematics (No Physics)', value:'Mathematics (No Physics)' },
                    { id:'Physics and Mathematics', label:'Physics and Mathematics', value:'Physics and Mathematics' }];
        }
    } else if(highestQualification==='Graduate' || highestQualification==='Final Year Graduate' ||
            highestQualification==='Post Graduate') {
        if(lang==='hi'){
            return [{ id:'Agriculture', label:'कृषि', value:'Agriculture' },
                { id:'Animal Husbandry', label:'पशुपालन', value:'Animal Husbandry' },
                { id:'Applied Economics', label:'व्यावहारिक अर्थशास्त्र', value:'Applied Economics' },
                { id:'Applied Geology', label:'अनुप्रयुक्त भूविज्ञान', value:'Applied Geology' },
                { id:'Applied Statistics', label:'एप्लाईड स्टैटस्टिक्स', value:'Applied Statistics' },
                { id:'Botany', label:'वनस्पति विज्ञान', value:'Botany' },
                { id:'Business Economics', label:'व्यावसायिक अर्थशास्त्र', value:'Business Economics' },
                { id:'Chemistry', label:'रसायन विज्ञान', value:'Chemistry' },
                { id:'Econometrics', label:'अर्थमिति', value:'Econometrics' },
                { id:'Economics', label:'अर्थशास्त्र', value:'Economics' },
                { id:'Forestry', label:'वानिकी', value:'Forestry' },
                { id:'Geology', label:'भूगर्भ शास्त्र', value:'Geology' },
                { id:'Geophysics', label:'भू-भौतिकी', value:'Geophysics' },
                { id:'Hydrogeology', label:'हाइड्रोज्योलोजी', value:'Hydrogeology' },
                { id:'Mathematical Statistics', label:'गणितीय सांख्यिकी', value:'Mathematical Statistics' },
                { id:'Statistics', label:'आंकड़े', value:'Statistics' },
                { id:'Veterinary Science', label:'पशु चिकित्सा विज्ञान', value:'Veterinary Science' },
                { id:'Zoology', label:'जूलॉजी', value:'Zoology' }];
        } else {
            return [{ id:'Agriculture', label:'Agriculture', value:'Agriculture' },
                { id:'Animal Husbandry', label:'Animal Husbandry', value:'Animal Husbandry' },
                { id:'Applied Economics', label:'Applied Economics', value:'Applied Economics' },
                { id:'Applied Geology', label:'Applied Geology', value:'Applied Geology' },
                { id:'Applied Statistics', label:'Applied Statistics', value:'Applied Statistics' },
                { id:'Botany', label:'Botany', value:'Botany' },
                { id:'Business Economics', label:'Business Economics', value:'Business Economics' },
                { id:'Chemistry', label:'Chemistry', value:'Chemistry' },
                { id:'Econometrics', label:'Econometrics', value:'Econometrics' },
                { id:'Economics', label:'Economics', value:'Economics' },
                { id:'Forestry', label:'Forestry', value:'Forestry' },
                { id:'Geology', label:'Geology', value:'Geology' },
                { id:'Geophysics', label:'Geophysics', value:'Geophysics' },
                { id:'Hydrogeology', label:'Hydrogeology', value:'Hydrogeology' },
                { id:'Mathematical Statistics', label:'Mathematical Statistics', value:'Mathematical Statistics' },
                { id:'Statistics', label:'Statistics', value:'Statistics' },
                { id:'Veterinary Science', label:'Veterinary Science', value:'Veterinary Science' },
                { id:'Zoology', label:'Zoology', value:'Zoology' }];
        }
    } else if(highestQualification==='Engineering Graduate' || highestQualification==='Final Engineering Graduate') {
        if(lang==='hi'){
            return [{ id:'Aerospace Engineering', label:'अंतरिक्ष इंजिनीयरिंग', value:'Aerospace Engineering' },
                { id:'Agricultural Engineering', label:'कृषि इंजीनियरिंग', value:'Agricultural Engineering' },
                { id:'Architecture', label:'वास्तुकला', value:'Architecture' },
                { id:'Automobile Engineering', label:'ऑटोमोबाइल इंजीनियरिंग', value:'Automobile Engineering' },
                { id:'Biomedical Engineering', label:'जैवचिकित्सा अभियांत्रिकी', value:'Biomedical Engineering' },
                { id:'Biotechnology Engineering', label:'बायोटेक्नोलॉजी इंजीनियरिंग', value:'Biotechnology Engineering' },
                { id:'Ceramic Engineering', label:'सिरेमिक इंजीनियरिंग', value:'Ceramic Engineering' },
                { id:'Chemical Engineering', label:'केमिकल इंजीनियरिंग', value:'Chemical Engineering' },
                { id:'Civil Engineering', label:'असैनिक अभियंत्रण', value:'Civil Engineering' },
                { id:'Computer Engineering', label:'कंप्यूटर इंजीनियरिंग', value:'Computer Engineering' },
                { id:'Computer Science and Engineering', label:'कंप्यूटर साइंस और इंजीनियरिंग', value:'Computer Science and Engineering' },
                { id:'Electrical Engineering', label:'विद्युत अभियन्त्रण', value:'Electrical Engineering' },
                { id:'Electronics and Communication Engineering', label:'इलेक्ट्रॉनिक्स और संचार इंजीनियरिंग', value:'Electronics and Communication Engineering' },
                { id:'Electronics Engineering', label:'इलेक्ट्रॉनिक्स इंजीनियरिंग', value:'Electronics Engineering' },
                { id:'Electronics and Instrumentation Engineering', label:'इलेक्ट्रॉनिक्स और इंस्ट्रूमेंटेशन इंजीनियरिंग', value:'Electronics and Instrumentation Engineering' },
                { id:'Environmental Engineering', label:'पर्यावरणीय इंजीनियरिंग', value:'Environmental Engineering' },
                { id:'Industrial Engineering', label:'औद्योगिक इंजीनियरिंग', value:'Industrial Engineering' },
                { id:'Information Technology', label:'सूचान प्रौद्योगिकी', value:'Information Technology' },
                { id:'Instrumentation Engineering', label:'इंस्ट्रूमेंटेशन इंजीनियरिंग', value:'Instrumentation Engineering' },
                { id:'Marine Engineering', label:'मरीन इंजीनियरिंग', value:'Marine Engineering' },
                { id:'Mechanical Engineering', label:'मैकेनिकल इंजीनियरिंग', value:'Mechanical Engineering' },
                { id:'Mechatronics Engineering', label:'मेक्ट्रोनिक्स इंजीनियरिंग', value:'Mechatronics Engineering' },
                { id:'Metallurgical Engineering', label:'धातु-कर्म इंजीनियरिंग', value:'Metallurgical Engineering' },
                { id:'Mining Engineering', label:'खनन अभियांत्रिकी', value:'Mining Engineering' },
                { id:'Naval Architecture', label:'नौसेना वास्तुकला', value:'Naval Architecture' },
                { id:'Petroleum Engineering', label:'पेट्रोलियम इंजीनियरिंग', value:'Petroleum Engineering' },
                { id:'Production Engineering', label:'उत्पादन अभियांत्रिकी', value:'Production Engineering' },
                { id:'Robotics Engineering', label:'रोबोटिक्स इंजीनियरिंग', value:'Robotics Engineering' },
                { id:'Structural Engineering', label:'संरचनागत वास्तुविद्या', value:'Structural Engineering' },
                { id:'Telecommunication Engineering', label:'दूरसंचार इंजीनियरिंग', value:'Telecommunication Engineering' },
                { id:'Textile Engineering', label:'टेक्सटाइल इंजीनियरिंग', value:'Textile Engineering' }];
        } else {
            return [{ id:'Aerospace Engineering', label:'Aerospace Engineering', value:'Aerospace Engineering' },
                { id:'Agricultural Engineering', label:'Agricultural Engineering', value:'Agricultural Engineering' },
                { id:'Architecture', label:'Architecture', value:'Architecture' },
                { id:'Automobile Engineering', label:'Automobile Engineering', value:'Automobile Engineering' },
                { id:'Biomedical Engineering', label:'Biomedical Engineering', value:'Biomedical Engineering' },
                { id:'Biotechnology Engineering', label:'Biotechnology Engineering', value:'Biotechnology Engineering' },
                { id:'Ceramic Engineering', label:'Ceramic Engineering', value:'Ceramic Engineering' },
                { id:'Chemical Engineering', label:'Chemical Engineering', value:'Chemical Engineering' },
                { id:'Civil Engineering', label:'Civil Engineering', value:'Civil Engineering' },
                { id:'Computer Engineering', label:'Computer Engineering', value:'Computer Engineering' },
                { id:'Computer Science and Engineering', label:'Computer Science and Engineering', value:'Computer Science and Engineering' },
                { id:'Electrical Engineering', label:'Electrical Engineering', value:'Electrical Engineering' },
                { id:'Electronics and Communication Engineering', label:'Electronics and Communication Engineering', value:'Electronics and Communication Engineering' },
                { id:'Electronics Engineering', label:'Electronics Engineering', value:'Electronics Engineering' },
                { id:'Electronics and Instrumentation Engineering', label:'Electronics and Instrumentation Engineering', value:'Electronics and Instrumentation Engineering' },
                { id:'Environmental Engineering', label:'Environmental Engineering', value:'Environmental Engineering' },
                { id:'Industrial Engineering', label:'Industrial Engineering', value:'Industrial Engineering' },
                { id:'Information Technology', label:'Information Technology', value:'Information Technology' },
                { id:'Instrumentation Engineering', label:'Instrumentation Engineering', value:'Instrumentation Engineering' },
                { id:'Marine Engineering', label:'Marine Engineering', value:'Marine Engineering' },
                { id:'Mechanical Engineering', label:'Mechanical Engineering', value:'Mechanical Engineering' },
                { id:'Mechatronics Engineering', label:'Mechatronics Engineering', value:'Mechatronics Engineering' },
                { id:'Metallurgical Engineering', label:'Metallurgical Engineering', value:'Metallurgical Engineering' },
                { id:'Mining Engineering', label:'Mining Engineering', value:'Mining Engineering' },
                { id:'Naval Architecture', label:'Naval Architecture', value:'Naval Architecture' },
                { id:'Petroleum Engineering', label:'Petroleum Engineering', value:'Petroleum Engineering' },
                { id:'Production Engineering', label:'Production Engineering', value:'Production Engineering' },
                { id:'Robotics Engineering', label:'Robotics Engineering', value:'Robotics Engineering' },
                { id:'Structural Engineering', label:'Structural Engineering', value:'Structural Engineering' },
                { id:'Telecommunication Engineering', label:'Telecommunication Engineering', value:'Telecommunication Engineering' },
                { id:'Textile Engineering', label:'Textile Engineering', value:'Textile Engineering' }];
        }
    } else if(highestQualification==='MBBS' || highestQualification==='Final Year MBBS') {
        if(lang==='hi'){
            return [{ id:'Anaesthesiology', label:'अनेस्थिसियोलॉजी', value:'Anaesthesiology' },
                { id:'Community Medicine', label:'सामुदायिक चिकित्सा', value:'Community Medicine' },
                { id:'Dermatology', label:'त्वचा विज्ञान', value:'Dermatology' },
                { id:'Emergency Medicine', label:'आपातकालीन दवा', value:'Emergency Medicine' },
                { id:'Forensic Medicine', label:'फोरेंसिक दवा', value:'Forensic Medicine' },
                { id:'General Medicine', label:'सामान्य दवा', value:'General Medicine' },
                { id:'General Surgery', label:'जनरल सर्जरी', value:'General Surgery' },
                { id:'Microbiology', label:'कीटाणु-विज्ञान', value:'Microbiology' },
                { id:'Obstetrics and Gynaecology', label:'प्रसूति और स्त्री रोग विज्ञान', value:'Obstetrics and Gynaecology' },
                { id:'Ophthalmology', label:'नेत्र विज्ञान', value:'Ophthalmology' },
                { id:'Orthopaedics', label:'हड्डी रोग', value:'Orthopaedics' },
                { id:'Otorhinolaryngology (ENT)', label:'ओटोरिनोलैरिंगोलॉजी (कान, नाक और गले का विज्ञान)', value:'Otorhinolaryngology (ENT)' },
                { id:'Paediatrics', label:'बच्चों की दवा करने की विद्या', value:'Paediatrics' },
                { id:'Pathology', label:'विकृति विज्ञान', value:'Pathology' },
                { id:'Pharmacology', label:'औषध', value:'Pharmacology' },
                { id:'Physiology', label:'शरीर-क्रिया विज्ञान', value:'Physiology' },
                { id:'Psychiatry', label:'मनोचिकित्सा', value:'Psychiatry' },
                { id:'Pulmonary Medicine', label:'पल्मोनरी मेडिसिन', value:'Pulmonary Medicine' },
                { id:'Radiology', label:'रेडियोलॉजी', value:'Radiology' },
                { id:'Radiation Oncology', label:'रेडिएशन ऑन्कोलॉजी', value:'Radiation Oncology' },
                { id:'Sports Medicine', label:'खेल की दवा', value:'Sports Medicine' }];
        } else {
            return [{ id:'Anaesthesiology', label:'Anaesthesiology', value:'Anaesthesiology' },
                { id:'Community Medicine', label:'Community Medicine', value:'Community Medicine' },
                { id:'Dermatology', label:'Dermatology', value:'Dermatology' },
                { id:'Emergency Medicine', label:'Emergency Medicine', value:'Emergency Medicine' },
                { id:'Forensic Medicine', label:'Forensic Medicine', value:'Forensic Medicine' },
                { id:'General Medicine', label:'General Medicine', value:'General Medicine' },
                { id:'General Surgery', label:'General Surgery', value:'General Surgery' },
                { id:'Microbiology', label:'Microbiology', value:'Microbiology' },
                { id:'Obstetrics and Gynaecology', label:'Obstetrics and Gynaecology', value:'Obstetrics and Gynaecology' },
                { id:'Ophthalmology', label:'Ophthalmology', value:'Ophthalmology' },
                { id:'Orthopaedics', label:'Orthopaedics', value:'Orthopaedics' },
                { id:'Otorhinolaryngology (ENT)', label:'Otorhinolaryngology (ENT)', value:'Otorhinolaryngology (ENT)' },
                { id:'Paediatrics', label:'Paediatrics', value:'Paediatrics' },
                { id:'Pathology', label:'Pathology', value:'Pathology' },
                { id:'Pharmacology', label:'Pharmacology', value:'Pharmacology' },
                { id:'Physiology', label:'Physiology', value:'Physiology' },
                { id:'Psychiatry', label:'Psychiatry', value:'Psychiatry' },
                { id:'Pulmonary Medicine', label:'Pulmonary Medicine', value:'Pulmonary Medicine' },
                { id:'Radiology', label:'Radiology', value:'Radiology' },
                { id:'Radiation Oncology', label:'Radiation Oncology', value:'Radiation Oncology' },
                { id:'Sports Medicine', label:'Sports Medicine', value:'Sports Medicine' }];
        }
    }
};






