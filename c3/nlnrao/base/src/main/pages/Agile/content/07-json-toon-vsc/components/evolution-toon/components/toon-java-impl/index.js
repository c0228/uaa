import React from "react";
import { Highlight } from "e-ui-react";

const TOON_POM_JAVA = `<dependency>
    <groupId>org.yaml</groupId>
    <artifactId>snakeyaml</artifactId>
    <version>2.2</version>
</dependency>`;

const TOON_EXAMPLE_JAVA = `import java.io.FileInputStream;
import java.util.Map;
import org.yaml.snakeyaml.Yaml;

public class ToonReader {
    public static void main(String[] args) {
        try {
            Yaml yaml = new Yaml();
            Map<String, Object> toonData = yaml.load(new FileInputStream("config.toon"));

            Map<String, Object> engine = (Map<String, Object>) toonData.get("engine");
            Map<String, Object> rules = (Map<String, Object>) toonData.get("rules");

            System.out.println("Engine: " + engine.get("name"));
            System.out.println("Steps: " + toonData.get("steps"));
            System.out.println("Min Age: " + rules.get("min_age"));

        } catch (Exception e) {
            System.out.println("Error reading TOON/YAML: " + e.getMessage());
        }
    }
}`;

const TOONJavaImplementation = () =>{
 return (<div style={{ border:'1px solid #ccc', backgroundColor:'#fff', padding:'15px' }}>
    <div><b>1. Maven Dependency:</b></div>
    <div><Highlight content={TOON_POM_JAVA} lang="java" /></div>
    <div><b>2. Code:</b></div>
    <div><Highlight content={TOON_EXAMPLE_JAVA} lang="java" /></div>
 </div>);
};

export default TOONJavaImplementation;