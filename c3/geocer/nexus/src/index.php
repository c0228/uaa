<?php

require __DIR__.'/../vendor/autoload.php';

use PhpOffice\PhpSpreadsheet\IOFactory;

$file = __DIR__.'/../data/allStates.xlsx';
$outputFile = __DIR__ . '/../output/allStates.txt';

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
    $state_ut = $rowData[3];
    $country = 'India';
    $type =  ($rowData[7]=='S')?'STATE':'UT';
    $query="INSERT INTO states(state_ut, country, type) VALUES ('".$state_ut."','".$country."','".$type."');\n";
    $data.=$query;
    print_r($query);
}

file_put_contents($outputFile, $data, FILE_APPEND | LOCK_EX);
?>