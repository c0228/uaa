import Appcache from '#StaticData/data-app-cache.json'  with { type: 'json' };
import { getArticlesByNiches } from '#Services/daily-current-affairs/SearchByCategories.js';
import { getArticlesByTextDate } from '#Services/daily-current-affairs/SearchByTextDate.js';
import express from 'express';
import cors from 'cors';

// 2. Initialize the Express application
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// API URLs
app.get('/app/cache', (req, res)=>res.json(Appcache));  // App Cache
app.post('/search-articles-by-categories', getArticlesByNiches); // Search Articles by Categories
app.post('/search-articles-by-text-date', getArticlesByTextDate); // Search Articles by Date

// 3. Define a route that returns JSON data
app.get('/api/data', (req, res) => {
    const userSample = {
        name: "Alex",
        role: "Developer",
        status: "Active"
    };
    res.json(userSample); 
});

// 4. Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/api/data`);
});
