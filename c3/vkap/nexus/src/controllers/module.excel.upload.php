<?php 

header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json; charset=utf-8');
//
require_once './../core/app.database.php';
require_once './../core/app.initiator.php';
require_once './../utils/ExcelManager.php';
require_once './../repo/data.excel.upload.php';
require_once './../repo/data.university.account.php';
require './../../vendor/autoload.php';

$PATH = './../../assets/doc/';
$FILENAME = 'universities_upload_sheets.xlsx';
$excelManager = new ExcelManager($PATH.$FILENAME);
$jsonData = json_decode($excelManager->getExcelData());

echo json_encode($jsonData);
$SHEET_NAME = 'UNIVERSITIES';
$universities = $jsonData->{$SHEET_NAME};
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
 $queryExecutionStatus = false;
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
 $logQuery = $excelLogModule->query_add_uploadLogs($FILENAME, $SHEET_NAME, $operation, json_encode($logData), $queryExecutionStatus);
 $database->addupdateData($logQuery);
 
 // Output Display
 $viewLogQuery = $excelLogModule->query_view_uploadLogs($FILENAME);
 print_r( $database->getJSONData($viewLogQuery) );
}