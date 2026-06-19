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
 $data = json_decode(file_get_contents("php://input"), true);
 if(isset($data["catId"]) && isset($data["enCatName"]) && 
    isset($data["hiCatName"]) && isset($data["enCatDesc"]) && isset($data["hiCatDesc"]) && 
    isset($data["isActive"])){
    $catId = $data["catId"];
    $enCatName = str_replace("'", "\\'", $data["enCatName"]);;
    $hiCatName = str_replace("'", "\\'", $data["hiCatName"]);
    $enCatDesc = str_replace("'", "\\'", $data["enCatDesc"]);
    $hiCatDesc = str_replace("'", "\\'", $data["hiCatDesc"]);
    $isActive = $data["isActive"];
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
    if(!isset($data["catId"])){ $error.=' catId,'; }
    if(!isset($data["enCatName"])){ $error.=' enCatName,'; }
    if(!isset($data["hiCatName"])){ $error.=' hiCatName,'; }
    if(!isset($data["enCatDesc"])){ $error.=' enCatDesc,'; }
    if(!isset($data["hiCatDesc"])){ $error.=' hiCatDesc,'; }
    if(!isset($data["isActive"])){ $error.=' isActive,'; }
    $error=chop($error,",");
    $result = array();
    $result["status"] = "Failed";
    $result["message"] = $error;
    echo json_encode( $result );
 }
} else if($_GET["action"]=='UPDATE_EXISTING_CATEGORY' && $_SERVER['REQUEST_METHOD']=='POST'){
 $data = json_decode(file_get_contents("php://input"), true);
 if(isset($data["catId"]) && isset($data["enCatName"]) && 
    isset($data["hiCatName"]) && isset($data["enCatDesc"]) && isset($data["hiCatDesc"]) && 
    isset($data["isActive"])){
        $catId = $data["catId"];
        $enCatName = str_replace("'", "\\'", $data["enCatName"]);;
        $hiCatName = str_replace("'", "\\'", $data["hiCatName"]);
        $enCatDesc = str_replace("'", "\\'", $data["enCatDesc"]);
        $hiCatDesc = str_replace("'", "\\'", $data["hiCatDesc"]);
        $isActive = $data["isActive"];
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
    if(!isset($data["catId"])){ $error.=' catId,'; }
    if(!isset($data["enCatName"])){ $error.=' enCatName,'; }
    if(!isset($data["hiCatName"])){ $error.=' hiCatName,'; }
    if(!isset($data["enCatDesc"])){ $error.=' enCatDesc,'; }
    if(!isset($data["hiCatDesc"])){ $error.=' hiCatDesc,'; }
    if(!isset($data["isActive"])){ $error.=' isActive,'; }
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