<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta charset="utf-8">    
<meta http-equiv="X-UA-Compatible" content="IE=edge">    
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
<style> 
body { font-family: Arial, sans-serif !important;font-size:13px;line-height:22px; }
body::-webkit-scrollbar-track { -webkit-box-shadow: inset 0 0 2px rgba(0,0,0,0.3);box-shadow: inset 0 0 2px rgba(0,0,0,0.3);background-color: #F5F5F5; }         
body::-webkit-scrollbar { width:6px;height: 6px;background-color: #F5F5F5; }        
body::-webkit-scrollbar-thumb { background-color: #000000; }
/* Highlight.js Code */
.code-badge-language { display:none; }
.code-badge { background: #555 !important;padding: 8px !important;z-index:2; }
.code-badge-copy-icon { font-size: 1.3em !important; }
pre { display: block;padding: 1em;margin: 0.5em 0;overflow-x: auto;border-radius: 5px;background-color:#1E1E1E; }
code { font-family: 'Consolas', 'Monaco', 'Andale Mono', 'monospace';font-size: 14px; }
.hljs-fade-in{animation:fading 5s; }@keyframes fading{0%{opacity:0}100%{opacity:100}}

.bg-lgt-red { background-color:#fff4f3; }
.bg-lgt-green { background-color:#f6ffeb; }
.f14 { font-size:14px; }
.f18 { font-size:18px; }
.mtop15p { margin-top:15px; }
.mtop25p { margin-top:25px; }
.mtop35p { margin-top:35px; }
.mbot15p { margin-bottom:15px; }
.mbot25p { margin-bottom:25px; }
.mbot35p { margin-bottom:35px; }
.grey-7 { color:#777; }
.grey-5 { color:#555; }
</style>
</head>
<body> 

<?php if(isset($_GET["page"])){ 
 if($_GET["page"]=='how-to-set-eureka-server-and-eureka-client-in-spring-boot-for-a-distributed-system'){
	include_once 'templates/java/springboot/eureka-server-client/index.php';
 } else if($_GET["page"]=='understanding-different-types-of-machine-learning-techniques') {
	include_once 'templates/ml/types-of-machine-learning-techniques/index.php'; 
 }
} ?>

<link href="https://unpkg.com/highlightjs-badge/highlightjs/styles/vs2015.css" rel="stylesheet">
<script src="https://unpkg.com/highlightjs-badge/highlightjs/highlight.pack.js"></script>
<script src="https://unpkg.com/highlightjs-badge/highlightjs-badge.min.js"></script>
<script type="text/javascript">
$(document).ready(function(){
 triggerHighlightJs();
});
function triggerHighlightJs(){
    setTimeout(function () {
        var pres = document.querySelectorAll("pre>code");
        for (var i = 0; i < pres.length; i++) {
            hljs.highlightBlock(pres[i]);
        }
        var options = {
            contentSelector: ".container-fluid",
            loadDelay:0,
            copyIconClass: "fa fa-copy",
            checkIconClass: "fa fa-check",
            onBeforeTextCopied: function(text, codeElement) {
              return text;
            }
        };
        window.highlightJsBadge(options);
    },1000);
}
</script>

</body> 
</html>
