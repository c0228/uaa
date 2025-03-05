import React, { useState } from "react";
import { Form, TextBox, Email, TextArea, FormToReqBodyFormatter, UrlAsyncFetch } from "e-ui-react";

const FormDetails = () =>{
 const [success, setSuccess] = useState(false);
 return(<div style={{ padding:'15px' }}>
    {success?(<div style={{ marginTop:'15px' }}>
        We would like to inform you that we have successfully received your query request.<br/><br/> 
        Thank you for reaching out to us. Our team is currently reviewing the details provided in the form.
        Please expect to hear back from us within 24-48 hours with the requested information.<br/><br/> 
        In the meantime, if you have any additional questions or specifications, feel free to reach out to us directly.
        We look forward to the opportunity to serve you.
    </div>):(<Form name="contactForm"
           btnSubmit={{
              align:'center',
              btnType:'light',
              label:'Submit',
              size: 11,
              style:{ fontWeight:'bold', backgroundColor:'#611e06', color:'#fff' }
           }}
           btnReset={{
              align:'center',
              btnType:'light',
              label:'Reset',
              size: 11,
              style:{ color:'#611e06', fontWeight:'bold', border:'1px solid #611e06' }
           }}
           onSubmit={async(form, isValidForm)=>{
              if(isValidForm){  
                 setSuccess(true);
                 console.log("ForM VALUES");
                 console.log(form);
                 const reqBody = FormToReqBodyFormatter(form.contactForm);
                 console.log("reqBody", JSON.stringify(reqBody));
                await UrlAsyncFetch( process.env.NEXUS_URL + 'send/query', 'POST', reqBody );
             }
           }}>
     <div className="mtop15p">
        <TextBox name="name" label="Name" placeholder="Enter your Full Name" />
     </div>
     <div className="mtop15p">
     <Email name="email" validation={{
                 email:{ formatCheck: true }
              }} />
     </div>
     <div className="mtop15p">
        <TextBox name="phone" label="Phone Number" placeholder="Enter your Phone Number" />
     </div>
     <div className="mtop15p">
        <TextArea name="message" label="Message" placeholder="Enter your Message" lines={5} />
     </div>
     </Form>)}
    
 </div>);
};

export default FormDetails;