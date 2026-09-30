import { ReadExcel } from "#Utils/ExcelManager.js";
import { InsertData } from "#Utils/SQLManager.js";

const PROJECT_ROOT = process.cwd();

const OUTPUT_FILE = PROJECT_ROOT+"\\output\\mp\\parliament-constituency.txt";
const INPUT_FILE = PROJECT_ROOT+"\\data\\mp\\parliament-constituency.xlsx";

async function businesslogic(values, output) {
 const mp_constituency_id = values?.[3];
 const state_ut_id = values?.[1];
 const mp_constituency_name = values?.[4]?.replace(/'/g, "\\'");

 // console.log(mp_constituency_id+"  "+state_ut_id+"   "+mp_constituency_name);

 const query = "INSERT INTO mp_constituency_list(mp_constituency_id, state_ut_id, mp_constituency_name) "
    +"VALUES ("+mp_constituency_id+","+state_ut_id+",'"+mp_constituency_name+"')";
 const logData = await InsertData(query);
 console.log(logData);
 output.write(logData+"\n");
}

ReadExcel(INPUT_FILE, OUTPUT_FILE, businesslogic).catch(console.error);