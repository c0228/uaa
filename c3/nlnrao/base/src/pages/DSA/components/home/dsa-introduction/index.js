import React from "react";
import { Row, Col } from "e-ui-react";
import AlgoOverviewList from "@Pages/DSA/components/algo-overview-list/index.js";

const DSAIntroduction = () =>{
 return (<div>
  <Row>
    <Col xl={6} xxl={6}>
      <AlgoOverviewList header="Sorting Algorithms"
        desc="Sorting algorithms arrange elements in a particular order, usually ascending or descending."
        data={[
              ['Bubble Sort', 'Repeatedly swaps adjacent elements if they are in the wrong order.'],
              ['Selection Sort', 'Finds the minimum element and places it at the correct position.'],
              ['Insertion Sort', 'Picks an element and places it in its correct position among sorted elements.'],
              ['Merge Sort','Uses a divide-and-conquer approach to merge sorted subarrays.'],
              ['Quick Sort', 'Selects a pivot and partitions the array around it.'],
              ['Heap Sort', 'Uses a binary heap structure to sort elements efficiently.'],
              ['Counting Sort', 'Works efficiently for integers within a known range.'],
              ['Radix Sort', 'Sorts numbers digit by digit using counting sort as a subroutine.']
            ]} />   
      <AlgoOverviewList header="Dynamic Programming (DP)"
        desc="DP solves problems by breaking them into overlapping subproblems."
        data={[
          ['Fibonacci Series (Top-down & Bottom-up)', 'Computes Fibonacci numbers efficiently.'],
          ['0/1 Knapsack Problem','Selects items with maximum value without exceeding capacity.'],
          ['Longest Common Subsequence (LCS)', 'Finds the longest subsequence present in two sequences.'],
          ['Longest Increasing Subsequence (LIS)','Finds the longest increasing subsequence.'],
          ['Matrix Chain Multiplication', 'Finds optimal order to multiply matrices.'],
          ['Coin Change Problem','Finds the minimum number of coins needed to make change.'],
          ['Rod Cutting Problem', 'Finds the maximum value from cutting a rod.'],
          ['Edit Distance','Measures similarity between two strings.'],
        ]} />

      <AlgoOverviewList header="Stack & Queue"
        data={[
          ['Stack', 'A LIFO (Last In, First Out) data structure (Example: Undo operation).'],
          ['Queue', 'A FIFO (First In, First Out) data structure (Example: Print queue).'],
          ['Deque (Double-Ended Queue)', 'Supports insertion and deletion at both ends.'],
          ['Priority Queue', 'A queue where elements are removed based on priority (implemented using Heap)']
        ]} />

      <AlgoOverviewList header="Hashing"
        data={[
          ['Hash Table', 'A data structure that stores key-value pairs using a hash function for efficient lookup, insertion, and deletion.'],
          ['Hash Function', 'A mathematical function that converts input data (keys) into a fixed-size numerical value (hash code) for indexing in a hash table.'],
          ['Hash Collision', 'Occurs when two different keys produce the same hash value. Collision resolution techniques like chaining and open addressing handle this issue.'],
          ['HashMaps', 'A key-value pair-based data structure that allows fast lookups and updates.'],
          ['HashSet', 'A collection that stores unique elements using hashing for quick access.'],
          ['Perfect Hashing Algorithms', 'A technique that creates a collision-free hash function, ensuring O(1) lookup time by using two-level or minimal perfect hashing methods.'],
          ['Robin Hood Hashing Algorithms', 'A collision resolution strategy where elements with longer probe sequences "steal" slots from elements with shorter sequences to balance distribution.'],
          ['Hopscotch Hashing Algorithms', 'A method improving open addressing by allowing displaced elements to "hop" to nearby empty slots, reducing clustering.'],
          ['Cuckoo Hashing Algorithms', 'Uses two or more hash functions and moves elements to alternative positions (like a cuckoo bird replacing eggs) to resolve collisions.'],
          ['Two-level Hashing (Dynamic Perfect Hashing) Algorithms', 'A technique using multiple hash tables where the first level maps keys to buckets, and the second level ensures no collisions inside each bucket.'],
          ['String Hashing', 'Polynomial Hashing, Rolling Hashing, Karp-Rabin Algorithms']
        ]} />


      <AlgoOverviewList header="Backtracking"
        desc="Backtracking is used to generate all possible solutions and discard invalid ones."
        data={[
          ['N-Queens Problem', 'Places N queens on an NxN chessboard.'],
          ['Sudoku Solver','Solves Sudoku puzzles by trying all possibilities.'],
          ['Rat in a Maze', 'Finds a path in a maze.'],
          ['Word Search','Searches for a word in a 2D grid.'],
          ['Hamiltonian Cycle', 'Finds a cycle visiting all vertices exactly once.']
        ]} />
      <AlgoOverviewList header="Probabilistics Data Structures Algorithms"
        desc="Probabilistic data structures are data structures that use probabilistic techniques to provide approximate solutions with reduced memory and computational requirements."
        data={[
          ['Bloom Filter', 'Membership testing (Is an element in a set?)'],
          ['Bloomier Filter','Stores key-value mappings instead of just membership.'],
          ['Counting Bloom Filter', 'Membership testing with deletions.'],
          ['Stable Bloom Filter','A variation of Bloom Filters that works well with continuously changing data (e.g., streaming applications).'],
          ['Skip Bloom Filter', 'Combines Bloom Filter with a hierarchical structure to improve query efficiency.'],
          ['BloomClock','Hybrid of Vector Clocks and Bloom Filters for tracking causality in distributed systems.'],
          ['Xor Filter','An alternative to Bloom Filters with better space efficiency.'],
          ['Quotient Filter', 'Alternative to Bloom Filters with lower memory overhead and deletions.'],
          ['Cuckoo Filter', 'Membership testing with better space efficiency and deletions.'],
          ['HyperLogLog', 'Approximate cardinality estimation (Counting unique elements).'],
          ['BJKST Algorithm','Approximate distinct element counting in a stream.'],
          ['Count-Min Sketch', 'Approximate frequency counting of elements in a stream.'],
          ['Skip List', 'Efficient ordered set with probabilistic balancing.'],
          ['Graph Sketching (MinHash)', 'Estimate Jaccard similarity between sets.'],
          ['GraphSketch (Spanning Tree Sketching)', 'Approximate similarity between large graphs.'],
          ['Space-Saving Algorithm', 'Finds the most frequently occurring elements in a data stream (Top-K elements).'],
          ['T-Digest', 'Approximate quantile estimation (percentiles, median).'],
          ['Count Sketch','Estimates frequency of elements, like Count-Min Sketch, but reduces bias.'],
          ['Wavelet Tree','Compressed representation of sequences for rank/select queries.'],
          ['Exponential Histogram','Estimates count of elements within a sliding window.'],
          ['SuRF (Succinct Range Filter)','Probabilistic range query filtering.']
        ]} />
    </Col>
    <Col xl={6} xxl={6}>
      <AlgoOverviewList header="Searching Algorithms"
        desc="Searching algorithms find an element in a given data structure."
        data={[
              ['Linear Search', 'Iterates through the array to find the element.'],
              ['Binary Search', 'Searches in a sorted array by dividing it into halves.'],
              ['Ternary Search', 'Searches in a sorted array by dividing it into three parts.'],
              ['Jump Search', 'Jumps ahead by fixed steps and then performs linear search.'],
              ['Interpolation Search','Similar to binary search but estimates position dynamically.'],
              ['Exponential Search', 'Used for unbounded or infinite arrays.'],
              ['Hashing-Based Search', 'Efficient for unordered data, uses a hash function to map keys to array indices.'],
              ['Trie (Prefix Tree)', 'Used for searching words in dictionaries, autocomplete, and search engines.'],
              ['B-Trees', 'Balanced tree structure used in databases for indexing large datasets (Efficient for disk-based storage).'] 
        ]} />

      <AlgoOverviewList header="Array & Linked List"
        data={[
          ['Array', 'A contiguous memory data structure that stores elements of the same type.'],
          ['Dynamic Array', 'An array that resizes itself dynamically.'],
          ['Linked List', 'A linear data structure where elements (nodes) point to the next node.'],
          ['Singly Linked List (SLL)', 'Each node has data and a pointer to the next node.'],
          ['Doubly Linked List (DLL)', 'Each node has data, a next pointer, and a previous pointer.'],
          ['Circular Linked List (CLL)', 'Last node points back to the first node']
        ]} />

      <AlgoOverviewList header="Graph Algorithms"
        desc="Graph algorithms work on graph-based structures such as trees, social networks, and maps."
        data={[
          ['Breadth-First Search (BFS)', 'Explores the nearest neighbors first.'],
          ['Depth-First Search (DFS)','Explores as deep as possible before backtracking.'],
          ['Dijkstra’s Algorithm', 'Finds the shortest path in a weighted graph.'],
          ['PageRank Algorithm', 'Detects phishing and malicious websites.'],
          ['Floyd-Warshall Algorithm','Finds shortest paths between all pairs of nodes.'],
          ['Bellman-Ford Algorithm', 'Finds the shortest path in graphs with negative weights.'],
          ['Prim’s Algorithm','Finds a Minimum Spanning Tree (MST) using edge selection.'],
          ['Kruskal’s Algorithm', 'Finds MST using sorted edges.'],
          ['Topological Sorting','Orders nodes in a Directed Acyclic Graph (DAG).'],
          ['A Algorithm*', 'Finds the shortest path using heuristics.'],
          ['Disjoint Set (Union-Find)', ' Used for cycle detection in graphs.']
        ]} />
      <AlgoOverviewList header="Greedy Algorithms"
        desc="Greedy algorithms make locally optimal choices at each step."
        data={[
          ['Activity Selection Problem', 'Selects maximum number of non-overlapping activities.'],
          ['Huffman Encoding','Generates an optimal prefix code.'],
          ['Fractional Knapsack Problem', 'Selects items with maximum value-to-weight ratio.'],
          ['Job Sequencing Problem','Schedules jobs to maximize profit.'],
          ['Coin Change Problem','Minimum Coins to Make Value'],
          ['Prim’s and Kruskal’s Algorithm', 'Used for Minimum Spanning Tree (MST).'],
          ['Egyptian Fraction Representation',' Represent a fraction as a sum of distinct unit fractions (fractions with numerator = 1).'],
          ['Interval Scheduling Maximization','Given intervals (start, end), find the maximum number of non-overlapping intervals.']
        ]} />

      <AlgoOverviewList header="Tree and Binary Search Tree (BST) Algorithms"
        desc="Tree algorithms work with hierarchical structures."
        data={[
          ['Inorder, Preorder, Postorder Traversal', 'Ways to traverse a tree.'],
          ['Level Order Traversal (BFS on Trees)','Traverses a tree level by level.'],
          ['Lowest Common Ancestor (LCA)', 'Finds the common ancestor of two nodes.'],
          ['Diameter of a Tree','Finds the longest path between any two nodes.'],
          ['Balanced Binary Tree Check', 'Determines if a tree is balanced.'],
          ['Binary Search Tree (BST) Operations','Insertion, Deletion, and Search.'],
          ['Trie Data Structure', 'Used for prefix-based searching.'],
          ['Segment Tree & Fenwick Tree', 'Data structures for range queries.']
        ]} />

      <AlgoOverviewList header="Bit Manipulation"
        desc={<div>Bit manipulation optimizes computations using binary operations / 
          bitwise operations (<code><b>AND</b></code>, <code><b>OR</b></code>, 
          <code><b>XOR</b></code>, <code><b>NOT</b></code>, <code><b>SHIFT</b></code>).</div>}
        data={[
          ['Check if a number is power of 2'],
          ['Count set bits in an integer (Brian Kernighan’s Algorithm)'],
          ['Find the only non-repeating number in an array'],
          ['XOR swap technique','Swaps numbers without a temporary variable.'],
          ['Reverse Bits of a Number'],
          ['Find XOR from 1 to N'],
          ['Find the Missing Number in an Array (1 to N)'],
          ['Count the Number of Bits Needed to Flip to Convert A to B'],
          ['Find the Position of the Only Set Bit']
        ]} />

      <AlgoOverviewList header="String Algorithms"
        desc="String algorithms process text data efficiently."
        data={[
          ['Knuth-Morris-Pratt (KMP) Algorithm', 'Efficient substring search algorithm.'],
          ['Rabin-Karp Algorithm (Rolling Hashing)', 'Uses hashing for pattern searching.'],
          ['Z Algorithm', 'Finds pattern occurrences in linear time.'],
          ['Manacher’s Algorithm', 'Finds the longest palindromic substring.'],
          ['Trie Data Structure', 'Stores and searches strings efficiently.'],
          ['Boyer-Moore Algorithm','Fast String Search in text efficiently by skipping unnecessary comparisons.'],
          ['Longest Common Prefix (LCP) using Binary Search','Find the longest common prefix of multiple strings.'],
          ['Aho-Corasick Algorithm (Multi-Pattern Matching using Trie + BFS)', ' Search multiple patterns in a text simultaneously.']
        ]} />

      <AlgoOverviewList header="Heap Algorithms"
        desc="Heap-based problems use a priority queue approach."
        data={[
          ['Max Heap & Min Heap Implementation'],
          ['Heap Sort',' Sort an array using a heap data structure.'],
          ['Priority Queue (Using Heap)','Efficiently manage tasks with different priorities.'],
          ['Kth Largest or Smallest Elements (or Element) in an Array'],
          ['Merge K Sorted Lists using Heap'],
          ['Median in a Stream of Integers']
        ]} />

    </Col>
  </Row>
  

  
 </div>);
};

export default DSAIntroduction;