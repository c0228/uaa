import React from "react";
import { Tab, Highlight } from "e-ui-react";

const LAMPORT_TS_EXAMPLE_JAVA = `class LamportClock {
    int time = 0;

    int tick() {
        return ++time;
    }

    int update(int received) {
        time = Math.max(time, received) + 1;
        return time;
    }
}

// Usage
LamportClock p1 = new LamportClock();
LamportClock p2 = new LamportClock();

System.out.println("P1 sends msg: " + p1.tick());
int msgTime = p1.time;
System.out.println("P2 receives msg: " + p2.update(msgTime));`;

const LAMPORT_TS_EXAMPLE_JS = `class LamportClock {
  constructor() {
    this.time = 0;
  }

  tick() {
    return ++this.time;
  }

  update(receivedTime) {
    this.time = Math.max(this.time, receivedTime) + 1;
    return this.time;
  }
}

const p1 = new LamportClock();
const p2 = new LamportClock();

console.log("P1 sends:", p1.tick());
const msgTime = p1.time;
console.log("P2 receives:", p2.update(msgTime));`;

const LAMPORT_TS_EXAMPLE_PYTHON = `class LamportClock:
    def __init__(self):
        self.time = 0

    def tick(self):
        self.time += 1
        return self.time

    def update(self, received_time):
        self.time = max(self.time, received_time) + 1
        return self.time

# Usage
p1 = LamportClock()
p2 = LamportClock()

print("P1 sends msg:", p1.tick())     # 1
msg_time = p1.time
print("P2 receives msg:", p2.update(msg_time))  # 2`;

const VECTOR_CLOCK_EXAMPLE_JAVA = `import java.util.Arrays;

class VectorClock {
    int[] clock;
    int pid;

    VectorClock(int pid, int size) {
        this.pid = pid;
        this.clock = new int[size];
    }

    void tick() {
        clock[pid]++;
    }

    int[] send() {
        tick();
        return Arrays.copyOf(clock, clock.length);
    }

    void receive(int[] received) {
        tick();
        for (int i = 0; i < clock.length; i++) {
            clock[i] = Math.max(clock[i], received[i]);
        }
    }
}`;

const VECTOR_CLOCK_EXAMPLE_JS = `class VectorClock {
  constructor(pid, size) {
    this.clock = Array(size).fill(0);
    this.pid = pid;
  }

  tick() {
    this.clock[this.pid]++;
  }

  send() {
    this.tick();
    return [...this.clock];
  }

  receive(received) {
    this.tick();
    this.clock = this.clock.map((val, i) => Math.max(val, received[i]));
  }
}

const p1 = new VectorClock(0, 2);
const p2 = new VectorClock(1, 2);

const msg = p1.send();
console.log("P1 sends:", msg);

p2.receive(msg);
console.log("P2 clock:", p2.clock);`;

const VECTOR_CLOCK_EXAMPLE_PYTHON = `class VectorClock:
    def __init__(self, pid, size):
        self.clock = [0] * size
        self.pid = pid

    def tick(self):
        self.clock[self.pid] += 1

    def send(self):
        self.tick()
        return self.clock[:]

    def receive(self, received_clock):
        self.tick()
        for i in range(len(self.clock)):
            self.clock[i] = max(self.clock[i], received_clock[i])

# Usage
p1 = VectorClock(0, 2)
p2 = VectorClock(1, 2)

msg = p1.send()
print("P1 sends msg:", msg)

p2.receive(msg)
print("P2 clock after receiving:", p2.clock)`;

const Example = () =>{

   const JavaCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
         <div><h5><b>Lamport Timestamp</b></h5></div>
         <Highlight content={LAMPORT_TS_EXAMPLE_JAVA} lang="java" />
         <div><h5><b>Vector Clock</b></h5></div>
         <Highlight content={VECTOR_CLOCK_EXAMPLE_JAVA} lang="java" />
      </div>);
   };

   const JSCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
         <div><h5><b>Lamport Timestamp</b></h5></div>
         <Highlight content={LAMPORT_TS_EXAMPLE_JS} lang="javascript" />
         <div><h5><b>Vector Clock</b></h5></div>
         <Highlight content={VECTOR_CLOCK_EXAMPLE_JS} lang="javascript" />
      </div>);
   };

   const PythonCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
         <div><h5><b>Lamport Timestamp</b></h5></div>
         <Highlight content={LAMPORT_TS_EXAMPLE_PYTHON} lang="python" />
         <div><h5><b>Vector Clock</b></h5></div>
         <Highlight content={VECTOR_CLOCK_EXAMPLE_PYTHON} lang="python" />
      </div>);
   };

 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Example</b></h2></div>
    <div className="mtop15p">Let’s understand both 
    with <b>code examples</b> in <b>Python</b>, <b>Java</b>, and <b>JavaScript</b>.</div>
    <div className="mtop15p">
      <Tab menulinks={[{ id:"java", label:"Java", url:"#", component:(<JavaCode />) },
            { id:"javascript", label:"Javascript", url:"#", component:(<JSCode />) },
            { id:"python", label:"Python", url:"#", component:(<PythonCode />) }]} />
    </div>
 </div>);
};

export default Example;