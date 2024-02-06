<?php include_once 'templates/basic.php'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>anups ht-Clan : Crew</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="<?php echo $PROJECT_URL; ?>styles/api/bootstrap.min.css">
  <script src="<?php echo $PROJECT_URL; ?>js/api/jquery.min.js"></script>
  <script src="<?php echo $PROJECT_URL; ?>js/api/bootstrap.min.js"></script>
  <link rel="stylesheet" href="<?php echo $PROJECT_URL; ?>styles/api/font-awesome.min.css"/>
  <link rel="stylesheet" href="<?php echo $PROJECT_URL; ?>styles/project.css"/>
<script type="text/javascript">
$(document).ready(function(){
  $('#menu_crew').addClass('active');	
});
</script>
<style>

body { background-color:#eee; }
</style>
</head>
<body>

<?php include_once 'templates/header.php'; ?>
<!--
<div align="center"><h5 class="crew-titleBar">The Secret of our Success in Building a Project is OUR CREW - Their Ability and Their Stability</h5></div>
-->
<div class="container-fluid mtop15p">
 <div class="row jumbotron">
	<div align="center" class="col-md-12" style="line-height:30px;letter-spacing:1px;font-size:16px;font-family:texgyreadventor-regular;font-weight:600;"> 
	We are the Individual Freelancers with most enthusiastic and passionate in mindset. 
	To achieve our goals and to fulfill our dream, we formed a team as a organization.
	</div>
	<div align="center" class="col-md-12">
	  <h3 class="font-texgyreadventor-bold"><span style="padding:5px;border-bottom:2px solid #333;">Let me introduce</span></h3>
	</div>
 </div><!--/.row -->
 <div class="row">
   <div class="col-md-3">
	<?php include 'templates/profile-ceo.php'; ?>
   </div><!--/.col-md-3 -->
   <div class="col-md-3">
	<?php include 'templates/profile-kittu.php'; ?>
   </div><!--/.col-md-3 -->
   <div class="col-md-3">
	<?php include 'templates/profile-santosh.php'; ?>
   </div><!--/.col-md-3 -->
   <div class="col-md-3">
	<?php include 'templates/profile-shiva.php'; ?>
   </div><!--/.col-md-3 -->
 </div><!--/.row -->
</div><!--/.container-fluid -->

</body>
</html>
