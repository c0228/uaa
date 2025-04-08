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

import CacheObliviousAlgorithms from "@MainPages/DSA/content/01-cache-oblivious-algorithms/index.js";
import TestAndVerifyAlgorithms from "@MainPages/DSA/content/02-test-and-verify-algorithms/index.js";
import SelfTuningAlgorithms from "@MainPages/DSA/content/03-self-tuning-algorithms/index.js";
import AdvancedGeometricAlgorithms from "@MainPages/DSA/content/04-advanced-geometric-algorithms/index.js";
import HandlingDataSetsLargerThanMemory from "@MainPages/DSA/content/05-handling-datasets-larger-than-memory/index.js";
import ByzantineFaultTolerance from "@MainPages/DSA/content/06-byzantine-fault-tolerance/index.js";

export const DSAComponentMap = {
 "DSA": DSA,

 "BubbleSort": BubbleSort,
 "SelectionSort": SelectionSort,
 "InsertionSort": InsertionSort,
 "MergeSort": MergeSort,
 "QuickSort": QuickSort,
 "HeapSort": HeapSort,
 "CountingSort": CountingSort,
 "RadixSort": RadixSort,
 
 "LinearSearch": LinearSearch,
 "BinarySearch": BinarySearch,
 "TernarySearch": TernarySearch,
 "JumpSearch": JumpSearch,
 "InterpolationSearch": InterpolationSearch,
 "ExponentialSearch": ExponentialSearch,
 "HashingBasedSearch": HashingBasedSearch,
 "TriePrefixTree": TriePrefixTree,
 "BTrees": BTrees,
 
 "CacheObliviousAlgorithms": CacheObliviousAlgorithms,
 "TestAndVerifyAlgorithms": TestAndVerifyAlgorithms,
 "SelfTuningAlgorithms": SelfTuningAlgorithms,
 "AdvancedGeometricAlgorithms": AdvancedGeometricAlgorithms,
 "HandlingDataSetsLargerThanMemory": HandlingDataSetsLargerThanMemory,
 "ByzantineFaultTolerance": ByzantineFaultTolerance
}