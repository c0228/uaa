import React from "react";
import { Highlight } from "e-ui-react";

const FEIGN_INTERFACE_FILE = `@FeignClient(name = "user-service", url = "http://localhost:8081")
public interface UserClient {
    @GetMapping("/users/{id}")
    User getUserById(@PathVariable("id") Long id);
}`;

const Introduction = () =>{
 return (<div className="lh28p fs16p mtop15p">
    <div><i>Spring Cloud provides powerful tools for building resilient microservices, and one of the key components is 
        <code><b>@FeignClient</b></code>, which simplifies making HTTP calls to external services. However, handling errors 
        effectively is crucial to ensure robustness and maintainability. This blog covers various techniques to handle errors 
        while using <code><b>@FeignClient</b></code> in Spring Cloud Framework.</i></div>

    <div className="mtop15p"><h2 className="blog-head"><b>Understanding <code>@FeignClient</code></b></h2></div>
    <div className="mtop15p padLeft5p">Feign is a declarative web service client that allows developers to define HTTP clients with 
        minimal boilerplate code. Example usage:</div>
    <div><Highlight content={FEIGN_INTERFACE_FILE} lang="java" /></div>
    <div className="mtop15p padLeft5p">While Feign simplifies API communication, error handling is necessary to deal with failures 
        gracefully.</div>

    <div className="mtop15p"><h2 className="blog-head"><b>Default Error Handling in Feign</b></h2></div>
    <div className="mtop15p padLeft5p">By default, Feign converts HTTP 4xx and 5xx responses into <code><b>FeignException</b></code>. 
    This may not be sufficient for complex applications requiring detailed error messages.</div>
 </div>);
};

export default Introduction;