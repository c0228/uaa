
export const getDeviceType = ()=>{
 const width = window.innerWidth; 
 if(width <= 767) {
    return "MOBILE";
 } else if (width >= 768 && width <= 1024) {
    return "TABLET";
 } else {
    return "DESKTOP";
 }
};