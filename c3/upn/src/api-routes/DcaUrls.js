
export const searchArticlesByCategoriesAPI = (category, subCategory, pageIndex) =>{
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
 return {
    url: process.env.STUB_URL+'search-articles-by-categories',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: { category, subCategory, pageIndex }
 }
};

export const searchArticlesByTextDateAPI = (text, date, activeNiche, pageIndex) =>{
  /***
   * ================================================
   * API DATA
   * ================================================
   * URL: <PROJECT_URL>/search-articles-by-date
   * Method: POST
   * Input Requests:
   *      1) text or date [Mandatory]
   *      2) activeNiche [Optional]
   *      3) pageIndex [Mandatory]
   */
  return {
    url: process.env.STUB_URL+'search-articles-by-text-date',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: { text, date, activeNiche, pageIndex }
  };
};
