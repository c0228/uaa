import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () =>{
 const { pathname } = useLocation();

 useEffect(() => {
       document.querySelector("body").scrollTo({ top: 0, behavior: "smooth" });
 }, [pathname]);
  
 return (<></>);
};

export default ScrollToTop;