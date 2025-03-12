import React from "react";
import { Highlight } from "e-ui-react";
import { BlogIndexHeader } from "@Components/blog-index-header/index.js";

const CUSTOM_ERROR_DECODER_FILE = `@Component
public class CustomErrorDecoder implements ErrorDecoder {
    private final ErrorDecoder defaultDecoder = new Default();
    
    @Override
    public Exception decode(String methodKey, Response response) {
        if (response.status() == 404) {
            return new UserNotFoundException("User not found");
        }
        return defaultDecoder.decode(methodKey, response);
    }
}`;

const FEIGN_ERROR_DECODER_FILE = `@Bean
public ErrorDecoder errorDecoder() {
    return new CustomErrorDecoder();
}`;

const INTERFACE_USER_CLIENT = `@FeignClient(name = "user-service", configuration = FeignClientConfig.class)
public interface UserClient {
    @GetMapping("/users/{id}")
    User getUserById(@PathVariable("id") Long id);
}`;

const FEIGN_CLIENT_CONFIG = `@Configuration
public class FeignClientConfig {
    @Bean
    public ErrorDecoder errorDecoder() {
        return new CustomErrorDecoder();
    }
}`;

const FEIGN_INTERFACE_USERCLIENT = `@FeignClient(name = "user-service", fallback = UserClientFallback.class)
public interface UserClient {
    @GetMapping("/users/{id}")
    User getUserById(@PathVariable("id") Long id);
}`;

const USER_CLIENT_FALLBACK = `@Component
public class UserClientFallback implements UserClient {
    @Override
    public User getUserById(Long id) {
        return new User(id, "Default User", "default@example.com");
    }
}`;

const FEIGN_REQUEST_INTERCEPTOR = `@Component
public class FeignRequestInterceptor implements RequestInterceptor {
    @Override
    public void apply(RequestTemplate template) {
        log.info("Feign request: {}", template.url());
    }
}`;

const GLOBAL_EXCEPTION_HANDLER = `@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<String> handleUserNotFound(UserNotFoundException ex) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
    }
}`;

const CustomErrorHandle = () =>{
 return (<div className="lh28p fs16p mtop15p">
    <div className="mtop15p"><h2 className="blog-head"><b>Custom Error Handling with Feign</b></h2></div>
    
    <BlogIndexHeader type="h4" index="1" title={<div>Using <code>ErrorDecoder</code></div>} />
    <div className="padLeft15p">
        <div className="padLeft5p">Spring Cloud allows customizing error handling via ErrorDecoder.</div>
        <div><Highlight content={CUSTOM_ERROR_DECODER_FILE} lang="java" /></div>
        <div className="mtop15p padLeft5p">Then, configure Feign to use this decoder:</div>
        <div><Highlight content={FEIGN_ERROR_DECODER_FILE} lang="java" /></div>
    </div>

    <BlogIndexHeader type="h4" index="2" title={<div>Handling Errors via <code>@FeignClient</code> Configuration</div>} />
    <div className="padLeft15p">
        <div className="padLeft5p">You can specify a custom error decoder at the client level:</div>
        <div><Highlight content={INTERFACE_USER_CLIENT} lang="java" /></div>
        <div className="mtop15p"><code><b>FeignClientConfig</b></code>:</div>
        <div><Highlight content={FEIGN_CLIENT_CONFIG} lang="java" /></div>
    </div>

    <BlogIndexHeader type="h4" index="3" title={<div>Handling Errors Using Fallbacks</div>} />
    <div className="padLeft15p">
        <div className="padLeft5p">Feign supports fallback mechanisms via Hystrix or Resilience4J. Example using Hystrix:</div>
        <div><Highlight content={FEIGN_INTERFACE_USERCLIENT} lang="java" /></div>
        <div className="padLeft5p">Fallback Implementation:</div>
        <div><Highlight content={USER_CLIENT_FALLBACK} lang="java" /></div>
    </div>

    <BlogIndexHeader type="h4" index="4" title={<div>Using Feign Interceptors for Error Logging</div>} />
    <div className="padLeft15p"><Highlight content={FEIGN_REQUEST_INTERCEPTOR} lang="java" /></div>

    <BlogIndexHeader type="h4" index="5" title={<div>Using Exception Handling in Controllers</div>} />
    <div className="padLeft15p"><Highlight content={GLOBAL_EXCEPTION_HANDLER} lang="java" /></div>

    <div><h2 className="blog-head"><b>Conclusion</b></h2></div>
    <div className="padLeft5p">Error handling in Feign is crucial for building resilient microservices. Using ErrorDecoder, 
        fallbacks, and exception handling, we can create robust applications with better fault tolerance. Proper logging and 
        monitoring further enhance reliability.</div>
 </div>);
};

export default CustomErrorHandle;