import { ReadExcel } from "#Utils/ExcelManager.js";
import { InsertData } from "#Utils/SQLManager.js";

const PROJECT_ROOT = process.cwd();

const OUTPUT_FILE = PROJECT_ROOT+"\\output\\lg-tlb\\tlb-india.txt";
const INPUT_FILE = PROJECT_ROOT+"\\data\\lg-tlb\\india-tlb.xlsx";

async function businesslogic(values, output) {
 const state_ut_id = values?.[1];
 const district_panchayat_id = values?.[3];
 const block_panchayat_id = values?.[4];
  const local_body_id = values?.[5];
 const local_body_name = values?.[7]?.replace(/'/g, "\\'");
 const local_body_type = values?.[10]?.replace(/'/g, "\\'");

 // console.log(local_body_id+"  "+state_ut_id+"   "+district_panchayat_id+"  "+block_panchayat_id+"  "+local_body_name+"   "+local_body_type);

 const query = "INSERT IGNORE INTO tlb_local_bodies(local_body_id, state_ut_id, district_panchayat_id, block_panchayat_id, local_body_name, local_body_type) "
    +"VALUES ("+local_body_id+","+state_ut_id+","+district_panchayat_id+","+block_panchayat_id+",'"+local_body_name+"','"+local_body_type+"');";
 const logData = await InsertData(query);
 console.log(logData);
 output.write(logData+"\n");
}

ReadExcel(INPUT_FILE, OUTPUT_FILE, businesslogic).catch(console.error);