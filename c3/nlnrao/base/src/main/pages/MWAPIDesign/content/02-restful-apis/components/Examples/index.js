import React from "react";
import { Highlight } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const RESOURCES_EXAMPLE_JS = `/api/users
/api/users/{id}`;

const SETUP_EXAMPLE_PROJECT = `npm init -y
npm install express`;

const CREATE_EXAMPLE_SERVER = `const express = require("express");
const app = express();

app.use(express.json());

let users = [
  { id: 1, name: "Ravi" },
  { id: 2, name: "Sita" }
];`;

const REST_EXAMPLE_ENDPOINTS1 = `app.get("/api/users", (req, res) => {
  res.status(200).json(users);
});`;

const REST_EXAMPLE_ENDPOINTS2 = `app.get("/api/users/:id", (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json(user);
});`;

const REST_EXAMPLE_ENDPOINTS3 = `app.post("/api/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(newUser);
  res.status(201).json(newUser);
});`;

const REST_EXAMPLE_ENDPOINTS4 = `app.delete("/api/users/:id", (req, res) => {
  users = users.filter(u => u.id != req.params.id);
  res.status(204).send();
});`;

const START_EXAMPLE_SERVER = `app.listen(3000, () => {
  console.log("Server running on port 3000");
});`;

const Examples = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Example: RESTful API Design</b></h2></div>
    <div className="mtop5p">Let’s consider a <b>User Management System.</b></div>
    <div className="mtop15p"><h4 className="blog-head"><b>Resource URL Design</b></h4></div>
    <div className="mtop5p">
        <Highlight content={RESOURCES_EXAMPLE_JS} lang="javascript" />
    </div>
    <div className="mtop15p"><h4 className="blog-head"><b>Operations Mapping</b></h4></div>
    <div className="mtop5p">
        <SimpleTable header={["Operation", "HTTP Method", "URL"]} 
                columns={[
                    ["Get all users", "GET", "/api/users"],
                    ["Get one user", "GET", "/api/users/1"],
                    ["Create user", "POST", "/api/users"],
                    ["Update user", "PUT", "/api/users/1"],
                    ["Delete user", "DELETE", "/api/users/1"]
				]} />
    </div>
    <div className="mtop15p"><h2 className="blog-head"><b>Implementation Example (Simple REST API)</b></h2></div>
    <div className="mtop5p">Below is a <b>basic RESTful API example using Node.js and Express.</b></div>
    <div className="mtop5p"><h4 className="blog-head"><b>Step 1: Setup Project</b></h4></div>
    <div className="mtop5p"><Highlight content={SETUP_EXAMPLE_PROJECT} lang="javascript" /></div>
    <div className="mtop5p"><h4 className="blog-head"><b>Step 2: Create Server</b></h4></div>
    <div className="mtop5p"><Highlight content={CREATE_EXAMPLE_SERVER} lang="javascript" /></div>
    <div className="mtop5p"><h4 className="blog-head"><b>Step 3: REST Endpoints</b></h4></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Get All Users</b></h5></div>
    <div className="mtop5p"><Highlight content={REST_EXAMPLE_ENDPOINTS1} lang="javascript" /></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Get User by ID</b></h5></div>
    <div className="mtop5p"><Highlight content={REST_EXAMPLE_ENDPOINTS2} lang="javascript" /></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Create User</b></h5></div>
    <div className="mtop5p"><Highlight content={REST_EXAMPLE_ENDPOINTS3} lang="javascript" /></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Delete User</b></h5></div>
    <div className="mtop5p"><Highlight content={REST_EXAMPLE_ENDPOINTS4} lang="javascript" /></div>
    <div className="mtop5p"><h4 className="blog-head"><b>Step 4: Start Server</b></h4></div>
    <div className="mtop5p"><Highlight content={START_EXAMPLE_SERVER} lang="javascript" /></div>

    <div className="mtop15p"><h2 className="blog-head"><b>Why RESTful APIs Became Popular?</b></h2></div>
    <div>
        <ul>
            <li className="mtop5p">Lightweight communication using JSON</li>
            <li className="mtop5p">Easy to consume by web, mobile, and IoT applications</li>
            <li className="mtop5p">Scales well for large systems</li>
            <li className="mtop5p">Technology independent</li>
            <li className="mtop5p">Works naturally with HTTP</li>
        </ul>
    </div>
    <div className="mtop5p">Because of these benefits, RESTful APIs became the 
        backbone of <b>modern microservices, mobile apps, and frontend-backend architectures.</b></div>
 </div>);
};

export default Examples;