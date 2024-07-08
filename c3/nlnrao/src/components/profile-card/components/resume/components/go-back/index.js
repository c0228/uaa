import React, { useContext } from "react";
import { Icon, Button } from "e-ui-react";
import { ProfileContext } from "@Components/profile-card/index.js";

const GoBack = ()=>{
 const { updateResumeStatus } = useContext(ProfileContext);
 return (<Button type="outline-light" label={<>
      <Icon type="FontAwesome" name="fa-arrow-left" size={12} style={{ marginRight:'5px' }} />
      <b>Go Back</b>
    </>} size={11}
 onClick={()=>updateResumeStatus('closed')} />);
}; 

export default GoBack;