import React from "react";
import { Highlight } from "e-ui-react";
import OrderList from "@MainComponents/order-list/index.js";

const MULTI_TENANT_DATASOURCE = `public class MultiTenantDataSource extends AbstractRoutingDataSource {
    @Override
    protected Object determineCurrentLookupKey() {
        return TenantContext.getTenant();
    }
}`;

const DATASOURCE_CONFIG = `@Configuration
public class DataSourceConfiguration {
    @Bean
    public DataSource dataSource() {
        MultiTenantDataSource dataSource = new MultiTenantDataSource();
        Map<Object, Object> targetDataSources = new HashMap<>();

        // Example of tenant databases
        targetDataSources.put("tenant1", createDataSource("jdbc:mysql://localhost:3306/tenant1"));
        targetDataSources.put("tenant2", createDataSource("jdbc:mysql://localhost:3306/tenant2"));

        dataSource.setTargetDataSources(targetDataSources);
        return dataSource;
    }

    private DataSource createDataSource(String url) {
        HikariConfig config = new HikariConfig();
        config.setJdbcUrl(url);
        config.setUsername("root");
        config.setPassword("password");
        return new HikariDataSource(config);
    }
}`;

const TENANT_CONTEXT_FILE = `public class TenantContext {
    private static final ThreadLocal<String> currentTenant = new ThreadLocal<>();

    public static void setTenant(String tenant) {
        currentTenant.set(tenant);
    }

    public static String getTenant() {
        return currentTenant.get();
    }

    public static void clear() {
        currentTenant.remove();
    }
}`;

const TENANT_FILTER_FILE = `@WebFilter("/*")
public class TenantFilter implements Filter {
    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) 
            throws IOException, ServletException {
        HttpServletRequest req = (HttpServletRequest) request;
        String tenantId = req.getHeader("X-Tenant-ID");

        if (tenantId != null) {
            TenantContext.setTenant(tenantId);
        }

        try {
            chain.doFilter(request, response);
        } finally {
            TenantContext.clear();
        }
    }
}`;

const TENANT_INTERCEPTOR_FILE = `@Component
public class TenantInterceptor {
    @PrePersist
    @PreUpdate
    public void setTenantIdentifier(BaseEntity entity) {
        entity.setTenantId(TenantContext.getTenant());
    }
}`;

const CUSTOMER_POJO_FILE = `@Entity
@Table(name = "customers")
@FilterDef(name = "tenantFilter", parameters = @ParamDef(name = "tenantId", type = "string"))
@Filter(name = "tenantFilter", condition = "tenant_id = :tenantId")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(name = "tenant_id")
    private String tenantId;
}`;

const TENANT_AWARE_FILE = `public class TenantAwareUserDetailsService implements UserDetailsService {
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        String tenantId = TenantContext.getTenant();
        return userRepository.findByUsernameAndTenantId(username, tenantId)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }
}`;

const SetMultiTenantMS = () =>{
 return (<div className="lh28p fs16p mtop15p mbot15p">
    <div className="mtop15p"><b>Setting Up Multi-Tenant Microservices with Spring Boot</b></div>

    <div className="mtop15p"><h4><b>Step 1: Create a Spring Boot Application</b></h4></div>
    <div className="mtop15p padLeft15p">
        <OrderList data={[(<div>Use Spring Initializr to generate a project with dependencies
            <ul>
                <li>Spring Web</li>
                <li>Spring Data JPA</li>
                <li>Spring Security</li>
                <li>Spring Boot DevTools</li>
            </ul>
        </div>)]} />
    </div>
    <div className="mtop15p">
        <Highlight content={`spring init --dependencies=web,data-jpa,security multi-tenant-service`} lang="java" />
    </div>

    <div className="mtop15p"><h4><b>Step 2: Define a Tenant Identifier Strategy</b></h4></div>
    <div className="mtop15p padleft15p">
        <div>Implement a <code><b>TenantContext</b></code> to store the current tenant dynamically.</div>
        <div><Highlight content={TENANT_CONTEXT_FILE} lang="java" /></div>
    </div>

    <div className="mtop15p"><h4><b>Step 3: Intercept Requests to Extract Tenant Information</b></h4></div>
    <div className="mtop15p padleft15p">
        <div>Use a <code><b>TenantFilter</b></code> to extract tenant identifiers from HTTP headers.</div>
        <div><Highlight content={TENANT_FILTER_FILE} lang="java" /></div>
    </div>

    <div align="center" className="mtop15p"><h2 className="blog-head"><b>Implementing Database-per-Tenant Approach</b></h2></div>
    <div className="mtop15p"><h4><b>Step 4: Configure a Multi-Tenant Database Source</b></h4></div>
    <div className="padLeft15p">
        <div>Use a <code><b>RoutingDataSource</b></code> to switch between tenant databases dynamically.</div>
        <div><Highlight content={MULTI_TENANT_DATASOURCE} lang="java" /></div>
    </div>

    <div className="mtop15p"><h4><b>Step 5: Define a <code>DataSourceConfiguration</code> Class</b></h4></div>
    <div className="padLeft15p">
        <div><Highlight content={DATASOURCE_CONFIG} lang="java" /></div>
    </div>

    <div align="center" className="mtop15p"><h2 className="blog-head"><b>Implementing Shared Schema Multi-Tenancy</b></h2></div>
    <div className="padLeft15p">
        <div>Modify the JPA <code><b>EntityManager</b></code> to apply a tenant filter dynamically.</div>
        <div><Highlight content={TENANT_INTERCEPTOR_FILE} lang="java" /></div>
    </div>
    <div className="mtop15p"><h4><b>Step 6: Add a <code><b>tenant_id</b></code> Column in Every Table</b></h4></div>
    <div className="padLeft15p">
        <div><Highlight content={CUSTOMER_POJO_FILE} lang="java" /></div>
    </div>

    <div align="center" className="mtop15p"><h2 className="blog-head"><b>Securing Multi-Tenant Microservices</b></h2></div>
    <div className="padLeft15p">
        <div>Implement tenant-based authentication using Spring Security and JWT.</div>
        <div><Highlight content={TENANT_AWARE_FILE} lang="java" /></div>
    </div>

    <div align="center" className="mtop15p"><h2 className="blog-head"><b>Deploying Multi-Tenant Microservices</b></h2></div>
    <div><OrderList data={[(<div>Use <b>Kubernetes Namespaces</b> to isolate tenant services.</div>),
                (<div>Implement <b>API Gateways</b> (Spring Cloud Gateway) for routing requests.</div>),
                (<div>Use <b>Spring Cloud Config</b> for tenant-specific configurations.</div>)]} /></div>

    <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
    <div className="mbot15p"><OrderList data={[(<div>Multi-tenant microservices allow SaaS applications to scale efficiently while 
        serving multiple customers.</div>),
        (<div>Choosing the right tenancy model (Database-per-Tenant, Schema-per-Tenant, Shared Schema) depends on 
            business needs.</div>),
        (<div>Spring Boot, Spring Security, and JPA provide powerful tools for implementing multi-tenancy.</div>),
        (<div>Deployment strategies like Kubernetes and Spring Cloud help in managing multi-tenant services in production.</div>)]} /></div>

 </div>);
};

export default SetMultiTenantMS;