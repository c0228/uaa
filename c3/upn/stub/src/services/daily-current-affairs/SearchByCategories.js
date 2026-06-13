import Appcache from '#StaticData/data-app-cache-en.json'  with { type: 'json' };
import SearchByCategoriesData from '#StaticData/data-dca-searchbycategories.json'  with { type: 'json' };

export const getArticlesByNiches = (req, res) => {
/***
   * ================================================
   * API DATA
   * ================================================
   * URL: <PROJECT_URL>/search-articles-by-categories
   * Method: POST
   * Input Requests:
   *      1) category [Mandatory]
   *      2) subCategory [Mandatory]
   *      3) pageIndex [Mandatory]
   */
    try {
       const { category, subCategory, pageIndex } = req.body || {};
       const apiData = structuredClone(SearchByCategoriesData);

       const niches = Appcache?.cacheData?.niches;

        apiData.details.category =   niches?.[category]?.label;
        apiData.details.subCategory =  niches?.[category]?.subcategories?.[subCategory].label;
        apiData.details.pageIndex = pageIndex;
        
        console.log("apiData?.details?.data?.length: ", apiData?.details?.data?.length);
        for(let i=0;i<apiData?.details?.data?.length;i++){
            apiData.details.data[i].title = apiData?.details?.data[i].title+' Page - '+pageIndex;
        }

        res.json(apiData);
    } catch (error) {
        res.status(500).json({
            status: 'FAILURE',
            message: error.message
        });
    }
};