import { ReadExcel } from "#ApiUtils/ExcelManager.js";
import { GetData } from "#ApiUtils/SQLManager.js";
/**
 * 
 */
const PROJECT_ROOT = process.cwd();

const init = async() =>{
 const outputPath = PROJECT_ROOT+"\\output\\mp\\state-wise-mapping-pri-districts\\";
 const inputPath = PROJECT_ROOT+"\\data\\mp\\state-wise-mapping-pri\\";
 const files = [
  "andhra-pradesh_mp-mla-mapping", "arunachal-pradesh_mp-mla-mapping", "assam_mp-mla-mapping",
  "bihar_mp-mla-mapping", "chandigarh_mp-mla-mapping",
  "chhattisgarh_mp-mla-mapping", 
  "delhi_mp-mla-mapping", 
  "goa_mp-mla-mapping", "gujarat_mp-mla-mapping", "haryana_mp-mla-mapping", "himachal-pradesh_mp-mla-mapping",
  "jammu-and-kashmir_mp-mla-mapping", "jharkhand_mp-mla-mapping", "karnataka_mp-mla-mapping",
  "kerala_mp-mla-mapping", "ladakh_mp-mla-mapping", "lakshadweep_mp-mla-mapping", "madhya-pradesh_mp-mla-mapping", 
  "maharashtra_mp-mla-mapping", "manipur_mp-mla-mapping", "meghalaya_mp-mla-mapping", "mizoram_mp-mla-mapping", 
  "nagaland_mp-mla-mapping", "odisha_mp-mla-mapping", "puducherry_mp-mla-mapping", "punjab_mp-mla-mapping", 
  "rajasthan_mp-mla-mapping", "sikkim_mp-mla-mapping", "tamil-nadu_mp-mla-mapping", "telangana_mp-mla-mapping", 
  "the-dadra-and-nagar-haveli-and-damun-and-diu_mp-mla-mapping", "tripura_mp-mla-mapping", "uttarakhand_mp-mla-mapping",
  "uttar-pradesh_mp-mla-mapping", "west-bengal_mp-mla-mapping"];
 for(let i=0;i<files.length;i++){
  const inputFile = inputPath + files[i] + ".xlsx";
  const outputFile = outputPath + files[i] + ".txt";
  await ReadExcel(inputFile, outputFile, CheckDefGeoDistricts).catch(console.error);
 }
};

// Check this values exists in respectivity tables. If not mention it.
const CheckDefGeoDistricts = async(values, output) =>{ // def_geo_districts: district_id, district_name
 // QUERY: SELECT * FROM def_geo_districts WHERE district_name=''; // get District Id and see Matching or not.e Matching or not.
 const district_id = String(values?.[7] ?? "").trim();
 const district_name = String(values?.[8] ?? "").trim();
 const districtsQuery = "SELECT * FROM def_geo_districts WHERE district_name='"+district_name+"';";
 const districtResults = await GetData(districtsQuery);
 if(districtResults?.length>0 && districtResults?.some(row => String(row.district_id).trim() === String(district_id).trim())){
    output.write("status: TBL_DATA_EXISTS  | table: def_geo_districts | district_id:"+district_id+" | district_name: "+district_name+"\n");
 } else {
  output.write("status: TBL_DATA_NOT_EXISTS  | table: def_geo_districts | district_id:"+district_id+" | district_name: "+district_name+"\n");
 }
};

init();