import ExcelJS from "exceljs";
import fs from "fs";

export const ReadExcel = async(inputFile, outputFile, businesslogic)=>{
    fs.mkdirSync("output", { recursive: true });
    if (fs.existsSync(outputFile)) { fs.unlinkSync(outputFile); }
    const output = fs.createWriteStream(outputFile, { flags: "a", encoding: "utf8" });
    const workbookReader = new ExcelJS.stream.xlsx.WorkbookReader(inputFile);

    for await (const worksheet of workbookReader) {
        console.log("Sheet:", worksheet.name);

        for await (const row of worksheet) {
            // Skip first row (header)
            if (row.number === 1) { continue; }
            const values = row.values.slice(1);
            businesslogic(values, output);
        }
    }
    output.end();
};
