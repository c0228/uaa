import { setStorage, getStorage, deleteStorage } from "@Utils/LocalStorageManager.js"; 

export const GetUserProfile = () =>{ // Get from localStorage and set in userDetails
 let userDetails = getStorage("UPN_AUTH_DETAILS") || '{}';
    userDetails = JSON.parse(userDetails);
 return userDetails;
};