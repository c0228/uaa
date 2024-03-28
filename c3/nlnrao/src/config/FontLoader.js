// FontLoader.js
import React, { useEffect } from 'react';

const FontLoader = () => {
    useEffect(() => {
        const loadAndApplyFonts = async () => {
            const fontUrls = {
                Antipasto: process.env.PROJECT_URL+'fonts/antipasto/AntipastoPro-Bold.ttf',
                AntoniaRetro: process.env.PROJECT_URL+'fonts/antonia-retro/AntoniaRetro.ttf',
                AvenisSemiBold: process.env.PROJECT_URL+'fonts/avenis/Avenis-Semibold.ttf',
                BebasNeue: process.env.PROJECT_URL+'fonts/bebas-neue/BebasNeue-Regular.ttf', // Heading
                BloomsFree: process.env.PROJECT_URL+'fonts/blooms/BloomsFree.ttf', // logo
                Metropolis: process.env.PROJECT_URL+'fonts/metropolis/Metropolis-Medium.otf',
                OpenSansItalic: process.env.PROJECT_URL+'fonts/open-sans/OpenSans-Italic.ttf'
                // Add more font URLs as needed
            };

            // Load and apply each font face
            await Promise.all(Object.entries(fontUrls).map(async ([fontName, fontUrl]) => {
                const font = new FontFace(fontName, `url(${fontUrl})`);
                await font.load();
                document.fonts.add(font);
            })).catch(error => {
                console.error('Font loading failed:', error);
            });
        };

        loadAndApplyFonts();
    }, []);

    return null; // FontLoader component doesn't render anything
};

export default FontLoader;
