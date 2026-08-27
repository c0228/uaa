<?php

require __DIR__ . '/../vendor/autoload.php';

use OpenSpout\Reader\XLSX\Reader;

$inputDirectory = __DIR__ . '/../data/villages';
$outputFile     = __DIR__ . '/../output/allVillages.txt';

$flushEvery = 5000;

// --------------------------------------------------
// Validate input directory
// --------------------------------------------------

if (!is_dir($inputDirectory)) {
    die("Directory does not exist: " . $inputDirectory . PHP_EOL);
}

if (!is_readable($inputDirectory)) {
    die("Directory is not readable: " . $inputDirectory . PHP_EOL);
}

// --------------------------------------------------
// Create output directory
// --------------------------------------------------

$outputDirectory = dirname($outputFile);

if (!is_dir($outputDirectory)) {
    mkdir($outputDirectory, 0777, true);
}

// --------------------------------------------------
// Delete previous output
// --------------------------------------------------

if (file_exists($outputFile)) {
    unlink($outputFile);
}

// --------------------------------------------------
// Find XLSX files
// --------------------------------------------------

$files = glob($inputDirectory . '/*.xlsx');

if (!$files) {
    die(
        "No XLSX files found in: " .
        $inputDirectory .
        PHP_EOL
    );
}

sort($files);

// --------------------------------------------------
// Open output file
// --------------------------------------------------

$outputHandle = fopen($outputFile, 'ab');

if ($outputHandle === false) {
    die(
        "Unable to open output file: " .
        $outputFile .
        PHP_EOL
    );
}

// --------------------------------------------------
// Counters
// --------------------------------------------------

$totalFiles    = 0;
$totalRows     = 0;
$totalInserted = 0;
$totalSkipped  = 0;

// --------------------------------------------------
// Process files
// --------------------------------------------------

foreach ($files as $file) {

    $totalFiles++;

    echo PHP_EOL;
    echo "========================================" . PHP_EOL;
    echo "Processing: " . basename($file) . PHP_EOL;
    echo "========================================" . PHP_EOL;

    $reader = new Reader();

    try {

        $reader->open($file);

        $fileRows     = 0;
        $fileInserted = 0;
        $fileSkipped  = 0;

        foreach ($reader->getSheetIterator() as $sheet) {

            echo "Sheet: " . $sheet->getName() . PHP_EOL;

            foreach ($sheet->getRowIterator() as $row) {

                $fileRows++;
                $totalRows++;

                // ----------------------------------------
                // Skip header
                // ----------------------------------------

                if ($fileRows === 1) {
                    continue;
                }

                // ----------------------------------------
                // Get cells using getCellAt()
                //
                // OpenSpout uses 1-based column indexes
                //
                // Excel:
                //
                // Column F  = 6
                // Column H  = 8
                // Column J  = 10
                // Column L  = 12
                // ----------------------------------------

                $subdistrictCell = $row->getCellAt(6);
                $villageIdCell    = $row->getCellAt(8);
                $villageCell      = $row->getCellAt(10);
                $categoryCell     = $row->getCellAt(12);

                $subdistrict_id = $subdistrictCell->getValue();
                $village_id     = $villageIdCell->getValue();
                $village        = $villageCell->getValue();
                $category       = $categoryCell->getValue();

                // ----------------------------------------
                // Validate Village ID
                // ----------------------------------------

                if (
                    $village_id === null ||
                    trim((string)$village_id) === ''
                ) {
                    $fileSkipped++;
                    $totalSkipped++;
                    continue;
                }

                // ----------------------------------------
                // Validate Village
                // ----------------------------------------

                if (
                    $village === null ||
                    trim((string)$village) === ''
                ) {
                    $fileSkipped++;
                    $totalSkipped++;
                    continue;
                }

                // ----------------------------------------
                // Convert values
                // ----------------------------------------

                $village_id     = trim((string)$village_id);
                $village        = trim((string)$village);
                $category       = trim((string)$category);
                $subdistrict_id = trim((string)$subdistrict_id);

                // ----------------------------------------
                // Escape SQL strings
                // ----------------------------------------

                $village  = addslashes($village);
                $category = addslashes($category);

                // ----------------------------------------
                // Convert numeric values
                // ----------------------------------------

                $village_id = (int)$village_id;

                if ($subdistrict_id === '') {
                    $subdistrict_id = 'NULL';
                } else {
                    $subdistrict_id = (int)$subdistrict_id;
                }

                // ----------------------------------------
                // Generate SQL
                // ----------------------------------------

                $query =
                    "INSERT INTO villages " .
                    "(village_id, village, category, subdistrict_id) " .
                    "VALUES (" .
                    $village_id . "," .
                    "'" . $village . "'," .
                    "'" . $category . "'," .
                    $subdistrict_id .
                    ");" .
                    PHP_EOL;

                // ----------------------------------------
                // Write immediately
                // ----------------------------------------

                fwrite($outputHandle, $query);

                $fileInserted++;
                $totalInserted++;

                // ----------------------------------------
                // Progress
                // ----------------------------------------

                if ($fileInserted % $flushEvery === 0) {

                    fflush($outputHandle);

                    echo
                        "Processed: " .
                        number_format($fileInserted) .
                        " rows | Total: " .
                        number_format($totalInserted) .
                        PHP_EOL;
                }
            }
        }

        $reader->close();

        echo PHP_EOL;
        echo "File completed: " . basename($file) . PHP_EOL;
        echo "Rows read     : " . number_format($fileRows) . PHP_EOL;
        echo "SQL generated : " . number_format($fileInserted) . PHP_EOL;
        echo "Skipped       : " . number_format($fileSkipped) . PHP_EOL;

    } catch (Throwable $e) {

        echo PHP_EOL;
        echo "ERROR processing: " . basename($file) . PHP_EOL;
        echo $e->getMessage() . PHP_EOL;

        try {
            $reader->close();
        } catch (Throwable $closeException) {
            // Ignore
        }

        continue;
    }

    // Free memory
    gc_collect_cycles();
}

// --------------------------------------------------
// Close output
// --------------------------------------------------

fflush($outputHandle);
fclose($outputHandle);

// --------------------------------------------------
// Final report
// --------------------------------------------------

echo PHP_EOL;
echo "========================================" . PHP_EOL;
echo "PROCESS COMPLETED" . PHP_EOL;
echo "========================================" . PHP_EOL;

echo "Files processed : " .
    number_format($totalFiles) .
    PHP_EOL;

echo "Rows read       : " .
    number_format($totalRows) .
    PHP_EOL;

echo "SQL generated   : " .
    number_format($totalInserted) .
    PHP_EOL;

echo "Rows skipped    : " .
    number_format($totalSkipped) .
    PHP_EOL;

echo "Output file     : " .
    $outputFile .
    PHP_EOL;

echo "========================================" . PHP_EOL;

?>