import React from "react";
import { Tab, Highlight } from "e-ui-react";

const GEOHASH_EXAMPLE_JAVA = `import ch.hsr.geohash.GeoHash;
import ch.hsr.geohash.WGS84Point;

public class GeoHashExample {
    public static void main(String[] args) {
        double latitude = 37.7749;
        double longitude = -122.4194;

        // Encode
        GeoHash hash = GeoHash.withCharacterPrecision(latitude, longitude, 6);
        System.out.println("Geohash: " + hash.toBase32()); // e.g., 9q8yyz

        // Decode
        WGS84Point point = hash.getPoint();
        System.out.println("Decoded: " + point.getLatitude() + ", " + point.getLongitude());
    }
}`;

const GEOHASH_EXAMPLE_JS = `const ngeohash = require('ngeohash');

// Encode
const hash = ngeohash.encode(37.7749, -122.4194); // San Francisco
console.log("Geohash:", hash); // e.g., 9q8yyz

// Decode
const { latitude, longitude } = ngeohash.decode(hash);
console.log("Decoded:", latitude, longitude);`;

const GEOHASH_EXAMPLE_PYTHON = `import geohash

# Encode latitude & longitude
encoded = geohash.encode(37.7749, -122.4194)  # San Francisco
print(f"Geohash: {encoded}")  # e.g., 9q8yyz

# Decode back to coordinates
lat, lon = geohash.decode(encoded)
print(f"Decoded: {lat}, {lon}")`;

const Example = () =>{

   const JavaCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
       <div><b>Use Dependency:</b></div>
       <div className="mtop5p">
         <a href="https://github.com/davidmoten/geo" target="_blank">geohash-java</a> or <a href="https://mvnrepository.com/artifact/ch.hsr/geohash" target="_blank">ch.hsr.geohash</a></div>
       <div className="mtop5p"><b>Code:</b></div>
       <div className="mtop5p"><Highlight content={GEOHASH_EXAMPLE_JAVA} lang="java" /></div>
      </div>);
   };

   const JSCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
         <div><b>Install via npm:</b></div>
         <div className="mtop5p"><Highlight content={`npm install ngeohash`} lang="javascript" /></div>
         <div className="mtop5p"><b>Code:</b></div>
         <div className="mtop5p"><Highlight content={GEOHASH_EXAMPLE_JS} lang="javascript" /></div>
      </div>);
   };

   const PythonCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
         <div><b>Install via pip:</b></div>
         <div className="mtop5p"><Highlight content={`pip install python-geohash`} lang="python" /></div>
         <div className="mtop5p"><b>Code:</b></div>
         <div className="mtop5p"><Highlight content={GEOHASH_EXAMPLE_PYTHON} lang="python" /></div>
      </div>);
   };

 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Example Implementations</b></h2></div>
    <div className="mtop15p">
      <Tab menulinks={[{ id:"java", label:"Java", url:"#", component:(<JavaCode />) },
            { id:"javascript", label:"Javascript", url:"#", component:(<JSCode />) },
            { id:"python", label:"Python", url:"#", component:(<PythonCode />) }]} />
    </div>
 </div>);
};

export default Example;