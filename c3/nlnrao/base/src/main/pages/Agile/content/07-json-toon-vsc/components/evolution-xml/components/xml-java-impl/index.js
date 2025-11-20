import React from "react";
import { Highlight } from "e-ui-react";

const XMLJavaImplementation = () =>{
 const XML_EXAMPLE_JAVA = `import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import org.w3c.dom.Document;
import org.w3c.dom.Element;

public class ConfigParser {
    public static void main(String[] args) {
        try {
            DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
            DocumentBuilder builder = factory.newDocumentBuilder();
            Document doc = builder.parse("config.xml");

            // Normalize the XML structure
            doc.getDocumentElement().normalize();

            Element root = doc.getDocumentElement();

            // Get <name> and <version>
            String engineName = root.getElementsByTagName("name").item(0).getTextContent();
            String version = root.getElementsByTagName("version").item(0).getTextContent();

            // Get retry attempts attribute
            Element retryElement = (Element) doc.getElementsByTagName("retry").item(0);
            String retryAttempts = retryElement.getAttribute("attempts");

            // Print results
            System.out.println("Engine Name: " + engineName);
            System.out.println("Version: " + version);
            System.out.println("Retry Attempts: " + retryAttempts);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}`;
 return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
   <Highlight content={XML_EXAMPLE_JAVA} lang="javascript" />
 </div>);
};

export default XMLJavaImplementation;