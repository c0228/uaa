
export const getAPIUrl = (category, subCategory, pageIndex) =>{
 return {
    url: process.env.STUB_URL+'search-articles-by-categories',
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
      },
    body: JSON.stringify({ category, subCategory, pageIndex })
 }
};
