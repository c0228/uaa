import React from "react";
import { Tab, Highlight } from "e-ui-react";

const RSYNC_EXAMPLE_JAVA = `import java.util.*;
import java.security.*;

public class RsyncSimulator {
    static class Block {
        int index;
        String weak;
        String strong;
        String data;
    }

    static String strongChecksum(String data) throws Exception {
        MessageDigest md = MessageDigest.getInstance("MD5");
        byte[] digest = md.digest(data.getBytes());
        return Base64.getEncoder().encodeToString(digest);
    }

    static String weakChecksum(String data) {
        return String.valueOf(data.hashCode());
    }

    static List<Block> prepareBlocks(String text, int blockSize) throws Exception {
        List<Block> blocks = new ArrayList<>();
        for (int i = 0; i < text.length(); i += blockSize) {
            String chunk = text.substring(i, Math.min(i + blockSize, text.length()));
            Block b = new Block();
            b.index = i / blockSize;
            b.data = chunk;
            b.weak = weakChecksum(chunk);
            b.strong = strongChecksum(chunk);
            blocks.add(b);
        }
        return blocks;
    }

    public static void main(String[] args) throws Exception {
        String dest = "Hello world from server!";
        String source = "Hello earth from client!";
        int blockSize = 5;

        List<Block> destBlocks = prepareBlocks(dest, blockSize);
        StringBuilder synced = new StringBuilder();

        for (int i = 0; i < source.length(); i += blockSize) {
            String chunk = source.substring(i, Math.min(i + blockSize, source.length()));
            String weak = weakChecksum(chunk);
            String strong = strongChecksum(chunk);

            boolean matched = false;
            for (Block b : destBlocks) {
                if (b.weak.equals(weak) && b.strong.equals(strong)) {
                    synced.append(b.data);
                    matched = true;
                    break;
                }
            }
            if (!matched) synced.append(chunk);
        }

        System.out.println(synced.toString());  // Hello earth from client!
    }
}`;

const RSYNC_EXAMPLE_JS = `function weakChecksum(data) {
    return data.split('').reduce((sum, c) => sum + c.charCodeAt(0), 0);
}

function strongChecksum(data) {
    return btoa(data); // Just a placeholder, use crypto.subtle for real hash
}

function createBlocks(str, blockSize) {
    const blocks = [];
    for (let i = 0; i < str.length; i += blockSize) {
        const chunk = str.slice(i, i + blockSize);
        blocks.push({
            index: i / blockSize,
            data: chunk,
            weak: weakChecksum(chunk),
            strong: strongChecksum(chunk)
        });
    }
    return blocks;
}

function rsync(source, destBlocks, blockSize) {
    let result = '';
    for (let i = 0; i < source.length;) {
        const chunk = source.slice(i, i + blockSize);
        const weak = weakChecksum(chunk);
        const strong = strongChecksum(chunk);

        const match = destBlocks.find(b => b.weak === weak && b.strong === strong);
        if (match) {
            result += match.data;
            i += blockSize;
        } else {
            result += source[i];
            i += 1;
        }
    }
    return result;
}

// Usage
const dest = "Hello world from server!";
const source = "Hello earth from client!";
const blockSize = 5;
const destBlocks = createBlocks(dest, blockSize);
console.log(rsync(source, destBlocks, blockSize)); // Hello earth from client!`;

const RSYNC_EXAMPLE_PYTHON = `import hashlib

def weak_checksum(data):
    return sum(data)

def strong_checksum(data):
    return hashlib.md5(data).hexdigest()

def rsync_send(source, dest_blocks):
    block_size = len(dest_blocks[0]['data'])
    i = 0
    deltas = []

    while i < len(source):
        chunk = source[i:i+block_size]
        weak = weak_checksum(chunk)
        match = next((b for b in dest_blocks if b['weak'] == weak and b['strong'] == strong_checksum(chunk)), None)

        if match:
            deltas.append({'match': match['index']})
            i += block_size
        else:
            deltas.append({'data': source[i:i+1]})
            i += 1

    return deltas

def rsync_receive(deltas, dest_blocks):
    result = bytearray()
    for d in deltas:
        if 'match' in d:
            result.extend(dest_blocks[d['match']]['data'])
        else:
            result.extend(d['data'])
    return result

# Simulate
dest = b"Hello world from server!"
source = b"Hello earth from client!"

block_size = 5
dest_blocks = [
    {'index': i, 'data': dest[i:i+block_size], 'weak': weak_checksum(dest[i:i+block_size]), 'strong': strong_checksum(dest[i:i+block_size])}
    for i in range(0, len(dest), block_size)
]

deltas = rsync_send(source, dest_blocks)
synced = rsync_receive(deltas, dest_blocks)
print(synced.decode())  # Output: Hello earth from client!`;

const Example = () =>{

   const JavaCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
         <div><b># Simplified Hash Matching</b></div>
         <div className="mtop5p"><Highlight content={RSYNC_EXAMPLE_JAVA} lang="java" /></div>
      </div>);
   };

   const JSCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
         <div><b># Client-Side Delta Sync Simulation</b></div>
         <div className="mtop5p"><Highlight content={RSYNC_EXAMPLE_JS} lang="javascript" /></div>
      </div>);
   };

   const PythonCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <div><b># Rolling Checksum and Delta Transfer</b></div>
      <div className="mtop5p"><Highlight content={RSYNC_EXAMPLE_PYTHON} lang="python" /></div>
      </div>);
   };

 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><h2 className="blog-head"><b>Rsync Algorithm Example</b></h2></div>
   <div className="mtop15p">Let’s walk through simplified implementations of Rsync-style sync logic 
      in <b>Python</b>, <b>Java</b>, and <b>JavaScript</b>. (Note: These are educational implementations and do not 
      reflect full production-grade Rsync.)</div>
   <div className="mtop15p">
      <Tab menulinks={[{ id:"java", label:"Java", url:"#", component:(<JavaCode />) },
            { id:"javascript", label:"Javascript", url:"#", component:(<JSCode />) },
            { id:"python", label:"Python", url:"#", component:(<PythonCode />) }]} />
   </div>
 </div>);
};

export default Example;