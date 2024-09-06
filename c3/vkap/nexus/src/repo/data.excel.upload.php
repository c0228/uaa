<?php
 class ExcelLogModule {
  function query_add_uploadLogs($excelFile, $sheetName, $operation, $data, $status){
    return "INSERT INTO log_upload_xlsx(excelFile, sheetName, operation, data, status) ".
    "VALUES ('".$excelFile."','".$sheetName."','".$operation."','".$data."','".$status."');";
  }
  function query_view_uploadLogs($excelFile){
    return "SELECT xlsxId, excelFile, sheetName, operation, SUBSTRING(CONVERT(data USING utf8), 1, 1000) AS readable_text, ".
    "status, createdOn FROM log_upload_xlsx WHERE excelFile='".$excelFile."';";
  }
 }
 $excelLogModule = new ExcelLogModule();
?>

