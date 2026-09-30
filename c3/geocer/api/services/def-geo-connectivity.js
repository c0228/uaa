/* connecting and displaying def_geo_<tables> for displaying as an API */
import { GetData } from "#ApiUtils/SQLManager.js";

export const DefGeoConnectivity = async(req, res) =>{
    const { state_ut_id } = req.params;
    const query = "SELECT * FROM def_geo_states a, def_geo_districts b, def_geo_subdistricts c, def_geo_villages d "+
        "WHERE a.state_ut_id=b.state_ut_id AND b.district_id=c.district_id AND c.subdistrict_id=d.subdistrict_id AND "+
        "a.state_ut_id="+state_ut_id;
    const data = await GetData(query);
    res.json({ count: data?.length, data: data });
};