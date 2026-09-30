import { ReadExcel } from "#Utils/ExcelManager.js";
import { InsertData } from "#Utils/SQLManager.js";

const PROJECT_ROOT = process.cwd();

const OUTPUT_FILE = PROJECT_ROOT+"\\output\\mp\\assembly-constituency.txt";
const INPUT_FILE = PROJECT_ROOT+"\\data\\mp\\assembly-constituency.xlsx";

async function businesslogic(values, output) {
 const mla_constituency_id = values?.[5];
 const mp_constituency_id = values?.[3];
 const mla_constituency_name = values?.[6]?.replace(/'/g, "\\'");

 // console.log(mla_constituency_id+"  "+mp_constituency_id+"   "+mla_constituency_name);

 const query = "INSERT IGNORE INTO mla_constituency_list(mla_constituency_id, mp_constituency_id, mla_constituency_name) "
    +"VALUES ("+mla_constituency_id+","+mp_constituency_id+",'"+mla_constituency_name+"');";
 const logData = await InsertData(query);
 console.log(logData);
 output.write(logData+"\n");
}

ReadExcel(INPUT_FILE, OUTPUT_FILE, businesslogic).catch(console.error);