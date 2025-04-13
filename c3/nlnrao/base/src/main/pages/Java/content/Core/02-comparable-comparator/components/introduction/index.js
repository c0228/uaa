import React from "react";
import { Highlight } from "e-ui-react";

const COMPARABLE_STUDENT_CLASS = `public class Student implements Comparable<Student> {
    private String name;
    private int rollNumber;

    public Student(String name, int rollNumber) {
        this.name = name;
        this.rollNumber = rollNumber;
    }

    @Override
    public int compareTo(Student other) {
        return this.rollNumber - other.rollNumber;
    }
}
`;

const COMPARATOR_STUDENT_CLASS = `import java.util.Comparator;

public class NameComparator implements Comparator<Student> {
    @Override
    public int compare(Student s1, Student s2) {
        return s1.getName().compareTo(s2.getName());
    }
}
`;

const Introduction = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div><i>​In Java, the <code><b>Comparable</b></code> and <code><b>Comparator</b></code> interfaces, introduced in Java 1.2, are 
    essential for defining object ordering, especially when sorting collections. Understanding their roles and differences is crucial 
    for effective Java programming.</i></div>

    <div className="mtop15p"><h2 className="blog-head"><b>Understanding Comparable</b></h2></div>
    <div className="mtop15p padLeft5p">The <code><b>Comparable</b></code> interface is used to define the natural ordering of objects. It is part 
    of the <code><b>java.lang</b></code> package and contains the method:​
    <Highlight content={`int compareTo(T o);`} lang="java" />
    <div className="mtop15p padLeft5p">Implementing <code><b>Comparable</b></code> allows a class to define its default sorting behavior. 
    For example:</div>
    <Highlight content={COMPARABLE_STUDENT_CLASS} lang="java" />
    <div className="mtop15p">In this example, <code><b>Student</b></code> objects are sorted by their <code><b>rollNumber</b></code> in 
    ascending order. This natural ordering is used by default in sorting methods like <code><b>Collections.sort()</b></code> 
    and <code><b>Arrays.sort()</b></code>.</div>

    <div className="mtop15p"><h2 className="blog-head"><b>Understanding Comparator</b></h2></div>
    <div className="mtop15p padLeft5p">The <code><b>Comparator</b></code> interface, found in the <code><b>java.util</b></code> package, allows for 
    defining multiple ways to compare objects. It contains the method:</div>
    <Highlight content={`int compare(T o1, T o2);`} lang="java" />
    <div className="mtop15p padLeft5p">Using <code><b>Comparator</b></code>, you can create separate classes or use lambda expressions to define 
    custom sorting logic without modifying the original class. For example:​</div>
    <Highlight content={COMPARATOR_STUDENT_CLASS} lang="java" />
    <div className="mtop15p padLeft5p">This <code><b>NameComparator</b></code> allows sorting Student objects by their name. You can use it 
    with sorting methods like:​</div>
    <Highlight content={`Collections.sort(studentList, new NameComparator());`} lang="java" />
</div>
 </div>);
};

export default Introduction;