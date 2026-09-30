/* connecting and displaying pri_<tables> for displaying as an API */
import { GetData } from "#ApiUtils/SQLManager.js";

export const PRIConnectivity = async(req, res) =>{
 const { state_ut_id } = req.params;
 const priDistrictPanchayatsQuery = "SELECT district_panchayat_id,district_panchayat_name "+
    "FROM pri_district_panchayats WHERE state_ut_id="+state_ut_id; 
 const priDistrictPanchayatsData = await GetData(priDistrictPanchayatsQuery);
 let data = [];
 for(let i=0;i<priDistrictPanchayatsData?.length;i++){
    const district_panchayat_id = priDistrictPanchayatsData?.[i]?.["district_panchayat_id"];
    const district_panchayat_name = priDistrictPanchayatsData?.[i]?.["district_panchayat_name"];
    console.log(district_panchayat_id+" : "+district_panchayat_name);
    const priInterPanchayatsQuery = "SELECT block_panchayat_id, block_panchayat_name "+
            "FROM pri_inter_panchayats WHERE district_panchayat_id="+district_panchayat_id;
    console.log("priInterPanchayatsQuery: "+priInterPanchayatsQuery);
    const priInterPanchayatsData = await GetData(priInterPanchayatsQuery);
    data.push({
        district_panchayat_id: district_panchayat_id,
        district_panchayat_name: district_panchayat_name,
        inter_panchayat_count: priInterPanchayatsData?.length,
        inter_panchayat_data: priInterPanchayatsData
    });
 }
 res.json({ count: data?.length, data: data });
};