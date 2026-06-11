
export const getAPIUrl = (category, subCategory, pageIndex) =>{
 return {
    url: process.env.STUB_URL+'search-articles-by-categories',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: { category, subCategory, pageIndex }
 }
};
