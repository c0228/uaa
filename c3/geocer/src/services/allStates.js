import { ReadExcel } from "#Utils/ExcelManager.js";

const PROJECT_ROOT = process.cwd();

const OUTPUT_FILE = PROJECT_ROOT+"\\output\\allStates.txt";
const INPUT_FILE = PROJECT_ROOT+"\\data\\allStates.xlsx";

async function businesslogic(values, output) {
 const state_ut_id = values?.[1];
 const state_ut = values?.[3];
 const country = "India";
 const type = values?.[7]==='U'?'UT':'State';
 const query = "INSERT INTO states(state_ut_id, state_ut, country, type) "
                        +"VALUES ("+state_ut_id+",'"+state_ut+"','"+country+"','"+type+"');";
 console.log(query);
 output.write(query+"\n");
}

ReadExcel(INPUT_FILE, OUTPUT_FILE, businesslogic).catch(console.error);