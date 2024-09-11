<?php
 
 function listOfFolders($target_dir){
  $fileList = scandir($target_dir);
  $fileList = array_diff($fileList, array('.', '..')); // Remove "." and ".." entries
  $fileList = array_values($fileList);
  return $fileList;
 }

?>