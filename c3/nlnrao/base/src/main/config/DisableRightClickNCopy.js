import React, { useEffect } from "react";

const DisableRightClickNCopy = () =>{

  useEffect(() => {
        const handleContextMenu = (event) => {
          event.preventDefault();
        };
    
        const handleKeyDown = (event) => {
          if (event.key === 'c' && (event.ctrlKey || event.metaKey)) {
            event.preventDefault();
          }
        };

        const handleSelectStart = (event) => {
            event.preventDefault();
        };
    
        document.addEventListener('contextmenu', handleContextMenu);
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('selectstart', handleSelectStart);
    
        return () => {
          document.removeEventListener('contextmenu', handleContextMenu);
          document.removeEventListener('keydown', handleKeyDown);
          document.removeEventListener('selectstart', handleSelectStart);
        };
 }, []);
    
 return (<></>);
};

export default DisableRightClickNCopy;