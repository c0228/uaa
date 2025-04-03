// FontLoader.js
import React, { useEffect } from 'react';

const FontLoader = ({ prefix }) => {
    useEffect(() => {
        const loadAndApplyFonts = async () => {
            const fontUrls = {
                Antipasto: prefix+'fonts/antipasto/AntipastoPro-Bold.ttf',
                AntoniaRetro: prefix+'fonts/antonia-retro/AntoniaRetro.ttf',
                AvenisSemiBold: prefix+'fonts/avenis/Avenis-Semibold.ttf',
                BebasNeue: prefix+'fonts/bebas-neue/BebasNeue-Regular.ttf', // Heading
                BloomsFree: prefix+'fonts/blooms/BloomsFree.ttf', // logo
                GoodTimes: prefix+'fonts/good-times/good-times-rg.otf',
                Metropolis: prefix+'fonts/metropolis/Metropolis-Medium.otf',
                MetropolisBold: prefix+'fonts/metropolis/Metropolis-Bold.otf',
                OpenSansItalic: prefix+'fonts/open-sans/OpenSans-Italic.ttf',
                OpenSansRegular: prefix+'fonts/open-sans/OpenSans-Regular.ttf'
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
