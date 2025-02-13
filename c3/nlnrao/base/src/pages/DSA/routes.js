
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
    "system-design-algorithms":[{ label:"DSA", url:process.env.PROJECT_URL+"tech/dsa/overview" },
        { label:"System Design Algorithms", url:"#" }]
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
};

export default Routes;