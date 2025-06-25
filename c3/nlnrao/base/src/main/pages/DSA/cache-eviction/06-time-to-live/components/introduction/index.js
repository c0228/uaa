import React from "react";
import { Tab, Highlight } from "e-ui-react"; 

const TTL_CACHE_JAVA = `import java.util.HashMap;

public class TTLCache<K, V> {
    private final long ttlMillis;
    private final HashMap<K, CacheItem<V>> cache;

    public TTLCache(long ttlSeconds) {
        this.ttlMillis = ttlSeconds * 1000;
        this.cache = new HashMap<>();
    }

    public void put(K key, V value) {
        cache.put(key, new CacheItem<>(value, System.currentTimeMillis()));
    }

    public V get(K key) {
        CacheItem<V> item = cache.get(key);
        if (item != null) {
            long currentTime = System.currentTimeMillis();
            if (currentTime - item.timestamp < ttlMillis) {
                return item.value;
            } else {
                cache.remove(key); // Expired
            }
        }
        return null;
    }

    private static class CacheItem<V> {
        V value;
        long timestamp;

        CacheItem(V value, long timestamp) {
            this.value = value;
            this.timestamp = timestamp;
        }
    }

    // Example usage
    public static void main(String[] args) throws InterruptedException {
        TTLCache<String, String> cache = new TTLCache<>(3); // 3 seconds TTL
        cache.put("greet", "Hello!");
        System.out.println(cache.get("greet")); // Should print: Hello!
        Thread.sleep(4000);
        System.out.println(cache.get("greet")); // Should print: null (expired)
    }
}`;

const TTL_CACHE_JS= `class TTLCache {
    constructor(ttlSeconds) {
        this.ttl = ttlSeconds * 1000; // convert to milliseconds
        this.cache = new Map(); // key -> { value, timestamp }
    }

    put(key, value) {
        this.cache.set(key, {
            value: value,
            timestamp: Date.now()
        });
    }

    get(key) {
        if (this.cache.has(key)) {
            const { value, timestamp } = this.cache.get(key);
            if (Date.now() - timestamp < this.ttl) {
                return value;
            } else {
                this.cache.delete(key); // Expired
            }
        }
        return null;
    }
}

// Example usage
const cache = new TTLCache(3); // 3 seconds TTL
cache.put("hello", "world");
console.log(cache.get("hello")); // "world"
setTimeout(() => {
    console.log(cache.get("hello")); // null (expired)
}, 4000);`;

const TTL_CACHE_PYTHON = `# Simple TTL Cache in Python
import time

class TTLCache:
    def __init__(self, ttl_seconds):
        self.ttl = ttl_seconds
        self.cache = {}  # key: (value, timestamp)

    def put(self, key, value):
        self.cache[key] = (value, time.time())

    def get(self, key):
        if key in self.cache:
            value, timestamp = self.cache[key]
            if time.time() - timestamp < self.ttl:
                return value
            else:
                del self.cache[key]  # Expired
        return None`;

const Introduction = () =>{

    const JavaCode = ()=>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
    <Highlight content={TTL_CACHE_JAVA} lang="java" />
    </div>);
    };

    const JSCode = ()=>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
    <Highlight content={TTL_CACHE_JS} lang="javascript" />
    </div>);
    };

    const PythonCode = ()=>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
    <Highlight content={TTL_CACHE_PYTHON} lang="python" />
    </div>);
    };

 return (<div className="mtop15p lh28p fs16p">
    <div><i>
        <div>In today’s fast-paced digital landscape, milliseconds matter. Applications are expected to be lightning fast, always 
            available, and scalable. Behind this seamless experience lies a powerful technique — <b>caching</b>. Caching temporarily 
            stores frequently accessed data closer to the application, reducing retrieval time and easing the load on primary data 
            sources.</div>
        <div>But caching is not just about storing data. It's also about <b>deciding when to let go</b> of that data. This is 
        where <b>cache eviction strategies</b> come into play. Among these strategies, <b>Time to Live (TTL)</b> stands out as a 
        simple yet powerful approach to control data freshness and memory efficiency.</div>
        </i></div>
    <div className="mtop15p"><h2 className="blog-head"><b>Introduction: What is Time to Live (TTL) in Cache Eviction?</b></h2></div>
    <div className="mtop15p">
        <div><b>Time to Live (TTL)</b> is a cache eviction strategy where each cached item is assigned a lifespan or duration for 
        which it remains valid. Once the TTL for an item expires, it is considered stale and is either removed from the cache or 
        replaced upon the next request.</div>
        <div>Think of TTL like an expiry date on a food item in your fridge—once it passes that date, it's discarded, even if it's 
            not yet spoiled.</div>
    </div>

    <div className="mtop15p"><h4 className="blog-head"><b>Why Use Time to Live (TTL)?</b></h4></div>
    <div className="mtop15p">
        <ol>
            <li><b>Simplicity:</b> TTL is easy to implement and understand.</li>
            <li><b>Freshness:</b> Ensures that cached data does not become outdated.</li>
            <li><b>Predictability:</b> You can control how long data stays in the cache.</li>
            <li><b>Memory Management:</b> Frees up space by removing expired items automatically.</li>
        </ol>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>How Time to Live (TTL) Works?</b></h2></div>
    <div className="mtop15p">Each time a new item is cached, a TTL (say, 5 minutes) is associated with it. The cache system 
        maintains the timestamp of insertion and, during retrieval, checks if the TTL has expired.</div>
    <div className="mtop15p">
        <Tab menulinks={[{ id:"java", label:"Java", url:"#", component:(<JavaCode />) },
            { id:"javascript", label:"Javascript", url:"#", component:(<JSCode />) },
            { id:"python", label:"Python", url:"#", component:(<PythonCode />) }]} />
    </div>

    <div className="mtop15p"><h4 className="blog-head"><b>Time to Live (TTL) in Real-World Systems</b></h4></div>
    <div className="mtop15p">
        <ul>
            <li><b>CDNs (Content Delivery Networks)</b> use TTL to determine how long an asset (like an image or script) is 
            cached before fetching a fresh version.</li>
            <li><b>DNS Caching</b> uses TTL to determine how long a domain's IP mapping remains cached.</li>
            <li><b>Distributed Caches</b> like Redis and Memcached support TTL natively with commands 
            like <code><b>EXPIRE</b></code>, <code><b>SETEX</b></code>, or <code><b>TTL</b></code>.</li>
        </ul>
    </div>

    <div className="mtop15p"><h4 className="blog-head"><b>Challenges with Time to Live (TTL)</b></h4></div>
    <div className="mtop15p">
        <ul>
            <li><b>Static TTL can be too rigid:</b> A value that's too short increases cache misses; too long may lead to 
            stale data.</li>
            <li><b>Clock drift:</b> In distributed systems, inconsistent timekeeping across nodes can cause inconsistencies.</li>
            <li><b>Eviction doesn’t happen immediately:</b> In some systems, expired entries are lazily removed only when accessed.</li>
        </ul>
    </div>
    <div>To mitigate these, systems may implement additional strategies 
        like <b>lazy eviction</b>, <b>background cleanup threads</b> or <b>adaptive TTL</b> based on usage patterns.</div>

 </div>);
};

export default Introduction;