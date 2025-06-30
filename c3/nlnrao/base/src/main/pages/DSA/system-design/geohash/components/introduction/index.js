import React from "react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><i>When designing large-scale systems involving location data — 
   like <b>Uber</b>, <b>Google Maps</b>, or <b>Swiggy</b> — it's critical to efficiently store, search, and cluster geographic 
   coordinates (latitude & longitude). But raw latitude-longitude pairs aren't very index-friendly or easily comparable.</i></div>
   <div className="mtop15p"><i><b>Geohashing</b> solves this by encoding coordinates into a short string. This 
   enables <b>prefix-based searching</b>, <b>spatial indexing</b> and <b>fast proximity lookups</b> — crucial in geospatial 
   system design.</i></div>
   
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction to Geohash</b></h2></div>
   <div className="mtop15p"><b>Geohash</b> is a public domain algorithm developed by Gustavo Niemeyer in 2008. It encodes a pair 
   of latitude and longitude into a <b>base32 string</b>, which subdivides the Earth into a grid.</div>
   <div className="mtop15p"><h4 className="blog-head"><b>Key Features:</b></h4></div>
   <div>
      <ul>
         <li className="mtop5p">The longer the Geohash string, the <b>more precise</b> the location.</li>
         <li className="mtop5p">Geohashes with the <b>same prefix</b> are <b>geographically close</b> to each other.</li>
         <li className="mtop5p">Enables spatial proximity queries with <b>string matching</b> (e.g., in Redis, Elasticsearch, or SQL with LIKE).</li>
      </ul>
   </div>

   <div className="mtop15p"><h2 className="blog-head"><b>How Geohashing Works?</b></h2></div>
   <div>
      <ol>
         <li className="mtop5p">The world is divided into a grid.</li>
         <li className="mtop5p">Latitude and longitude are each converted to binary using interval bisection.</li>
         <li className="mtop5p">The bits are interleaved and encoded into a Base32 string.</li>
         <li className="mtop5p">Nearby areas have similar prefixes in the Geohash string.</li>
      </ol>
   </div>
   <div className="mtop15p">
      <SimpleTable header={["Precision","Length","Error Margin (Lat x Lon)"]} 
        columns={[
            ["Low","4","~20Km x 20Km"],
            ["Medium","6","~1.2Km x 0.6Km"],
            ["High","9","~5m x 5m"],
          ]} />
   </div>
 </div>);
};

export default Introduction;