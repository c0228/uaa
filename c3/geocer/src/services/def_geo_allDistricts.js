import { ReadExcel } from "#Utils/ExcelManager.js";
import { InsertData } from "#Utils/SQLManager.js";

const PROJECT_ROOT = process.cwd();

const OUTPUT_FILE = PROJECT_ROOT+"\\output\\geo\\allDistricts.txt";
const INPUT_FILE = PROJECT_ROOT+"\\data\\geo\\allDistricts.xlsx";

async function businesslogic(values, output) {
 const district_id =  values?.[3];
 const district = values?.[4]?.replace(/'/g, "\\'");
 const state_ut_id = values?.[1];
 const query = "INSERT INTO def_geo_districts(district_id, district_name, state_ut_id) "
    +"VALUES ("+district_id+",'"+district+"',"+state_ut_id+");";
 const logData = await InsertData(query);
 console.log(logData);
 output.write(logData+"\n");
}

ReadExcel(INPUT_FILE, OUTPUT_FILE, businesslogic).catch(console.error);