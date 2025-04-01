import React from "react";
import { Highlight } from "e-ui-react";
import OrderList from "@MainComponents/order-list/index.js";

const DEF_EVENT_FILE = `public class OrderCreatedEvent {
    private String orderId;
    private String product;
    private int quantity;
    private String status;

    public OrderCreatedEvent(String orderId, String product, int quantity, String status) {
        this.orderId = orderId;
        this.product = product;
        this.quantity = quantity;
        this.status = status;
    }

    // Getters and Setters
}`;

const STORE_EVENT_FILE = `@Aggregate
public class OrderAggregate {

    @AggregateIdentifier
    private String orderId;
    private String product;
    private int quantity;
    private String status;

    public OrderAggregate() {}

    @CommandHandler
    public OrderAggregate(CreateOrderCommand command) {
        apply(new OrderCreatedEvent(command.getOrderId(), command.getProduct(), command.getQuantity(), "CREATED"));
    }

    @EventSourcingHandler
    public void on(OrderCreatedEvent event) {
        this.orderId = event.getOrderId();
        this.product = event.getProduct();
        this.quantity = event.getQuantity();
        this.status = event.getStatus();
    }
}`;

const DEF_COMMAND_FILE = `public class CreateOrderCommand {
    @TargetAggregateIdentifier
    private String orderId;
    private String product;
    private int quantity;

    public CreateOrderCommand(String orderId, String product, int quantity) {
        this.orderId = orderId;
        this.product = product;
        this.quantity = quantity;
    }

    // Getters and Setters
}`;

const DEF_QUERY_HANDLER = `@Service
public class OrderQueryHandler {
    private final OrderRepository orderRepository;

    public OrderQueryHandler(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @QueryHandler
    public Order getOrderById(GetOrderQuery query) {
        return orderRepository.findById(query.getOrderId()).orElse(null);
    }
}`;

const DISPATCH_COMMANDS_QUERIES = `@RestController
@RequestMapping("/orders")
public class OrderController {
    private final CommandGateway commandGateway;
    private final QueryGateway queryGateway;

    public OrderController(CommandGateway commandGateway, QueryGateway queryGateway) {
        this.commandGateway = commandGateway;
        this.queryGateway = queryGateway;
    }

    @PostMapping
    public CompletableFuture<String> createOrder(@RequestBody CreateOrderCommand command) {
        return commandGateway.send(command);
    }

    @GetMapping("/{orderId}")
    public CompletableFuture<Order> getOrder(@PathVariable String orderId) {
        return queryGateway.query(new GetOrderQuery(orderId), ResponseTypes.instanceOf(Order.class));
    }
}`;

