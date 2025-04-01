import React from "react";
import OrderList from "@Components/order-list/index.js";

const Testing = () =>{
 return (<div className="lh28p fs16p mtop15p mbot15p">
    <div><h2 className="blog-head"><b>Testing the Platform</b></h2></div>
    <div className="padLeft15p">
        <div className="mtop15p"><h4><b>1. Using Postman for API Testing</b></h4></div>
        <div className="mtop15p">
            <OrderList data={[(<div>Open Postman and send a POST request to 
                <code><b>http://localhost:8080/api/files/upload</b></code> with a file.</div>),
                (<div>If successful, the file will be stored in the <code><b>uploads/</b></code> folder.</div>)]} />
        </div>

        <div><h4><b>2. Uploading Files via React UI</b></h4></div>
        <div className="mtop15p mbot15p">
            <OrderList data={[(<div>Select a file and click the <b>Upload File</b> button.</div>),
                (<div>Verify that the file appears in the <code><b>uploads/</b></code> directory.</div>)]} />
        </div>
    </div>
 </div>);
};

export default Testing;