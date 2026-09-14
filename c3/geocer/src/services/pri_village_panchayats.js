import { ReadExcel } from "#Utils/ExcelManager.js";
import { InsertData } from "#Utils/SQLManager.js";

const PROJECT_ROOT = process.cwd();

const OUTPUT_FILE = PROJECT_ROOT+"\\output\\lg-pri\\pri-villages-india.txt";
const INPUT_FILE = PROJECT_ROOT+"\\data\\lg-pri\\main_three_tables\\pri-villages-india.xlsx";

async function businesslogic(values, output) {
 const local_body_id = values?.[7];
 const block_panchayat_id = values?.[5]; // 9
 const local_body_name = values?.[8]?.replace(/'/g, "\\'"); // 11

 const query = "INSERT IGNORE INTO pri_village_panchayats(local_body_id, block_panchayat_id, local_body_name) "+
    "VALUES ("+local_body_id+","+block_panchayat_id+",'"+local_body_name+"')";
 const logData = await InsertData(query);
 console.log(logData);
 output.write(logData+"\n");
}

ReadExcel(INPUT_FILE, OUTPUT_FILE, businesslogic).catch(console.error);