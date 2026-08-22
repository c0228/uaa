import React, { useEffect, useRef } from "react";
import L from "leaflet";

import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

import "leaflet/dist/leaflet.css";

const MapPostalCode = ({ pincode, styles }) => {

    const mapContainerRef = useRef(null);
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

    const removePincodeLayers = () => {

        const map = mapRef.current;

        if (!map) {
            return;
        }

        if (boundaryRef.current) {
            map.removeLayer(boundaryRef.current);
            boundaryRef.current = null;
        }

        if (markerRef.current) {
            map.removeLayer(markerRef.current);
            markerRef.current = null;
        }
    };

    const getPincodeBoundary = async (pincode) => {

        if (!pincode) {
            return null;
        }

        const url =
            `https://livingatlas.esri.in/server1/rest/services/India/Pincode_Boundary_2025/MapServer/0/query` +
            `?where=pin_code%3D%27${encodeURIComponent(pincode)}%27` +
            `&outFields=*` +
            `&returnGeometry=true` +
            `&f=geojson`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Failed to get PIN boundary");
        }

        return await response.json();
    };

    const showPincode = (pincode, geoJSON) => {

        const map = mapRef.current;

        if (!map) {
            return;
        }

        // Remove previous boundary and marker
        removePincodeLayers();

        // No GeoJSON
        if (!geoJSON) {
            return;
        }

        // API returned no features
        if (
            !geoJSON.features ||
            geoJSON.features.length === 0
        ) {
            console.warn(`No boundary found for PIN code: ${pincode}`);
            return;
        }

        const boundary = L.geoJSON(geoJSON, {
            style: {
                color: "#2196f3",
                weight: 3,
                fillColor: "#2196f3",
                fillOpacity: 0.20
            }
        }).addTo(map);

        // Check bounds before using them
        const bounds = boundary.getBounds();

        if (!bounds.isValid()) {
            console.warn(`Invalid boundary for PIN code: ${pincode}`);
            map.removeLayer(boundary);
            return;
        }

        // Zoom to boundary
        map.fitBounds(bounds, {
            padding: [30, 30]
        });

        // Center of PIN-code boundary
        const center = bounds.getCenter();

        // Add marker
        const marker = L.marker(center)
            .addTo(map)
            .bindPopup(`<b>PIN Code:</b> ${pincode}`);

        boundaryRef.current = boundary;
        markerRef.current = marker;
    };

    useEffect(() => {

        // Create map only once
        if (!mapRef.current && mapContainerRef.current) {

            const map = L.map(mapContainerRef.current)
                .setView([20.5937, 78.9629], 5);

            L.tileLayer(
                "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                {
                    attribution: "&copy; OpenStreetMap contributors"
                }
            ).addTo(map);

            mapRef.current = map;
        }

        return () => {

            removePincodeLayers();

            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        };

    }, []);

    useEffect(() => {

        const handleShowPincode = async () => {

            const map = mapRef.current;

            if (!map) {
                return;
            }

            // Empty PIN code
            if (!pincode || String(pincode).trim() === "") {

                removePincodeLayers();

                // Reset map to India
                map.setView([20.5937, 78.9629], 5);

                return;
            }

            try {

                const cleanPincode = String(pincode).trim();

                const geoJSON =
                    await getPincodeBoundary(cleanPincode);

                // Component may have been unmounted
                if (!mapRef.current) {
                    return;
                }

                showPincode(cleanPincode, geoJSON);

            } catch (error) {

                console.error(
                    "Unable to load PIN code boundary:",
                    error
                );

                removePincodeLayers();

            }
        };

        handleShowPincode();

    }, [pincode]);

    return (
        <div
            ref={mapContainerRef}
            style={styles}
        />
    );
};

export default MapPostalCode;