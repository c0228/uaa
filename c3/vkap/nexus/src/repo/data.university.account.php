<?php 
class UniversityAccountModule {
 // University Account
 function query_add_university($universityId, $university, $location, $country, $toefl_o, $toefl_r, $toefl_l, $toefl_w, $toefl_s, 
    $pte_o, $pte_r, $pte_l, $pte_w, $pte_s, $ielts_o, $ielts_r, $ielts_l, $ielts_w, $ielts_s, $duolingo, $gre, $gpa, $intake){
  return "INSERT INTO uni_account_info(universityId, university, location, country, toefl_o, toefl_r, toefl_l, toefl_w, toefl_s, pte_o, pte_r, pte_l, pte_w, pte_s, ielts_o, ".
    "ielts_r, ielts_l, ielts_w, ielts_s, duolingo, gre, gpa, intake) VALUES ('".$universityId."','".$university."','".$location."','".$country."','".$toefl_o."','".$toefl_r."',".
    "'".$toefl_l."','".$toefl_w."','".$toefl_s."','".$pte_o."','".$pte_r."','".$pte_l."','".$pte_w."','".$pte_s."','".$ielts_o."','".$ielts_r."','".$ielts_l."','".$ielts_w.
    "','".$ielts_s."','".$duolingo."','".$gre."','".$gpa."','".$intake."');";
 }
 function query_view_university($universityId){
  return "SELECT * FROM uni_account_info WHERE universityId='".$universityId."';";
 }
 function query_search_courses($search){
  return "SELECT DISTINCT(universityId) FROM uni_courses_info c WHERE ".
  "(c.courseId LIKE '%".$search."%' OR c.course LIKE '%".$search."%' OR c.courseType LIKE '%".$search.
  "%' OR c.duration LIKE '%".$search."%' OR c.fees LIKE '%".$search."%' OR c.leavingExpenses LIKE '%".$search.
  "%' OR c.initDeposit LIKE '%".$search."%' OR c.appFees LIKE '%".$search."%' OR c.deadline LIKE '%".$search."%');";
 }
 function query_viewAll_universities($universities,$country,$search,$start,$end){
  $sql="SELECT JSON_OBJECT(".
        "'totalCount', (SELECT count(*) FROM uni_account_info), 'start', ".$start.", 'end', ".$end.",".
        "'data', (SELECT JSON_ARRAYAGG( JSON_OBJECT(".
            "'universityId', u.universityId, 'university', u.university, 'location', u.location, 'country', u.country,".
            "'toefl_o', u.toefl_o, 'toefl_r', u.toefl_r, 'toefl_l', u.toefl_l, 'toefl_w', u.toefl_w,'toefl_s', u.toefl_s,".
            "'pte_o', u.pte_o, 'pte_r', u.pte_r, 'pte_l', u.pte_l, 'pte_w', u.pte_w, 'pte_s', u.pte_s, 'ielts_o', u.ielts_o,".
            "'ielts_r', u.ielts_r, 'ielts_l', u.ielts_l, 'ielts_w', u.ielts_w, 'ielts_s', u.ielts_s, 'duolingo', u.duolingo,".
            "'gre', u.gre, 'gpa', u.gpa, 'intake', u.intake,".
            "'courses', (SELECT JSON_OBJECT(".
                  "'totalCount', (SELECT count(*) FROM uni_courses_info c WHERE c.universityId=u.universityId),".
                  "'data', (SELECT JSON_ARRAYAGG(JSON_OBJECT(".
                          "'courseId', c.courseId, 'course', c.course, 'courseType', c.courseType, 'duration', c.duration,".
                          "'fees', c.fees,'leavingExpenses', c.leavingExpenses, 'initDeposit', c.initDeposit, 'appFees', c.appFees,".
                          "'deadline', c.deadline, 'courseURL', c.courseURL".
                  ")) FROM uni_courses_info c WHERE c.universityId=u.universityId )".
            ")))".
        ") FROM uni_account_info u WHERE u.country='".$country."' AND ".
        "(u.universityId LIKE '%".$search."%'  OR u.university LIKE '%".$search."%'  OR u.location LIKE '%".$search.
        "%' OR u.country LIKE '%".$search."%' OR u.toefl_o LIKE '%".$search."%' OR u.toefl_r LIKE '%".$search.
        "%' OR u.toefl_l LIKE '%".$search."%' OR u.toefl_w LIKE '%".$search."%' OR u.toefl_s LIKE '%".$search.
        "%' OR u.pte_o LIKE '%".$search."%' OR u.pte_r LIKE '%".$search."%' OR u.pte_l LIKE '%".$search.
        "%' OR u.pte_w LIKE '%".$search."%' OR u.pte_s LIKE '%".$search."%' OR u.ielts_o LIKE '%".$search.
        "%' OR u.ielts_r LIKE '%".$search."%' OR u.ielts_l LIKE '%".$search."%' OR u.ielts_w LIKE '%".$search.
        "%' OR u.ielts_s LIKE '%".$search."%' OR u.duolingo LIKE '%".$search."%' OR u.gre LIKE '%".$search.
        "%' OR u.gpa LIKE '%".$search."%' OR u.intake LIKE '%".$search."%' ";
  if(strlen($universities)>0){
    $sql.=" OR u.universityId IN (".$universities.") ";
  }
  $sql.=") LIMIT ".$start.",".$end.")";
  $sql.=") As universityDetails;";
  return $sql;
 }

