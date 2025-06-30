import React from "react";
import { Tab, Card, Highlight } from "e-ui-react";

const OT_EXAMPLE_JAVA = `class Operation {
    int pos;
    char ch;
    String type; // "insert" or "delete"

    Operation(int pos, char ch, String type) {
        this.pos = pos;
        this.ch = ch;
        this.type = type;
    }

    public Operation transform(Operation other) {
        if (this.type.equals("insert") && other.type.equals("insert")) {
            if (this.pos <= other.pos) return this;
            this.pos++;
        } else if (this.type.equals("insert") && other.type.equals("delete")) {
            if (this.pos > other.pos) this.pos--;
        } else if (this.type.equals("delete") && other.type.equals("insert")) {
            if (this.pos >= other.pos) this.pos++;
        } else if (this.type.equals("delete") && other.type.equals("delete")) {
            if (this.pos > other.pos) this.pos--;
        }
        return this;
    }
}

public class OTExample {
    public static void main(String[] args) {
        Operation opA = new Operation(2, 'X', "insert");
        Operation opB = new Operation(1, 'Y', "insert");

        Operation transformed = opA.transform(opB);
        System.out.println("Transformed Operation: insert('" + transformed.ch + "' at " + transformed.pos + ")");
    }
}`;

const OT_EXAMPLE_JS = `class Operation {
    constructor(pos, char, type = "insert") {
        this.pos = pos;
        this.char = char;
        this.type = type;
    }

    transform(other) {
        if (this.type === "insert" && other.type === "insert") {
            if (this.pos > other.pos) this.pos++;
        } else if (this.type === "insert" && other.type === "delete") {
            if (this.pos > other.pos) this.pos--;
        } else if (this.type === "delete" && other.type === "insert") {
            if (this.pos >= other.pos) this.pos++;
        } else if (this.type === "delete" && other.type === "delete") {
            if (this.pos > other.pos) this.pos--;
        }
        return this;
    }
}

// Example usage
const op1 = new Operation(2, 'X', 'insert');
const op2 = new Operation(1, 'Y', 'insert');

const transformed = op1.transform(op2);
console.log(\`Transformed Operation: insert('\${transformed.char}' at \${transformed.pos})\`);`;

const OT_EXAMPLE_PYTHON = `class Operation:
    def __init__(self, position, character, op_type='insert'):
        self.pos = position
        self.char = character
        self.type = op_type  # 'insert' or 'delete'

    def transform(self, other):
        if self.type == 'insert' and other.type == 'insert':
            if self.pos <= other.pos:
                return self
            else:
                self.pos += 1
        elif self.type == 'insert' and other.type == 'delete':
            if self.pos > other.pos:
                self.pos -= 1
        elif self.type == 'delete' and other.type == 'insert':
            if self.pos >= other.pos:
                self.pos += 1
        elif self.type == 'delete' and other.type == 'delete':
            if self.pos > other.pos:
                self.pos -= 1
        return self

# Example
op1 = Operation(2, 'X')  # A inserts X at position 2
op2 = Operation(1, 'Y')  # B inserts Y at position 1

# Transform op1 against op2
op1_transformed = op1.transform(op2)
print(f"Transformed op1: insert('{op1_transformed.char}' at {op1_transformed.pos})")`;

const Example = () =>{

   const JavaCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={OT_EXAMPLE_JAVA} lang="java" />
      </div>);
   };

   const JSCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={OT_EXAMPLE_JS} lang="javascript" />
      </div>);
   };

   const PythonCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={OT_EXAMPLE_PYTHON} lang="python" />
      </div>);
   };

 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Examples</b></h2></div>
    <div className="mtop5p">
      <Card padding={15} backgroundColor="#eee">
         <ul>
            <li><b>User A:</b> <code><b>insert(2, "X")</b></code></li>
            <li><b>User B:</b> <code><b>insert(1, "Y")</b></code></li>
         </ul>
         <div className="mtop5p">If A and B do this concurrently, their local documents diverge. OT will <b>transform</b> the 
         incoming operation before applying it to make sure both users eventually see the same document.</div>
      </Card>
    </div>
    <div className="mtop15p">
      <Tab menulinks={[{ id:"java", label:"Java", url:"#", component:(<JavaCode />) },
            { id:"javascript", label:"Javascript", url:"#", component:(<JSCode />) },
            { id:"python", label:"Python", url:"#", component:(<PythonCode />) }]} />
    </div>
    <div className="mtop15p"><h2 className="blog-head"><b>OT vs CRDT</b></h2></div>
    <div>
      <ul>
         <li className="mtop5p"><b>OT:</b> Operation-based, needs central coordination or transformation logic.</li>
         <li className="mtop5p"><b>CRDT:</b> State-based or op-based, designed for distributed/peer-to-peer systems.</li>
      </ul>
    </div>
    <div className="mtop5p">OT is great for <b>centralized</b> real-time apps like Google Docs. 
    For <b>decentralized</b> scenarios, <b>CRDTs (Conflict-Free Replicated Data Types)</b> are preferred.</div>
 </div>);
};

export default Example;