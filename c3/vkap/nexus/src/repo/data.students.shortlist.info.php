<?php
class StudentShortlistModule {
 function query_add_studentDetails($fullName, $email, $mobile, $moveTo, $prefMasterCourse, $ssc, $inter, $degree, $empExpYears,
 $empExpField, $toefl_r, $toefl_w, $toefl_l, $toefl_s, $toefl_o, $ielts_r, $ielts_w, $ielts_l, $ielts_s, $ielts_o, $pte_r, $pte_w, 
 $pte_l, $pte_s, $pte_o, $duolingo, $gre, $searchedBy){
  return "INSERT INTO stud_sl_records(fullName, email, mobile, moveTo, prefMasterCourse, ssc, inter, degree, empExpYears, ".
  "empExpField, toefl_r, toefl_w, toefl_l, toefl_s, toefl_o, ielts_r, ielts_w, ielts_l, ielts_s, ielts_o, pte_r, pte_w, ".
  "pte_l, pte_s, pte_o, duolingo, gre, searchedBy) VALUES ('".$fullName."','".$email."','".$mobile."','".$moveTo.
  "','".$prefMasterCourse."','".$ssc."','".$inter."','".$degree."','".$empExpYears."','".$empExpField."','".$toefl_r.
  "','".$toefl_w."','".$toefl_l."','".$toefl_s."','".$toefl_o."','".$ielts_r."','".$ielts_w."','".$ielts_l."','".$ielts_s.
  "','".$ielts_o."','".$pte_r."','".$pte_w."','".$pte_l."','".$pte_s."','".$pte_o."','".$duolingo."','".$gre."','".$searchedBy."');";
 }
 function query_view_studentDetails($start, $end){
  return "SELECT stud_sl_records.record_id, stud_sl_records.fullName, stud_sl_records.email, stud_sl_records.mobile, ".
  "stud_sl_records.moveTo, stud_sl_records.prefMasterCourse, stud_sl_records.ssc, stud_sl_records.inter, stud_sl_records.degree, ".
  "stud_sl_records.empExpYears, stud_sl_records.empExpField, stud_sl_records.toefl_r, stud_sl_records.toefl_w, ".
  "stud_sl_records.toefl_l, stud_sl_records.toefl_s, stud_sl_records.toefl_o, stud_sl_records.ielts_r, stud_sl_records.ielts_w, ".
  "stud_sl_records.ielts_l, stud_sl_records.ielts_s, stud_sl_records.ielts_o, stud_sl_records.pte_r, stud_sl_records.pte_w, ".
  "stud_sl_records.pte_l, stud_sl_records.pte_s, stud_sl_records.pte_o, stud_sl_records.duolingo, stud_sl_records.gre, ".
  "user_accounts_info.name As searchedPersonName, user_accounts_info.email As searchedPersonEmail, ".
  "user_accounts_info.userRole As searchePersonRole ".
  "FROM stud_sl_records, user_accounts_info WHERE stud_sl_records.searchedBy = user_accounts_info.userId LIMIT ".$start.",".$end.";";
 }
}

$studentShortlistModule = new StudentShortlistModule();

?>