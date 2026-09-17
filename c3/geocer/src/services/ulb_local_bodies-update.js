import { ReadExcel } from "#Utils/ExcelManager.js";
import { InsertData } from "#Utils/SQLManager.js";

const PROJECT_ROOT = process.cwd();

// const OUTPUT_FILE = PROJECT_ROOT+"\\output\\lg-pri\\pri-villages-india.txt";
// const INPUT_FILE = PROJECT_ROOT+"\\data\\lg-pri\\main_three_tables\\pri-villages-india.xlsx";

const Execute = () =>{
 const InputPath = PROJECT_ROOT+"\\data\\lg-ulb\\state-wise-table\\";
 const outputPath = PROJECT_ROOT+"\\output\\lg-ulb\\";
 const files = [ "andaman-and-nicobar-islands", "andhra-pradesh", "arunachal-pradesh",
   "assam", "bihar", "chandigarh", "chattisgarh", "delhi", "goa", "gujarat", "haryana", 
   "himachal-pradesh", "jammu-and-kashmir", "jharkhand", "karnataka", "kerala", "ladakh",
   "lakshadweep", "madhya-pradesh", "maharashtra", "manipur", "meghalaya", "mizoram", "nagaland",
   "odisha", "puducherry", "punjab", "rajasthan", "sikkim", "tamil-nadu", "telangana", 
   "the-dadra-and-nagar-haveli-and-daman-and-diu", "tripura", "uttarakhand", "uttar-pradesh", "west-bengal" ];

 for(let i=0;i<files.length;i++){
  ReadExcel(InputPath + files[i] + "-ulb.xlsx", 
    outputPath + "ulb-state-" + files[i] + ".txt", 
    businesslogic)
  .catch(console.error);
 }
};

async function businesslogic(values, output) {
 const local_body_type = values?.[2];
 const local_body_id = values?.[3]; // 11
 const local_body_name = values?.[5]?.replace(/'/g, "\\'");

 const query = "UPDATE ulb_local_bodies SET local_body_type='"+local_body_type+"' "+
    "WHERE local_body_name='"+local_body_name+"' AND local_body_id='"+local_body_id+"';";
 const logData = await InsertData(query);
 console.log(logData);
 output.write(logData+"\n");
}

Execute();