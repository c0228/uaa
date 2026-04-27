import React from "react";
import { Card, Tab, Highlight } from "e-ui-react";

const JSON_EXAMPLES_JAVA = `{
  "id": 1,
  "username": "rao",
  "email": "rao@example.com"
}`;

const FLASK_EXAMPLE_PYTHON = `from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/api/user", methods=["GET"])
def get_user():
    return jsonify({
        "id": 1,
        "username": "rao",
        "email": "rao@example.com"
    })

if __name__ == "__main__":
    app.run(debug=True)`;

const EXPRESS_EXAMPLE_NODE = `const express = require("express");
const app = express();

app.get("/api/user", (req, res) => {
  res.json({
    id: 1,
    username: "rao",
    email: "rao@example.com"
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});`;

const BOOT_EXAMPLE_JAVA= `@RestController
@RequestMapping("/api")
public class UserController {

    @GetMapping("/user")
    public Map<String, Object> getUser() {
        Map<String, Object> user = new HashMap<>();
        user.put("id", 1);
        user.put("username", "rao");
        user.put("email", "rao@example.com");
        return user;
    }
}`;

const ACTIXWEB_EXAMPLE_RUST = `use actix_web::{get, App, HttpServer, Responder};
use serde::Serialize;

#[derive(Serialize)]
struct User {
    id: u32,
    username: String,
    email: String,
}

#[get("/api/user")]
async fn get_user() -> impl Responder {
    let user = User {
        id: 1,
        username: "rao".to_string(),
        email: "rao@example.com".to_string(),
    };
    actix_web::web::Json(user)
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| App::new().service(get_user))
        .bind(("127.0.0.1", 8080))?
        .run()
        .await
}`;

const Examples = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Simple JSON API Example (Concept)</b></h2></div>
    <div>Let’s build a <b>simple API</b> that returns user information.</div>
    <div><h5><b>API Endpoint:</b></h5></div>
    <div><Highlight content={`GET /api/user`} lang="javascript" /></div>
    <div><h5><b>JSON Response:</b></h5></div>
    <div><Highlight content={JSON_EXAMPLES_JAVA} lang="javascript" /></div>
    <div>This same API logic can be implemented in <b>any programming language.</b></div>

    <div><h4><b>Implementation Examples</b></h4></div>
    <div><h5><b>1. Python (Flask)</b></h5></div>
    <div><Highlight content={FLASK_EXAMPLE_PYTHON} content="python" /></div>
    <div><b>Explaination:</b></div>
    <div>
        <ul>
            <li className="mtop5p"><code><b>jsonify()</b></code> automatically converts Python dictionaries to JSON</li>
            <li className="mtop5p">Flask handles HTTP routing simply</li>
        </ul>
    </div>
    <div><h5><b>2. Node.js (Express)</b></h5></div>
    <div><Highlight content={EXPRESS_EXAMPLE_NODE} content="javascript" /></div>
    <div><b>Explaination:</b></div>
    <div>
        <ul>
            <li className="mtop5p"><code><b>res.json()</b></code> sends JSON with correct headers</li>
            <li className="mtop5p">Express is lightweight and perfect for JSON APIs</li>
        </ul>
    </div>
    <div><h5><b>3. Java (Spring Boot)</b></h5></div>
    <div><Highlight content={BOOT_EXAMPLE_JAVA} content="javascript" /></div>
    <div><b>Explaination:</b></div>
    <div>
        <ul>
            <li className="mtop5p">Spring automatically converts Java objects to JSON</li>
            <li className="mtop5p">No manual serialization needed</li>
        </ul>
    </div>
    <div><h5><b>4. Rust (Actix-web)</b></h5></div>
    <div><Highlight content={ACTIXWEB_EXAMPLE_RUST} lang="javascript" /></div>
    <div><b>Explaination:</b></div>
    <div>
        <ul>
            <li className="mtop5p"><code><b>serde</b></code> handles JSON serialization</li>
            <li className="mtop5p">Rust provides performance and memory safety</li>
        </ul>
    </div>

    <div><h4><b>Key Characteristics of Simple JSON APIs</b></h4></div>
    <div>
        <ul>
            <li className="mtop5p">Stateless communication</li>
            <li className="mtop5p">Clear request/response structure</li>
            <li className="mtop5p">Uses standard HTTP status codes</li>
            <li className="mtop5p">Easy to test with tools like Postman or curl</li>
        </ul>
    </div>
 </div>);
};

export default Examples;