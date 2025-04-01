import React from "react";
import { Highlight } from "e-ui-react";
import { BlogIndexHeader } from "@Components/blog-index-header/index.js";

const REINFORCEMENT_LEARNING_PYTHON = `import numpy as np

def q_learning():
    # Initialize Q-table
    Q = np.zeros((5, 2))
    learning_rate = 0.1
    discount_factor = 0.9
    
    for episode in range(100):  # Train for 100 episodes
        state = np.random.randint(0, 5)
        action = np.random.choice([0, 1])
        reward = np.random.randint(-10, 10)
        next_state = np.random.randint(0, 5)
        
        Q[state, action] = Q[state, action] + learning_rate * (reward + discount_factor * np.max(Q[next_state]) - Q[state, action])
    
    print("Trained Q-table:", Q)

q_learning()`;

const ReinforcementLearning = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
   <div align="center" className="mtop15p"><h2 className="blog-head"><b>3. Reinforcement Learning</b></h2></div>
   <div className="mtop15p">Reinforcement learning (RL) is a type of ML where an agent learns by interacting with 
      an environment. It receives rewards or penalties based on its actions and improves over time.</div>
   
   <div className="mtop15p">
      <BlogIndexHeader type="h4" index="3.1" title="Q-Learning (Basic RL Example)" />
      <Highlight content={REINFORCEMENT_LEARNING_PYTHON} lang="python" />
   </div>
 </div>);
};

export default ReinforcementLearning;