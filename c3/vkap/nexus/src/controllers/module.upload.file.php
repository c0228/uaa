<?php

  require_once './../utils/FileManager.php';
  
  function addTimestampToFileName($file_name) {
    $file_info = pathinfo($file_name); // Get the file name and extension
    $timestamp = date('Y-m-d-H-i-s'); // Create the timestamp
    // Append the timestamp before the file extension
    return $file_info['filename'] . '_' . $timestamp . '.' . $file_info['extension'];
  }

  header('Content-Type: application/json; charset=utf-8');
  header('Access-Control-Allow-Origin: *');
  $response = array();
  $target_dir = './../../../uploads/excels/';
  if(isset($_POST["TARGET_DIRECTORY"])){
    $target_dir = $target_dir.$_POST["TARGET_DIRECTORY"];
  }
  if (!is_dir($target_dir)) {  mkdir($target_dir, 0777, true); } // Creates Directory
 
  // List files in the directory and add them to the response
  

  if($_FILES){
    $count = intval($_POST["TARGET_FILES_COUNT"]); 
    for ($i = 0; $i < $count; $i++) {  
      $file_name = $_FILES["TARGET_FILE_".$i]["name"];
      $file_tmp_name = $_FILES["TARGET_FILE_".$i]["tmp_name"];
      $target_file = $target_dir . basename($file_name);
      if(move_uploaded_file($file_tmp_name, $target_file)) {
        array_push($response, array("status" => "FILE_UPLOAD_SUCCESS", "fileName" => $file_name, "listFiles" => listOfFolders($target_dir) ));
      } else {
        array_push($response, array("status" => "FILE_UPLOAD_FAILED", "fileName" => $file_name, "listFiles" => listOfFolders($target_dir) ));
      }
    }
  } else{
      array_push($response, array("status" => "NO_FILES_FOUND","listFiles" => listOfFolders($target_dir) ));
  }

  // Output the response as JSON
  echo json_encode($response);
?>