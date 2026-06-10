import SearchByCategoriesData from '#StaticData/data-dca-searchbycategories.json'  with { type: 'json' };

export const getArticlesByNiches = (req, res) => {
    try {
       const { category, subCategory, pageIndex } = req.body;
       const data = structuredClone(SearchByCategoriesData);

        data.current.category = category;
        data.current.subCategory = subCategory;
        data.current.pageIndex = pageIndex;

        res.json(data);
    } catch (error) {
        res.status(500).json({
            status: 'FAILURE',
            message: error.message
        });
    }
};