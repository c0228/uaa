
export const searchArticlesByCategoriesAPI = (category, subCategory, pageIndex) =>{
 return {
    url: process.env.STUB_URL+'search-articles-by-categories',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: { category, subCategory, pageIndex }
 }
};

export const searchArticlesByDateAPI = (date) =>{
  return {
    url: process.env.STUB_URL+'search-articles-by-date',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: { date }
  };
};
