import SearchByDateData from '#StaticData/data-dca-searchbydate.json'  with { type: 'json' };

export const getArticlesByDate = (req, res) => {
    try {
       const { date, pageIndex } = req.body || {};
       const apiData = structuredClone(SearchByDateData);

       // Set Articles to selected Date
       if(date){
        apiData.details.searchDate = date;
       }

       res.json(apiData);
    } catch (error) {
        res.status(500).json({
            status: 'FAILURE',
            message: error.message
        });
    }
};