<?php

// Allow from any origin
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    exit(0);
}


require_once './../vendor/autoload.php';

$htmlData = json_decode( file_get_contents('php://input'), true );	

$quoteBy = ''; if( array_key_exists("quoteBy", $htmlData) ){ $quoteBy = $htmlData["quoteBy"]; }
$quoteEmail = ''; if( array_key_exists("quoteEmail", $htmlData) ){ $quoteEmail = $htmlData["quoteEmail"]; }
$quotePhone = ''; if( array_key_exists("quotePhone", $htmlData) ){ $quotePhone = $htmlData["quotePhone"]; }
$quoteDesc = ''; if( array_key_exists("quoteDesc", $htmlData) ){ $quoteDesc = $htmlData["quoteDesc"]; }
// Create a new MPDF instance
$mpdf = new \Mpdf\Mpdf(['mode' => 'utf-8', 'format' => 'A4']);

// HTML content
$html = '
<!DOCTYPE html>
<html>
<head>
    <title>The Backyard Bar Customer Quotation</title>
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
    <h2 align="center">The Backyard Bar - Customer Enquiry</h2>
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

    <h4 align="center">DETAILS</h4>
    <div style="width:100%;">
     <div style="width:100%;float:left;">Message:</div>
     <div style="width:100%;float:left;padding:15px;border:1px solid #000;margin-top:5px;">'.$quoteDesc.'</div>
     </div>
</body>
</html>';

// Add HTML content to the PDF
$mpdf->WriteHTML($html);

// Output the PDF to the browser
// Output the PDF to the browser
// $mpdf->Output('output.pdf', 'I');

// Define the directory path for the output PDF file
$pdfDirectory = __DIR__ . '/../../uploads/quotations/';
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
$mail->setFrom('contact@thebackyardbarnc.com', 'The Backyard Bar - Customer Enquiry');
$mail->addBCC('contact@thebackyardbarnc.com', $quoteBy); // Add a recipient
$mail->addAddress($quoteEmail, $quoteBy);

try {
 $mail->addAttachment($pdfFilePath);

 // Content
 $mail->isHTML(true);
 $mail->Subject = $quoteBy.' - [The Backyard Bar] Customer Request Acknowledgement';
 $mail->Body    = '
 <!DOCTYPE html>
 <html lang="en">
 <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>[The Backyard Bar] Customer Request Acknowledgement</title>
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
     
     <p>We have received your request for an Enquiry. Thank you for considering our products/services.</p>
     
     <p>We are currently processing your request and will provide you with the reply as soon as possible.</p>
     
     <p>If you have any questions or need further assistance, please feel free to contact us.</p>
     
     <p>Best Regards,<br> The Backyard Bar</p>
 </body>
 </html>';

 // Send the email
 $mail->send();
 echo 'Email sent successfully';
} catch (Exception $e) {
    print_r($e);
   // echo "Email could not be sent. Mailer Error: {$mail->ErrorInfo}";
}