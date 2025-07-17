import React from "react";
import { Card, Highlight } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const COMPARABLE_INTERFACE_JAVA = `public interface Comparable<T> {
    public int compareTo(T o); // Single Abstract Method
}`;

const COMPARABLE_EXAMPLE_JAVA = `class Employee implements Comparable<Employee> {
    int id;
    String name;

    public Employee(int id, String name) {
        this.id = id;
        this.name = name;
    }

    // Natural ordering based on 'id'
    @Override
    public int compareTo(Employee other) {
        return Integer.compare(this.id, other.id);
    }

    @Override
    public String toString() {
        return id + " - " + name;
    }
}`;

const COMPARABLE_USAGE_JAVA = `import java.util.*;

public class Main {
    public static void main(String[] args) {
        List<Employee> list = new ArrayList<>();
        list.add(new Employee(3, "Alice"));
        list.add(new Employee(1, "Bob"));
        list.add(new Employee(2, "Charlie"));

        // Uses natural ordering defined by Comparable
        Collections.sort(list);

        for (Employee e : list) {
            System.out.println(e);
        }
    }
}`;

const COMPARATOR_INTERFACE_JAVA = `public interface Comparator<T> {
    public int compare(T o1, T o2);  // Single abstract method

    // other default and static methods...
}`;

const COMPARATOR_EXAMPLE_JAVA = `public class Employee {
    int id;
    String name;
    double salary;

    public Employee(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    @Override
    public String toString() {
        return id + " - " + name + " - " + salary;
    }
}`;

const COMPARATOR_USAGE_JAVA_LAMBDA = `import java.util.*;

public class Main {
    public static void main(String[] args) {
        List<Employee> employees = new ArrayList<>();
        employees.add(new Employee(3, "Alice", 75000));
        employees.add(new Employee(1, "Charlie", 50000));
        employees.add(new Employee(2, "Bob", 60000));

        // Sort by Name (Alphabetically)
        employees.sort(Comparator.comparing(emp -> emp.name));
        System.out.println("Sorted by Name:");
        employees.forEach(System.out::println);

        // Sort by Salary (Descending)
        employees.sort((e1, e2) -> Double.compare(e2.salary, e1.salary));
        System.out.println("\nSorted by Salary (Descending):");
        employees.forEach(System.out::println);

        // Sort by ID (Ascending)
        employees.sort(Comparator.comparingInt(emp -> emp.id));
        System.out.println("\nSorted by ID:");
        employees.forEach(System.out::println);
    }
}`;

