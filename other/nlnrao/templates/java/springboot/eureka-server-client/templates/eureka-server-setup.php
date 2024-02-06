<h4><b>Eureka Server Project Setup</b></h4>
<ol>
 <li style="line-height:26px;">
 <div class="grey-5 mtop15p"><b>Adding Required Dependencies:</b></div>
 <div>
 The following are the dependencies required to setup, Eureka Server in the Project:
  <ul>
	<li><code><b>spring-cloud-starter-netflix-eureka-server</b></code> <span class="label label-danger">Mandatory</span></li>
	<li><code><b>lombok</b></code>  <span class="label label-primary">Optional</span> (Required to allow dynamic Setters and Getters for POJOs during Runtime) </li>
  </ul>
  <div class="mtop15p">The Sample <code><b>pom.xml</b></code> looks as follows -</div>
 </div>
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
			&lt;artifactId>spring-cloud-starter-netflix-eureka-server&lt;/artifactId&gt;
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
&lt;/project&gt;
</code></pre>
 <div align="center"><b>pom.xml</b></div>
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
      registerWithEureka: false
      fetchRegistry: false
   server:
	  port: 8761
</code></pre>
  <div align="center"><b>application.yml</b></div>
 </div><!--/.col-sm-6 -->
 <div class="col-sm-6">
<pre><code class="hljs hljs-fade-in"  style="height:160px;">eureka.client.registerWithEureka=false
eureka.client.fetchRegistry=false
eureka.server.port=8761</code></pre>
  <div align="center"><b>application.properties</b></div>
 </div><!--/.col-sm-6 -->
 </div><!--/.row -->
 <div>
 Let's understand the application's properties -
 <ul>
	<li><code><b>eureka.client.registerWithEureka</b></code>
		<ul>
			<li><b>Description:</b> This property determines whether the Eureka client should register itself with the Eureka server.</li>
			<li><b>Possible Values:</b> <span class="label label-success f12">true</span> or <span class="label label-danger f12">false</span></li>
		</ul>
	</li>
	<li><code><b>eureka.client.fetchRegistry</b></code>
		<ul>
			<li><b>Description:</b> This property controls whether the Eureka client should fetch the registry information from the Eureka server.</li>
			<li><b>Possible Values:</b> <span class="label label-success f12">true</span> or <span class="label label-danger f12">false</span></li>
		</ul>
	</li>
	<li><code><b>eureka.server.port</b></code>
		<ul>
			<li><b>Description:</b> This property sets the port on which the Eureka server will listen for incoming requests.</li>
		</ul>
	</li>
 </ul>
 </div>
</li>
<li style="line-height:26px;">
 <div class="grey-5 mtop15p"><b>Add <code>@EnableEurekaServer</code> Annotation in Main Class:</b></div>
 <div>The code should look like as follows.</div>
 <pre><code class="hljs hljs-fade-in">package org.project.gw.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class MainApplication {

	public static void main(String[] args) {
		SpringApplication.run(MainApplication.class, args);
	}

}</code></pre>
<div>With this, Eureka Server was configured successfully. When we run the Application and open the url 
 <a href="http://localhost:8761/" target="_blank"><b><u>http://localhost:8761/</u></b></a> in the Browser, we 
 can see the dashboard page as follows:</div>
</li>
</ol>