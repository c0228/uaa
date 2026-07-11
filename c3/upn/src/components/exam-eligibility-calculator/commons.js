import React from "react";
import { Icon } from "e-ui-react";
import EligibleData from "./data.json";

export const InfoIcon = () =><Icon type="FontAwesome" name="fa-info-circle" size={11} style={{ marginTop:'2px', marginRight:'2px' }} />



export const generateEligibilityData = () => {
 const result = {};
 EligibleData.data.forEach(section => {
    result[section.id] = {};
    section.list.forEach(field => {
        result[section.id][field.id] = field.defaultValue;
    });
 });
 return {
    leftMenuActiveId: "personal-information",
    data: result
 };
};

export const getFieldLabel = (fieldId, lang = "en") => {
 const labelKey = `${lang}Label`;
 if(!Array.isArray(fieldId) || fieldId.length === 0) { return ""; }
 // Find the section
 const section = EligibleData.data.find(item => item.id === fieldId[0]);
 if(!section) { return ""; }
 // Only section requested
 if(fieldId.length === 1) { return section[labelKey] || ""; }
 // Section + field requested
 const field = section.list.find(item => item.id === fieldId[1]);
 return field?.[labelKey] || "";
};

export const updateEligiblityFormData = (formData, sectionId) =>{
 const section = EligibleData.data.find(item => item.id === sectionId);
 const sectionData = section.list.reduce((obj, field) => {
    obj[field.id] = formData?.[field.id]?.value ?? field.defaultValue;
    return obj;
 }, {});
 return sectionData;
};

export const CreateId = (text) => {
    return text
        .toLowerCase()
        .replace(/[^\w\s]/g, " ")      // Remove symbols (/, •, -, etc.)
        .replace(/\s+/g, "_")          // Replace spaces with _
        .replace(/_+/g, "_")           // Remove consecutive _
        .replace(/^_+|_+$/g, "");      // Trim leading/trailing _
};