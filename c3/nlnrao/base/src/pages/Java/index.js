import React from "react";
import { useParams } from 'react-router-dom';

import EurekaClient from "./content/01-eureka-client/index.js";
import FileUploadReactSprintBoot from "./content/02-file-upload-react-spring-boot/index.js";
import RestApiMsArch from "./content/03-rest-api-ms-arch/index.js";
import ZipkinSleuth from "./content/04-zipkin-sleuth/index.js";
import EsCqrs from "./content/05-es-cqrs/index.js";
import ContainerizeMs from "./content/06-containerize-ms/index.js";
import FeignClientHandleErrors from "./content/07-feign-client-handle-errors/index.js";
import M1M2M3D from "./content/08-m1-m2-m3-d/index.js";
import DesignMultiTenantMs from "./content/09-design-multi-tenant-ms/index.js";
import ScgVsZuul from "./content/10-scg-vs-zuul/index.js";
import SecretManagerMs from "./content/11-secrets-management-ms/index.js";
import StrategiesMsKubernetes from "./content/12-strategies-ms-kubernetes/index.js";

const Java = () =>{
 const { input1, input2 } = useParams();
 const SprintBootFramework = ()=>{
  return (<div>
    {input2==='how-to-set-eureka-server-and-eureka-client-in-spring-boot-framework' && (<EurekaClient />)}
    {input2==='create-a-file-upload-platform-where-files-stores-in-local-system-using-spring-boot-and-react-js' && (<FileUploadReactSprintBoot />)}
    {input2==='building-restful-api-with-a-microservice-architecture-using-java-and-spring-stack-components' && (<RestApiMsArch />)}
    {input2==='what-is-the-difference-between-zipkin-and-sleuth-at-which-purpose-we-use-which-one' && (<ZipkinSleuth />)}
    {input2==='the-principles-of-event-sourcing-and-command-query-responsibility-segregation-cqrs-in-building-event-driven-microservices-with-java-and-spring-boot-and-how-they-enhance-scalability-and-maintainability' && (<EsCqrs />)}
    {input2==='how-docker-and-kubernetes-can-be-used-to-containerize-java-microservices-and-manage-them-in-a-distributed-environment-including-integration-with-spring-boot-applications' && (<ContainerizeMs />)}
    {input2==='how-do-you-handle-errors-with-feign-client-using-spring-cloud-framework' && (<FeignClientHandleErrors />)}
    {input2==='there-are-three-microservices-m1-m2-m3-associated-with-three-databases-d1-d2-d3-respectively-now-m1-is-calling-m2-and-m2-is-calling-m3-if-m3-transaction-fails-m1-and-m2-database-transactions-should-roll-back-how-could-you-handle-this' && (<M1M2M3D />)}
    {input2==='design-multi-tenant-microservices-using-spring-boot-framework' && (<DesignMultiTenantMs />)}
    {input2==='explain-spring-cloud-gateway-vs-zuul-which-one-would-you-use-for-api-gateway-in-a-modern-microservices-ecosystem' && (<ScgVsZuul />)}
    {input2==='how-do-you-handle-secrets-management-in-a-cloud-based-microservices-system' && (<SecretManagerMs />)}
    {input2==='what-strategies-do-you-follow-to-deploy-spring-boot-microservices-on-kubernetes' && (<StrategiesMsKubernetes />)}           
  </div>); 
 };
 return (<div>
     {input1==='spring-boot-framework' && (<SprintBootFramework />)}
 </div>);
};

export default Java;