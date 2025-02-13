
import DSA from "./index.js";
import LRUCache from "./cache-eviction/01-least-recently-used/index.js";
import LFUCache from "./cache-eviction/02-least-frequently-used/index.js";
import FIFOCache from "./cache-eviction/03-first-in-first-out/index.js";
import RRCache from "./cache-eviction/04-random-replacement/index.js";
import MRUCache from "./cache-eviction/05-most-recently-used/index.js";
import TTLCache from "./cache-eviction/06-time-to-live/index.js";
import TTCache from "./cache-eviction/07-two-tiered-caching/index.js";

const BreadcrumbRoutes = {
    "cache-eviction-strategies":[{ label:"DSA", url:process.env.PROJECT_URL+"tech/dsa/overview" },
            { label:"Cache Eviction Strategies", url:"#" }],
    "terminologies":[{ label:"DSA", url:process.env.PROJECT_URL+"tech/dsa/overview" },
        { label:"Terminologies", url:"#" }],
    "system-design-algorithms":[{ label:"DSA", url:process.env.PROJECT_URL+"tech/dsa/overview" },
        { label:"System Design Algorithms", url:"#" }],
    "load-balancing-algorithms":[{ label:"DSA", url:process.env.PROJECT_URL+"tech/dsa/overview" },
        { label:"Load Balancing Algorithms", url:"#" }],
    "distributed-systems-consensus-algorithms":[{ label:"DSA", url:process.env.PROJECT_URL+"tech/dsa/overview" },
        { label:"Distributed Systems & Consensus Algorithms", url:"#" }],
};