const Introduction = () =>{
 return (<div className="lh28p fs16p mtop15p">
    <div><i>As modern applications grow in complexity, traditional CRUD-based architectures often struggle to meet the 
        demands of scalability, performance, and maintainability. <b>Event Sourcing</b> and <b>Command Query Responsibility 
        Segregation (CQRS)</b> are two architectural patterns that address these challenges by providing better scalability, 
        consistency, and traceability in microservices-based systems.<br/>
        In this blog, we will explore the principles of Event Sourcing and CQRS, their benefits, and how they can be 
        implemented in Java and Spring Boot to build event-driven microservices.</i></div>
    <div className="mtop15p"><h2 className="blog-head"><b>Understanding Event Sourcing</b></h2></div>
    <div className="mtop15p">
    Event Sourcing is an architectural pattern where state changes in an application are stored as a sequence of immutable 
    events rather than directly updating a database. These events act as a single source of truth, enabling applications to 
    reconstruct the current state by replaying past events.
    </div>
    <div className="mtop15p"><h4><b>Key Principles of Event Sourcing</b></h4></div>
    <div className="mtop15p">
        <ol>
            <li><b>Immutable Event Log:</b> All changes to the system are stored as a sequence of events that cannot be 
            modified or deleted.</li>
            <li className="mtop15p"><b>Event Replayability:</b> The state of an application can be reconstructed by replaying historical events.</li>
            <li className="mtop15p"><b>Event-Driven Architecture:</b> Events are published to an event store and can be consumed by other services 
            asynchronously.</li>
            <li className="mtop15p"><b>Auditability and Traceability:</b> Every change is logged, providing a full audit trail.</li>
        </ol>
    </div>
    <div className="mtop15p"><h4><b>Benefits of Event Sourcing</b></h4></div>
    <div className="mtop15p">
        <OrderList data={[(<div><b>Data Consistency:</b> Events serve as a single source of truth.</div>),
            (<div><b>Scalability:</b> Event-driven architectures enable asynchronous processing and better horizontal scaling.</div>),
            (<div><b>Debugging and Recovery:</b> The ability to replay events allows easy debugging and disaster recovery.</div>),
            (<div><b>Real-time Event Processing:</b> Enables reactive applications that respond to real-time data changes.</div>)]} />
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Implementing Event Sourcing in Spring Boot</b></h2></div>
    <div className="mtop15p">
    Spring Boot provides excellent support for event-driven architectures using frameworks like Axon Framework and Kafka.
    </div>
    <div className="mtop15p"><b>Step-1: Define the Event</b></div>
    <div className="mtop15p">
        <Highlight content={DEF_EVENT_FILE} lang="java" />
    </div>
    <div className="mtop15p"><b>Step 2: Store Events in an Event Store</b></div>
    <div className="mtop15p">
        <Highlight content={STORE_EVENT_FILE} lang="java" />
    </div>

    <div align="center" className="mtop15p"><h2 className="blog-head"><b>Understanding CQRS</b></h2></div>
    <div className="mtop15p">
    Command Query Responsibility Segregation (CQRS) is a design pattern that separates read (Query) and write (Command) 
    operations into different models. Instead of a single model handling both, CQRS divides them into separate components 
    to optimize performance, scalability, and security.
    </div>
    <div className="mtop15p"><h4><b>Key Principles of CQRS</b></h4></div>
    <div className="mtop15p">
        <ol>
            <li><b>Separate Read and Write Models:</b> Commands handle state changes, while queries provide data retrieval.</li>
            <li><b>Eventual Consistency:</b> The system is designed to ensure eventual consistency rather than immediate 
            consistency.</li>
            <li><b>Optimized Data Storage:</b> Different databases or storage mechanisms can be used for read and write operations.</li>
            <li><b>Improved Scalability:</b> Read and write operations can be independently scaled.</li>
        </ol>
    </div>
    <div className="mtop15p"><h4><b>Benefits of CQRS</b></h4></div>
    <div className="mtop15p">
        <OrderList data={[(<div><b>Performance Optimization:</b> Read operations can use denormalized, highly optimized 
                        data structures.</div>),
                (<div><b>Security and Access Control:</b> Write and read operations can have different security policies.</div>),
                (<div><b>Scalability:</b> Read-heavy applications can scale query operations independently of write operations.</div>),
                (<div><b>Fault Isolation:</b> Prevents read-heavy loads from affecting write operations.</div>)]} />
    </div>

    <div><h2 className="blog-head"><b>Implementing CQRS in Spring Boot</b></h2></div>
    <div className="mtop15p"><b>Step 1: Define Commands</b></div>
    <div className="mtop15p">
        <Highlight content={DEF_COMMAND_FILE} lang="java" />
    </div>
    <div className="mtop15p"><b>Step 2: Define Query Handlers</b></div>
    <div className="mtop15p">
        <Highlight content={DEF_QUERY_HANDLER} lang="java" />
    </div>
    <div className="mtop15p"><b>Step 3: Dispatch Commands and Queries</b></div>
    <div className="mtop15p">
        <Highlight content={DISPATCH_COMMANDS_QUERIES} lang="java" />
    </div>

    <div align="center" className="mtop15p"><h2 className="blog-head"><b>Combining Event Sourcing and CQRS</b></h2></div>
    <div className="mtop15p">Event Sourcing and CQRS are often used together to enhance microservices' reliability and 
        maintainability. The key idea is to store all changes as events while using CQRS to separate read and write concerns. 
        Events serve as a mechanism to synchronize the read model with the write model asynchronously.</div>
    <div className="mtop15p"><h4><b>How They Work Together</b></h4></div>
    <div className="mtop15p">
        <ol>
            <li><b>Command Execution:</b> A command is sent to modify system state.</li>
            <li><b>Event Generation:</b> The change is recorded as an event in an event store.</li>
            <li><b>Projection Update:</b> Events update read models asynchronously for efficient querying.</li>
            <li><b>Query Execution:</b> The read model is queried separately without affecting write operations.</li>
        </ol>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
    <div className="mtop15p">
    Event Sourcing and CQRS are powerful patterns that enhance scalability, maintainability, and reliability in
     microservices. By leveraging Spring Boot, Axon Framework, and event-driven approaches, developers can build systems 
     that efficiently handle high loads while maintaining a clear and auditable state transition history.<br/><br/>
    Adopting these patterns requires careful planning, but the long-term benefits make them a valuable choice for modern 
    microservices architectures. Whether building a distributed application or a real-time data system, CQRS and Event 
    Sourcing pave the way for better performance and maintainability.
    </div>
 </div>);
};

export default Introduction;