import React from "react";
import { Highlight , Icon} from "e-ui-react";

const DM_EXAMPLE1_JAVA8 = `interface Vehicle {
    default void start() {
        System.out.println("Vehicle is starting");
    }
}

class Car implements Vehicle {
    // Inherits the default start() method
}

public class Main {
    public static void main(String[] args) {
        Car myCar = new Car();
        myCar.start();  // Output: Vehicle is starting
    }
}`;

const DM_EXAMPLE2_JAVA8 = `class Bike implements Vehicle {
    @Override
    public void start() {
        System.out.println("Bike is starting");
    }
}`;

const DM_EXAMPLE3_JAVA8 = `interface A {
    default void display() {
        System.out.println("Display from A");
    }
}

interface B {
    default void display() {
        System.out.println("Display from B");
    }
}

class C implements A, B {
    @Override
    public void display() {
        // Must resolve ambiguity
        A.super.display(); // or B.super.display();
    }
}`;

const Example = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Examples: Understanding Default Methods in Action</b></h2></div>
    <div className="mtop15p padLeft5p"><h4 className="blog-head"><b>Example #1: Basic Usage</b></h4></div>
    <div className="mtop15p"><Highlight content={DM_EXAMPLE1_JAVA8} lang="java" /></div>
    <div className="mtop15p padLeft5p"><h4 className="blog-head"><b>Example #2: Overriding Default Method</b></h4></div>
    <div className="mtop15p"><Highlight content={DM_EXAMPLE2_JAVA8} lang="java" /></div>
    <div className="mtop15p padLeft5p"><h4 className="blog-head"><b> Example #3: <Icon type="FontAwesome" name="fa-warning" size={16} color="orange" /> Multiple Inheritance Conflict</b></h4></div>
    <div className="mtop15p"><Highlight content={DM_EXAMPLE3_JAVA8} lang="java" /></div>
    <div className="mtop5p padLeft5p">This handles the famous <b>diamond problem</b>, forcing the implementing class to resolve 
    ambiguity explicitly.</div>
 </div>);
};

export default Example;