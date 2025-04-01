import React from "react";
import { Highlight } from "e-ui-react";
import OrderList from "@Components/order-list/index.js";

const BINARY_SEARCH_ALGO_PYTHON = `import unittest

def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = left + (right - left) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1

class TestBinarySearch(unittest.TestCase):
    def test_found(self):
        self.assertEqual(binary_search([1, 3, 5, 7, 9], 5), 2)
    def test_not_found(self):
        self.assertEqual(binary_search([1, 3, 5, 7, 9], 6), -1)
    def test_empty(self):
        self.assertEqual(binary_search([], 1), -1)
    def test_single_element(self):
        self.assertEqual(binary_search([5], 5), 0)
        self.assertEqual(binary_search([5], 3), -1)

if __name__ == '__main__':
    unittest.main()`;

const BINARY_SEARCH_ALGO_JAVA = `import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

public class BinarySearchTest {
    public static int binarySearch(int[] arr, int target) {
        int left = 0, right = arr.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (arr[mid] == target) return mid;
            else if (arr[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        return -1;
    }

    @Test
    void testBinarySearch() {
        assertEquals(2, binarySearch(new int[]{1, 3, 5, 7, 9}, 5));
        assertEquals(-1, binarySearch(new int[]{1, 3, 5, 7, 9}, 6));
        assertEquals(-1, binarySearch(new int[]{}, 1));
        assertEquals(0, binarySearch(new int[]{5}, 5));
    }
}`;

const BINARY_SEARCH_ALGO_JS = `function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

module.exports = binarySearch;

// Jest test
const binarySearch = require("./binarySearch");

test("binary search found", () => {
    expect(binarySearch([1, 3, 5, 7, 9], 5)).toBe(2);
});

test("binary search not found", () => {
    expect(binarySearch([1, 3, 5, 7, 9], 6)).toBe(-1);
});`;

const STRESS_TESTING_ALGO_PYTHON = `import random
arr = [random.randint(0, 10**6) for _ in range(10**6)]
assert sorted(arr) == sorted(arr)  # Built-in sort for validation`;

const STRESS_TESTING_ALGO_JAVA = `import java.util.*;
public class StressTest {
    public static void main(String[] args) {
        Random rand = new Random();
        int[] arr = rand.ints(1000000, 0, 1000000).toArray();
        Arrays.sort(arr);
    }
}`;

const STRESS_TESTING_ALGO_JS = `const arr = Array.from({ length: 1000000 }, () => Math.floor(Math.random() * 1000000));
arr.sort((a, b) => a - b);`;

const CONCUR_TESTING_ALGO_PYTHON = `import threading

counter = 0
lock = threading.Lock()

def increment():
    global counter
    for _ in range(1000):
        with lock:
            counter += 1

threads = [threading.Thread(target=increment) for _ in range(10)]
for t in threads:
    t.start()
for t in threads:
    t.join()
assert counter == 10000`;

const CONCUR_TESTING_ALGO_JAVA = `import java.util.concurrent.atomic.AtomicInteger;

public class ConcurrencyTest {
    static AtomicInteger counter = new AtomicInteger(0);
    public static void main(String[] args) throws InterruptedException {
        Thread[] threads = new Thread[10];
        for (int i = 0; i < 10; i++) {
            threads[i] = new Thread(() -> {
                for (int j = 0; j < 1000; j++) counter.incrementAndGet();
            });
            threads[i].start();
        }
        for (Thread t : threads) t.join();
        assert counter.get() == 10000;
    }
}`;

const CONCUR_TESTING_ALGO_JS = `let counter = 0;
const { Worker, isMainThread, parentPort } = require("worker_threads");

if (isMainThread) {
    let workers = [];
    for (let i = 0; i < 10; i++) {
        workers.push(new Worker(__filename));
    }
    Promise.all(workers.map(w => new Promise(res => w.on("exit", res)))).then(() => {
        console.log("Final Counter:", counter);
    });
} else {
    for (let i = 0; i < 1000; i++) counter++;
    parentPort.close();
}`;

const Methods = () =>{
 return (<div className="mtop15p mbot15p fs16p lh28p">
    <div className="mtop15p"><h2 className="blog-head"><b>Methods for Testing and Verifying Correctness</b></h2></div>
    <div>
        <ol>
            <li className="mtop15p">
                <div><h4><b>Unit Testing</b></h4></div>
                <div className="mtop15p">Unit testing involves testing individual components of an algorithm or data 
                    structure in isolation. Popular frameworks include:</div>
                <OrderList data={[(<div><b>JUnit (Java)</b></div>),
                    (<div><b>pytest (Python)</b></div>),
                    (<div><b>Jest/Mocha (Node.js)</b></div>)]} />
                <div className="mtop15p">Each test should cover normal cases, boundary conditions, and error conditions.</div>
                <div className="mtop15p"><b>Example: Unit Testing a Binary Search Algorithm</b></div>
                <div className="mtop15p padLeft15p">
                    <div className="padLeft5p"><b>Python -</b></div>
                    <Highlight content={BINARY_SEARCH_ALGO_PYTHON} lang="python" />
                    <div className="padLeft5p"><b>Java -</b></div>
                    <Highlight content={BINARY_SEARCH_ALGO_JAVA} lang="java" />
                    <div className="padLeft5p"><b>NodeJS  -</b></div>
                    <Highlight content={BINARY_SEARCH_ALGO_JS} lang="javascript" />
                </div>
            </li>
            <li>
                <div><h4><b>Stress Testing</b></h4></div>
                <div className="mtop15p">Stress testing evaluates performance and correctness under extreme conditions.</div>
                <div className="mtop15p padLeft15p">
                    <div className="padLeft5p"><b>Python -</b></div>
                    <Highlight content={STRESS_TESTING_ALGO_PYTHON} lang="python" />
                    <div className="padLeft5p"><b>Java -</b></div>
                    <Highlight content={STRESS_TESTING_ALGO_JAVA} lang="java" />
                    <div className="padLeft5p"><b>NodeJS  -</b></div>
                    <Highlight content={STRESS_TESTING_ALGO_JS} lang="javascript" />
                </div>
            </li>
            <li>
                <div><h4><b>Concurrency Testing</b></h4></div>
                <div className="mtop15p padLeft15p">
                    <div className="padLeft5p"><b>Python -</b></div>
                    <Highlight content={CONCUR_TESTING_ALGO_PYTHON} lang="python" />
                    <div className="padLeft5p"><b>Java -</b></div>
                    <Highlight content={CONCUR_TESTING_ALGO_JAVA} lang="java" />
                    <div className="padLeft5p"><b>NodeJS  -</b></div>
                    <Highlight content={CONCUR_TESTING_ALGO_JS} lang="javascript" />
                </div>
            </li>
        </ol>
    </div>
 </div>);
};

export default Methods;