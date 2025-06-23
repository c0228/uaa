import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import dotenv from "dotenv";

dotenv.config({ path: "env/main/.env.production" });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pagesDir = path.join(__dirname, './../src/main/pages');
const publicDir = path.join(__dirname, './../public/sitemaps');
const robotsFilePath = path.join(__dirname, './../public/robots.txt');

// Ensure the sitemaps directory exists
if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
}

fs.readdir(pagesDir, async (err, folders) => {
    if (err) {
        console.error('Error reading pages directory:', err);
        return;
    }

    let robotsContent = "User-agent: *\nAllow: /\n\n# Point search engines to your sitemap\n";
    let sitemapPromises = [];

    for (const folder of folders) {
        const jsonFilePath = path.join(pagesDir, folder, 'component.routes.json');
        const sitemapFilePath = path.join(publicDir, `sm-${folder?.toLowerCase()}.xml`);

        if (fs.existsSync(jsonFilePath)) {
            const promise = fs.promises.readFile(jsonFilePath, 'utf8')
                .then(data => {
                    try {
                        const routes = JSON.parse(data);
                        const siteData = Object.keys(routes?.urls || {});
                        const today = new Date().toISOString().split('T')[0];

                        let xmlContent = `<?xml version="1.0" encoding="UTF-8"?>\n`;
                        xmlContent += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

                        siteData.forEach(url => {
                            xmlContent += `  <url>\n`;
                            xmlContent += `     <loc>${process.env.PROJECT_MAIN_URL + url}</loc>\n`;
                            xmlContent += `     <lastmod>${today}</lastmod>\n`;
                            xmlContent += `     <changefreq>daily</changefreq>\n`;
                            xmlContent += `     <priority>1.0</priority>\n`;
                            xmlContent += `  </url>\n`;
                        });

                        xmlContent += `</urlset>`;

                        return fs.promises.writeFile(sitemapFilePath, xmlContent)
                            .then(() => {
                                console.log(`Sitemap generated: sm-${folder?.toLowerCase()}.xml`);
                                robotsContent += `Sitemap: ${process.env.PROJECT_MAIN_URL}sitemaps/sm-${folder?.toLowerCase()}.xml\n`;
                            });
                    } catch (parseError) {
                        console.error(`Error parsing JSON file in ${folder}:`, parseError);
                    }
                })
                .catch(err => console.error(`Error reading JSON file in ${folder}:`, err));

            sitemapPromises.push(promise);
        }
    }

    // Wait for all sitemaps to be generated before writing robots.txt
    Promise.all(sitemapPromises).then(() => {
        fs.promises.writeFile(robotsFilePath, robotsContent)
            .then(() => console.log('robots.txt has been generated successfully!'))
            .catch(err => console.error('Error writing robots.txt:', err));
    });
});
