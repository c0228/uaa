<?php
class UserAccountModule {
  function query_add_userAccount($name, $email, $emailVal, $accPwd, $mcountrycode, $mobile, $mobileVal, $dp, 
		$userTz, $accActive, $userRole){
	 return "INSERT INTO user_accounts_info(name, email, emailVal, accPwd, mcountrycode, mobile, mobileVal, ".
	 "dp, userTz, accActive, userRole) VALUES ('".$name."','".$email."','".$emailVal."','".$accPwd
	 ."','".$mcountrycode."','".$mobile."','".$mobileVal."','".$dp."','".$userTz."','".$accActive."','".$userRole."')";
  }
  function query_view_userAccount($email,$accPwd){
	$sql = "SELECT * FROM user_accounts_info WHERE email='".$email."' AND accPwd='".$accPwd."';";  
	return $sql;
  }
  function query_validate_userEmail($email){
	return "SELECT userId, name As user, emailVal, userTz FROM user_accounts_info WHERE email='".$email."';"; 
  }
  function query_update_userAccount($userId, $name, $email, $emailVal, $accPwd, $mcountrycode, $mobile, $mobileVal, $dp, 
  		$userTz, $accActive, $userRole){
	$sql="UPDATE user_accounts_info SET";
	if(strlen($name)>0){ $sql.=" name='".$name."',"; }
	if(strlen($email)>0){ $sql.=" email='".$email."',"; }
	if(strlen($emailVal)>0){ $sql.=" emailVal='".$emailVal."',"; }
	if(strlen($accPwd)>0){ $sql.=" accPwd='".$accPwd."',"; }
	if(strlen($mcountrycode)>0){ $sql.=" mcountrycode='".$mcountrycode."',"; }
	if(strlen($mobile)>0){ $sql.=" mobile='".$mobile."',"; }
	if(strlen($mobileVal)>0){ $sql.=" mobileVal='".$mobileVal."',"; }
	if(strlen($dp)>0){ $sql.=" dp='".$dp."',"; }
	if(strlen($userTz)>0){ $sql.=" userTz='".$userTz."',"; }
	if(strlen($accActive)>0){ $sql.=" accActive='".$accActive."',"; }
	if(strlen($userRole)>0){ $sql.=" userRole='".$userRole."',"; }
	$sql=chop($sql,",")." WHERE userId=".$userId.";";
	return $sql;
  }
  function query_delete_userAccount($userId){
	return "DELETE FROM user_accounts_info WHERE userId=".$userId;
  }
  function query_list_employees($userRoles){
	$sql = "SELECT * FROM user_accounts_info WHERE ";
	foreach ($userRoles as $userRole) {
	 $sql.=" userRole='".$userRole."' OR";
	}
	$sql=chop($sql,"OR");
	return $sql;
  }
}

$userAccountModule = new UserAccountModule();