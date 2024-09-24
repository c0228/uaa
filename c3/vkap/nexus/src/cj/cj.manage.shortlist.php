<?php
// Deletes PDF Files generated in data/quotations before 30 days
// Set the directory where files are located
$directory = './../../data/quotations/';

// Set the time limit (30 days ago)
$timeLimit = strtotime('-30 days'); // -1 day/-3 days/-30 days

// Open the directory
if ($handle = opendir($directory)) {

    // Loop through all the files in the directory
    while (false !== ($file = readdir($handle))) {

        // Skip '.' and '..' special directories
        if ($file != "." && $file != "..") {

            // Check if the file follows the required format (date('YmdHis') . '-'. $studentFullName . '.pdf')
            if (preg_match('/^(\d{14})-(.*)\.pdf$/', $file, $matches)) {

                // Extract the date part (first 14 characters)
                $fileDate = $matches[1];

                // Convert the date string to a Unix timestamp
                $fileTimestamp = DateTime::createFromFormat('YmdHis', $fileDate)->getTimestamp();

                // If the file is older than 30 days, delete it
                if ($fileTimestamp < $timeLimit) {
                    $filePath = $directory . $file;
                    if (unlink($filePath)) {
                        echo "Deleted file: $filePath\n";
                    } else {
                        echo "Failed to delete file: $filePath\n";
                    }
                }
            }
        }
    }

    // Close the directory handle
    closedir($handle);
}

?>