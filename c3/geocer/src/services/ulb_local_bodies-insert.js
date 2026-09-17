import { ReadExcel } from "#Utils/ExcelManager.js";
import { InsertData } from "#Utils/SQLManager.js";

const PROJECT_ROOT = process.cwd();

const OUTPUT_FILE = PROJECT_ROOT+"\\output\\lg-ulb\\ulb-india.txt";
const INPUT_FILE = PROJECT_ROOT+"\\data\\lg-ulb\\india-ulb.xlsx";

async function businesslogic(values, output) {
 const local_body_id = values?.[3];
 const state_ut_id = values?.[1]; // 9
 const local_body_type = "";
 const local_body_name = values?.[5]?.replace(/'/g, "\\'");

 const query = "INSERT IGNORE INTO ulb_local_bodies(local_body_id, state_ut_id, local_body_type, local_body_name)  "+
    "VALUES ("+local_body_id+","+state_ut_id+",'"+local_body_type+"','"+local_body_name+"')";
 const logData = await InsertData(query);
 console.log(logData);
 output.write(logData+"\n");
}

ReadExcel(INPUT_FILE, OUTPUT_FILE, businesslogic).catch(console.error);