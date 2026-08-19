import { GetDateDifference } from "@Utils/DateFormatUtils.js";
// ageValidator - [min.max]


// calculateEligibility
const calculateEligibility = (eligibilityContextData) =>{
 const personalInfo = eligibilityContextData?.data?.personalInfo;
 const academics = eligibilityContextData?.data?.academics;
 const personalInfo = eligibilityContextData?.data?.reservations;

 // ageValidator
 // 1. min,max age support -
const dob = personalInfo?.dob;
    // Get Age as per today
};