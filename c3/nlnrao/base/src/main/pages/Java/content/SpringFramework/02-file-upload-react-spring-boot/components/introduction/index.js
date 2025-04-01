import React from "react";
import OrderList from "@MainComponents/order-list/index.js";

const Introduction = () =>{
 return (<div className="lh28p mtop15p fs16p">
    <div><i>In the modern web application ecosystem, file uploads play a crucial role in handling user-generated content. 
        Whether uploading documents, images, or videos, building a robust file upload system is essential. This blog will 
        guide you through developing a <b>File Upload Platform</b> using <b>Spring Boot</b> as 
        the backend and <b>React.js</b> as the frontend, where the uploaded files are stored locally on the server.</i></div>

    <div className="mtop15p"><h4><b>Tech Stack</b></h4></div>
    <div className="mtop15p">
        <OrderList data={[(<div><b>Backend:</b> Spring Boot, Spring MVC, Spring Web, Lombok</div>),
            (<div><b>Frontend:</b> React.js, Axios, Material-UI</div>),
            (<div><b>Storage:</b> Local file system</div>),
            (<div><b>Development Tools:</b> IntelliJ IDEA, VS Code, Postman, npm, Maven</div>)]} />

    </div>
 </div>);
};

export default Introduction;