import { getStorage, setStorage } from "@Utils/LocalStorageManager.js";

export const getAppLang = () =>{
  let appLang = getStorage('UPN_APP_LANG');
  if(appLang === null) { // set Default 'en'
    appLang = 'en';
    setStorage('UPN_APP_LANG', appLang);
  }
  return appLang;
};

export const UpdateAppLangWithChangeUrl = (newLang) => {
  setStorage('UPN_APP_LANG', newLang);
  const pathParts = window.location.pathname.split('/');
      pathParts[1] = newLang; // Remove first empty element caused by leading '/'
  return process.env.PROJECT_URL + pathParts.join('/').replace(/^\/+/, '');
};