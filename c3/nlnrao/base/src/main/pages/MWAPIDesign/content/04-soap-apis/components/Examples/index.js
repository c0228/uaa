import React from "react";
import { Card, Highlight } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const Examples = () =>{
 const OUTPUT_EXAMPLE_XML = `<id>1</id>
 <username>rao</username>
 <email>rao@example.com</email>`;
 const SERVICE_EXAMPLE_INTERFACE = `import javax.jws.WebMethod;
import javax.jws.WebService;

@WebService
public interface UserService {

    @WebMethod
    User getUser(int userId);
}`;

 const IMPL_EXAMPLE_INTERFACE = `import javax.jws.WebService;

@WebService(endpointInterface = "UserService")
public class UserServiceImpl implements UserService {

    @Override
    public User getUser(int userId) {
        return new User(userId, "rao", "rao@example.com");
    }
}`;

 const USER_EXAMPLE_MODEL = `public class User {
    private int id;
    private String username;
    private String email;

    public User() {}

    public User(int id, String username, String email) {
        this.id = id;
        this.username = username;
        this.email = email;
    }

    // getters and setters
}`;

 const PUBLISH_EXAMPLE_MODEL= `import javax.xml.ws.Endpoint;

public class SoapServer {
    public static void main(String[] args) {
        Endpoint.publish(
            "http://localhost:8080/userService",
            new UserServiceImpl()
        );
        System.out.println("SOAP API running...");
    }
}`;

 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>SOAP API Example (Concept)</b></h2></div>
    <div className="mtop5p">We will build a <b>SOAP API</b> that returns user details.</div>
    <div className="mtop5p"><h5><b>Operation</b></h5></div>
    <div className="mtop5p"><Highlight content={`getUser(userId)`} lang="javascript" /></div>
    <div className="mtop5p"><h5><b>Input</b></h5></div>
    <div className="mtop5p"><Highlight content={`<userId>1</userId>`} lang="html" /></div>
    <div className="mtop5p"><h5><b>Output</b></h5></div>
    <div className="mtop5p"><Highlight content={OUTPUT_EXAMPLE_XML} lang="html" /></div>
    <div className="mtop15p"><h2 className="blog-head"><b>Examples</b></h2></div>

    <div className="mtop15p"><h2 className="blog-head"><b>SOAP API Implementation Example (Java – JAX-WS)</b></h2></div>
    <div className="mtop5p">SOAP is most commonly implemented in <b>Java and .NET.</b></div>
    <div className="mtop15p"><h4 className="blog-head"><b>Step 1: Define the Service Interface</b></h4></div>
    <div className="mtop5p"><Highlight content={SERVICE_EXAMPLE_INTERFACE} lang="java" /></div>
    <div className="mtop15p"><h4 className="blog-head"><b>Step 2: Define the Service Interface</b></h4></div>
    <div className="mtop5p"><Highlight content={IMPL_EXAMPLE_INTERFACE} lang="java" /></div>
    <div className="mtop15p"><h4 className="blog-head"><b>Step 3: Create the User Model</b></h4></div>
    <div className="mtop5p"><Highlight content={USER_EXAMPLE_MODEL} lang="java" /></div>
    <div className="mtop15p"><h4 className="blog-head"><b>Step 4: Publish the SOAP Service</b></h4></div>
    <div className="mtop5p"><Highlight content={PUBLISH_EXAMPLE_MODEL} lang="java" /></div>
    <div className="mtop15p"><h4 className="blog-head"><b>Step 5: Access WSDL</b></h4></div>
    <div className="mtop5p"><Highlight content={`http://localhost:8080/userService?wsdl`} lang="java" /></div>
    <div>This WSDL file allows:</div>
    <div>
        <ul>
            <li className="mtop5p">Auto-generation of client code</li>
            <li className="mtop5p">Validation of requests</li>
            <li className="mtop5p">Strong type checking</li>
        </ul>
    </div>
    <div className="mtop15p"><h2 className="blog-head"><b>SOAP vs REST (Quick Comparison)</b></h2></div>
    <div>
        <SimpleTable header={["Feature", "SOAP", "REST"]} 
                columns={[
                    ["Data Format", "XML only", "JSON, XML"],
                    ["Contract", "WSDL (strict)", "Optional"],
                    ["Security", "Built-in WS-Security", "External"],
                    ["Complexity", "High", "Low"],
                    ["Performance", "Slower", "Faster"],
                    ["Enterprise Use", "Very High", "Medium"],
				]} />
    </div>
    <div className="mtop15p"><h2 className="blog-head"><b>When to Use SOAP APIs?</b></h2></div>
    <div>
        <div>Use SOAP when:</div>
        <ul>
            <li className="mtop5p">Security is critical (banking, finance)</li>
            <li className="mtop5p">Transactions must be reliable</li>
            <li className="mtop5p">Strong contracts are required</li>
            <li className="mtop5p">Legacy enterprise systems are involved</li>
        </ul>
        <div>Avoid SOAP when:</div>
        <ul>
            <li className="mtop5p">You want simplicity</li>
            <li className="mtop5p">You are building mobile or frontend-heavy apps</li>
            <li className="mtop5p">Performance is a top priority</li>
        </ul>
    </div>
 </div>);
};

export default Examples;