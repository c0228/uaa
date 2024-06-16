<?php

// Set headers to allow CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");

require_once './../vendor/autoload.php';

$htmlData = json_decode( file_get_contents('php://input'), true );	

$quoteBy = ''; if( array_key_exists("quoteBy", $htmlData) ){ $quoteBy = $htmlData["quoteBy"]; }
$quoteEmail = ''; if( array_key_exists("quoteEmail", $htmlData) ){ $quoteEmail = $htmlData["quoteEmail"]; }
$quotePhone = ''; if( array_key_exists("quotePhone", $htmlData) ){ $quotePhone = $htmlData["quotePhone"]; }
$detTitle = ''; if( array_key_exists("detTitle", $htmlData) ){ $detTitle = $htmlData["detTitle"]; }
$detWeight = ''; if( array_key_exists("detWeight", $htmlData) ){ $detWeight = $htmlData["detWeight"]; }
$detThickness = ''; if( array_key_exists("detThickness", $htmlData) ){ $detThickness = $htmlData["detThickness"]; }
$detControlOptions = ''; if( array_key_exists("detControlOptions", $htmlData) ){ $detControlOptions = $htmlData["detControlOptions"]; }
$detMount = ''; if( array_key_exists("detMount", $htmlData) ){ $detMount = $htmlData["detMount"]; }
$detQuantity = ''; if( array_key_exists("detQuantity", $htmlData) ){ $detQuantity = $htmlData["detQuantity"]; }
$detRoom = ''; if( array_key_exists("detRoom", $htmlData) ){ $detRoom = $htmlData["detRoom"]; }
$detRoomWidth = ''; if( array_key_exists("detRoomWidth", $htmlData) ){ $detRoomWidth = $htmlData["detRoomWidth"]; }
$detRoomLength = ''; if( array_key_exists("detRoomLength", $htmlData) ){ $detRoomLength = $htmlData["detRoomLength"]; }
$ccPosition = ''; if( array_key_exists("ccPosition", $htmlData) ){ $ccPosition = $htmlData["ccPosition"]; }
$ccMaterial = ''; if( array_key_exists("ccMaterial", $htmlData) ){ $ccMaterial = $htmlData["ccMaterial"]; }
$ccLength = ''; if( array_key_exists("ccLength", $htmlData) ){ $ccLength = $htmlData["ccLength"]; }
$withCassette = ''; if( array_key_exists("withCassette", $htmlData) ){ $withCassette = $htmlData["withCassette"]; }
$coveredWithFabric = ''; if( array_key_exists("coveredWithFabric", $htmlData) ){ $coveredWithFabric = $htmlData["coveredWithFabric"]; }
$isFabric='No'; if(count($coveredWithFabric)>0){ $isFabric='Yes'; }
$compColor = ''; if( array_key_exists("compColor", $htmlData) ){ $compColor = $htmlData["compColor"]; }
$remoteMotorized = ''; if( array_key_exists("remoteMotorized", $htmlData) ){ $remoteMotorized = $htmlData["remoteMotorized"]; }
$motorType = ''; if( array_key_exists("motorType", $htmlData) ){ $motorType = $htmlData["motorType"]; }
$multiChannel = ''; if( array_key_exists("multiChannel", $htmlData) ){ $multiChannel = $htmlData["multiChannel"]; }
$ezLift = ''; if( array_key_exists("ezLift", $htmlData) ){ $ezLift = $htmlData["ezLift"]; }
$rollDirection = ''; if( array_key_exists("rollDirection", $htmlData) ){ $rollDirection = $htmlData["rollDirection"]; }

// Create a new MPDF instance
$mpdf = new \Mpdf\Mpdf(['mode' => 'utf-8', 'format' => 'A4']);

