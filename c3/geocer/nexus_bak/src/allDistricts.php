<?php

require __DIR__.'/../vendor/autoload.php';

use PhpOffice\PhpSpreadsheet\IOFactory;

$file = __DIR__.'/../data/allDistricts.xlsx';
$outputFile = __DIR__ . '/../output/allDistricts.txt';

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
     $state_ut_id = $rowData[1];
     $district_id = $rowData[3];
     $district = $rowData[4];
     $query="INSERT INTO districts(district_id, district, state_ut_id) VALUES (".$district_id.",'".$district."',".$state_ut_id.");\n";
     $data.=$query;
}

file_put_contents($outputFile, $data, FILE_APPEND | LOCK_EX);
?>