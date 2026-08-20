import React, { useState, useEffect, useRef } from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import Header2 from "@Templates/Header2/index.js";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import './index.css';

// Hard-coded PIN code
    const PINCODE = "500072";

    // Hard-coded boundary for testing
    // GeoJSON uses [longitude, latitude]
    const PINCODE_BOUNDARY = {
        type: "Feature",
        properties: {
            pincode: PINCODE
        },
        geometry: {
            type: "Polygon",
            coordinates: [[
                [78.0000, 17.0000],
                [78.0500, 17.0000],
                [78.0600, 17.0500],
                [78.0200, 17.0900],
                [77.9800, 17.0600],
                [78.0000, 17.0000]
            ]]
        }
    };

    // Fix Leaflet marker icon
    const DefaultIcon = L.icon({
        iconUrl: markerIcon,
        iconRetinaUrl: markerIcon2x,
        shadowUrl: markerShadow,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });


const SetPostalCode = ()=>{
 const mapRef = useRef(null);
 const boundaryRef = useRef(null);
 const markerRef = useRef(null);
 const [userDetails, setUserDetails] = useState();
 L.Marker.prototype.options.icon = DefaultIcon;
 const initMap = () =>{
    const map = L.map("map").setView([20.5937, 78.9629], 5);
        L.tileLayer(
            "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            {
                attribution: "&copy; OpenStreetMap contributors"
            }
        ).addTo(map);

        mapRef.current = map;

        return () => {
            map.remove();
        };
 };

 const showPincode = (map, pincode, geoJSON) => {

        // Remove previous boundary
        if (boundaryRef.current) {
            map.removeLayer(boundaryRef.current);
        }

        // Remove old marker
        if (markerRef.current) {
            map.removeLayer(markerRef.current);
        }

        // Create boundary
        const boundary = L.geoJSON(
            geoJSON,
            {
                style: {
                    color: "#2196f3",
                    weight: 3,
                    fillColor: "#2196f3",
                    fillOpacity: 0.20
                }
            }
        ).addTo(map);

        // Zoom to boundary
        map.fitBounds(
            boundary.getBounds(),
            {
                padding: [30, 30]
            }
        );

        // Center of PIN-code boundary
    const center = boundary.getBounds().getCenter();

    // Add marker
    const marker = L.marker(center)
        .addTo(map);

        // Bind popup and OPEN it immediately
        boundary.bindPopup(
            `<b>PIN Code:</b> ${pincode}`
        );

        boundaryRef.current = boundary;
         markerRef.current = marker;
    };

 const getPincodeBoundary = async (pincode) => {

    const url =
        `https://livingatlas.esri.in/server1/rest/services/India/Pincode_Boundary_2025/MapServer/0/query` +
        `?where=pin_code%3D%27${pincode}%27` +
        `&outFields=*` +
        `&returnGeometry=true` +
        `&f=geojson`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Failed to get PIN boundary");
    }

    return await response.json();
};

 const handleShowPincode = async() => {

        if (!mapRef.current) {
            return;
        }

        const geoJSON = await getPincodeBoundary(PINCODE);

        showPincode(
            mapRef.current,
            PINCODE,
            geoJSON
        );
    };

 const initialize = () =>{
    const storedUser = localStorage.getItem("MLH_USER_DETAILS");
    if(!storedUser) {
        window.location.replace(process.env.PROJECT_URL);
        return null;
    }
    let uDetails;
    try {
        uDetails = JSON.parse(storedUser);
        setUserDetails(uDetails);
    } catch {
        window.location.replace(process.env.REACT_APP_PROJECT_URL);
        return null;
    }
 };
 useEffect(()=>{
    const cleanupMap = initMap();
    initialize();
    return cleanupMap;
 },[]);
 return (<>
    <Header2 />
    <ContainerFluid>
        <Row>
            <Col md={3}>
                <div style={{ marginTop:'15px', display:'flex', flex:1, flexDirection:'row' }}>
                        <div>
                            <img src={userDetails?.profilePic}  referrerPolicy="no-referrer" 
                                style={{ width:'60px', height:'60px', borderRadius:'50%' }} />
                        </div>
                        <div style={{ paddingLeft:'15px', paddingTop:'8px' }}>
                            <div>{userDetails?.surName}  {userDetails?.name}</div>
                            <div>{userDetails?.email}</div>
                        </div>
                </div>
                <button  onClick={handleShowPincode}>Press</button>
            </Col>
            <Col md={9}>
                <div id="map" style={{ position:'fixed', width: "100%", height: screen.height, border:'1px solid #ccc' }} />
            </Col>
        </Row>
    </ContainerFluid>
 </>);
};

export default SetPostalCode;