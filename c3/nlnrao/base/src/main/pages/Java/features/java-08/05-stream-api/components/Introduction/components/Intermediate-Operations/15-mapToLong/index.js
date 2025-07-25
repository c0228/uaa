import React from "react";
import { Highlight } from "e-ui-react";

const MAPTOLONG_EXAMPLE_INTLONGSTREAM = `import java.util.stream.IntStream;

public class MapToLongExample {
    public static void main(String[] args) {
        LongStream longStream = IntStream.range(1, 5)
                                         .mapToLong(i -> (long) i * i); // square as long

        longStream.forEach(System.out::println);
    }
}`;

const MAPTOLONG_OUTPUT_INTLONGSTREAM = `1
4
9
16`;

const MAPTOLONG_EXAMPLE_PRICE = `public class PriceConversionExample {
    public static void main(String[] args) {
        // Prices in dollars represented in integer (e.g., $1 = 100 cents)
        IntStream pricesInCents = IntStream.of(99, 199, 250);

        LongStream pricesInPaise = pricesInCents.mapToLong(cents -> cents * 75L); // Convert to INR paise

        pricesInPaise.forEach(System.out::println); // Output in paise
    }
}`;

const MAPTOLONG_OUTPUT_PRICE = `7425
14925
18750`;

const MapToLong = () =>{
 return (<div className="mtop5p lh28p fs16p">
    <div><h5 className="blog-head"><b>1. What is <code>mapToLong(IntToLongFunction)</code></b>?</h5></div>
    <div className="mtop15p"><code><b>mapToLong(IntToLongFunction)</b></code> is an intermediate operation 
    on <code><b>IntStream</b></code> that:</div>
    <div>
        <ul>
            <li className="mtop5p">Converts an <code><b>IntStream</b></code> to a <code><b>LongStream</b></code>.</li>
            <li className="mtop5p">Uses an <code><b>IntToLongFunction</b></code> to map 
            each <code><b>int</b></code> to a <code><b>long</b></code>.</li>
        </ul>
    </div>

    <div><h5 className="blog-head"><b>2. Why and When to Use It?</b></h5></div>
    <div className="mtop15p">Use <code><b>mapToLong()</b></code >when:</div>
    <div>
        <ul>
            <li className="mtop5p">You’re working with <b>primitive</b> <code><b>int</b></code> <b>values</b>.</li>
            <li className="mtop5p">You want to <b>transform</b> or <b>promote</b> them to <code><b>long</b></code>.</li>
            <li className="mtop5p">Useful in cases like mathematical operations, scaling, or converting types.</li>
        </ul>
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>Syntax:</b></h5></div>
    <div className="mtop5p"><Highlight content={`LongStream mapToLong(IntToLongFunction mapper)`} lang="java" /></div>

    <div className="mtop15p"><h5 className="blog-head"><b>3. Examples:</b></h5></div>
    <div className="mtop15p"><h5 className="blog-head"><b>Example #1: Convert IntStream to LongStream (Square as long)</b></h5></div>
    <div className="mtop5p"><Highlight content={MAPTOLONG_EXAMPLE_INTLONGSTREAM} lang="java" /></div>
    <div className="mtop5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={MAPTOLONG_OUTPUT_INTLONGSTREAM} lang="java" /></div>
    <div className="mtop15p"><h5 className="blog-head"><b>Example #2: Price in Cents → Price in Paise</b></h5></div>
    <div className="mtop5p"><Highlight content={MAPTOLONG_EXAMPLE_PRICE} lang="java" /></div>
    <div className="mtop5p"><b>Output (assuming 1 USD = ₹75):</b></div>
    <div className="mtop5p"><Highlight content={MAPTOLONG_OUTPUT_PRICE} lang="java" /></div>
 </div>);
};

export default MapToLong;