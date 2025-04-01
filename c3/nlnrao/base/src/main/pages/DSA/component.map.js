import DSA from "@MainPages/DSA/index.js";

import BubbleSort from "@MainPages/DSA/algorithms/sort-algorithms/BubbleSort/index.js";
import SelectionSort from "@MainPages/DSA/algorithms/sort-algorithms/SelectionSort/index.js";
import InsertionSort from "@MainPages/DSA/algorithms/sort-algorithms/InsertionSort/index.js";

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

 "CacheObliviousAlgorithms": CacheObliviousAlgorithms,
 "TestAndVerifyAlgorithms": TestAndVerifyAlgorithms,
 "SelfTuningAlgorithms": SelfTuningAlgorithms,
 "AdvancedGeometricAlgorithms": AdvancedGeometricAlgorithms,
 "HandlingDataSetsLargerThanMemory": HandlingDataSetsLargerThanMemory,
 "ByzantineFaultTolerance": ByzantineFaultTolerance
}