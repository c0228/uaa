import { ReadExcel } from "#Utils/ExcelManager.js";
import { InsertData } from "#Utils/SQLManager.js";

const PROJECT_ROOT = process.cwd();

const OUTPUT_FILE = PROJECT_ROOT+"\\output\\geo\\allVillages.txt";
const INPUT_FILE = PROJECT_ROOT+"\\data\\geo\\allVillages.xlsx";

async function businesslogic(values, output) {
 const village_id = values?.[7]; // 7
 const village = values?.[9]?.replace(/'/g, "\\'"); // 9
 const category = values?.[11]?.replace(/'/g, "\\'"); // 11
 const subdistrict_id = values?.[5]; // 5
 const query = "INSERT INTO def_geo_villages(village_id, village_name, category, subdistrict_id) "
        +"VALUES ("+village_id+",'"+village+"','"+category+"',"+subdistrict_id+");";
 const logData = await InsertData(query);
 console.log(logData);
 output.write(logData+"\n");
}

ReadExcel(INPUT_FILE, OUTPUT_FILE, businesslogic).catch(console.error);