
import React, { useState, useEffect } from "react";
import {Button,  Icon } from "e-ui-react";

const ScrollToTop = () => {

   /* useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 300;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    */

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <>
                <div style={{ position:'fixed', bottom:10, right:10, zIndex:1 }}>
                    <Button type="dark" size={11} onClick={()=>handleScrollToTop()}>
                    <Icon type="FontAwesome" name="fa-angle-double-up" size={16} />
                  </Button>
                </div>
        </>
    );
};

export default ScrollToTop;
