import { ReadExcel } from "#Utils/ExcelManager.js";
import { InsertData } from "#Utils/SQLManager.js";

const PROJECT_ROOT = process.cwd();

const OUTPUT_FILE = PROJECT_ROOT+"\\output\\lg-pri\\pri-intermediate-india.txt";
const INPUT_FILE = PROJECT_ROOT+"\\data\\lg-pri\\main_three_tables\\pri-intermediate-india.xlsx";

async function businesslogic(values, output) {
 const intermediate_panchayat_id = values?.[5];
 const district_panchayat_id = values?.[3]; // 9
 const intermediate_panchayat_name = values?.[6]?.replace(/'/g, "\\'"); // 11
 const query = "INSERT IGNORE INTO pri_inter_panchayats(block_panchayat_id, district_panchayat_id, block_panchayat_name) "
        +"VALUES ("+intermediate_panchayat_id+","+district_panchayat_id+",'"+intermediate_panchayat_name+"');";
 const logData = await InsertData(query);
 console.log(logData);
 output.write(logData+"\n");
}

ReadExcel(INPUT_FILE, OUTPUT_FILE, businesslogic).catch(console.error);