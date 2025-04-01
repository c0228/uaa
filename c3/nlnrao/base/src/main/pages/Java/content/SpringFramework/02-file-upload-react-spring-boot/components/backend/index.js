import React from "react";
import { Highlight } from "e-ui-react";
import OrderList from "@MainComponents/order-list/index.js";

const APP_PROPERTIES_FILE1 = `file.upload-dir=uploads/`;

const APP_CONTROLLER_FILE = `@RestController
@RequestMapping("/api/files")
public class FileUploadController {
    private final String uploadDir = "uploads/";

    @PostMapping("/upload")
    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file) {
        try {
            Path path = Paths.get(uploadDir + file.getOriginalFilename());
            Files.copy(file.getInputStream(), path, StandardCopyOption.REPLACE_EXISTING);
            return ResponseEntity.ok("File uploaded successfully: " + file.getOriginalFilename());
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to upload file");
        }
    }
}`;

const APP_CONTROLLER_TESTFILE = `@SpringBootTest
@AutoConfigureMockMvc
public class FileUploadControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void testFileUpload() throws Exception {
        MockMultipartFile file = new MockMultipartFile("file", "test.txt", "text/plain", "Hello, World!".getBytes());
        mockMvc.perform(MockMvcRequestBuilders.multipart("/api/files/upload").file(file))
                .andExpect(status().isOk())
                .andExpect(content().string(containsString("File uploaded successfully")));
    }
}`;


const APP_PROPERTIES_FILE2 = `spring.servlet.multipart.max-file-size=10MB
spring.servlet.multipart.max-request-size=10MB`;

const APP_RUN_COMMAND = `mvn spring-boot:run`;

const Backend = () =>{
 return (<div className="lh28p fs16p mtop15p">
    <div><h2 className="blog-head"><b>Backend: Spring Boot Implementation</b></h2></div>
    <div className="padLeft15p">
        <div className="mtop15p"><h4><b>1. Setting up the Spring Boot project</b></h4></div>
        <div className="mtop15p">
            Create a Spring Boot project using Spring Initializr with the following dependencies:
            <OrderList data={[(<div>Spring Web</div>),
                (<div>Spring Boot DevTools</div>),
                (<div>Lombok</div>),
                (<div>Spring Data JPA (optional if using a database later)</div>)]} />
        </div>

        <div className="mtop15p"><h4><b>2. Configuring File Storage</b></h4></div>
        <div className="mtop15p">First, create a directory where the files will be stored. Define this path in 
            <code><b>application.properties</b></code>:</div>
        <div className="mtop15p">
            <Highlight content={APP_PROPERTIES_FILE1} lang="java" />
        </div>
        <div className="mtop15p">
            Ensure that the<code><b>uploads/</b></code>  directory exists in the project root.
        </div>

        <div className="mtop15p"><h4><b>3. Implementing the File Upload API</b></h4></div>
        <div className="mtop15p">Create a controller <code><b>FileUploadController.java</b></code> to handle file uploads.</div>
        <div className="mtop15p">
            <Highlight content={APP_CONTROLLER_FILE} lang="java" />
        </div>

        <div className="mtop15p"><h4><b>4. Unit Testing FileUploadController</b></h4></div>
        <div className="mtop15p">Create <code><b>FileUploadControllerTest.java</b></code> inside 
            <code><b>src/test/java/com/example/demo/controller/</b></code>.</div>
        <div className="mtop15p">
            <Highlight content={APP_CONTROLLER_TESTFILE} lang="java" />
        </div>
        

        <div className="mtop15p"><h4><b>5. Enabling File Upload Size Configuration</b></h4></div>
        <div className="mtop15p">
            Modify <code><b>application.properties</b></code> to configure the file upload limit:
        </div>
        <div className="mtop15p">
            <Highlight content={APP_PROPERTIES_FILE2} lang="java" />
        </div>

        <div className="mtop15p"><h4><b>6. Running the Backend</b></h4></div>
        <div className="mtop15p">Execute the Spring Boot application:</div>
        <div className="mtop15p">
            <Highlight content={APP_RUN_COMMAND} lang="java" />
        </div>
        <div className="mtop15p">The API will be available at <code><b>http://localhost:8080/api/files/upload</b></code>.</div>
    </div>
 </div>);
};

export default Backend;