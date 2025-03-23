import React from "react";
import { Highlight } from "e-ui-react";
import { BlogIndexHeader } from "@Components/blog-index-header/index.js";

const EXTERNAL_MERGE_SORT_NODEJS = `const fs = require('fs');
const readline = require('readline');
const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

const CHUNK_SIZE = 1000; // Adjust based on memory

async function sortAndSaveChunk(chunk, chunkIndex) {
    chunk.sort((a, b) => a - b);
    const filename = \`sorted_chunk_\${chunkIndex}.txt\`;
    await fs.promises.writeFile(filename, chunk.join("\\n") + "\\n");
    return filename;
}

async function externalMergeSort(inputFile, outputFile) {
    let chunks = [];
    let chunk = [];
    let index = 0;

    const rl = readline.createInterface({
        input: fs.createReadStream(inputFile),
        crlfDelay: Infinity
    });

    for await (const line of rl) {
        chunk.push(parseInt(line.trim(), 10));
        if (chunk.length >= CHUNK_SIZE) {
            chunks.push(await sortAndSaveChunk(chunk, index));
            chunk = [];
            index++;
        }
    }
    if (chunk.length > 0) {
        chunks.push(await sortAndSaveChunk(chunk, index));
    }

    const minHeap = new MinPriorityQueue({ priority: x => x.value });
    const fileStreams = chunks.map((file, i) => ({
        stream: readline.createInterface({ input: fs.createReadStream(file) }),
        nextLine: null,
        index: i
    }));

    for (const file of fileStreams) {
        file.nextLine = (await file.stream[Symbol.asyncIterator]().next()).value;
        if (file.nextLine) minHeap.enqueue({ value: parseInt(file.nextLine, 10), index: file.index });
    }

    const outputStream = fs.createWriteStream(outputFile);

    while (!minHeap.isEmpty()) {
        const { value, index } = minHeap.dequeue();
        outputStream.write(value + "\\n");

        const file = fileStreams[index];
        file.nextLine = (await file.stream[Symbol.asyncIterator]().next()).value;
        if (file.nextLine) minHeap.enqueue({ value: parseInt(file.nextLine, 10), index });
    }

    outputStream.end();
    fileStreams.forEach(f => f.stream.close());
    chunks.forEach(f => fs.unlinkSync(f));
}

// Example Usage
externalMergeSort('input.txt', 'output.txt');`;

const EXTERNAL_MERGE_SORT_PYTHON = `import heapq
import os

CHUNK_SIZE = 1000  # Adjust based on available memory

def sort_and_save_chunk(filename, chunk, chunk_index):
    chunk.sort()
    temp_filename = f"sorted_chunk_{chunk_index}.txt"
    with open(temp_filename, 'w') as f:
        for num in chunk:
            f.write(f"{num}\\n")
    return temp_filename

def external_merge_sort(input_file, output_file):
    chunks = []
    with open(input_file, 'r') as f:
        chunk = []
        index = 0
        for line in f:
            chunk.append(int(line.strip()))
            if len(chunk) >= CHUNK_SIZE:
                chunks.append(sort_and_save_chunk(input_file, chunk, index))
                chunk = []
                index += 1
        if chunk:
            chunks.append(sort_and_save_chunk(input_file, chunk, index))
    
    with open(output_file, 'w') as out:
        min_heap = []
        files = [open(chunk, 'r') for chunk in chunks]
        for i, file in enumerate(files):
            num = int(file.readline().strip())
            heapq.heappush(min_heap, (num, i))
        
        while min_heap:
            num, i = heapq.heappop(min_heap)
            out.write(f"{num}\\n")
            line = files[i].readline()
            if line:
                heapq.heappush(min_heap, (int(line.strip()), i))
        
        for f in files:
            f.close()
            os.remove(f.name)`;

