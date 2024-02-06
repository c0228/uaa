<h4><b>Eureka Client Project Setup</b></h4>
<ol>
<li style="line-height:26px;">
 <div class="grey-5 mtop15p"><b>Adding Required Dependencies:</b></div>
 <div>
The following are the dependencies required to setup, Eureka Server in the Project:
<ul>
<li><code><b>spring-cloud-starter-netflix-eureka-client</b></code> <span class="label label-danger">Mandatory</span></li>
<li><code><b>spring-boot-starter-web</b></code> <span class="label label-danger">Mandatory</span></li>
<li><code><b>lombok</b></code> <span class="label label-primary">Optional</span> (Required to allow dynamic Setters and Getters for POJOs during Runtime)</li>
</ul>
<div class="mtop15p">The Sample <code><b>pom.xml</b></code> looks as follows -</div>
<pre><code class="hljs hljs-fade-in">&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd"&gt;
	...
	&lt;properties&gt;
		&lt;java.version&gt;17&lt;/java.version&gt;
		&lt;spring-cloud.version&gt;2023.0.0&lt;/spring-cloud.version&gt;
	&lt;/properties&gt;
	&lt;dependencies&gt;
		&lt;dependency&gt;
			&lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
			&lt;artifactId&gt;spring-cloud-starter-netflix-eureka-client&lt;/artifactId&gt;
		&lt;/dependency&gt;
		 &lt;dependency&gt;
        	&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
        	&lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
    	&lt;/dependency&gt;
		&lt;dependency&gt;
			&lt;groupId&gt;org.projectlombok&lt;/groupId&gt;
			&lt;artifactId&gt;lombok&lt;/artifactId&gt;
			&lt;optional&gt;true&lt;/optional&gt;
		&lt;/dependency&gt;
		&lt;dependency&gt;
			&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
			&lt;artifactId&gt;spring-boot-starter-test&lt;/artifactId&gt;
			&lt;scope&gt;test&lt;/scope&gt;
		&lt;/dependency&gt;
	&lt;/dependencies&gt;
	&lt;dependencyManagement&gt;
		&lt;dependencies&gt;
			&lt;dependency&gt;
				&lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
				&lt;artifactId&gt;spring-cloud-dependencies&lt;/artifactId&gt;
				&lt;version&gt;${spring-cloud.version}&lt;/version&gt;
				&lt;type&gt;pom&lt;/type&gt;
				&lt;scope&gt;import&lt;/scope&gt;
			&lt;/dependency&gt;
		&lt;/dependencies&gt;
	&lt;/dependencyManagement&gt;

	&lt;build&gt;
		&lt;plugins&gt;
			&lt;plugin&gt;
				&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
				&lt;artifactId&gt;spring-boot-maven-plugin&lt;/artifactId&gt;
				&lt;configuration&gt;
					&lt;excludes&gt;
						&lt;exclude&gt;
							&lt;groupId&gt;org.projectlombok&lt;/groupId&gt;
							&lt;artifactId&gt;lombok&lt;/artifactId&gt;
						&lt;/exclude&gt;
					&lt;/excludes&gt;
				&lt;/configuration&gt;
			&lt;/plugin&gt;
		&lt;/plugins&gt;
	&lt;/build&gt;
&lt;/project&gt;</code></pre>
</div>
</li>
<li style="line-height:26px;">
 <div class="grey-5 mtop15p"><b>Add Configuration at application.yml / application.properties File:</b></div>
 <div>Under <code><b>src/main/resources</b></code>, by default we will have <code><b>application.properties</b></code> file. we can use the same 
 <code><b>application.properties</b></code> file or we can rename it to <code><b>application.yml</b></code>. Place the following content in 
 <code><b>application.yml</b></code> or <code><b>application.properties</b></code> file.</div>
 <div class="row">
 <div class="col-sm-6">
<pre><code class="hljs hljs-fade-in" style="height:160px;">eureka:
  client:
    serviceUrl:
      defaultZone: http://localhost:8761/eureka/
server:
  port: 8080
</code></pre>
<div align="center"><b>application.yml</b></div>
</div><!--/.col-sm-6 -->
<div class="col-sm-6">
<pre><code class="hljs hljs-fade-in" style="height:160px;">eureka.client.serviceUrl.defaultZone=http://localhost:8761/eureka/
server.port=8080</code></pre>
<div align="center"><b>application.properties</b></div>
</div><!--/.col-sm-6 -->
</div><!--/.row -->
<div>
 Let's understand the application's properties -
<ul>
 <li><code><b>eureka.client.serviceUrl.defaultZone</b></code>
  <ul>
	<li><b>Description:</b> This property is used by Eureka clients to specify the URL of the Eureka server that 
	they should register with or fetch registry information from. 
	The defaultZone typically points to the Eureka server's location.</li>
	<li><b>Possible Values:</b> A URL string indicating the location of the Eureka server.</li>
  </ul>
 </li>
 <li><code><b>server.port</b></code>
  <ul>
	<li><b>Description:</b> This property is used to specify the port on which the application (Eureka Server or 
	any other Spring Boot application) will listen for incoming requests.</li>
	<li><b>Possible Values:</b> An integer specifying the port number.</li>
  </ul>
 </li>
</ul>
</div>
</li>
<li style="line-height:26px;">
<div class="grey-5 mtop15p"><b>Adding Controller:</b></div>
<div>The controller is responsible for handling incoming HTTP requests, processing them, and returning appropriate 
 HTTP responses. It acts as an entry point to the microservice.</div>
<pre><code class="hljs hljs-fade-in">package org.project.ms.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/client")
class SampleController {
	
 /**
  *  VARIABLE DESCRIPTION:
  *  "discoveryClient" object is part of the Spring Cloud Netflix Eureka library 
  *  and it provides methods for interacting with the Eureka service registry. 
  */
 @Autowired
 private DiscoveryClient discoveryClient;
 
 @GetMapping("/service/instances/{applicationName}")
 public List<ServiceInstance> serviceInstancesByApplicationName(@PathVariable String applicationName) {
 /**
  *  METHOD DESCRIPTION:
  *  1) This Service retrieves and returns a list of instances registered with the 
  *    Eureka service registry for a specified {applicationName}.
  *  2) The returned list typically contains details about the discovered service 
  *    instances, such as host, port, and metadata.
  */
  return this.discoveryClient.getInstances(applicationName);
 }
 
 @GetMapping("/sample")
 public String helloController() {
 /**
  *  METHOD DESCRIPTION:
  *  This is the Sample Hello Controller - Microservice
  */
  return "Sample Hello Controller";
 }
 
}</code></pre>
</li>
<li style="line-height:26px;">
 <div class="grey-5 mtop15p"><b>Adding <code><b>@ComponentScan</b></code> to Main Class:</b></div>
 <div>In short, the purpose of @ComponentScan in Spring is to automatically discover and register Spring components 
  (such as beans, controllers, services, etc.) in a specified package or set of packages. This annotation enables Spring to 
  find and manage these components without explicitly declaring them in configuration files, promoting a more flexible and 
  convention-over-configuration approach in the application development process.</div>
<pre><code class="hljs hljs-fade-in">package org.project.ms.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan(basePackages = "org.project.ms")
public class MainApplication {

	public static void main(String[] args) {
		SpringApplication.run(MainApplication.class, args);
	}

}</code></pre>
<div class="mtop35p">With this, basic Eureka Client Setup 
was done and when run, it works on the URL 
<a href="http://localhost:8080/" target="_blank"><b><u>http://localhost:8080/</u></b></a>.
</div>
</li>
</ol>