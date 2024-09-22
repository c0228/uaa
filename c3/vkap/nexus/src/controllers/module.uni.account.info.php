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
   $intake = $university->{"Intake"} ?? '';
  
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
              $ielts_OS, $ielts_r, $ielts_l, $ielts_w, $ielts_s, $duolingo, $gre, $gpa, $intake);
    $queryExecutionStatus = $database->addupdateData($universityUpdateQuery);
   } else { // NOT EXIST - ADD
    $universityInsertionQuery = $universityAccountModule->query_add_university($universityId, $universityName, $location, 
      $country, $toefl_OS, $toefl_r, $toefl_l, $toefl_w, $toefl_s, $pte_OS, $pte_r, $pte_l, $pte_w, $pte_s, $ielts_OS, 
      $ielts_r, $ielts_l, $ielts_w, $ielts_s, $duolingo, $gre, $gpa, $intake);
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
  $fileName  = []; if( array_key_exists("fileName", $htmlData) ){ $fileName = $htmlData["fileName"]; }

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
else if($_GET["action"]=='UNIVERSITY_UPLOAD_LOGS' && $_SERVER['REQUEST_METHOD']=='GET'){
  if(isset($_GET["fileName"])){
    $fileName = ''; if(isset($_GET["fileName"])){ $fileName=$_GET["fileName"]; }
    // Output Display
    $result = array();

    $query1 = $excelLogModule->query_count_uploadLogs($fileName);
    $data1 = json_decode( $database->getJSONData($query1) );
    $result["totalCount"] = $data1[0]->{"totalCount"};

    $query2 = $excelLogModule->query_view_uploadLogs($fileName);
    $result["data"] = json_decode ( $database->getJSONData($query2) );

    echo json_encode( $result );
  } else {
      $message = 'Missing';
      if(!isset($_GET["fileName"])){ $message.=' fileName,'; }
      $result = array();
      $result["status"] = "FAILED";
      $result["message"] = $message;
      echo json_encode($result);
  }
  
  
}
else if($_GET["action"]=='UNIVERSITY_COUNTRIES' && $_SERVER['REQUEST_METHOD']=='GET'){
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
else if($_GET["action"]=='UNIVERSITY_FILTER_LIST' && $_SERVER['REQUEST_METHOD']=='POST'){
  $htmlData = json_decode( file_get_contents('php://input'), true );
  $search  = ''; if( array_key_exists("search", $htmlData) ){ $search = $htmlData["search"]; }
  $start  = ''; if( array_key_exists("start", $htmlData) ){ $start = $htmlData["start"]; }
  $end  = ''; if( array_key_exists("end", $htmlData) ){ $end = $htmlData["end"]; }
  $degree  = ''; if( array_key_exists("degree", $htmlData) ){ $degree = $htmlData["degree"]; }
  $gre  = ''; if( array_key_exists("gre", $htmlData) ){ $gre = $htmlData["gre"]; }
  $duolingo  = ''; if( array_key_exists("duolingo", $htmlData) ){ $duolingo = $htmlData["duolingo"]; }
  $ielts_l  = ''; if( array_key_exists("ielts_l", $htmlData) ){ $ielts_l = $htmlData["ielts_l"]; }
  $ielts_o  = ''; if( array_key_exists("ielts_o", $htmlData) ){ $ielts_o = $htmlData["ielts_o"]; }
  $ielts_r  = ''; if( array_key_exists("ielts_r", $htmlData) ){ $ielts_r = $htmlData["ielts_r"]; }
  $ielts_s  = ''; if( array_key_exists("ielts_s", $htmlData) ){ $ielts_s = $htmlData["ielts_s"]; }
  $ielts_w  = ''; if( array_key_exists("ielts_w", $htmlData) ){ $ielts_w = $htmlData["ielts_w"]; }
  $pte_l  = ''; if( array_key_exists("pte_l", $htmlData) ){ $pte_l = $htmlData["pte_l"]; }
  $pte_o  = ''; if( array_key_exists("pte_o", $htmlData) ){ $pte_o = $htmlData["pte_o"]; }
  $pte_r  = ''; if( array_key_exists("pte_r", $htmlData) ){ $pte_r = $htmlData["pte_r"]; }
  $pte_s  = ''; if( array_key_exists("pte_s", $htmlData) ){ $pte_s = $htmlData["pte_s"]; }
  $pte_w  = ''; if( array_key_exists("pte_w", $htmlData) ){ $pte_w = $htmlData["pte_w"]; }
  $toefl_l  = ''; if( array_key_exists("toefl_l", $htmlData) ){ $toefl_l = $htmlData["toefl_l"]; }
  $toefl_o  = ''; if( array_key_exists("toefl_o", $htmlData) ){ $toefl_o = $htmlData["toefl_o"]; }
  $toefl_r  = ''; if( array_key_exists("toefl_r", $htmlData) ){ $toefl_r = $htmlData["toefl_r"]; }
  $toefl_s  = ''; if( array_key_exists("toefl_s", $htmlData) ){ $toefl_s = $htmlData["toefl_s"]; }
  $toefl_w  = ''; if( array_key_exists("toefl_w", $htmlData) ){ $toefl_w = $htmlData["toefl_w"]; }

  $result = array();
  $queryCount = $universityAccountModule->query_count_universityListByScore($toefl_o, $toefl_r, $toefl_l, $toefl_w, $toefl_s, 
    $pte_o, $pte_r, $pte_l, $pte_w, $pte_s, $ielts_o, $ielts_r, $ielts_l, $ielts_w, $ielts_s, $duolingo, $gre, $degree,
    $search);
  $countData = json_decode($database->getJSONData($queryCount));
  $result["totalCount"] = $countData[0]->{"totalCount"};

  $queryData = $universityAccountModule->query_view_universityListByScore($toefl_o, $toefl_r, $toefl_l, $toefl_w, $toefl_s, 
    $pte_o, $pte_r, $pte_l, $pte_w, $pte_s, $ielts_o, $ielts_r, $ielts_l, $ielts_w, $ielts_s, $duolingo, $gre, $degree,
    $search, $start, $end);
  $result["data"] = json_decode($database->getJSONData($queryData));
  echo json_encode($result);
}
else if($_GET["action"]=='UNIVERSITY_VIEW' && $_SERVER['REQUEST_METHOD']=='GET'){
  if(isset($_GET["country"]) && isset($_GET["search"]) && isset($_GET["start"]) && isset($_GET["end"]) ){
     $country=''; if(isset($_GET["country"])){ $country=$_GET["country"]; }
     $search=''; if(isset($_GET["search"])){ $search=$_GET["search"]; }
     $start=''; if(isset($_GET["start"])){ $start=$_GET["start"]; }
     $end=''; if(isset($_GET["end"])){ $end=$_GET["end"]; }
     $universities= '';
     if(strlen($search)>0){
        // Check the Search exists in uni_course_info
        // IF exist, collect the universityId and Display.
        $query = $universityAccountModule->query_search_courses($search);
        $data = json_decode($database->getJSONData($query));
        $universities = '"' . implode('","', array_column($data, 'universityId')) . '"';
     }
     $query = $universityAccountModule->query_viewAll_universities($universities,$country,$search,$start,$end);
     $data = json_decode($database->getJSONData($query));
     echo $data[0]->{"universityDetails"};
  } else {
     $message = 'Missing ';
     if(!isset($_GET["country"])){ $message.="country, "; }
     if(!isset($_GET["search"])){ $message.="search, "; }
     if(!isset($_GET["start"])){ $message.="start, "; }
     if(!isset($_GET["end"])){ $message.="end, "; }
     $message = chop($message, ",");
     $result = array();
     $result["status"] = "FAILED";
     $result["message"] = $message;
     echo json_encode($result);
  }
}