const EXTERNAL_MERGE_SORT_JAVA = `import java.io.*;
import java.util.*;

public class ExternalMergeSort {
    private static final int CHUNK_SIZE = 1000; // Adjust based on memory

    public static void main(String[] args) throws IOException {
        externalMergeSort("input.txt", "output.txt");
    }

    private static String sortAndSaveChunk(List<Integer> chunk, int chunkIndex) throws IOException {
        Collections.sort(chunk);
        String filename = "sorted_chunk_" + chunkIndex + ".txt";
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(filename))) {
            for (int num : chunk) {
                writer.write(num + "\\n");
            }
        }
        return filename;
    }

    public static void externalMergeSort(String inputFile, String outputFile) throws IOException {
        List<String> chunks = new ArrayList<>();
        List<Integer> chunk = new ArrayList<>();
        int index = 0;

        try (BufferedReader reader = new BufferedReader(new FileReader(inputFile))) {
            String line;
            while ((line = reader.readLine()) != null) {
                chunk.add(Integer.parseInt(line.trim()));
                if (chunk.size() >= CHUNK_SIZE) {
                    chunks.add(sortAndSaveChunk(chunk, index));
                    chunk.clear();
                    index++;
                }
            }
            if (!chunk.isEmpty()) {
                chunks.add(sortAndSaveChunk(chunk, index));
            }
        }

        PriorityQueue<FileEntry> minHeap = new PriorityQueue<>();
        List<BufferedReader> readers = new ArrayList<>();

        for (String file : chunks) {
            BufferedReader br = new BufferedReader(new FileReader(file));
            readers.add(br);
            String line = br.readLine();
            if (line != null) {
                minHeap.offer(new FileEntry(Integer.parseInt(line), br));
            }
        }

        try (BufferedWriter writer = new BufferedWriter(new FileWriter(outputFile))) {
            while (!minHeap.isEmpty()) {
                FileEntry entry = minHeap.poll();
                writer.write(entry.value + "\\n");
                String line = entry.reader.readLine();
                if (line != null) {
                    minHeap.offer(new FileEntry(Integer.parseInt(line), entry.reader));
                }
            }
        }

        for (BufferedReader br : readers) {
            br.close();
        }

        for (String file : chunks) {
            new File(file).delete();
        }
    }

    static class FileEntry implements Comparable<FileEntry> {
        int value;
        BufferedReader reader;

        FileEntry(int value, BufferedReader reader) {
            this.value = value;
            this.reader = reader;
        }

        @Override
        public int compareTo(FileEntry other) {
            return Integer.compare(this.value, other.value);
        }
    }
}`;

const STREAMING_ALGO_NODEJS = `const HyperLogLog = require('hyperloglog');

const hll = new HyperLogLog(0.01); // Initialize with 1% error rate

// Insert 1,000,000 unique elements
for (let i = 0; i < 1000000; i++) {
    hll.add(i);
}

// Estimate unique count
console.log("Estimated unique count:", hll.count());`;

const STREAMING_ALGO_PYTHON = `import hyperloglog

# Initialize HyperLogLog with a standard error rate (0.01)
hll = hyperloglog.HyperLogLog(0.01)

# Insert 1,000,000 unique elements
for i in range(1000000):
    hll.add(i)

# Estimate unique count
print("Estimated unique count:", len(hll))`;

const STREAMING_ALGO_JAVA = `import com.clearspring.analytics.stream.cardinality.HyperLogLog;

public class UniqueCounter {
    public static void main(String[] args) {
        HyperLogLog hll = new HyperLogLog(0.01);
        
        for (int i = 0; i < 1000000; i++) {
            hll.offer(i);
        }
        
        System.out.println("Estimated unique count: " + hll.cardinality());
    }
}`;

const APACHE_SPARK_NODEJS = `const spark = require('@databricks/spark-sql');
const session = spark.session().builder().appName("BigDataProcessing").getOrCreate();

const df = session.read().csv("large_dataset.csv");
df.groupBy("category").count().show();`;

const APACHE_SPARK_PYTHON = `from pyspark.sql import SparkSession

# Create Spark Session
spark = SparkSession.builder.appName("BigDataProcessing").getOrCreate()

# Read CSV file into DataFrame
df = spark.read.csv("large_dataset.csv", header=True, inferSchema=True)

# Group by 'category' column and count occurrences
df.groupBy("category").count().show()

# Stop the Spark session
spark.stop()`;

const APACHE_SPARK_JAVA = `import org.apache.spark.sql.*;

public class BigDataProcessing {
    public static void main(String[] args) {
        // Create Spark Session
        SparkSession spark = SparkSession.builder()
                .appName("BigDataProcessing")
                .getOrCreate();

        // Read CSV file into DataFrame
        Dataset<Row> df = spark.read().option("header", "true").csv("large_dataset.csv");

        // Group by 'category' column and count occurrences
        df.groupBy("category").count().show();

        // Stop Spark session
        spark.stop();
    }
}`;

