<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
.toUpperCase { text-transform:uppercase; }
body { font-family: Arial, sans-serif !important;font-size:13px;line-height:22px; }
body::-webkit-scrollbar-track { -webkit-box-shadow: inset 0 0 2px rgba(0,0,0,0.3);box-shadow: inset 0 0 2px rgba(0,0,0,0.3);background-color: #F5F5F5; }         
body::-webkit-scrollbar { width:6px;height: 6px;background-color: #F5F5F5; }        
body::-webkit-scrollbar-thumb { background-color: #000000; }
.badge { font-family: Arial, sans-serif;font-size:12px; }
.f11 { font-size:11px; }
.f12 { font-size:12px; }
.f16 { font-size:16px; }
.f18 { font-size:18px; }
.f24 { font-size:24px; }
.mtop3p { margin-top:3px; }
.mRight3p { margin-right:3px; }
.mbottom3p { margin-bottom:3px; }
.mtop5p { margin-top:5px; }
.mtop15p { margin-top:15px; }
.mbot5p { margin-bottom:5px; }
.mbot12p { margin-bottom:12px; }
.mbot15p { margin-bottom:15px; }
.mLeft5p { margin-left:5px; }
.mRight5p { margin-right:5px; }
.mtop10p { margin-top:10px; }
.curpoint { cursor:pointer; }

.bg-outline-primary { background:none;border:1px solid #ccc;color:#ccc; }
.bg-grey-2 { background-color:#ccc; }
.white { color:#fff; }
.black { color:#000; }
.grey-1 { color:#eee; }
.grey-2 { color:#ccc; }
.grey-3 { color:#aaa; }
.grey-7 { color:#777; }
.grey-8 { color:#555; }
.yellow-5 { color:#ffc107; }
.pink-5 { color:#e99393; }

.green-border-3 { border-color:#baf9bc; }


/* resume ::: START */
.resume-profilepic { width:120px;height:120px;border-radius:50%; }
.resume-title { text-transform:uppercase;color:#ddd; }
.resume-socialMedia { display:flex; }
.resume-socialMedia-icon { flex-grow:1;padding:10px; }
.resume-header-main { text-transform:uppercase;color:#baf9bc; }
.resume-header-sub1 { text-transform:uppercase;background-color:#aaa;color:#282c34; }
.resume-card { border-color:#282c34; }
.resume-cardBody { background-color:#282c34;color:#999; }
.resume-overlay { height: 100%;width: 0;position: fixed;z-index: 3;top: 0;right: 0;background-color:#21252b;color:#999;
  overflow-x: hidden;transition: 0.6s;scroll-behavior: smooth; }
.resume-overlay { font-family: Arial, sans-serif !important;font-size:13px;line-height:22px; }
.resume-overlay::-webkit-scrollbar-track { -webkit-box-shadow: inset 0 0 2px rgba(0,0,0,0.3);box-shadow: inset 0 0 2px rgba(0,0,0,0.3);background-color: #F5F5F5; }         
.resume-overlay::-webkit-scrollbar { width:6px;height: 6px;background-color: #F5F5F5; }        
.resume-overlay::-webkit-scrollbar-thumb { background-color: #000000; }
/* resume ::: END */


/* icon ::: START */
.blog-logo-span {
 animation: shake 3s;
 animation-iteration-count: infinite;	
}
.blog-logo {
 box-shadow:1px 1px 1px 1px #ccc;color:#d5074d;margin-top:15px;
 border-radius:50%;border:2px solid #d5074d;padding-top:5px;padding-bottom:5px;padding-right:6.8px;padding-left:5px;font-size:22px;transform: rotate(-42deg);
}
@keyframes shake {
  0% { transform: translate(0.05px, 0.05px) rotate(0deg); }
  10% { transform: translate(-0.05px, -0.1px) rotate(-0.08deg); }
  20% { transform: translate(-0.15px, 0px) rotate(0.08deg); }
  30% { transform: translate(0.15px, 0.1px) rotate(0deg); }
  40% { transform: translate(0.05px, -0.05px) rotate(0.08deg); }
  50% { transform: translate(-0.05px, 0.1px) rotate(-0.08deg); }
  60% { transform: translate(-0.15px, 0.05px) rotate(0deg); }
  70% { transform: translate(0.15px, 0.05px) rotate(-0.08deg); }
  80% { transform: translate(-0.05px, -0.05px) rotate(0.08deg); }
  90% { transform: translate(0.05px, 0.1px) rotate(0deg); }
  100% { transform: translate(0.05px, -0.1px) rotate(-0.08deg); }
}
/* icon ::: END */

</style>
<script>
let PROJECT_URL='http://localhost/projects/uaa/other/nlnrao/';
$(document).ready(function(){
 /* Enable Tooltip ::: START */
 var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
 var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
 });
 /* Enable Tooltip ::: END */
 init();
});

let list1 = [{
		url: PROJECT_URL+'blog/how-to-set-eureka-server-and-eureka-client-in-spring-boot-for-a-distributed-system',
		tags:['Java','Spring Boot', 'Spring Cloud'],
		title:'How to set Eureka Server and Eureka Client in Spring Boot for a Distributed System?',
		desc:'Eureka Server and Eureka Client are components of Netflix Eureka, a service discovery framework designed for microservices architectures.',
		keywords:["Distributed Systems","Microservices","Service Discovery Framework","Netflix Eureka Server","Netflix Eureka Client"],
		createdOn:'03 January 2022',
		minRead: 5	
	},{
		url: '#',
		tags:['Java Design Patterns'],
		title:'An Example to understand the difference between <u>Abstract Factory</u> Design Pattern and <u>Factory Method</u> Design Pattern.',
		desc:'Dive into the world of design patterns with a clear example distinguishing Abstract Factory and Factory Method approaches',
		keywords:["Abstract Factory","Factory Method","SOLID's Principle - Open/Closed principle"],
		createdOn:'03 January 2022',
		minRead: 5	
	}];

let list2 = [{
		url: '#',
		tags:['Java','Spring Boot','React','NodeJS'],
		title:'Create a File upload Platform where files stores in local system using Spring Boot and React JS?',
		desc:'Explore step-by-step instructions and best practices to enhance your Application with robust file upload features, ensuring data security and user satisfaction.',
		keywords:["Image Dropper","File Progress Upload","Multipart Files","React Axios","Local File Storage System"],
		createdOn:'03 January 2022',
		minRead: 5	
	},{
		url: '#',
		tags:['Java Design Patterns'],
		title:'An Example to understand the difference between <u>Abstract Factory</u> Design Pattern and <u>Factory Method</u> Design Pattern.',
		desc:'Dive into the world of design patterns with a clear example distinguishing Abstract Factory and Factory Method approaches',
		keywords:["Abstract Factory","Factory Method","SOLID's Principle - Open/Closed principle"],
		createdOn:'03 January 2022',
		minRead: 5	
	}];
	
let list3 = [{
		url: '#',
		tags:['Java','Spring Boot', 'Spring Cloud'],
		title:'Building a Microservices Architecture with Spring Boot and Spring Cloud',
		desc:'Dive into the world of design patterns with a clear example distinguishing Abstract Factory and Factory Method approaches',
		keywords:["Abstract Factory","Factory Method","SOLID's Principle - Open/Closed principle"],
		createdOn:'03 January 2022',
		minRead: 5	
	},{
		url: '#',
		tags:['Java Design Patterns'],
		title:'An Example to understand the difference between <u>Abstract Factory</u> Design Pattern and <u>Factory Method</u> Design Pattern.',
		desc:'Dive into the world of design patterns with a clear example distinguishing Abstract Factory and Factory Method approaches',
		keywords:["Abstract Factory","Factory Method","SOLID's Principle - Open/Closed principle"],
		createdOn:'03 January 2022',
		minRead: 5	
	}];
	
let list4 = [{
		url: '#',
		tags:['Java','Spring Boot', 'Spring Cloud'],
		title:'Building a Microservices Architecture with Spring Boot and Spring Cloud',
		desc:'Dive into the world of design patterns with a clear example distinguishing Abstract Factory and Factory Method approaches',
		keywords:["Abstract Factory","Factory Method","SOLID's Principle - Open/Closed principle"],
		createdOn:'03 January 2022',
		minRead: 5	
	},{
		url: '#',
		tags:['Java Design Patterns'],
		title:'An Example to understand the difference between <u>Abstract Factory</u> Design Pattern and <u>Factory Method</u> Design Pattern.',
		desc:'Dive into the world of design patterns with a clear example distinguishing Abstract Factory and Factory Method approaches',
		keywords:["Abstract Factory","Factory Method","SOLID's Principle - Open/Closed principle"],
		createdOn:'03 January 2022',
		minRead: 5	
	}];

function init(){
 var currentUrlWithFragment = window.location.href;
 var fragment = window.location.hash.substring(1);
 console.log("fragment: "+fragment);
 if (fragment){ 
   window.location.hash = '#resume';
   resume('open'); 
 }
 load_blog_list('bloglist1',list1, {
	colors:['success','primary','success','primary'],
	bgColors:['#f6fff7','#eaf9ff','#f6fff7','#eaf9ff']
 });
 load_blog_list('bloglist2',list2, {
	colors:['primary','success','primary','success'],
	bgColors:['#eaf9ff','#f6fff7','#eaf9ff','#f6fff7']
 });
 load_blog_list('bloglist3',list3, {
	colors:['success','primary','success','primary'],
	bgColors:['#f6fff7','#eaf9ff','#f6fff7','#eaf9ff']
 });
 load_blog_list('bloglist4',list2, {
	colors:['primary','success','primary','success'],
	bgColors:['#eaf9ff','#f6fff7','#eaf9ff','#f6fff7']
 });
 load_blog_list('bloglist5',list1, {
	colors:['success','primary','success','primary'],
	bgColors:['#f6fff7','#eaf9ff','#f6fff7','#eaf9ff']
 });
 
 load_blogKeywords('blogKeywords');
}

function resume(status) { 
 let pageTitle = 'NellutlaLNRao | My Tech';
 if(status ==='open'){
	pageTitle = "NellutlaLNRao | My Resume";
 }
 document.title = pageTitle;
 document.getElementById("resume").style.width = (status ==='open')?'100%':'0%';
 document.body.style.overflow = (status ==='open')?'hidden':'scroll';
}

function reDirect(url){
 window.location.href=url;
}

function load_blog_list(id,list, pattern){
 let content='<div>';
 for(let i=0;i<list?.length;i++){
	const url = list[i]?.url;
	const tags = list[i]?.tags;
	const desc = list[i]?.desc;
	content+='<div class="blog-list-item" style="margin-bottom:15px;padding:15px;border-radius:8px;border:1px solid #ccc;background-color:'
	+pattern?.bgColors[i%4]+';" onClick="javascript:reDirect(\''+url+'\');">';
	for(let j=0;j<tags?.length;j++){
	content+='<span class="badge bg-'+pattern?.colors[j]+'" style="margin-right:5px;">'+tags[j]+'</span>';
	}
	content+='<div style="margin-top:12px;">';
	content+='<span style="font-size:16px;"><b>'+list[i]?.title+'</b></span>';
	content+='</div>';
	
	content+='<div class="grey-8" style="margin-top:8px">';
	content+=(desc?.length>145)?(desc?.substring(0, Math.min(145, desc?.length))+'...'):desc;
	content+='</div>';
	
	content+='<div style="margin-top:8px;">';
	for(let j=0;j<list[i]?.keywords?.length;j++){
	content+='<span class="badge bg-grey-2 grey-8 mtop3p mbottom3p mRight3p"># '+list[i]?.keywords?.[j]+'</span>';	
	}
	content+='</div>';
	
	content+='<div style="font-size:12px;color:#777;margin-top:10px;">';
	content+='<i class="fa fa-file-text" style="margin-right:3px;" aria-hidden="true"></i> Posted on '+list[i]?.createdOn;
	content+='<span class="pull-right"><i class="fa fa-dot-circle-o" style="margin-right:3px;" aria-hidden="true"></i> '+list[i]?.minRead+' min read</span>';
	content+='</div>';
	
	content+='</div>';
 }
 content+='</div>';
 document.getElementById(id).innerHTML=content;
}
</script>
<style>
.blog-list-item { cursor:pointer; }
.blog-list-item:hover { background-color:#fff4f3 !important; }
</style>
</head>
<body>
 
<!-- -->
<!--<nav class="navbar navbar-expand-sm">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
		<div class="blog-logo-span"><i class="fa fa-rocket blog-logo" aria-hidden="true"></i></div>
	</a>
  </div>
</nav>-->
<!-- -->
<script type="text/javascript">
$(document).ready(function(){
 const data=[{
	 "url":"blog/understanding-different-types-of-machine-learning-techniques",
	 "title":"Understanding different types of Machine Learning Techniques",
	 "createdOn": "Mar 30, 2023",
	 "minRead": 5
 },{
	 "title":"Let's see the features & updates of Java from version 1.0 to 1.21",
	 "createdOn": "Mar 30, 2023",
	 "minRead": 5
 },{
	 "title":"Databases Scaling : Horizontally and Vertically to manage the data from One User to Billion Users",
	 "createdOn": "Mar 30, 2023",
	 "minRead": 5
 },{
	 "title":"Organize the content Moderators",
	 "createdOn": "Mar 30, 2023",
	 "minRead": 5
 },{
	 "title":"Organize the content Moderators",
	 "createdOn": "Mar 30, 2023",
	 "minRead": 5
 },{
	 "title":"Organize the content Moderators",
	 "createdOn": "Mar 30, 2023",
	 "minRead": 5
 },{
	 "title":"Organize the content Moderators",
	 "createdOn": "Mar 30, 2023",
	 "minRead": 5
 },{
	 "title":"Organize the content Moderators",
	 "createdOn": "Mar 30, 2023",
	 "minRead": 5
 },{
	 "title":"Organize the content Moderators",
	 "createdOn": "Mar 30, 2023",
	 "minRead": 5
 },{
	 "title":"Organize the content Moderators",
	 "createdOn": "Mar 30, 2023",
	 "minRead": 5
 }];
 list_organize('organizeList',data);
});
function list_organize(id,data){
 let content='';
 for(let index=0;index<data.length;index++){
	 let url = data[index]?.url;
	 let formattedNumber = (index>8)?(index+1):'0'+(index+1);
	 content+='<div class="row" style="padding-bottom:20px;">';
	 content+='<div align="center" class="col-2" style="font-size:26px;color:#ddd;padding-top:5px;"><b>'+formattedNumber+'</b></div>';
	 content+='<div class="col-10">';
	 content+='<div style="cursor:pointer;" onClick="javascript:reDirect(\''+url+'\');"><span class="f16"><b>'+data[index]?.title+'</b></span></div>';
	 content+='<div style="color:#aaa;">';
	 content+='<i class="fa fa-file-text" style="margin-right:3px;" aria-hidden="true"></i> '+data[index]?.createdOn;
	 content+='<span class="pull-right">';
	 content+='<i class="fa fa-dot-circle-o" style="margin-right:3px;" aria-hidden="true"></i> '+data[index]?.minRead+' min read';
	 content+='</span>';
	 content+='</div>';
	 content+='</div>';
	 content+='</div>';
 }  
 document.getElementById(id).innerHTML=content;
}
</script>

<?php include_once 'templates/header.php'; ?>

<div class="container-fluid">

<div class="row">
<div class="col-md-9">
<!-- -->
<div class="row">
<div class="col-md-12 mtop15p"><span class="f18"><b>Featured Technologies</b><hr/></span></div><!--/.col-md-12 -->
</div><!--/.row -->
<div class="row">
<div class="col-md-4 mtop15p"></div>
<div class="col-md-4 mtop15p"></div>
<div id="organizeList" class="col-md-4 mtop15p">
</div>
</div><!--/.row -->

<div class="row">
<div class="col-sm-4">
<!-- -->
<div style="padding-top:15px;padding-bottom:15px;">
<div style="border-left:8px solid red;padding-left:8px;">
<div style="font-size:16px;color:red;padding-top:4px;padding-bottom:4px;"><b>TREND OF DISTRIBUTION SYSTEMS</b></div>
</div>
<div style="padding-left:9px;">
<div style="font-size:15px;padding-top:8px;padding-left:8px;">
<b>Let's see how to build a RESTFUL API with a Microservice Architecture using Java and Spring Stack Components.</b>
</div>
</div>
</div>
<!-- -->
</div><!--/.col-sm-4 -->
</div><!--/.row -->

<div class="row">
 <div class="col-md-12" style="margin-top:15px;">
  <span style="font-size:18px;"><b>Trending Frontend Development Articles</b></span>
  <button class="btn btn-outline-dark btn-sm pull-right f12"><b>VIEW MORE POSTS
  <i class="fa fa-arrow-right" style="margin-left:5px;"></i>
  </b></button>
  <hr/>
 </div>
</div>
<div class="row">
 <div id="bloglist1" class="col-md-6"></div><!--/.col-sm-6 -->
 <div id="bloglist2" class="col-md-6"></div><!--/.col-sm-6 -->
</div>

<div class="row">
 <div class="col-md-12" style="margin-top:15px;">
 <span style="font-size:18px;"><b>THIS MONTH TRENDING</b></span>
 <button class="btn btn-outline-dark btn-sm pull-right f12"><b>VIEW MORE POSTS
 <i class="fa fa-arrow-right" style="margin-left:5px;"></i>
 </b></button>
 <hr/>
 </div>
</div>
<div class="row">
 <div id="bloglist3" class="col-md-4"></div><!--/.col-sm-4 -->
 <div id="bloglist4" class="col-md-4"></div><!--/.col-sm-4 -->
 <div id="bloglist5" class="col-md-4"></div><!--/.col-sm-4 -->
</div>
<!-- -->
</div>
<div class="col-md-3">
<!-- -->
<?php include_once 'templates/resume/profileCard-lgt.php'; ?>
<?php include_once 'templates/resume/about-blog.php'; ?>

<!-- -->
</div><!--/.col-sm-4 -->
</div><!--/.row -->
</div><!--/.container-fluid -->

<div id="resume" class="resume-overlay">
 <!-- -->
 <div class="container-fluid mt-3" data-bs-spy="scroll" data-bs-target="#resume-info" data-bs-offset="50" style="position:relative;">

  <div class="row">
    <div class="col-sm-3 col-xxl-2 col-xl-3 px-3">
	 <?php include_once 'templates/resume/left.php'; ?>
    </div>
    <div class="col-sm-4 col-xxl-5 col-xl-4 px-3">
      <?php include_once 'templates/resume/techStack.php'; ?>
    </div>
	<div class="col-sm-4 col-xxl-5 col-xl-5 px-3">
	  <?php include_once 'templates/resume/proExp.php'; ?>
	</div>
  </div>
</div>
 <!-- -->
</div>

</body>
</html>
