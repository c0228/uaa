import React from "react";
import { Card, Highlight } from "e-ui-react";

const FJF_EXAMPLE_FORKJOINPOOL = `ForkJoinPool pool = new ForkJoinPool();
pool.invoke(new MyTask());`;

const FJF_EXAMPLE_RECURSIVETASK = `class SumTask extends RecursiveTask<Integer> {
    int[] arr;
    int start, end;

    SumTask(int[] arr, int start, int end) {
        this.arr = arr; this.start = start; this.end = end;
    }

    protected Integer compute() {
        if (end - start <= 2) {
            int sum = 0;
            for (int i = start; i < end; i++) sum += arr[i];
            return sum;
        }
        int mid = (start + end) / 2;
        SumTask left = new SumTask(arr, start, mid);
        SumTask right = new SumTask(arr, mid, end);
        left.fork();
        int rightResult = right.compute();
        int leftResult = left.join();
        return leftResult + rightResult;
    }
}`;

const FJF_EXAMPLE_RECURSIVEACTION = `class PrintTask extends RecursiveAction {
    int start, end;

    PrintTask(int start, int end) {
        this.start = start; this.end = end;
    }

    protected void compute() {
        if (end - start <= 3) {
            for (int i = start; i < end; i++)
                System.out.println("Value: " + i);
        } else {
            int mid = (start + end) / 2;
            invokeAll(new PrintTask(start, mid), new PrintTask(mid, end));
        }
    }
}`;

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p">
      <Card padding={15} backgroundColor="#eee">
         <div>Before Java 7, Java already had tools to run code in parallel using:</div>
         <div>
            <ul>
               <li className="mtop5p"><b>Threads</b> and <b>Thread Pools</b></li>
               <li className="mtop5p"><b>Runnable</b> and <b>Callable</b> interfaces</li>
               <li className="mtop5p"><b>ExecutorService</b> for concurrency.</li>
            </ul>
         </div>
         <div className="mtop5p">These were useful for running multiple tasks at once. But they had some 
         big problems, especially when:</div>
         <div>
            <ul>
               <li className="mtop5p">A task needed to be <b>split into smaller tasks</b> (like breaking a big job into tiny pieces)</li>
               <li className="mtop5p">The solution needed to <b>combine results from smaller parts</b> (like divide-and-conquer logic)</li>
            </ul>
         </div>
         <div className="mtop5p">— this is hard to manage with just threads. Because you had to:</div>
         <div>
            <ul>
               <li className="mtop5p">Manually create and manage threads</li>
               <li className="mtop5p">Write a lot of complex and error-prone code</li>
               <li className="mtop5p">Handle synchronization and result merging yourself</li>
               <li className="mtop5p">Worry about performance when many small tasks are created</li>
            </ul>
         </div>
         <div className="mtop5p">This approach didn’t scale well, especially on multi-core systems where efficient parallelism 
         matters.<br/> <b>That’s why the Fork/Join Framework was introduced in Java 7 — to make this easier, faster, and smarter.</b></div>
      </Card>
   </div>

   <div className="mtop15p"><h2 className="blog-head"><b>Introduction</b></h2></div>
   <div className="mtop15p">The <b>Fork/Join Framework</b> is a powerful concurrency framework introduced 
    in <b>Java 7</b> under the <code><b>java.util.concurrent</b></code> package. It's designed 
    to <b>speed up parallel processing</b> by breaking a task into smaller subtasks, executing them in parallel, 
    and then combining the results.</div>

    <div className="mtop15p"><h2 className="blog-head"><b>How It Works?</b></h2></div>
    <div className="mtop15p">
      <div>It follows a <b>divide-and-conquer</b> approach:</div>
      <div>
         <ol>
            <li className="mtop5p"><b>Fork:</b> A big task is split into smaller subtasks using <code><b>.fork()</b></code>.</li>
            <li className="mtop5p"><b>Compute:</b> Execute them in parallel.</li>
            <li className="mtop5p"><b>Join:</b> The results of subtasks are combined to produce the final result 
            efficently using <code><b>.join()</b></code>.</li>
         </ol>
      </div>
      <div className="mtop5p">
         <Card padding={15} backgroundColor="#eee">
            Use a special <b>work-stealing algorithm</b> to balance load among worker threads.
         </Card>
      </div>
      <div className="mtop5p">Under the hood, the pool maintains a <b>deque (double-ended queue)</b> for each worker thread, 
      where it pushes its own tasks. If a worker has no tasks left, it steals from the end of another worker's deque.</div>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b> Core Components of Fork/Join Framework</b></h2></div>
    <div>
      <ol>
         <li className="mtop15p">
            <div><h4 className="blog-head"><b>ForkJoinPool</b></h4></div>
            <div><span className="blog-head"><b>Definition:</b></span></div>
            <div>A special implementation of <code><b>ExecutorService</b></code> designed 
            for <b>parallel execution of tasks</b>.</div>
            <div><span className="blog-head"><b>Role:</b></span></div>
            <div>It manages a <b>pool of worker threads</b> and executes <code><b>ForkJoinTask</b></code>.</div>
            <div><span className="blog-head"><b>Key Features:</b></span></div>
            <div>
               <ul>
                  <li className="mtop5p">Uses <b>work-stealing algorithm</b> (idle threads "steal" tasks from busy threads).</li>
                  <li className="mtop5p">Can execute thousands of small subtasks efficiently.</li>
               </ul>
            </div>
            <div><span className="blog-head"><b>Example:</b></span></div>
            <div><Highlight content={FJF_EXAMPLE_FORKJOINPOOL} lang="java"/></div>
         </li>
         <li className="mtop15p">
            <div><h4 className="blog-head"><b>ForkJoinTask&lt;V&gt;</b></h4></div>
            <div><span className="blog-head"><b>Definition:</b></span></div>
            <div>An abstract class representing a task that can be executed in the ForkJoinPool.</div>
            <div><span className="blog-head"><b>Subclasses:</b></span></div>
            <div>There are two main types:</div>
            <div>
               <ul>
                  <li className="mtop5p"><code><b>RecursiveAction</b></code> &#8594; <b>Does not return a result</b>.</li>
                  <li className="mtop5p"><code><b>RecursiveTask&lt;V&gt;</b></code> &#8594; <b>Returns a result</b>.</li>
               </ul>
            </div>
         </li>
         <li className="mtop15p">
            <div><h4 className="blog-head"><b>RecursiveTask&lt;V&gt;</b></h4></div>
            <div><b>Used When:</b> You want to compute and <b>return a result</b> from the task.</div>
            <div><b>Structure::</b></div>
            <div>
               <ul>
                  <li className="mtop5p">Override the <code><b>compute()</b></code> method.</li>
                  <li className="mtop5p">Inside <code><b>compute()</b></code>, divide the task 
                  and <b>use</b> <code><b>fork()</b></code> and <code><b>join()</b></code>.</li>
               </ul>
            </div>
            <div><b>Example:</b></div>
            <div><Highlight content={FJF_EXAMPLE_RECURSIVETASK} lang="java" /></div>
         </li>
         <li className="mtop15p">
            <div><h4 className="blog-head"><b>RecursiveAction</b></h4></div>
            <div><b>Used When:</b> You want to perform a task but <b>don’t need to return a result</b>.</div>
            <div><b>Example:</b></div>
            <div><Highlight content={FJF_EXAMPLE_RECURSIVEACTION} lang="java" /></div>
         </li>
      </ol>
    </div>
 </div>);
};

export default Introduction;