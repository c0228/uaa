import React from "react";
import { Tab, Highlight } from "e-ui-react";

const QT_EXAMPLE_JAVA = `class Point {
    int x, y;
    Point(int x, int y) { this.x = x; this.y = y; }
}

class Rectangle {
    int x, y, w, h;
    Rectangle(int x, int y, int w, int h) { this.x = x; this.y = y; this.w = w; this.h = h; }
    boolean contains(Point p) {
        return p.x >= x && p.x < x + w && p.y >= y && p.y < y + h;
    }
}

class QuadTree {
    Rectangle boundary;
    int capacity;
    List<Point> points;
    boolean divided = false;
    QuadTree nw, ne, sw, se;

    QuadTree(Rectangle boundary, int capacity) {
        this.boundary = boundary;
        this.capacity = capacity;
        this.points = new ArrayList<>();
    }

    void subdivide() {
        int x = boundary.x, y = boundary.y, w = boundary.w / 2, h = boundary.h / 2;
        nw = new QuadTree(new Rectangle(x, y, w, h), capacity);
        ne = new QuadTree(new Rectangle(x + w, y, w, h), capacity);
        sw = new QuadTree(new Rectangle(x, y + h, w, h), capacity);
        se = new QuadTree(new Rectangle(x + w, y + h, w, h), capacity);
        divided = true;
    }

    boolean insert(Point p) {
        if (!boundary.contains(p)) return false;
        if (points.size() < capacity) {
            points.add(p);
            return true;
        }
        if (!divided) subdivide();
        return nw.insert(p) || ne.insert(p) || sw.insert(p) || se.insert(p);
    }
}

// Usage
public class QuadTreeExample {
    public static void main(String[] args) {
        Rectangle boundary = new Rectangle(0, 0, 100, 100);
        QuadTree qt = new QuadTree(boundary, 4);
        qt.insert(new Point(10, 20));
        qt.insert(new Point(75, 80));
        System.out.println("Inserted points.");
    }
}`;

const QT_EXAMPLE_JS = `class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Rectangle {
    constructor(x, y, w, h) {
        this.x = x; this.y = y; this.w = w; this.h = h;
    }
    contains(p) {
        return p.x >= this.x && p.x < this.x + this.w &&
               p.y >= this.y && p.y < this.y + this.h;
    }
}

class QuadTree {
    constructor(boundary, capacity) {
        this.boundary = boundary;
        this.capacity = capacity;
        this.points = [];
        this.divided = false;
    }

    subdivide() {
        const x = this.boundary.x, y = this.boundary.y, w = this.boundary.w / 2, h = this.boundary.h / 2;
        this.nw = new QuadTree(new Rectangle(x, y, w, h), this.capacity);
        this.ne = new QuadTree(new Rectangle(x + w, y, w, h), this.capacity);
        this.sw = new QuadTree(new Rectangle(x, y + h, w, h), this.capacity);
        this.se = new QuadTree(new Rectangle(x + w, y + h, w, h), this.capacity);
        this.divided = true;
    }

    insert(p) {
        if (!this.boundary.contains(p)) return false;
        if (this.points.length < this.capacity) {
            this.points.push(p);
            return true;
        }
        if (!this.divided) this.subdivide();
        return this.nw.insert(p) || this.ne.insert(p) ||
               this.sw.insert(p) || this.se.insert(p);
    }
}

// Usage
const qt = new QuadTree(new Rectangle(0, 0, 100, 100), 4);
qt.insert(new Point(10, 20));
qt.insert(new Point(70, 90));
console.log("Points inserted.");`;

const QT_EXAMPLE_PYTHON = `class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

class Rectangle:
    def __init__(self, x, y, w, h):
        self.x, self.y, self.w, self.h = x, y, w, h

    def contains(self, point):
        return (self.x <= point.x < self.x + self.w and
                self.y <= point.y < self.y + self.h)

class QuadTree:
    def __init__(self, boundary, capacity):
        self.boundary = boundary
        self.capacity = capacity
        self.points = []
        self.divided = False

    def subdivide(self):
        x, y, w, h = self.boundary.x, self.boundary.y, self.boundary.w / 2, self.boundary.h / 2
        self.nw = QuadTree(Rectangle(x, y, w, h), self.capacity)
        self.ne = QuadTree(Rectangle(x + w, y, w, h), self.capacity)
        self.sw = QuadTree(Rectangle(x, y + h, w, h), self.capacity)
        self.se = QuadTree(Rectangle(x + w, y + h, w, h), self.capacity)
        self.divided = True

    def insert(self, point):
        if not self.boundary.contains(point):
            return False

        if len(self.points) < self.capacity:
            self.points.append(point)
            return True
        else:
            if not self.divided:
                self.subdivide()
            return (self.nw.insert(point) or self.ne.insert(point) or
                    self.sw.insert(point) or self.se.insert(point))

# Usage
boundary = Rectangle(0, 0, 100, 100)
qt = QuadTree(boundary, 4)
qt.insert(Point(10, 20))
qt.insert(Point(50, 50))
qt.insert(Point(75, 80))
print(f"Inserted Points: {len(qt.points)} or more with children.")`;

const Example = () =>{

   const JavaCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={QT_EXAMPLE_JAVA} lang="java" />
      </div>);
   };

   const JSCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={QT_EXAMPLE_JS} lang="javascript" />
      </div>);
   };

   const PythonCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={QT_EXAMPLE_PYTHON} lang="python" />
      </div>);
   };


 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Examples</b></h2></div>
    <div className="mtop15p">
      <Tab menulinks={[{ id:"java", label:"Java", url:"#", component:(<JavaCode />) },
            { id:"javascript", label:"Javascript", url:"#", component:(<JSCode />) },
            { id:"python", label:"Python", url:"#", component:(<PythonCode />) }]} />
    </div>
 </div>);
};

export default Example;