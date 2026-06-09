import { getStorage, setStorage, getAllStorage } from "@Utils/LocalStorageManager.js";

const CACHE_URL = process.env.PROJECT_URL+'static-data/data-app-cache.json';

export const CacheSyncprocess = (apiCacheVersion, callBack) =>{
/***
 * 1) Get Cache Data from localStorage
 * 2) Check the Cache Version from API and compare it with localStorage Cache Version
 * 3) IF they are not same, load CACHE API    
 */
    let cacheData = getStorage("UPN_CACHE_DATA") || '';
    let fetchCache = false;
    if(cacheData?.length===0) {
        console.log("No Cache Available");
        fetchCache = true;
    } else {
        cacheData = JSON.parse(cacheData);
        if(cacheData?.cacheVersion !== apiCacheVersion) {
            console.log("Updated Cache Available");
            fetchCache = true;
        }
    }
    if(fetchCache) {
        console.log("Retreiving Cache");
        fetch(CACHE_URL).then(result=>result.json()).then(response=>{
            setStorage("UPN_CACHE_DATA", JSON.stringify(response));
            if(callBack) {
              callBack(response); // Latest cache data
            }
        }).catch(err => {
                console.error(err);
                if(callBack) {   callBack(null, err); }
            });;
    } else {
        if(callBack) {
            callBack(cacheData);
        }
    }
};