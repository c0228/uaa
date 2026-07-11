import React, { useEffect } from "react";
import {ContainerFluid, Row, Col, DateTimePicker, Select, Button, Form  } from "e-ui-react";
import { getEligibilityContext } from "@Components/exam-eligibility-calculator/index.js";

const FormReview = () =>{
 const { eligibilityContextData, setEligibilityContextData } = getEligibilityContext();
 useEffect(()=>{
    console.log("eligibilityContextData: ", eligibilityContextData);
 },[eligibilityContextData]);
 const getRelaxationAndReservationData = () =>{
   const reservations = eligibilityContextData?.data?.reservations;
   const pwBD = reservations?.pwBD;
   const disabilityCategory = reservations?.disabilityCategory;
   const disabilityPercentage = reservations?.disabilityPercentage;
   const exServiceMan = reservations?.exServiceMan;
   const defencePersonnelDisabled = reservations?.defencePersonnelDisabled;
   const cseAttempt = reservations?.cseAttempt?.toLowerCase();
   const cseAttemptsUsed = reservations?.cseAttemptsUsed;
   return {

      "Attempts used for CSE Examination": cseAttempt==='no'?'0':cseAttemptsUsed
   };
   /*
   "Name": eligibilityContextData?.data?.reservations?.pwBD,
            "Date of Birth": eligibilityContextData?.data?.reservations?.disabilityCategory,
            "Gender": eligibilityContextData?.data?.reservations?.disabilityPercentage,
            "Nationality": eligibilityContextData?.data?.reservations?.exServiceMan,
            "Category": eligibilityContextData?.data?.reservations?.defencePersonnelDisabled,
            "Attempts used for CSE Examination": eligibilityContextData?.data?.reservations?.cseAttempt?.toLowerCase()==='no'?'0':
                        eligibilityContextData?.data?.reservations?.cseAttemptsUsed
   */
 };
 const SectionData = ({ title, data }) =>{
   const keys = data && Object.keys(data);
   return (<div>
      <div><b>{title}</b></div>
      <div className="table-responsive">
      <table className="table">
         <tbody>
            {keys?.map((k,i)=>{
               return (<tr>
                  <td style={{ width:'30%' }}><b>{k}</b></td>
                  <td style={{ width:'5%' }}><b>:</b></td>
                  <td style={{ width:'45%' }}>{data?.[k]}</td>
               </tr>);
            })}
         </tbody>
      </table>
   </div>
   </div>);
 };
 return (<div>
  <div><h5><b>4. Review</b></h5><hr/></div>
  <div className="mtop15p">
   <SectionData title="Personal Information" 
         data={{
            "Name": eligibilityContextData?.data?.personalInfo?.name,
            "Date of Birth": eligibilityContextData?.data?.personalInfo?.dob,
            "Gender": eligibilityContextData?.data?.personalInfo?.gender,
            "Nationality": eligibilityContextData?.data?.personalInfo?.nationality,
            "Category": eligibilityContextData?.data?.personalInfo?.category
         }} />
  </div>
  <div className="mtop15p">
   <SectionData title="Education Qualification" 
         data={{
            "Higher Qualification": eligibilityContextData?.data?.academics?.highestQualification
         }} />
  </div>
  <div className="mtop15p">
   <SectionData title="Reservation & Relaxations" 
         data={{
            "Name": eligibilityContextData?.data?.reservations?.pwBD,
            "Date of Birth": eligibilityContextData?.data?.reservations?.disabilityCategory,
            "Gender": eligibilityContextData?.data?.reservations?.disabilityPercentage,
            "Nationality": eligibilityContextData?.data?.reservations?.exServiceMan,
            "Category": eligibilityContextData?.data?.reservations?.defencePersonnelDisabled,
            "Attempts used for CSE Examination": eligibilityContextData?.data?.reservations?.cseAttempt?.toLowerCase()==='no'?'0':
                        eligibilityContextData?.data?.reservations?.cseAttemptsUsed
         }} />
  </div>
 </div>);
};

export default FormReview;