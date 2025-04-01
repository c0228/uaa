import React from "react";
import { Highlight } from "e-ui-react";

const REACT_APP_CREATE = `npx create-react-app file-upload-client
cd file-upload-client
npm install axios @mui/material @mui/icons-material`;

const REACT_APP_FILEUPLOAD = `import React, { useState } from "react";
import axios from "axios";
import { Button, CircularProgress } from "@mui/material";

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e) => setFile(e.target.files[0]);

    const handleUpload = async () => {
        if (!file) return;
        setLoading(true);
        const formData = new FormData();
        formData.append("file", file);
        try {
            await axios.post("http://localhost:8080/api/files/upload", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            alert("File uploaded successfully!");
        } catch (error) {
            alert("Failed to upload file");
        }
        setLoading(false);
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <Button onClick={handleUpload} variant="contained" color="primary" disabled={!file || loading}>
                {loading ? <CircularProgress size={24} /> : "Upload File"}
            </Button>
        </div>
    );
};

export default FileUpload;`;

const REACT_APP_TESTFILEUPLOAD = `import { render, fireEvent, screen } from "@testing-library/react";
import FileUpload from "./FileUpload";
import axios from "axios";

jest.mock("axios");

test("renders FileUpload component", () => {
    render(<FileUpload />);
    expect(screen.getByText("Upload File")).toBeInTheDocument();
});

test("file upload success", async () => {
    axios.post.mockResolvedValue({ data: "File uploaded successfully!" });
    render(<FileUpload />);

    const fileInput = screen.getByLabelText(/file/i);
    fireEvent.change(fileInput, { target: { files: [new File(["file content"], "test.txt", { type: "text/plain" })] } });

    fireEvent.click(screen.getByText("Upload File"));
    expect(await screen.findByText("Upload File")).toBeInTheDocument();
});`;

const REACT_APP_FILE = `import React from "react";
import FileUpload from "./components/FileUpload";

function App() {
    return (
        <div>
            <h2>File Upload Platform</h2>
            <FileUpload />
        </div>
    );
}

export default App;`;

const Frontend = () =>{
 return (<div className="lh28p fs16p mtop15p">
    <div><h2 className="blog-head"><b>Frontend: React.js Implementation</b></h2></div>

    <div className="mtop15p"><h4><b>1. Setting up the React Project</b></h4></div>
    <div className="padLeft15p">
        <div className="mtop15p">Create a React application using:</div>
        <div className="mtop15p">
            <Highlight content={REACT_APP_CREATE} lang="html" />
        </div>
    </div>

    <div className="mtop15p"><h4><b>2. Creating the File Upload Component</b></h4></div>
    <div className="padLeft15p">
        <div className="mtop15p">Inside <code><b>src/components</b></code>, create <code><b>FileUpload.js</b></code>:</div>
        <div className="mtop15p">
            <Highlight content={REACT_APP_FILEUPLOAD} lang="html" />
        </div>
    </div>

    <div className="mtop15p"><h4><b>3. Unit Testing <code>FileUpload.js</code></b></h4></div>
    <div className="padLeft15p">
        <div className="mtop15p">Create <code><b>FileUpload.test.js</b></code> inside <code><b>src/components/</b></code>:</div>
        <div className="mtop15p">
            <Highlight content={REACT_APP_TESTFILEUPLOAD} lang="html" />
        </div>
    </div>

    <div className="mtop15p"><h4><b>4. Integrating the Component</b></h4></div>
    <div className="padLeft15p">
        <div className="mtop15p">Modify <code><b>src/App.js</b></code> to include <code><b>FileUpload.js</b></code>:</div>
        <div className="mtop15p">
            <Highlight content={REACT_APP_FILE} lang="html" />
        </div>
    </div>

    <div className="mtop15p"><h4><b>5. Running the React Frontend</b></h4></div>
    <div className="padLeft15p">
        <div className="mtop15p">Start the React application:</div>
        <div className="mtop15p">
            <Highlight content={`npm start`} lang="html" />
        </div>
        <div className="mtop15p">The application will be available at <code><b>http://localhost:3000/</b></code>.</div>
    </div>

 </div>);
};

export default Frontend;