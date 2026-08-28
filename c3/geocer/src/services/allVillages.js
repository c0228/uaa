import { ReadExcel } from "#Utils/ExcelManager.js";

const PROJECT_ROOT = process.cwd();

const OUTPUT_FILE = PROJECT_ROOT+"\\output\\allVillages.txt";
const INPUT_FILE = PROJECT_ROOT+"\\data\\allVillages.xlsx";

async function businesslogic(values, output) {
 const village_id = values?.[7]; // 7
 const village = values?.[9]; // 9
 const category = values?.[11]; // 11
 const subdistrict_id = values?.[5]; // 5
 const query = "INSERT INTO villages(village_id, village, category, subdistrict_id) "
        +"VALUES ("+village_id+",'"+village+"','"+category+"',"+subdistrict_id+");";
 console.log(query);
 output.write(query+"\n");
}

ReadExcel(INPUT_FILE, OUTPUT_FILE, businesslogic).catch(console.error);