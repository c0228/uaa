import React from "react";
import { Card, Tab, Highlight } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const PYTHON_FACTORIAL_TIME = `from itertools import permutations

def generate_permutations(arr):
    return list(permutations(arr))

# Manual recursive version (without itertools)
def permute(arr):
    if len(arr) == 0:
        return [[]]
    result = []
    for i in range(len(arr)):
        rest = arr[:i] + arr[i+1:]
        for p in permute(rest):
            result.append([arr[i]] + p)
    return result
`;

const JAVA_FACTORIAL_TIME = `import java.util.*;

public class Permutations {
    public static List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> results = new ArrayList<>();
        backtrack(nums, new boolean[nums.length], new ArrayList<>(), results);
        return results;
    }

    private static void backtrack(int[] nums, boolean[] used, List<Integer> path, List<List<Integer>> results) {
        if (path.size() == nums.length) {
            results.add(new ArrayList<>(path));
            return;
        }

        for (int i = 0; i < nums.length; i++) {
            if (!used[i]) {
                used[i] = true;
                path.add(nums[i]);
                backtrack(nums, used, path, results);
                path.remove(path.size() - 1);
                used[i] = false;
            }
        }
    }
}`;

const JS_FACTORIAL_TIME = `function permute(arr) {
    const result = [];
    const backtrack = (path, used) => {
        if (path.length === arr.length) {
            result.push([...path]);
            return;
        }
        for (let i = 0; i < arr.length; i++) {
            if (used[i]) continue;
            used[i] = true;
            path.push(arr[i]);
            backtrack(path, used);
            path.pop();
            used[i] = false;
        }
    };
    backtrack([], []);
    return result;
}`;

const FactorialTime = () =>{

  const PythonCode = () =>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={PYTHON_FACTORIAL_TIME} lang="python" />
    </div>);
  };

  const JavaCode = () =>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={JAVA_FACTORIAL_TIME} lang="java" />
    </div>);
  };

  const JSCode = () =>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={JS_FACTORIAL_TIME} lang="javascript" />
    </div>);
  };

  return (<div>
    <div className="blog-head blog-hgl-title"><b>O(n!) - Factorial Time</b></div>
    <div className="mtop15p">
      An algorithm runs in <b>factorial time</b> when it tries <b>all possible permutations</b> of <code><b>n</b></code> items.
    </div>
    <div className="mtop5p">
      <Card padding={15} backgroundColor="#eee">
        Time grows faster than exponential — it's the <b>slowest</b> complexity in practice.
      </Card>
    </div>
    <div className="mtop15p">
      <SimpleTable header={["n","n! (Operations)"]} columns={[
        ["3","6"],
        ["5","120"],
        ["10","3,628,800"],
        ["15",(<div>1.3 * 10<sup>12</sup></div>)]
      ]} />
    </div>
    <div className="mtop15p">
      <div><b><u>Best Example:</u> Generating All Permutations of n Elements</b></div>
      <div>This is a <b>classic factorial time problem</b>. Every new item increases 
      permutations <b>multiplicatively</b>.</div>
    </div>
    <div className="mtop5p">
      <Tab menulinks={[{ id:"python", label:"Python", url:"#", component:(<PythonCode />) },
        { id:"java", label:"Java", url:"#",  component:(<JavaCode />) },
        { id:"javascript", label:"Javascript", url:"#",  component:(<JSCode />) }]} />
    </div>

  </div>);
};

export default FactorialTime;