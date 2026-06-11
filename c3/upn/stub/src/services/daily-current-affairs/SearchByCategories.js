import SearchByCategoriesData from '#StaticData/data-dca-searchbycategories.json'  with { type: 'json' };

export const getArticlesByNiches = (req, res) => {
    try {
       const { category, subCategory, pageIndex } = req.body || {};
       const apiData = structuredClone(SearchByCategoriesData);

        apiData.current.category = category;
        apiData.current.subCategory = subCategory;
        apiData.current.pageIndex = pageIndex;
        
        console.log("apiData?.current?.data?.length: ", apiData?.current?.data?.length);
        for(let i=0;i<apiData?.current?.data?.length;i++){
            apiData.current.data[i].title = apiData?.current?.data[i].title+' Page - '+pageIndex;
        }

        res.json(apiData);
    } catch (error) {
        res.status(500).json({
            status: 'FAILURE',
            message: error.message
        });
    }
};