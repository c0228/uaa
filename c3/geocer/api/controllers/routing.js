import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GetStatesUTsofIndia, MappingGeoDistrictsPanchayatDistricts, StateWiseData } from "./../services/data-state-wise.js";
import { MissingMPMLAConstituency } from "./../services/mp-mla-pri-zero.js";
import { DefGeoConnectivity } from "./../services/def-geo-connectivity.js";
import { PRIConnectivity } from "./../services/pri-connectivity.js";
import { DefGeoValidate } from "./../services/mp-mla-pri-validate.js";

dotenv.config();

const app = express();

app.use(cors()); // CORS
app.use(express.json()); // Parse JSON

app.get("/get/states-and-uts-list", GetStatesUTsofIndia);
app.get("/def/geo/connectivity/:state_ut_id", DefGeoConnectivity);
app.get("/map/pri/connectivity/:state_ut_id", PRIConnectivity);
app.get("/missing/mp/mla/pri", MissingMPMLAConstituency);
app.get("/map/districts-pri/:state_ut_id", MappingGeoDistrictsPanchayatDistricts);
app.get("/get/state-pri-list/:state_ut_id", StateWiseData);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