 function query_view_countries(){
  return "SELECT DISTINCT(country) FROM uni_account_info ORDER BY country ASC;";
 }
 function query_count_universityListByScore($toefl_o, $toefl_r, $toefl_l, $toefl_w, $toefl_s, 
    $pte_o, $pte_r, $pte_l, $pte_w, $pte_s, $ielts_o, $ielts_r, $ielts_l, $ielts_w, $ielts_s, $duolingo, $gre, $gpa,
    $search){
  $sql="SELECT count(*) As totalCount FROM uni_account_info, uni_courses_info WHERE uni_account_info.toefl_o<=".$toefl_o.
      " AND uni_account_info.toefl_r<=".$toefl_r." AND uni_account_info.toefl_l<=".$toefl_l." AND ".
      " uni_account_info.toefl_w<=".$toefl_w." AND uni_account_info.toefl_s<=".$toefl_s." AND uni_account_info.pte_o<=".
      $pte_o." AND uni_account_info.pte_r<=".$pte_r." AND uni_account_info.pte_l<=".$pte_l." AND ".
      " uni_account_info.pte_w<=".$pte_w." AND uni_account_info.pte_s<=".$pte_s." AND uni_account_info.ielts_o<=".
      $ielts_o." AND uni_account_info.ielts_r<=".$ielts_r." AND uni_account_info.ielts_l<=".$ielts_l." AND ".
      " uni_account_info.ielts_w<=".$ielts_w." AND uni_account_info.ielts_s<=".$ielts_s." AND uni_account_info.duolingo<=".
      $duolingo." AND uni_account_info.gre<=".$gre." AND uni_account_info.gpa<=".$gpa.
      " AND uni_account_info.universityId = uni_courses_info.universityId ";
  if(strlen($search)>0){
    $sql.=" AND (uni_account_info.university LIKE '%".$search."%' OR uni_account_info.location LIKE '%".$search."%' OR ".
      " uni_account_info.country LIKE '%".$search."%' OR uni_courses_info.course LIKE '%".$search."%' OR ".
      " uni_courses_info.duration LIKE '%".$search."%' OR uni_courses_info.fees LIKE '%".$search."%' OR ".
      " uni_courses_info.appFees LIKE '%".$search."%' OR uni_courses_info.leavingExpenses LIKE '%".$search."%' OR ".
      " uni_courses_info.initDeposit LIKE '%".$search."%' OR uni_account_info.intake LIKE '%".$search."%' OR ".
      " uni_courses_info.deadline LIKE '%".$search."%')";
  }
  return $sql;
 }
 function query_view_universityListByScore($toefl_o, $toefl_r, $toefl_l, $toefl_w, $toefl_s, 
    $pte_o, $pte_r, $pte_l, $pte_w, $pte_s, $ielts_o, $ielts_r, $ielts_l, $ielts_w, $ielts_s, $duolingo, $gre, $gpa,
    $search, $start, $end){
   $sql="SELECT uni_account_info.university, uni_account_info.location, uni_account_info.country, ".
      " uni_courses_info.course, uni_courses_info.duration, uni_courses_info.fees, uni_courses_info.appFees, ".
      "uni_courses_info.leavingExpenses, uni_courses_info.initDeposit, uni_account_info.intake, uni_courses_info.deadline, ".
      "uni_courses_info.courseURL FROM uni_account_info, uni_courses_info WHERE uni_account_info.toefl_o<=".$toefl_o.
      " AND uni_account_info.toefl_r<=".$toefl_r." AND uni_account_info.toefl_l<=".$toefl_l." AND ".
      " uni_account_info.toefl_w<=".$toefl_w." AND uni_account_info.toefl_s<=".$toefl_s." AND uni_account_info.pte_o<=".
      $pte_o." AND uni_account_info.pte_r<=".$pte_r." AND uni_account_info.pte_l<=".$pte_l." AND ".
      " uni_account_info.pte_w<=".$pte_w." AND uni_account_info.pte_s<=".$pte_s." AND uni_account_info.ielts_o<=".
      $ielts_o." AND uni_account_info.ielts_r<=".$ielts_r." AND uni_account_info.ielts_l<=".$ielts_l." AND ".
      " uni_account_info.ielts_w<=".$ielts_w." AND uni_account_info.ielts_s<=".$ielts_s." AND uni_account_info.duolingo<=".
      $duolingo." AND uni_account_info.gre<=".$gre." AND uni_account_info.gpa<=".$gpa.
      " AND uni_account_info.universityId = uni_courses_info.universityId";
  if(strlen($search)>0){
      $sql.=" AND (uni_account_info.university LIKE '%".$search."%' OR uni_account_info.location LIKE '%".$search."%' OR ".
      " uni_account_info.country LIKE '%".$search."%' OR uni_courses_info.course LIKE '%".$search."%' OR ".
      " uni_courses_info.duration LIKE '%".$search."%' OR uni_courses_info.fees LIKE '%".$search."%' OR ".
      " uni_courses_info.appFees LIKE '%".$search."%' OR uni_courses_info.leavingExpenses LIKE '%".$search."%' OR ".
      " uni_courses_info.initDeposit LIKE '%".$search."%' OR uni_account_info.intake LIKE '%".$search."%' OR ".
      " uni_courses_info.deadline LIKE '%".$search."%')";
  }
  if(strlen($start)>0 && strlen($end)>0){
    $sql.=" LIMIT ".$start.",".$end.";";
  }
  return $sql;
 }
 function query_update_university($universityId, $university, $location, $country, $toefl_o, $toefl_r, $toefl_l, $toefl_w, $toefl_s, 
    $pte_o, $pte_r, $pte_l, $pte_w, $pte_s, $ielts_o, $ielts_r, $ielts_l, $ielts_w, $ielts_s, $duolingo, $gre, $gpa, $intake){
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
  if(strlen($intake)>0){ $sql.=" intake='".$intake."',"; }
  $sql=chop($sql,",")." WHERE universityId='".$universityId."';";
  return $sql;
 }
 // Course Account
 function query_add_courseInfo($courseId, $universityId, $course, $courseType, $duration, $fees, $leavingExpenses, 
    $initDeposit, $appFees, $deadline, $courseURL){
  return "INSERT INTO uni_courses_info(courseId, universityId, course, courseType, duration, fees, leavingExpenses, initDeposit, appFees, ".
    "deadline, courseURL) VALUES ('".$courseId."', '".$universityId."', '".$course."', '".$courseType."', '".$duration."', '".
    $fees."', '".$leavingExpenses."', '".$initDeposit."', '".$appFees."', '".$deadline."', '".$courseURL."');";
 }
 function query_view_courseInfo($courseId){
  return "SELECT * FROM uni_courses_info WHERE courseId='".$courseId."';";
 }
 function query_update_courseInfo($courseId, $universityId, $course, $courseType, $duration, $fees, $leavingExpenses, 
    $initDeposit, $appFees, $deadline, $courseURL){
  $sql="UPDATE uni_courses_info SET";
  if(strlen($universityId)>0){ $sql.=" universityId='".$universityId."',"; }
  if(strlen($course)>0){ $sql.=" course='".$course."',"; }
  if(strlen($courseType)>0){ $sql.=" courseType='".$courseType."',"; }
  if(strlen($duration)>0){ $sql.=" duration='".$duration."',"; }
  if(strlen($fees)>0){ $sql.=" fees='".$fees."',"; }
  if(strlen($leavingExpenses)>0){ $sql.=" leavingExpenses='".$leavingExpenses."',"; }
  if(strlen($initDeposit)>0){ $sql.=" initDeposit='".$initDeposit."',"; }
  if(strlen($appFees)>0){ $sql.=" appFees='".$appFees."',"; }
  if(strlen($deadline)>0){ $sql.=" deadline='".$deadline."',"; }
  if(strlen($courseURL)>0){ $sql.=" courseURL='".$courseURL."',"; }
  $sql=chop($sql,",")." WHERE courseId='".$courseId."';";
  return $sql;
 }
}
$universityAccountModule = new UniversityAccountModule();
?>