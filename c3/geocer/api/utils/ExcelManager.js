import ExcelJS from "exceljs";
import path from "path";
import fs from "fs";

export const ReadExcel = async(inputFile, outputFile, businesslogic)=>{
    // Dynamically create the directory where outputFile will be written
    const outputDir = path.dirname(outputFile);
    fs.mkdirSync(outputDir, { recursive: true });
    // Delete existing output file
    if (fs.existsSync(outputFile)) { fs.unlinkSync(outputFile); }
    // Create output stream
    const output = fs.createWriteStream(outputFile, { flags: "a", encoding: "utf8" });
    const workbookReader = new ExcelJS.stream.xlsx.WorkbookReader(inputFile);

    for await (const worksheet of workbookReader) {
        console.log("Sheet:", worksheet.name);

        for await (const row of worksheet) {
            // Skip first row (header)
            if (row.number === 1) { continue; }
            const values = row.values.slice(1);
            await businesslogic(values, output);
        }
    }
    output.end();
};
