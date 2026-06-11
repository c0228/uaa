import SearchByDateData from '#StaticData/data-dca-searchbydate.json'  with { type: 'json' };

export const getArticlesByDate = (req, res) => {
    try {
       const { date, pageIndex } = req.body || {};
       const apiData = structuredClone(SearchByDateData);

       // Set Articles to selected Date
       if(date){
        const articles = apiData?.["2026-06-05"];
        delete apiData["2026-06-05"];
        apiData[date] = articles;
       }

       res.json(apiData);
    } catch (error) {
        res.status(500).json({
            status: 'FAILURE',
            message: error.message
        });
    }
};