import React from "react";
import { Highlight } from "e-ui-react";

const CONVERT_POM_JAVA = `<dependencies>
    <!-- Jackson Core (JSON) -->
    <dependency>
        <groupId>com.fasterxml.jackson.core</groupId>
        <artifactId>jackson-databind</artifactId>
        <version>2.17.0</version>
    </dependency>

    <!-- Jackson Dataformat XML -->
    <dependency>
        <groupId>com.fasterxml.jackson.dataformat</groupId>
        <artifactId>jackson-dataformat-xml</artifactId>
        <version>2.17.0</version>
    </dependency>

    <!-- YAML Support (TOON & VSC) -->
    <dependency>
        <groupId>org.yaml</groupId>
        <artifactId>snakeyaml</artifactId>
        <version>2.2</version>
    </dependency>

    <!-- org.json -->
    <dependency>
        <groupId>org.json</groupId>
        <artifactId>json</artifactId>
        <version>20240303</version>
    </dependency>
</dependencies>`;

const CONVERT_EXAMPLE_JAVA = `import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.dataformat.xml.XmlMapper;
import org.yaml.snakeyaml.Yaml;
import org.yaml.snakeyaml.DumperOptions;
import org.json.JSONObject;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Map;

public class UniversalConfigConverter {

    private static final ObjectMapper jsonMapper = new ObjectMapper();
    private static final XmlMapper xmlMapper = new XmlMapper();
    private static final Yaml yaml;

    static {
        // YAML Pretty Print
        DumperOptions options = new DumperOptions();
        options.setPrettyFlow(true);
        options.setDefaultFlowStyle(DumperOptions.FlowStyle.BLOCK);
        yaml = new Yaml(options);
    }

    // ------------------------------------------
    // 1. PARSE INPUT (String → Java Map)
    // ------------------------------------------
    public static Map<String, Object> parseData(String input, String fromType) throws Exception {
        fromType = fromType.toLowerCase();

        switch (fromType) {

            case "json":
                return jsonMapper.readValue(input, Map.class);

            case "xml":
                return xmlMapper.readValue(input, Map.class);

            case "toon":
            case "yaml":
            case "vsc":
                return yaml.load(input);

            default:
                throw new IllegalArgumentException("Unsupported input format: " + fromType);
        }
    }

    // ------------------------------------------
    // 2. Dump Data (Map → Target Format String)
    // ------------------------------------------
    public static String dumpData(Map<String, Object> data, String toType) throws Exception {
        toType = toType.toLowerCase();

        switch (toType) {

            case "json":
                return jsonMapper.writerWithDefaultPrettyPrinter().writeValueAsString(data);

            case "xml":
                return xmlMapper.writerWithDefaultPrettyPrinter().writeValueAsString(data);

            case "toon":
            case "yaml":
            case "vsc":
                return yaml.dump(data);

            default:
                throw new IllegalArgumentException("Unsupported output format: " + toType);
        }
    }

    // ------------------------------------------
    // 3. MAIN CONVERSION FUNCTION
    // ------------------------------------------
    public static String convertFormat(String input, String fromType, String toType) throws Exception {
        Map<String, Object> data = parseData(input, fromType);
        return dumpData(data, toType);
    }

    // ------------------------------------------
    // 4. FILE UTILITIES
    // ------------------------------------------
    public static String loadFile(String path) throws IOException {
        return new String(Files.readAllBytes(Paths.get(path)));
    }

    public static void saveFile(String path, String data) throws IOException {
        Files.write(Paths.get(path), data.getBytes());
    }

    public static void convertFile(String inputPath, String fromType, String outPath, String toType) throws Exception {
        String input = loadFile(inputPath);
        String output = convertFormat(input, fromType, toType);
        saveFile(outPath, output);
        System.out.println("Converted " + inputPath + " (" + fromType + ") → " + outPath + " (" + toType + ")");
    }
}`;

const CONVERT_RUNNER_JAVA = `public class TestConverter {
    public static void main(String[] args) throws Exception {

        // Example: XML → JSON
        String xml = UniversalConfigConverter.loadFile("engine.xml");
        String json = UniversalConfigConverter.convertFormat(xml, "xml", "json");
        UniversalConfigConverter.saveFile("engine.json", json);

        // Example: JSON → TOON
        String toon = UniversalConfigConverter.convertFormat(json, "json", "toon");
        UniversalConfigConverter.saveFile("engine.toon", toon);

        // Example: TOON → VSC
        String vsc = UniversalConfigConverter.convertFormat(toon, "toon", "vsc");
        UniversalConfigConverter.saveFile("engine.vsc", vsc);

        // Example: VSC → XML
        String xmlAgain = UniversalConfigConverter.convertFormat(vsc, "vsc", "xml");
        UniversalConfigConverter.saveFile("engine_final.xml", xmlAgain);
    }
}`;

const ConversionJavaImplementation = () =>{
 return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
    <div><h5><b>1. Dependencies (Maven)</b></h5></div>
    <div className="padLeft5p">
        <div>Add these to your <code><b>pom.xml</b></code>:</div>
        <div><Highlight content={CONVERT_POM_JAVA} lang="html" /></div>
    </div>
    <div><h5><b>2. Code</b></h5></div>
    <div className="padLeft5p">
        <div>Create a class <code><b>UniversalConfigConverter.java</b></code>:</div>
        <div><Highlight content={CONVERT_EXAMPLE_JAVA} lang="java" /></div>
    </div>
    <div><h5><b>3. How to Use It?</b></h5></div>
    <div className="padLeft5p">
        <div>Create a simple runner:</div>
        <div><Highlight content={CONVERT_RUNNER_JAVA} lang="java" /></div>
    </div>
 </div>);
};

export default ConversionJavaImplementation;