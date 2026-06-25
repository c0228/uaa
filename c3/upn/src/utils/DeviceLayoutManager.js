
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

export const pxToVh = (percent)=>{
 const px = screen.height * percent; // 80% of screen height in px
 const vh = (px / screen.height) * 100;
 return vh+'vh';
}