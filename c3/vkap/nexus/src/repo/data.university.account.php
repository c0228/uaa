<?php 
class UniversityAccountModule {
 function query_add_university($universityId, $university, $location, $country, $toefl_o, $toefl_r, $toefl_l, $toefl_w, $toefl_s, 
    $pte_o, $pte_r, $pte_l, $pte_w, $pte_s, $ielts_o, $ielts_r, $ielts_l, $ielts_w, $ielts_s, $duolingo, $gre, $gpa){
  return "INSERT INTO uni_account_info(universityId, university, location, country, toefl_o, toefl_r, toefl_l, toefl_w, toefl_s, pte_o, pte_r, pte_l, pte_w, pte_s, ielts_o, ".
    "ielts_r, ielts_l, ielts_w, ielts_s, duolingo, gre, gpa) VALUES ('".$universityId."','".$university."','".$location."','".$country."','".$toefl_o."','".$toefl_r."',".
    "'".$toefl_l."','".$toefl_w."','".$toefl_s."','".$pte_o."','".$pte_r."','".$pte_l."','".$pte_w."','".$pte_s."','".$ielts_o."','".$ielts_r."','".$ielts_l."','".$ielts_w.
    "','".$ielts_s."','".$duolingo."','".$gre."','".$gpa."');";
 }
 function query_view_university($universityId){
  return "SELECT * FROM uni_account_info WHERE universityId='".$universityId."';";
 }
 function query_view_universityList(){

 }
 function query_update_university($universityId, $university, $location, $country, $toefl_o, $toefl_r, $toefl_l, $toefl_w, $toefl_s, 
    $pte_o, $pte_r, $pte_l, $pte_w, $pte_s, $ielts_o, $ielts_r, $ielts_l, $ielts_w, $ielts_s, $duolingo, $gre, $gpa){
  $sql="UPDATE uni_account_info SET";
  if(strlen($university)>0){ $sql.=" university='".$university."',"; }
  if(strlen($location)>0){ $sql.=" location='".$location."',"; }
  if(strlen($country)>0){ $sql.=" country='".$country."',"; }
  if(strlen($toefl_o)>0){ $sql.=" toefl_o='".$toefl_o."',"; }
  if(strlen($toefl_r)>0){ $sql.=" toefl_r='".$toefl_r."',"; }
  if(strlen($toefl_l)>0){ $sql.=" toefl_l='".$toefl_l."',"; }
  if(strlen($toefl_w)>0){ $sql.=" toefl_w='".$toefl_w."',"; }
  if(strlen($toefl_s)>0){ $sql.=" toefl_s='".$toefl_s."',"; }
  if(strlen($pte_o)>0){ $sql.=" pte_o='".$pte_o."',"; }
  if(strlen($pte_r)>0){ $sql.=" pte_r='".$pte_r."',"; }
  if(strlen($pte_l)>0){ $sql.=" pte_l='".$pte_l."',"; }
  if(strlen($pte_w)>0){ $sql.=" pte_w='".$pte_w."',"; }
  if(strlen($pte_s)>0){ $sql.=" pte_s='".$pte_s."',"; }
  if(strlen($ielts_o)>0){ $sql.=" ielts_o='".$ielts_o."',"; }
  if(strlen($ielts_r)>0){ $sql.=" ielts_r='".$ielts_r."',"; }
  if(strlen($ielts_l)>0){ $sql.=" ielts_l='".$ielts_l."',"; }
  if(strlen($ielts_w)>0){ $sql.=" ielts_w='".$ielts_w."',"; }
  if(strlen($ielts_s)>0){ $sql.=" ielts_s='".$ielts_s."',"; }
  if(strlen($duolingo)>0){ $sql.=" duolingo='".$duolingo."',"; }
  if(strlen($gre)>0){ $sql.=" gre='".$gre."',"; }
  if(strlen($gpa)>0){ $sql.=" gpa='".$gpa."',"; }
  $sql=chop($sql,",")." WHERE universityId='".$universityId."';";
  return $sql;
 }
}
$universityAccountModule = new UniversityAccountModule();
?>