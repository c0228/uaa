import React from "react";
import { Highlight } from "e-ui-react";
import { BlogIndexHeader } from '@MainComponents/blog-index-header/index.js';
import OrderList from '@MainComponents/order-list/index.js';

const ENTITY_CLASS = `@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private double price;
    
    // Getters and Setters
}`;

const REPO_CLASS = `@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {}`;

const SERVICE_CLASS = `@Service
public class ProductService {
    @Autowired
    private ProductRepository repository;
    
    public List<Product> getAllProducts() {
        return repository.findAll();
    }
}`;

const CONTROLLER_CLASS = `@RestController
@RequestMapping("/products")
public class ProductController {
    @Autowired
    private ProductService service;
    
    @GetMapping
    public List<Product> getProducts() {
        return service.getAllProducts();
    }
}`;

const Implementation = () =>{
 return (<div className="lh28p fs16p mtop15p">
    <div><h2 className="blog-head"><b>Implementing a Microservice in Spring Boot</b></h2></div>

    <div className="mtop15p"><BlogIndexHeader type="h4" index="1" title="Setting Up a Spring Boot Project" /></div>
    <div className="padLeft15p">
        <div>Create a Spring Boot project using Spring Initializr with the following dependencies:</div>
        <div><OrderList data={[(<div>Spring Web</div>),
                    (<div>Spring Boot DevTools</div>),
                    (<div>Spring Data JPA</div>),
                    (<div>Spring Cloud Dependencies</div>),
                    (<div>Eureka Client</div>),
                    (<div>Spring Security</div>)]} /></div>
    </div>

    <BlogIndexHeader type="h4" index="2" title="Creating the Product Microservice" />
    <div className="padLeft15p">
        <div className="mtop15p padLeft5p"><b>Entity Class:</b></div>
        <Highlight content={ENTITY_CLASS} lang="java" />
        <div className="mtop15p padLeft5p"><b>Repository Layer</b></div>
        <Highlight content={REPO_CLASS} lang="java" />
        <div className="mtop15p padLeft5p"><b>Service Layer</b></div>
        <Highlight content={SERVICE_CLASS} lang="java" />
        <div className="mtop15p padLeft5p"><b>Controller Layer</b></div>
        <Highlight content={CONTROLLER_CLASS} lang="java" />
    </div>
 </div>);
};

export default Implementation;