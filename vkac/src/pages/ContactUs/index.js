import React from "react";
import { ContainerFluid, TextBox, TextArea, Form } from "e-ui-react";

const ContactUs = ()=>{
    return(<>
    <ContainerFluid>
        <div align="center"><h2 class="bs-header" style={{marginBottom:"5px"}}><b>Contact <span className="text-primary">Us</span></b></h2></div>
    <div className="mtop15p mbot15p">
    <h4 class="bs-header" style={{marginBottom:"10px"}}><b>Enter your Name:</b></h4>
    <TextBox name="surname" placeholder="Please enter your Name" />
    </div>
    <div className="mtop15p mbot15p">
    <h4 class="bs-header" style={{marginBottom:"10px"}}><b>Email:</b></h4>
    <TextBox name="surname" placeholder="Please enter your email id" />
    </div>
    <div className="mtop15p mbot15p">
    <h4 class="bs-header" style={{marginBottom:"10px"}}><b>Phone Number:</b></h4>
    <TextBox name="surname" placeholder="Please enter your phone number" />
    </div>
    <div className="mtop15p mbot15p">
    <h4 class="bs-header" style={{marginBottom:"10px"}}><b>Enter your Queries</b></h4>
    <TextArea name="surname" placeholder="Enter any queries or ask questions, our team will assist you" lines={3} />
    </div>
    <div className="mtop15p">
    <Form name="feedbackForm" 
  btnSubmit={{ align:'center', btnType:'primary', label:'Submit', size: 11 }}
  btnReset={{ btnType:'danger', label:'Reset', size: 11 }}
  onSubmit={async(form, isValidForm, triggerReset)=>{  }}
  onReset={async()=>{ }}>
</Form>
    </div>
    </ContainerFluid>
    </>);
};

export default ContactUs;