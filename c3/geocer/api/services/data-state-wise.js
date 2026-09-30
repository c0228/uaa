import fs from "fs/promises";
import path from "path";
import { GetData } from "#ApiUtils/SQLManager.js";

export const GetStatesUTsofIndia = async(req, res) =>{
 const query = "SELECT state_ut_id, state_ut_name, type FROM def_geo_states;";
 const StatesUTData = await GetData(query);
 res.json({ data: StatesUTData });
};

export const MappingGeoDistrictsPanchayatDistricts = async(req, res) =>{
 const { state_ut_id } = req.params;
 const query = "SELECT district_id, district_name, district_panchayat_id, district_panchayat_name "+
    "FROM def_geo_districts a, pri_district_panchayats b "+
    "WHERE a.district_name=b.district_panchayat_name AND a.state_ut_id=b.state_ut_id AND a.state_ut_id="+state_ut_id;
 const data = await GetData(query);
 res.json({ data: data });
};



export const StateWiseData = async(req, res) =>{
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
        inter_panchayat_data: priInterPanchayatsData
    });
 }
 res.json({ data: data });
};