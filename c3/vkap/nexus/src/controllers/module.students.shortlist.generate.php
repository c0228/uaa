<?php
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json; charset=utf-8');
//
require_once './../core/app.database.php';
require_once './../core/app.initiator.php';

function BrandTitle() {
 $content = '<div style="float:left;border-bottom:1px solid #ccc;">
    <div align="center" style="width: 15%;float:left;">
    <img src="./../../assets/logo-flat.png" style="width: 80%; height: auto;padding:15px;" />
    </div>
    <div style="width: 85%;float:left;">
    <div style="padding-top:28px;line-height:22px;"><b>Our Office Address:</b>
    Flat No: 310, Third Floor, M N Reddy Complex, Beside Rajadhani Theater Lane, Above Central Bank of India, 
    Dilsukhnagar, Hyderabad - 500060 | Mobile: +91-9948390094 | kishorenellutla@vkabroadconsultancy.com</div>
    </div>
    </div>';
 return $content;
}

function StudentDetailCell($width, $label, $value){
 $content = '<div style="width:'.$width.';border:1px solid #ccc;float:left;">
  <div style="padding:5px;">
    <div style="font-size:11px;padding-bottom:2px;"><b>'.$label.':</b></div>
    <div style="font-size:13px;">'.$value.'</div>
  </div>
 </div>';
 return $content;
}

function TblHeaderCell($width, $label){
 $content = '<div style="width:'.$width.';border:1px solid #ccc;float:left;">
        <div style="padding:5px;">
            <div style="font-size:12px;padding-bottom:2px;"><b>'.$label.'</b></div>
        </div>
      </div>';
 return $content;
}

function TblBodyCell($width, $label){
    $content = '<div style="width:'.$width.';height:62px;border:1px solid #ccc;float:left;">
           <div style="padding:5px;">
               <div style="font-size:12px;padding-bottom:2px;"><b>'.$label.'</b></div>
           </div>
         </div>';
    return $content;
   }
   

// Load Composer's autoloader
require './../../vendor/autoload.php';

// Create an instance of the mPDF class with landscape orientation and fullpage mode
$mpdf = new \Mpdf\Mpdf(['mode' => 'utf-8', 'format' => 'A4', 'orientation' => 'L',]);

$encodedData = $_GET['data'];

$decodedData = base64_decode($encodedData);

$jsonObject = json_decode($decodedData, true);

$studentFullName = htmlspecialchars($jsonObject['fullName']);
$emailAddress = htmlspecialchars($jsonObject['email']);
$mobileNumber = htmlspecialchars($jsonObject['mobile']);
$studentPreferredCountry = htmlspecialchars($jsonObject['moveTo']);
$preferredMasterDetails = htmlspecialchars($jsonObject['prefMasterCourse']); 
$ssc = htmlspecialchars($jsonObject['ssc']); 
$inter = htmlspecialchars($jsonObject['inter']); 
$degree = htmlspecialchars($jsonObject['degree']); 
$empExp = htmlspecialchars($jsonObject['empExpYears']);
$empExpField = htmlspecialchars($jsonObject['empExpField']); 
$toefl_r = htmlspecialchars($jsonObject['toefl_r']);
$toefl_w = htmlspecialchars($jsonObject['toefl_w']); 
$toefl_l = htmlspecialchars($jsonObject['toefl_l']); 
$toefl_s = htmlspecialchars($jsonObject['toefl_s']);
$toeflScore = htmlspecialchars($jsonObject['toefl_o']); 
$ielts_r = htmlspecialchars($jsonObject['ielts_r']); 
$ielts_w = htmlspecialchars($jsonObject['ielts_w']);
$ielts_l = htmlspecialchars($jsonObject['ielts_l']); 
$ielts_s = htmlspecialchars($jsonObject['ielts_s']);
$ieltScore = htmlspecialchars($jsonObject['ielts_o']); 
$pte_r = htmlspecialchars($jsonObject['pte_r']);
$pte_w = htmlspecialchars($jsonObject['pte_w']);
$pte_l = htmlspecialchars($jsonObject['pte_l']);
$pte_s = htmlspecialchars($jsonObject['pte_s']);
$pteScore = htmlspecialchars($jsonObject['pte_o']); 
$duolingoScore = htmlspecialchars($jsonObject['duolingo']); 
$greScore = htmlspecialchars($jsonObject['gre']); 


