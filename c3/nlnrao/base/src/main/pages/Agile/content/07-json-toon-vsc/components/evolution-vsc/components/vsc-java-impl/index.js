import React from "react";
import { Highlight } from "e-ui-react";

const VSC_POM_JAVA = `<dependency>
    <groupId>org.yaml</groupId>
    <artifactId>snakeyaml</artifactId>
    <version>2.2</version>
</dependency>`;

const VSC_EXAMPLE_JAVA = `import java.io.FileInputStream;
import java.util.Map;
import org.yaml.snakeyaml.Yaml;

public class VSCReader {

    public static Map<String, Object> loadVSC(String path) throws Exception {
        Yaml yaml = new Yaml();
        Map<String, Object> data = yaml.load(new FileInputStream(path));

        if (!data.containsKey("vsc")) {
            throw new IllegalArgumentException("Invalid VSC: Missing version key");
        }

        System.out.println("VSC Version: " + data.get("vsc"));
        return data;
    }

    public static void main(String[] args) {
        try {
            Map<String, Object> vscData = loadVSC("config.vsc");

            Map<String, Object> config = (Map<String, Object>) vscData.get("config");
            System.out.println("Engine: " + config.get("engine"));
        } catch (Exception e) {
            System.out.println("Error loading VSC: " + e.getMessage());
        }
    }
}`;

const VSCJavaImplementation = () =>{
 return (<div style={{ border:'1px solid #ccc', backgroundColor:'#fff', padding:'15px' }}>
    <div><h5><b>1. Maven Dependency:</b></h5></div>
    <div><Highlight content={VSC_POM_JAVA} lang="java" /></div>
    <div><h5><b>2. Code:</b></h5></div>
    <div><Highlight content={VSC_EXAMPLE_JAVA} lang="java" /></div>
 </div>);
};

export default VSCJavaImplementation;