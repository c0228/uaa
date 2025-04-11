import DSA from "@MainPages/DSA/index.js";
// Sorting Algorithms
import BubbleSort from "@MainPages/DSA/algorithms/sort-algorithms/BubbleSort/index.js";
import SelectionSort from "@MainPages/DSA/algorithms/sort-algorithms/SelectionSort/index.js";
import InsertionSort from "@MainPages/DSA/algorithms/sort-algorithms/InsertionSort/index.js";
import MergeSort from "@MainPages/DSA/algorithms/sort-algorithms/MergeSort/index.js";
import QuickSort from "@MainPages/DSA/algorithms/sort-algorithms/QuickSort/index.js";
import HeapSort from "@MainPages/DSA/algorithms/sort-algorithms/HeapSort/index.js";
import CountingSort from "@MainPages/DSA/algorithms/sort-algorithms/CountingSort/index.js";
import RadixSort from "@MainPages/DSA/algorithms/sort-algorithms/RadixSort/index.js";

// Searching Algorithms
import LinearSearch from "./algorithms/search-algorithms/LinearSearch/index.js";
import BinarySearch from "./algorithms/search-algorithms/BinarySearch/index.js";
import TernarySearch from "./algorithms/search-algorithms/TernarySearch/index.js";
import JumpSearch from "./algorithms/search-algorithms/JumpSearch/index.js";
import InterpolationSearch from "./algorithms/search-algorithms/InterpolationSearch/index.js";
import ExponentialSearch from "./algorithms/search-algorithms/ExponentialSearch/index.js";
import HashingBasedSearch from "./algorithms/search-algorithms/HashingBasedSearch/index.js";
import TriePrefixTree from "./algorithms/search-algorithms/TriePrefixTree/index.js";
import BTrees from "./algorithms/search-algorithms/BTrees/index.js";

// Dynamic Programming
import FibonacciSeries from "./algorithms/dynamic-programming/FibonacciSeries/index.js";
import KnapsackProblem from "./algorithms/dynamic-programming/KnapsackProblem/index.js";
import LongestCommonSubsequences from "./algorithms/dynamic-programming/LongestCommonSubsequences/index.js";
import LongestIncreasingSubsequences from "./algorithms/dynamic-programming/LongestIncreasingSubsequences/index.js";
import MatrixChainMultiplication from "./algorithms/dynamic-programming/MatrixChainMultiplication/index.js";
import CoinChangeProblem from "./algorithms/dynamic-programming/CoinChangeProblem/index.js";
import RodCuttingProblem from "./algorithms/dynamic-programming/RodCuttingProblem/index.js";
import EditDistance from "./algorithms/dynamic-programming/EditDistance/index.js";

// Array & Linked List
import Arrays from "./algorithms/array-linked-list/Arrays/index.js";
import DynamicArray from "./algorithms/array-linked-list/DynamicArray/index.js";
import LinkedList from "./algorithms/array-linked-list/LinkedList/index.js";
import SinglyLinkedList from "./algorithms/array-linked-list/SinglyLinkedList/index.js";
import DoublyLinkedList from "./algorithms/array-linked-list/DoublyLinkedList/index.js";
import CircularLinkedList from "./algorithms/array-linked-list/CircularLinkedList/index.js";

// Stacks and Queues
import Stack from "./algorithms/stacks-and-queues/Stack/index.js";
import Queue from "./algorithms/stacks-and-queues/Queue/index.js";
import Deque from "./algorithms/stacks-and-queues/Deque/index.js";
import PriorityQueue from "./algorithms/stacks-and-queues/PriorityQueue/index.js";

// Graph Algorithms
import BreadthFirstSearch from "./algorithms/graph-algorithms/BreadthFirstSearch/index.js";
import DepthFirstSearch from "./algorithms/graph-algorithms/DepthFirstSearch/index.js";
import DijkstrasAlgorithm from "./algorithms/graph-algorithms/DijkstrasAlgorithm/index.js";
import PageRankAlgorithm from "./algorithms/graph-algorithms/PageRankAlgorithm/index.js";
import FloydWarshallAlgorithm from "./algorithms/graph-algorithms/FloydWarshallAlgorithm/index.js";
import BellmanFordAlgorithm from "./algorithms/graph-algorithms/BellmanFordAlgorithm/index.js";
import PrimsAlgorithm from "./algorithms/graph-algorithms/PrimsAlgorithm/index.js";
import KruskalsAlgorithm from "./algorithms/graph-algorithms/KruskalsAlgorithm/index.js";
import TopologicalSorting from "./algorithms/graph-algorithms/TopologicalSorting/index.js";
import AAlgorithm from "./algorithms/graph-algorithms/AAlgorithm/index.js";
import DisjointSet from "./algorithms/graph-algorithms/DisjointSet/index.js";

