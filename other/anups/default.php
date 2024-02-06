<?php include_once 'templates/basic.php'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>anups ht-Clan : Home</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="<?php echo $PROJECT_URL; ?>styles/api/bootstrap.min.css">
  <script src="<?php echo $PROJECT_URL; ?>js/api/jquery.min.js"></script>
  <script src="<?php echo $PROJECT_URL; ?>js/api/bootstrap.min.js"></script>
  <link rel="stylesheet" href="<?php echo $PROJECT_URL; ?>styles/api/font-awesome.min.css"/>
  <link rel="stylesheet" href="<?php echo $PROJECT_URL; ?>styles/project.css"/>
<script type="text/javascript">
$(document).ready(function(){
  $('#menu_home').addClass('active');	
});
</script>
</head>
<body>

<?php include_once 'templates/header.php'; ?>

<?php include_once 'templates/home-intro.php'; ?>

<style>
.explore-title { text-transform:uppercase;letter-spacing:1.5px; }
.explore-lgtPink { cursor:pointer;background-color:#f39893;border:1px solid #f39893;color:#bf7874; }
.explore-lgtOrange { cursor:pointer;background-color:#f5a572;border:1px solid #f5a572;color:#bd7658; }
.explore-lgtPurple { cursor:pointer;background-color:#b88cbf;border:1px solid #b88cbf;color:#91699e; }
.explore-lgtGrey { cursor:pointer;background-color:#7f99b3;border:1px solid #7f99b3;color:#5d7186; }
.explore-lgtPink:hover,.explore-lgtOrange:hover,.explore-lgtPurple:hover,.explore-lgtGrey:hover { opacity:0.8; }
</style>

<div class="container-fluid font-texgyreadventor-bold mtop35p">
 <div class="row">
  <div align="center" class="col-md-12">
	<h4 class="explore-title"><b>Explore Our Work By Category</b></h4>
  </div><!--/.col-md-12 -->
 </div><!--/.row -->
 <div class="row mtop15p">
	<div align="center" class="col-md-2">
	<!-- -->
		<div class="list-group">
		  <div class="list-group-item explore-lgtPink"><i class="fa fa-5x fa-car mtopbot15p"></i></div><!--/.list-group-item -->
		</div><!--/.list-group -->
		<h5>Automobiles</h5>
	<!-- -->
	</div>
	<div align="center" class="col-md-2">
	<!-- -->
		<div class="list-group">
		  <div class="list-group-item explore-lgtOrange"><i class="fa fa-5x fa-building mtopbot15p"></i></div><!--/.list-group-item -->
		</div><!--/.list-group -->
		<h5>Construction</h5>
	<!-- -->
	</div>
	<div align="center" class="col-md-2">
	<!-- -->
		<div class="list-group">
		  <div class="list-group-item explore-lgtPurple"><i class="fa fa-5x fa-newspaper-o mtopbot15p"></i></div><!--/.list-group-item -->
		</div><!--/.list-group -->
		<h5>Media</h5>
	<!-- -->
	</div>
	<div align="center" class="col-md-2">
	<!-- -->
		<div class="list-group">
		  <div class="list-group-item explore-lgtGrey"><i class="fa fa-5x fa-shopping-cart mtopbot15p"></i></div><!--/.list-group-item -->
		</div><!--/.list-group -->
		<h5>E-Commerce</h5>
	<!-- -->
	</div>
	<div align="center" class="col-md-2">
	<!-- -->
		<div class="list-group">
		  <div class="list-group-item explore-lgtOrange"><i class="fa fa-5x fa-ambulance mtopbot15p"></i></div><!--/.list-group-item -->
		</div><!--/.list-group -->
		<h5>Health Care</h5>
	<!-- -->
	</div>
	<div align="center" class="col-md-2">
	<!-- -->
		<div class="list-group">
		  <div class="list-group-item explore-lgtPink"><i class="fa fa-5x fa-dollar mtopbot15p"></i></div><!--/.list-group-item -->
		</div><!--/.list-group -->
		<h5>Finance</h5>
	<!-- -->
	</div>
 </div><!--/.row -->
</div><!--/.container-fluid -->


<style>
.footer { padding:5px;font-family:texgyreadventor-bold;letter-spacing:1.2px;font-size:10px;position: fixed;left: 0;bottom: 0;width: 100%;
  background-color: #eee;color: #333;text-align: center;border-top:2px solid #ddd;border-bottom:2px solid #ddd;
}

</style>
<?php include_once 'templates/footer.php'; ?>
<div class="footer">
&copy; Copyrights 2021. All Rights are Reserved by ANUPS HT-CLAN (OPC) PRIVATE LIMITED.
</div>

</body>
</html>
