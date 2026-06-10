
export const getAPIUrl = (category, subCategory, pageIndex) =>{
 return process.env.PROJECT_URL+'static-data/search-by-categories/'+
        category+'/'+subCategory+'/data-dca-page-'+pageIndex+'.json';
};