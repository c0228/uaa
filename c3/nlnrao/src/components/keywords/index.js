import React from "react";
import { Badge } from "e-ui-react";

const Keywords = ({ data }) =>{
 return (<>
  <div style={{ marginTop:'25px' }}>
    {data?.data?.map((keyword, index)=>{
      return (<Badge key={index} type="secondary-lgt" label={keyword} size="11" 
      style={{ fontFamily:'Metropolis' }} />);
    })}
  </div>
 </>);
};

export default Keywords;