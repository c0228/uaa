import React from "react";
import { Tab, Highlight } from "e-ui-react";

const AIML_EXAMPLE_JAVA = `class Server {
    double cpuLoad;
    double responseTime;

    public Server(double cpuLoad, double responseTime) {
        this.cpuLoad = cpuLoad;
        this.responseTime = responseTime;
    }

    public double predictScore() {
        // Simulate a learned scoring function
        return 1.0 - (0.5 * cpuLoad + 0.5 * responseTime / 200);
    }
}

public class AILoadBalancer {
    public static void main(String[] args) {
        Server[] servers = {
            new Server(0.3, 100),
            new Server(0.6, 80),
            new Server(0.2, 120)
        };

        Server bestServer = servers[0];
        for (Server server : servers) {
            if (server.predictScore() > bestServer.predictScore()) {
                bestServer = server;
            }
        }

        System.out.println("Selected Server with score: " + bestServer.predictScore());
    }
}`;

const AIML_EXAMPLE_JS = `function predictScore(cpuLoad, responseTime) {
    // Hypothetical regression model weights
    const score = 1.0 - (0.6 * cpuLoad + 0.4 * (responseTime / 200));
    return score;
}

const servers = [
    { id: "A", cpuLoad: 0.5, responseTime: 90 },
    { id: "B", cpuLoad: 0.3, responseTime: 100 },
    { id: "C", cpuLoad: 0.6, responseTime: 70 }
];

let bestServer = servers[0];
let bestScore = predictScore(bestServer.cpuLoad, bestServer.responseTime);

servers.forEach(server => {
    const score = predictScore(server.cpuLoad, server.responseTime);
    if (score > bestScore) {
        bestScore = score;
        bestServer = server;
    }
});

console.log(\`Route traffic to Server \${bestServer.id} with predicted score: \${bestScore}\`);`;

const AIML_EXAMPLE_PYTHON = `from sklearn.linear_model import LinearRegression
import numpy as np

# Simulated server metrics: [CPU load, response time]
X = np.array([
    [0.2, 120],
    [0.4, 100],
    [0.6, 80],
    [0.8, 60]
])

# Target: Server suitability score (higher is better)
y = np.array([0.9, 0.7, 0.5, 0.3])

# Train a simple linear regression model
model = LinearRegression().fit(X, y)

# New server metrics
new_server = np.array([[0.3, 110]])  # [CPU load, response time]

# Predict suitability
score = model.predict(new_server)
print(f"Predicted suitability score: {score[0]}")`;

const Example = () =>{

   const JavaCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <div className="mtop5p"><b># Simple Decision Based on Predicted Metrics</b></div>
      <div className="mtop5p"><Highlight content={AIML_EXAMPLE_JAVA} lang="java" /></div>
      </div>);
   };

   const JSCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <div className="mtop5p"><b># With ML Model Scoring on Client-Side or Edge</b></div>
      <div className="mtop5p"><Highlight content={AIML_EXAMPLE_JS} lang="javascript" /></div>
      </div>);
   };

   const PythonCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <div className="mtop5p"><b># Using Scikit-learn + Simulated Load Balancing</b></div>
      <div className="mtop5p"><Highlight content={AIML_EXAMPLE_PYTHON} lang="python" /></div>
      </div>);
   };

 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Code Examples</b></h2></div>
    <div className="mtop15p">Let’s explore simple implementations across Python, Java, and JavaScript.</div>
    <div className="mtop15p">
      <Tab menulinks={[{ id:"java", label:"Java", url:"#", component:(<JavaCode />) },
            { id:"javascript", label:"Javascript", url:"#", component:(<JSCode />) },
            { id:"python", label:"Python", url:"#", component:(<PythonCode />) }]} />
    </div>
 </div>);
};

export default Example;