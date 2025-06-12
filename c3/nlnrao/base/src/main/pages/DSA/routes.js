
import DSA from "./index.js";
import LRUCache from "./cache-eviction/01-least-recently-used/index.js";
import LFUCache from "./cache-eviction/02-least-frequently-used/index.js";
import FIFOCache from "./cache-eviction/03-first-in-first-out/index.js";
import RRCache from "./cache-eviction/04-random-replacement/index.js";
import MRUCache from "./cache-eviction/05-most-recently-used/index.js";
import TTLCache from "./cache-eviction/06-time-to-live/index.js";
import TTCache from "./cache-eviction/07-two-tiered-caching/index.js";


const Routes = {
 "LRUCache": LRUCache,
};

export default Routes;