<?php
require './../../vendor/autoload.php';
use PhpOffice\PhpSpreadsheet\IOFactory;
/* PROD: ZIP Extension at PHP should be enabled to make this workout */

class ExcelManager {

 private $filePath;

 public function __construct($filePath) {
  $this->filePath = $filePath;
 }

 function getExcelData(){
  // Load the Excel file
  $spreadsheet = IOFactory::load($this->filePath);

  // Get all sheet names
  $sheetNames = $spreadsheet->getSheetNames();

  $excelData = array();

  // Print the sheet names and data
  foreach ($sheetNames as $sheetIndex => $sheetName) {
    // Get the current sheet
    $sheet = $spreadsheet->getSheetByName($sheetName);

    // Get the highest row and column numbers
    $highestRow = $sheet->getHighestRow();
    $highestColumn = $sheet->getHighestColumn();

    // Create an empty array to store the JSON data
    $jsonArray = [];

    // Iterate over each row, starting from the second row (row 1)
     $keys=array();
     for ($row = 1; $row <= $highestRow; $row++) {
        $jsonData = array();
        for ($col = 'A'; $col <= $highestColumn; $col++) {
            $columnIndex = ord($col) - 65;
            $cellValue = $sheet->getCell($col . $row)->getValue();
            if($row==1){ $keys[count($keys)] = $cellValue ?? ''; }
            else {
              $jsonData[$keys[$columnIndex]] = $cellValue ?? '';
            }
        }
        if($row>1){ $jsonArray[] = $jsonData; }
    }
    $excelData[$sheetName] = $jsonArray;
  }
  return json_encode($excelData, JSON_PRETTY_PRINT);
 }

}

?>