import React from "react";
import OrderList from "@Components/order-list/index.js";
import { Highlight } from "e-ui-react";

const JSONObject_Create = `let user = {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
};
console.log(user);`;

const JSONObject_Retrieve = `console.log(user.name); // Output: John Doe
console.log(user["email"]); // Output: john@example.com`;

const JSONObject_Update = `user.name = "John Smith";
user["email"] = "johnsmith@example.com";
console.log(user);`;

const JSONObject_Delete = `delete user.email;
console.log(user);`;

const JSONArray_Create = `let users = [
    { "id": 1, "name": "John Doe", "email": "john@example.com" },
    { "id": 2, "name": "Jane Doe", "email": "jane@example.com" }
];
console.log(users);`;

const JSONArray_Retrieve = `console.log(users[0].name); // Output: John Doe
console.log(users.find(user => user.id === 2)); // Finds user with id 2`;

const JSONArray_Update = `users[0].name = "Johnny Doe";
console.log(users);`;

const JSONArray_Delete = `users.splice(0, 1); // Removes first user
console.log(users);`;

const JSONDynamic_Update = `let updateUser = (id, newData) => {
    let index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        users[index] = { ...users[index], ...newData };
    }
};
updateUser(1, { "name": "John Updated" });
console.log(users);`;

const JSONDynamic_Delete = `let deleteUser = (id) => {
    users = users.filter(user => user.id !== id);
};
deleteUser(2);
console.log(users);`;

const Introduction = () =>{
 return (<div className="lh28p fs16p">
    <div className="mtop15p"><i>JavaScript provides powerful capabilities to manipulate JSON (JavaScript Object Notation) data structures 
        dynamically. In this blog, we will explore CRUD (Create, Retrieve, Update, Delete) operations on JSON objects 
        and JSON arrays with practical examples.</i></div>

    <div className="mtop15p"><h2 className="blog-head"><b>Understanding JSON Objects and Arrays</b></h2></div>
    <div className="mtop15p">JSON is a lightweight data interchange format commonly used in web applications. It consists of:
        <OrderList data={[(<div className="mtop15p"><b>JSON Object:</b> A collection of key-value pairs <code><b>{`{ "key": "value" }`}</b></code></div>),
            (<div className="mtop15p"><b>JSON Array:</b> An ordered list of values <code><b>{`[{ "key": "value" },{ "key": "value" }]`}</b></code></div>)]} />
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>CRUD (Create, Retrieve, Update, Delete) operations on JSON Objects and Arrays</b></h2></div>
    <div className="padLeft15p">
    {/* Create (C) - */}
    <div>
        <div className="mtop15p"><h4 className="lh28p"><b>1. Creating (C) JSON Data</b></h4></div>
        <div className="padLeft15p">
            <div className="mtop15p"><b>Creating a JSON Object</b></div>
            <div className="mtop5p"><Highlight content={JSONObject_Create} lang="javascript" /></div>
        </div>
        <div className="padLeft15p">
            <div className="mtop15p"><b>Creating a JSON Array</b></div>
            <div className="mtop5p"><Highlight content={JSONArray_Create} lang="javascript" /></div>
        </div>
    </div>
    {/* Retrieve (R) - */}
    <div>
        <div className="mtop15p"><h4 className="lh28p"><b>2. Retrieving (R) JSON Data</b></h4></div>
        <div className="padLeft15p">
            <div className="mtop15p"><b>Retrieving Data from a JSON Object</b></div>
            <div className="mtop5p"><Highlight content={JSONObject_Retrieve} lang="javascript" /></div>
        </div>
        <div className="padLeft15p">
            <div className="mtop15p"><b>Retrieving Data from a JSON Array</b></div>
            <div className="mtop5p"><Highlight content={JSONArray_Retrieve} lang="javascript" /></div>
        </div>
    </div>
    {/* Update (U) - */}
    <div>
        <div className="mtop15p"><h4 className="lh28p"><b>3. Updating (U) JSON Data</b></h4></div>
        <div className="padLeft15p">
            <div className="mtop15p"><b>Updating a JSON Object</b></div>
            <div className="mtop5p"><Highlight content={JSONObject_Update} lang="javascript" /></div>
        </div>
        <div className="padLeft15p">
            <div className="mtop15p"><b>Updating an Element in a JSON Array</b></div>
            <div className="mtop5p"><Highlight content={JSONArray_Update} lang="javascript" /></div>
        </div>
        <div className="padLeft15p">
            <div className="mtop15p"><b>Updating an Object Dynamically</b></div>
            <div className="mtop5p"><Highlight content={JSONDynamic_Update} lang="javascript" /></div>
        </div>
    </div>
    {/* Delete (D) - */}
    <div>
        <div className="mtop15p"><h4 className="lh28p"><b>3. Deleting (D) JSON Data</b></h4></div>
        <div className="padLeft15p">
            <div className="mtop15p"><b>Deleting a Property from a JSON Object</b></div>
            <div className="mtop5p"><Highlight content={JSONObject_Delete} lang="javascript" /></div>
        </div>
        <div className="padLeft15p">
            <div className="mtop15p"><b>Deleting an Element from a JSON Array</b></div>
            <div className="mtop5p"><Highlight content={JSONArray_Delete} lang="javascript" /></div>
        </div>
        <div className="padLeft15p">
            <div className="mtop15p"><b>Deleting an Object Dynamically</b></div>
            <div className="mtop5p"><Highlight content={JSONDynamic_Delete} lang="javascript" /></div>
        </div>
    </div>
    </div>
    <div className="mtop15p mbot15p">
        <div><h2 className="blog-head"><b>Conclusion</b></h2></div>
        <div className="mtop15p mbot15p">
            <i>In this blog, we covered CRUD operations on JSON objects and JSON arrays using JavaScript. These operations are fundamental for handling 
            dynamic data in web applications. Keep experimenting and exploring JSON data manipulation to build robust applications!</i>
        </div>
    </div>
 </div>);
};

export default Introduction;