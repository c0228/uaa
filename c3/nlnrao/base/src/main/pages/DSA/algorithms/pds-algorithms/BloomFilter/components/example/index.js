import React from "react";
import { Tab, Highlight } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const BLOOM_EXAMPLE_JAVA = `import java.util.BitSet;
import java.util.zip.CRC32;

public class BloomFilter {
    private BitSet bitset;
    private int size;
    private int hashCount;

    public BloomFilter(int size, int hashCount) {
        this.size = size;
        this.hashCount = hashCount;
        this.bitset = new BitSet(size);
    }

    public void add(String item) {
        for (int i = 0; i < hashCount; i++) {
            int hash = hash(item + i) % size;
            bitset.set(hash);
        }
    }

    public boolean check(String item) {
        for (int i = 0; i < hashCount; i++) {
            int hash = hash(item + i) % size;
            if (!bitset.get(hash)) return false;
        }
        return true;
    }

    private int hash(String input) {
        CRC32 crc = new CRC32();
        crc.update(input.getBytes());
        return Math.abs((int) crc.getValue());
    }

    public static void main(String[] args) {
        BloomFilter bf = new BloomFilter(1000, 5);
        bf.add("apple");
        System.out.println(bf.check("apple"));   // true
        System.out.println(bf.check("banana"));  // maybe false
    }
}`;

const BLOOM_EXAMPLE_JS = `class BloomFilter {
    constructor(size, hashCount) {
        this.size = size;
        this.hashCount = hashCount;
        this.bitArray = new Array(size).fill(0);
    }

    hash(str, seed) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = (hash * seed + str.charCodeAt(i)) % this.size;
        }
        return hash;
    }

    add(item) {
        for (let i = 0; i < this.hashCount; i++) {
            const index = this.hash(item, i + 1);
            this.bitArray[index] = 1;
        }
    }

    check(item) {
        for (let i = 0; i < this.hashCount; i++) {
            const index = this.hash(item, i + 1);
            if (this.bitArray[index] === 0) return false;
        }
        return true;
    }
}

// Usage
const bf = new BloomFilter(1000, 5);
bf.add("apple");
console.log(bf.check("apple"));   // true
console.log(bf.check("banana"));  // probably false`;

const BLOOM_EXAMPLE_PYTHON = `import mmh3
from bitarray import bitarray

class BloomFilter:
    def __init__(self, size, hash_count):
        self.size = size
        self.hash_count = hash_count
        self.bit_array = bitarray(size)
        self.bit_array.setall(0)

    def add(self, item):
        for i in range(self.hash_count):
            index = mmh3.hash(item, i) % self.size
            self.bit_array[index] = 1

    def check(self, item):
        return all(self.bit_array[mmh3.hash(item, i) % self.size] for i in range(self.hash_count))

# Example usage
bf = BloomFilter(1000, 5)
bf.add("apple")
print(bf.check("apple"))  # True
print(bf.check("banana")) # Probably False`;



const Example = () =>{

   const JavaCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={BLOOM_EXAMPLE_JAVA} lang="java" />
      </div>);
   };

   const JSCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={BLOOM_EXAMPLE_JS} lang="javascript" />
      </div>);
   };

   const PythonCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={BLOOM_EXAMPLE_PYTHON} lang="python" />
      </div>);
   };

 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Example Implementations</b></h2></div>
    <div className="mtop15p">
      <Tab menulinks={[{ id:"java", label:"Java", url:"#", component:(<JavaCode />) },
            { id:"javascript", label:"Javascript", url:"#", component:(<JSCode />) },
            { id:"python", label:"Python", url:"#", component:(<PythonCode />) }]} />
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Real-World Applications</b></h2></div>
    <div>
      <ul>
         <li className="mtop5p"><b>Databases</b> (e.g., Apache Cassandra, BigTable)<b>:</b> To avoid disk lookups for non-existent keys.</li>
         <li className="mtop5p"><b>Web Browsers:</b> To block malicious URLs.</li>
         <li className="mtop5p"><b>Blockchain:</b> To optimize light clients.</li>
         <li className="mtop5p"><b>Spell Checkers:</b> Fast word validation.</li>
         <li className="mtop5p"><b>Distributed Systems:</b> Reducing communication overhead.</li>
      </ul>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Limitations of Bloom Filters</b></h2></div>
    <div className="mtop15p">
         <SimpleTable header={["Aspect","Limitations"]} 
        columns={[
            [(<b>False Positives</b>),"Cannot be avoided completely."],
            [<b>No Deletion</b>,"Basic Bloom Filters don’t support deletion (use Counting Bloom Filters instead)."],
            [(<b>Accuracy Trade-off</b>),"Choosing size/hash count requires a balance between memory use and false positive rate."]
          ]} />
    </div>
 </div>);
};

export default Example;