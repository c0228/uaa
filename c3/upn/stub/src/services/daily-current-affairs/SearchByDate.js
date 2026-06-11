import SearchByDateData from '#StaticData/data-dca-searchbydate.json'  with { type: 'json' };

export const getArticlesByDate = (req, res) => {
/***
   * ================================================
   * API DATA
   * ================================================
   * URL: <PROJECT_URL>/search-articles-by-date
   * Method: POST
   * Input Requests:
   *      1) date [Mandatory]
   *      2) activeNiche [Optional]
   *      3) pageIndex [Mandatory]
   */
    try {
       const { date, activeNiche, pageIndex } = req.body || {};
       const apiData = structuredClone(SearchByDateData);

       // Set Articles to selected Date
       if(date){ apiData.details.searchDate = date; }

       // Set activeNiche
       if(activeNiche?.length>0){ apiData.details.activeNiche = activeNiche; }
       else { apiData.details.activeNiche = 'Polity and Governance / Governance'; }

       // Set pageIndex
       apiData.details.pageIndex = pageIndex;

       // Data Update
       for(let i=0;i<apiData.details.data?.length;i++){
        apiData.details.data[i].title = apiData.details.data[i].title+'Page-'+pageIndex;
       }

       res.json(apiData);
    } catch (error) {
        res.status(500).json({
            status: 'FAILURE',
            message: error.message
        });
    }
};