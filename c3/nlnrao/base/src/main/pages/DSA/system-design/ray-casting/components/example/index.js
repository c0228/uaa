import React from "react";
import { Tab, Highlight } from "e-ui-react";

const RAYCASTING_EXAMPLE_JAVA = `public class RayCasting {
    public static boolean doesRayIntersect(float[] origin, float[] direction, float[] segStart, float[] segEnd) {
        float x1 = segStart[0], y1 = segStart[1];
        float x2 = segEnd[0], y2 = segEnd[1];
        float x3 = origin[0], y3 = origin[1];
        float x4 = origin[0] + direction[0], y4 = origin[1] + direction[1];

        float den = (x1 - x2)*(y3 - y4) - (y1 - y2)*(x3 - x4);
        if (den == 0) return false; // Parallel lines

        float t = ((x1 - x3)*(y3 - y4) - (y1 - y3)*(x3 - x4)) / den;
        float u = -((x1 - x2)*(y1 - y3) - (y1 - y2)*(x1 - x3)) / den;

        return (t >= 0 && t <= 1 && u >= 0);
    }

    public static void main(String[] args) {
        float[] origin = {0, 0};
        float[] direction = {1, 1};
        float[] segStart = {2, 1};
        float[] segEnd = {2, 3};

        boolean hit = doesRayIntersect(origin, direction, segStart, segEnd);
        System.out.println("Hit: " + hit);
    }
}`;

const RAYCASTING_EXAMPLE_JS = `function castRay(origin, direction, walls) {
    const hits = [];

    for (const wall of walls) {
        const [x1, y1, x2, y2] = wall;
        const [x3, y3] = origin;
        const x4 = x3 + direction[0], y4 = y3 + direction[1];

        const den = (x1 - x2)*(y3 - y4) - (y1 - y2)*(x3 - x4);
        if (den === 0) continue;

        const t = ((x1 - x3)*(y3 - y4) - (y1 - y3)*(x3 - x4)) / den;
        const u = -((x1 - x2)*(y1 - y3) - (y1 - y2)*(x1 - x3)) / den;

        if (t >= 0 && t <= 1 && u >= 0) {
            const hitX = x1 + t * (x2 - x1);
            const hitY = y1 + t * (y2 - y1);
            hits.push([hitX, hitY]);
        }
    }
    return hits;
}

// Example
const origin = [0, 0];
const direction = [1, 1];
const walls = [
    [2, 1, 2, 3],
    [1, 3, 4, 3]
];

console.log(castRay(origin, direction, walls));`;

const RAYCASTING_EXAMPLE_PYTHON = `import math

def cast_ray(origin, direction, walls):
    hits = []
    for wall in walls:
        x1, y1, x2, y2 = wall
        x3, y3 = origin
        x4, y4 = origin[0] + direction[0], origin[1] + direction[1]

        den = (x1 - x2)*(y3 - y4) - (y1 - y2)*(x3 - x4)
        if den == 0:
            continue  # parallel lines

        t = ((x1 - x3)*(y3 - y4) - (y1 - y3)*(x3 - x4)) / den
        u = -((x1 - x2)*(y1 - y3) - (y1 - y2)*(x1 - x3)) / den

        if 0 <= t <= 1 and u >= 0:
            hit_x = x1 + t * (x2 - x1)
            hit_y = y1 + t * (y2 - y1)
            hits.append((hit_x, hit_y))
    return hits

# Example
origin = (0, 0)
direction = (1, 1)
walls = [(2, 1, 2, 3), (1, 3, 4, 3)]

print(cast_ray(origin, direction, walls))`;

const Example = () =>{

   const JavaCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <div>Here’s a basic implementation to detect intersection between a ray and a line segment.</div>
      <div className="mtop5p"><Highlight content={RAYCASTING_EXAMPLE_JAVA} lang="java" /></div>
      </div>);
   };

   const JSCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <div>Let's simulate a simple 2D ray hit detection in JavaScript:</div>
      <div className="mtop5p"><Highlight content={RAYCASTING_EXAMPLE_JS} lang="javascript" /></div>
      </div>);
   };

   const PythonCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <div>We'll simulate 2D ray casting to check if a ray from a source hits any of the given walls (line segments).</div>
      <div className="mtop5p"><Highlight content={RAYCASTING_EXAMPLE_PYTHON} lang="python" /></div>
      </div>);
   };

 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><h2 className="blog-head"><b>Example</b></h2></div>
   <div className="mtop15p">
      <Tab menulinks={[{ id:"java", label:"Java", url:"#", component:(<JavaCode />) },
            { id:"javascript", label:"Javascript", url:"#", component:(<JSCode />) },
            { id:"python", label:"Python", url:"#", component:(<PythonCode />) }]} />
   </div>
 </div>);
};

export default Example;