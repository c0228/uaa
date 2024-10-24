<?php

header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json; charset=utf-8');
//
require_once './../core/app.database.php';
require_once './../core/app.initiator.php';
require_once './../repo/data.students.shortlist.info.php';

if($_GET["action"]=='STUDENT_RECORD_ADD' && $_SERVER['REQUEST_METHOD']=='POST'){
 $htmlData = json_decode( file_get_contents('php://input'), true );
 $fullName = ''; if( array_key_exists("fullName", $htmlData) ){ $fullName = $htmlData["fullName"];   }
 $email = ''; if( array_key_exists("email", $htmlData) ){ $email = $htmlData["email"];   } 
 $mobile = ''; if( array_key_exists("mobile", $htmlData) ){ $mobile = $htmlData["mobile"];   } 
 $moveTo = ''; if( array_key_exists("moveTo", $htmlData) ){ $moveTo = $htmlData["moveTo"];   }
 $prefMasterCourse = ''; if( array_key_exists("prefMasterCourse", $htmlData) ){ $prefMasterCourse = $htmlData["prefMasterCourse"];   }
 $ssc = ''; if( array_key_exists("ssc", $htmlData) ){ $ssc = $htmlData["ssc"];   }
 $inter = ''; if( array_key_exists("inter", $htmlData) ){ $inter = $htmlData["inter"];   }
 $degree = ''; if( array_key_exists("degree", $htmlData) ){ $degree = $htmlData["degree"];   }
 $empExpYears = ''; if( array_key_exists("empExpYears", $htmlData) ){ $empExpYears = $htmlData["empExpYears"];   }
 $empExpField = ''; if( array_key_exists("empExpField", $htmlData) ){ $empExpField = $htmlData["empExpField"];   }
 $toefl_r = ''; if( array_key_exists("toefl_r", $htmlData) ){ $toefl_r = $htmlData["toefl_r"];   }
 $toefl_w = ''; if( array_key_exists("toefl_w", $htmlData) ){ $toefl_w = $htmlData["toefl_w"];   }
 $toefl_l = ''; if( array_key_exists("toefl_l", $htmlData) ){ $toefl_l = $htmlData["toefl_l"];   }
 $toefl_s = ''; if( array_key_exists("toefl_s", $htmlData) ){ $toefl_s = $htmlData["toefl_s"];   }
 $toefl_o = ''; if( array_key_exists("toefl_o", $htmlData) ){ $toefl_o = $htmlData["toefl_o"];   }
 $ielts_r = ''; if( array_key_exists("ielts_r", $htmlData) ){ $ielts_r = $htmlData["ielts_r"];   }
 $ielts_w = ''; if( array_key_exists("ielts_w", $htmlData) ){ $ielts_w = $htmlData["ielts_w"];   }
 $ielts_l = ''; if( array_key_exists("ielts_l", $htmlData) ){ $ielts_l = $htmlData["ielts_l"];   }
 $ielts_s = ''; if( array_key_exists("ielts_s", $htmlData) ){ $ielts_s = $htmlData["ielts_s"];   }
 $ielts_o = ''; if( array_key_exists("ielts_o", $htmlData) ){ $ielts_o = $htmlData["ielts_o"];   }
 $pte_r = ''; if( array_key_exists("pte_r", $htmlData) ){ $pte_r = $htmlData["pte_r"];   }
 $pte_w = ''; if( array_key_exists("pte_w", $htmlData) ){ $pte_w = $htmlData["pte_w"];   }
 $pte_l = ''; if( array_key_exists("pte_l", $htmlData) ){ $pte_l = $htmlData["pte_l"];   }
 $pte_s = ''; if( array_key_exists("pte_s", $htmlData) ){ $pte_s = $htmlData["pte_s"];   }
 $pte_o = ''; if( array_key_exists("pte_o", $htmlData) ){ $pte_o = $htmlData["pte_o"];   }
 $duolingo = ''; if( array_key_exists("duolingo", $htmlData) ){ $duolingo = $htmlData["duolingo"];   }
 $gre = ''; if( array_key_exists("gre", $htmlData) ){ $gre = $htmlData["gre"];   }
 $searchedBy = ''; if( array_key_exists("searchedBy", $htmlData) ){ $searchedBy = $htmlData["searchedBy"];   }
 $query = $studentShortlistModule->query_add_studentDetails($fullName, $email, $mobile, $moveTo, $prefMasterCourse, $ssc, $inter, $degree, $empExpYears,
 $empExpField, $toefl_r, $toefl_w, $toefl_l, $toefl_s, $toefl_o, $ielts_r, $ielts_w, $ielts_l, $ielts_s, $ielts_o, $pte_r, $pte_w, 
 $pte_l, $pte_s, $pte_o, $duolingo, $gre, $searchedBy);
 $result = array();
 $status = $database->addupdateData($query);
 $message = 'Added New Student Record Successfully';
 if($status === 'Error') { $message = 'Query Failed'; }
 $result["status"] = $status;
 $result["message"] = $message;
 echo json_encode( $result );
} else if($_GET["action"]=='STUDENTS_RECORD_VIEW' && $_SERVER['REQUEST_METHOD']=='GET'){
    $result = array();
    if(isset($_GET["start"]) && isset($_GET["end"])){
       $search = ''; if(isset($_GET["search"])){ $search=$_GET["search"]; }
       $start = $_GET["start"];
       $end = $_GET["end"];
       $query1 =  $studentShortlistModule->query_count_studentDetails();
       $query2 = $studentShortlistModule->query_view_studentDetails($start, $end, $search);
       $dataCount = json_decode( $database->getJSONData($query1) );
       $data = json_decode( $database->getJSONData($query2) );
       $result["message"] = "Records Found";
       $result["totalCount"] = $dataCount[0]->{"totalCount"};
       $result["data"] = $data;
    } else {
        $message='Missing';
        if(!isset($_GET["start"])){ $message.=' start limit,';  }
        if(!isset($_GET["end"])){ $message.=' end limit,';  }
        $message=chop($message,",");
        $result["message"] = $message;
    }
    echo json_encode( $result );
}

?>