import { ReadExcel } from "#Utils/ExcelManager.js";
import { InsertData } from "#Utils/SQLManager.js";

const PROJECT_ROOT = process.cwd();

// const OUTPUT_FILE = PROJECT_ROOT+"\\output\\lg-pri\\pri-villages-india.txt";
// const INPUT_FILE = PROJECT_ROOT+"\\data\\lg-pri\\main_three_tables\\pri-villages-india.xlsx";

const Execute = () =>{
 const InputPath = PROJECT_ROOT+"\\data\\lg-pri\\wards-by-state\\";
 const outputPath = PROJECT_ROOT+"\\output\\lg-pri\\";
 const files = ["andaman-and-nicobar-islands", "andhra-pradesh", "arunachal-pradesh", "assam", "bihar",
    "chandigarh", "chhattisgarh", "delhi", "goa", "gujarat", "haryana", "himachalPradesh", 
    "jammuAndKashmir", "jharkhand", "karnataka", "kerala", "ladakh", "lakshadweep", "madhyaPradesh",
    "maharashtra", "manipur", "meghalaya", "mizoram", "nagaland", "odisha", "puducherry", "punjab",
    "rajasthan", "sikkim", "tamilNadu", "telangana", "theDadraAndNagarHaveliAndDamanAndDiu", "tripura",
    "uttarakhand", "uttarPradesh", "westBengal"
 ];

 for(let i=0;i<files.length;i++){
  ReadExcel(InputPath + files[i] + "_wards.xlsx", 
    outputPath + "pri-wards-" + files[i] + ".txt", 
    businesslogic)
  .catch(console.error);
 }
};

async function businesslogic(values, output) {
 const local_body_id = values?.[1];
 const local_ward_id = values?.[6]; // 9
 const local_ward_name = values?.[8]?.replace(/'/g, "\\'"); // 11

 const query = "INSERT IGNORE INTO pri_local_wards(local_ward_id, local_body_id, local_ward_name) "+
    "VALUES ("+local_ward_id+","+local_body_id+",'"+local_ward_name+"')";
 const logData = await InsertData(query);
 console.log(logData);
 output.write(logData+"\n");
}

Execute();