// Define your HTML content
$htmlContent = '
<style>
@page { margin: 25px; }
</style>'.BrandTitle().
  '<div style="">
  <div style="width: 100%;margin-top:15px;float:left;">
    <!-- Row #1 -->
    <div style="width:100%;background-color:#ddefff;float:left;">'.
    StudentDetailCell('20%', 'Student Full Name', $studentFullName).
    StudentDetailCell('20%', 'Email Address', $emailAddress).
    StudentDetailCell('19%', 'Mobile Number', $mobileNumber).
    StudentDetailCell('16%', 'Student Preferred Country', $studentPreferredCountry).
    StudentDetailCell('24%', 'Preferred Master Details', $preferredMasterDetails).
    '</div>
    <!-- Row #2 -->
    <div style="width:100%;background-color:#ddefff;float:left;">'.
    StudentDetailCell('20%', 'SSC (%)', $ssc).
    StudentDetailCell('20%', 'Intermediate (%)', $inter).
    StudentDetailCell('19%', 'B.tech/Degree (%)', $degree).
    StudentDetailCell('16%', 'Employee Experience', $empExp.' years').
    StudentDetailCell('24%', 'Employee Experience (in Field)', $empExpField).
    '</div>
    <!-- Row #3 -->
    <div style="width:100%;background-color:#ddefff;float:left;">'.
    StudentDetailCell('20%', 'TOEFL Score', $toeflScore).
    StudentDetailCell('20%', 'IELTS Score', $ieltScore).
    StudentDetailCell('19%', 'IELTS Score', $pteScore).
    StudentDetailCell('16%', 'Duolingo Score', $duolingoScore).
    StudentDetailCell('24%', 'GRE Score', $greScore).
    '</div>
    
    <!-- Table -->
    <div style="margin-top:15px;width:100%;background-color:#eee;float:left;">'.
    TblHeaderCell('5%', 'S.NO').
    TblHeaderCell('20%', 'University Name').
    TblHeaderCell('14%', 'Campus').
    TblHeaderCell('25%', 'Course').
    TblHeaderCell('8%', 'Duration').
    TblHeaderCell('8%', 'Fees').
    TblHeaderCell('10%', 'Intake').
    TblHeaderCell('8.5%', 'Link').
    '</div>';
for($i=0;$i<10;$i++){
$htmlContent.='<div style="width:100%;background-color:#fff;float:left;">'.
    TblBodyCell('5%', ($i+1).'.').
    TblBodyCell('20%', 'University Name<br/>University Name<br/>University Name').
    TblBodyCell('14%', 'Campus').
    TblBodyCell('25%', 'Course').
    TblBodyCell('8%', 'Duration').
    TblBodyCell('8%', 'Fees').
    TblBodyCell('10%', 'Intake').
    TblBodyCell('8.5%', '<a href="https://www.google.co.in/">Link</a>').
    '</div>';
}
   
$htmlContent.='</div></div>';

$mpdf->SetWatermarkText('V K ABROAD CONSULTANCY');
$mpdf->showWatermarkText = true;
$mpdf->watermarkTextAlpha = 0.1; // Set watermark transparency

// Write the HTML content to the PDF
$mpdf->WriteHTML($htmlContent);
/*
$watermarkText = 'VK ABROAD CONSULTANCY';
// Add a lighter diagonal watermark manually
$mpdf->SetFont('Arial', 'B', 67); // Font size 50

// Set a light gray color for the watermark
$mpdf->SetTextColor(200, 200, 200); // Light gray color

// Add transparency (alpha value ranges from 0 (fully transparent) to 1 (fully opaque))
$mpdf->SetAlpha(0.2); // 20% opacity

$mpdf->StartTransform();
$mpdf->Rotate(30, 100, 0); // Rotate the watermark 45 degrees (adjust pivot point as needed)
$mpdf->Text(-70, 120, $watermarkText, 'C'); // Center the text (adjust position as needed)
$mpdf->StopTransform();
*/

// Output the generated PDF to the browser
$mpdf->Output('document.pdf', \Mpdf\Output\Destination::INLINE); // Display in the browser
// You can also use \Mpdf\Output\Destination::DOWNLOAD to force download
?>