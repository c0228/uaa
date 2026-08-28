import { ReadExcel } from "#Utils/ExcelManager.js";

const PROJECT_ROOT = process.cwd();

const OUTPUT_FILE = PROJECT_ROOT+"\\output\\allDistricts.txt";
const INPUT_FILE = PROJECT_ROOT+"\\data\\allDistricts.xlsx";

async function businesslogic(values, output) {
 const district_id =  values?.[3];
 const district = values?.[4];
 const state_ut_id = values?.[1];
 const query = "INSERT INTO districts(district_id, district, state_ut_id) "
    +"VALUES ("+district_id+",'"+district+"',"+state_ut_id+");";
 console.log(query);
 output.write(query+"\n");
}

ReadExcel(INPUT_FILE, OUTPUT_FILE, businesslogic).catch(console.error);