import React from "react";
import { Highlight } from "e-ui-react";

const LOCALDATE_EXAMPLE_JAVA = `import java.time.LocalDate;

public class LocalDateExample {
    public static void main(String[] args) {
        LocalDate today = LocalDate.now();
        LocalDate birthDate = LocalDate.of(1995, 5, 15);

        System.out.println("Today: " + today);
        System.out.println("Birth Date: " + birthDate);
        System.out.println("Is Leap Year: " + today.isLeapYear());
    }
}`;

const LOCALDATE_OUTPUT_JAVA = `Today: 2025-07-31
Birth Date: 1995-05-15
Is Leap Year: false`;

const LOCALTIME_EXAMPLE_JAVA = `import java.time.LocalTime;

public class LocalTimeExample {
    public static void main(String[] args) {
        LocalTime now = LocalTime.now();
        LocalTime meeting = LocalTime.of(14, 30);

        System.out.println("Current Time: " + now);
        System.out.println("Meeting at: " + meeting);
    }
}`;

const LOCALTIME_OUTPUT_JAVA = `Current Time: 12:45:32.123
Meeting at: 14:30`;

const LOCALDATETIME_EXAMPLE_JAVA = `import java.time.LocalDateTime;

public class LocalDateTimeExample {
    public static void main(String[] args) {
        LocalDateTime now = LocalDateTime.now();
        System.out.println("Current Date & Time: " + now);
    }
}`;

const FORMATINGPARSNG_EXAMPLE_JAVA = `import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class DateTimeFormatterExample {
    public static void main(String[] args) {
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");

        String formattedDate = now.format(formatter);
        System.out.println("Formatted Date & Time: " + formattedDate);
    }
}`;

const CALPERIODSDURATION_EXAMPLE_JAVA = `import java.time.LocalDate;
import java.time.Period;

public class PeriodExample {
    public static void main(String[] args) {
        LocalDate start = LocalDate.of(2020, 1, 1);
        LocalDate end = LocalDate.now();

        Period period = Period.between(start, end);
        System.out.println("Difference: " + period.getYears() + " years, " 
                            + period.getMonths() + " months, " 
                            + period.getDays() + " days");
    }
}`;

const Example = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Examples of Java 8 Date and Time API</b></h2></div>

    <div className="mtop15p"><h5 className="blog-head"><b>1. Using LocalDate</b></h5></div>
    <div className="mtop5p"><Highlight content={LOCALDATE_EXAMPLE_JAVA} lang="java" /></div>
    <div className="mtop5p padLeft5p"><b>Sample Output:</b></div>
    <div className="mtop5p"><Highlight content={LOCALDATE_OUTPUT_JAVA} lang="java" /></div>

    <div className="mtop15p"><h5 className="blog-head"><b>2. Using LocalTime</b></h5></div>
    <div className="mtop5p"><Highlight content={LOCALTIME_EXAMPLE_JAVA} lang="java" /></div>
    <div className="mtop5p padLeft5p"><b>Sample Output:</b></div>
    <div className="mtop5p"><Highlight content={LOCALTIME_OUTPUT_JAVA} lang="java" /></div>


    <div className="mtop15p"><h5 className="blog-head"><b>3. Using LocalDateTime</b></h5></div>
    <div className="mtop5p"><Highlight content={LOCALDATETIME_EXAMPLE_JAVA} lang="java" /></div>

    <div className="mtop15p"><h5 className="blog-head"><b>4. Formatting and Parsing</b></h5></div>
    <div className="mtop5p"><Highlight content={FORMATINGPARSNG_EXAMPLE_JAVA} lang="java" /></div>

    <div className="mtop15p"><h5 className="blog-head"><b>5. Calculating Periods and Durations</b></h5></div>
    <div className="mtop5p"><Highlight content={CALPERIODSDURATION_EXAMPLE_JAVA} lang="java" /></div>

 </div>);
};

export default Example;