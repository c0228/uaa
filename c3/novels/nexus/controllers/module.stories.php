<?php
// Allow from any origin
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    exit(0);
}

require_once './../utils/JsonFileHandler.php';

$APPDATA_LOCATION = './../../app-data/stories.json';

if(isset($_GET["action"]) && $_GET["action"]=="CREATE_STORIES") {
 $htmlData = json_decode( file_get_contents('php://input'), true );	
 $storyId = ''; if( array_key_exists("storyId", $htmlData) ){ $storyId = $htmlData["storyId"]; }
 $title = ''; if( array_key_exists("title", $htmlData) ){ $title = $htmlData["title"]; }
 $description = ''; if( array_key_exists("description", $htmlData) ){ $description = $htmlData["description"]; }
 $chapters = ''; if( array_key_exists("chapters", $htmlData) ){ $chapters = $htmlData["chapters"]; }
 
 $handler = new JsonFileHandler($APPDATA_LOCATION);
 // Read all stories
 $data = $handler->readAll();
 // Make sure the root has "stories"
 if (!isset($data['stories'])) { $data['stories'] = []; }
 // Add new story in your required format
 $data['stories'][$storyId] = [
        "title" => $title,
        "description" => $description,
        "chapters" => intval($chapters)
 ];
 // Save it back using update or direct file write
  file_put_contents($APPDATA_LOCATION, json_encode($data, JSON_PRETTY_PRINT));
  header('Content-Type: application/json');
  echo json_encode($data, JSON_PRETTY_PRINT);
}
?>
