import React from "react";
import { Highlight } from "e-ui-react";

const JSON_POM_JAVA = `<dependency>
    <groupId>org.json</groupId>
    <artifactId>json</artifactId>
    <version>20231013</version>
</dependency>`;

const JSON_EXAMPLE_JAVA = `import java.nio.file.Files;
import java.nio.file.Paths;
import org.json.JSONObject;

public class ConfigReader {
    public static void main(String[] args) {
        try {
            String raw = new String(Files.readAllBytes(Paths.get("config.json")));
            JSONObject data = new JSONObject(raw);

            System.out.println("Engine: " + data.getString("engine"));
            System.out.println("Retry Attempts: " + 
                data.getJSONObject("settings")
                    .getJSONObject("retry")
                    .getInt("attempts")
            );

        } catch (Exception e) {
            System.out.println("Error reading config: " + e.getMessage());
        }
    }
}`;

const JSONJavaImplementation = () =>{
 return (<div style={{ border:'1px solid #ccc', backgroundColor:'#fff', padding:'15px' }}>
    <div><b>1. Maven Dependency:</b></div>
    <div><Highlight content={JSON_POM_JAVA} lang="java" /></div>
    <div><b>2. Code:</b></div>
    <div><Highlight content={JSON_EXAMPLE_JAVA} lang="java" /></div>
 </div>);
};

export default JSONJavaImplementation;