// HTML content
$html = '
<!DOCTYPE html>
<html>
<head>
    <title>RollEasyBlinds Customer Quotation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            font-size: 14px;
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
    <h2 align="center">RollEasyBlinds.com - Customer Requested Quotation</h2>
    <div align="right" style="margin-bottom:5px;"><b>Date:</b>'.date("d/m/Y").'</div>
    <table style="width:100%;padding:15px;border:1px solid #000;margin-bottom:5px;">
        <tbody>
            <tr>
                <td>Name:</td>
                <td>'.$quoteBy.'</td>
                <td>Email:</td>
                <td>'.$quoteEmail.'</td>
            </tr>
            <tr>
                <td>Phone:</td>
                <td>'.$quotePhone.'</td>
            </tr>
        </tbody>
    </table>

    <h4 align="center">BASIC DETAILS</h4>
    <div style="width:100%;">
     <div style="width:10%;float:left;">Title:</div>
     <div style="width:70%;float:left;">'.$detTitle.'</div>
     <div style="width:10%;float:left;">Quantity:</div>
     <div style="width:10%;float:left;">'.$detQuantity.'</div>
     </div>
     <div style="width:100%;padding-top:10px;">
      <div style="width:10%;float:left;">Weight:</div>
      <div style="width:10%;float:left;">'.$detWeight.'</div>
      <div style="width:12%;float:left;">Thickness:</div>
      <div style="width:10%;float:left;">'.$detThickness.'</div>
      <div style="width:18%;float:left;">Control Options:</div>
      <div style="width:20%;float:left;">'.$detControlOptions.'</div>
      <div style="width:10%;float:left;">Mount:</div>
      <div style="width:10%;float:left;">'.$detMount.'</div>
     </div>
     <hr/>
     <div style="width:100%;padding-top:10px;">
      <div style="width:10%;float:left;">Room:</div>
      <div style="width:30%;float:left;">'.$detRoom.'</div>
      <div style="width:10%;float:left;">Width:</div>
      <div style="width:30%;float:left;">'.$detRoomWidth.'</div>
      <div style="width:10%;float:left;">Length:</div>
      <div style="width:10%;float:left;">'.$detRoomLength.'</div>
     </div>
     <hr/>
     <h4 align="center">CHAIN CONTROL</h4>
     <div style="width:100%;padding-top:10px;">
      <div style="width:10%;float:left;">Position:</div>
      <div style="width:30%;float:left;">'.$ccPosition.'</div>
      <div style="width:10%;float:left;">Material:</div>
      <div style="width:25%;float:left;">'.$ccMaterial.'</div>
      <div style="width:15%;float:left;">Length (inch):</div>
      <div style="width:10%;float:left;">'.$ccLength.'</div>
     </div>
     <hr/>
     <h4 align="center">CASSETTE OPTION</h4>
     <div style="width:100%;padding-top:10px;">
      <div style="width:16%;float:left;">With Cassette:</div>
      <div style="width:30%;float:left;">'.$withCassette.'</div>
      <div style="width:25%;float:left;">Covered with Fabric:</div>
      <div style="width:10%;float:left;">'.$isFabric.'</div>
     </div>
     <hr/>
     <h4 align="center">COMPONENT</h4>
     <div style="width:100%;padding-top:10px;">
      <div style="width:10%;float:left;">Color:</div>
      <div style="width:30%;float:left;">'.$compColor.'</div>
     </div>
     <hr/>
     <h4 align="center">REMOTE MOTORIZED</h4>
     <div style="width:100%;padding-top:10px;">
      <div style="width:20%;float:left;">Motor Position:</div>
      <div style="width:10%;float:left;">'.$remoteMotorized.'</div>
      <div style="width:20%;float:left;">Motor Type:</div>
      <div style="width:10%;float:left;">'.$motorType.'</div>
      <div style="width:20%;float:left;">Multi Channel:</div>
      <div style="width:10%;float:left;">'.$multiChannel.'</div>
     </div>
     <hr/>
     <h4 align="center">CORDLESS</h4>
     <div style="width:100%;padding-top:10px;">
      <div style="width:20%;float:left;">EZ Lift:</div>
      <div style="width:70%;float:left;">'.$ezLift.'</div>
     </div>
     <hr/>
     <h4 align="center">ROLL DIRECTION</h4>
     <div style="width:100%;padding-top:10px;">
      <div style="width:20%;float:left;">Roll Direction:</div>
      <div style="width:70%;float:left;">'.$rollDirection.'</div>
     </div>
     <hr/>
</body>
</html>';

// Add HTML content to the PDF
$mpdf->WriteHTML($html);

// Output the PDF to the browser
// Output the PDF to the browser
// $mpdf->Output('output.pdf', 'I');

// Define the directory path for the output PDF file
$pdfDirectory = __DIR__ . '/../data/quotations/';
$pdfFilePath = $pdfDirectory . date('YmdHis').'-'.$quoteBy.'.pdf';

// Create the directory if it does not exist
if (!is_dir($pdfDirectory)) {
    mkdir($pdfDirectory, 0777, true); // Recursive directory creation
}

// Save the PDF to the local file system
$mpdf->Output($pdfFilePath, 'F');
// F - To save the File into Directory
// I - Inline View in the browser

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
// Mail it as Attachment
// Create a new PHPMailer instance
$mail = new PHPMailer(true);

//Recipients
$mail->setFrom('orders@rolleasyblinds.com', 'RollEasyBlinds.com Orders');
$mail->addBCC('rolleasyblinds@gmail.com', $quoteBy); // Add a recipient
$mail->addBCC('orders@rolleasyblinds.com', $quoteBy); // Add a recipient
$mail->addAddress($quoteEmail, $quoteBy);

try {
 $mail->addAttachment($pdfFilePath);

 // Content
 $mail->isHTML(true);
 $mail->Subject = $quoteBy.' - [RollEasyBlinds] Customer Request Quotation Acknowledgement';
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
     <h1>Dear '.$quoteBy.',</h1>
     
     <p>We have received your request for a quotation. Thank you for considering our products/services.</p>
     
     <p>We are currently processing your request and will provide you with the quotation as soon as possible.</p>
     
     <p>If you have any questions or need further assistance, please feel free to contact us.</p>
     
     <p>Best Regards,<br> RollEasyBlinds.com</p>
 </body>
 </html>';

 // Send the email
 $mail->send();
 echo 'Email sent successfully';
} catch (Exception $e) {
    print_r($e);
   // echo "Email could not be sent. Mailer Error: {$mail->ErrorInfo}";
}