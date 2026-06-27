import { setStorage, getStorage, deleteStorage } from "@Utils/LocalStorageManager.js"; 
import { getAppContext } from "e-ui-react";

const UPN_AUTH_DETAILS = "UPN_AUTH_DETAILS"; // Cache Param

// const appContext = getAppContext();

export const GetUserProfile = () =>{ // Get from localStorage and set in userDetails
 let userDetails = getStorage(UPN_AUTH_DETAILS) || '{}';
    userDetails = JSON.parse(userDetails);
 // appContext.setContextData({ userDetails: userDetails });
 return userDetails;
};

export const SetUserProfile = (details) =>{ // Set in localStorage and set in userDetails
 setStorage(UPN_AUTH_DETAILS,JSON.stringify(details));
 // appContext.setContextData({ userDetails: details });
}

export const ResetUserProfile = () =>{ // reset localStorage and userDetails
 deleteStorage(UPN_AUTH_DETAILS);
 // appContext.setContextData({ userDetails: userDetails });
};