const Routes = {
    // Overview
    "tech/dsa/overview":{
        "date":"October 26, 2024",
        "component": DSA
    }, 
    // Cache Eviction Strategies
    "tech/dsa/cache-eviction-strategies/least-recently-used":{
        "label":"Least Recently Used (LRU)",
        "date":"October 26, 2024",
        "component": LRUCache,
        "route": BreadcrumbRoutes["cache-eviction-strategies"],
    },
    "tech/dsa/cache-eviction-strategies/least-frequently-used":{
        "label":"Least Frequently Used (LFU)",
        "date":"October 26, 2024",
        "component": LFUCache,
        "route": BreadcrumbRoutes["cache-eviction-strategies"],
    },
    "tech/dsa/cache-eviction-strategies/first-in-first-out":{
        "label":"First-In-First-Out (FIFO)",
        "date":"October 26, 2024",
        "component": FIFOCache,
        "route": BreadcrumbRoutes["cache-eviction-strategies"],
    },
    "tech/dsa/cache-eviction-strategies/random-replacement":{
        "label":"Random Replacement (RR)",
        "date":"October 26, 2024",
        "component": RRCache,
        "route": BreadcrumbRoutes["cache-eviction-strategies"],
    },
    "tech/dsa/cache-eviction-strategies/most-recently-used":{
        "label":"Most Recently Used (MRU)",
        "date":"October 26, 2024",
        "component": MRUCache,
        "route": BreadcrumbRoutes["cache-eviction-strategies"],
    },
    "tech/dsa/cache-eviction-strategies/time-to-live":{
        "label":"Time to Live (TTL)",
        "date":"October 26, 2024",
        "component": TTLCache,
        "route": BreadcrumbRoutes["cache-eviction-strategies"],
    },
    "tech/dsa/cache-eviction-strategies/two-tiered-caching":{
        "label":"Two-Tiered Caching",
        "date":"October 26, 2024",
        "component": TTCache,
        "route": BreadcrumbRoutes["cache-eviction-strategies"],
    },
    // System Design Algorithms
    "tech/dsa/system-design-algorithms/bloom-filter":{
        "label":"Bloom Filter",
        "date":"October 26, 2024",
        "route": BreadcrumbRoutes["system-design-algorithms"],
    },
    "tech/dsa/system-design-algorithms/geohash":{
        "label":"Geohash",
        "date":"October 26, 2024",
        "route": BreadcrumbRoutes["system-design-algorithms"],
    },
    "tech/dsa/system-design-algorithms/hyperloglog":{
        "label":"HyperLogLog",
        "date":"October 26, 2024",
        "route": BreadcrumbRoutes["system-design-algorithms"],
    },
    "tech/dsa/system-design-algorithms/consistent-hashing":{
        "label":"Consistent Hashing",
        "date":"October 26, 2024",
        "route": BreadcrumbRoutes["system-design-algorithms"],
    },
    "tech/dsa/system-design-algorithms/merkle-tree":{
        "label":"Merkle Tree",
        "date":"October 26, 2024",
        "route": BreadcrumbRoutes["system-design-algorithms"],
    },
    "tech/dsa/system-design-algorithms/raft-algorithm":{
        "label":"Raft Algorithm",
        "date":"October 26, 2024",
        "route": BreadcrumbRoutes["system-design-algorithms"],
    },
    "tech/dsa/system-design-algorithms/lossy-count":{
        "label":"Lossy Count",
        "date":"October 26, 2024",
        "route": BreadcrumbRoutes["system-design-algorithms"],
    },
    "tech/dsa/system-design-algorithms/quadTree":{
        "label":"QuadTree",
        "date":"October 26, 2024",
        "route": BreadcrumbRoutes["system-design-algorithms"],
    },
    "tech/dsa/system-design-algorithms/operational-transformation":{
        "label":"Operational Transformation",
        "date":"October 26, 2024",
        "route": BreadcrumbRoutes["system-design-algorithms"],
    },
    "tech/dsa/system-design-algorithms/leaky-bucket":{
        "label":"Leaky Bucket",
        "date":"October 26, 2024",
        "route": BreadcrumbRoutes["system-design-algorithms"],
    },
    "tech/dsa/system-design-algorithms/rsync":{
        "label":"Rsync",
        "date":"October 26, 2024",
        "route": BreadcrumbRoutes["system-design-algorithms"],
    },
    "tech/dsa/system-design-algorithms/ray-casting":{
        "label":"Ray Casting",
        "date":"October 26, 2024",
        "route": BreadcrumbRoutes["system-design-algorithms"],
    },
    // Terminologies
    "tech/dsa/terminologies/time-and-space-complexity-analysis":{
        "label":"Time and Space Complexity Analysis",
        "date":"October 26, 2024",
        "route": BreadcrumbRoutes["terminologies"],
    },
    "tech/dsa/terminologies/big-o-mega-and-Theta-notations":{
        "label":"Big-O, Omega (Ω), and Theta (Θ) Notations",
        "date":"October 26, 2024",
        "route": BreadcrumbRoutes["terminologies"],
    },
    // Load Balancing Algorithms
    "tech/dsa/static-load-balancing-algorithms/round-robin-technique":{
        "label":"Round Robin Technique",
        "date":"October 26, 2024",
        "route": BreadcrumbRoutes["load-balancing-algorithms"],
    },
    "tech/dsa/static-load-balancing-algorithms/weighted-round-robin-technique":{
        "label":"Weighted Round Robin Technique",
        "date":"October 26, 2024",
        "route": BreadcrumbRoutes["load-balancing-algorithms"],
    },
    "tech/dsa/static-load-balancing-algorithms/ip-hashing-technique":{
        "label":"IP Hashing Technique",
        "date":"October 26, 2024",
        "route": BreadcrumbRoutes["load-balancing-algorithms"],
    },
    "tech/dsa/static-load-balancing-algorithms/least-connections-technique":{
        "label":"Least Connections Technique",
        "date":"October 26, 2024",
        "route": BreadcrumbRoutes["load-balancing-algorithms"],
    },
    "tech/dsa/static-load-balancing-algorithms/weighted-least-connections-technique":{
        "label":"Weighted Least Connections Technique",
        "date":"October 26, 2024",
        "route": BreadcrumbRoutes["load-balancing-algorithms"],
    },
    "tech/dsa/dynamic-load-balancing-algorithms/least-response-time-technique":{
        "label":"Least Response Time Technique",
        "date":"October 26, 2024",
        "route": BreadcrumbRoutes["load-balancing-algorithms"],
    },
    "tech/dsa/dynamic-load-balancing-algorithms/adaptive-load-balancing-technique":{
        "label":"Adaptive Load Balancing Technique",
        "date":"October 26, 2024",
        "route": BreadcrumbRoutes["load-balancing-algorithms"],
    },
    "tech/dsa/dynamic-load-balancing-algorithms/resource-based-boad-balancing-technique":{
        "label":"Resource-Based Load Balancing Technique",
        "date":"October 26, 2024",
        "route": BreadcrumbRoutes["load-balancing-algorithms"],
    },
    "tech/dsa/dynamic-load-balancing-algorithms/consistent-hashing-technique":{
        "label":"Consistent Hashing Technique",
        "date":"October 26, 2024",
        "route": BreadcrumbRoutes["load-balancing-algorithms"],
    },
    "tech/dsa/dynamic-load-balancing-algorithms/ai-ml-based-load-balancing-technique":{
        "label":"AI/ML-Based Load Balancing Technique",
        "date":"October 26, 2024",
        "route": BreadcrumbRoutes["load-balancing-algorithms"],
    },
    "tech/dsa/dynamic-load-balancing-algorithms/chandy-lamport-snapshot-algorithm":{
        "label":"Chandy-Lamport Snapshot Algorithm",
        "date":"October 26, 2024",
        "route": BreadcrumbRoutes["load-balancing-algorithms"],
    },
    "tech/dsa/dynamic-load-balancing-algorithms/tanenbaums-token-ring-algorithm":{
        "label":"Tanenbaum’s Token Ring Algorithm",
        "date":"October 26, 2024",
        "route": BreadcrumbRoutes["load-balancing-algorithms"],
    },
    //Distributed System & Consensus Algorithms
    "tech/dsa/distributed-systems-consensus-algorithms/paxos-algorithm":{
        "label":"Paxos Algorithm",
        "date":"October 26, 2024",
        "route": BreadcrumbRoutes["distributed-systems-consensus-algorithms"],
    },
    "tech/dsa/distributed-systems-consensus-algorithms/raft-algorithm":{
        "label":"Raft Algorithm",
        "date":"October 26, 2024",
        "route": BreadcrumbRoutes["distributed-systems-consensus-algorithms"],
    },
    "tech/dsa/distributed-systems-consensus-algorithms/byzantine-fault-tolerance":{
        "label":"Byzantine Fault Tolerance (PBFT)",
        "date":"October 26, 2024",
        "route": BreadcrumbRoutes["distributed-systems-consensus-algorithms"],
    },
    "tech/dsa/distributed-systems-consensus-algorithms/gossip-protocol":{
        "label":"Gossip Protocol",
        "date":"October 26, 2024",
        "route": BreadcrumbRoutes["distributed-systems-consensus-algorithms"],
    },
    "tech/dsa/distributed-systems-consensus-algorithms/vector-clocks-and-lamport-timestamps":{
        "label":"Vector Clocks & Lamport Timestamps",
        "date":"October 26, 2024",
        "route": BreadcrumbRoutes["distributed-systems-consensus-algorithms"],
    }
};

export default Routes;