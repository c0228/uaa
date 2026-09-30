
/* pri_village_panchayats : mp_constituency_id = 0 AND mla_constituency_id = 0 */

export const MissingMPMLAConstituency = async(req, res) =>{
 try {
   const query = "SELECT a.state_ut_id, a.state_ut_name, a.type, b.district_panchayat_id, b.district_panchayat_name, "+
      "c.block_panchayat_id, c.block_panchayat_name, d.local_body_id, d.local_body_name FROM "+
      "def_geo_states a, pri_district_panchayats b, pri_inter_panchayats c, pri_village_panchayats d "+
      "WHERE a.state_ut_id=b.state_ut_id AND b.district_panchayat_id=c.district_panchayat_id AND "+
      "c.block_panchayat_id = d.block_panchayat_id AND d.mp_constituency_id=0 AND d.mla_constituency_id=0;";
   const data = await GetData(query);
   const outputPath = path.join(process.cwd(),"output","missing-mp-mla-constituency.json");
   console.log("outputPath: "+outputPath);
   // Create output directory if it doesn't exist
   await fs.mkdir(path.dirname(outputPath), { recursive: true });
   // Save JSON
   await fs.writeFile(outputPath, JSON.stringify(data, null, 2), "utf8");
   res.json({ success: true, message: "Data saved successfully", records: data.length, file: outputPath });
 } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Failed to save data", error: error.message });
 }
};