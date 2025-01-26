import React from "react";
import { Icon, Button } from "e-ui-react";

const DownloadButton = ()=>{
    return (<div className="mt-2">
    <Button type="outline-warning" size={11}>
      <Icon type="FontAwesome" name="fa-download" size={14} style={{ marginRight:'5px' }} />
      <span style={{ fontFamily:'Arial, sans-serif' }}><b>Download My Resume</b></span>
  </Button>
    </div>);
};

export default DownloadButton;