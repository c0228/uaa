import React from "react";
import { Card, Highlight } from "e-ui-react";

const MUTABILITYISSUES_EXAMPLE_JAVA = `Date date = new Date();
date.setYear(120); // 2020 (years counted from 1900)`;

const CONFUSIONDESIGN_EXAMPLE_JAVA = `Calendar cal = Calendar.getInstance();
cal.set(2023, 0, 5); // January 5, 2023 (0 for January)`;

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p">Java 8 introduced a <b>new Date and Time API</b> under the package <code><b>java.time</b></code>, which 
   resolved many long-standing issues with the old <code><b>Date</b></code> and <code><b>Calendar</b></code> classes. This API is 
   inspired by the <b>Joda-Time library</b> and provides a <b>more reliable, immutable, and thread-safe way</b> to handle dates and 
   times.Before diving into the new API, let’s first understand <b>why it was needed</b>.</div>
   <div className="mtop15p">
      <Card padding={15} backgroundColor="#eee">
         <div><h4 className="blog-head"><b>Problems Before Java 8</b></h4></div>
         <div className="mtop15p">Before Java 8, we used <code><b>java.util.Date</b></code> and <code><b>java.util.Calendar</b></code> classes 
         to handle date and time. They had several <b>limitations</b>:</div>
         <div>
            <ol>
               <li className="mtop15p">
                  <div><h5 className="blog-head"><b>Mutability Issues</b></h5></div>
                  <div>
                     <ul>
                        <li className="mtop5p">
                           <div><code><b>Date</b></code> and <code><b>Calendar</b></code> objects were <b>mutable</b>, which could lead 
                           to <b>unintended changes</b> and <b>thread-safety issues</b>.</div>
                           <div className="mtop5p"><Highlight content={MUTABILITYISSUES_EXAMPLE_JAVA} lang="java" /></div>
                        </li>
                        <li className="mtop5p">Changes to the object affected all references.</li>
                     </ul>
                  </div>
               </li>
               <li className="mtop15p">
                  <div><h5 className="blog-head"><b>Confusing Design</b></h5></div>
                  <div>
                     <ul>
                        <li className="mtop5p">
                           <div>Months started at <code><b>0</b></code>, but days started at <code><b>1</b></code>, leading to confusion.</div>
                           <div className="mtop5p"><Highlight content={CONFUSIONDESIGN_EXAMPLE_JAVA} lang="java" /></div>
                        </li>
                        <li className="mtop5p"></li>
                     </ul>
                  </div>
               </li>
               <li className="mtop15p">
                  <div><h5 className="blog-head"><b>Lack of Time Zone Support</b></h5></div>
                  <div>Handling <b>time zones</b> and <b>DST (Daylight Saving Time)</b> was <b>complex and error-prone</b>.</div>
               </li>
               <li className="mtop15p">
                  <div><h5 className="blog-head"><b>Poor Formatting and Parsing</b></h5></div>
                  <div>Parsing and formatting required using <code><b>SimpleDateFormat</b></code>, which <b>was not thread-safe</b> and 
                  often caused <b>unexpected bugs in multi-threaded applications</b>.</div>
               </li>
            </ol>
         </div>
         <div className="mtop5p">These limitations made <b>date and time handling cumbersome</b>, paving the way for 
         the <b>Java 8 Date and Time API</b>.</div>
      </Card>
   </div>
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction to Java 8 Date and Time API</b></h2></div>
   <div className="mtop15p">
      <div>Java 8 introduced a <b>completely new API</b> in the <code><b>java.time</b></code> package that is:</div>
      <div>
         <ul>
            <li className="mtop5p">Immutable and Thread-Safe</li>
            <li className="mtop5p">Fluent and Easy to Read</li>
            <li className="mtop5p">Better for Time Zone Handling</li>
            <li className="mtop5p">Supports ISO and Human-Friendly Operations</li>
         </ul>
      </div>
   </div>
   <div className="mtop15p"><h4 className="blog-head"><b>Key Classes</b></h4></div>
   <div>
      <ul>
         <li className="mtop5p"><code><b>LocalDate</b></code> – Represents a date (year, month, day) without time.</li>
         <li className="mtop5p"><code><b>LocalTime</b></code> – Represents only time (hour, minute, second, nanosecond).</li>
         <li className="mtop5p"><code><b>LocalDateTime</b></code> – Represents both date and time without timezone.</li>
         <li className="mtop5p"><code><b>ZonedDateTime</b></code> – Represents date and time with timezone.</li>
         <li className="mtop5p"><code><b>Period</b></code> & <code><b>Duration</b></code> – Represents date-based and time-based differences.</li>
         <li className="mtop5p"><code><b>DateTimeFormatter</b></code> – For parsing and formatting dates and times.</li>
      </ul>
   </div>
 </div>);
};

export default Introduction;