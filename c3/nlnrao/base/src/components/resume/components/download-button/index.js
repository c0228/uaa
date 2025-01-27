import React from "react";
import { Icon, Button } from "e-ui-react";

const DownloadButton = ()=>{
    return (<div className="mt-2">
      <div className="btn-group">
        <Button type="warning" size={11} disabled={true}>
          <Icon type="FontAwesome" name="fa-download" size={14} />
          <span style={{ fontFamily:'Arial, sans-serif', marginLeft:'5px' }}><b>Download Resume</b></span>
        </Button>
        <Button type="outline-warning" size={11}>
          <span style={{ fontFamily:'Arial, sans-serif' }}><b>.pdf</b></span>
        </Button>
        <Button type="outline-warning" size={11}>
          <span style={{ fontFamily:'Arial, sans-serif' }}><b>.docx</b></span>
        </Button>
    </div>
    </div>);
};

export default DownloadButton;