<?php
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json; charset=utf-8');
//
require_once './../core/app.database.php';
require_once './../core/app.initiator.php';
require_once './../repo/data.university.account.php';

function BrandTitle() {
 $content = '<div style="float:left;border-bottom:1px solid #ccc;">
    <div align="center" style="width: 15%;float:left;">
    <img src="./../../assets/logo-flat.png" style="width: 80%; height: auto;padding:15px;" />
    </div>
    <div style="width: 85%;float:left;">
    <div style="padding-top:28px;line-height:22px;"><b>Our Office Address:</b>
    Flat No: 310, Third Floor, M N Reddy Complex, Beside Rajadhani Theater Lane, Above Central Bank of India, 
    Dilsukhnagar, Hyderabad - 500060 | <b>Mobile:</b> +91-9948390094 | <b>Email:</b> kishorenellutla@vkabroadconsultancy.com</div>
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
 $content = '<div style="width:'.$width.';background-color:#eee;border:1px solid #ccc;float:left;">
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

$htmlData = json_decode( file_get_contents('php://input'), true );
$senderName = ''; if( array_key_exists("senderName", $htmlData) ){ $senderName = $htmlData["senderName"];   }
$senderEmail = ''; if( array_key_exists("senderEmail", $htmlData) ){ $senderEmail = $htmlData["senderEmail"];   }
$studentFullName = ''; if( array_key_exists("fullName", $htmlData) ){ $studentFullName = $htmlData["fullName"];   }
$emailAddress = ''; if( array_key_exists("email", $htmlData) ){ $emailAddress = $htmlData["email"];   }
$mobileNumber = ''; if( array_key_exists("mobile", $htmlData) ){ $mobileNumber = $htmlData["mobile"];   }
$studentPreferredCountry = ''; if( array_key_exists("moveTo", $htmlData) ){ $studentPreferredCountry = $htmlData["moveTo"];   }
$preferredMasterDetails = ''; if( array_key_exists("prefMasterCourse", $htmlData) ){ $preferredMasterDetails = $htmlData["prefMasterCourse"];   }
$ssc = ''; if( array_key_exists("ssc", $htmlData) ){ $ssc = $htmlData["ssc"];   }
$inter = ''; if( array_key_exists("inter", $htmlData) ){ $inter = $htmlData["inter"];   }
$degree = ''; if( array_key_exists("degree", $htmlData) ){ $degree = $htmlData["degree"];   }
$empExp = ''; if( array_key_exists("empExpYears", $htmlData) ){ $empExp = $htmlData["empExpYears"];   }

$empExpField = ''; if( array_key_exists("empExpField", $htmlData) ){ $empExpField = $htmlData["empExpField"];   }

$toefl_r = ''; if( array_key_exists("toefl_r", $htmlData) ){ $toefl_r = $htmlData["toefl_r"];   }
$toefl_w = ''; if( array_key_exists("toefl_w", $htmlData) ){ $toefl_w = $htmlData["toefl_w"];   }
$toefl_l = ''; if( array_key_exists("toefl_l", $htmlData) ){ $toefl_l = $htmlData["toefl_l"];   }
$toefl_s =  ''; if( array_key_exists("toefl_s", $htmlData) ){ $toefl_s = $htmlData["toefl_s"];   }
$toeflScore =  ''; if( array_key_exists("toefl_o", $htmlData) ){ $toeflScore = $htmlData["toefl_o"];   }
$ielts_r =  ''; if( array_key_exists("ielts_r", $htmlData) ){ $ielts_r = $htmlData["ielts_r"];   }
$ielts_w =  ''; if( array_key_exists("ielts_w", $htmlData) ){ $ielts_w = $htmlData["ielts_w"];   }
$ielts_l =  ''; if( array_key_exists("ielts_l", $htmlData) ){ $ielts_l = $htmlData["ielts_l"];   }
$ielts_s =  ''; if( array_key_exists("ielts_s", $htmlData) ){ $ielts_s = $htmlData["ielts_s"];   }
$ieltScore =  ''; if( array_key_exists("ielts_o", $htmlData) ){ $ieltScore = $htmlData["ielts_o"];   }
$pte_r =  ''; if( array_key_exists("pte_r", $htmlData) ){ $pte_r = $htmlData["pte_r"];   }
$pte_w =  ''; if( array_key_exists("pte_w", $htmlData) ){ $pte_w = $htmlData["pte_w"];   }
$pte_l =  ''; if( array_key_exists("pte_l", $htmlData) ){ $pte_l = $htmlData["pte_l"];   }
$pte_s =  ''; if( array_key_exists("pte_s", $htmlData) ){ $pte_s = $htmlData["pte_s"];   }
$pteScore =  ''; if( array_key_exists("pte_o", $htmlData) ){ $pteScore = $htmlData["pte_o"];   }

$duolingoScore =  ''; if( array_key_exists("duolingo", $htmlData) ){ $duolingoScore = $htmlData["duolingo"];   }
$greScore =  ''; if( array_key_exists("gre", $htmlData) ){ $greScore = $htmlData["gre"];   }

$scoreQuery = $universityAccountModule->query_view_universityListByScore($toeflScore, $toefl_r, $toefl_l, $toefl_w, $toefl_s, 
    $pteScore, $pte_r, $pte_l, $pte_w, $pte_s, $ieltScore, $ielts_r, $ielts_l, $ielts_w, $ielts_s, $duolingoScore, $greScore, $degree,
  '','','');

$data = json_decode( $database->getJSONData($scoreQuery) );
// Define your HTML content
$htmlContent = '
<style>
@page { margin: 25px; }
</style>'.BrandTitle().
  '<div style="">
  <div align="center" style="margin-top:15px;font-size:16px;"><b>STUDENT DETAILS</b></div>
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
    <div align="center" style="margin-top:15px;font-size:18px;"><b>UNIVERSITIES SHORTLIST</b></div>
    <div style="margin-top:15px;width:100%;float:left;">'.
    TblHeaderCell('5%', 'S.NO').
    TblHeaderCell('10%', 'University').
    TblHeaderCell('9%', 'Campus').
    TblHeaderCell('12%', 'Course').
    TblHeaderCell('8%', 'Duration').
    TblHeaderCell('8%', 'Fees').
    TblHeaderCell('8%', 'App Fees').
    TblHeaderCell('8%', 'Expenses').
    TblHeaderCell('8%', 'Init Deposit').
    TblHeaderCell('8%', 'Intake').
    TblHeaderCell('8%', 'Deadline').
    TblHeaderCell('5%', 'Link').
    '</div>';
  if(count($data)>0){
    for($i=0;$i<count($data);$i++){
      $htmlContent.='<div style="width:100%;background-color:#fff;float:left;">'.
          TblBodyCell('5%', ($i+1).'.').
          TblBodyCell('10%', $data[$i]->{"university"}).
          TblBodyCell('9%', $data[$i]->{"location"}.",".$data[$i]->{"country"}).
          TblBodyCell('12%',  $data[$i]->{"course"}).
          TblBodyCell('8%',  $data[$i]->{"duration"}).
          TblBodyCell('8%', $data[$i]->{"fees"}).
          TblBodyCell('8%', $data[$i]->{"appFees"}).
          TblBodyCell('8%', $data[$i]->{"leavingExpenses"}).
          TblBodyCell('8%', $data[$i]->{"initDeposit"}).
          TblBodyCell('8%', $data[$i]->{"intake"}).
          TblBodyCell('8%', $data[$i]->{"deadline"}).
          TblBodyCell('5%', '<a href="'.$data[$i]->{"courseURL"}.'">Visit</a>').
          '</div>';
      }
  }
   
$htmlContent.= '</div></div>';

$mpdf->SetWatermarkText('V K ABROAD CONSULTANCY');
$mpdf->showWatermarkText = true;
$mpdf->watermarkTextAlpha = 0.1; // Set watermark transparency

// Write the HTML content to the PDF
$mpdf->WriteHTML($htmlContent);

// Define the directory path for the output PDF file
$pdfDirectory = __DIR__ . '/../../data/quotations/';
$pdfFileName =  date('YmdHis').'-'.$studentFullName.'.pdf';
$pdfFilePath = $pdfDirectory.$pdfFileName;

// Create the directory if it does not exist
if (!is_dir($pdfDirectory)) {
    mkdir($pdfDirectory, 0777, true); // Recursive directory creation
}

// Save the PDF to the local file system
$mpdf->Output($pdfFilePath, 'F');
// $mpdf->Output($pdfFilePath, \Mpdf\Output\Destination::INLINE); // Display in the browser
// F - To save the File into Directory
// I - Inline View in the browser

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
// Mail it as Attachment
// Create a new PHPMailer instance
$mail = new PHPMailer(true);

//Recipients
$mail->setFrom('admissions@vkabroadconsultancy.com', 'VK Abroad Consultancy');
$mail->addCC('kishorenellutla524@gmail.com', 'Kishore Nellutla'); // Add a recipient
if(strlen($senderName)>0 && strlen($senderEmail)>0){
 $mail->addCC($senderEmail, $senderName); // Add a recipient
}
$mail->addAddress($emailAddress, $studentFullName);

try {
 $mail->addAttachment($pdfFilePath);

 // Content
 $mail->isHTML(true);
 $mail->Subject = $studentFullName.' - [VK Abroad Consultancy] University Shortlist';
 $mail->Body    = '
 <!DOCTYPE html>
 <html lang="en">
 <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Acknowledgement: Request for Quotation</title>
     <style>
         body {
             font-family: Arial, sans-serif;
             font-size: 14px;
             line-height: 1.6;
             color: #333;
         }
         h1 {
             color: #333;
         }
         p {
             color: #666;
         }
     </style>
 </head>
 <body>
    <div align="center" style="margin-bottom:15px;">
      <img src="http://vkabroadconsultancy.com/assets/img/logo.png" style="width:180px;height:auto;"/>
    </div>
    <h4>Dear '.$studentFullName.',</h4>
     
     <div>I hope this email finds you well! We&#39;re thrilled to share your shortlisted study abroad options based on
your interests and preferences.</div><br/><br/>

    <div><b>Next Steps:</b></div>
    <div>
      <ol>
        <li>Review the shortlisted options carefully.</li>
        <li>Let us know your preferred university and program.</li>
        <li>We&#39;ll guide you through the application process.</li>
      </ol>
    </div><br/><br/>

    <div>Please reply to this email or schedule a call with us to discuss further.</div><br/><br/>

    <div style="margin-bottom:5px;">Thanks and Regards,</div>
    <div><b>Kishore Nellutla</b></div>
    <div><i>Managing Director</i></div>
    <div><b>Mobile:</b> +91-9948390094</div>
 </body>
 </html>';

 // Send the email
 $mail->send();
 echo 'EMAIL_SUCCESS';
} catch (Exception $e) {
    echo 'EMAIL_FAILED';
}
?>