const COMPARATOR_USAGE_JAVA_NOLAMBDA = `import java.util.*;

public class Main {
    public static void main(String[] args) {
        List<Employee> employees = new ArrayList<>();
        employees.add(new Employee(3, "Alice", 75000));
        employees.add(new Employee(1, "Charlie", 50000));
        employees.add(new Employee(2, "Bob", 60000));

        // Sort by Name (Alphabetically)
        Collections.sort(employees, new Comparator<Employee>() {
            public int compare(Employee e1, Employee e2) {
                return e1.name.compareTo(e2.name);
            }
        });
        System.out.println("Sorted by Name:");
        for (Employee e : employees) {
            System.out.println(e);
        }

        // Sort by Salary (Descending)
        Collections.sort(employees, new Comparator<Employee>() {
            public int compare(Employee e1, Employee e2) {
                return Double.compare(e2.salary, e1.salary);
            }
        });
        System.out.println("\nSorted by Salary (Descending):");
        for (Employee e : employees) {
            System.out.println(e);
        }

        // Sort by ID (Ascending)
        Collections.sort(employees, new Comparator<Employee>() {
            public int compare(Employee e1, Employee e2) {
                return Integer.compare(e1.id, e2.id);
            }
        });
        System.out.println("\nSorted by ID:");
        for (Employee e : employees) {
            System.out.println(e);
        }
    }
}`;

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p">
        <Card padding={15} backgroundColor="#eee">
            <div>Initially, developers had a tough time organizing lists of custom objects 
            like <code><b>Employee</b></code>, <code><b>Student</b></code>, or <code><b>Product</b></code> for 
            sorting mechanisms.</div>
            <div className="mtop5p">For example, sorting simple arrays 
                like <code><b>int[]</b></code> or <code><b>char[]</b></code> was easy—you could write 
                your own logic.</div>
            <div>But as soon as you started working with <b>your own classes</b>, things got complicated:</div>
            <div>
                <ul>
                    <li className="mtop5p">How does Java know how to compare two <code><b>Employee</b></code> objects?</li>
                    <li className="mtop5p">What if you want to sort employees <b>by name</b>, or sometimes <b>by salary</b>, 
                    or maybe <b>by joining date</b>?</li>
                    <li className="mtop5p">How can you apply <b>different sorting rules</b> at different times?</li>
                </ul>
            </div>
            <div className="mtop5p">To solve all this, Java introduced <b>two special interfaces</b> in <b>Java version 2 (JDK 1.2)</b> as 
            part of the <b>Collections Framework</b>:</div>
            <div>
                <ul>
                    <li className="mtop5p"><code><b>Comparable</b></code> – for <b>natural/default sorting</b> (when your class has one natural way of being sorted)</li>
                    <li className="mtop5p"><code><b>Comparator</b></code> – for <b>custom sorting rules</b> (when you need different sorting strategies or when you can’t modify the class)</li>
                </ul>
            </div>
            <div>These interfaces made it much easier to sort lists of custom objects in a clean, reusable way, powerful, flexible, and developer-friendly.</div>
        </Card>
    </div>


    <div className="mtop15p"><h2 className="blog-head"><b>Introduction: Comparable and Comparator Interfaces</b></h2></div>
    
    <div className="mtop15p"><h4 className="blog-head"><b>Comparable Interface</b></h4></div>
    <div className="mtop5p"><code><b>Comparable</b></code> is used when you want to <b>define the default sorting logic</b> for 
    a class. It is part of the <code><b>java.lang package</b></code>.</div>
    <div className="mtop15p"><Highlight content={COMPARABLE_INTERFACE_JAVA} lang="java" /></div>
    <div className="mtop5p">It is a Functional Interface which has Single Abstract Method <code><b>compareTo</b></code>:</div>
    <div>
        <ul>
            <li className="mtop5p">Used when <b>only one natural ordering</b> is required.</li>
            <li className="mtop5p">The class itself <b>implements</b> the interface and defines how it should be compared.</li>
        </ul>
    </div>
    <div className="mtop15p"><h5 className="blog-head"><b>#SCENARIO: Sorting <code>Employee</code> objects by their <code>id</code> (natural ordering)</b></h5></div>
    <div className="mtop5p"><Highlight content={COMPARABLE_EXAMPLE_JAVA} lang="java" /></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Usage:</b></h5></div>
    <div className="mtop5p"><Highlight content={COMPARABLE_USAGE_JAVA} lang="java" /></div>
    <div className="mtop5p">
        <Card padding={15} backgroundColor="#eee">
        Use <code><b>Comparable</b></code> when your class has a <b>single natural order</b>, and that logic 
        is <b>embedded within the class</b> itself. For multiple sorting logics (like sorting by name or salary), 
        use the <code><b>Comparator</b></code> interface externally.
        </Card>
    </div>


    <div className="mtop15p"><h4 className="blog-head"><b>Comparator Interface</b></h4></div>
    <div className="mtop5p"><code><b>Comparator</b></code> is used when you want <b>multiple ways to compare objects</b>, or 
    when you <b>don’t have control over the class</b> (e.g., library code). It is part of the <code><b>java.util package</b></code>.</div>
    <div className="mtop5p"><Highlight content={COMPARATOR_INTERFACE_JAVA} lang="java" /></div>
    <div className="mtop5p">It is a Functional Interface  which has Single Abstract Method <code><b>compare(T o1, T o2)</b></code>:</div>
    <div>
        <ul>
            <li className="mtop5p">Used to define <b>custom orderings</b>.</li>
            <li className="mtop5p">Often passed as an argument to sorting methods like <b>Collections.sort()</b> or <b>Arrays.sort()</b>.</li>
        </ul>
    </div>
    <div className="mtop5p"><h5 className="blog-head"><b>#Scenario: Sorting Employee objects using <code>Comparator</code></b></h5></div>
    <div>
        <Card padding={15}>
            <div><b>Problem Statement</b></div>
            <div className="mtop5p">You're working on an HR application that manages a list of employees. Each <code><b>Employee</b></code> has:</div>
            <div>
                <ul>
                    <li className="mtop5p"><code><b>id</b></code> (int)</li>
                    <li className="mtop5p"><code><b>name</b></code> (String)</li>
                    <li className="mtop5p"><code><b>salary</b></code> (double)</li>
                </ul>
            </div>
            <div>You need to display employees sorted <b>in different ways</b>, like:</div>
            <div>
                <ul>
                    <li className="mtop5p">By <b>name alphabetically</b></li>
                    <li className="mtop5p">By <b>salary in descending order</b></li>
                    <li className="mtop5p">By <b>id in ascending order</b></li>
                </ul>
            </div>
            <div>You <b>can’t use</b> <code><b>Comparable</b></code> here because:</div>
            <div style={{ borderLeft:'5px solid #ccc', paddingLeft:'15px' }}>Comparable allows only one <i>default/natural</i> sort logic.</div>
        </Card>
    </div>
    <div className="mtop5p"><Highlight content={COMPARATOR_EXAMPLE_JAVA} lang="java" /></div>
    <div className="mtop5p"><b>Usage (With Lambda Expressions):</b></div>
    <div className="mtop5p"><Highlight content={COMPARATOR_USAGE_JAVA_LAMBDA} lang="java" /></div>
    <div className="mtop5p">
        <SimpleTable header={["Sorting Logic", "Code"]} 
        columns={[
            ["By Name", (<div><code><b>Comparator.comparing(emp &#8594; emp.name)</b></code></div>)],
            ["By Salary (desc)", (<div><code><b>(e1, e2) &#8594; Double.compare(e2.salary, e1.salary)</b></code></div>)],
            ["By ID", (<div><code><b>Comparator.comparingInt(emp &#8594; emp.id)</b></code></div>)]
          ]} />
    </div>
    <div className="mtop5p"><b>Usage (With Anonymous Classes):</b></div>
    <div className="mtop5p"><Highlight content={COMPARATOR_USAGE_JAVA_NOLAMBDA} lang="java" /></div>
 </div>);
};

export default Introduction;