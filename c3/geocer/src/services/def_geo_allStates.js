import { ReadExcel } from "#Utils/ExcelManager.js";
import { InsertData } from "#Utils/SQLManager.js";

const PROJECT_ROOT = process.cwd();

const OUTPUT_FILE = PROJECT_ROOT+"\\output\\geo\\allStates.txt";
const INPUT_FILE = PROJECT_ROOT+"\\data\\geo\\allStates.xlsx";

async function businesslogic(values, output) {
 const state_ut_id = values?.[1];
 const state_ut = values?.[3]?.replace(/'/g, "\\'");
 const country = "India";
 const type = values?.[7]==='U'?'UT':'State';
 const query = "INSERT INTO def_geo_states(state_ut_id, state_ut_name, country, type) "
                        +"VALUES ("+state_ut_id+",'"+state_ut+"','"+country+"','"+type+"');";
 const logData = await InsertData(query);
 console.log(logData);
 output.write(logData+"\n");
}

ReadExcel(INPUT_FILE, OUTPUT_FILE, businesslogic).catch(console.error);