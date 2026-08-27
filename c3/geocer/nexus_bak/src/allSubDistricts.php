<?php

require __DIR__.'/../vendor/autoload.php';

use PhpOffice\PhpSpreadsheet\IOFactory;

$file = __DIR__.'/../data/allSubDistricts.xlsx';
$outputFile = __DIR__ . '/../output/allSubDistricts.txt';

if (!file_exists($file)) { die("File does not exist: " . $file); }
if (!is_readable($file)) { die("File exists but is not readable: " . $file); }

// Delete previous output file
if (file_exists($outputFile)) {
    unlink($outputFile);
}

$spreadsheet = IOFactory::load($file);
$worksheet = $spreadsheet->getActiveSheet();

$data = '';
foreach ($worksheet->getRowIterator() as $row) {
    // Get Excel row number and Skip first row (header)
    $rowNumber = $row->getRowIndex();
    if ($rowNumber == 1) { continue; }
    // Process
    $rowData = [];
    foreach ($row->getCellIterator() as $cell) {
        $rowData[] = $cell->getValue();
    }
    // Business Logic
     print_r($rowData);
     $subdistrict_id = $rowData[5];
     $subdistrict = $rowData[7];
     $district_id = $rowData[3];
     $query="INSERT INTO subdistricts(subdistrict_id, subdistrict, district_id) VALUES (".$subdistrict_id.",'".$subdistrict."',".$district_id.");\n";
     $data.=$query;
}

file_put_contents($outputFile, $data, FILE_APPEND | LOCK_EX);
?>