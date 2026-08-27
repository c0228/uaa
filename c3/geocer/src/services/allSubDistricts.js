import { ReadExcel } from "#Utils/ExcelManager.js";

const PROJECT_ROOT = process.cwd();

const OUTPUT_FILE = PROJECT_ROOT+"\\output\\allSubDistricts.txt";
const INPUT_FILE = PROJECT_ROOT+"\\data\\allSubDistricts.xlsx";

async function businesslogic(values, output) {

 const query = "";
 console.log(query);
 output.write(query+"\n");
}

ReadExcel(INPUT_FILE, OUTPUT_FILE, businesslogic).catch(console.error);