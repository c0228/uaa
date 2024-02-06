<div class="grey-7">
 <i><code><b>Eureka Server</b></code> and <code><b>Eureka Client</b></code> are components of Netflix Eureka, a service discovery framework 
 designed for microservices architectures.</i> 
</div>
<div class="list-group">
 <div class="list-group-item mtop15p bg-lgt-green">
	<!-- -->
	<b>Note:</b> In a Distributed System, you will have one Eureka Server where multiple Microservices are connected to Eureka Server. 
	Each Microservice will act as a Eureka Client.
	<!-- -->
 </div><!--/.list-group-item -->
</div><!--/.list-group -->
<div class="row mtop25p mbot15p">
 <div class="col-sm-6">
  <div><h4><b>Role of Eureka Server</b></h4></div>
  <div>
	<ol style="line-height:24px;">
	  <li><div class="grey-5 mtop15p"><b>As a Service Registry:</b></div>
	  <div class="grey-7">In a microservices architecture, an application is splitted into independent deployable services. These services 
	  need a way to discover and communicate with each other. The Eureka Server maintains a registry of all the microservices and their 
	  locations (IP addresses and ports).</div>
	  </li>
	  <li><div class="grey-5 mtop15p"><b>Health Monitoring:</b></div>
	  <div class="grey-7"> Eureka Server is also responsible for monitoring the health of each registered service. It receives heartbeats 
	  from each Eureka Client (microservice) at regular intervals. If a service doesn't send a heartbeat within a configurable time window, 
	  the Eureka Server marks it as unavailable or potentially down.</div>
	  </li>
	</ol>
  </div>
 </div>
 <div class="col-sm-6">
 <div><h4><b>Role of Eureka Client</b></h4></div>
  <div>
	<ol style="line-height:24px;">
	  <li><div class="grey-5 mtop15p"><b>To do Service Registration</b></div>
	  <div class="grey-7">An Eureka Client is a component within each microservice that registers itself with the Eureka Server. When a 
	  microservice starts up, it notifies the Eureka Server about its existence and provides information such as its host, port, and 
	  other metadata.</div>
	  </li>
	  <li><div class="grey-5 mtop15p"><b>Service Discovery</b></div>
	  <div class="grey-7">Eureka Clients, during their initialization, fetch the registry information from the Eureka Server. This enables them to 
	  discover other services and obtain the necessary information to make requests to those services.</div>
	  </li>
	  <li><div class="grey-5 mtop15p"><b>Heartbeat Sending</b></div>
	  <div class="grey-7">Eureka Clients periodically send heartbeats to the Eureka Server to indicate that they are still alive and functioning.</div>
	  </li>
	</ol>
  </div>
 </div>
</div><!--/.row -->
 
<div class="list-group">
 <div class="list-group-item" style="background-color:#fffdea;">
 <div align="center"><h4><b>Let's understand, why do we need Eureka Server and Eureka Client -</b></h4></div>
 <div class="row" style="line-height:24px;">
 <div class="col-sm-6">
  <ol>
	<li><div class="grey-5 mtop15p"><b>Centralized Management</b></div>
		<div class="grey-7">Eureka provides a centralized location (the Eureka Server) where service information is stored and managed. 
		This simplifies the overall management and coordination of services in a distributed environment.</div>
	</li>
	<li><div class="grey-5 mtop15p"><b>Dynamic Service Discovery</b></div>
		<div class="grey-7">Eureka enables services in a microservices architecture to dynamically discover and communicate with each 
		other as they start, stop, or scale.</div>
	</li>
	<li><div class="grey-5 mtop15p"><b>Load Balancing</b></div>
		<div class="grey-7">Eureka provides a centralized service registry that clients can query for available instances, facilitating 
		load balancing by distributing requests among multiple service instances.</div>
	</li>
  </ol>
 </div><!--/.col-sm-6 -->
 <div class="col-sm-6">
	<ol start="4">
		<li><div class="grey-5 mtop15p"><b>Resilience and Health Monitoring</b></div>
			<div class="grey-7">Eureka Server monitors the health of registered services through regular heartbeats from Eureka Clients, 
			helping to ensure that requests are directed to healthy and available services.</div>
		</li>
		<li><div class="grey-5 mtop15p"><b>Simplified Configuration</b></div>
			<div class="grey-7">Eureka abstracts the complexities of service discovery, making it easier for developers to implement and 
			manage services without manual configuration of service locations.</div>
		</li>
		<li><div class="grey-5 mtop15p"><b>Efficient Resource Utilization</b></div>
			<div class="grey-7">Through dynamic service discovery and load balancing, Eureka helps optimize the utilization of resources by 
			ensuring that requests are distributed evenly among available service instances, preventing overloading of individual instances.</div>
		</li>
	</ol>
 </div><!--/.col-sm-6 -->
 </div><!--/.row -->
 </div><!--/.list-group-item -->
</div><!--/.list-group -->
 