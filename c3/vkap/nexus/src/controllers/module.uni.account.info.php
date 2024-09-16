<?php 

header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json; charset=utf-8');
//
require_once './../core/app.database.php';
require_once './../core/app.initiator.php';
require_once './../utils/ExcelManager.php';
require_once './../repo/data.file.upload.logs.php';
require_once './../repo/data.university.account.php';

require_once './../utils/FileManager.php';

require './../../vendor/autoload.php';

$target_dir = './../../uploads';

function uploadUniversityData($fileName, $jsonData, $sheetName){
  global $universityAccountModule;
  global $database;
  global $excelLogModule;
  $universities = $jsonData->{$sheetName}?? [];
  foreach ($universities as $university) {
   $universityId = $university->{"University Id"} ?? '';
   $universityName = $university->{"University Name"} ?? '';
   $location = $university->{"Location"} ?? '';
   $country = $university->{"Country"} ?? '';
   $toefl_OS = $university->{"TOEFL_OverallScore"} ?? '0';
   $toefl_r = $university->{"TOEFL_Reading"} ?? '0';
   $toefl_l = $university->{"TOEFL_Listening"} ?? '0';
   $toefl_w = $university->{"TOEFL_Writing"} ?? '0';
   $toefl_s = $university->{"TOEFL_Speaking"} ?? '0';
   $pte_OS = $university->{"PTE_OverallScore"} ?? '0';
   $pte_r = $university->{"PTE_Reading"} ?? '0';
   $pte_l = $university->{"PTE_Listening"} ?? '0';
   $pte_w = $university->{"PTE_Writing"} ?? '0';
   $pte_s = $university->{"PTE_Speaking"} ?? '0';
   $ielts_OS = $university->{"IELTS_OverallScore"} ?? '0';
   $ielts_r = $university->{"IELTS_Reading"} ?? '0';
   $ielts_l = $university->{"IELTS_Listening"} ?? '0';
   $ielts_w = $university->{"IELTS_Writing"} ?? '0';
   $ielts_s = $university->{"IELTS_Speaking"} ?? '0';
   $duolingo = $university->{"Duolingo"} ?? '0';
   $gre = $university->{"GRE"} ?? '0';
   $gpa = $university->{"GPA"} ?? '0';
  
   $logData = array();
   $logData["CURRENT_DATA"] =  $university;
   $queryExecutionStatus = 'Failed';
   $operation = 'C';
   $universityDataQuery = $universityAccountModule->query_view_university($universityId);
   $universityData = json_decode( $database->getJSONData($universityDataQuery) );
   // Check University Id exists in uni_account_info,
   if(count($universityData)>0){ // EXISTS - UPDATE
    $operation = 'U';
    $logData["PREVIOUS_DATA"] =  $universityData;
    $universityUpdateQuery = $universityAccountModule->query_update_university($universityId, $universityName, $location, 
              $country, $toefl_OS, $toefl_r, $toefl_l, $toefl_w, $toefl_s, $pte_OS, $pte_r, $pte_l, $pte_w, $pte_s, 
              $ielts_OS, $ielts_r, $ielts_l, $ielts_w, $ielts_s, $duolingo, $gre, $gpa);
    $queryExecutionStatus = $database->addupdateData($universityUpdateQuery);
   } else { // NOT EXIST - ADD
    $universityInsertionQuery = $universityAccountModule->query_add_university($universityId, $universityName, $location, 
      $country, $toefl_OS, $toefl_r, $toefl_l, $toefl_w, $toefl_s, $pte_OS, $pte_r, $pte_l, $pte_w, $pte_s, $ielts_OS, 
      $ielts_r, $ielts_l, $ielts_w, $ielts_s, $duolingo, $gre, $gpa);
    $queryExecutionStatus = $database->addupdateData($universityInsertionQuery);
   }
   $logQuery = $excelLogModule->query_add_uploadLogs($fileName, $sheetName, $operation, json_encode($logData), $queryExecutionStatus);
   $database->addupdateData($logQuery);
 }
}

