import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import dotenv from "dotenv";

dotenv.config({ path: ".env.production" });

// Get the current directory in an ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// JSON file containing URLs
const jsonFilePath = path.join(__dirname, './../src/pages/Web3/routes.json');
const sitemapFilePath = path.join(__dirname, './../public/sitemap.xml');

fs.readFile(jsonFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading JSON file:', err);
        return;
    }

    try {
        const routes = JSON.parse(data);
        const siteData = Object.keys(routes?.urls);

        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0]; // Extracts YYYY-MM-DD

        // Construct XML sitemap
        let xmlContent = `<?xml version="1.0" encoding="UTF-8"?>\n`;
        xmlContent += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

        siteData.forEach(url => {
            xmlContent += `  <url>\n`;
            xmlContent += `     <loc>${process.env.PROJECT_URL+url}</loc>\n`;
            xmlContent += `     <lastmod>${formattedDate}</lastmod>\n`;
            xmlContent += `     <changefreq>daily</changefreq>\n`;
            xmlContent += `     <priority>1.0</priority>\n`;
            xmlContent += `  </url>\n`;
        });

        xmlContent += `</urlset>`;

        // Write sitemap.xml file
        fs.writeFile(sitemapFilePath, xmlContent, (err) => {
            if (err) {
                console.error('Error writing sitemap.xml:', err);
                return;
            }
            console.log('sitemap.xml has been generated successfully!');
        });
    } catch (parseError) {
        console.error('Error parsing JSON file:', parseError);
    }
});

