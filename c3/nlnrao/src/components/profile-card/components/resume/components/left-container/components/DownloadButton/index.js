import React from "react";
import { Icon, Button } from "e-ui-react";

const DownloadButton = ()=>{
    return (<div className="mt-2">
    <Button type="outline-warning" label={<>
  <Icon type="FontAwesome" name="fa-download" size={14} style={{ marginRight:'5px' }} />
  <span style={{ fontFamily:'Arial, sans-serif' }}><b>Download My Resume</b></span>
  </>} size={11} />
    </div>);
};

export default DownloadButton;