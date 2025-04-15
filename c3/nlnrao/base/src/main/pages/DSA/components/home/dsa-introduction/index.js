import React from "react";
import { Row, Col } from "e-ui-react";
import AlgoOverviewList from "@MainPages/DSA/components/algo-overview-list/index.js";

const DSAIntroduction = () =>{
 return (<div>
  <Row>
    <Col xl={6} xxl={6}>
      <AlgoOverviewList header="Sorting Algorithms"
        desc="Sorting algorithms arrange elements in a particular order, usually ascending or descending."
        data={[
              ['Bubble Sort', 'Repeatedly swaps adjacent elements if they are in the wrong order.', 'tech/dsa/sorting-algorithms/bubble-sort'],
              ['Selection Sort', 'Finds the minimum element and places it at the correct position.', 'tech/dsa/sorting-algorithms/selection-sort'],
              ['Insertion Sort', 'Picks an element and places it in its correct position among sorted elements.', 'tech/dsa/sorting-algorithms/insertion-sort'],
              ['Merge Sort','Uses a divide-and-conquer approach to merge sorted subarrays.','tech/dsa/sorting-algorithms/merge-sort'],
              ['Quick Sort', 'Selects a pivot and partitions the array around it.','tech/dsa/sorting-algorithms/quick-sort'],
              ['Heap Sort', 'Uses a binary heap structure to sort elements efficiently.','tech/dsa/sorting-algorithms/heap-sort'],
              ['Counting Sort', 'Works efficiently for integers within a known range.','tech/dsa/sorting-algorithms/counting-sort'],
              ['Radix Sort', 'Sorts numbers digit by digit using counting sort as a subroutine.','tech/dsa/sorting-algorithms/radix-sort']
            ]} />   
      <AlgoOverviewList header="Dynamic Programming (DP)"
        desc="DP solves problems by breaking them into overlapping subproblems."
        data={[
          ['Fibonacci Series (Top-down & Bottom-up)', 'Computes Fibonacci numbers efficiently.','tech/dsa/dynamic-programming/fibonacci-series'],
          ['0/1 Knapsack Problem','Selects items with maximum value without exceeding capacity.','tech/dsa/dynamic-programming/knapsack-problem'],
          ['Longest Common Subsequence (LCS)', 'Finds the longest subsequence present in two sequences.','tech/dsa/dynamic-programming/longest-common-subsequences'],
          ['Longest Increasing Subsequence (LIS)','Finds the longest increasing subsequence.','tech/dsa/dynamic-programming/longest-increasing-subsequences'],
          ['Matrix Chain Multiplication', 'Finds optimal order to multiply matrices.','tech/dsa/dynamic-programming/matrix-chain-multiplication'],
          ['Coin Change Problem','Finds the minimum number of coins needed to make change.','tech/dsa/dynamic-programming/coin-change-problem'],
          ['Rod Cutting Problem', 'Finds the maximum value from cutting a rod.','tech/dsa/dynamic-programming/rod-cutting-problem'],
          ['Edit Distance','Measures similarity between two strings.','tech/dsa/dynamic-programming/edit-distance'],
        ]} />

      <AlgoOverviewList header="Stack & Queue"
        data={[
          ['Stack', 'A LIFO (Last In, First Out) data structure (Example: Undo operation).','tech/dsa/stacks-and-queues/stack'],
          ['Queue', 'A FIFO (First In, First Out) data structure (Example: Print queue).','tech/dsa/stacks-and-queues/queue'],
          ['Deque (Double-Ended Queue)', 'Supports insertion and deletion at both ends.','tech/dsa/stacks-and-queues/deque'],
          ['Priority Queue', 'A queue where elements are removed based on priority (implemented using Heap)','tech/dsa/stacks-and-queues/priority-queue']
        ]} />

      <AlgoOverviewList header="Hashing"
        data={[
          ['Hash Table', 'A data structure that stores key-value pairs using a hash function for efficient lookup, insertion, and deletion.','tech/dsa/hashing/hash-table'],
          ['Hash Function', 'A mathematical function that converts input data (keys) into a fixed-size numerical value (hash code) for indexing in a hash table.','tech/dsa/hashing/hash-function'],
          ['Hash Collision', 'Occurs when two different keys produce the same hash value. Collision resolution techniques like chaining and open addressing handle this issue.','tech/dsa/hashing/hash-collision'],
          ['HashMaps', 'A key-value pair-based data structure that allows fast lookups and updates.','tech/dsa/hashing/hash-maps'],
          ['HashSet', 'A collection that stores unique elements using hashing for quick access.','tech/dsa/hashing/hash-set'],
          ['Perfect Hashing Algorithms', 'A technique that creates a collision-free hash function, ensuring O(1) lookup time by using two-level or minimal perfect hashing methods.','tech/dsa/hashing/perfect-hashing-algorithms'],
          ['Robin Hood Hashing Algorithms', 'A collision resolution strategy where elements with longer probe sequences "steal" slots from elements with shorter sequences to balance distribution.','tech/dsa/hashing/robinhood-hashing-algorithms'],
          ['Hopscotch Hashing Algorithms', 'A method improving open addressing by allowing displaced elements to "hop" to nearby empty slots, reducing clustering.','tech/dsa/hashing/hopscotch-hashing-algorithms'],
          ['Cuckoo Hashing Algorithms', 'Uses two or more hash functions and moves elements to alternative positions (like a cuckoo bird replacing eggs) to resolve collisions.','tech/dsa/hashing/cuckoo-hashing-algorithms'],
          ['Two-level Hashing (Dynamic Perfect Hashing) Algorithms', 'A technique using multiple hash tables where the first level maps keys to buckets, and the second level ensures no collisions inside each bucket.','tech/dsa/hashing/two-level-hashing'],
          ['String Hashing', 'Polynomial Hashing, Rolling Hashing, Karp-Rabin Algorithms','tech/dsa/hashing/string-hashing']
        ]} />


      <AlgoOverviewList header="Backtracking"
        desc="Backtracking is used to generate all possible solutions and discard invalid ones."
        data={[
          ['N-Queens Problem', 'Places N queens on an NxN chessboard.','tech/dsa/backtracking/n-queens-problem'],
          ['Sudoku Solver','Solves Sudoku puzzles by trying all possibilities.','tech/dsa/backtracking/suduko-solver'],
          ['Rat in a Maze', 'Finds a path in a maze.','tech/dsa/backtracking/rats-in-a-maze'],
          ['Word Search','Searches for a word in a 2D grid.','tech/dsa/backtracking/word-search'],
          ['Hamiltonian Cycle', 'Finds a cycle visiting all vertices exactly once.','tech/dsa/backtracking/hamiltonian-cycle']
        ]} />
      <AlgoOverviewList header="Probabilistics Data Structures Algorithms"
        desc="Probabilistic data structures are data structures that use probabilistic techniques to provide approximate solutions with reduced memory and computational requirements."
        data={[
          ['Bloom Filter', 'Membership testing (Is an element in a set?)','tech/dsa/probabilistics-data-structures-algorithms/bloom-filter'],
          ['Bloomier Filter','Stores key-value mappings instead of just membership.','tech/dsa/probabilistics-data-structures-algorithms/bloomier-filter'],
          ['Counting Bloom Filter', 'Membership testing with deletions.','tech/dsa/probabilistics-data-structures-algorithms/counting-bloom-filter'],
          ['Stable Bloom Filter','A variation of Bloom Filters that works well with continuously changing data (e.g., streaming applications).','tech/dsa/probabilistics-data-structures-algorithms/stable-bloom-filter'],
          ['Skip Bloom Filter', 'Combines Bloom Filter with a hierarchical structure to improve query efficiency.','tech/dsa/probabilistics-data-structures-algorithms/skip-bloom-filter'],
          ['BloomClock','Hybrid of Vector Clocks and Bloom Filters for tracking causality in distributed systems.','tech/dsa/probabilistics-data-structures-algorithms/bloom-clock'],
          ['Xor Filter','An alternative to Bloom Filters with better space efficiency.','tech/dsa/probabilistics-data-structures-algorithms/xor-filter'],
          ['Quotient Filter', 'Alternative to Bloom Filters with lower memory overhead and deletions.','tech/dsa/probabilistics-data-structures-algorithms/quotient-filter'],
          ['Cuckoo Filter', 'Membership testing with better space efficiency and deletions.','tech/dsa/probabilistics-data-structures-algorithms/cuckoo-filter'],
          ['HyperLogLog', 'Approximate cardinality estimation (Counting unique elements).','tech/dsa/probabilistics-data-structures-algorithms/hyper-log-log'],
          ['BJKST Algorithm','Approximate distinct element counting in a stream.','tech/dsa/probabilistics-data-structures-algorithms/bjkst-algorithm'],
          ['Count-Min Sketch', 'Approximate frequency counting of elements in a stream.','tech/dsa/probabilistics-data-structures-algorithms/count-min-sketch'],
          ['Skip List', 'Efficient ordered set with probabilistic balancing.','tech/dsa/probabilistics-data-structures-algorithms/skip-list'],
          ['Graph Sketching (MinHash)', 'Estimate Jaccard similarity between sets.','tech/dsa/probabilistics-data-structures-algorithms/graph-sketching'],
          ['GraphSketch (Spanning Tree Sketching)', 'Approximate similarity between large graphs.','tech/dsa/probabilistics-data-structures-algorithms/graph-sketch'],
          ['Space-Saving Algorithm', 'Finds the most frequently occurring elements in a data stream (Top-K elements).','tech/dsa/probabilistics-data-structures-algorithms/space-saving-algorithm'],
          ['T-Digest', 'Approximate quantile estimation (percentiles, median).','tech/dsa/probabilistics-data-structures-algorithms/t-digest'],
          ['Count Sketch','Estimates frequency of elements, like Count-Min Sketch, but reduces bias.','tech/dsa/probabilistics-data-structures-algorithms/count-sketch'],
          ['Wavelet Tree','Compressed representation of sequences for rank/select queries.','tech/dsa/probabilistics-data-structures-algorithms/wavelet-tree'],
          ['Exponential Histogram','Estimates count of elements within a sliding window.','tech/dsa/probabilistics-data-structures-algorithms/exponential-histogram'],
          ['SuRF (Succinct Range Filter)','Probabilistic range query filtering.','tech/dsa/probabilistics-data-structures-algorithms/succinct-range-filter']
        ]} />
    </Col>
    <Col xl={6} xxl={6}>
      <AlgoOverviewList header="Searching Algorithms"
        desc="Searching algorithms find an element in a given data structure."
        data={[
              ['Linear Search', 'Iterates through the array to find the element.','tech/dsa/searching-algorithms/linear-search'],
              ['Binary Search', 'Searches in a sorted array by dividing it into halves.','tech/dsa/searching-algorithms/binary-search'],
              ['Ternary Search', 'Searches in a sorted array by dividing it into three parts.','tech/dsa/searching-algorithm/ternary-search'],
              ['Jump Search', 'Jumps ahead by fixed steps and then performs linear search.','tech/dsa/searching-algorithms/jump-search'],
              ['Interpolation Search','Similar to binary search but estimates position dynamically.','tech/dsa/searching-algorithms/interpolation-search'],
              ['Exponential Search', 'Used for unbounded or infinite arrays.','tech/dsa/searching-algorithms/exponential-search'],
              ['Hashing-Based Search', 'Efficient for unordered data, uses a hash function to map keys to array indices.','tech/dsa/searching-algorithms/hashing-based-search'],
              ['Trie (Prefix Tree)', 'Used for searching words in dictionaries, autocomplete, and search engines.','tech/dsa/searching-algorithms/trie-prefix-tree'],
              ['B-Trees', 'Balanced tree structure used in databases for indexing large datasets (Efficient for disk-based storage).','tech/dsa/searching-algorithms/b-trees'], 
        ]} />

      <AlgoOverviewList header="Array & Linked List"
        data={[
          ['Arrays', 'A contiguous memory data structure that stores elements of the same type.','tech/dsa/arrays-linked-list/Arrays'],
          ['Dynamic Array', 'An array that resizes itself dynamically.','tech/dsa/arrays-linked-list/dynamic-array'],
          ['Linked List', 'A linear data structure where elements (nodes) point to the next node.','tech/dsa/arrays-linked-list/linked-list'],
          ['Singly Linked List (SLL)', 'Each node has data and a pointer to the next node.','tech/dsa/arrays-linked-list/singly-linked-list'],
          ['Doubly Linked List (DLL)', 'Each node has data, a next pointer, and a previous pointer.','tech/dsa/arrays-linked-list/doubly-link-list'],
          ['Circular Linked List (CLL)', 'Last node points back to the first node','tech/dsa/arrays-linked-list/circular-linked-list']
        ]} />

      <AlgoOverviewList header="Graph Algorithms"
        desc="Graph algorithms work on graph-based structures such as trees, social networks, and maps."
        data={[
          ['Breadth-First Search (BFS)', 'Explores the nearest neighbors first.','tech/dsa/graph-algorithms/breadth-first-search-bfs'],
          ['Depth-First Search (DFS)','Explores as deep as possible before backtracking.','tech/dsa/graph-algorithms/depth-first-search-dfs'],
          ['Dijkstra’s Algorithm', 'Finds the shortest path in a weighted graph.','tech/dsa/graph-algorithms/dijkstras-algorithm'],
          ['PageRank Algorithm', 'Detects phishing and malicious websites.','tech/dsa/graph-algorithms/page-rank-algorithm'],
          ['Floyd-Warshall Algorithm','Finds shortest paths between all pairs of nodes.','tech/dsa/graph-algorithms/floydWarshall-algorithm'],
          ['Bellman-Ford Algorithm', 'Finds the shortest path in graphs with negative weights.','tech/dsa/graph-algorithms/bellman-ford-algorithm'],
          ['Prim’s Algorithm','Finds a Minimum Spanning Tree (MST) using edge selection.','tech/dsa/graph-algorithms/prims-algorithm'],
          ['Kruskal’s Algorithm', 'Finds MST using sorted edges.','tech/dsa/graph-algorithms/kruskals-algorithm'],
          ['Topological Sorting','Orders nodes in a Directed Acyclic Graph (DAG).','tech/dsa/graph-algorithms/topological-sorting'],
          ['A Algorithm*', 'Finds the shortest path using heuristics.','tech/dsa/graph-algorithms/a-algorithm'],
          ['Disjoint Set (Union-Find)', ' Used for cycle detection in graphs.','tech/dsa/graph-algorithms/disjoint-set']
        ]} />
      <AlgoOverviewList header="Greedy Algorithms"
        desc="Greedy algorithms make locally optimal choices at each step."
        data={[
          ['Activity Selection Problem', 'Selects maximum number of non-overlapping activities.','tech/dsa/greedy-algorithms/activity-selection-problem'],
          ['Huffman Encoding','Generates an optimal prefix code.','tech/dsa/greedy-algorithms/huffman-encoding'],
          ['Fractional Knapsack Problem', 'Selects items with maximum value-to-weight ratio.','tech/dsa/greedy-algorithms/fractional-knapsack-problem'],
          ['Job Sequencing Problem','Schedules jobs to maximize profit.','tech/dsa/greedy-algorithms/job-sequencing-problem'],
          ['Prim’s and Kruskal’s Algorithm', 'Used for Minimum Spanning Tree (MST).','tech/dsa/greedy-algorithms/prims-and-kruskals-algorithm'],
          ['Egyptian Fraction Representation',' Represent a fraction as a sum of distinct unit fractions (fractions with numerator = 1).','tech/dsa/greedy-algorithms/egyptian-fraction-representation'],
          ['Interval Scheduling Maximization','Given intervals (start, end), find the maximum number of non-overlapping intervals.','tech/dsa/greedy-algorithms/interval-scheduling-maximization']
        ]} />

      <AlgoOverviewList header="Tree and Binary Search Tree (BST) Algorithms"
        desc="Tree algorithms work with hierarchical structures."
        data={[
          ['Inorder, Preorder, Postorder Traversal', 'Ways to traverse a tree.','tech/dsa/tree-bst-algorithms/inorder-preorder-postorder-traversal'],
          ['Level Order Traversal (BFS on Trees)','Traverses a tree level by level.','tech/dsa/tree-bst-algorithms/level-order-traversal'],
          ['Lowest Common Ancestor (LCA)', 'Finds the common ancestor of two nodes.','tech/dsa/tree-bst-algorithms/lowest-common-ancestor'],
          ['Diameter of a Tree','Finds the longest path between any two nodes.','tech/dsa/tree-bst-algorithms/diameter-of-a-tree'],
          ['Balanced Binary Tree Check', 'Determines if a tree is balanced.','tech/dsa/tree-bst-algorithms/balanced-binary-tree-check'],
          ['Binary Search Tree (BST) Operations','Insertion, Deletion, and Search.','tech/dsa/tree-bst-algorithms/binary-search-tree-bst-operations'],
          ['Trie Data Structure', 'Used for prefix-based searching.','tech/dsa/tree-bst-algorithms/trie-data-structure'],
          ['Segment Tree & Fenwick Tree', 'Data structures for range queries.','tech/dsa/tree-bst-algorithms/segment-and-fenwick-tree']
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