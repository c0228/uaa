import React from "react";
import { Highlight } from "e-ui-react";

const SELF_TUNE_PYTHON = `import numpy as np

def gradient_descent(X, y, learning_rate=0.1, epochs=1000):
    theta = np.random.randn(X.shape[1])
    prev_loss = float('inf')
    
    for epoch in range(epochs):
        predictions = X @ theta
        loss = np.mean((predictions - y) ** 2)
        
        if loss > prev_loss:
            learning_rate *= 0.5  # Reduce step size if loss increases
        else:
            learning_rate *= 1.05  # Increase step size if improving
        
        prev_loss = loss
        gradient = (2 / X.shape[0]) * X.T @ (predictions - y)
        theta -= learning_rate * gradient
    
    return theta`;

const SELF_TUNE_JAVA = `import java.util.concurrent.*;

public class SelfTuningThreadPool {
    private static ThreadPoolExecutor executor = new ThreadPoolExecutor(
            2, 10, 60, TimeUnit.SECONDS, new LinkedBlockingQueue<>());

    public static void submitTask(Runnable task) {
        int activeThreads = executor.getActiveCount();
        if (activeThreads > 5) {
            executor.setCorePoolSize(5);
        } else {
            executor.setCorePoolSize(10);
        }
        executor.execute(task);
    }
}`;

const SELF_TUNE_JS = `class LoadBalancer {
    constructor() {
        this.servers = ["server1", "server2", "server3"];
        this.requestCounts = { server1: 0, server2: 0, server3: 0 };
    }

    getLeastLoadedServer() {
        return Object.keys(this.requestCounts).reduce((a, b) =>
            this.requestCounts[a] < this.requestCounts[b] ? a : b);
    }

    handleRequest() {
        let server = this.getLeastLoadedServer();
        this.requestCounts[server]++;
        console.log(\`Routing request to \${server}\`);
    }
}

let lb = new LoadBalancer();
lb.handleRequest();
lb.handleRequest();`;


const HowItWorks = () =>{
 return (<div className="mtop15p mbot15p fs16p lh28p">
    <div className="mtop15p"><h2 className="blog-head"><b>How Self-Tuning Algorithms Work</b></h2></div>
    <div className="mtop15p">Self-tuning algorithms rely on feedback loops, optimization techniques, and 
        data-driven adjustments.</div>
    <div>
        <ol>
            <li className="mtop15p">
                <div><h4><b>Feedback Loops</b></h4></div>
                <div className="mtop15p">A feedback loop monitors system performance and adjusts parameters accordingly.</div>
                <div><b>Example:</b> In a database system, the optimizer collects query execution times and adjusts 
                indexing or caching strategies based on performance trends.</div>
            </li>
            <li className="mtop15p">
                <div><h4><b>Machine Learning-Based Tuning</b></h4></div>
                <div className="mtop15p">Reinforcement learning or Bayesian optimization techniques can fine-tune parameters 
                    dynamically.</div>
            </li>
            <li className="mtop15p">
                <div><h4><b>Heuristic and Rule-Based Adjustments</b></h4></div>
                <div className="mtop15p">Some systems use predefined heuristics to determine optimal parameter values.</div>
            </li>
        </ol>
    </div>
    <div className="mtop15p"><h2 className="blog-head"><b>Implementation Examples</b></h2></div>
    <div>
        <ol>
            <li className="mtop15p">
                <div className="padLeft5p"><h4><b>Python: Self-Tuning Learning Rate for Gradient Descent</b></h4></div>
                <Highlight content={SELF_TUNE_PYTHON} lang="python" />
                <div>This implementation adjusts the learning rate dynamically to optimize convergence speed.</div>
            </li>
            <li className="mtop15p">
                <div className="padLeft5p"><h4><b>Java: Self-Tuning Thread Pool for Task Execution</b></h4></div>
                <Highlight content={SELF_TUNE_JAVA} lang="java" />
                <div>This Java implementation dynamically adjusts thread pool size based on active tasks.</div>
            </li>
            <li className="mtop15p">
                <div className="padLeft5p"><h4><b>JavaScript: Self-Tuning Load Balancer</b></h4></div>
                <Highlight content={SELF_TUNE_JS} lang="javascript" />
                <div>This JavaScript implementation distributes requests dynamically to the least loaded server.</div>
            </li>
        </ol>
    </div>
    <div className="mtop15p"><h2 className="blog-head"><b>Advantages of Self-Tuning Algorithms</b></h2></div>
    <div className="mtop15p">
        <ol>
            <li><b>Reduces Human Effort:</b> No manual tuning required.</li>
            <li><b>Handles Environmental Variations:</b> Works efficiently in changing conditions.</li>
            <li><b>Improves Performance:</b> Dynamically adjusts for optimal results.</li>
            <li><b>Scales Effectively:</b> Adapts to different workloads and hardware capabilities.</li>
        </ol>
    </div>
    <div className="mtop15p"><h2 className="blog-head"><b>Challenges and Considerations</b></h2></div>
    <div className="mtop15p">
        <ol>
            <li><b>Computational Overhead:</b> Monitoring and adjusting parameters require additional processing.</li>
            <li><b>Complexity in Design:</b> Requires well-defined criteria for tuning.</li>
            <li><b>Stability Issues:</b> Poorly designed feedback loops can cause instability.</li>
        </ol>
    </div>
 </div>);
};

export default HowItWorks;