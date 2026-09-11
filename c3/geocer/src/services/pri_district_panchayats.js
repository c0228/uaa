import { ReadExcel } from "#Utils/ExcelManager.js";
import { InsertData } from "#Utils/SQLManager.js";

const PROJECT_ROOT = process.cwd();

const OUTPUT_FILE = PROJECT_ROOT+"\\output\\lg-pri\\pri-district-india.txt";
const INPUT_FILE = PROJECT_ROOT+"\\data\\lg-pri\\main_three_tables\\pri-district-india.xlsx";

async function businesslogic(values, output) {
 const state_ut_id = values?.[1]; // 7
 const district_panchayat_id = values?.[3]; // 9
 const district_panchayat_name = values?.[4]?.replace(/'/g, "\\'"); // 11
 console.log(state_ut_id+"  "+district_panchayat_id+"   "+district_panchayat_name);
 const query = "INSERT INTO pri_district_panchayats(district_panchayat_id, state_ut_id, district_panchayat_name) "
        +"VALUES ("+district_panchayat_id+","+state_ut_id+",'"+district_panchayat_name+"');";
 const logData = await InsertData(query);
 console.log(logData);
 output.write(logData+"\n");
}

ReadExcel(INPUT_FILE, OUTPUT_FILE, businesslogic).catch(console.error);