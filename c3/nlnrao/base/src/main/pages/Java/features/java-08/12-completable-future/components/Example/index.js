import React from "react";
import { Highlight } from "e-ui-react";

const RUNASYNC_EXAMPLE_JAVA = `import java.util.concurrent.*;

public class CompletableFutureDemo {
    public static void main(String[] args) {
        CompletableFuture<Void> future = CompletableFuture.runAsync(() -> {
            System.out.println("Task is running asynchronously!");
        });

        // Wait for completion
        future.join(); 
    }
}`;

const RUNASYNC_OUTPUT_JAVA = `Task is running asynchronously!`;

const SUPPLYASYNC_EXAMPLE_JAVA = `import java.util.concurrent.*;

public class CompletableFutureSupply {
    public static void main(String[] args) {
        CompletableFuture<Integer> future = CompletableFuture.supplyAsync(() -> {
            return 10 * 2;
        });

        System.out.println("Result: " + future.join()); // Non-blocking join
    }
}`;

const SUPPLYASYNC_OUTPUT_JAVA = `Result: 20`;

const CHAININGTASKS_EXAMPLE_JAVA = `import java.util.concurrent.*;

public class CompletableFutureChain {
    public static void main(String[] args) {
        CompletableFuture<Integer> future = CompletableFuture.supplyAsync(() -> 5)
                .thenApply(n -> n * 2)
                .thenApply(n -> n + 10);

        System.out.println("Final Result: " + future.join());
    }
}`;

const CHAININGTASKS_OUTPUT_JAVA = `Final Result: 20`;

const COMBINETWO_EXAMPLE_JAVA = `import java.util.concurrent.*;

public class CompletableFutureCombine {
    public static void main(String[] args) {
        CompletableFuture<Integer> future1 = CompletableFuture.supplyAsync(() -> 10);
        CompletableFuture<Integer> future2 = CompletableFuture.supplyAsync(() -> 20);

        CompletableFuture<Integer> combined = future1.thenCombine(future2, (a, b) -> a + b);

        System.out.println("Sum: " + combined.join());
    }
}`;

const COMBINETWO_OUTPUT_JAVA = `Sum: 30`;

const Example = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Examples of CompletableFuture</b></h2></div>
    
    <div className="mtop15p"><h5 className="blog-head"><b>Example #1: Run Async Task</b></h5></div>
    <div className="mtop5p"><Highlight content={RUNASYNC_EXAMPLE_JAVA} lang="java" /></div>
    <div className="mtop5p padLeft5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={RUNASYNC_OUTPUT_JAVA} lang="java" /></div>
    <div className="mtop15p"><h5 className="blog-head"><b>Explanation:</b></h5></div>
    <div>
      <ul>
         <li className="mtop5p"><code><b>runAsync()</b></code> runs a task in a <b>separate thread</b> without blocking the main thread.</li>
         <li className="mtop5p"><code><b>join()</b></code> waits for its completion without throwing checked exceptions.</li>
      </ul>
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>Example #2: Return a Result with supplyAsync</b></h5></div>
    <div className="mtop5p"><Highlight content={SUPPLYASYNC_EXAMPLE_JAVA} lang="java" /></div>
    <div className="mtop5p padLeft5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={SUPPLYASYNC_OUTPUT_JAVA} lang="java" /></div>
    <div className="mtop15p"><h5 className="blog-head"><b>Explanation:</b></h5></div>
    <div>
      <ul>
         <li className="mtop5p"><code><b>supplyAsync()</b></code> returns a <b>result asynchronously</b>.</li>
         <li className="mtop5p"><code><b>join()</b></code> fetches the result without forcing checked exceptions 
         like <code><b>ExecutionException</b></code> or <code><b>InterruptedException</b></code>.</li>
      </ul>
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>Example #3: Chaining Tasks</b></h5></div>
    <div className="mtop5p"><Highlight content={CHAININGTASKS_EXAMPLE_JAVA} lang="java" /></div>
    <div className="mtop5p padLeft5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={CHAININGTASKS_OUTPUT_JAVA} lang="java" /></div>
    <div className="mtop15p"><h5 className="blog-head"><b>Explanation:</b></h5></div>
    <div>
      <ul>
         <li className="mtop5p">Multiple async operations are chained using <code><b>thenApply()</b></code></li>
         <li className="mtop5p">The tasks are executed <b>asynchronously</b> and <b>sequentially</b>.</li>
      </ul>
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>Example #4: Combining Two Futures</b></h5></div>
    <div className="mtop5p"><Highlight content={COMBINETWO_EXAMPLE_JAVA} lang="java" /></div>
    <div className="mtop5p padLeft5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={COMBINETWO_OUTPUT_JAVA} lang="java" /></div>
    <div className="mtop15p"><h5 className="blog-head"><b>Explanation:</b></h5></div>
    <div>
      <ul>
         <li className="mtop5p"><code><b>thenCombine()</b></code> combines the <b>results of two async computations</b>.</li>
         <li className="mtop5p">No manual thread management is required.</li>
      </ul>
    </div>

 </div>);
};

export default Example;