// Hashing
import HashTable from "./algorithms/hashing/HashTable/index.js";
import HashFunction from "./algorithms/hashing/HashFunction/index.js";
import HashCollision from "./algorithms/hashing/HashCollision/index.js";
import HashMaps from "./algorithms/hashing/HashMaps/index.js";
import HashSet from "./algorithms/hashing/HashSet/index.js";
import PerfectHashingAlgorithms from "./algorithms/hashing/PerfectHashingAlgorithms/index.js";
import RobinhoodHashingAlgorithms from "./algorithms/hashing/RobinhoodHashingAlgorithms/index.js";
import HopscotchHashingAlgorithms from "./algorithms/hashing/HopscotchHashingAlgorithms/index.js";
import CuckooHashingAlgorithms from "./algorithms/hashing/CuckooHashingAlgorithms/index.js";
import TwoLevelHashing from "./algorithms/hashing/TwoLevelHashing/index.js";
import StringHashing from "./algorithms/hashing/StringHashing/index.js";

import CacheObliviousAlgorithms from "@MainPages/DSA/content/01-cache-oblivious-algorithms/index.js";
import TestAndVerifyAlgorithms from "@MainPages/DSA/content/02-test-and-verify-algorithms/index.js";
import SelfTuningAlgorithms from "@MainPages/DSA/content/03-self-tuning-algorithms/index.js";
import AdvancedGeometricAlgorithms from "@MainPages/DSA/content/04-advanced-geometric-algorithms/index.js";
import HandlingDataSetsLargerThanMemory from "@MainPages/DSA/content/05-handling-datasets-larger-than-memory/index.js";
import ByzantineFaultTolerance from "@MainPages/DSA/content/06-byzantine-fault-tolerance/index.js";

export const DSAComponentMap = {
 "DSA": DSA,
 // Sorting Algorithms
 "BubbleSort": BubbleSort,
 "SelectionSort": SelectionSort,
 "InsertionSort": InsertionSort,
 "MergeSort": MergeSort,
 "QuickSort": QuickSort,
 "HeapSort": HeapSort,
 "CountingSort": CountingSort,
 "RadixSort": RadixSort,
 // Searching Algorithms
 "LinearSearch": LinearSearch,
 "BinarySearch": BinarySearch,
 "TernarySearch": TernarySearch,
 "JumpSearch": JumpSearch,
 "InterpolationSearch": InterpolationSearch,
 "ExponentialSearch": ExponentialSearch,
 "HashingBasedSearch": HashingBasedSearch,
 "TriePrefixTree": TriePrefixTree,
 "BTrees": BTrees,
 // Dynamic Programming
 "FibonacciSeries": FibonacciSeries,
 "KnapsackProblem": KnapsackProblem,
 "LongestCommonSubsequences": LongestCommonSubsequences,
 "LongestIncreasingSubsequences": LongestIncreasingSubsequences,
 "MatrixChainMultiplication": MatrixChainMultiplication,
 "CoinChangeProblem": CoinChangeProblem,
 "RodCuttingProblem": RodCuttingProblem,
 "EditDistance": EditDistance,
 // Array & Linked List
 "Arrays": Arrays,
 "DynamicArray": DynamicArray,
 "LinkedList": LinkedList,
 "SinglyLinkedList": SinglyLinkedList,
 "DoublyLinkedList": DoublyLinkedList,
 "CircularLinkedList": CircularLinkedList,
 // Stacks & Queues
 "Stack": Stack,
 "Queue": Queue,
 "Deque": Deque,
 "PriorityQueue": PriorityQueue,
 // Graph Algorithms
 "BreadthFirstSearch": BreadthFirstSearch,
 "DepthFirstSearch": DepthFirstSearch,
 "DijkstrasAlgorithm": DijkstrasAlgorithm,
 "PageRankAlgorithm": PageRankAlgorithm,
 "FloydWarshallAlgorithm": FloydWarshallAlgorithm,
 "BellmanFordAlgorithm": BellmanFordAlgorithm,
 "PrimsAlgorithm": PrimsAlgorithm,
 "KruskalsAlgorithm": KruskalsAlgorithm,
 "TopologicalSorting": TopologicalSorting,
 "AAlgorithm": AAlgorithm,
 "DisjointSet": DisjointSet,
 // Hashing
 "HashTable": HashTable,
 "HashFunction": HashFunction,
 "HashCollision": HashCollision,
 "HashMaps": HashMaps,
 "HashSet": HashSet,
 "PerfectHashingAlgorithms": PerfectHashingAlgorithms,
 "RobinhoodHashingAlgorithms": RobinhoodHashingAlgorithms,
 "HopscotchHashingAlgorithms": HopscotchHashingAlgorithms,
 "CuckooHashingAlgorithms": CuckooHashingAlgorithms,
 "TwoLevelHashing": TwoLevelHashing,
 "StringHashing": StringHashing,

 "CacheObliviousAlgorithms": CacheObliviousAlgorithms,
 "TestAndVerifyAlgorithms": TestAndVerifyAlgorithms,
 "SelfTuningAlgorithms": SelfTuningAlgorithms,
 "AdvancedGeometricAlgorithms": AdvancedGeometricAlgorithms,
 "HandlingDataSetsLargerThanMemory": HandlingDataSetsLargerThanMemory,
 "ByzantineFaultTolerance": ByzantineFaultTolerance
}