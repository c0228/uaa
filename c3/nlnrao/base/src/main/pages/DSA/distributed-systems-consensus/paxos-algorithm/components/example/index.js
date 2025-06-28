import React from "react";
import { Tab, Highlight } from "e-ui-react";

const PAXOS_EXAMPLE_JAVA = `class Acceptor {
    Integer promisedId = null;
    Integer acceptedId = null;
    String acceptedValue = null;

    public boolean[] prepare(int proposalId) {
        if (promisedId == null || proposalId > promisedId) {
            promisedId = proposalId;
            return new boolean[]{true, acceptedId != null};
        }
        return new boolean[]{false, false};
    }

    public boolean accept(int proposalId, String value) {
        if (promisedId == null || proposalId >= promisedId) {
            promisedId = proposalId;
            acceptedId = proposalId;
            acceptedValue = value;
            return true;
        }
        return false;
    }
}`;

const PAXOS_EXAMPLE_JS = `class Acceptor {
    constructor() {
        this.promisedId = null;
        this.acceptedId = null;
        this.acceptedValue = null;
    }

    prepare(proposalId) {
        if (this.promisedId === null || proposalId > this.promisedId) {
            this.promisedId = proposalId;
            return [true, this.acceptedId, this.acceptedValue];
        }
        return [false, null, null];
    }

    accept(proposalId, value) {
        if (this.promisedId === null || proposalId >= this.promisedId) {
            this.promisedId = proposalId;
            this.acceptedId = proposalId;
            this.acceptedValue = value;
            return true;
        }
        return false;
    }
}

// Example
const acceptor = new Acceptor();
console.log(acceptor.prepare(1)); // [true, null, null]
console.log(acceptor.accept(1, "VALUE-B")); // true
console.log(acceptor.prepare(0)); // [false, null, null]`;

const PAXOS_EXAMPLE_PYTHON = `class Acceptor:
    def __init__(self):
        self.promised_id = None
        self.accepted_id = None
        self.accepted_value = None

    def prepare(self, proposal_id):
        if self.promised_id is None or proposal_id > self.promised_id:
            self.promised_id = proposal_id
            return True, self.accepted_id, self.accepted_value
        return False, None, None

    def accept(self, proposal_id, value):
        if self.promised_id is None or proposal_id >= self.promised_id:
            self.promised_id = proposal_id
            self.accepted_id = proposal_id
            self.accepted_value = value
            return True
        return False

# Usage
acceptor = Acceptor()
print(acceptor.prepare(1))  # (True, None, None)
print(acceptor.accept(1, "VALUE-A"))  # True
print(acceptor.prepare(0))  # (False, None, None)`;

const Example = () =>{

   const JavaCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={PAXOS_EXAMPLE_JAVA} lang="java" />
      </div>);
   };

   const JSCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={PAXOS_EXAMPLE_JS} lang="javascript" />
      </div>);
   };

   const PythonCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={PAXOS_EXAMPLE_PYTHON} lang="python" />
      </div>);
   };

 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Example Implementation</b></h2></div>
    <div className="mtop15p">Let’s walk through minimal working implementations of Paxos phases 
   in <b>Python</b>, <b>Java</b> and <b>JavaScript</b>.</div>
   <div className="mtop15p">
      <Tab menulinks={[{ id:"java", label:"Java", url:"#", component:(<JavaCode />) },
            { id:"javascript", label:"Javascript", url:"#", component:(<JSCode />) },
            { id:"python", label:"Python", url:"#", component:(<PythonCode />) }]} />
   </div>
 </div>);
};

export default Example;