<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="styles/api/bootstrap.min.css"/>
  <script src="js/api/jquery.min.js"></script>
  <script src="js/api/bootstrap.min.js"></script>
  <link rel="stylesheet" href="styles/api/simple-sidebar.css"/>
<style>
@font-face { font-family:rumburak;src: url('fonts/Rumburak.ttf'); }
@font-face { font-family:ravie;src: url('fonts/Ravie.ttf'); }
@font-face { font-family:harlowsi;src: url('fonts/Harlowsi.ttf'); }
@font-face { font-family:brlnsr;src: url('fonts/Brlnsr.ttf'); }
@font-face { font-family:boogaloo-regular;src: url('fonts/Boogaloo-Regular.otf'); }
@font-face { font-family:cookie-regular;src: url('fonts/Cookie-Regular.ttf'); }
@font-face { font-family:dense-regular;src: url('fonts/Dense-Regular.ttf'); }

body { background-color:#191e31; }
.navbar-default { background-color:#fff;border:0px; }
.footer { position:fixed;left:0;bottom:0;width:100%;padding-top:10px;text-align:center; }
.menu1,.menu2,.menu3,.menu4,.menu5 { cursor:pointer;padding:10px; }
.menu1 { background-color:#171e30;color:#dcb084;  }
.menu2 { background-color:#9b0334;color:#eabd91; }
.menu3 { background-color:#046d63;  }
.menu4 { background-color:#f13d30;  }
.menu5 { background-color:#636d03;  }
.hide-block { display:none; }
.navbar-nav>li>a , .navbar-nav>li>a:focus{ background-color:#fff;color:#a965b5; }
.navbar-nav>li>a:hover {  background-color:#fff;color:#333; }
.navbar-nav>li.active>a,.navbar-nav>li.active>a:hover, .navbar-nav>li.active>a:focus { background-color:#fff;color:#630062;border-bottom:3px solid #630062; }
.navbar { border-radius:0px;margin-bottom:0px; }
</style>
<script type="text/javascript">
function sel_menu(id){
 var menu_ids=["menu_home","menu_ourWorks","menu_services","menu_crew","menu_contactUs"];
 var content_ids=["content_home","content_ourWorks","content_services","content_crew","content_contactUs"];
 var bgColors =["#191e31","#9b0334","#046d63","#f13d30","#636d03"];
 for(var index=0;index<menu_ids.length;index++){
	if(id===menu_ids[index]){ 
	   document.body.style.backgroundColor = bgColors[index]; 
	   if($('#'+content_ids[index]).hasClass('hide-block')){ $('#'+content_ids[index]).removeClass('hide-block'); }
	} else {
		if(!$('#'+content_ids[index]).hasClass('hide-block')){ $('#'+content_ids[index]).addClass('hide-block'); }
	}
 }
}
$(document).ready(function(){
 if($(window).width()<=768){
  sideWrapperToggle();
 }
});
function sideWrapperToggle(){
if($("#wrapper").hasClass('toggled')) { 
 $("#wrapper").removeClass('toggled'); // hides SideMenu
 // $("#page-content-wrapper").css("position","absolute");
}
else { 
 $("#wrapper").addClass("toggled");  // adds SideMenu
// $("#page-content-wrapper").css("position","fixed");
 // setTimeout(function(){ $("html").addClass("stop-vertificalScroll"); },400);
}
}
</script>
</head>
<body>


<div id="wrapper" class="toggled">
	<!-- Core Skeleton : Side and Top Menu -->
	<div id="sidebar-wrapper">
	  <ul class="sidebar-nav">
        <div align="center" class="sidebar-nav-profile">
          <a href="#">
	        <div class="sidebar-wrapper-img"></div>
			<div align="center"><b>FirstName LastName</b></div>
          </a>
		  <hr/>
        </div>
        <li>
	       <a href="#"><i class="fa fa-user" aria-hidden="true"></i>&nbsp;&nbsp;<span><b>Admin Dashboard</b></span></a>
        </li>
        <li>
	       <a href="#"><i class="fa fa-user" aria-hidden="true"></i>&nbsp;&nbsp;<span><b>Admin Dashboard</b></span></a>
        </li>		
       </ul>
	</div>
	<div id="page-content-wrapper">
	   <nav id="header_bot" class="navbar" style="margin-bottom:0px;border-radius:0px;">
	   <div id="applogo-header" class="hide-block">
		<a class="navbar-brand a-custom" style="cursor:pointer;color:#eeb897;" onclick="javascript:sideWrapperToggle();">
			<span class="glyphicon glyphicon-align-justify"></span>
		</a>
		<div class="container-fluid" style="padding-left:0px;padding-right:0px;">
		
		<div id="div_app_logo" class="col-md-2 col-sm-4 col-xs-10" style="padding-left:0px;"></div>
		
	  </div>
   </div>
   
</nav>
	   <?php include_once 'templates/home.php'; ?>
	</div>
</div>


</body>
</html>
