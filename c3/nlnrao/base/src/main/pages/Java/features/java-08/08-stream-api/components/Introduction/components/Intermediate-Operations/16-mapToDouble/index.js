import React from "react";
import { Highlight } from "e-ui-react";

const MAPTODOUBLE_EXAMPLE_CONVERTMARKS = `import java.util.stream.IntStream;

public class MapToDoubleExample {
    public static void main(String[] args) {
        IntStream marks = IntStream.of(45, 78, 90);

        marks.mapToDouble(mark -> (double) mark / 100) // convert to percentage
             .forEach(System.out::println);
    }
}`;

const MAPTODOUBLE_OUTPUT_CONVERTMARKS = `0.45
0.78
0.9`;

const MAPTODOUBLE_EXAMPLE_CELSIUS = `public class TemperatureConversion {
    public static void main(String[] args) {
        IntStream celsiusTemps = IntStream.of(0, 25, 100);

        celsiusTemps.mapToDouble(c -> (c * 9.0 / 5) + 32)
                    .forEach(f -> System.out.printf("%.2f°F\n", f));
    }
}`;

const MAPTODOUBLE_OUTPUT_CELSIUS = `32.00°F
77.00°F
212.00°F`;

const MapToDouble = () =>{
 return (<div className="mtop5p lh28p fs16p">
    <div><h5 className="blog-head"><b>1. What is <code>mapToDouble(IntToDoubleFunction)</code>?</b></h5></div>
    <div className="mtop15p"><code><b>mapToDouble(IntToDoubleFunction)</b></code> is an <b>intermediate operation</b> of 
    the <code><b>IntStream</b></code> in Java that:</div>
    <div>
        <ul>
            <li className="mtop5p">Converts an <code><b>IntStream</b></code> into a <code><b>DoubleStream</b></code></li>
            <li className="mtop5p">Applies an <code><b>IntToDoubleFunction</b></code> to each <code><b>int</b></code> value 
            to produce a <code><b>double</b></code></li>
        </ul>
    </div>
    <div className="mtop5p"><h5 className="blog-head"><b>Syntax:</b></h5></div>
    <div className="mtop5p"><Highlight content={`DoubleStream mapToDouble(IntToDoubleFunction mapper)`} lang="java" /></div>

    <div className="mtop15p"><h5 className="blog-head"><b>2. Why and When to Use It?</b></h5></div>
    <div className="mtop15p">Use <code><b>mapToDouble()</b></code> when:</div>
    <div>
        <ul>
            <li className="mtop5p">You're dealing with <code><b>int</b></code> <b>data</b> but need to perform 
            calculations in <code><b>double</b></code> (<b>floating point</b>) format.</li>
            <li className="mtop5p">
                <div>Useful for:</div>
                <ul>
                    <li className="mtop5p"><b>Precision calculations</b> (e.g., percentages, averages)</li>
                    <li className="mtop5p"><b>Unit conversions</b> (e.g., Celsius to Fahrenheit)</li>
                    <li className="mtop5p"><b>Financial operations</b> requiring decimal points</li>
                </ul>
            </li>
        </ul>
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>3. Examples:</b></h5></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Example #1: Convert marks (int) to percentage (double)</b></h5></div>
    <div className="mtop5p"><Highlight content={MAPTODOUBLE_EXAMPLE_CONVERTMARKS} lang="java" /></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Output:</b></h5></div>
    <div className="mtop5p"><Highlight content={MAPTODOUBLE_OUTPUT_CONVERTMARKS} lang="java" /></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Example #2: Celsius to Fahrenheit Conversion</b></h5></div>
    <div className="mtop5p"><Highlight content={MAPTODOUBLE_EXAMPLE_CELSIUS} lang="java" /></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Output:</b></h5></div>
    <div className="mtop5p"><Highlight content={MAPTODOUBLE_OUTPUT_CELSIUS} lang="java" /></div>
 </div>);
};

export default MapToDouble;