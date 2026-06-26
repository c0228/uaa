import { setStorage, getStorage, deleteStorage } from "@Utils/LocalStorageManager.js"; 

const UPN_AUTH_DETAILS = "UPN_AUTH_DETAILS"; // Cache Param

export const GetUserProfile = () =>{ // Get from localStorage and set in userDetails
 let userDetails = getStorage(UPN_AUTH_DETAILS) || '{}';
    userDetails = JSON.parse(userDetails);
 return userDetails;
};

export const SetUserProfile = (details) =>{ // Set in localStorage and set in userDetails
 setStorage(UPN_AUTH_DETAILS,JSON.stringify(details));
}

export const ResetUserProfile = () =>{ // reset localStorage and userDetails
 deleteStorage(UPN_AUTH_DETAILS);
};