import { ReadExcel } from "#Utils/ExcelManager.js";
import { InsertData } from "#Utils/SQLManager.js";

const PROJECT_ROOT = process.cwd();

// const OUTPUT_FILE = PROJECT_ROOT+"\\output\\lg-pri\\pri-villages-india.txt";
// const INPUT_FILE = PROJECT_ROOT+"\\data\\lg-pri\\main_three_tables\\pri-villages-india.xlsx";

const Execute = () =>{
 const InputPath = PROJECT_ROOT+"\\data\\lg-ulb\\wards-by-state\\";
 const outputPath = PROJECT_ROOT+"\\output\\lg-ulb\\";
 const files = [ "andaman-and-nicobar-islands", "andhra-pradesh", "arunachal-pradesh",
   "assam", "bihar", "chandigarh", "chattisgarh", "delhi", "goa", "gujarat", "haryana", 
   "himachal-pradesh", "jammu-and-kashmir", "jharkhand", "karnataka", "kerala", "ladakh",
   "lakshadweep", "madhya-pradesh", "maharashtra", "manipur", "meghalaya", "mizoram", "nagaland",
   "odisha", "puducherry", "punjab", "rajasthan", "sikkim", "tamil-nadu", "telangana", 
   "the-dadra-and-nagar-haveli-and-daman-and-diu", "tripura", "uttarakhand", "uttar-pradesh", "west-bengal" ];

 for(let i=0;i<files.length;i++){
  ReadExcel(InputPath + files[i] + "_ulb-wards.xlsx", 
    outputPath + "ulb-wards-" + files[i] + ".txt", 
    businesslogic)
  .catch(console.error);
 }
};

async function businesslogic(values, output) {
 const local_ward_id = values?.[2];
 const local_body_id = values?.[1]; // 11
 const local_ward_name = values?.[5]?.replace(/'/g, "\\'");

 // console.log(local_ward_id+"  "+local_body_id+"  "+local_ward_name);
 
 const query = "INSERT INTO ulb_local_wards(local_ward_id, local_body_id, local_ward_name) "
  +"VALUES ("+local_ward_id+","+local_body_id+",'"+local_ward_name+"');";
 const logData = await InsertData(query);
 console.log(logData);
 output.write(logData+"\n");
 
}

Execute();