import { ReadExcel } from "#Utils/ExcelManager.js";
import { InsertData, GetData } from "#Utils/SQLManager.js";

const PROJECT_ROOT = process.cwd();

const Execute = () =>{
 const InputPath = PROJECT_ROOT+"\\data\\mp\\state-wise-mapping-pri\\";
 const outputPath = PROJECT_ROOT+"\\output\\mp\\";
 const files = [ "andhra-pradesh_mp-mla-mapping", "arunachal-pradesh_mp-mla-mapping", 
    "assam_mp-mla-mapping", "bihar_mp-mla-mapping", "chandigarh_mp-mla-mapping",
    "chhattisgarh_mp-mla-mapping", "delhi_mp-mla-mapping", "goa_mp-mla-mapping",
    "gujarat_mp-mla-mapping", "haryana_mp-mla-mapping", "himachal-pradesh_mp-mla-mapping",
    "jammu-and-kashmir_mp-mla-mapping", "jharkhand_mp-mla-mapping", "karnataka_mp-mla-mapping",
    "kerala_mp-mla-mapping", "ladakh_mp-mla-mapping", "lakshadweep_mp-mla-mapping",
    "madhya-pradesh_mp-mla-mapping", "maharashtra_mp-mla-mapping", "manipur_mp-mla-mapping",
    "meghalaya_mp-mla-mapping", "mizoram_mp-mla-mapping", "nagaland_mp-mla-mapping", 
    "odisha_mp-mla-mapping", "puducherry_mp-mla-mapping", "punjab_mp-mla-mapping",
    "rajasthan_mp-mla-mapping", "sikkim_mp-mla-mapping", "tamil-nadu_mp-mla-mapping",
    "telangana_mp-mla-mapping", "the-dadra-and-nagar-haveli-and-damun-and-diu_mp-mla-mapping",
    "tripura_mp-mla-mapping", "uttarakhand_mp-mla-mapping", "uttar-pradesh_mp-mla-mapping",
    "west-bengal_mp-mla-mapping"
  ];

 for(let i=0;i<files.length;i++){
  const inputFile = InputPath + files[i] + ".xlsx";
  const outputFile = outputPath + "pri-" + files[i] + ".txt";
  ReadExcel(inputFile, outputFile, businesslogic)
  .catch(error => {
            console.error("FAILED:", inputFile);
            console.error(error);
        });
 }
};

async function businesslogic(values, output) {
 const mp_constituency_id = values?.[1];
 const mla_constituency_id = values?.[4];
 const local_body_id = values?.[16];
 const local_body_name = values?.[17]?.replace(/'/g, "\\'");

 if(local_body_id!=='0' && local_body_name!==undefined){
  // console.log(local_body_id+"  "+local_body_name+"   "+mp_constituency_id+"   "+mla_constituency_id);
  // Check local_body_id and local_body_name is either in pri_village_panchayats or def_geo_villages
  const checkPRIQuery = "SELECT count(*) As isExist FROM pri_village_panchayats "+
          "WHERE local_body_id="+local_body_id+" AND local_body_name='"+local_body_name+"';";
  const checkPRIData = await GetData(checkPRIQuery);
  const isPRIExist = checkPRIData?.[0]?.isExist;
  if(isPRIExist){ // Data Match and Exists in pri_village_panchayats Table
     console.log("Data Exist [PRI]: "+isPRIExist+" | local_body_id: "+local_body_id+" | local_body_name: "+local_body_name);
  } else { // Data Not Matched check in def_geo_villages
    console.log("Data Not Exist [PRI]: "+isPRIExist+" | local_body_id: "+local_body_id+" | local_body_name: "+local_body_name);
    const checkGeoQuery = "SELECT count(*) As isExist FROM def_geo_villages "+
          "WHERE village_id="+local_body_id+" AND village_name='"+local_body_name+"';";
    const checkGeoData = await GetData(checkGeoQuery);
    const isGeoExist = checkGeoData?.[0]?.isExist;
    console.log("Data Exist [GEO]: "+isGeoExist+" | local_body_id: "+local_body_id+" | local_body_name: "+local_body_name);

  }
  /*
  const query = "UPDATE pri_village_panchayats "+
    "SET mp_constituency_id="+mp_constituency_id+", mla_constituency_id="+mla_constituency_id+" "+
    "WHERE local_body_id="+local_body_id+" AND local_body_name='"+local_body_name+"'; ";
  const logData = await InsertData(query);
  console.log(logData);
  output.write(logData+"\n");
  */
 }

}

Execute();