const Algorithms = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div align="center" className="mtop15p"><h2 className="blog-head"><b>1. External Memory Algorithms</b></h2></div>
    <div className="mtop15p">External memory (or out-of-core) algorithms work by leveraging disk storage or external 
        memory to process large datasets efficiently. They minimize disk I/O operations using techniques such as 
        buffering, prefetching, and indexing.</div>

    <div className="mtop15p">
    <BlogIndexHeader type="h4" index="1.1" title="External Sorting" />
    <div className="padLeft5p">Sorting is a fundamental problem when handling large datasets. Traditional in-memory 
        sorting algorithms like QuickSort or MergeSort are inefficient when datasets do not fit in RAM. Instead, we 
        use External Merge Sort (EMS).</div>
    </div>
    
    <div className="mtop15p">
    <BlogIndexHeader type="h4" index="1.2" title="External Merge Sort (EMS) Algorithm" />
    <div><b>Steps:</b></div>
    <div>
        <ol>
            <li>Divide the dataset into small chunks that fit into memory.</li>
            <li>Sort each chunk in memory and store it as a temporary file.</li>
            <li>Merge the sorted files efficiently using a k-way merge algorithm.</li>
        </ol>
    </div>
    <div className="mtop15p"><b>Example Implementation:</b></div>
    <div className="padLeft5p"><b>Node JS:</b></div>
    <Highlight content={EXTERNAL_MERGE_SORT_NODEJS} lang="javascript" />
    <div className="padLeft5p"><b>Python:</b></div>
    <Highlight content={EXTERNAL_MERGE_SORT_PYTHON} lang="python" />
    <div className="padLeft5p"><b>Java:</b></div>
    <Highlight content={EXTERNAL_MERGE_SORT_JAVA} lang="java" />
    <div>This method efficiently sorts data that exceeds memory limitations.</div>
    </div>

    <div align="center" className="mtop15p"><h2 className="blog-head"><b>2. Streaming Algorithms</b></h2></div>
    <div className="mtop15p">Streaming algorithms process data sequentially in small chunks, ensuring low memory 
        usage. These algorithms are useful for summarization tasks like finding the top-k elements, calculating 
        moving averages, or counting distinct elements.</div>
    <div className="mtop15p">
        <BlogIndexHeader type="h4" index="2.1" title="Counting Unique Elements (HyperLogLog)" />
        <div className="padLeft5p">
            <div>HyperLogLog is a probabilistic data structure used for cardinality estimation.</div>
            <div className="mtop15p"><b>Example Implementation:</b></div>
            <div className="padLeft5p"><b>NodeJS (Using HyperLogLog):</b></div>
            <Highlight content={`npm install hyperloglog`} lang="html" />
            <Highlight content={STREAMING_ALGO_NODEJS} lang="python" />
            <div className="padLeft5p"><b>Python (Using HyperLogLog):</b></div>
            <Highlight content={`pip install hyperloglog`} lang="html" />
            <Highlight content={STREAMING_ALGO_PYTHON} lang="python" />
            <div className="padLeft5p"><b>Java (Using HyperLogLog):</b></div>
            <Highlight content={STREAMING_ALGO_JAVA} lang="java" />
            <div>HyperLogLog efficiently approximates the number of unique elements using minimal memory.</div>
        </div>
    </div>


    <div align="center" className="mtop15p"><h2 className="blog-head"><b>3. Distributed Processing</b></h2></div>
    <div className="mtop15p">When datasets are too large for a single machine, distributed computing frameworks 
        such as Hadoop, Apache Spark, or Dask can help process them efficiently.</div>
    <div className="mtop15p">
        <BlogIndexHeader type="h4" index="3.1" title="Apache Spark for Large Data Processing" />
        <div className="padLeft5p">
            <div>Apache Spark distributes computations across multiple nodes in a cluster, enabling efficient 
                parallel processing of large datasets.</div>
            <div className="mtop15p"><b>Example Implementation:</b></div>
            <div className="padLeft5p"><b>Node.js (Using Apache Spark):</b></div>
            <Highlight content={APACHE_SPARK_NODEJS} lang="javascript" />
            <div>This example demonstrates how to count occurrences of a column’s values in a distributed 
                fashion using Spark in Node.js.</div>
            <div className="mtop15p padLeft5p"><b>Python (PySpark):</b></div>
            <Highlight content={APACHE_SPARK_PYTHON} lang="python" />
            <div className="mtop15p padLeft5p"><b>Java (Spark Java API):</b></div>
            <Highlight content={APACHE_SPARK_JAVA} lang="java" />
            
        </div>
    </div>
 </div>);
};

export default Algorithms;