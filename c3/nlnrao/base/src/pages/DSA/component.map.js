import DSA from "@Pages/DSA/index.js";

import BubbleSort from "@Pages/DSA/algorithms/sort-algorithms/BubbleSort/index.js";

import CacheObliviousAlgorithms from "@Pages/DSA/content/01-cache-oblivious-algorithms/index.js";
import TestAndVerifyAlgorithms from "@Pages/DSA/content/02-test-and-verify-algorithms/index.js";
import SelfTuningAlgorithms from "@Pages/DSA/content/03-self-tuning-algorithms/index.js";
import AdvancedGeometricAlgorithms from "@Pages/DSA/content/04-advanced-geometric-algorithms/index.js";
import HandlingDataSetsLargerThanMemory from "@Pages/DSA/content/05-handling-datasets-larger-than-memory/index.js";
import ByzantineFaultTolerance from "@Pages/DSA/content/06-byzantine-fault-tolerance/index.js";

export const DSAComponentMap = {
 "DSA": DSA,

 "BubbleSort": BubbleSort,

 "CacheObliviousAlgorithms": CacheObliviousAlgorithms,
 "TestAndVerifyAlgorithms": TestAndVerifyAlgorithms,
 "SelfTuningAlgorithms": SelfTuningAlgorithms,
 "AdvancedGeometricAlgorithms": AdvancedGeometricAlgorithms,
 "HandlingDataSetsLargerThanMemory": HandlingDataSetsLargerThanMemory,
 "ByzantineFaultTolerance": ByzantineFaultTolerance
}