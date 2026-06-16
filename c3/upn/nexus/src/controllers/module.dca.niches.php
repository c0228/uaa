<?php
// Set headers to allow CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json; charset=utf-8');

require_once './../core/app.database.php';
require_once './../core/app.initiator.php';
require_once './../repo/data.dca.niches.php';

if($_GET["action"]=='ADD_NEW_CATEGORY' && $_SERVER['REQUEST_METHOD']=='POST'){
 if(isset($_POST["catId"]) && isset($_POST["enCatName"]) && 
    isset($_POST["hiCatName"]) && isset($_POST["enCatDesc"]) && isset($_POST["hiCatDesc"]) && 
    isset($_POST["isActive"])){
    $catId = $_POST["catId"];
    $enCatName = $_POST["enCatName"];
    $hiCatName = $_POST["hiCatName"];
    $enCatDesc = $_POST["enCatDesc"];
    $hiCatDesc = $_POST["hiCatDesc"];
    $isActive = $_POST["isActive"];
    $query = $dcaNicheModule->query_add_newCategory($catId,$enCatName,$hiCatName,$enCatDesc,$hiCatDesc,$isActive);
    $result = array();
    $status = $database->addupdateData($query);
    $message = 'Added Record Successfully';
    if($status === 'Error') { $message = 'Query Failed - []'; }
    $result["status"] = $status;
    $result["message"] = $message;
    echo json_encode( $result );
 } else {
    $error = 'Missing';
    if(!isset($_POST["catId"])){ $error=' catId,'; }
    if(!isset($_POST["enCatName"])){ $error=' enCatName,'; }
    if(!isset($_POST["hiCatName"])){ $error=' hiCatName,'; }
    if(!isset($_POST["enCatDesc"])){ $error=' enCatDesc,'; }
    if(!isset($_POST["hiCatDesc"])){ $error=' hiCatDesc,'; }
    if(!isset($_POST["isActive"])){ $error=' isActive,'; }
    $error=chop($error,",");
    $result = array();
    $result["status"] = "Failed";
    $result["message"] = $error;
    echo json_encode( $result );
 }
} else if($_GET["action"]=='UPDATE_EXISTING_CATEGORY' && $_SERVER['REQUEST_METHOD']=='POST'){
 if(isset($_POST["catId"]) && isset($_POST["enCatName"]) && 
    isset($_POST["hiCatName"]) && isset($_POST["enCatDesc"]) && isset($_POST["hiCatDesc"]) && 
    isset($_POST["isActive"])){
        $catId = $_POST["catId"];
        $enCatName = $_POST["enCatName"];
        $hiCatName = $_POST["hiCatName"];
        $enCatDesc = $_POST["enCatDesc"];
        $hiCatDesc = $_POST["hiCatDesc"];
        $isActive = $_POST["isActive"];
        $query = $dcaNicheModule->query_update_category($catId,$enCatName,$hiCatName,$enCatDesc,$hiCatDesc,$isActive);
        $result = array();
        $status = $database->addupdateData($query);
        $message = 'Updated Record Successfully';
        if($status === 'Error') { $message = 'Query Failed - []'; }
        $result["status"] = $status;
        $result["message"] = $message;
        echo json_encode( $result );
 } else {
    $error = 'Missing';
    if(!isset($_POST["catId"])){ $error=' catId,'; }
    if(!isset($_POST["enCatName"])){ $error=' enCatName,'; }
    if(!isset($_POST["hiCatName"])){ $error=' hiCatName,'; }
    if(!isset($_POST["enCatDesc"])){ $error=' enCatDesc,'; }
    if(!isset($_POST["hiCatDesc"])){ $error=' hiCatDesc,'; }
    if(!isset($_POST["isActive"])){ $error=' isActive,'; }
    $error=chop($error,",");
    $result = array();
    $result["status"] = "Failed";
    $result["message"] = $error;
    echo json_encode( $result );
 } 
} else if($_GET["action"]=='VIEW_ALL_CATEGORIES' && $_SERVER['REQUEST_METHOD']=='GET'){
   $query = $dcaNicheModule->query_view_categoriesList();
   $data = $database->getJSONData($query);
   echo $data;
}