import React from "react";
import { Card, Highlight } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const SCENARIO_EXAMPLE1_JAVA = `import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ForkJoinPool;
import java.util.concurrent.RecursiveTask;

public class FolderSizeCalculator {

    // Step 1: Create a RecursiveTask that returns a Long
    static class FolderSizeTask extends RecursiveTask<Long> {
        private final File folder;

        public FolderSizeTask(File folder) {
            this.folder = folder;
        }

        @Override
        protected Long compute() {
            long totalSize = 0;
            List<FolderSizeTask> subTasks = new ArrayList<>();

            File[] files = folder.listFiles();
            if (files != null) {
                for (File file : files) {
                    if (file.isFile()) {
                        totalSize += file.length();
                    } else if (file.isDirectory()) {
                        FolderSizeTask subTask = new FolderSizeTask(file);
                        subTask.fork(); // Fork a subtask for the sub-directory
                        subTasks.add(subTask);
                    }
                }
                for (FolderSizeTask task : subTasks) {
                    totalSize += task.join(); // Wait and add result of subtasks
                }
            }

            return totalSize;
        }
    }

    public static void main(String[] args) {
        File folder = new File("C:/Your/Directory/Path"); // Change this path

        // Step 2: Create ForkJoinPool
        ForkJoinPool pool = new ForkJoinPool();

        // Step 3: Create main task and invoke
        FolderSizeTask task = new FolderSizeTask(folder);
        long totalSize = pool.invoke(task); // invoke() starts and waits for result

        System.out.println("Total size: " + totalSize + " bytes");
    }
}`;

const SCENARIO_EXAMPLE2_JAVA = `import java.util.concurrent.RecursiveAction;
import java.util.concurrent.ForkJoinPool;

public class NumberPrinterTask extends RecursiveAction {
    private final int start;
    private final int end;
    private static final int THRESHOLD = 10;

    public NumberPrinterTask(int start, int end) {
        this.start = start;
        this.end = end;
    }

    @Override
    protected void compute() {
        if ((end - start) <= THRESHOLD) {
            // Base case: small range, print directly
            for (int i = start; i <= end; i++) {
                System.out.println("Number: " + i + " - Thread: " + Thread.currentThread().getName());
            }
        } else {
            // Split task
            int mid = (start + end) / 2;
            NumberPrinterTask leftTask = new NumberPrinterTask(start, mid);
            NumberPrinterTask rightTask = new NumberPrinterTask(mid + 1, end);
            
            // Fork both tasks
            leftTask.fork();
            rightTask.fork();

            // Join both to wait for completion
            leftTask.join();
            rightTask.join();
        }
    }

    public static void main(String[] args) {
        ForkJoinPool pool = new ForkJoinPool();

        NumberPrinterTask task = new NumberPrinterTask(1, 50);

        // Use invoke to start and wait for result
        pool.invoke(task);
    }
}`;

const SCENARIO_OUTPUT2_JAVA = `Number: 1 - Thread: ForkJoinPool.commonPool-worker-3
Number: 2 - Thread: ForkJoinPool.commonPool-worker-1
...
Number: 50 - Thread: ForkJoinPool.commonPool-worker-5`;

const Example = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h4 className="blog-head"><b>Scenario #1: Summing up all files’ sizes in a 
      directory (including subdirectories)</b></h4></div>
    <div className="mtop5p">This is a practical use case: recursively traverse a folder and calculate the total size 
      of all files using the <b>Fork/Join Framework</b>.</div>
   <div className="mtop5p">
      <Card padding={15} backgroundColor="#eee">
         <div><h5 className="blog-head"><b>Core Components Covered:</b></h5></div>
         <div>
            <ul>
               <li className="mtop5p"><code><b>ForkJoinPool</b></code> - manages worker threads</li>
               <li className="mtop5p"><code><b>ForkJoinTask</b></code> - base class for tasks</li>
               <li className="mtop5p"><code><b>RecursiveTask</b></code> - returns a result</li>
               <li className="mtop5p"><code><b>fork()</b></code> - asynchronously executes a subtask</li>
               <li className="mtop5p"><code><b>join()</b></code> - waits for the result of a subtask</li>
               <li className="mtop5p"><code><b>invoke()</b></code> - submits a task and waits for result</li>
            </ul>
         </div>
      </Card>
   </div>
   <div className="mtop5p padLeft5p"><h5 className="blog-head"><b>Example:</b></h5></div>
   <div className="mtop5p"><Highlight content={SCENARIO_EXAMPLE1_JAVA} lang="java" /></div>
   <div className="mtop5p">In Above Example,</div>
   <div className="mtop5p">
      <SimpleTable header={["Component", "Meaning"]} 
        columns={[
            [(<div><code><b>ForkJoinPool</b></code></div>), "Manages multiple threads under the hood"],
            [(<div><code><b>RecursiveTask</b></code></div>), (<div>Used when your task returns a result (like total size <code><b>Long</b></code>)</div>)],
            [(<div><code><b>fork()</b></code></div>), "Splits the task – assigns a sub-task to be done asynchronously"],
            [(<div><code><b>join()</b></code></div>), "Collects the result of the forked subtask (waits if not finished yet)"],
            [(<div><code><b>invoke()</b></code></div>), "Submits the root task and waits until it completes"]
          ]} />
   </div>
   <div className="mtop15p"><h4 className="blog-head"><b>Scenario #2: Printing numbers in a range using parallel recursion</b></h4></div>
   <div className="mtop5p">This example <b>prints numbers from a given range (start to end)</b> using parallel threads. It 
   doesn’t return any result — it just performs an action, which is ideal for <code><b>RecursiveAction</b></code>.</div>
   <div className="mtop5p padLeft5p"><h5 className="blog-head"><b>Example:</b></h5></div>
   <div className="mtop5p"><Highlight content={SCENARIO_EXAMPLE2_JAVA} lang="java" /></div>
   <div className="mtop5p">In Above Example,</div>
   <div className="mtop5p">
          <SimpleTable header={["Component", "Purpose"]} 
               columns={[
                     [(<div><code><b>RecursiveAction</b></code></div>), "A task that performs an action but does not return a result"],
                     [(<div><code><b>compute()</b></code></div>), "The main logic of splitting or doing the task"],
                     [(<div><code><b>fork()</b></code></div>), "Runs the subtask in a separate thread"],
                     [(<div><code><b>join()</b></code></div>), "Waits for the subtask to complete"],
                     [(<div><code><b>invoke()</b></code></div>), "Submits the root task and waits for it to complete"],
                  ]} />
   </div>
   <div className="mtop5p padLeft5p"><h5 className="blog-head"><b>Output:</b></h5></div>
   <div className="mtop5p"><Highlight content={SCENARIO_OUTPUT2_JAVA} lang="java" /></div>

   
 </div>);
};

export default Example;