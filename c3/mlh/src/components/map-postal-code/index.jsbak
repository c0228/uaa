import React, { useState, useEffect, useRef } from "react";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";

const MapPostalCode = ({ pincode }) =>{
 const mapRef = useRef(null);
 const boundaryRef = useRef(null);
 const markerRef = useRef(null);
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
 L.Marker.prototype.options.icon = DefaultIcon;
 const initMap = () =>{
    const map = L.map("map").setView([20.5937, 78.9629], 5);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        { attribution: "&copy; OpenStreetMap contributors" }).addTo(map);
    mapRef.current = map;
    return () => { map.remove(); };
 };
 const showPincode = (map, pincode, geoJSON) => {
    // Remove previous boundary
    if(boundaryRef.current) { map.removeLayer(boundaryRef.current); }
    // Remove old marker
    if(markerRef.current) { map.removeLayer(markerRef.current); }
    // Create boundary
    const boundary = L.geoJSON(geoJSON, { style: { color: "#2196f3", weight: 3, fillColor: "#2196f3", fillOpacity: 0.20 }}).addTo(map);
    // Zoom to boundary
    map.fitBounds(boundary.getBounds(),{ padding: [30, 30] });
    // Center of PIN-code boundary
    const center = boundary.getBounds().getCenter();
    // Add marker
    const marker = L.marker(center).addTo(map);
    // Bind popup and OPEN it immediately
    boundary.bindPopup(`<b>PIN Code:</b> ${pincode}`);
    boundaryRef.current = boundary;
    markerRef.current = marker;
 };
 const getPincodeBoundary = async (pincode) => {
    const url =`https://livingatlas.esri.in/server1/rest/services/India/Pincode_Boundary_2025/MapServer/0/query`+
        `?where=pin_code%3D%27${pincode}%27`+
        `&outFields=*`+
        `&returnGeometry=true`+
        `&f=geojson`;
    const response = await fetch(url);
    if (!response.ok) { throw new Error("Failed to get PIN boundary"); }
    return await response.json();
 };
 const handleShowPincode = async() => {
    if (!mapRef.current) { return; }
    const geoJSON = await getPincodeBoundary(pincode);
    showPincode(mapRef.current, pincode, geoJSON);
 };
 useEffect(()=>{
    const cleanupMap = initMap();
    handleShowPincode();
    return cleanupMap;
 },[]);
 return (<>
  <div id="map" style={{ position:'fixed', width: "100%", height: screen.height, border:'1px solid #ccc' }} />
 </>);
};

export default MapPostalCode;