function uploadCourseData($fileName, $jsonData, $sheetName){
  global $universityAccountModule;
  global $database;
  global $excelLogModule;
  $courses = $jsonData->{$sheetName}?? [];

  foreach ($courses as $course) {
   $courseId = $course->{"Course Id"} ?? '';
   $universityId = $course->{"University Id"} ?? '';
   $courseName = $course->{"Course Name"} ?? '';
   $courseType = $course->{"Course Type"} ?? '';
   $duration = $course->{"Duration"} ?? '';
   $fees = $course->{"Fees"} ?? '';
   $leavingExpenses = $course->{"Leaving Expenses"} ?? '';
   $initDeposit = $course->{"Initial Deposit"} ?? '';
   $appFees = $course->{"Application Fees"} ?? '';
   $deadline = $course->{"Deadline"} ?? '';
   $courseURL = $course->{"Course URL"} ?? '';
   
   $logData = array();
   $logData["CURRENT_DATA"] =  $course;
   $queryExecutionStatus = 'Failed';
   $operation = 'C';

   $coursesDataQuery = $universityAccountModule->query_view_courseInfo($courseId);
   $courseData = json_decode( $database->getJSONData($coursesDataQuery) );
   // Check Course Id exists in uni_account_info,
   if(count($courseData)>0){ // EXISTS - UPDATE
    $operation = 'U';
    $logData["PREVIOUS_DATA"] =  $courseData;
    $universityUpdateQuery = $universityAccountModule->query_update_courseInfo($courseId, $universityId, 
        $courseName, $courseType, $duration, $fees, $leavingExpenses, $initDeposit, $appFees, $deadline, $courseURL);
    $queryExecutionStatus = $database->addupdateData($universityUpdateQuery);
   } else {
     $universityInsertionQuery = $universityAccountModule->query_add_courseInfo($courseId, $universityId, $courseName, $courseType, 
          $duration, $fees, $leavingExpenses, $initDeposit, $appFees, $deadline, $courseURL);
     $queryExecutionStatus = $database->addupdateData($universityInsertionQuery);
   }
  
   $logQuery = $excelLogModule->query_add_uploadLogs($fileName, $sheetName, $operation, json_encode($logData), $queryExecutionStatus);
   $database->addupdateData($logQuery);
   
  }
}

if($_GET["action"]=='UNIVERSITY_BULK_UPLOAD' && $_SERVER['REQUEST_METHOD']=='POST'){
  $htmlData = json_decode( file_get_contents('php://input'), true );
  $targetDirectory = ''; if( array_key_exists("targetDirectory", $htmlData) ){ $targetDirectory = $htmlData["targetDirectory"]; }
  $fileName  = ''; if( array_key_exists("fileName", $htmlData) ){ $fileName = $htmlData["fileName"]; }

  // Upload Execution of UNIVERSITIES Sheet
  foreach($fileName as $fName){
     // Delete Rows with FileName at Table "log_upload_xlsx"
    $deleteLogQuery = $excelLogModule->query_delete_uploadLogs($fName);
    $database->addupdateData($deleteLogQuery);

    // Get Data from Excel File
    $excelManager = new ExcelManager($target_dir.$targetDirectory.$fName);
    $jsonData = json_decode($excelManager->getExcelData());

    // Uploading Data from Each Sheet
    uploadUniversityData($fName, $jsonData, 'UNIVERSITIES');
    uploadCourseData($fName, $jsonData, 'COURSES');
  }
} 
else if($_GET["action"]=='UNIVERSITY_UPLOAD_FILES' && $_SERVER['REQUEST_METHOD']=='GET'){
  $filesList = listOfFolders($target_dir);
  echo json_encode( $filesList );
} 
else if($_GET["action"]=='UNIVERSITY_UPLOAD_LOGS' && $_SERVER['REQUEST_METHOD']=='POST'){
  $htmlData = json_decode( file_get_contents('php://input'), true );
  $fileName = ''; if( array_key_exists("fileName", $htmlData) ){ $fileName = $htmlData["fileName"]; }
  
  // Output Display
  $viewLogQuery = $excelLogModule->query_view_uploadLogs($fileName);
  echo $database->getJSONData($viewLogQuery);
}
else  if($_GET["action"]=='UNIVERSITY_COUNTRIES' && $_SERVER['REQUEST_METHOD']=='GET'){
  $listCountriesQuery = $universityAccountModule->query_view_countries();
  $listCountries = json_decode($database->getJSONData($listCountriesQuery));
  // Initialize the output array
  $output = [];
  // Loop through each item in the input array
  foreach ($listCountries as $item) {
    $country = $item->{'country'};
    $output[] = ['id' => $country, 'label' => $country, 'value' => $country];
  }
  echo json_encode($output);
}

