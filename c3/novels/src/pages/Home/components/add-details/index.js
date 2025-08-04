import React from "react";
import { Select, TextBox, TextArea, Form, FormToReqBodyFormatter, UrlAsyncFetch } from 'e-ui-react';

const AddDetails = () => {
  return (
    <>
      <div className="mtop15p mbot15p"><h4><b>Add New Story</b></h4><hr/></div>
      <Form 
        name="AddStoryForm" 
        btnSubmit={{
          btnType:'primary',
          label:'Add New Story',
          size: 11
        }}
        btnReset={{
          btnType:'danger',
          label:'Reset',
          size: 11
        }}
        onSubmit={async(form, isValidForm, triggerReset)=>{
          if(isValidForm){
            console.log(form);
            const reqBody = FormToReqBodyFormatter(form.AddStoryForm);
            const response = await UrlAsyncFetch(process.env.NEXUS_URL + 'story/create', 'POST', reqBody);
            console.log("response", response);
            triggerReset();                                 
          }
        }}
      >
        <div>
          <TextBox 
            name="storyId" 
            label="Story ID" 
            placeholder="Enter your Story ID"
            validation={{
              required:{
                value: true,
                errorMessage:"This is a Mandatory Field"
              }
            }}
          />
        </div>
        <div className="mtop15p">
          <TextBox 
            name="title" 
            label="Story Name" 
            placeholder="Enter your Story name"
            validation={{
              required:{
                value: true,
                errorMessage:"This is a Mandatory Field"
              }
            }}
          />
        </div>
        <div className="mtop15p">
          <TextArea 
            name="description" 
            label="Story Description" 
            placeholder="Enter Story Description" 
            lines={5}
            validation={{
              required:{
                value: true,
                errorMessage:"This is a Mandatory Field"
              }
            }}
          />
        </div>
        <div className="mtop15p">
            <Select
                name="chapters"
                label="No. of Chapters"
                placeholder="Select Chapters"
                options={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25].map((d)=>{
                    return { id: d, label: d, value: d };
                })}
                className="navbar-layout"
                fontSize="12" 
                validation={{
                    required:{
                        value: true,
                        errorMessage:"This is a Mandatory Field"
                    }
                }}
            />
        </div>
      </Form>
    </>
  );
};

export default AddDetails;
