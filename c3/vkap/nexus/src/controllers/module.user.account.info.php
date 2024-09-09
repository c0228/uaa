<?php

header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json; charset=utf-8');
//
require_once './../core/app.database.php';
require_once './../core/app.initiator.php';
require_once './../repo/data.user.account.info.php';
require_once './../utils/Mail.php';
require_once './../utils/DateTime.php';

/*******************************************************************************************/
/******************************* AUTHENTICATION ********************************************/
/*******************************************************************************************/
// 1. USER_REGISTER
if($_GET["action"]=='USER_REGISTER' && $_SERVER['REQUEST_METHOD']=='POST'){
 $htmlData = json_decode( file_get_contents('php://input'), true );
 $name = ''; if( array_key_exists("name", $htmlData) ){ $name = $htmlData["name"];   }
 $email = ''; if( array_key_exists("email", $htmlData) ){ $email = $htmlData["email"];  }
 $emailVal = 'N'; if( array_key_exists("emailVal", $htmlData) ){ $emailVal = $htmlData["emailVal"];  }
 $accPwd = ''; if( array_key_exists("accPwd", $htmlData) ){ $accPwd = $htmlData["accPwd"];  }
 $mcountrycode = ''; if( array_key_exists("mcountrycode", $htmlData) ){ $mcountrycode = $htmlData["mcountrycode"];  }
 $mobile = ''; if( array_key_exists("mobile", $htmlData) ){ $mobile = $htmlData["mobile"];  }
 $mobileVal = 'N'; if( array_key_exists("mobileVal", $htmlData) ){ $mobileVal = $htmlData["mobileVal"]; }
 $dp = ''; if( array_key_exists("dp", $htmlData) ){ $dp = $htmlData["dp"];   }
 $userTz = 'Asia/Kolkata'; if( array_key_exists("userTz", $htmlData) ){ $userTz = $htmlData["userTz"];  }
 $accactive = 'N'; if( array_key_exists("accactive", $htmlData) ){ $accactive = $htmlData["accactive"];  }
 $userRole = ''; if( array_key_exists("userRole", $htmlData) ){ $userRole = $htmlData["userRole"];  }
 $query = $userAccountModule->query_add_userAccount($name, $email, $emailVal, $accPwd, $mcountrycode, $mobile, $mobileVal, $dp, 
	$userTz, $accactive, $userRole);
 $result = array();
 $status = $database->addupdateData($query);
 $message = 'New User Created Successfully';
 if($status === 'Error') { $message = 'Query Failed - [userRole is Required Field to Create a User Account]'; }
 $result["status"] = $status;
 $result["message"] = $message;
 echo json_encode( $result );
}
// 2. USER LOGIN
else if($_GET["action"]=='USER_LOGIN' && $_SERVER['REQUEST_METHOD']=='POST'){
	$htmlData = json_decode( file_get_contents('php://input'), true );	
	$email = ''; if( array_key_exists("email", $htmlData) ){ $email = $htmlData["email"];  }
	$accPwd = ''; if( array_key_exists("accPwd", $htmlData) ){ $accPwd = $htmlData["accPwd"];  }
	$result = array();
	$status = 'No Record Found';
	if(strlen($email)>0 && strlen($accPwd)>0){
	 $query = $userAccountModule->query_view_userAccount($email, $accPwd);
	 $data = json_decode( $database->getJSONData($query) );
	 $result["data"] = $data;
	 $status = 'Record Found';
	}
	$result["status"] = $status;
	echo json_encode( $result );
}
// 3. USER EMAIL VALIDATION
else if($_GET["action"]=='USER_VALIDATE_EMAIL' && $_SERVER['REQUEST_METHOD']=='POST'){
   $htmlData = json_decode( file_get_contents('php://input'), true );	
   $email = ''; if( array_key_exists("email", $htmlData) ){ $email = $htmlData["email"]; }
   $query = $userAccountModule->query_validate_userEmail($email);
   $data = json_decode( $database->getJSONData($query) );
   $status = 'NOT_EXIST';
   if(count($data)>0){ $status = 'EXIST'; }
   echo $status;
}
// 4. USER DETAILS UPDATE
else if($_GET["action"]=='USER_DETAILS_UPDATE' && $_SERVER['REQUEST_METHOD']=='POST'){
 $htmlData = json_decode( file_get_contents('php://input'), true );	
 $userId = ''; if( array_key_exists("userId", $htmlData) ){ $userId = $htmlData["userId"]; }
 $name = ''; if( array_key_exists("name", $htmlData) ){ $name = $htmlData["name"];   }
 $email = ''; if( array_key_exists("email", $htmlData) ){ $email = $htmlData["email"];  }
 $emailVal = 'N'; if( array_key_exists("emailVal", $htmlData) ){ $emailVal = $htmlData["emailVal"];  }
 $accPwd = ''; if( array_key_exists("accPwd", $htmlData) ){ $accPwd = $htmlData["accPwd"];  }
 $mcountrycode = ''; if( array_key_exists("mcountrycode", $htmlData) ){ $mcountrycode = $htmlData["mcountrycode"];  }
 $mobile = ''; if( array_key_exists("mobile", $htmlData) ){ $mobile = $htmlData["mobile"];  }
 $mobileVal = 'N'; if( array_key_exists("mobileVal", $htmlData) ){ $mobileVal = $htmlData["mobileVal"]; }
 $dp = ''; if( array_key_exists("dp", $htmlData) ){ $dp = $htmlData["dp"];   }
 $userTz = ''; if( array_key_exists("userTz", $htmlData) ){ $userTz = $htmlData["userTz"];  }
 $accActive = ''; if( array_key_exists("accactive", $htmlData) ){ $accActive = $htmlData["accactive"];  }
 $userRole = ''; if( array_key_exists("userRole", $htmlData) ){ $userRole = $htmlData["userRole"];  }
 $query1 = $userAccountModule->query_update_userAccount($userId, $name, $email, $emailVal, $accPwd, $mcountrycode, 
 			$mobile, $mobileVal, $dp, $userTz, $accActive, $userRole);
 $result = array();
 $status = $database->addupdateData($query1);
 $query2 = $userAccountModule->query_view_userAccountDetails($userId);
 $message = 'Updated Record Successfully for userId \''.$userId.'\'';
 if($status === 'Error') { $message = 'Query Failed - []'; }
 $result["status"] = $status;
 $result["message"] = $message;
 $result["data"] = json_decode( $database->getJSONData($query2) );
 echo json_encode( $result );
}
// 5. SEND RESET PASSWORD EMAIL
else if($_GET["action"]=='SEND_RESETPASSWORD_EMAIL' && $_SERVER['REQUEST_METHOD']=='POST'){
	$htmlData = json_decode( file_get_contents('php://input'), true );
	$to ='';if( array_key_exists("to", $htmlData) ){ $to = $htmlData["to"];  }
	// Get projectName, projectLogo, from, subject, emailExpiryTime from Properties File
	$AppName = $PROJ_APP_NAME;
	$logo = $PROJ_APP_LOGO;
	$from =  $PROJ_APP_EMAIL;
	$subject = $EMAIL_SUBJ_FORGOTPWD;
	$emailExpiryTime = $EMAIL_EXPIRY_TIME;

	// TODO: Using "to" email - Get the Customer Timezone, Customer Name and Customer ID
	$query = $userAccountModule->query_validate_userEmail($to);
	$data = json_decode( $database->getJSONData($query) );
	$status=array();
	if( count($data)>0 ){
		$timezone = $data[0]->{"userTz"};
		$customerName = $data[0]->{"user"};
		$customerId = $data[0]->{"userId"};
		$userInfo=base64_encode('EmailAt'.$to.'|'.
			'CustomerAt'.$customerId.'|'.
			'ExpiryAt'.getExpiryTimestamp($emailExpiryTime, $TIMESTAMP_TZ_FORMAT, $timezone).'|'.
			'TimezoneAt'.$timezone);
		
		echo 'getExpiryTimestamp: '.getExpiryTimestamp($emailExpiryTime, $TIMESTAMP_TZ_FORMAT, $timezone);

		if( array_key_exists("template", $htmlData) ){ 
			$template = $htmlData["template"]; 
			require_once './../mail-templates/password-change/'.$template.'.php';
			$body = generateHTML($PROJ_URL, $AppName, $logo, $userInfo, $customerName, getCurrentDateTime($timezone, $DATE_FORMAT));
			$status = sendMail($from,$to,$subject,$body);
		}
   }
   echo json_encode($status);
}
// 6. USER_DELETE
else if($_GET["action"]=='USER_DELETE' && $_SERVER['REQUEST_METHOD']=='POST') {
 $htmlData = json_decode( file_get_contents('php://input'), true );
 $userId ='';if( array_key_exists("userId", $htmlData) ){ $userId = $htmlData["userId"];  }
 
 $deleteQuery = $userAccountModule->query_delete_userAccount($userId);

 $result = array();
 $status = $database->addupdateData($deleteQuery);
 $message = "User with userId '".$userId."' deleted Successfully";
 if($status === 'Error') { $message = 'Query Failed - [userId is Required Field to delete a User Account]'; }
 $result["status"] = $status;
 $result["message"] = $message;
 echo json_encode( $result );
}
// 7. USERS_LIST_EMPLOYEES
else if($_GET["action"]=='USERS_LIST_EMPLOYEES' && $_SERVER['REQUEST_METHOD']=='GET'){
 $userRoles = ["ADMINISTRATOR", "EMPLOYEE"];
 $listQuery = $userAccountModule->query_list_employees($userRoles);	
 $data = json_decode( $database->getJSONData($listQuery) );
 echo json_encode( $data );
}