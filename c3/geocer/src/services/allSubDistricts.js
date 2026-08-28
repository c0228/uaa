import { ReadExcel } from "#Utils/ExcelManager.js";

const PROJECT_ROOT = process.cwd();

const OUTPUT_FILE = PROJECT_ROOT+"\\output\\allSubDistricts.txt";
const INPUT_FILE = PROJECT_ROOT+"\\data\\allSubDistricts.xlsx";

async function businesslogic(values, output) {
 const subdistrict_id = values?.[5]; // 5
 const subdistrict = values?.[7]; // 7
 const district_id = values?.[3]; // 3
 const query = "INSERT INTO subdistricts(subdistrict_id, subdistrict, district_id) "
        +"VALUES ("+subdistrict_id+",'"+subdistrict+"',"+district_id+");";
 console.log(query);
 output.write(query+"\n");
}

ReadExcel(INPUT_FILE, OUTPUT_FILE, businesslogic).catch(console.error);